import express from 'express';
import userController from '../controllers/user.js';
import authenticateUser from '../middleware/userAuathentication.js';
import productController from '../controllers/product.js';

const router = express.Router();

router.get('/', authenticateUser, userController.homePage);
router.get('/userSignup', userController.signUpGetPage);
router.post('/send-otp', userController.sendOtp);
router.get('/active/:otp', userController.activeOtp);
router.get('/passwordConformation', userController.passwordConformationPage);
router.post('/set-password', userController.setSignupPassword);
router.get('/login', userController.loginGetPage);
router.post('/login', userController.loginPostPage);
router.get('/logout',authenticateUser, userController.logoutPage);

router.get('/googleauth/google', userController.googleLogin);
router.get('/auth/google/callback', userController.googleLoginCallback);

router.get('/profile',authenticateUser, userController.getProfile);
router.post('/profile', authenticateUser,userController.createProfile)
router.get('/product', authenticateUser, productController.getProduct);
router.get('/cart', authenticateUser, productController.getCart);
router.post('/addToCart', authenticateUser, productController.addToCart);
router.delete('/cart/delete/:productId',authenticateUser,productController.deleteCart);
router.put('/cart/:productId/:quantity',authenticateUser,productController.updateCart);


router.get('/checkout', authenticateUser, productController.getCheckout);
router.delete('/checkout/:profileId',  productController.deleteProfile);
router.post('/placeorder', productController.placeOrder);

// router.get('/orderSummary',authenticateUser,productController.getOrderSummery)
// router.post('/ordersummery',productController.postOrdderSummery)


export default router;
