// Главный див
let divtop = document.querySelector('#divtop');
// Меню
let divmenu = document.createElement('div');
divmenu.classList = 'divmenu';
let menu = `
<ul>
    <li id='page1' class='123'>Главная</li>
    <li id='pageinfo'>Инфо</li>
    <li>
      Классы
      <ul>
        <li id='pageclass11'>11 класс</li>
        <li id='pageclass10'>10 класс</li>
        <li id='pageclass9'>9 классы</li>
      </ul>
    </li>
    <li>Blog
      <ul>
        <li>123</li>
        <li>321</li>
      </ul>
    </li>
    <li>Contact</li>
  </ul>`;
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

