import checkoutService from "../services/payments.service.js";

const checkoutController = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    //ubicar donde está el user_id
    const response = await checkoutService({ user_id });
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

export default checkoutController;
