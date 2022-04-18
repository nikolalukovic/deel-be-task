import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getPricePaidPerClient = async (start, end, limit = 2) => {
  const result = await seqInstance.query(
    "select p.id, (p.firstName || ' ' || p.lastName) as fullName, sum(j.price) as paid from Jobs j left join Contracts c on j.ContractId = c.id left join Profiles p on c.ClientId = p.id where paymentDate between :start and :end group by p.id limit :limit",
    { replacements: { start, end, limit }, type: QueryTypes.SELECT }
  );

  return result;
};

export { getPricePaidPerClient };
