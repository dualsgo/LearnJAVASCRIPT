function contar() {
    // declarando as variaveis para os valores que serao utilizados
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    //primeira condição para verificar se os campos foram preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando...'
        // declarando as variaveis do laço
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando o PASSO 1')
            p = 1
        } if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for(let c = i; c>= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F444}`
    }
}
