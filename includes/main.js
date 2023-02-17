function conjuntoAnimacoes() {

    var posicaoheader = document.getElementById('header');
    posicaoHeader = posicaoheader.getBoundingClientRect();
    var opacitySidebar = -posicaoHeader.top;
    opacitySidebar = opacitySidebar / 1.5;
    document.getElementById('container-side-bar').style.opacity = opacitySidebar + '%';


    var containerSobreMim = document.getElementById('container-full-size-1');
    posicoesSobreMim = containerSobreMim.getBoundingClientRect();
    if (posicoesSobreMim.top < 600 && posicoesSobreMim.top > -600) {
        document.getElementById('sobre-mim-container').style.left = '0vw';
        document.getElementById('sobre-mim-container').style.display = 'flex';
    } else {
        document.getElementById('sobre-mim-container').style.left = '-100vw';
    }


    var containerSkills = document.getElementById('container-full-size-2');
    posicoesSkills = containerSkills.getBoundingClientRect();
    if (posicoesSkills.top < 400 && posicoesSkills.top > -400) {
        document.getElementById('sobre-mim-glass').classList.add("sobre-mim-glass-after");
        $('.linguagens-individuais').css('transform', 'scale(1)');
    } else {
        document.getElementById('sobre-mim-glass').classList.remove("sobre-mim-glass-after");
        $('.linguagens-individuais').css('transform', 'scale(0)');
    }


    var containerCertificados = document.getElementById('container-full-size-3');
    posicoesCertificados = containerCertificados.getBoundingClientRect();
    if (posicoesCertificados.top < 400 && posicoesCertificados.top > -400) {
        $(".circulos-rotate").css("width", "600px");
        $(".circulos-rotate").css("height", "600px");
    } else {
        $(".circulos-rotate").css("width", "100px");
        $(".circulos-rotate").css("height", "100px");
    }
}
function rolarTela(secao) {
    switch (secao) {
        case 'start':
            var container = document.getElementById('container-skyrim');
            break;
        case 'containerSobreMim':
            var container = document.getElementById('container-full-size-1');
            break;
        case 'containerSkills':
            var container = document.getElementById('container-full-size-2');
            break;
        case 'containerCertificados':
            var container = document.getElementById('container-full-size-3');
            break;
        case 'containerContato':
            var container = document.getElementById('portfolio-cont');
            break;
    }
    const posicao = container.getBoundingClientRect();
    const posicaoAtual = window.pageYOffset;
    let posicaoTop = posicao.top;
    if (verificarMobile()) {
        abrirSidebar(false);
        posicaoTop += -120;
    }
    $('html, body').animate({ scrollTop: posicaoTop + posicaoAtual }, 'slow');
}

function abrirSidebar(acao) {
    if (acao) {
        $("#side-bar-container").css("left", "0vw");
        $("#hamburguer-menu").attr("onclick", "abrirSidebar(false)");
        $(".hamburger").toggleClass("is-active");
    } else {
        $("#side-bar-container").css("left", "-100vw");
        $("#hamburguer-menu").attr("onclick", "abrirSidebar(true)");
        $(".hamburger").toggleClass("is-active");
    }
}
function animacao3D(mouse) {
    var retangulo3D = document.getElementById("container-full-size-3");
    informacoesDIV = retangulo3D.getBoundingClientRect();
    var tamanho = document.getElementById("container-full-size-3");
    tamanho = tamanho.getBoundingClientRect();
    var y = rotacionar(informacoesDIV.width, tamanho.width, mouse.clientX);
    var x = rotacionar(informacoesDIV.height, tamanho.height, mouse.clientY);
    $(".container-certificados").css("transform", "rotateY(" + y + "deg) rotateX(" + -x + "deg)");
}
function rotacionar(tamanhoDIVFilha, tamanhoDIVPai, tamanhoDesejado) {

    var auxiliar = tamanhoDIVPai - tamanhoDIVFilha;
    auxiliar = auxiliar / 2;
    tamanhoDesejado = tamanhoDesejado - auxiliar;
    porcentagemX = regradeTres(tamanhoDIVFilha, tamanhoDesejado);
    var inclinacao = (porcentagemX / 100) * 80;
    return inclinacao = inclinacao - 40;
}
function regradeTres(tamanhoMaximo, tamanhoDesejado) {
    var porcentagem = (100 * tamanhoDesejado) / tamanhoMaximo;
    return porcentagem;
}
window.addEventListener('resize', function () {
    verificarMobile();
});
function verificarMobile() {
    var largura = window.innerWidth;
    if (largura < 750) {
        const containerFullSize3 = document.getElementById("container-full-size-3");
        containerFullSize3.setAttribute("onmousemove", "");
        const containerCirculos = document.querySelectorAll(".circulos-rotate");
        containerCirculos.forEach(element => {
            element.remove();
        })
        return true;
    } else {
        document.getElementById("container-full-size-3").setAttribute("onmousemove", "animacao3D(event)");
        return false
    }
}
function onLoadFunctions() {
    verificarMobile();
    setTimeout(startarAnimacaoHome, 1000 * 2);
}
function startarAnimacaoHome() {
    const loading = document.getElementById("container-loading")
    loading.remove()
    const header = document.getElementById("header");
    header.style.animation = "header-down 1.2s ease-out"
    header.style.top = "0px"
    const home = document.getElementById("titulo-principal");
    home.style.left = "0vw"
    const titulo = home.childNodes;
    titulo[1].style.animation = "titulo-principal 8s ease-out";
    titulo[3].style.animation = "p-principal 1.7s ease-out";
    const html = document.querySelector("html");
    html.style.overflow = "auto";
}