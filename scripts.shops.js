// Аналогично game.js, но с обновлением баланса из localStorage
// После успешной покупки:
state.balance += pack.amount;
localStorage.setItem('cosmonaut_balance', state.balance);