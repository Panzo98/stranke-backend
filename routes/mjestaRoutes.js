const express = require("express");
const router = express.Router();
const db = require("../models");
const Opstina = db.Opstina;
const Izborna_grupa = db.Izborna_grupa;
const Izborno_mjesto = db.Izborno_mjesto;
const verify = require("../middleware/verifyJWT");

router.get("/opstine", verify, async (req, res) => {
  try {
    const opstine = await Opstina.findAll({ attributes: ["naziv"] });
    if (opstine) {
      return res.status(200).json(opstine);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/opstina/izborna_grupa/:opstinaId", verify, async (req, res) => {
  try {
    const izborna_grupa = await Izborna_grupa.findAll({
      attributes: ["naziv", "koordinate"],
      where: { opstina_id: req.params.opstinaId },
    });
    if (izborna_grupa) {
      return res.status(200).json(izborna_grupa);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/opstina/izborno_mjesto/:opstinaId", verify, async (req, res) => {
  try {
    const izborno_mjesto = await Izborno_mjesto.findAll({
      attributes: ["naziv", "koordinate"],
      where: { opstina_id: req.params.opstinaId },
    });
    if (izborno_mjesto) {
      return res.status(200).json(izborno_mjesto);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
