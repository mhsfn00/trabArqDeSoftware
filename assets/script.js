$(document).ready(function () {
    $(document).keypress(function (event) {
        var bindList = [
            {key: 109, page: "index.html"},
            {key: 99, page: "consultar-produto.html"},
            {key: 112, page: "criar-produto.html"},
            {key: 70, page: "fechar_caixa.html"},
            {key: 76, page: "login.html"},
        ];
        
        var key = event.which;
        var bind = bindList.find((i) => i.key == key);

        if(bind) {
            window.location.replace(bind.page);
        }
    });
});

function fechar_caixa() {
    alert("Caixa fechado com sucesso");
}

function relatorio_caixa() {
    alert("Imprimindo relatório");
}