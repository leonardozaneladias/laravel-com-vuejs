var router = new VueRouter();

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
            '/:id/update': {
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
            '/:id/update': {
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
        'bill-component': billComponent
    }
}, '#app');


router.redirect({
    '*': '/bill-pays'

});

