const display = document.querySelector('.display');
const prevNum = document.querySelector('.prevNum');
const currentNum = document.querySelector('.currentNum');
const mathSign= document.querySelector('.mathSign');
const numbers = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const clearMemoryBtn = document.querySelector('.clearMemory');
const operatorsBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equal');

let result = '';

function displayNumbers(){
    if(this.textContent ==='.' && currentNum.innerHTML.includes('.')) return;
    currentNum.innerHTML+=this.textContent;
}

function operate(){
    if(currentNum === '' && this.textContent==='-'){ 
        currentNum.innerHTML= '-';
        return;
    }
    else if(currentNum.innerHTML===''){
        return;
    }

    if(mathSign.innerHTML!==''){
        showResult();
    }
    
    prevNum.innerHTML= currentNum.innerHTML;
    mathSign.innerHTML=this.textContent;
    currentNum.innerHTML='';

}

function showResult(){
    if(prevNum.innerHTML ==='' || currentNum.innerHTML==='') return;
    

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
        result= prev%current;
        break;
        case '&radic;':
        result= SQRT1_2(current);
        break;
        case'&#247;':
        result = prevNum/ currentNum;
        break;
        case'x':
        result=prevNum * currentNum;
        break;
        case'+':
        result = prevNum+ currentNum;
        break;
    

        
    }
    currentNum.innerHTML=result;
    prevNum.innerHTML='';
    mathSign.innerHTML='';

}

function clearScreen(){
    result='';
    currentNum.innerHTML='';
    prevNum.innerHTML='';
    mathSign.innerHTML='';

}

function clearMemory(){

}




operatorsBtn.forEach((button) => {
    button.addEventListener('click', operate)});

equalsBtn.addEventListener('click',showResult);
clearBtn.addEventListener('click',clearScreen);
clearMemoryBtn.addEventListener('click',clearMemory);

numbers.forEach((button)=>{
    button.addEventListener('click', displayNumbers)
})












