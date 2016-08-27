window.billPayListComponent = Vue.extend({
    template: `
    <style>
    .pago{
        color: green;
    }
    .nao-pago{
        color: red;
    }    
    </style>
    <table border="1">
        <thead>
        <tr>
            <th>#</th>
            <th>Vencimento</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Paga</th>
            <th>#</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(index,o) in bills">
            <td>{{ index }}</td>
            <td>{{ o.date_due }}</td>
            <td>{{ o.name }}</td>
            <td>{{ o.value | currency 'R$' 2 }}</td>
            <td class="minha-classe" :class="{'pago' : o.done, 'nao-pago' : !o.done}">
                {{ o.done | doneLabel }}
            </td>
            <td>
                <a v-link="{name: 'bill-pay.update', params: {index: index}}">editar</a> |
                <a href="#" @click.prevent="deleteBill(o)">excluir</a>
            </td>
        </tr>
        </tbody>
    </table>
    `,
    data: function () {
        return {
            bills: this.$root.$children[0].billsPay
        };
    },
    methods: {
        deleteBill: function (bill) {
            var ok = confirm("Você confirma a exclusão da conta "+bill.name+" de "+bill.date_due);
            if(ok == true){
                this.$root.$children[0].billsPay.$remove(bill);
            }
        }
    },
    events: {
    }
});