const display = document.querySelector('.display');
const prevNum = document.querySelector('.prevNum p');
const mathSign= document.querySelector('.mathSign');
const numbers = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const clearSaveBtn = document.querySelector('.clearSave');
const operatorsBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equal');
const switchBtn = document.querySelector('.switch');
const memory = document.querySelector('.memory-panel')
const addToMemory = document.querySelector('.plus-memory')
const removeFromMemory = document.querySelector('.minus-memory');
const clearMemoryBtn= document.querySelector('.clear-history');
let currentNum = document.querySelector('.currentNum');
let memoryNumber= document.querySelector('.memoryNum')

let saveMemory = 0;
let result = '';
let memoryNum=Number(memoryNumber)
memoryNum=0;

function displayNumbers(){
    
    if(this.textContent === '.' && currentNum.innerHTML.includes('.')) return;
    currentNum.innerHTML+=this.textContent;
    return;
   
}

function operate(){
   
    if(currentNum.innerHTML === '' && this.textContent === '-'){ 
        currentNum.innerHTML = '-';
        return;
    }
    else if(currentNum.innerHTML === ''){
        return;
    }

    if(mathSign.innerHTML !== ''){
        showResult();
    }
    
    prevNum.innerHTML = currentNum.innerHTML;
    mathSign.innerHTML = this.textContent;
    console.log(this)
    currentNum.innerHTML = '';

}

function showResult(){
    if(prevNum.innerHTML ==='' || currentNum.innerHTML === '') return;

    let prev = Number(prevNum.innerHTML);
    let current = Number(currentNum.innerHTML);
    let sign = mathSign.innerHTML;

    switch(sign){
        case '+':
        result = prev + current;
        break;
        case '-':
        result= prev - current;
        break;
        case '%':
        result= prev % current;
        break;
        case'/':
        result = prev /current;
        break;
        case '2^':
        result = prev ** current;
        break;
        case'x':
        result=prev * current;
        break;
        case'+':
        result = prev + current;
        break;
    

        
    }
    addToHistory();

    currentNum.innerHTML = result;
    prevNum.innerHTML='';
    mathSign.innerHTML='';

}

function clearScreen(){
    result = '';
    currentNum.innerHTML = '';
    prevNum.innerHTML = '';
    mathSign.innerHTML = '';

}

function clearMemory(){
memory.innerHTML=''
}

function switchCalculator(){
   display.classList.toggle('switchDisplay');
   prevNum.innerHTML='';
   currentNum.innerHTML='';
   mathSign.innerHTML=''
}

function addToHistory(){
    const newHistoryItem= document.createElement('li');
    newHistoryItem.innerHTML= `${currentNum.innerHTML} ${mathSign.innerHTML} ${prevNum.innerHTML} = ${result}`;
    memory.appendChild(newHistoryItem)
};



function addNumberToMemory(){

    let current= Number(currentNum.innerHTML)
    
    if(memoryNum !==0){
        memoryNum += current;
        console.log(memoryNum)

    }else{

        memoryNum+=current;
        console.log(memoryNum)
    }
    clearScreen();

}

function removeMemories(){

    let current= Number(currentNum.innerHTML)
    if(memoryNum !==0){
        memoryNum -= current;
        console.log(memoryNum)

    }else{
        memoryNum-=current;
        console.log(memoryNum)
    }
    clearScreen();
}

function clearSaveNumbers(){
    memoryNum=0;
    currentNum.innerHTML=''
}




operatorsBtn.forEach((button) => {
    button.addEventListener('click', operate)});

equalsBtn.addEventListener('click',showResult);
clearBtn.addEventListener('click',clearScreen);
clearMemoryBtn.addEventListener('click',clearMemory);

numbers.forEach((button)=>{
    button.addEventListener('click', displayNumbers);
});
switchBtn.addEventListener('click', switchCalculator);
addToMemory.addEventListener('click', addNumberToMemory);
removeFromMemory.addEventListener('click' , removeMemories)

clearSaveBtn.addEventListener('click', clearSaveNumbers);

// Nie dziala wynik z pamieci (wykonsolowane)
