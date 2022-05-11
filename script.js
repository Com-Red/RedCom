let header = document.getElementById('header');
header.classList = 'header';

let texthed = `ТСЖ Благовест`;
let zagolovok = document.createElement('h1');
zagolovok.append(texthed);
header.append(zagolovok);

let menuhed = `
<ul class='menu'>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li><a href='https://mail.ru'>4</a></li>
</ul>`
header.insertAdjacentHTML('beforeend', menuhed);

// кнопки меню
function glav(){
  let button = document.createElement('button');
  let button2 = document.createElement('button');
  let div3 = document.createElement('div')
  div3.classList = 'div3';
  button.classList = 'button28';
  button2.classList = 'button28';
  button.textContent = `Элемент1`;
  button2.textContent = `Элемент2`;

  header.append(button);
  header.append(button2);
  header.append(div3);

  function click1(){
    let text1 = `<div><h1>123</h1></div>`;
    div3.innerHTML = text1;
  }

  function click2(){
    let text2 = `<div><h1>456</h1></div>`;
    div3.innerText = todoin.value;
  }

  button.addEventListener('click', click1)
  button2.addEventListener('click', click2);
}
glav();

// ТУДУ лист

function todolist(){
let todo = document.createElement('div');
todo.classList = 'tododiv';
document.body.append(todo);

let todoin = document.createElement('input');
let todobut = document.createElement('button');
let todoul = document.createElement('ul');
todoin.classList = 'todoin';
todobut.classList = 'todobut';
todobut.textContent = 'Добавить дело';
todo.append(todoin, todobut, todoul);

let todomas = [];

todobut.addEventListener('click', function(){
  let newTodo = {
    todo: todoin.value,
    checker: false,
    important: false
  };
  todomas.push(newTodo);
  displayMesseges()
})

function displayMesseges(){
  let displayMessege = '';
  todomas.forEach(function(item, i){
    displayMessege += `
    <li>
      <input type='checkbox' id='item_${i}'>
      <label for='item_${i}'>${item.todo}</label>
    </li>`
    todoul.innerHTML = displayMessege;
  })
}

}
todolist();
