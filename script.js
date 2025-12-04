// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Product Data
const products = [
    { id: 1, name: "Vintage Leather Bag", category: "bags", price: "₱250.00", image: "picture/bag1.png" },
    { id: 2, name: "Designer Handbag", category: "bags", price: "₱250.00", image: "picture/bag2.png" },
    { id: 3, name: "Casual Tote Bag", category: "bags", price: "₱200.00", image: "picture/bag3.png" },
    { id: 4, name: "Elegant Evening Bag", category: "bags", price: "₱250.00", image: "picture/bag4.png" },
    { id: 5, name: "Summer Dress", category: "clothes", price: "₱250.00", image: "picture/damit1.png" },
    { id: 6, name: "Casual Jacket", category: "clothes", price: "₱350.00", image: "picture/damit2.png" },
    { id: 7, name: "Formal Blouse", category: "clothes", price: "₱200.00", image: "picture/damit3.png" },
    { id: 8, name: "Cozy Sweater", category: "clothes", price: "₱250.00", image: "picture/damit4.png" },
    { id: 9, name: "Trendy Top", category: "clothes", price: "₱200.00", image: "picture/damit5.png" },
    { id: 10, name: "Classic Sneakers", category: "shoes", price: "₱400.00", image: "picture/sapatos.png" },
    { id: 11, name: "Elegant Heels", category: "shoes", price: "₱300.00", image: "picture/sapatos2.png" },
    { id: 12, name: "Leather Boots", category: "shoes", price: "₱450.00", image: "picture/bag1.png" }
];

// Function to display products
function displayProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    // Display only 8 sample products
    const sampleProducts = products.slice(0, 8);
    
    sampleProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Initialize products on page load
displayProducts();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});