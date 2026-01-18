/**
 * Guide de Management - JavaScript Interactions
 *
 * This file contains general UI interactions for the site, such as the mobile menu,
 * smooth scrolling, and back-to-top button.
 * The search functionality has been moved to its own dedicated scripts.
 */

document.addEventListener('DOMContentLoaded', function() {

    // =================================================================================
    // PAGE INTERACTIONS
    // =================================================================================

    // --- Mobile Menu ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', e => {
            e.stopPropagation();
            nav.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking outside of it
        document.addEventListener('click', event => {
            if (nav.classList.contains('active') && !event.target.closest('.header-content')) {
                nav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 140;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // --- "Back to Top" Button ---
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Accordion ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            if (accordionItem) {
                // Optional: Close others
                document.querySelectorAll('.accordion-item').forEach(item => {
                    if (item !== accordionItem) item.classList.remove('active');
                });
                accordionItem.classList.toggle('active');
            }
        });
    });

    // --- Active Quick Nav Item on Scroll ---
    const sections = document.querySelectorAll('.content-section[id]');
    const quickNavItems = document.querySelectorAll('.quick-nav-item');
    if (sections.length > 0 && quickNavItems.length > 0) {
        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            quickNavItems.forEach(item => {
                item.classList.remove('active');
                const navHref = item.getAttribute('href');
                if (navHref && navHref.includes('#') && navHref.split('#')[1] === current) {
                    item.classList.add('active');
                }
            });
        });
    }

    // --- Console Welcome Message ---
    console.log('%c🎓 Guide de Management des Lycées et Collèges', 'color: #667eea; font-size: 20px; font-weight: bold;');
});