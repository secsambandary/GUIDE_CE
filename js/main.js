/**
 * Guide de Management - JavaScript Interactions
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header-content') && nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 140; // Header + Quick Nav height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Accordion Functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// Highlight Active Quick Nav Item on Scroll
const sections = document.querySelectorAll('.content-section[id]');
const quickNavItems = document.querySelectorAll('.quick-nav-item');

if (sections.length > 0 && quickNavItems.length > 0) {
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        quickNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
}

// Animation on Scroll (Fade In)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.domain-card, .document-card, .about-card, .quick-link-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Search Functionality (if needed in future)
function searchDocuments(query) {
    const documents = document.querySelectorAll('.document-card, .document-item');
    const lowerQuery = query.toLowerCase();
    
    documents.forEach(doc => {
        const title = doc.querySelector('h3, h4').textContent.toLowerCase();
        const description = doc.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(lowerQuery) || description.includes(lowerQuery)) {
            doc.style.display = '';
        } else {
            doc.style.display = 'none';
        }
    });
}

// Print Functionality
function printPage() {
    window.print();
}

// Copy Link Functionality
function copyLink(button) {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Lien copié !';
        button.style.background = '#43e97b';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

// Local Storage for User Preferences
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

// Track visited pages
function trackVisit() {
    const currentPage = window.location.pathname;
    let visits = JSON.parse(localStorage.getItem('pageVisits') || '{}');
    visits[currentPage] = (visits[currentPage] || 0) + 1;
    localStorage.setItem('pageVisits', JSON.stringify(visits));
}

trackVisit();

// Lazy Loading for Images (if images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active style to Quick Nav on scroll
window.addEventListener('scroll', function() {
    const quickNav = document.querySelector('.quick-nav');
    if (quickNav) {
        if (window.scrollY > 100) {
            quickNav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            quickNav.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        }
    }
});

// Console welcome message
console.log('%c🎓 Guide de Management des Lycées et Collèges', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cMinistère de l\'Éducation Nationale du Sénégal', 'color: #718096; font-size: 14px;');
console.log('%cDirection de l\'Enseignement Moyen Secondaire Général (DEMSG)', 'color: #718096; font-size: 12px;');