import { getPricePaidPerClient } from "../services/get-price-paid-per-client.js";

const getBestClient = async (req, res, next) => {
  const { start, end, limit } = req.query;

  const result = await getPricePaidPerClient(start, end, limit);

  req.bestClients = result;

  next();
};

export { getBestClient };
