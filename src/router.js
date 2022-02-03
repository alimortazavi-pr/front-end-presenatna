import { createRouter, createWebHistory } from "vue-router";

//Import Components
//Auth
import Register from "@/pages/auth/Register.vue";
import Login from "@/pages/auth/Login.vue";
import ForgetPassword from "@/pages/auth/ForgetPassword.vue";
import ResetPassword from "@/pages/auth/ResetPassword.vue";
import LogOut from "@/pages/auth/LogOut.vue";
//Admin
import AdminTemplate from "@/pages/admin/Template.vue";
import Admin from "@/pages/admin/Admin.vue";
//Oredrs
import Orders from "@/pages/admin/orders/Orders.vue";
import SingleOrderAdmin from "@/pages/admin/orders/SingleOrder.vue";
//Categories
import Categories from "@/pages/admin/categories/Categories.vue";
import CreateCategory from "@/pages/admin/categories/Create.vue";
import EditCategory from "@/pages/admin/categories/Edit.vue";
//Occasions
import Occasions from "@/pages/admin/occasions/Occasions.vue";
import CreateOccasion from "@/pages/admin/occasions/Create.vue";
import EditOccasion from "@/pages/admin/occasions/Edit.vue";
//Cards
import Cards from "@/pages/admin/cards/Cards.vue";
import CreateCard from "@/pages/admin/cards/Create.vue";
import EditCard from "@/pages/admin/cards/Edit.vue";
//Boxes
import Boxes from "@/pages/admin/boxes/Boxes.vue";
import CreateBox from "@/pages/admin/boxes/Create.vue";
import EditBox from "@/pages/admin/boxes/Edit.vue";
//GiftBoxes
import GiftBoxes from "@/pages/admin/giftBoxes/GiftBoxes.vue";
import CreateGiftBox from "@/pages/admin/giftBoxes/Create.vue";
import EditGiftBox from "@/pages/admin/giftBoxes/Edit.vue";
//Gifts
import Gifts from "@/pages/admin/gifts/Gifts.vue";
import CreateGift from "@/pages/admin/gifts/Create.vue";
import EditGift from "@/pages/admin/gifts/Edit.vue";
//Home
import Home from "@/pages/Home.vue";
import GiftBoxesHome from "@/pages/GiftBoxes.vue";
import SingleGiftBox from "@/pages/SingleGiftBox.vue";
import GiftsHome from "@/pages/Gifts.vue";
import SingleGift from "@/pages/SingleGift.vue";
import ContactUs from "@/pages/ContactUs.vue";
import AboutUs from "@/pages/AboutUs.vue";
import Cart from "@/pages/Cart.vue";
import CheckOut from "@/pages/CheckOut.vue";
//BuildBox
import Template from "@/pages/buildBox/Template.vue";
import StepOne from "@/pages/buildBox/StepOne.vue";
import StepTwo from "@/pages/buildBox/StepTwo.vue";
import StepThree from "@/pages/buildBox/StepThree.vue";
import StepFour from "@/pages/buildBox/StepFour.vue";
//Profile
import Profile from "@/pages/Profile.vue";
import MyOrders from "@/pages/MyOrders.vue";
import SingleOrder from "@/pages/SingleOrder.vue";
//Other
import NotFound from "@/pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Hem"
        }
    },
    {
        path: "/gift-boxes",
        name: "GiftBoxesHome",
        component: GiftBoxesHome,
        meta: {
            title: "Presentaskar"
        }
    },
    {
        path: "/gift-boxes/single/:giftBox",
        name: "SingleGiftBox",
        component: SingleGiftBox,
        meta: {
            title: "Enstaka presentförpackning"
        }
    },
    {
        path: "/gifts/:occasion",
        name: "GiftsHome",
        component: GiftsHome,
        meta: {
            title: "Gåvor"
        }
    },
    {
        path: "/gifts/single/:gift",
        name: "SingleGift",
        component: SingleGift,
        meta: {
            title: "Ensam gåva"
        }
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: ContactUs,
        meta: {
            title: "Kontakta oss"
        }
    },
    {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
        meta: {
            title: "Om oss"
        }
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: {
            title: "Vagn"
        }
    },
    {
        path: "/checkout",
        name: "CheckOut",
        component: CheckOut,
        meta: {
            title: "Kolla upp"
        }
    },
    {
        path: "/build-box",
        name: "Template",
        component: Template,
        children: [
            {
                path: "",
                name: "StepOne",
                component: StepOne,
                meta: {
                    title: "Build Box - Step 1"
                }
            },
            {
                path: "step-2",
                name: "StepTwo",
                component: StepTwo,
                meta: {
                    title: "Build Box - Step 2"
                }
            },
            {
                path: "step-3",
                name: "StepThree",
                component: StepThree,
                meta: {
                    title: "Build Box - Step 3"
                }
            },
            {
                path: "step-4",
                name: "StepFour",
                component: StepFour,
                meta: {
                    title: "Build Box - Step 4"
                }
            },
        ]
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Registrera"
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Logga in"
        }
    },
    {
        path: "/password-forget",
        name: "ForgetPassword",
        component: ForgetPassword,
        meta: {
            title: "Glöm lösenord"
        }
    },
    {
        path: "/password-reset/:token",
        name: "ResetPassword",
        component: ResetPassword,
        meta: {
            title: "Återställ lösenord"
        }
    },
    {
        path: "/logout",
        name: "LogOut",
        component: LogOut,
        meta: {
            title: "Logga ut"
        }
    },
    {
        path: "/admin",
        name: "AdminTemplate",
        component: AdminTemplate,
        children: [
            {
                path: "",
                name: "Admin",
                component: Admin,
                meta: {
                    title: "Administration"
                }
            },
            //Orders
            {
                path: "orders",
                name: "Orders",
                component: Orders,
                meta: {
                    title: "Orders"
                },
            },
            {
                path: "orders/:order",
                name: "SingleOrderAdmin",
                component: SingleOrderAdmin,
                meta: {
                    title: "Enstaka beställning - Admin"
                }
            },
            //Categories
            {
                path: "categories",
                name: "Categories",
                component: Categories,
                meta: {
                    title: "Kategorier"
                },
            }, {
                path: "categories/create",
                name: "CreateCategory",
                component: CreateCategory,
                meta: {
                    title: "Skapa kategori"
                },
            }, {
                path: "categories/:id",
                name: "EditCategory",
                component: EditCategory,
                meta: {
                    title: "Redigera kategori"
                },
            },
            //Occasions
            {
                path: "occasions",
                name: "Occasions",
                component: Occasions,
                meta: {
                    title: "Tillfällen"
                },
            }, {
                path: "occasions/create",
                name: "CreateOccasion",
                component: CreateOccasion,
                meta: {
                    title: "Skapa tillfälle"
                },
            }, {
                path: "occasions/:id",
                name: "EditOccasion",
                component: EditOccasion,
                meta: {
                    title: "Redigera tillfälle"
                },
            },
            //Cards
            {
                path: "cards",
                name: "Cards",
                component: Cards,
                meta: {
                    title: "Cards"
                },
            }, {
                path: "cards/create",
                name: "CreateCard",
                component: CreateCard,
                meta: {
                    title: "Skapa kort"
                },
            }, {
                path: "cards/:id",
                name: "EditCard",
                component: EditCard,
                meta: {
                    title: "Redigera kort"
                },
            },
            //Boxes
            {
                path: "boxes",
                name: "Boxes",
                component: Boxes,
                meta: {
                    title: "Lådor"
                },
            }, {
                path: "boxes/create",
                name: "CreateBox",
                component: CreateBox,
                meta: {
                    title: "Skapa låda"
                },
            }, {
                path: "boxes/:id",
                name: "EditBox",
                component: EditBox,
                meta: {
                    title: "Redigeringsruta"
                },
            },
            //GiftBoxes
            {
                path: "giftBoxes",
                name: "GiftBoxes",
                component: GiftBoxes,
                meta: {
                    title: "Presentaskar"
                },
            }, {
                path: "giftBoxes/create",
                name: "CreateGiftBox",
                component: CreateGiftBox,
                meta: {
                    title: "Skapa presentförpackning"
                },
            }, {
                path: "giftBoxes/:id",
                name: "EditGiftBox",
                component: EditGiftBox,
                meta: {
                    title: "Redigera presentask"
                },
            },
            //Gifts
            {
                path: "gifts",
                name: "Gifts",
                component: Gifts,
                meta: {
                    title: "Gåvor"
                },
            }, {
                path: "gifts/create",
                name: "CreateGift",
                component: CreateGift,
                meta: {
                    title: "Skapa present"
                },
            }, {
                path: "gifts/:id",
                name: "EditGift",
                component: EditGift,
                meta: {
                    title: "Redigera present"
                },
            },
        ]
    },
    //Profile
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Profil"
        }
    },
    {
        path: "/profile/orders",
        name: "MyOrders",
        component: MyOrders,
        meta: {
            title: "Mina beställningar"
        }
    },
    {
        path: "/profile/orders/:order",
        name: "SingleOrder",
        component: SingleOrder,
        meta: {
            title: "Enstaka order"
        }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `Presentana | ${to.meta.title}`;
    next()
});

export default router;
