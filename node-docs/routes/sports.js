const express = require("express");
const router = express.Router();
const Joi = require("joi");
const morgan = require("morgan");


const sports = [
  { id: 1, name: "vollyball" },
  { id: 2, name: "Basketball" },
  { id: 3, name: "football" },
];

router.get("/", (req, res) => {
  res.send(sports);
});

router.get("/:id", (req, res) => {
  const sport = sports.find((s) => s.id === parseInt(req.params.id));
  if (!sport) res.status(404).send("No such ID");
  res.send(sport);
});

router.post("/add", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    res.status(400).send(validation.error.details[0].message);
    return;
  }

  const sport = {
    id: sports.length + 1,
    name: req.body.name,
  };

  sports.push(sport);
  res.send(sports);
});

router.put("/:id", (req, res) => {
  const sport = sports.find((s) => s.id === parseInt(req.params.id));
  if (!sport) return res.status(404).send("No such sport id");

  const schema = Joi.object({
    name: Joi.string().min(6).required(),
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    res.status(400).send(validation.error.details[0].message);
    return;
  }

  sport.name = req.body.name;
  res.send(sport);
});

router.delete("/:id", (req, res) => {
  const sport = sports.find((sp) => sp.id == parseInt(req.params.id));
  if (!sport) return res.status(404).send("Not such a ID");

  const index = sports.indexOf(sport);
  sports.splice(index, 1);
  res.send(sports);
});

module.exports = router;
