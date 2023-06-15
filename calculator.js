const body = document.querySelector('body');
console.log(body)
const calculator = document.querySelector('.calculator')
console.log(calculator)
const display = document.querySelector('#display');
const numBtns = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal') 
const negative = document.querySelector('#negative')
//const decimal = document.querySelector('#decimal')
//const percent = document.querySelector('#percent')
const allClear = document.querySelector('#allClear')

// for use later in my code 
let operator = ''
let num = ''
let num2 = ''
let total = ''


// focus on whole string seperate at operator
// turn string back into a number

numBtns.forEach(function(btn) {
    //going through the array and for each button 
    btn.addEventListener('click', (e) => {
        // i added an event listner so that when a number button is clicked it causes an event 
        console.log(e.target.value)
        if(num && operator){
            num2 += e.target.value
            //that targets the value of the element 
            display.innerText = num2
            //which then inserts that value in my display container  
            return num2
            //returning only num2     
    }else{ 
        num += e.target.value
        display.innerText = num
        return num
        }    
    })
})


operators.forEach(function(ops) {
    //going through the array for each operator
    ops.addEventListener('click', (e) => {    
       if(num){
           operator += e.target.value
           return operator
        }
    })
})


negative.addEventListener('click', (e) => {
    //if num is multiplied by negative 1 only set num negative
    //! means not
    //&& means and
    // multiplying by -1 to get a negative number
    if(num && !num2){
        num = +num * -1
        display.innerText = num
        //console.log(`num: ${num}, num2: ${num2}`)
     }
     //if you have negative num2 and num only multiply negative 1  to num2. 
     else if(num2 && num){
        num2 = +num2 * -1
        display.innerText = num2
        //console.log(`num: ${num}, num2: ${num2}`)
    }
})


// + turns a string into a number.
// +num +num2
// could also use parseInt to turn string to a number.
// parseInt(num) parseInt(num2)

equal.addEventListener('click', (e) => {
    if(operator === '+'){
        total = +num + +num2
        console.log(total)
        display.innerText = total
    }else if(operator === '-'){
        total = +num - +num2
        display.innerText = total
    }else if(operator === '*'){
        total = +num * +num2
        display.innerText = total
    }else if(operator === '/'){
        total = +num / +num2
        display.innerText = total
    } 
})


allClear.addEventListener('click', (e) => {
    //brought it back to its original format or value if you prefer so that when the AC button is clicked it will 
    //cause this event which then will bring us back to our orignal display
    total = '';
    num = '';
    num2 = '';
    operator = ''; 
    display.innerText = '0';
})
 





//DONE





//  SIDE NOTES:

// negative.addEventListener('click', (e) => {
//     if(num){
//         num = +num * -1
//         display.innerText = num
//      }
//      if(num2){
//         num2 = +num2 * -1
//         display.innerText = num2
//     }
// })

// negative.addEventListener('click', (e) => {
//     if(num2 = +num2 * -1){
//         display.innerText = num2
//      }
// })

// function toNegative(){
//     let currentValue = negative
//     if(currentValue[0] === '-'){
//         currentValue -= currentValue.split(1)   
//     }
// }

// switch(e.target.innerText){
    //     case 'AC':
    //         display.innerText += '';
    //         break;
// }

// const {clear, negative, percent, divide, 
//     seven, eight, nine, multiply, four, 
//     five, six, subtract, one, two, three, 
//     add, zero, decimal, equal} = e.target
//     console.log(allClear.value)
//     console.log(negative.value)
//     console.log(percent.value)
//     console.log(divide.value)
//     console.log(seven.value)
//     console.log(eight.value)
//     console.log(nine.value)
//     console.log(multiply.value)
//     console.log(four.value)
//     console.log(five.value)
//     console.log(six.value)
//     console.log(subtract.value)
//     console.log(one.value)
//     console.log(two.value)
//     console.log(three.value)
//     console.log(add.value)
//     console.log(zero.value)
//     console.log(decimal.value)
//     console.log(equal.value)
