import MainPage from "views/MainPage";
import About from "components/page/About";
import Contact from "components/page/contact";
import Chat from "components/chatComponent/Chat";
import Landing from "views/examples/Landing";
import Index from "views/Index";
import NewAdvertising from "components/Advertising/newAdvertis/NewAdvertising";

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
         path: "/landing-page",
         name: "چت",
         component: Landing,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
     },
     {
         path: "/home",
         name: "چت",
         component: Index,
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
]
export default router;