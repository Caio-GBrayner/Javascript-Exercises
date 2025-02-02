let formatter = (local, currency, value) => {
    let formatterValue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formatterValue;
}

const taxCalculator = (sum, percentage, local, currency) => {
    let tax = sum * (percentage / 100);
    let total = sum + tax;

    console.log(`
        sum before tax : ${formatter(local, currency,sum)}
        tax percentage : ${percentage}%
        tax            : ${formatter(local, currency, tax)}
        total          : ${formatter(local, currency, total)}
    `);
}
        taxCalculator(39.95, 18,"en-En", "USD" );  // Currency symbol prefixed
