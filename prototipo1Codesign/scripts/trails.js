function mudartrilha(trilha){
    let ntrilha = trilha;
    let corujadastrilhas = document.getElementById("corujadastrilhas")
    console.log("Você está na trilha", ntrilha);
    if(ntrilha==1){
      corujadastrilhas.setAttribute("src","../source/coruja design.png");
    }
    if(ntrilha==2){
      corujadastrilhas.setAttribute("src","../source/coruja audiovisual.png");
    }
    if(ntrilha==3){
      corujadastrilhas.setAttribute("src","../source/corujaprog.png");
    }
    if(ntrilha==4){
      corujadastrilhas.setAttribute("src","../source/coruja jogos.png");
    }
}