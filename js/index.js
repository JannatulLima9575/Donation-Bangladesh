const mainBalanceElement = document.getElementById('main-balance');
const noakhaliAccountElement = document.getElementById('noakhali-account');
const noakhaliInputField = document.getElementById('noakhali-input-field');
// Flood at Noakhali Section 
const noakhaliDonationButton = document.getElementById('noakhali-donation-button');
noakhaliDonationButton.addEventListener('click', function () {
    const noakhaliInputFieldValue = parseFloat(noakhaliInputField.value) || 0;
    const mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    const noakhaliAccount = parseFloat(noakhaliAccountElement.innerText) || 0;

    const minusMainBalance = mainBalance - noakhaliInputFieldValue;
    const addedNoakhaliAccount = noakhaliInputFieldValue + noakhaliAccount;

    mainBalanceElement.innerText = minusMainBalance.toFixed(2); 
    noakhaliAccountElement.innerText = addedNoakhaliAccount.toFixed(2);
});

// Relief in Feni Section 
const feniAccountElement = document.getElementById('feni-account');
const feniInputField = document.getElementById('feni-input-field');
const feniDonationButton = document.getElementById('feni-donation-button');
feniDonationButton.addEventListener('click', function () {
    const feniInputFieldValue = parseFloat(feniInputField.value) || 0;
    let mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    let feniAccount = parseFloat(feniAccountElement.innerText) || 0;

    if (feniInputFieldValue > mainBalance) {
        alert("You don't have enough balance");
        return;
    }

    mainBalance -= feniInputFieldValue; 
    feniAccount += feniInputFieldValue; 

    mainBalanceElement.innerText = mainBalance.toFixed(2);
    feniAccountElement.innerText = feniAccount.toFixed(2);
});

// Quota Movement Section 
const quotaAccountElement = document.getElementById('quota-account');
const quotaInputField = document.getElementById('quota-input-field');
const quotaDonationButton = document.getElementById('quota-donation-button');
quotaDonationButton.addEventListener('click', function () {
    const quotaInputFieldValue = parseFloat(quotaInputField.value) || 0;
    const mainBalance = parseFloat(mainBalanceElement.innerText) || 0;
    const quotaAccount = parseFloat(quotaAccountElement.innerText) || 0;

    const minusMainBalance = mainBalance - quotaInputFieldValue;
    const addedquotaAccount = quotaInputFieldValue + quotaAccount;

    mainBalanceElement.innerText = minusMainBalance.toFixed(2); 
    quotaAccountElement.innerText = addedquotaAccount.toFixed(2);
});