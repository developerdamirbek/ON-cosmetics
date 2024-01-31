import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Faq } from "../pages/Faq";
import { Brand } from "../pages/brand/brand";
import { Contact } from "../pages/contact";
import { WhereTobuy } from "../pages/wheretobuy";
import { Home } from "../pages/home";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <Products />,
    path: "products",
  },
  {
    component: <Brand />,
    path: "brand",
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Faq />,
    path: "faqs",
  },
  {
    component: <Contact />,
    path: "contact",
  },
  {
    component: <WhereTobuy />,
    path: "wheretobuy",
  }
];

