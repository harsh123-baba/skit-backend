const router = require('express').Router();
const DiscussIdController = require('../controller/DiscussId');
const CreateCommentController = require('../controller/PostComments');
const ContactController = require("../controller/contactController");
const CreateNewController = require('../controller/create_new');
const DicsussController = require("../controller/discussController");
const ResearchPaperController = require('../controller/ResearchPaperController');
router.post('/contact', ContactController);
router.get("/discuss", DicsussController);
router.post("/create-new",CreateNewController);
router.post("/create-comment", CreateCommentController);
router.get("/discuss-id/:id", DiscussIdController);
router.get('/research', ResearchPaperController);
module.exports = router