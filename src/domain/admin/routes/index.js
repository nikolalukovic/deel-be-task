import { getProfile } from "../../../infrastructure/middleware/getProfile.js";
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
};

export { mapRoutes };
