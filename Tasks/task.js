// 1. Создайте объект с ключами: "car" и значением "audi", "model" и значением "8". 

// 2. Создайте функцию с одним параметром, например, "countryUsed" и выводящую в консоль: countryUsed, car и model. 

// 3. Передайте контекст созданной функции, использую методы call, apply и bind. 

// 4. Создайте функцию, которая принимает два числа, и возвращает их сложение.

// 5. Создайте функцию, которая принимает неизвестное количество параметров, и возвращает результат их умножения. 

let carObj = {car: "audi", model: 8};
function carFunc (countryUsed){
    console.log(countryUsed + this.car + this.model);
}

carFunc.call(carObj, "France",);
carFunc.apply(carObj, ["Germany"]);
let carInfoDefault = carFunc.bind(carObj, "France");
carInfoDefault();



function numb(a, b){
if(typeof a === 'number' && typeof b ==='number'){
    return a + b;
}
    
}

let updatedNumber = numb.bind(null, 10);

console.log(updatedNumber(6));

function func(){
    let multi = 1;
    Array.prototype.forEach.call(arguments, (item) => multi *= item);
    console.log(multi);
}
func(1,2,3,4,5);