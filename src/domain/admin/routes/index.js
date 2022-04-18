import { getProfile } from "../../../infrastructure/middleware/getProfile.js";
import { getBestClient } from "../middleware/get-best-client.js";
import { getBestProfession } from "../middleware/get-best-profession.js";

const mapRoutes = (app) => {
  app.get(
    "/admin/best-profession",
    getProfile,
    getBestProfession,
    (req, res) => {
      if (req.bestProfession) {
        res.status(200).json({
          bestProfession: req.bestProfession,
        });
      } else {
        res.status(404).json({
          message: "No best profession",
        });
      }
    }
  );

  app.get("/admin/best-clients", getProfile, getBestClient, (req, res) => {
    if (req.bestClients) {
      res.status(200).json({
        bestClients: req.bestClients,
      });
    } else {
      res.status(404).json({
        message: "No best clients",
      });
    }
  });
};

export { mapRoutes };
