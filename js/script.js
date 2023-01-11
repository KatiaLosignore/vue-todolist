console.log('Vue OK', Vue);

const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks : [
                {
                  text: 'Fare gli esercizi',
                  done: false,
                }, {                                                                     
                   text: 'Fare la spesa',
                   done: false,
                }, {
                  text: 'Fare il bucato',
                  done: false,
                }, {
                  text: 'Andare a correre',
                  done: false,
                }, {            
                  text: 'Leggere un libro',
                  done:  true,
                },
            ],
               
        }
    },
    methods: {
        addTask(){
        if (this.newTask) {
            this.tasks.push({text: this.newTask, done: false}); 
            this.newTask = '';
        }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        reverseDone(index) {
            const task = this.tasks[index];
            task.done = !task.done;
        }
    
    }
});



app.mount('#root');