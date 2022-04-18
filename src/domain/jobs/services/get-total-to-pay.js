import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getTotalToPayByProfileId = async (id) => {
  const result = await seqInstance.query(
    "select sum(j.price) as total from Jobs j left join Contracts c on c.id = j.ContractId left join Profiles p on c.ClientId = p.id where p.id = :id and paid is null",
    { replacements: { id }, type: QueryTypes.SELECT }
  );

  return result[0].total;
};

export { getTotalToPayByProfileId };
