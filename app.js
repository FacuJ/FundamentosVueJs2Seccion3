Vue.filter("Mayus", function (stringToUppcase) {
    return stringToUppcase.toUpperCase();
})

var app = new Vue({
    el: "#app",
    data: {
        votes: 0,
        name: "",
        lastName: "0"
    },
    methods: {
        vote: function () {
            this.votes++;
            console.log(this.votes)
        }
    },

    computed: {
        completeName: function () {
            return this.name + " " + this.lastName
        }
    }
})