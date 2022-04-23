function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebemas.png' )
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemmas.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultomas.png' )
            } else {
                //IDOSO
                img.setAttribute('src', 'idosomas.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIAÇA
                img.setAttribute('src', 'bebefem.png')
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultafem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosafem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
