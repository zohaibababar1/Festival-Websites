function formSubmit() {
    const ticketType = document.getElementById('ticketType').value;
    const selectTicket = document.getElementById('selectTicket').value;
    const numberOfTicktes = document.getElementById('numberOfTicktes').value;
    const creditCard = parseInt(document.getElementById('creditCard').value);

    if (numberOfTicktes < 1) {
        alert('You must select a minimum of 1 ticket!');
        return;
    }

    if (!/^\d{6}$/.test(creditCard)) {
        alert("Credit card number must be exactly 6 digits long!");
        return;
      }



    // Assuming ticket prices are hardcoded for simplicity
    let pricePerTicket;

    // Set prices based on ticket type and category
    if (ticketType === 'oneDayPass') {
        // pricePerTicket = (selectTicket === 'standard') ? 100.00 : 150.00;
        if (selectTicket === 'standard') {
            pricePerTicket = 20.00;
        } else if (selectTicket === 'vip') {
            pricePerTicket = 40.00;
        } else if (selectTicket === 'premium') {
            pricePerTicket = 50.00;
        }
    } 
    else if (ticketType === 'threeDayPass') {
        if (selectTicket === 'standard') {
            pricePerTicket = 80.00;
        } else if (selectTicket === 'vip') {
            pricePerTicket = 120.00;
        } else if (selectTicket === 'premium') {
            pricePerTicket = 200.00;
        }
    }
    // Add other conditions based on additional ticket types

    // Calculate order summary
    const subtotal = numberOfTicktes * pricePerTicket;
    const tax = subtotal * 0.13;
    const finalPrice = subtotal + tax;

    // Display order summary
    const summaryDetails = '<p>Number of tickets: ' + numberOfTicktes + '</p>' +
                        '<p>Price per ticket: $' + pricePerTicket.toFixed(2) + '</p>' +
                        '<p>Subtotal: $' + subtotal.toFixed(2) + '</p>' +
                        '<p>Tax (13%): $' + tax.toFixed(2) + '</p>' +
                        '<p>Final Price: $' + finalPrice.toFixed(2) + '</p>';

                        document.getElementById('summaryDetails').innerHTML = summaryDetails;

                        // Show order summary section
                        document.getElementById('orderSummary').style.display = 'block'
}