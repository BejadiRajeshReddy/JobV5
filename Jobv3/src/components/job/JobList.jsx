import React from "react";
import JobCard from "./JobCard";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: {
      name: "Facebook",
      logo: "/assets/facebook.svg",
      description:
        "Facebook is a social media and technology company that connects billions of people worldwide.",
      employees: "10,000+",
      industry: "Technology",
      website: "https://facebook.com",
    },
    location: "Hyderabad, India",
    salary: {
      min: 250000,
      max: 300000,
      currency: "INR",
    },
    type: "full-time",
    postedAt: "2023-10-18T10:00:00Z",
    deadline: "2023-11-18T10:00:00Z",
    posted: "8 days ago",
    experience: "1-3 years",
    description:
      "We are looking for a skilled frontend developer to join our team. You will be responsible for building user interfaces using React. The ideal candidate should have strong experience with modern JavaScript frameworks and a passion for creating exceptional user experiences.",
    responsibilities: [
      "Develop and maintain responsive web applications using React",
      "Collaborate with designers to implement UI/UX designs",
      "Write clean, efficient, and reusable code",
      "Optimize applications for maximum performance",
      "Participate in code reviews and team discussions",
    ],

    requirements: [
      "1-3 years of experience in frontend development",
      "Strong proficiency in React, JavaScript, and TypeScript",
      "Experience with modern frontend tools and build systems",
      "Knowledge of responsive design and cross-browser compatibility",
      "Good understanding of web performance optimization",
    ],

    benefits: [
      "Competitive salary and equity",
      "Health insurance",
      "Flexible working hours",
      "Remote work options",
      "Professional development budget",
    ],

    skills: ["React", "JavaScript", "CSS", "HTML", "tailwindcss"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: {
      name: "Netflix",
      logo: "/assets/netflix.svg",
      description:
        "Netflix is the world's leading streaming entertainment service.",
      employees: "5,000+",
      industry: "Entertainment",
      website: "https://netflix.com",
    },
    location: "Bangalore, India",
    salary: {
      min: 500000,
      max: 550000,
      currency: "INR",
    },
    type: "full-time",
    postedAt: "2023-10-23T10:00:00Z",
    deadline: "2023-11-23T10:00:00Z",
    posted: "3 days ago",
    experience: "3-5 years",
    description:
      "Looking for an experienced backend developer with strong Node.js skills. You'll be working on our core streaming infrastructure and helping scale our services to millions of users.",
    responsibilities: [
      "Design and implement scalable backend services",
      "Optimize database queries and performance",
      "Build and maintain RESTful APIs",
      "Work on real-time data processing systems",
      "Collaborate with cross-functional teams",
    ],

    requirements: [
      "3-5 years of backend development experience",
      "Strong knowledge of Node.js and Express",
      "Experience with MongoDB and SQL databases",
      "Understanding of microservices architecture",
      "Knowledge of AWS services",
    ],

    benefits: [
      "Industry-leading compensation",
      "Unlimited vacation policy",
      "Premium health coverage",
      "Annual learning budget",
      "Stock options",
    ],

    skills: ["Node.js", "Express", "MongoDB", "AWS", "SQL"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: {
      name: "Microsoft",
      logo: "/assets/microsoft.svg",
      description:
        "Microsoft is a leading global provider of software, cloud services, and technology solutions.",
      employees: "150,000+",
      industry: "Technology",
      website: "https://microsoft.com",
    },
    location: "Mumbai, India",
    salary: {
      min: 800000,
      max: 900000,
      currency: "INR",
    },
    type: "full-time",
    postedAt: "2023-10-21T10:00:00Z",
    deadline: "2023-11-21T10:00:00Z",
    posted: "5 days ago",
    experience: "5+ years",
    description:
      "Join our team as a full stack developer working on exciting projects. We're looking for someone who can handle both frontend and backend development, with a focus on creating scalable enterprise applications.",
    responsibilities: [
      "Develop full-stack web applications",
      "Design and implement database schemas",
      "Create RESTful APIs and integrate third-party services",
      "Optimize application performance",
      "Mentor junior developers",
    ],

    requirements: [
      "5+ years of full-stack development experience",
      "Expert knowledge of React and Node.js",
      "Strong understanding of database design",
      "Experience with cloud platforms",
      "Knowledge of DevOps practices",
    ],

    benefits: [
      "Competitive salary package",
      "Comprehensive health benefits",
      "401(k) matching",
      "Flexible work arrangements",
      "Career development opportunities",
    ],

    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Express",
      "Next.js",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: {
      name: "Google",
      logo: "/assets/google.svg",
      description:
        "Google is a global technology leader in search, advertising, and cloud computing.",
      employees: "100,000+",
      industry: "Technology",
      website: "https://google.com",
    },
    location: "Bangalore, India",
    salary: {
      min: 400000,
      max: 450000,
      currency: "INR",
    },
    type: "part-time",
    postedAt: "2023-10-24T10:00:00Z",
    deadline: "2023-11-24T10:00:00Z",
    posted: "2 days ago",
    experience: "0-1 years",
    description:
      "Create beautiful and intuitive user interfaces for our products.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Collaborate with developers on implementation",
      "Maintain design system consistency",
    ],

    requirements: [
      "Bachelor's degree in Design or related field",
      "Strong portfolio demonstrating UI/UX skills",
      "Proficiency in design tools like Figma and Adobe XD",
      "Understanding of user-centered design principles",
      "Basic knowledge of HTML/CSS",
    ],

    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Flexible schedule",
      "Learning and development opportunities",
      "Creative work environment",
    ],

    skills: ["Figma", "Adobe XD", "UI Design", "UX Research"],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: {
      name: "Amazon",
      logo: "/assets/aws.svg",
      description:
        "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform.",
      employees: "50,000+",
      industry: "Technology",
      website: "https://aws.amazon.com",
    },
    location: "Hyderabad, India",
    salary: {
      min: 700000,
      max: 800000,
      currency: "INR",
    },
    type: "contract",
    postedAt: "2023-10-19T10:00:00Z",
    deadline: "2023-11-19T10:00:00Z",
    posted: "1 week ago",
    experience: "3-5 years",
    description:
      "Looking for a DevOps engineer to help us scale our infrastructure.",
    responsibilities: [
      "Manage and optimize cloud infrastructure",
      "Implement CI/CD pipelines",
      "Monitor system performance and reliability",
      "Automate deployment processes",
      "Ensure security best practices",
    ],

    requirements: [
      "3-5 years of DevOps experience",
      "Strong knowledge of AWS services",
      "Experience with Docker and Kubernetes",
      "Proficiency in scripting languages",
      "Understanding of security principles",
    ],

    benefits: [
      "Competitive contract rates",
      "Remote work options",
      "Flexible hours",
      "Professional development",
      "Latest tools and technologies",
    ],

    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

