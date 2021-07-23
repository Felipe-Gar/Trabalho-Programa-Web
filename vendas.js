var  tabela  =  [ ] ;
function  Lancar ()  {

    var  produto  =  document . getElementById ( "produto" ) . valor ;
    var  valor  =  document . getElementById ( "valor" ) . valor ;
    var  forma  =  document . getElementById ( "forma" ) . valor ;

    if ( Lancar()) {
     tabela. push ( produto ) ;
    Lancar( ) ;
    documento.getElementById ( "produto" ) . valor  =  "" ;
    }  else  {
        alert ( "Usuário favor preencher o campo nome" ) ;
    }
}

function  Lancar ( )  {
    var  tabela  =  document.getElementById ( "Lancar" ) . innerHTML  =  "<tr> <th> Nome Usuario </th> <th> Ações </th> </tr>" ;
    for ( var  i  =  0 ;  i  <=  ( dadosLista . comprimento  - 1 ) ;  i ++ ){
        tabela  +=  "<tr> <td>"  +  dadosLista [ i ]  +  "</td> <td> <button class = 'btn btn-success' onclick = 'editar (this.parentNode.parentNode.rowIndex)'> Editar </button> <button class = 'btn btn-danger' onclick = 'excluir (this.parentNode.parentNode.rowIndex)'> Excluir </button> </td> </tr> " ;
        documento.getElementById ( "Lancar" ) . innerHTML  =  tabela ;
    }
}
 



