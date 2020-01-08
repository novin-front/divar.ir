import MainPage from "views/MainPage";
import About from "components/page/About";
import Contact from "components/page/contact";
import Chat from "components/chatComponent/Chat";
import NewAdvertising from "components/Advertising/newAdvertis/NewAdvertising";
import Weblog from "components/blog/Weblog";
import Support from "components/Support/Support";
import SingelAdvertis from "components/Advertising/view/SingelAdvertis";

const router =[
     {
         path: "/",
         name: "دیوار من",
         component: MainPage,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     {
         path: "/chat",
         name: "چت",
         component: Chat,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     
     {
         path: "/about",
         name: "درباره ما",
         component:About,
         menuPosition: "mainMenu",
         render:true,
         mainMenu: true,
     },
     {
         path: "/contact",
         name: "تماس با ما",
         component: Contact,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     {
         path: "/new",
         name: "ثبت آگهی جدید",
         component: NewAdvertising,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     {
         path: "/blog",
         name: "ثبت آگهی جدید",
         component: Weblog,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     {
         path: "/support",
         name: "ثبت آگهی جدید",
         component: Support,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     {
         path: "/view",
         name: "نمایش آگهی",
         component: SingelAdvertis,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
]
export default router;