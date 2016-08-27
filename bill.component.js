window.billComponent = Vue.extend({
    template: `
    <nav>
        <ul v-for="o in menus">
            <li><a v-link="{name: o.routeName}"> {{ o.name }} </a></li>
        </ul>
    </nav>
    <router-view></router-view>
    `,
    data: function () {
        return {
            menus: [
                //{id: 0, name: "Listar contas", url: '/bills'},
                //{id: 1, name: "Criar contas", url: '/bill/create'},

                {name: "Dashboad", routeName: 'dashboard'},
                {name: "Contas a pagar", routeName: 'bill-pay.list'},
                {name: "Contas a receber", routeName: 'bill-receive'},
            ],
        };
    }
});