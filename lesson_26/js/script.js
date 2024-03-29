"use strict"

//? Масив
// const someArray = [`Nik`, 10, false, Infinity]
// console.log(someArray);
// console.log(typeof someArray[0]);

//? Об'єкти
// const someObject = {
// 	name: `Nik`,
// 	age: 33,
// 	born: `Kyiv`
// }
// console.log(someObject);
// console.log(someObject.born);


//* Події
//! Синтаксис події
// elem/document.addEventListener("ім'я події", func, options)
// elem/document.addEventListener("ім'я події", ()=>{ code }, options);


// const link = document.querySelector(`.menu__link`);

// link.addEventListener(`click`, function () {
// code 
// })

//! або окремо створюємо і додаємо функцію, яка буде спрацьовувати у випадку кліку!

// link.addEventListener(`click`, clickReaction);

// function clickReaction() {
// 	console.log(`Yeap!`);
// }

// часто використовуються такі події :
// link.addEventListener("click", clickReaction)
// link.addEventListener("mouseenter", clickReaction)
// link.addEventListener("mouseleave", clickReaction)
// link.addEventListener("mousemove", clickReaction);

//? Події для багатьох елементів

// const links = document.querySelectorAll(`.menu__link`);

// links.forEach(link =>{
// 	link.addEventListener(`click`, clickReaction);
// });

//! e - event - подія! Часто пишеться просто скорочення - e
// Тип події
//console.log(e.type);
// Об'єкт на якому створив обробник
//console.log(e.target);
// Положення курсора по осі X відносно вікна
//console.log(e.clientX);
// Положення курсора по осі Y відносно вікна
//console.log(e.clientY);
// Положення курсора по осі X відносно документу
//console.log(e.pageX);
// Положення курсора по осі Y відносно документу
//console.log(e.pageY);

// function clickReaction(e) {
// 	console.log('Click, click)');
// console.log(e.target);

// const tag = e.target.tagName;
// if(tag === "BUTTON") {
// 	alert(`BUTTON!`)
// }

// e.preventDefault() - прибирає стандартну поведінку тегу (наприклад перехід за посиланням)

// }


//* Делегування події


// document.addEventListener(`click`, documentAction);

// function documentAction(e) {
// 	//! Два кроки
// 	// Крок №1 отримання об'єкту взаєдії
// 	const targetElement = e.target
// 	console.log(targetElement);
// 	// Крок №2 перевірка - чи є об'єкт взаєдії
// 	// тим який нам потрібен
// 	if (targetElement.closest('.menu__link')) {
// 		console.log('так, це те що нам потрібно!')
// 		e.preventDefault()
// 	}

// 	if (targetElement.closest('.button')) {
// 		console.log('так, це теж те що нам потрібно!')
// 		e.preventDefault()
// 	}

// 	if (!targetElement.closest('.menu')) {
// 		// закриваємо меню
// 	}
// }

// const page = document.querySelector('.page');
// page.insertAdjacentHTML("beforeend", `<a href="#" class="menu__link">я посилання</a>`)


//* Основні події миші
// click, mouseenter, mouseleave, mousemove

// mouseenter - наведення миші
// mouseleave - переведення миші
// mousemove - рух миші

//? Scroll
//window.addEventListener("scroll", func);

// window.addEventListener("scroll", windowScroll);
// const upButton = document.querySelector('.up-button') 
// function windowScroll(e) {
// 	console.log(window.scrollY);
// 	if (window.scrollY >= 400) {
// 		upButton.classList.add('up-button--active')
// 	} else {
// 		upButton.classList.remove('up-button--active')
// 	}
// }


//?Intersection Observer API
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//! код для анімації об’єктів при появі!


/*
let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	// Відсоток від розміру об'єкту. 
	// При появі якого спрацьовує подія
	// Де 0 це будь яка поява
	// 100 це повна поява об'кта в в'юпорті
	threshold: 0.3,
};

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if (entry.isIntersecting) {
			targetElement.classList.add("show");
			console.log('я тебе бачу');
		} else {
			targetElement.classList.remove("show");
			console.log('я тебе не бачу');
		}
	});
}

let observer = new IntersectionObserver(callback, options);

// якщо один об'єкт
const target = document.querySelector(".button");
observer.observe(target);

// або якщо багато об'єктів
let someElements = document.querySelectorAll("[class*='--anim']");
someElements.forEach(someElement => {
	observer.observe(someElement);
});

let someElementsRight = document.querySelectorAll("[class*='--anim-right']");
someElements.forEach(someElement => {
	observer.observe(someElement);
});
*/


//* Завантаження


//? браузер повністю завантажив HTML,
// було побудовано DOM-дерево, але зовнішні ресурси,
// такі як картинки <img> і стилі,
// можуть бути ще не завантажені.

// window.addEventListener("DOMContentLoaded ", domLoaded);
// function domLoaded(e) {

//? браузер завантажив HTML і зовнішні ресурси
// (картини, стилі і т.д.).

// window.addEventListener("load", pageLoaded);
// function pageLoaded(e) {
// 	document.documentElement.classList.add('loaded');
// }


//* Таймер


// function someFunc() {
// 	console.log('go go go');
// }

//? Затримка виконання коду
// setTimeout(() => {
// 	someFunc();
// }, 3000);

//? Інтервал
// setInterval();

//? Зупинка інтервалу
//clearInterval(timer);

// let i = 5;
// let timer = setInterval(() => {
// 	console.log(i);
// 	i === 1 ? clearInterval(timer) : null;
// 	--i;
// }, 1000);


//* AJAX


// async function addContent() {
// 	const response = await fetch('url', {});
// 	if (response.ok) {
// 		let responseResult = await response.json();
// 	} else {
// 		alert("Помилка");
// 	}
// }
// addContent();

/*
document.addEventListener('click', documentAction)

function documentAction(e) {
	const targetElement = e.target
	//! Меню бургер
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
		//! Навігація по сторінці (прокрутка до секції)
	} else if (targetElement.closest('.menu__link')) {
		if (document.documentElement.classList.contains('menu-open')) {
			document.documentElement.classList.remove('menu-open')
		}
		const link = targetElement.closest('.menu__link')
		const goto = link.dataset.goto
		const gotoElement = document.querySelector(goto)

		if (gotoElement) {
			gotoElement.scrollIntoView({
				behavior: "smooth"
			})
		}
		e.preventDefault()
		//! Показати пароль
	} else if (targetElement.closest('.show-pass')) {
		const inputPass = document.querySelector('.pass-input');
		if (inputPass.getAttribute("type") === "password") {
			inputPass.setAttribute("type", "text")
			targetElement.closest('.show-pass').textContent = 'Приховати пароль'
		} else {
			inputPass.setAttribute("type", "password")
			targetElement.closest('.show-pass').textContent = 'Показати пароль'
		}
	}
}
*/

