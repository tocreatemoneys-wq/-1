// В начале файла - сохранение баланса в localStorage
function saveBalance() {
    localStorage.setItem('cosmonaut_balance', state.balance);
    if (window.updateNavBalance) window.updateNavBalance();
}

function updateBalance() {
    balanceDisplay.textContent = state.balance + ' ₵';
    saveBalance();
}

// Инициализация баланса из localStorage
const savedBalance = localStorage.getItem('cosmonaut_balance');
if (savedBalance) state.balance = parseInt(savedBalance);

// Обновление при смене вкладки
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        const saved = localStorage.getItem('cosmonaut_balance');
        if (saved) {
            state.balance = parseInt(saved);
            updateBalance();
        }
    }
});