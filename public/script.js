const messageButton = document.getElementById('messageButton')
// alternativ: querySelector
messageButton.addEventListener('click', event => {
	const messages = document.getElementById('messages')
	messages.innerHTML += '<br> Click received!'
})

// messageButton
// messages
