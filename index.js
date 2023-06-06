function fuja(){
    var botaoNao = document.getElementById("Nao")
    var larguraJanela = window.innerWidth;
    var alturaJanela  = window.innerHeight;
    
    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;
    
    var aleatorioX = math.floor(Math.random() * maxX);
    var aleatorioY = math.floor(Math.random() * maxY);
    
    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
    }