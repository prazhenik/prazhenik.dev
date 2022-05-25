

// функции конкретного проекта

//прокрутка к топ при обновлении страницы
// window.onbeforeunload = function () {
// 	window.scrollTo(0, 0);
// }

//плавный скролл
// const smoothLinks = document.querySelectorAll('a[href^="#"]:not(._popup-link)');
// const activePopup = document.querySelectorAll('.popup._active');

// if (smoothLinks.length > 0) {
// 	for (let smoothLink of smoothLinks) {
// 		smoothLink.addEventListener('click', function (e) {
// 			e.preventDefault();
// 			const id = smoothLink.getAttribute('href');
// 			document.querySelector(id).scrollIntoView({
// 				behavior: 'smooth',
// 				block: 'start'
// 			});
// 		});
// 	};
// }




//класс ссылке активной страници

// function highlightCurrent() {
// 	const curPage = document.URL;
// 	const links = document.getElementsByTagName('a');
// 	for (let link of links) {
// 		if (link.href == curPage) {
// 			link.classList.add("_activepage");
// 		}
// 	}
// }

// document.onreadystatechange = () => {
// 	if (document.readyState === 'complete') {
// 		highlightCurrent()
// 	}
// };





//preloader
// window.onload = function () {
// 	let body = document.querySelector("body");
// 	let preloader = document.getElementById('preloader');
// 	body.classList.add("_preloader")
// 	//body_lock_add();
// 	preloader.classList.add('_hide-preloader');
// 	setInterval(function () {
// 		preloader.classList.add('_preloader-hidden');
// 		preloader.classList.remove('_hide-preloader');
// 		body.classList.remove("_preloader")
// 		//body_lock_remove();
// 	}, 1000);
// }

//------------------------------------LazyLoad----------------------------------------------------
// var lazyLoadInstance = new LazyLoad({
// 	// Your custom settings go here
// 	use_native: true
// });


//------------------------------------parallax----------------------------------------------------

// var parallaxScene = document.getElementsByClassName("scene")

// if (parallaxScene.length > 0) {
// 	var scene1 = document.getElementById('');
// 	var parallaxInstance1 = new Parallax(scene1);

// 	var scene2 = document.getElementById('');
// 	var parallaxInstance2 = new Parallax(scene2);
// }

//------------------------------------parallax----------------------------------------------------


//------------------------------------subscribe submenu----------------------------------------------------

// const subscribe = document.querySelector(".subscribe");
// const subscribeIcon = document.querySelector(".subscribe__icon");
// const socials = document.querySelector(".subscribe__socials");
// const overlay = document.querySelector("._overlay");

// if (isMobile.any()) {
// 	function socials_close() {
// 		socials.classList.remove("_show");
// 		subscribeIcon.classList.remove("_active");
// 	}

// 	subscribeIcon.addEventListener("click", function (e) {
// 		if (!subscribeIcon.classList.contains("_active")) {
// 			subscribeIcon.classList.add("_active");
// 			setTimeout(function () {
// 				socials.classList.add("_show")
// 			}, 300);
// 		} else {
// 			socials_close()
// 		}
// 	});

// 	//закрытие при нажатии по єкрану
// 	document.addEventListener("click", function (e) {
// 		if (!e.target.closest(".subscribe__icon")) {
// 			socials_close(e.target.closest('.subscribe'));
// 		}
// 	});
// 	//закрытие при начале скрола
// 	document.addEventListener("scroll", function () {
// 		if (subscribeIcon.classList.contains("_active")) {
// 			socials_close();
// 		}
// 	});
// }


//------------------------------------textarea autosize----------------------------------------------------
// autosize(document.querySelectorAll('textarea'));

// if (!isMobile.any()) {
// 	VanillaTilt.init(document.querySelectorAll(".btn"), {
// 		max: 15,
// 		speed: 300,
// 		glare: true
// 	});
// }




//-----------------------------------







//---------------------------------------
// const tabsNavigation = document.getElementById('tabs__navigation');
// const homeTab = document.getElementById('home').innerText;
// const pageWrapper = document.querySelector(".wrapper");
// const tabs = document.querySelector(".tabs");
// const tabsBodies = document.querySelectorAll('.tabs__body');
// let activeTabsContentTitle
// let timeoutID;
// let currTubText;

// window.addEventListener('load', e => {
// 	addHomeClasses()
// })



// for (let i = 0; i < tabsNavigation.children.length; i++) {
// 	tabsNavigation.children[i].addEventListener('click', e => {
// 		currTubText = e.target.innerText;
// 		homeClass()
// 		setTimeout(clearSectionTitle, 1000)
// 		setTimeout(typeText, 1000)
// 	})
// }

