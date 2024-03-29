//========================================================================================================================================================

// Задача №1
// Отримати в константу елемент <body>


const bodyElement = document.body;
// console.log(bodyElement);


// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)


function addUl(value = 3) {
	const listAdd = document.createElement(`ul`);
	for (let i = 1; i <= value; ++i) {
		const listItem = document.createElement(`li`);
		listItem.textContent = `Пункт №${i}`;
		listAdd.appendChild(listItem)
	}
	bodyElement.insertAdjacentElement(`afterbegin`, listAdd)
}
addUl(7)


// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.


bodyElement.classList.add(`loaded`);
if (bodyElement.classList.contains(`loaded`)) {
	bodyElement.style.color = `green`;
}


// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)"


const items = document.querySelectorAll(`[class*=__item]`);
if (items) {
	items.forEach((value, index) => {
		value.classList.add(`active`);
		index.textContent = `Елемент №${value + 1}`
	});
}


// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки


const button = document.querySelector(`.button`)

if(button){
	function scrollToBut(element) {
		element.scrollIntoView({
			behavior: "smooth"
		})
	}
}
scrollToBut(button)



// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


const link = document.querySelector(`.menu__link`);

if(link.hasAttribute(`data-color`)){
	console.log(`Yes`);
	link.setAttribute(`data-color`, 100)
}

const linkValue = parseFloat(link.getAttribute(`data-color`));
if(linkValue < 200){
	link.style.color = `red`;
}










//========================================================================================================================================================