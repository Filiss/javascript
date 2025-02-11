function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
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
            if (idade >= 0 && idade < 12){
                //CRIANÇA
                img.setAttribute('src', './imagens/criança-m.jpg')
            } else if (idade < 25){
                //JOVEM
                img.setAttribute('src', './imagens/jovem-m.jpg')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', './imagens/adulto-m.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', './imagens/idoso-m.jpg')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //CRIANÇA
                img.setAttribute('src', './imagens/criança-f.jpg')
            } else if (idade < 25){
                //JOVEM
                img.setAttribute('src', './imagens/jovem-f.jpg')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', './imagens/adulto-f.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', './imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}