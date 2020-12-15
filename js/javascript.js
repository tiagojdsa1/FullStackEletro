function exibir_categorias(categorias){
    //alert(categoria);

    let elementos = document.getElementsByClassName('box-produto');
    console.log(elementos);
    for(var i=0; i<elementos.length; i++){
        console.log(elementos[i].id);
        if(categorias == elementos[i].id)
            elementos[i].style = "display:block";
        else 
            elementos[i].style = "display:none";
    }
}

let exibir_todas = () => {
    let elementos = document.getElementsByClassName('box-produto');
    
    for(var i=0; i<elementos.length; i++){ 
        elementos[i].style = "display:block";        
    }
};

let destaque = (imagem) => {
    console.log(imagem);
    if(imagem.width == 240)
    imagem.width = 120;
    else
    imagem.width = 240;
};