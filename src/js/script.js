const firstPage = document.querySelector('header div')
// Buttons
const firstBtn = document.querySelector('li a:nth-child(1)')
const secondBtn = document.querySelector('li a:nth-child(2)')
const thirdBtn = document.querySelector('li a:nth-child(3)')
const fourthBtn = document.querySelector('li a:nth-child(4)')
const fifthBtn = document.querySelector('li a:nth-child(5)')

function preventPageReload(event) {
	event.preventDefault()
}

function buttonRemover() {
	firstPage.classList.toggle('firstPhoto')
}

firstBtn.addEventListener('click', function (event) {
	preventPageReload(event)
	buttonRemover()
})
