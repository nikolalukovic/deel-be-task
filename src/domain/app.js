import express from "express";
import bodyParser from "body-parser";

import "./init-relationships.js";

import { seqInstance } from "../infrastructure/db/index.js";
import { mapRoutes as mapContractRoutes } from "./contracts/routes/index.js";

const app = express();

app.use(bodyParser.json());
app.set("sequelize", seqInstance);
app.set("models", seqInstance.models);

mapContractRoutes(app);

export default app;
