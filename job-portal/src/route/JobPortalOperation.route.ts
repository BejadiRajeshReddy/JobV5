import {authorize} from "../middleware/JWTProvider";

const express = require('express');

const router = express.Router();

const jobPortalOperationController = require('../controller/JobPortalOperationController');

router.post('/getJoblist',authorize, jobPortalOperationController.getJoblist);
router.post('/insertJob', jobPortalOperationController.insertJob);
module.exports = router;
