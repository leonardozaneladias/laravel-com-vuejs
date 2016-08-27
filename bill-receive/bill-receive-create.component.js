window.billReceiveCreateComponent = Vue.extend({
    template: `
    <form name="form2" @submit.prevent="submit">
        <label>Vencimento:</label>
        <input type="text" v-model="bill.date_due">
        <br>
        <br>
        <label>Nome:</label>
        <select v-model="bill.name">
            <option v-for="o in names" :value="o">{{ o }}</option>
        </select>
        <br>
        <br>
        <label>Valor:</label>
        <input type="text" v-model="bill.value">
        <br>
        <br>
        <label>Situação:</label>

        <input type="checkbox" v-model="bill.done"> Recebido

        <br>
        <br>
        <input type="submit" value="Enviar">
    </form>
    `,
    data: function () {
        return {
            formType: 'insert',
            names: [
                'Salario',
                'Emprestimo',
                'Aluguel',
                'Frella',
                'Investimentos'
            ],
            bill: {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            }
        };
    },
    created: function () {
        if(this.$route.name == 'bill-receive.update'){
            this.formType = 'update';
            this.getBill(this.$route.params.index);
        }
    },
    methods: {
        submit: function () {
            if (this.formType == 'insert'){
                bills: this.$root.$children[0].billsReceive.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            };

            this.$router.go({name: 'bill-receive.list'});
        },
        getBill: function (index) {
            var bills = this.$root.$children[0].billsReceive;
            this.bill = bills[index];
        }
    },
    events: {}
});