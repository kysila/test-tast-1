const leftButton = document.querySelector('.left-button');
const hoverText = document.querySelector('.hover-text');
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close');
const buttonsGroup = document.querySelectorAll('.btn-emoji');
const popupText = document.querySelector('.popup-text');
const textArea = document.querySelector('.popup-text textarea');
const submit = document.querySelector('.submit');

let textAreaValue;

setTimeout(() => {
	if (!popupContainer.classList.contains('active')) {
		popupContainer.style.display = 'block';
		popupContainer.classList.add('active');
	}
}, 5000);

leftButton.addEventListener('click', (e) => {
	popupContainer.style.display = 'block';
	popupContainer.classList.add('active');
});

closeButton.addEventListener('click', (e) => popupContainer.style.display = 'none');

const clickBtn = (item, color1, style1, style2, style3) => {
	buttonsGroup.forEach((el) => {
		el.classList.remove('active-btn');
		el.style.backgroundColor = color1;
		el.style.opacity = style1;
		el.addEventListener('mouseout', (e) => {
			mouseoutHandler('0.5');
		})
	});
	item.classList.add('active-btn');
	popupContainer.style.transform = style2;
	popupText.style.display = style3;
	closeButton.classList.add('otherCloseBtn');
};

const mouseoverBtn = (item) => {
	item.style.opacity = '1';
	let next = item.nextElementSibling;
	let prev = item.previousElementSibling;
	while (next) {
		next.style.opacity = '.5';
		next = next.nextElementSibling;
	}
	while (prev) {
		prev.style.opacity = '.5';
		prev = prev.previousElementSibling;
	}
};

const mouseoutHandler = (opacity) => {
	buttonsGroup.forEach((el) => {
		el.style.opacity = opacity;
	});
};

buttonsGroup.forEach(elem => {
	elem.addEventListener('mouseover', (e) => {
		mouseoverBtn(elem);
	});
	elem.addEventListener('mouseout', (e) => {
		mouseoutHandler('1');
	});
	elem.addEventListener('click', (e) => {
		clickBtn(elem, '#CACACA', '0.5', 'translateY(-70px)', 'block' );
	});
});

textArea.addEventListener('keyup', (e) => {
	if (textArea.value.length >= 10) {
		submit.classList.add('active-submit');
	} else {
		submit.classList.remove('active-submit');
	}
});

submit.addEventListener('click', (e) => {
	e.preventDefault();
	textAreaValue = textArea.value;
	popupContainer.style.display = 'none';
	hoverText.style.display = 'block';
	hoverText.innerText = 'Спасибо за Ваш отзыв!';
	console.log(textAreaValue);
	setTimeout(() => {
		hoverText.style.display = 'none';
	}, 5000)
});

