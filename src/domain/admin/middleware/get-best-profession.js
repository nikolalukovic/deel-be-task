import { getPricePaidPerProfession } from "../services/get-price-paid-per-profession.js";

const getBestProfession = async (req, res, next) => {
  const { start, end } = req.query;

  const result = await getPricePaidPerProfession(start, end);
  req.bestProfession = result[0].profession;

  next();
};

export { getBestProfession };
