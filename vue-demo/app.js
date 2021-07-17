

const app = Vue.createApp({
	data() {
		return {
			firstName: 'Emran',
			middleName: '',
			lastName: 'Ibn Shayed',
			url: 'http://www.google.com',
			raw_url: '<a href="http://www.google.com" target="_blank">Google</a>',
			age: 20,
		}
	},
	methods: {
		fullName() {
			return `${this.firstName} ${this.lastName.toUpperCase()}`
		},
		increment() {
			// this.age += 1
			this.age++
		},
		setFirstName(msg, event) {
			
			// event.preventDefault() // no needed if @input.prevent is present

			console.log(msg)
			this.firstName = event.target.value
		},
		setMiddleName(event) {
			this.middleName = event.target.value
		}
	},
}).mount('#app')



// setTimeout(() => {
// 	app.firstName = 'Raihan'
// }, 2000)