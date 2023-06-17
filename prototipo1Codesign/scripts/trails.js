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
      corujadastrilhas.style.marginTop="-2.5vw";
      corujadastrilhas.style.marginLeft="-0.5vw";
      corujadastrilhas.style.width="27.66453333vw";
      corujadastrilhas.style.height="33.99375vw";
    }
}