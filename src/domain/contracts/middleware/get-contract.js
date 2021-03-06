import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getContract = async (req, res, next) => {
  const { id: contractId } = req.params;
  const { id: profileId } = req.profile;

  const result = await seqInstance.query(
    "select * from Contracts where Id = :contractId AND (ClientId = :profileId OR ContractorId = :profileId)",
    { replacements: { contractId, profileId }, type: QueryTypes.SELECT }
  );

  req.contract = result[0];

  next();
};

export { getContract };
