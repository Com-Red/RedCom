import menu from "./test.js";

// Главный див
const divtop = document.querySelector('#divtop');
// Див для записи класса для идентификатора активной страницы
const divid = document.createElement('div');
// Меню
const divmenu = document.createElement('div');
divmenu.classList = 'divmenu';

divtop.insertAdjacentElement('afterbegin', divmenu);
divmenu.insertAdjacentHTML('afterbegin', menu);

// Элементы меню
const page1 = document.querySelector('#page1');
const pageinfo = document.querySelector('#pageinfo');
const pageclass9 = document.querySelector('#pageclass9');
const pageclass10 = document.querySelector('#pageclass10'); 
const pageclass11 = document.querySelector('#pageclass11');
// Действия меню
function menu1 (e){
  if (e.target.id=='page1') {console.log('page1');}
  else if (e.target.id=='pageinfo') {console.log('pageinfo');}
  else if (e.target.id=='pageclass9') {console.log('pageclass9')}
  else if (e.target.id=='pageclass10') {console.log('pageclass10')}
  else if (e.target.id=='pageclass11') {console.log('pageclass11')}  
  else console.log('NO')
}
// Обработчики событий
page1.addEventListener('click', menu1);
pageinfo.addEventListener('click', menu1);
pageclass9.addEventListener('click', menu1);
pageclass10.addEventListener('click', menu1);
pageclass11.addEventListener('click', menu1);

//Блок по умолчанию
let but = document.createElement('button');
but.textContent = 'APP';
divtop.insertAdjacentElement('afterend', but);
let but2 = document.createElement('button');
but2.textContent = 'DEL';
divtop.insertAdjacentElement('afterend', but2);

// Работа кнопок меню в соответствии с условием 
function vopros(){
  if (divtop.classList.value == '123') console.log('NO')
  else {
    let divtest = document.createElement('div');
    divtest.textContent = '123';
    divtest.classList = 'test1';
    divtest.id = 'divtest';
    divtop.classList = '123';
    divtop.insertAdjacentElement('afterend', divtest);
  }
};

but.addEventListener('click', vopros);

but2.addEventListener('click', function del (){
  document.querySelector('.test1').remove();
});
