import express from "express";
import bodyParser from "body-parser";

import "./init-relationships.js";

import { getProfile } from "../infrastructure/middleware/getProfile.js";
import { seqInstance } from "../infrastructure/db/index.js";

const app = express();

app.use(bodyParser.json());
app.set("sequelize", seqInstance);
app.set("models", seqInstance.models);

/**
 * FIX ME!
 * @returns contract by id
 */
app.get("/contracts/:id", getProfile, async (req, res) => {
  const { Contract } = req.app.get("models");
  const { id } = req.params;
  const contract = await Contract.findOne({ where: { id } });

  if (!contract) return res.status(404).end();

  res.json(contract);
});

export default app;
