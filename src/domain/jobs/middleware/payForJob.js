import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";
import {
  getContractorByJobId,
  getProfileById,
} from "../../identity/services/getProfile.js";
import { updateBalance } from "../../identity/services/updateProfile.js";
import { getJobById } from "../services/getJob.js";
import { setJobPaid } from "../services/updateJob.js";

const payForJob = async (req, res, next) => {
  const { id: profileId } = req.profile;
  const { job_id: jobId } = req.params;
  const { amount } = req.body;

  const job = await getJobById(jobId);

  if (!job) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  const client = await getProfileById(profileId);

  if (!client) {
    return res.status(404).json({
      message: "Client not found",
    });
  }

  const contractor = await getContractorByJobId(jobId);

  if (!contractor) {
    return res.status(404).json({
      message: "Contractor not found",
    });
  }

  if (amount > client.balance) {
    res.status(400).json({
      message: "Insufficient funds",
    });
  }

  const newClientBalance = client.balance - amount;
  const newContractorBalance = contractor.balance + amount;

  await seqInstance.transaction(async (t) => {
    await Promise.all([
      updateBalance(client.id, newClientBalance),
      updateBalance(contractor.id, newContractorBalance),
      setJobPaid(jobId),
    ]);
  });

  req.paid = true;

  next();
};

export { payForJob };
