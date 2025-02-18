function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'fotof')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/criança-m.png')
                //CRIANÇA
            } else if (idade < 21){
                img.setAttribute('src', './imagens/jovem-m.png')
                //JOVEM
            } else if (idade < 50){
                img.setAttribute('src', './imagens/adulto-m.png')
                //ADULTO
            } else {
                img.setAttribute('src', './imagens/idoso-m.png')
                //IDOSO
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/criança-f.png')
                //CRIANÇA
            } else if (idade < 21){
                img.setAttribute('src', './imagens/jovem-f.png')
                //JOVEM
            } else if (idade < 50){
                img.setAttribute('src', './imagens/adulto-f.png')
                //ADULTO
            } else {
                img.setAttribute('src', './imagens/idoso-f.png')
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}