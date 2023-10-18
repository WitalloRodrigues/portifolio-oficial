import "./orcamento.scss"

const Orcamento = () => {
    return(

        
        <div className="orcamento" style={{background:"linear-gradient(180deg, #111132, #505064"}}>
            <div className="mountains"></div>
            <div className="planets"></div>
            {/* <div className="stars"></div> */}
            <div className="container">
                <h1>Orçamento</h1>
                <form action="" method="POST">
                    <div className="paginas">
                        <h2>Qtde de Pariginas</h2>
                        <input type="number" required id="paginas" min="1" max="20"  placeholder="Qtde de Pariginas" name="QtdPagina"/>
                    </div>
                    
                    
                    <div className="script">
                        <h2 htmlFor="script"> <label htmlFor="script">Preciso de um script JS</label></h2>
                        <label htmlFor=""><input type="checkbox" name="" id="script" /></label>
                    </div> 

                    <div className="layout">
                        <h2>Layout</h2> 
                            <div className="radio">
                                <input type="radio" name="layout" id="pLayout" checked/><label htmlFor="pLayout">Preciso de um layout</label>
                                <input type="radio" name="layout" id="JLayout" /><label htmlFor="JLayout">Já tenho um layout</label>
                            </div>
                        
                    </div>

                    <div className="prazo">
                        <h2>Prazo</h2>
                        <input type="range" name="" id="prazo" />
                        <label htmlFor="prazo"></label>
                    </div>

                    <div className="confirm">
                        <div className="valor" id="preco">R$ 0,00</div>
                        <button>Confirmar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

// document.querySelector("#paginas").addEventListener("change", atualizarPreco)
// document.querySelector("#script").addEventListener("change", atualizarPreco)
// document.querySelector("#pLayout").addEventListener("change", atualizarPreco)
// document.querySelector("#jLayout").addEventListener("change", atualizarPreco)
// document.querySelector("#prazo").addEventListener("change", function () {
//     const prazo = document.querySelector("#prazo").value
//     document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
//     atualizarPreco()
// })

// function atualizarPreco(){
//     const qtde = document.querySelector("#qtde").value
//     const temJS = document.querySelector("#js").checked
//     const incluiLayout = document.querySelector("#layout-sim").checked
//     const prazo = document.querySelector("#prazo").value
  
//     let preco = qtde * 100;
//     if (temJS) preco *= 1.1
//     if (incluiLayout) preco += 500
//     let taxaUrgencia = 1 - prazo*0.1;
//     preco *= 1 + taxaUrgencia
   
//     document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
// }

export default Orcamento