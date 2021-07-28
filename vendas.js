var nomeProdutos = [];
var valorProdutos = [];
var formaPagamentos = [];
var dadosLista 


function Lancar() {
    let NomedoProduto = document.getElementById('produto').value;
    let ValordoProduto = document.getElementById('valor').value;
    let FormadePagamento = document.getElementById('forma').value;

    if (NomedoProduto && ValordoProduto && FormadePagamento) {
        nomeProdutos.push(NomedoProduto)
        valorProdutos.push(ValordoProduto)
        formaPagamentos.push(FormadePagamento)
        let tbl = document.getElementById('tbl').innerHTML = "<tr><th>  Nome do Produto  </th><th>  Valor  </th><th>  Forma de Pagamento  </th></tr>"
        for (dadosLista = 0 ; dadosLista <= (nomeProdutos.length - 1); dadosLista ++){
            tbl += "<tr><td>" + nomeProdutos[dadosLista] + "</td><td>" + valorProdutos[dadosLista] + "</td><td>" + formaPagamentos[dadosLista] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>"
            document.getElementById("tbl").innerHTML = tbl;


        }

      
    }else{
        alert ("Preencher todos os campos");
    }
    document.getElementById("produto").value = ""
    document.getElementById("valor").value =""
    document.getElementById("forma").value = ""
    document.getElementById("produto").focus()

}
function excluir(dadosLista){
     valorProdutos.splice((dadosLista - 1), 1);
     formaPagamentos.splice((dadosLista - 1), 1);
     nomeProdutos.splice((dadosLista - 1), 1);
     document.getElementById("tbl").deleteRom(dadosLista);
}
function editar(dadosLista) {
    document.getElementById("NomedoProduto").value = nomeProdutos[(dadosLista -1)];
    document.getElementById("ValordoProduto").value = valorProdutos[(dadosLista -1)];
    document.getElementById("FormadePagamento").value = formaPagamentos[(dadosLista -1)];
    nomeProdutos.splice(nomeProdutos[(dadosLista -1)], 1);
    valorProdutos.splice(valorProdutos[(dadosLista -1)], 1);
    formaPagamentos.splice(formaPagamentos[(dadosLista -1)], 1);
}







