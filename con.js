const readline = require('readline');

// Define the fixed exchange rate
const FIXED_RATE = 82; // Example: 1 USD = 82 INR

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function showMenu() {
    console.log(`
    Currency Converter:
    1. Convert INR to USD
    2. Convert USD to INR
    3. Exit
    `);
    rl.question('Select an option (1/2/3): ', handleUserInput);
}

function handleUserInput(option) {
    switch (option) {
        case '1':
            rl.question('Enter amount in INR: ', (amount) => {
                const inUSD = (parseFloat(amount) / FIXED_RATE).toFixed(2);
                console.log(`${amount} INR is approximately ${inUSD} USD.`);
                showMenu();
            });
            break;
        case '2':
            rl.question('Enter amount in USD: ', (amount) => {
                const inINR = (parseFloat(amount) * FIXED_RATE).toFixed(2);
                console.log(`${amount} USD is approximately ${inINR} INR.`);
                showMenu();
            });
            break;
        case '3':
            console.log('Thank you for using the currency converter. Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
    }
}

console.log('Welcome to the Currency Converter!');
showMenu();

