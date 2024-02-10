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