// function typeText() {
// 	let i = 0;
// 	let txt = currTubText; /* Текст */
// 	let speed = 70; /* Скорость/длительность эффекта в миллисекундах */

// 	for (let i = 0; i < tabsBodies.length; i++) {
// 		if (tabsBodies[i].classList.contains('_active-content-tab')) {
// 			activeTabsContentTitle = document.querySelector('._active-content-tab .section__title')
// 		}
// 	}
// 	function typeWriter() {
// 		if (i < `${txt}`.length && activeTabsContentTitle) {
// 			activeTabsContentTitle.innerHTML += `${txt}`.charAt(i);
// 			i++;
// 			timeoutID = setTimeout(typeWriter, speed);
// 		}
// 	}
// 	typeWriter()
// }

// function clearSectionTitle() {
// 	if (activeTabsContentTitle)
// 		activeTabsContentTitle.innerHTML = '';
// 	clearTimeout(timeoutID);
// }
//----------удаление блюра с wrapper на табе home---------------------------

// function addHomeClasses() {
// 	pageWrapper.classList.add('_noShadow');
// 	tabs.classList.add('_noLine');
// }

// function removeHomeClasses() {
// 	pageWrapper.classList.remove('_noShadow');
// 	tabs.classList.remove('_noLine');
// }

// function homeClass() {
// 	if (currTubText == homeTab) {
// 		addHomeClasses()
// 	} else {
// 		addHomeClasses()
// 		setTimeout(removeHomeClasses, 10)
// 	};
// }


//----------------canvas-----------------

var canvas = document.getElementById('nokey'),
	can_w = parseInt(canvas.getAttribute('width')),
	can_h = parseInt(canvas.getAttribute('height')),
	ctx = canvas.getContext('2d');

// console.log(typeof can_w);
let BALL_NUM


import { isMobile } from "./functions.js";

if (isMobile.any()) {
	BALL_NUM = 30;
} else {
	BALL_NUM = 100;
}


var ball = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
	r: 0,
	alpha: 1,
	phase: 0
},
	ball_color = {
		r: 10,
		g: 250,
		b: 215
	},

	R = 1.2,
	balls = [],
	alpha_f = 0.01,
	alpha_phase = 10,

	// Line
	link_line_width = .5,
	dis_limit = 300,
	add_mouse_point = false,
	mouse_in = false,
	mouse_ball = {
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		r: 0,
		type: 'mouse'
	};

