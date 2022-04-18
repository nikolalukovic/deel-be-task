import { Model, TEXT, DECIMAL, BOOLEAN, DATE } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

class Job extends Model {}
Job.init(
  {
    description: {
      type: TEXT,
      allowNull: false,
    },
    price: {
      type: DECIMAL(12, 2),
      allowNull: false,
    },
    paid: {
      type: BOOLEAN,
      default: false,
    },
    paymentDate: {
      type: DATE,
    },
  },
  {
    sequelize: seqInstance,
    modelName: "Job",
  }
);

export { Job };
