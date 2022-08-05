let numbers = [];
//1. Tạo mảng  
function number(){
let addNumber = +document.getElementById("addNumber").value;
numbers.push(addNumber);
let array1 = ""
array1 = numbers
console.log(numbers);
let divResult = document.getElementById("result");
divResult.style.display = "block";
divResult.innerHTML = array1; 
};
//2. Tính tổng các số dương trong mảng
function sum(){
    let sum = numbers.reduce((sum, value)=>{
return value > 0 ? sum + value: sum;
    },0);
console.log(sum);
let divResult = document.getElementById("get");
divResult.style.display = "block";
divResult.innerHTML = "Tổng các số dương là: " + sum;
};
//3. Tìm số nhỏ nhất trong mảng
function find1(){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] < min){
            min = numbers[i];
        }
    }
    console.log(min);
    let divResult = document.getElementById("findmin");
    divResult.style.display = "block";
    divResult.innerHTML = "Số nhỏ nhất trong mảng là: "+ min;
};
//4. Tìm số dương nhỏ nhất trong mảng
function find2(){
    let positive =[];
    for (let i=0; i< numbers.length; i++){
if (numers[i] >0){
    positive.push(numbers[i]);
}
    }
    let negative = "";
    if (negative === 0){
        negative = "Không có số dương trong mảng";
    }else {
        let positive1 = positive[0];
        for (let i = 0; i< positive.length; i++){
            if (positive[i] < positive1){
                positive1 = positive[i];
            }
        }
        negative = " Số dương nhỏ nhất là: " 
            }
            let divResult = document.getElementById("minpositive");
            divResult.style.display = "block";
            divResult.innerHTML = negative;
        };
// 5. Tìm số chẵn cuối cùng trong mảng. 
//Nếu mảng không có giá trị chẵn thì trả về -1 
function even(){
    let even = -1;
    for ( let i=0; i < numbers.length; i++){
        if (numbers[i]%2 === 0){
            even = numbers[i];
        }
    }
    console.log(even);
    let divResult = document.getElementById("find3");
    divResult.style.display = "block";
    divResult.innerHTML = "Số chẵn nằm cuối cùng trong mảng là: " + even;
};

//6. Đổi chỗ 2 giá trị trong mảng theo vị trí
function exchange(){
    let order1 = +document.getElementById("order1").value;
let order2 = +document.getElementById("order2").value;

let exchange = numbers[order1];
numbers[order1] = numbers[order2];
numbers[order2]=exchange;
console.log(numbers);
let divResult = document.getElementById(exchange);
divResult.style.display = "block";
divResult.innerHTML = "Mảng sau khi đổi chỗ: " + numbers;
};
