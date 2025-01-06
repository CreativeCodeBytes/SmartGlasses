document.getElementById("generate-bill").addEventListener("click", function () {
    const customerName = document.getElementById("customer-name").value;
    const contactNumber = document.getElementById("contact-number").value;
    const productType = document.getElementById("product-type").value;
    const company = document.getElementById("company").value;
    const gender = document.getElementById("gender").value;
    const leftEyePower = document.getElementById("left-eye-power").value;
    const rightEyePower = document.getElementById("right-eye-power").value;
    const lensOption = document.getElementById("lens-option").value;
    const paymentOption = document.getElementById("payment-option").value;
    const productPrice = document.getElementById("product-price").value;

    const currentDate = new Date().toLocaleDateString("en-US");

    // Check if all fields are filled
    if (!customerName || !contactNumber || !productType || !productPrice || !leftEyePower || !rightEyePower || !lensOption || !paymentOption) {
        alert("Please fill in all fields!");
        return;
    }

    // Format the product price
    const formattedPrice = parseFloat(productPrice).toFixed(2);

    // Generate Bill Details for Customer
    const customerBillDetails = `
Shri Optical Store
Date: ${currentDate}
----------------------------
Customer Name: ${customerName}
Contact Number: ${contactNumber}
Product: ${productType} (${company})
Gender: ${gender}
Left Eye Power: ${leftEyePower}
Right Eye Power: ${rightEyePower}
Lens Option: ${lensOption}
Payment Option: ${paymentOption}
Product Price: ₹${formattedPrice}
----------------------------
Total Amount: ₹${formattedPrice}
----------------------------
Thank you for your purchase!
    `;

    // Generate Bill Details for Vendor (excluding Product Price and Payment Option)
    const vendorBillDetails = `
New Order - Shri Optical Store
Date: ${currentDate}
----------------------------
Customer Name: ${customerName}
Contact Number: ${contactNumber}
Product: ${productType} (${company})
Gender: ${gender}
Left Eye Power: ${leftEyePower}
Right Eye Power: ${rightEyePower}
Lens Option: ${lensOption}
----------------------------
Please process this order.
    `;

    // Display Bill
    const billOutput = document.getElementById("bill-output");
    const billText = document.getElementById("bill-details");
    billText.textContent = customerBillDetails;
    billOutput.classList.remove("hidden");

    // Show the download button
    const downloadButton = document.getElementById("download-bill");
    downloadButton.classList.remove("hidden");

    // Add download functionality
    downloadButton.onclick = function () {
        const blob = new Blob([customerBillDetails], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "optical_store_bill.txt";
        link.click();
    };

    // Send bill to customer's WhatsApp
    sendToWhatsApp(contactNumber, customerBillDetails);

    // Send order details to vendor's WhatsApp (replace 'VENDOR_PHONE_NUMBER' with actual number)
    sendToWhatsApp('VENDOR_PHONE_NUMBER', vendorBillDetails);
});

function sendToWhatsApp(phoneNumber, message) {
    // Format the phone number (remove any non-digit characters)
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
}

