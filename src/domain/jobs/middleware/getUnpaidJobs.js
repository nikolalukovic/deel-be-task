import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getUnpaidJobs = async (req, res, next) => {
  const { id: profileId } = req.profile;

  const unpaidJobs = await seqInstance.query(
    "select * from Jobs j left join Contracts c on j.ContractId = c.id where j.paid is not null and status = 'in_progress' and (c.ContractorId = :profileId or c.ClientId = :profileId)",
    { replacements: { profileId }, type: QueryTypes.SELECT }
  );

  req.unpaidJobs = unpaidJobs;

  next();
};

export { getUnpaidJobs };
