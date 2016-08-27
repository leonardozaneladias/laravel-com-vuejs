Vue.filter('doneLabel', function (value) {

    if(value == 0){
        return "Não Paga";
    }else{
        return "Paga";
    }
});

Vue.filter('doneLabelReceive', function (value) {

    if(value == 0){
        return "Não Recebido";
    }else{
        return "Recebido";
    }
});


Vue.filter('resumeContas', function (value) {
    if(value === false){
        return "Nenhuma conta cadastrada";
    }

    if(!value){
        return "Nenhuma conta a pagar";
    }else{
        return "Existem "+ value +" a pagar";
    }
});


Vue.filter('totalDashboard', function (value) {

    if(!value){
        return "Nenhum Saldo";
    }else{
        return "Seu saldo é de: R$ "+ value +"";
    }
});