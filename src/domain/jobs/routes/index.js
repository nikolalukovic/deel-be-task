import { getProfile } from "../../../infrastructure/middleware/getProfile.js";
import { getUnpaidJobs } from "../middleware/getUnpaidJobs.js";
import { payForJob } from "../middleware/payForJob.js";

const mapRoutes = (app) => {
  app.get("/jobs/unpaid", getProfile, getUnpaidJobs, async (req, res) => {
    res.json(req.unpaidJobs);
  });

  app.post("/jobs/:job_id/pay", getProfile, payForJob, async (req, res) => {
    if (req.paid) {
      res.json({
        message: "Job paid",
      });
    }
  });
};

export { mapRoutes };
