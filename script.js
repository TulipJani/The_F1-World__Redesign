function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

gsap.registerPlugin(ScrollTrigger);

gsap.from("#page3 .left", {
  x: -1000,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page3",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#page4 .right", {
  x: 1000,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page4",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container .redbull", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container2 .mercedes", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container2",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container2 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container2",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container3 .aston", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container3",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container3 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container3",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container4 .ferrari", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container4",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container4 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container4",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container5 .mclaren", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container5",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container5 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container5",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container6 .haas", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container6",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container6 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container6",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container7 .alfa", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container7",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container7 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container7",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container8 .alphaTauri", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container8",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container8 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container8",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container9 .alpine", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container9",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container9 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container9",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

gsap.from("#card-container10 .williams", {
  x: -1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container10",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from("#card-container10 .card", {
  x: 1000,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#card-container10",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1,
  },
});

const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
