import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const setJobPaid = async (id) => {
  const jobs = await seqInstance.query(
    "update Jobs set paid = true where id = :id",
    { replacements: { id }, type: QueryTypes.UPDATE }
  );

  return jobs[0];
};

export { setJobPaid };
