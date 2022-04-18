import { getProfile } from "../../../infrastructure/middleware/getProfile.js";
import { getUnpaidJobs } from "../middleware/get-unpaid-jobs.js";
import { payForJob } from "../middleware/pay-for-job.js";

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
