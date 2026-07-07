function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return 'Invalid Input'
    }
    const mothleSeving = income - expenses;
    const tex = mothleSeving * 20 / 100;
    return tex;
}
// const result = calculateTax(100000, 3000)
// console.log(result)


function sendNotification(email) {

    if (typeof email !== "string" || !email.includes("@")) {
        return "Invalid email";
    }

    const parts = email.split("@");

    return parts[0] + " sent you an email from " + parts[1];
}
 
const result = sendNotification('fahim234.hotmail.com')
console.log(result)

 