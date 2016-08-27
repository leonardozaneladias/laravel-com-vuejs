var router = new VueRouter();

var mainComponent = Vue.extend({
    components: {
        'bill-component': billComponent
    },
    template: '<bill-component></bill-component>',
    data: function () {
        return {
            billsPay: [
                {date_due: '20/08/2016', name: 'Conta de Luz', value: 70.99, done: 1},
                {date_due: '21/08/2016', name: 'Conta de Agua', value: 100.20, done: 1},
                {date_due: '22/08/2016', name: 'Net', value: 80.90, done: 0},
                {date_due: '23/08/2016', name: 'Supermercado', value: 500, done: 0},
            ],
            billsReceive: [
                {date_due: '20/08/2016', name: 'Salario', value: 10000, done: 1},
                {date_due: '21/08/2016', name: 'Frella', value: 2500, done: 1},
                {date_due: '22/08/2016', name: 'Emprestimo', value: 1200, done: 0},
                {date_due: '23/08/2016', name: 'Aluguel', value: 800, done: 0},
            ]

        };
    }
});

router.map({
    '/': {
        name: 'dashboard',
        component: DashboardComponent,

    },
    '/bill-pays': {
        component: billPayComponent,
        subRoutes: {
            '/': {
                name: 'bill-pay.list',
                component: billPayListComponent
            },
            '/create': {
                name: 'bill-pay.create',
                component: billPayCreateComponent
            },
            '/:index/update': {
                name: 'bill-pay.update',
                component: billPayCreateComponent
            }
        }
    },
    '/bill-receives': {
        name: 'bill-receive',
        component: billReceiveComponent,
        subRoutes: {
            '/': {
                name: 'bill-receive.list',
                component: billReceiveListComponent
            },
            '/create': {
                name: 'bill-receive.create',
                component: billReceiveCreateComponent
            },
            '/:index/update': {
                name: 'bill-receive.update',
                component: billReceiveCreateComponent
            }
        }
    },
    '*': {
        component: billPayListComponent
    }
});


router.start({
    components: {
        'main-component': mainComponent
    }
}, '#app');


router.redirect({
    '*': '/bill-pays'

});

