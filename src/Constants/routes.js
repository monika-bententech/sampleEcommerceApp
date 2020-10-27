import { SCREEN_NAMES } from ".";
import Home from "../Screens/Home";
import ProductDetails from "../Screens/ProductDetails";
import Cart from '../Screens/Cart';
import WishList from "../Screens/WishList";
import Education from '../Screens/Education';
import EducationVideo from '../Screens/EducationVideo';

export const SCREEN_ROUTES = [
  { name: SCREEN_NAMES.home, key: "home_screen", component: Home },
  { name: SCREEN_NAMES.viewWishLists, key: "view_wishlists_screen", component: Home,back: true },
  { name: SCREEN_NAMES.cart, key: "shopping_cart", component: Cart,back: true },
  { name: SCREEN_NAMES.wishlist, key: "wish_list", component: WishList,back: true },
  { name: SCREEN_NAMES.education, key: "wish_list", component: Education,back: true },
  {
    name: SCREEN_NAMES.productDetail,
    key: "product_details",
    component: ProductDetails,
    back: true
  },
  { name: SCREEN_NAMES.educationvideo, key: "education_video", component: EducationVideo,back: true },
];
