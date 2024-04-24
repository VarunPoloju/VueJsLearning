Vue.createApp({
    data (){    //data like input , button and all
        return {
            goals : [],
            enteredValue : ''
        };
    },

    methods : {
        addGoal(){
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app');

// without vue above thing to add texts and show in the page

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredVal = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredVal;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener("click", addGoal);

// ---------------------------------
