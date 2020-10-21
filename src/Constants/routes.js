import { SCREEN_NAMES } from ".";
import Home from "../Screens/Home";


export const SCREEN_ROUTES = [
    {name: SCREEN_NAMES.home, key: 'home_screen', component: Home },
    {name: SCREEN_NAMES.cart, key: 'shopping_cart', component: null },
    {name: SCREEN_NAMES.wishlist, key: 'wish_list', component: null },
    {name: SCREEN_NAMES.productDetail, key: 'product_details', component: null },
]