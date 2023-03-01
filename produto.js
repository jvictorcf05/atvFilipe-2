function calcular(){
        let valor = unitario.value * quantidade.value
        let desc = parseFloat(desconto.value) / 100
        let valorFinal = valor - (valor * desc)
        total.value = valorFinal
}
