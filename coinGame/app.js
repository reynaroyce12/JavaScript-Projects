function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')
const score = document.querySelector('#score')
let count = 0

window.addEventListener('keyup', (e) => {
	if (e.key === 'ArrowDown') {
		const currentTop = getPosition(avatar.style.top)
		avatar.style.top = 	`${currentTop + 50}px`
	}
	else if(e.key === 'ArrowUp') {
		const currentTop = getPosition(avatar.style.top)
		avatar.style.top = `${currentTop - 50}px`
	}
	else if(e.key === 'ArrowRight') {
		const currentLeft = getPosition(avatar.style.left)
		avatar.style.left = `${currentLeft + 50}px`
		avatar.style.transform = 'scale(1,1)'
	}
	else if (e.key === 'ArrowLeft') {
		const currentLeft = getPosition(avatar.style.left)
		avatar.style.left = `${currentLeft - 50}px`
		avatar.style.transform = 'scale(-1,1)'
	}

	if(isTouching(avatar, coin)) {
		moveCoin()
		scoreCounter()
	}
})

const getPosition = function(pos) {
	if (!pos) {							// checking if it is empty string
		return 0
	}
	return parseInt(pos.slice(0, -2))
}


const moveCoin = function () {
	const randomX = Math.floor(Math.random() * window.innerHeight)
	const randomY = Math.floor(Math.random() * window.innerHeight)
	coin.style.top = `${randomY}px`
	coin.style.left = `${randomX}px`
}

const scoreCounter = function() {
	count++
	score.innerText = count
	console.log(count)
}

moveCoin()
scoreCounter()