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
    Home_zoomin: {
      duration: 900,
      opacity: 1,
      scale: 0,
      origin: "bottom",
      distance: "100px",
      mobile: false
    }
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
      reset: false,
      opacity: 0,
      scale: 0
    },

    bottom: {
      duration: 900,
      reset: true,
      opacity: 1,
      scale: 1.2,
      origin: "bottom",
      distance: "90px"
    },

    Home: {
      rotate: {
        y: 90
      },
      opacity: 0,
      duration: 1000
    }
  }
};

sr.reveal(".nav-bar", animation.allGadgets.navBar);

sr.reveal(".home-animation-h2", animation.desktop.Home_zoomin);

sr.reveal(".home-animation-p", animation.allGadgets.top);
sr.reveal(".home-animation-b", animation.allGadgets.bottom);
sr.reveal(".home", animation.allGadgets.Home);
sr.reveal(".latest-container", {
  rotate: {
    y: 90
  },
  opacity: 0,
  duration: 900,delay: 500
});
sr.reveal(".news-left", {opacity: 0,scale: 0.5,delay: 500});
sr.reveal(".news-right", {opacity: 0,scale: 0.5 ,delay: 500});
sr.reveal(".card-01", {origin:'bottom', distance:'100px',opacity: 0,scale: .5, delay: 300});
sr.reveal(".card-02", {origin:'bottom', distance:'100px',opacity: 0,scale: .5, delay: 360});
sr.reveal(".card-03", {origin:'bottom', distance:'100px',opacity: 0,scale: .5, delay: 420});
sr.reveal(".card-04", {origin:'bottom', distance:'100px',opacity: 0,scale: .5, delay: 480});
sr.reveal(".card-05", {origin:'bottom', distance:'100px',opacity: 0,scale: .5, delay: 540});
sr.reveal(".card-06", {origin:'bottom', distance:'100px',opacity: 0,scale: .5, delay: 600});