const restaurantInfo = {
    "restaurant1": "Restaurant 1 offers a variety of Italian dishes and a cozy atmosphere.",
    "restaurant2": "Restaurant 2 specializes in fresh seafood with an oceanfront view.",
    "restaurant3": "Restaurant 3 is known for its authentic Asian fusion cuisine.",
    "restaurant4": "Restaurant 4 provides a fine dining experience with a full wine list."
};

function displayRestaurantInfo() {
    const restaurant = document.getElementById("restaurant").value;
    const restaurantInfoDisplay = document.getElementById("restaurantInfo");

    if (restaurant) {
        restaurantInfoDisplay.innerHTML = restaurantInfo[restaurant];
    } else {
        restaurantInfoDisplay.innerHTML = '';
    }
}

const tablePrices = {
    "1": 500,
    "2": 700,
    "3": 600,
    "4": 400
};

function displayTablePrice() {
    const tableNumber = document.getElementById("tableNumber").value;
    const billAmountInput = document.getElementById("billAmount");

    if (tableNumber) {
        const price = tablePrices[tableNumber];
        billAmountInput.value = price;
    } else {
        billAmountInput.value = '';
    }
}

function calculateGratuity() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById("result").innerHTML = `Tip Amount: ₹${tipAmount.toFixed(2)}<br>Total Amount: ₹${totalAmount.toFixed(2)}`
    document.getElementById("paymentForm").style.display = "block";
}
function processOnlinePayment() {
    alert("Online payment completed successfully! Thank you for your tip.");
    document.getElementById("paymentForm").style.display = "none";
    document.getElementById("result").innerHTML += "<br>Payment Status: Successful!";
}
function submitFeedback() {
    const waiterName = document.getElementById("waiterName").value;
    const serviceRating = document.getElementById("serviceRating").value;
    const comments = document.getElementById("comments").value;

    if (!serviceRating || serviceRating < 1 || serviceRating > 5) {
        alert("Please provide a valid rating between 1 and 5.");
        return;
    }

    document.getElementById("feedbackResult").innerHTML = `
        Thank you for your feedback!<br>
        Waiter: ${waiterName || "N/A"}<br>
        Rating: ${serviceRating}/5<br>
        Comments: ${comments}
    `;

    document.getElementById("feedbackForm").reset();
}
