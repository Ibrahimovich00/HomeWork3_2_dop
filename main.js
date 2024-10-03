let id = document.getElementById('id')
let title = document.getElementById('title')
let body = document.getElementById('body')
let btn = document.getElementById('btn')
let div = document.getElementById('div')

let searchName = {
	id: '',
	title: '',
	body: '',
}

id.onchange = e => {
	searchName.id = e.target.value
}

title.onchange = e => {
	searchName.title = e.target.value
}

body.onchange = e => {
	searchName.body = e.target.value
}

btn.onclick = () => {
	fetchJson(searchName)
}

const fetchJson = searchName => {
	fetch(`https://jsonplaceholder.typicode.com/posts`)
		.then(response => response.json())
		.then(data => {
			div.innerHTML = ''
			data.forEach(post => {
				let match = true

				if (searchName.id && post.id != searchName.id) {
					match = false
				}

				if (searchName.title && post.title != searchName.title) {
					match = false
				}

				if (searchName.body && post.body != searchName.body) {
					match = false
				}

				if (match) {
					div.innerHTML += `id: ${post.id}, title: ${post.title}, body: ${post.body}<br>`
				}
			})
		})
		.catch(error => console.log(error))
}
