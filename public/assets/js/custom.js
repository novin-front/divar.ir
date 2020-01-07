     let Sidebar = document.querySelector('.sidebar').className;
     console.log(Sidebar.replace("sidebar-mobile", ""))
     if (Sidebar.includes("sidebar-mobile")){
        Sidebar = Sidebar.replace("sidebar-mobile", "")
     }else{
         Sidebar += "sidebar-mobile"
     }
     
