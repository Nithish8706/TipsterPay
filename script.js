// Toggle Navigation Menu for Mobile View
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Display Restaurant Information
function displayRestaurantInfo() {
    const restaurantSelect = document.getElementById('restaurant');
    const restaurantInfo = document.getElementById('restaurantInfo');
    if (restaurantSelect.value) {
        restaurantInfo.innerHTML = 'Selected Restaurant: ' + restaurantSelect.options[restaurantSelect.selectedIndex].text;
    } else {
        restaurantInfo.innerHTML = '';
    }
}

// Display Table Price Information
function displayTablePrice() {
    const tableSelect = document.getElementById('tableNumber');
    const waiterNameDisplay = document.getElementById('waiterNameDisplay');
    const tableNumber = tableSelect.value;
    let priceInfo = '';
    let waiterName = '';

    // Set pricing based on table selection
    switch (tableNumber) {
        case '1':
            priceInfo = 'Price: $45.00';
            waiterName = 'Waiter: Ligith';
            break;
        case '2':
            priceInfo = 'Price: $60.00';
            waiterName = 'Waiter: Joshua';
            break;
        case '3':
            priceInfo = 'Price: $75.00';
            waiterName = 'Waiter: Mithun';
            break;
        case '4':
            priceInfo = 'Price: $90.00';
            waiterName = 'Waiter: Nithish';
            break;
        default:
            priceInfo = 'Price: $0.00';
            waiterName = 'Waiter: N/A';
            break;
    }

    // Display the results
    document.getElementById('billAmount').value = priceInfo.split('$')[1]; // Extract price from string
    waiterNameDisplay.innerHTML = waiterName;
}

// Calculate Gratuity
function calculateGratuity() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        resultDiv.innerHTML = 'Please enter valid numbers for both the bill amount and the tip percentage.';
        return;
    }

    const gratuity = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + gratuity;

    resultDiv.innerHTML = `
        <p>Gratuity (Tip): $${gratuity.toFixed(2)}</p>
        <p>Total Amount (Bill + Tip): $${totalAmount.toFixed(2)}</p>
    `;

    // Show the payment option
    document.getElementById('paymentForm').style.display = 'block';
}

// Process Online Payment
function processOnlinePayment() {
    alert('Payment successfully processed!');
}

// Submit Feedback
function submitFeedback() {
    const waiterName = document.getElementById('waiterName').value;
    const serviceRating = document.getElementById('serviceRating').value;
    const comments = document.getElementById('comments').value;
    const feedbackResult = document.getElementById('feedbackResult');

    // Validate inputs
    if (!serviceRating || !comments) {
        feedbackResult.innerHTML = 'Please provide a rating and comments.';
        return;
    }

    // Display feedback result
    feedbackResult.innerHTML = Thank you for your feedback! You rated the service: ${serviceRating}/5.;
}
