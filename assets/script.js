$(document).ready(function () {
    $(document).keypress(function (event) {
        var bindList = [
            {key: 109, page: "index.html"},
            {key: 99, page: "consultar-produto.html"},
            {key: 112, page: "criar-produto.html"},
        ];
        
        var key = event.which;
        var bind = bindList.find((i) => i.key == key);

        //console.log(key);

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