let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue(count);
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}
function checkCountValue(count){
    switch(count){
        case 10:
            alert("Your IG account gained 10 followers! Congraturlations");
            break;
        case 20:
            alert("Your IG account gained 20 followers! Congraturlations");
            break;
        default:
            break;
    }
}
function resetCount(){
    count = 0;
    document.getElementById("countDisplay").innerHTML = count;
}