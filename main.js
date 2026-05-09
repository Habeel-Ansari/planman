// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Toggle mobile menu logic here. For simplicity we assume a display block/none setup 
        // or a class toggle.
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
    });
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", (event) => {
    // Simple fade up for single elements
    document.querySelectorAll('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el, 
            { y: 40, opacity: 0 },
            { 
                y: 0, opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Staggered fade up for grid children
    document.querySelectorAll('.gsap-stagger-parent').forEach((parent) => {
        gsap.fromTo(parent.children, 
            { y: 40, opacity: 0 },
            { 
                y: 0, opacity: 1, 
                duration: 0.8, 
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: parent,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});

// Scroll to Top with Progress
const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = `
    <svg class="progress-ring" width="60" height="60">
        <circle class="progress-ring__circle" stroke="rgba(37, 99, 235, 0.1)" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
        <circle class="progress-ring__circle progress-value" stroke="var(--accent)" stroke-width="4" fill="transparent" r="26" cx="30" cy="30" stroke-linecap="round"/>
    </svg>
    <i class="ph-bold ph-caret-up"></i>
`;
document.body.appendChild(scrollToTopBtn);

const circle = scrollToTopBtn.querySelector('.progress-value');
// check if circle exists before calculations
if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        // Visibility toggle
        if (scrollTop > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        // Calculate progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        // Avoid division by zero
        if(docHeight > 0) {
            const scrollPercent = scrollTop / docHeight;
            const offset = circumference - (scrollPercent * circumference);
            circle.style.strokeDashoffset = offset;
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        lenis.scrollTo(0, { duration: 1.5 });
    });
}
