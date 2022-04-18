import { getProfile } from "../../../infrastructure/middleware/getProfile.js";
import { depositToBalance } from "../middleware/deposit-to-balance.js";

const mapRoutes = (app) => {
  app.post(
    "/balances/deposit/:userId",
    getProfile,
    depositToBalance,
    (req, res) => {
      if (req.depositedBalance) {
        res.status(200).json({
          message: "Deposited to balance successfully",
        });
      }
    }
  );
};

export { mapRoutes };
