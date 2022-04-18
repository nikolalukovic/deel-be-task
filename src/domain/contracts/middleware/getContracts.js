import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getContracts = async (req, res, next) => {
  const { id: profileId } = req.profile;

  const contracts = await seqInstance.query(
    "select * from Contracts where status <> 'terminated' AND (ClientId = :profileId OR ContractorId = :profileId)",
    { replacements: { profileId }, type: QueryTypes.SELECT }
  );

  req.contracts = contracts;

  next();
};

export { getContracts };
