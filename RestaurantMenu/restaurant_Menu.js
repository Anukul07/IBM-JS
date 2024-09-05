const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

let breakfastMenuHTML = breakfastMenu.map((item,index) => `<p>Item ${index + 1}: ${item}`);
const breakfastPrice = ['$12', '$22.99', '$21.99', '$15']
const breakfastMenuWithPrice = breakfastMenuHTML.map((item,index)=> `${item} price: ${breakfastPrice[index]}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuWithPrice
console.log(breakfastMenuWithPrice)


let mainCourseItem = "";
mainCourseMenu.forEach((item,index) => {
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let desertMenuItem = ""
for(let i=0; i<dessertMenu.length; i++){
    desertMenuItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`
}
document.getElementById('dessertMenuItems').innerHTML = desertMenuItem;




