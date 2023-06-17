function mudartrilha(trilha){
    let ntrilha = trilha;
    let corujadastrilhas = document.getElementById("corujadastrilhas")
    console.log("Você está na trilha", ntrilha);
    if(ntrilha==1){
      corujadastrilhas.setAttribute("src","../source/coruja design.png");
      corujadastrilhas.style.marginTop="1vw";
      corujadastrilhas.style.marginLeft="7vw";
    }
    if(ntrilha==2){
      corujadastrilhas.setAttribute("src","../source/coruja audiovisual.png");
      corujadastrilhas.style.marginTop="2vw";
      corujadastrilhas.style.marginLeft="6.8vw";
    }
    if(ntrilha==3){
      corujadastrilhas.setAttribute("src","../source/corujaprog.png");
      corujadastrilhas.style.marginTop="1vw";
      corujadastrilhas.style.marginLeft="6.25vw";
    }
    if(ntrilha==4){
      corujadastrilhas.setAttribute("src","../source/coruja jogos.png");
      corujadastrilhas.style.marginTop="-3.8vw";
      corujadastrilhas.style.marginLeft="-0.8vw";
    }
}