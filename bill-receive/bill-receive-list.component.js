window.billReceiveListComponent = Vue.extend({
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
                {{ o.done | doneLabelReceive }}
            </td>
            <td>
                <a v-link="{name: 'bill-receive.update', params: {id: o.id}}">editar</a> |
                <a href="#" @click.prevent="deleteBill(o)">excluir</a>
            </td>
        </tr>
        </tbody>
    </table>
    `,
    created: function(){
        var self = this;
        BillReceive.query().then(function (response) {
            self.bills = response.data;
        });
    },
    data: function () {
        return {
            bills: []
        };
    },
    methods: {
        deleteBill: function (bill) {
            var ok = confirm("Você confirma a exclusão da conta "+bill.name+" de "+bill.date_due);
            if(ok == true){
                var self = this;
                BillReceive.delete({id: bill.id}).then(function () {
                    self.bills.$remove(bill);
                    self.$dispatch('change-info');
                });
            }
        }
    },
    events: {
    }
});