function exibir_categoria(categorias){
    //alert(categoria);

    let elementos = document.getElementsByClassName('box-produto');
    console.log(elementos);
    for(var i=0; i<elementos.length; i++){
        console.log(elementos[i].id);

        if(categorias == elementos[i].id)
            elementos[i].id = "display:block";
        else 
            elementos[i].style = "display:none";    

    }
}