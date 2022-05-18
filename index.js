let divtop = document.querySelector('#divtop');
let divmenu = document.createElement('div');
divmenu.classList = 'divmenu';
let menu = `
<ul>
    <li id='page1'>Главная</li>
    <li><a id='page2'>Инфо</a></li>
    <li>
      Классы
      <ul>
        <li>11 класс</li>
        <li>10 класс</li>
        <li>9 классы</li>
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
divtop.insertAdjacentElement('afterbegin', divmenu)
divmenu.insertAdjacentHTML('afterbegin', menu)

// разное

function xet (){
  console.log(123)
}

const xer = document.querySelector('#page2')
xer.classList = 'page2';
let x = xer.classList.value;

function fear(){
  y = x;
  if (y=='page2') return console.log('yes');
  else console.log('no')
}


console.log(fear());


xer.addEventListener('click', fear);

const page1 = document.querySelector('#page1');
page1.addEventListener('click', xet);

