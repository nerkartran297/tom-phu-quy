const Form1 = document.querySelector("#user_booking");

Form1.addEventListener("submit", () => {
    const urlObject = new URL("https://script.google.com/macros/s/AKfycbyqs1upJ111FDObhzGsvhxz0oxNQSAIfbN_e0zsWNebsYTSg79RKAc5HBhFyE5GR7s49A/exec");
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userPhone = document.getElementById('phone-number').value;
    const quantityOfProduct = document.getElementById('quantity').value;
    const messageOfCustomer = document.getElementById('message').value;
    urlObject.searchParams.set("userName", userName);
    urlObject.searchParams.set("userEmail", userEmail);
    urlObject.searchParams.set("userPhone", userPhone);
    urlObject.searchParams.set("quantity", quantityOfProduct);
    urlObject.searchParams.set("messsage", messageOfCustomer);
    fetch(urlObject.toString());
});

const Form2 = document.querySelector("#user_contact");

Form2.addEventListener("submit", () => {
    const urlObject = new URL("https://script.google.com/macros/s/AKfycby5wdinYPwLe-L06u03XQ5p6RZW9q0dfMn_blJxVig3P8Z7QLlRJP3k_LwWCDWNttKu/exec");
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const messageContact = document.getElementById('message').value;
    urlObject.searchParams.set("userName", userName);
    urlObject.searchParams.set("userEmail", userEmail);
    urlObject.searchParams.set("subject", subject);
    urlObject.searchParams.set("messsageCT", messageContact);
    fetch(urlObject.toString());
});