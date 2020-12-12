'use strict';
const output=document.getElementById('output'),
    input=document.getElementById('input'),
    ac=document.getElementById('ac'),
    backspaceKey=document.getElementById("backspace"),
    getResult=document.getElementById('total'),
    numbers=document.querySelectorAll('.number'),
    operator=document.querySelectorAll('.operator'),
    all=document.querySelectorAll('.number,.operator');

let a,b,c,lastChar,operation;
backspaceKey.textContent='_<';
output.value=' ';

ac.addEventListener('click',clean);
backspaceKey.addEventListener('click',backspace);

getResult.addEventListener('click',() => {
    b=input.value-'';
    if (output.textContent!==''&&input.value!=='') {
    output.textContent=`${a}${operation}${b}`;
    input.value=operate();
    }
});

operator.forEach(E => E.addEventListener('click',(e) => ReOp(e)));
numbers.forEach(E => E.addEventListener('click',(e) => {
    input.value+=e.target.textContent;
    lastChar=e.target.textContent;
}));
input.addEventListener('keypress',(e) => {
    if (!e.key.match(/[+-/*^]|\d/)) {
        e.preventDefault();
    }
});
function ReOp(e) {
    if (output.textContent!==''&&input.value!=='') {
        getResult.dispatchEvent(new Event('click'));
        a=input.value-'';
        console.log(a);
    }
    operation=e.target.textContent;
    if (a===undefined) {
        a=input.value-'';
    } else {
        b=input.value-'';
        input.value=operate();
    }
    output.textContent=`${a}${operation}`;
    input.value=null;
}
function operate() {
    switch (operation) {
        case '+': return a+b;
        case '-': return a-b;
        case '/': return a/b;
        case '*': return a*b;
        case '^': return Math.pow(a,b);
        case '%': return b/100*a;
        default: return b;
    }
}
function backspace() {
    input.value=input.value.slice(0,- 1);
}
function clean() {
    input.value='';
    output.textContent='';
    a=undefined;
    b=undefined;
}