const cle = document.getElementById('clear');
const roo = document.getElementById('root');
const del = document.getElementById('del');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const mul = document.getElementById('mul');
const eql = document.getElementById('eql');
const _1 = document.getElementById('1');
const _2 = document.getElementById('2');
const _3 = document.getElementById('3');
const _4 = document.getElementById('4');
const _5 = document.getElementById('5');
const _6 = document.getElementById('6');
const _7 = document.getElementById('7');
const _8 = document.getElementById('8');
const _9 = document.getElementById('9');
const _0 = document.getElementById('0');
const _00 = document.getElementById('00');
const dgt = document.getElementById('ans');

let ans = document.getElementsByClassName('result');

_1.addEventListener('click', dis('1'));
_2.addEventListener('click', dis('2'));
_3.addEventListener('click', dis('3'));
_4.addEventListener('click', dis('4'));
_5.addEventListener('click', dis('5'));
_6.addEventListener('click', dis('6'));
_7.addEventListener('click', dis('7'));
_8.addEventListener('click', dis('8'));
_9.addEventListener('click', dis('9'));
_0.addEventListener('click', dis('0'));
_00.addEventListener('click', dis('00'));


function dis(a){
    dgt.innerText += a;
}