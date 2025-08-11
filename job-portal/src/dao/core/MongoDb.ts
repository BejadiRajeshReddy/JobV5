import { MongoClient, Db, Collection, Filter, Document } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.MONGO_DB || 'mydb';

class MongoDb {
    private client: MongoClient;
    private db: Db | null = null;

    constructor() {
        this.client = new MongoClient(uri);
    }

    // Lazy connect — only connects once
    private async init(): Promise<Db> {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db(dbName);
            console.log(`✅ MongoDB connected: ${dbName}`);
        }
        return this.db;
    }

    private async getCollection<T extends Document>(name: string): Promise<Collection<T>> {
        const db = await this.init();
        return db.collection<T>(name);
    }

    async insertOne<T extends Document>(collection: string, data: T) {
        const col = await this.getCollection<T>(collection);
        // @ts-ignore
        return col.insertOne(data);
    }

    async findOne<T extends Document>(collection: string, filter: Filter<T>) {
        const col = await this.getCollection<T>(collection);
        return col.findOne(filter);
    }

    async findMany<T extends Document>(collection: string, filter: Filter<T> = {}) {
        const col = await this.getCollection<T>(collection);
        return col.find(filter).toArray();
    }

    async updateOne<T extends Document>(collection: string, filter: Filter<T>, update: Partial<T>) {
        const col = await this.getCollection<T>(collection);
        return col.updateOne(filter, { $set: update });
    }

    async deleteOne<T extends Document>(collection: string, filter: Filter<T>) {
        const col = await this.getCollection<T>(collection);
        return col.deleteOne(filter);
    }
}
export const mongoDb = new MongoDb();