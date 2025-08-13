import {authorize} from "../middleware/JWTProvider";

const express = require('express');

const router = express.Router();

const jobPortalOperationController = require('../controller/JobPortalOperationController');

router.post('/getJoblist',authorize, jobPortalOperationController.getJoblist);
router.post('/insertJob',authorize, jobPortalOperationController.insertJob);
router.post('/updateJob',authorize, jobPortalOperationController.insertJob);
module.exports = router;
