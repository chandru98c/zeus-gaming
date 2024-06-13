//  nav Bar - mobile view
let menu = document.getElementById("open-arrow");
let navlist = document.getElementById("nav_list");
let close = document.getElementById("close");

menu.onclick = () => {
  navlist.classList.toggle("open");
};
close.onclick = () => {
  navlist.classList.remove("open");
};

// scroll reveal

const sr = ScrollReveal();

const animation = {
  desktop: {
    navBar: {
      origin: "top",
      distance: "80px",
      duration: 900,
   
      opacity: 0,
      scale: 0,
      mobile: false
    },
    top: {
      origin: "top",
      distance: "60px",
      duration: 900,
      reset: true,
      opacity: 0,
      scale: 0,
      mobile: false
    },
    popup: {
      duration: 900,
      reset: true,
      opacity: 0,
      scale: 0,
      mobile: false
    },
    left: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2,
      mobile: false
    },
    right: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2,
      mobile: false
    },
    bottom: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2,
      origin: "bottom",
      distance: "80px",
      mobile: false
    },
    Home_zoomin: {
        duration: 900,
        opacity: 1,
        scale: 0,
        origin:"bottom",
        distance: '100px',
        mobile: false
      },
  
    zoomout: {
      duration: 900,

      opacity: 1,
      scale: 1.7,
      mobile: false
    }
  },

  mobile: {
    top: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2
    },
    popup: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2
    },
    left: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2
    },
    right: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2
    },
    bottom: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2,
      origin: "bottom"
    },
  
  },
  allGadgets: {
    navBar: {
      origin: "top",
      distance: "80px",
      duration: 900,
      reset: true,
      opacity: 0,
      scale: 0
    },
    top: {
      origin: "top",
      distance: "60px",
      duration: 900,
      reset: true,
      opacity: 0,
      scale: 0
    },
    popup: {
      duration: 900,
      reset: true,
      opacity: 0,
      scale: 0
    },
    left: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2
    },
    right: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2
    },
    bottom: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2,
      origin: "bottom",
      distance: "90px"
    },
   
    zoomout: {
      duration: 900,
      opacity: 1,
      scale: 1.5
    },
  
   
    Home:{
        rotate: {
            
            y: 90,
        
            
        },
        opacity:0,
        duration: 1000
    }
  }
};

sr.reveal(".nav-bar", animation.allGadgets.navBar);
sr.reveal(".nav-bar", animation.allGadgets.navBar);

sr.reveal(".home-animation-h2", animation.desktop.Home_zoomin);
sr.reveal(".home-animation-h2",{desktop:false});
sr.reveal(".home-animation-p" , animation.allGadgets.top)
sr.reveal(".home-animation-b" , animation.allGadgets.bottom)
sr.reveal(".home" , animation.allGadgets.Home)