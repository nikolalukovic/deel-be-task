import { Model, STRING, DECIMAL, ENUM } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

class Profile extends Model {}
Profile.init(
  {
    firstName: {
      type: STRING,
      allowNull: false,
    },
    lastName: {
      type: STRING,
      allowNull: false,
    },
    profession: {
      type: STRING,
      allowNull: false,
    },
    balance: {
      type: DECIMAL(12, 2),
    },
    type: {
      type: ENUM("client", "contractor"),
    },
  },
  {
    sequelize: seqInstance,
    modelName: "Profile",
  }
);

export { Profile };
