window.addEventListener("load", function(){

/*-------------page loader ------------ */
this.document.querySelector(".page-loader").classList.add("fade-out")
this.setTimeout(function(){
    document.querySelector(".page-loader").style.display="none";
},1000);

/*-------------animation on scroll ------------ */
AOS.init();

})

/*-------------TOGGLER NAVBAR ------------ */

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", togglerNav);

function togglerNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/*-------------CLOSE TOGGLER NAVBAR WHEN CLICKED ------------ */

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        togglerNav; 
    }
})

/*-------------STICKY HEADER ------------ */
window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }else {
        document.querySelector(".header").classList.remove("sticky");
    }
})


/*-------------MENU TABS ------------ */
const menuTabs = document.querySelector(".menu-tabs");

menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item")&& !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active"); 

        //animation on scroll
        AOS.init();
    }
})