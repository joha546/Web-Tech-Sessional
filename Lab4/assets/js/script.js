document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
  
      if (!href || href === "#") return;
  
      if(href === path){
        link.classList.add("active");
      }
      else{
        link.classList.remove("active");
      }
    });
  });
  