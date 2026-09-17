// ===== BURGER MENU =====
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Обновление баланса в навигации из localStorage
    updateNavBalance();
});

function updateNavBalance() {
    const balance = localStorage.getItem('cosmonaut_balance') || '1000';
    const navBalanceEl = document.getElementById('navBalance');
    if (navBalanceEl) {
        navBalanceEl.textContent = balance;
    }
}

// Экспорт для других скриптов
window.updateNavBalance = updateNavBalance;