import express from "express";
import bodyParser from "body-parser";

import "./init-relationships.js";

import { seqInstance } from "../infrastructure/db/index.js";
import { mapRoutes as mapContractRoutes } from "./contracts/routes/index.js";
import { mapRoutes as mapJobRoutes } from "./jobs/routes/index.js";
import { mapRoutes as mapIdentityRoutes } from "./identity/routes/index.js";

const app = express();

app.use(bodyParser.json());
app.set("sequelize", seqInstance);
app.set("models", seqInstance.models);

mapContractRoutes(app);
mapJobRoutes(app);
mapIdentityRoutes(app);

export default app;
