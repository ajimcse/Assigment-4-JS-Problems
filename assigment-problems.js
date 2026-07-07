function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income){
        return 'Invalid Input'
    }  
    const mothleSeving = income - expenses;
    const tex = mothleSeving * 20 / 100;
    return tex;
}
const result = calculateTax(100000, 3000)
console.log(result)
