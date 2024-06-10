const express = require("express");
const Disco = require("../models/discos.model");
const router = express.Router();
const {getDiscos, getSingleDisco, createDisco, updateDisco, deleteDisco} = require('../controllers/disco.controller');

router.get("/", getDiscos);
router.get("/:id", getSingleDisco);

router.post("/", createDisco);

router.put("/:id", updateDisco)

router.delete("/:id", deleteDisco)

module.exports = router;