import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getJobById = async (id) => {
  const jobs = await seqInstance.query("select * from Jobs where id = :id", {
    replacements: { id },
    type: QueryTypes.SELECT,
  });

  return jobs[0];
};

export { getJobById };
