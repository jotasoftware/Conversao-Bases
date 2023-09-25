(function(){


    const formValor = document.querySelector('.form-valor')
    const valor = document.querySelector('#valor')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', function(e){
        e.preventDefault()
        pegaValor()
    })

    function pegaValor(){
        valorAConverter = valor.value
        if(valorAConverter == ''){
            imprimirResultado('Valor invalido')
            error()
            return
        } 
        conversaoNumero(valorAConverter);
    }

    function conversaoNumero(valorAConverter){
        anulaError()
        const botaoFormDe = document.getElementsByName('nums1')
        const botaoFormPara = document.getElementsByName('nums2')
        let bool1 = verificaMarcado(botaoFormDe)
        let bool2 = verificaMarcado(botaoFormPara)

        if(bool1 && bool2){
            const valorBotaoDe = verificaBotao(botaoFormDe)
            const valorBotaoPara = verificaBotao(botaoFormPara)


            iniciaConversão(valorBotaoDe, valorBotaoPara)
        }


    }

    function verificaBotao(botao){
        for(let i = 0; i<4; i++){
            if(botao[i].checked){
                return botao[i].value
            }
        }
    }

    function iniciaConversão(btnDe, btnPara){
        var resultado = ''
        if(btnDe === 'n2'){
                for(let elem of valor.value){
                    if((elem!=1 && elem != 0) || (isNaN(valor.value) === true)){
                        error()
                        imprimirResultado('Número inválido')
                        return
                    }
                }
            if(btnPara === 'n8'){
                resultado = transformaParaOcta(2)
            }
            if(btnPara === 'n10'){
                resultado = transformaParaDecimal(2)
            }
            if(btnPara === 'n16'){
                resultado = transformaParaHexa(2)
            }
            if(btnPara === 'n2'){
                resultado = valorAConverter
            }
        }
        if(btnDe === 'n8'){
                for(let elem of valor.value){
                    if((elem>=8 || elem < 0) || (isNaN(valor.value) === true)){
                        error()
                        imprimirResultado('Número inválido')
                        return
                    }
                }
            if(btnPara === 'n2'){
                resultado = transformaParaBinario(8)
            }
            if(btnPara === 'n10'){
                resultado = transformaParaDecimal(8)
            }
            if(btnPara === 'n16'){
                resultado = transformaParaHexa(8)
            }
            if(btnPara === 'n8'){
                resultado = valorAConverter
            }
        }
        if(btnDe === 'n10'){
            if(isNaN(valor.value) === true) {
                error()
                imprimirResultado('Número inválido')
                error()
                return
            }
            if(btnPara === 'n2'){
                resultado = transformaParaBinario(10)
            }
            if(btnPara === 'n8'){
                resultado = transformaParaOcta(10)
            }
            if(btnPara === 'n16'){
                resultado = transformaParaHexa(10)
            }
            if(btnPara === 'n10'){
                resultado = valorAConverter
            }
        }
        if(btnDe === 'n16'){
            let numerosELetras = valorAConverter
            for(i=0; i<numerosELetras.length; i++){
                if(isNaN(numerosELetras[i]) === true){
                    if(numerosELetras[i].toLowerCase() !== 'a' && numerosELetras[i].toLowerCase() !== 'b' && numerosELetras[i].toLowerCase() !== 'c' && numerosELetras[i].toLowerCase() !== 'd' && numerosELetras[i].toLowerCase() !== 'e' && numerosELetras[i].toLowerCase() !== 'f'){
                        error()
                        imprimirResultado('Número inválido')
                        return
                    }
                }
            }
            if(btnPara === 'n2'){
                resultado = transformaParaBinario(16)
            }
            if(btnPara === 'n8'){
                resultado = transformaParaOcta(16)
            }
            if(btnPara === 'n10'){
                resultado = transformaParaDecimal(16)
            }
            if(btnPara === 'n16'){
                resultado = valorAConverter
            }
        }
        if(resultado!== '') check()
        imprimirResultado(resultado)
    }
    
    function transformaParaBinario(n){
        if(n === 8){
            let valorEmOctal = String(valorAConverter);
            let valorEmBi = octaBinario(valorEmOctal)
            return valorEmBi
        }
        
        if(n === 10){   
            let valorEmDec = String(valorAConverter) 
            let valorEmBi = decBinario(valorEmDec)
            return valorEmBi
        }

        if(n===16){
            let valorEmHex = String(valorAConverter)
            let valoresEmBinario = ''
            for(let i = 0; i<valorEmHex.length; i++){
                valoresEmBinario += hexaBinario(valorEmHex[i])
            }
            return valoresEmBinario
        }
    }

    
    function transformaParaOcta(n){
        if(n===2){
            let valorEmBinario = String(valorAConverter);
            let valorEmOctal = biOctal(valorEmBinario)
            return valorEmOctal
        }
        
        if(n===10){
            let valorEmDec = String(valorAConverter) 
            let valorEmBi = hexaBinario(valorEmDec)
            let valorEmOctal = biOctal(valorEmBi)
            return valorEmOctal
        }
        
        if(n===16){
            let valorEmHex = String(valorAConverter)
            let valoresEmBinario = ''
            for(let i = 0; i<valorEmHex.length; i++){
                valoresEmBinario += hexaBinario(valorEmHex[i])
            }
            let valorEmOct = biOctal(valoresEmBinario)
            return valorEmOct
        }
        
    }
    
    function transformaParaDecimal(n){
        if(n === 2){
            let valorEmBinario = String(valorAConverter);
            let valorEmDecimal = biDecimal(valorEmBinario)
            return valorEmDecimal
        }
        if(n === 8){
            let valorEmOctal = String(valorAConverter);
            let valorEmBi = octaBinario(valorEmOctal)
            let valorEmDecimal = biDecimal(valorEmBi)
            return valorEmDecimal
        }
        if(n===16){
            let valorEmHex = String(valorAConverter)
            let valoresEmBinario = ''
            for(let i = 0; i<valorEmHex.length; i++){
                valoresEmBinario += hexaBinario(valorEmHex[i])
            }

            let valorEmDecimal = biDecimal(valoresEmBinario)
            return valorEmDecimal;
        }
    }

    function transformaParaHexa(n){
        if(n===2){
            let valorEmBinario = String(valorAConverter);
            let valorEmHexa = biHexa(valorEmBinario);
            return valorEmHexa;
        }

        if(n===8){
            let valorEmOctal = String(valorAConverter);
            let valorEmBinario = octaBinario(valorEmOctal)
            let valorEmHex = biHexa(valorEmBinario)
            return valorEmHex
        } 

        if(n===10){
            let valorEmDecimal = String(valorAConverter);
            let valorEmBinario = decBinario(valorEmDecimal)
            let valorEmHex = biHexa(valorEmBinario)
            return valorEmHex
        }
    }

    function biOctal(valorEmBinario){
        let aux = 0;
        let valorEmOctal= ''
        let valorProvisorio = ''
        let quantidadeNumeros = valorEmBinario.length
        var numeros = []

        if(valorEmBinario.length % 3 == 1){
            valorProvisorio = '0' + '0' + valorEmBinario[0]
            quantidadeNumeros = quantidadeNumeros - 1;
            numeros.push(valorProvisorio)
            aux=1

        }else if(valorEmBinario.length % 3 == 2){
            valorProvisorio = '0' + valorEmBinario[0] + valorEmBinario[1]
            quantidadeNumeros = quantidadeNumeros - 2;
            numeros.push(valorProvisorio)
            aux=2
        }
        
        if(valorEmBinario.length >= 3){
            let quantidadeNumeros3 = quantidadeNumeros/3
            for(let j=0; j<quantidadeNumeros3; j++){
                valorProvisorio = ''
                for(let i = 0; i<3; i++){
                    valorProvisorio += valorEmBinario[aux]
                    aux++;
                }
                numeros.push(valorProvisorio)
            }
        }
        for(let i = 0; i<numeros.length; i++){
            if(numeros[i] === '000') valorEmOctal += '0'
            if(numeros[i] === '001') valorEmOctal += '1'
            if(numeros[i] === '010') valorEmOctal += '2'
            if(numeros[i] === '011') valorEmOctal += '3'
            if(numeros[i] === '100') valorEmOctal += '4'
            if(numeros[i] === '101') valorEmOctal += '5'
            if(numeros[i] === '110') valorEmOctal += '6'
            if(numeros[i] === '111') valorEmOctal += '7'
        }
        return valorEmOctal  
    }

    function biHexa(valorEmBinario){
        let aux = 0;
        let valorEmHexa = ''
        let valorProvisorio = ''
        let quantidadeNumeros = valorEmBinario.length
        var numeros = [];

        if(valorEmBinario.length % 4 == 1){
            valorProvisorio = '0' + '0' + '0' + valorEmBinario[0]
            quantidadeNumeros = quantidadeNumeros - 1;
            numeros.push(valorProvisorio)
            aux=1
        }else if(valorEmBinario.length % 4 == 2){
            valorProvisorio = '0' + '0' + valorEmBinario[0] + valorEmBinario[1]
            quantidadeNumeros = quantidadeNumeros - 2;
            numeros.push(valorProvisorio)
            aux=2
        }else if(valorEmBinario.length % 4 == 3){
            valorProvisorio = '0' + valorEmBinario[0] + valorEmBinario[1] + valorEmBinario[2]
            quantidadeNumeros = quantidadeNumeros - 3;
            numeros.push(valorProvisorio)
            aux=3
        }
        
        if(valorEmBinario.length >= 4){
            let quantidadeNumeros4 = quantidadeNumeros/4
            for(let j=0; j<quantidadeNumeros4; j++){
                valorProvisorio = ''
                for(let i = 0; i<4; i++){
                    valorProvisorio += valorEmBinario[aux]
                    aux++;
                }
                numeros.push(valorProvisorio)
            }
        }
        for(let i = 0; i<numeros.length; i++){
            if(numeros[i] === '0000') valorEmHexa += '0'
            if(numeros[i] === '0001') valorEmHexa += '1'
            if(numeros[i] === '0010') valorEmHexa += '2'
            if(numeros[i] === '0011') valorEmHexa += '3'
            if(numeros[i] === '0100') valorEmHexa += '4'
            if(numeros[i] === '0101') valorEmHexa += '5'
            if(numeros[i] === '0110') valorEmHexa += '6'
            if(numeros[i] === '0111') valorEmHexa += '7'
            if(numeros[i] === '1000') valorEmHexa += '8'
            if(numeros[i] === '1001') valorEmHexa += '9'
            if(numeros[i] === '1010') valorEmHexa += 'a'
            if(numeros[i] === '1011') valorEmHexa += 'b'
            if(numeros[i] === '1100') valorEmHexa += 'c'
            if(numeros[i] === '1101') valorEmHexa += 'd'
            if(numeros[i] === '1110') valorEmHexa += 'e'
            if(numeros[i] === '1111') valorEmHexa += 'f'
        }

        return valorEmHexa     
    }

    function biDecimal(valorEmBinario){
        let total = 0;
        let aux = 1;
        for(let i = 1; i<valorEmBinario.length; i++){
            aux *= 2;
        }
        for(let i = 0; i<valorEmBinario.length; i++){
            if(valorEmBinario[i] == 1){
                total += aux;
            }
            aux = aux/2;
        }
        return total;
            
    }

    function octaBinario(valorEmOctal){
        var valorEmBinario2 = ''
        for(let i = 0; i<valorEmOctal.length; i++){
            var valorEmBinario1 = ''
            let aux = 8;
            var valorParaBinario = valorEmOctal[i]
            do{
                if(valorParaBinario<aux){
                    valorEmBinario1 += '0'
                }else{
                    valorParaBinario = valorParaBinario - aux;
                    valorEmBinario1 += '1';
                }
                aux = aux/2;
            }while(aux>=1)
            valorEmBinario2 += valorEmBinario1.slice(1)
        }    
        return valorEmBinario2;
    }

    function decBinario(valor){
        var aux = 1;
        do{
            aux = aux*2;
        }while(valor>=aux)
        aux = aux/2;
        var valorBinario = ''
        var valorParaBinario = valor
        do{
            if(valorParaBinario<aux){
                valorBinario += '0'
            }else{
                valorParaBinario = valorParaBinario - aux;
                valorBinario += '1';
            }
            aux = aux/2;
        }while(aux>=1)
        return valorBinario    
    }

    function hexaBinario(valores){
        
        if(valores == '1') return '0001'
        if(valores == '2') return '0010'
        if(valores == '3') return '0011'
        if(valores == '4') return '0100'
        if(valores == '5') return '0101'
        if(valores == '6') return '0110'
        if(valores == '7') return '0111'
        if(valores == '8') return '1000'
        if(valores == '9') return '1001'
        if(valores == 'a' || valores == 'A') return '1010'
        if(valores == 'b' || valores == 'B') return '1011'
        if(valores == 'c' || valores == 'C') return '1100'
        if(valores == 'd' || valores == 'D') return '1101'
        if(valores == 'e' || valores == 'E') return '1110'
        if(valores == 'f' || valores == 'F') return '1111'
    }


    function imprimirResultado(res){
        const _resultado = document.querySelector('.valor-para')
        _resultado.innerHTML = res;

    }

    function check(){
        const div = document.querySelector('.all')
        if(div.hasAttribute('id', 'error')) div.removeAttribute('id', 'error')
        div.setAttribute('id', 'check')
    }
    function error(){
        const div = document.querySelector('.all')
        if(div.hasAttribute('id', 'check')) div.removeAttribute('id', 'check')
        div.setAttribute('id', 'error')
    }
    function anulaError(){
        const div = document.querySelector('.all')
        if(div.hasAttribute('id', 'error')) div.removeAttribute('id', 'error')
    }

    function verificaMarcado(botaoForm){
        let aux = 0
        for(let btn of botaoForm){
            if(!btn.checked){
                aux += 1
            }
        }
        if(aux==4){
            imprimirResultado('Marque uma opção');
            error()
            return false
        }
        return true
    }
})()
