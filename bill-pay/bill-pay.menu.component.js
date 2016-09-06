window.billPayMenuComponent = Vue.extend({
    template: `
    <nav>
        <ul v-for="o in menus">
            <li><a v-link="{name: o.routeName}"> {{ o.name }} </a></li>
        </ul>
    </nav>
    `,
    data: function () {
        return {
            menus: [
                {id: 0, name: "Listar contas", routeName: 'bill-pay.list'},
                {id: 1, name: "Criar contas", routeName: 'bill-pay.create'},
            ],
        };
    }
});