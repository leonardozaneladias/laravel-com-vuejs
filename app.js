Vue.filter('doneLabel', function (value) {
    if(value == 0){
        return "Não Paga";
    }else{
        return "Paga";
    }
});


Vue.filter('resumeContas', function (value) {
    if(value === false){
        return "Nenhuma conta cadastrada";
    }

    if(!value){
        return "Nenhuma conta a pagar";
    }else{
        return "Existem "+ value +" a pagar"
    }
});


var app = new Vue({
    el: "#app",
    data: {
        dones: [
            'Não Pago',
            'Pago'
        ],
        test: "",
        title: "Contas a pagar",
        menus: [
            {id: 0, name: "Listar contas"},
            {id: 1, name: "Criar contas"},
        ],
        activedView: 0,
        formType: 'insert',
        bill: {
            date_due: '',
            name: '',
            value: 0,
            done: 0
        },
        names: [
            'Conta de Luz',
            'Conta de Agua',
            'Conta de Telefone',
            'Supermercado',
            'Cartão de Crédito',
            'Gasolina',
            'Net'
        ],
        bills: [
            {date_due: '20/08/2016', name: 'Conta de Luz', value: 70.99, done: 1},
            {date_due: '21/08/2016', name: 'Conta de Agua', value: 100.20, done: 1},
            {date_due: '22/08/2016', name: 'Net', value: 80.90, done: 0},
            {date_due: '23/08/2016', name: 'Supermercado', value: 500, done: 0},
        ]

    },
    computed: {
        status: function () {
            if(!this.bills.length){
                return false;
            }

            var count = 0;
            for(var i in this.bills){
                if(!this.bills[i].done){
                    count++;
                }
            }
            return count;
        }
    },
    methods: {
        showView: function ($event, id) {
            $event.preventDefault();
            this.activedView = id;
            if(id == 1){
                this.formType = 'insert'
            }
        },
        submit: function () {
            if (this.formType == 'insert'){
                this.bills.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            };

            this.activedView = 0;
        },
        loadBill: function (bill) {
            this.bill = bill;
            this.activedView = 1;
            this.formType = 'update'
        },
        deleteBill: function (bill) {
            this.bill = bill;
            var ok = confirm("Você confirma a exclusão da conta "+this.bill.name+" de "+this.bill.date_due);
            if(ok == true){
                this.bills.$remove(this.bill);
                this.activedView = 0;
            }else{
                this.activedView = 0;
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            };
        }
    }
});



app.$watch('test', function (newValue) {

    console.log("New=" + newValue);

})