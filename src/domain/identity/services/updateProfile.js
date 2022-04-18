import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const updateBalance = async (id, balance) => {
  const profile = await seqInstance.query(
    "update Profiles set balance = :balance where id = :id",
    {
      replacements: { id, balance },
      type: QueryTypes.UPDATE,
    }
  );

  return profile;
};

export { updateBalance };
