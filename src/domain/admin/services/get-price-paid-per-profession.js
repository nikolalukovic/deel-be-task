import { QueryTypes } from "sequelize";

import { seqInstance } from "../../../infrastructure/db/index.js";

const getPricePaidPerProfession = async (start, end) => {
  const result = await seqInstance.query(
    "select p.profession as profession, sum(j.price) as price from Jobs j left join Contracts c on j.ContractId = c.id left join Profiles p on c.ContractorId = p.id where paymentDate between :start and :end group by p.profession order by p.profession desc",
    { replacements: { start, end }, type: QueryTypes.SELECT }
  );

  return result;
};

export { getPricePaidPerProfession };
