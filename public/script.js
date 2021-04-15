// getElementById, getElementsByTagName, querySelector
const button = document.querySelector('#messageButton')

button.addEventListener('click', event => {
	console.log('Button clicked');
	const messageElement = document.querySelector('.message')
	messageElement.innerHTML += `<br> Button clicked!`
})
