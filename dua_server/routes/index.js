const express = require("express");
const router = express.Router();

router.use(require("./getData"));
router.use(require("./insert"));
router.use(require("./test"));
router.use(require("./user"));
router.use(require("./test_data"));
router.use(require("./video"));

module.exports = router;