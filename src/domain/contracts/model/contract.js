import { Model, TEXT, ENUM } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

class Contract extends Model {}
Contract.init(
  {
    terms: {
      type: TEXT,
      allowNull: false,
    },
    status: {
      type: ENUM("new", "in_progress", "terminated"),
    },
  },
  {
    sequelize: seqInstance,
    modelName: "Contract",
  }
);

export { Contract };