const getJobs = () => {
  const localJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
  // Combine localStorage jobs and sample jobs, avoiding duplicate IDs
  const allJobs = [...localJobs];
  const localJobIds = new Set(localJobs.map(j => j.id));
  for (const job of sampleJobs) {
    if (!localJobIds.has(job.id)) {
      allJobs.push(job);
    }
  }
  return allJobs;
};

const JobList = ({ searchQuery, filters, limit }) => {
  const jobs = getJobs();

  const getSalaryRange = (salaryString) => {
    const cleanString = salaryString.replace(/[₹,]/g, "");
    const numbers = cleanString.match(/\d+/g).map(Number);
    return {
      min: numbers[0],
      max: numbers[1] || numbers[0],
    };
  };

  const getExperienceYears = (experienceString) => {
    const numbers = experienceString.match(/\d+/g).map(Number);
    return {
      min: numbers[0],
      max: numbers[1] || numbers[0],
    };
  };

  const isInSalaryRange = (jobSalary, filterRange) => {
    if (filterRange === "all") return true;

    const { min: jobMin } = getSalaryRange(jobSalary);

    switch (filterRange) {
      case "0-300000":
        return jobMin <= 300000;
      case "300000-600000":
        return jobMin > 300000 && jobMin <= 600000;
      case "600000+":
        return jobMin > 600000;
      default:
        return true;
    }
  };

  const isInExperienceRange = (jobExperience, filterRange) => {
    if (filterRange === "all") return true;

    const { min: jobMin } = getExperienceYears(jobExperience);

    switch (filterRange) {
      case "0-1":
        return jobMin <= 1;
      case "1-3":
        return jobMin >= 1 && jobMin <= 3;
      case "3-5":
        return jobMin >= 3 && jobMin <= 5;
      case "5+":
        return jobMin >= 5;
      default:
        return true;
    }
  };

  const filteredJobs = jobs.filter((job) => {
    // Search query filter
    const searchLower = searchQuery?.toLowerCase() || "";
    const matchesSearch =
      job.title.toLowerCase().includes(searchLower) ||
      job.company.name.toLowerCase().includes(searchLower) ||
      job.description.toLowerCase().includes(searchLower) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchLower));

    // Type filter
    const matchesType =
      !filters?.type || filters.type === "all" || job.type === filters.type;

    // Location filter
    const matchesLocation =
      !filters?.location ||
      filters.location === "all" ||
      job.location.includes(filters.location);

    // Salary filter
    const matchesSalary =
      !filters?.salary || isInSalaryRange(job.salary, filters.salary);

    // Experience filter
    const matchesExperience =
      !filters?.experience ||
      isInExperienceRange(job.experience, filters.experience);

    return (
      matchesSearch &&
      matchesType &&
      matchesLocation &&
      matchesSalary &&
      matchesExperience
    );
  });

  const displayJobs = limit ? filteredJobs.slice(0, limit) : filteredJobs;

  return (
    <div className="space-y-6" data-oid="wmbdiae">
      {displayJobs.length === 0 ? (
        <div className="text-center py-10" data-oid="oebedkh">
          <p className="text-gray-500 text-lg" data-oid="-:-55v6">
            No jobs found matching your criteria
          </p>
        </div>
      ) : (
        displayJobs.map((job) => (
          <JobCard key={job.id} job={job} data-oid="bkqvlv2" />
        ))
      )}
    </div>
  );
};

export { sampleJobs };
export default JobList;
