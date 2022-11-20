console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    console.log('addItem', item );
    basket.push(item);
    return true;
}


addItem('milk');
addItem('cheese');
addItem('grapes');
addItem('eggs')
console.log(`Basket is ${basket}`);
console.log('Adding butter (expect true)', addItem('butter'));
console.log(`Basket is now ${basket}`);

function listItems(){
    console.log(basket);
}

let index = 0 
let basketLength = 5
while(index<basketLength){
    console.log(basket[index])
    index++;
}
function empty(){
    return Array.length=0
}