// Random speed
function getRandomSpeed(pos) {
	var min = -1,
		max = 1;
	switch (pos) {
		case 'top':
			return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
			break;
		case 'right':
			return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
			break;
		case 'bottom':
			return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
			break;
		case 'left':
			return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
			break;
		default:
			return;
			break;
	}
}
function randomArrayItem(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumFrom(min, max) {
	return Math.random() * (max - min) + min;
}
console.log(randomNumFrom(0, 10));
// Random Ball
function getRandomBall() {
	var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
	switch (pos) {
		case 'top':
			return {
				x: randomSidePos(can_w),
				y: -R,
				vx: getRandomSpeed('top')[0],
				vy: getRandomSpeed('top')[1],
				r: R,
				alpha: 1,
				phase: randomNumFrom(0, 10)
			}
			break;
		case 'right':
			return {
				x: can_w + R,
				y: randomSidePos(can_h),
				vx: getRandomSpeed('right')[0],
				vy: getRandomSpeed('right')[1],
				r: R,
				alpha: 1,
				phase: randomNumFrom(0, 10)
			}
			break;
		case 'bottom':
			return {
				x: randomSidePos(can_w),
				y: can_h + R,
				vx: getRandomSpeed('bottom')[0],
				vy: getRandomSpeed('bottom')[1],
				r: R,
				alpha: 1,
				phase: randomNumFrom(0, 10)
			}
			break;
		case 'left':
			return {
				x: -R,
				y: randomSidePos(can_h),
				vx: getRandomSpeed('left')[0],
				vy: getRandomSpeed('left')[1],
				r: R,
				alpha: 1,
				phase: randomNumFrom(0, 10)
			}
			break;
	}
}
function randomSidePos(length) {
	return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls() {
	Array.prototype.forEach.call(balls, function (b) {
		if (!b.hasOwnProperty('type')) {
			ctx.fillStyle = 'rgba(' + ball_color.r + ',' + ball_color.g + ',' + ball_color.b + ',' + b.alpha + ')';
			ctx.beginPath();
			ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
	});
}

// Update balls
function updateBalls() {
	var new_balls = [];
	Array.prototype.forEach.call(balls, function (b) {
		b.x += b.vx;
		b.y += b.vy;

		if (b.x > -(50) && b.x < (can_w + 50) && b.y > -(50) && b.y < (can_h + 50)) {
			new_balls.push(b);
		}

		// alpha change
		b.phase += alpha_f;
		b.alpha = Math.abs(Math.cos(b.phase));
		// console.log(b.alpha);
	});

	balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf() {

}

// Draw lines
function renderLines() {
	var fraction, alpha;
	for (var i = 0; i < balls.length; i++) {
		for (var j = i + 1; j < balls.length; j++) {

			fraction = getDisOf(balls[i], balls[j]) / dis_limit;

			if (fraction < 1) {
				alpha = (1 - fraction).toString();

				ctx.strokeStyle = 'rgba(150,150,150,' + alpha + ')';
				ctx.lineWidth = link_line_width;

				ctx.beginPath();
				ctx.moveTo(balls[i].x, balls[i].y);
				ctx.lineTo(balls[j].x, balls[j].y);
				ctx.stroke();
				ctx.closePath();
			}
		}
	}
}

// calculate distance between two points
function getDisOf(b1, b2) {
	var delta_x = Math.abs(b1.x - b2.x),
		delta_y = Math.abs(b1.y - b2.y);

	return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
}

// add balls if there a little balls
function addBallIfy() {
	if (balls.length < BALL_NUM) {
		balls.push(getRandomBall());
	}
}

// Render
function render() {
	ctx.clearRect(0, 0, can_w, can_h);

	renderBalls();

	renderLines();

	updateBalls();

	addBallIfy();

	window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num) {
	for (var i = 1; i <= num; i++) {
		balls.push({
			x: randomSidePos(can_w),
			y: randomSidePos(can_h),
			vx: getRandomSpeed('top')[0],
			vy: getRandomSpeed('top')[1],
			r: R,
			alpha: 1,
			phase: randomNumFrom(0, 10)
		});
	}
}
// Init Canvas
function initCanvas() {
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);

	can_w = parseInt(canvas.getAttribute('width'));
	can_h = parseInt(canvas.getAttribute('height'));
}
window.addEventListener('resize', function (e) {
	console.log('Window Resize...');
	initCanvas();
});

function goMovie() {
	initCanvas();
	initBalls(BALL_NUM);
	window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener('mouseenter', function () {
	console.log('mouseenter');
	mouse_in = true;
	balls.push(mouse_ball);
});
canvas.addEventListener('mouseleave', function () {
	console.log('mouseleave');
	mouse_in = false;
	var new_balls = [];
	Array.prototype.forEach.call(balls, function (b) {
		if (!b.hasOwnProperty('type')) {
			new_balls.push(b);
		}
	});
	balls = new_balls.slice(0);
});
canvas.addEventListener('mousemove', function (e) {
	var e = e || window.event;
	mouse_ball.x = e.pageX;
	mouse_ball.y = e.pageY;
	// console.log(mouse_ball);
});


//==================languege menu style===================================


//==================slider navi style===================================

// const swiperBottons = document.querySelectorAll('.swiper-button')
// const swiperBotton = document.getElementsByClassName('swiper-button')
// console.log(swiperBotton);


// for (let i = 0; i < swiperBotton.length; i++) {
// 	swiperBotton[i].addEventListener('click', e => {
// 		if (e.target.parentElement.classList.contains('swiper-button') && !e.target.parentElement.classList.contains('swiper-button-disabled')) {
// 			addStyle()
// 			setTimeout(deleteStyle, 800)
// 			function addStyle() {
// 				e.target.parentElement.style.background = 'rgba(255,255,255,1)';
// 				e.target.parentElement.style.fill = 'rgba(40,120,190,1)';
// 				document.querySelector('.portfolio-item__gallery').style.pointerEvents = 'none'
// 			}
// 			function deleteStyle() {
// 				e.target.parentElement.style.background = '';
// 				e.target.parentElement.style.fill = '';
// 				document.querySelector('.portfolio-item__gallery').style.pointerEvents = 'auto'
// 			}
// 		} else {
// 			e.preventDefault()
// 		}
// 	})
// }

//==================contacts__link style===================================

const contactsLinks = document.querySelectorAll('.contacts__link img')

for (let i = 0; i < contactsLinks.length; i++) {
	contactsLinks[i].addEventListener('click', e => {
		e.preventDefault()
		addStyle()
		setTimeout(deleteStyle, 300)

		function addStyle() {
			e.target.style.filter = 'saturate(100%)';
		}
		function deleteStyle() {
			window.location = e.target.closest('a').href;
			e.target.style.filter = '';
		}

	})
}









