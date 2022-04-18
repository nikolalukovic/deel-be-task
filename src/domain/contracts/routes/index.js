import { getProfile } from "../../../infrastructure/middleware/getProfile.js";
import { getContract } from "../middleware/get-contract.js";
import { getContracts } from "../middleware/get-contracts.js";

const mapRoutes = (app) => {
  app.get("/contracts", getProfile, getContracts, (req, res) => {
    res.json(req.contracts);
  });

  app.get("/contracts/:id", getProfile, getContract, (req, res) => {
    if (!req.contract) {
      return res.status(404).end();
    }

    res.json(req.contract);
  });
};

export { mapRoutes };
