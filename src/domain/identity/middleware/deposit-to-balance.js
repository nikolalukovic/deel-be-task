import { seqInstance } from "../../../infrastructure/db/index.js";
import { getTotalToPayByProfileId } from "../../jobs/services/get-total-to-pay.js";
import { getBalanceById } from "../services/get-profile.js";
import { updateBalance } from "../services/update-profile.js";

const depositToBalance = async (req, res, next) => {
  const { userId } = req.params;
  const { amount } = req.body;

  const totalToPay = await getTotalToPayByProfileId(userId);

  const quarter = 0.25 * totalToPay;

  if (amount > quarter) {
    res.status(400).json({
      message: "The amount to deposit exceeds 25% of the total to pay",
    });
  }

  const balance = await getBalanceById(userId);

  await seqInstance.transaction(async (t) => {
    await updateBalance(userId, balance + amount);
  });

  req.depositedBalance = true;

  next();
};

export { depositToBalance };
