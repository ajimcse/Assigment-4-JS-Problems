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

// const result = sendNotification('fahim234.hotmail.com')
// console.log(result)

function checkDigitsInName(name) {

    for (const ch of name) {
        if (ch >= "0" && ch <= "9") {
            return true;
        }
    }
    return false;

}

// const result = checkDigitsInName(' n9ayeem')
// console.log(result)



function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }
    let totalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily === true) {
        totalScore = totalScore + 20;
    }

    if (totalScore >= 80) {
        return true;
    }
    return false;
}

const student = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true
};

console.log(calculateFinalScore(student));

 function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }
    let sum = 0
    for (const time of waitingTimes) {
        sum = sum + time
    }
    const avg = Math.round(sum / waitingTimes.length);
    const israt = serialNumber - 1
    const isratTime = israt - waitingTimes.length
    const isratSerilTime = isratTime * avg
    return isratSerilTime
}
const resul = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(resul)