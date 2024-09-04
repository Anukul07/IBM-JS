function groceryTracker(){
    let amount1 = parseFloat(document.getElementById('Grocery-1').value);
    let amount2 = parseFloat(document.getElementById('Grocery-2').value);
    let amount3 = parseFloat(document.getElementById('Grocery-3').value);
    const sum = amount1 + amount2 + amount3;
    document.getElementById('result').innerText= `The total amount is : $${sum}`
}
