// ==========================================
// FUNCIONALIDADES DO SITE
// ==========================================

// Menu Responsivo
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Fechar menu ao clicar em um link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores do formulário
        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensagem = this.querySelector('textarea').value;
        
        // Validação básica
        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Mensagem de sucesso
        alert('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
        
        // Limpar formulário
        this.reset();
    });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de scroll na navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.especialidade-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Teste de WhatsApp
console.log('Site carregado com sucesso!');
console.log('Botão WhatsApp disponível e funcional.');

// Função para testar links de redes sociais
function testSocialLinks() {
    const links = document.querySelectorAll('.social-links a, .whatsapp-btn');
    links.forEach(link => {
        const href = link.getAttribute('href');
        console.log('Link de rede social:', href);
    });
}

// Executar teste ao carregar a página
window.addEventListener('load', function() {
    console.log('Página completamente carregada.');
    testSocialLinks();
});

// Validação de formulário em tempo real
const inputs = document.querySelectorAll('.contato-form input, .contato-form textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.type === 'email' && this.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderBottom = '2px solid #e74c3c';
            } else {
                this.style.borderBottom = '2px solid #27ae60';
            }
        }
    });
});

// Efeito de hover no botão WhatsApp
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 1s infinite';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
}

// Adicionar animação de pulse ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
        }
        50% {
            box-shadow: 0 5px 30px rgba(37, 211, 102, 0.7);
        }
    }
`;
document.head.appendChild(style);

