import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getProfileById = async (id) => {
  const profiles = await seqInstance.query(
    "select * from Profiles where id = :id",
    {
      replacements: { id },
      type: QueryTypes.SELECT,
    }
  );

  return profiles[0];
};

const getContractorByJobId = async (id) => {
  const contractors = await seqInstance.query(
    "select p.* from Profiles p left join Contracts c on p.id = c.ContractorId left join Jobs j on C.id = j.ContractId where j.id = :id",
    { replacements: { id }, type: QueryTypes.SELECT }
  );

  return contractors[0];
};

export { getProfileById, getContractorByJobId };
