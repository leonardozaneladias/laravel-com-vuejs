window.billPayComponent = Vue.extend({
    components: {
        'menu-component' : billPayMenuComponent
    },
    template: `
    <style>
        .minha-classe{
            background: cornsilk;
        }

        .red{
            color: white;
            background: red;
        }

        .green{
            color: white;
            background: green;
        }

        .gray{
            color: white;
            background: gray;
        }

    </style>
    <h1>{{ title }}</h1>
    <h3 :class="{'gray': status === false, 'green': status === 0, 'red': status > 0}">{{ status | resumeContas }}</h3>
    
    <menu-component></menu-component>
    <router-view></router-view>
    `,
    data: function () {
        return {
            title: "Contas a pagar"
        }
    },
    computed: {
        status: function () {
            var bills = this.$root.$children[0].bills;
            if(!bills.length){
                return false;
            }

            var count = 0;
            for(var i in bills){
                if(!bills[i].done){
                    count++;
                }
            }
            return count;
        }
    },
    methods: {},
    events: {},
});