const app = Vue.createApp({
  //  data() is for variable
  data() {
    return {
      firstName: "Emran",
      middleName: "",
      lastName: "Ibn Shayed",
      url: "http://www.google.com",
      raw_url: '<a href="http://www.google.com" target="_blank">Google</a>',
			age: 20,
			isPurple: false,
			selectedColor: '',
			size: 150,
			mode: 0,
			birds: ['Penguins', 'Owls', 'Parot', 'Moa'],
			people: [
				{name: 'John Doe', age:20},
				{name: 'Emran Ibn Shayed', age:23},
				{name: 'Ashikur Rahman', age:34},
				{name: 'Alamin Hossain', age:45},
			],
    };
  },

  //  method is for methods or functions
  methods: {
    increment() {
      // this.age += 1
      this.age++;
    },
    setFirstName(msg, event) {
      // event.preventDefault() // no needed if @input.prevent is present

      console.log(msg);
      this.firstName = event.target.value;
    },
    setMiddleName(event) {
      this.middleName = event.target.value;
    },
  },

  // computed is for computed property call when it is need not every render
  // is any data is change inside the function then the function will called again
  computed: {
    fullName() {
      console.log("fullName method is called...");
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
		},
		computed_class() {
			return { purple: this.isPurple}
		}
  },

	watch: {
		// method name should be match with instance variable name
		// variable name is inside data() function
		age(newVal, oldVal) {
			console.log("age watch method is called");
			console.log("==========>", newVal, oldVal);
      setTimeout(() => {
        this.age = 30;
      }, 2000);
		},
  },
}).mount("#app");

// setTimeout(() => {
// 	app.firstName = 'Raihan'
// }, 2000)
