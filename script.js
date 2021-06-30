Vue.config.devtools = true;
new Vue(
    {
        el: '#root',
        data: {
            toDoList: [
                'Svegliarsi',
                'Bere il caffè',
                'Seguire la lezione di Boolean',
                'Fare la spesa',
                'Cucinare',
                'Mangiare'
            ],
            newTask: '',
        },
        mounted() {
            //mounted = l'html è stato già "montato", ovvero scritto, all'interno di #root
            this.autoFocus();
        },
        methods: {
            autoFocus: function () {
                const element = document.getElementById('inputFocused');
                element.focus();
            },
            addTask: function () {
                this.toDoList.push(this.newTask);
                this.newTask = '';
                this.autoFocus();
            },
            deleteTask: function (index) {
                // splice(a,b)
                // a(start) --> da dove parto?
                // b --> quanti elementi cancello a partire dallo "start"?
                // se non metto b, mi ritorna un array di tutti gli elementi a partire dallo start(compreso)
                this.toDoList.splice(index, 1);
                this.autoFocus();
            }
        }
    }

);