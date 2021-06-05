import React from 'react'
import './Home.css'
import Slide from '../slide/Slide'
const Home = () => {
    return (
        <aside className="Aside">
            <div className="Home">
                <div className="Text">
                    <h1>BSP Energia Grupos Geradores</h1>
                    <p>Soluções em energia para pequenas, médias e grandes empresas que necessitam de fornecimento energético de qualidade e confiança.</p>
                    <p>A BSP ENERGIA GRUPOS GERADORES disponibiliza dos serviços de projetos, instalação, start-up venda, aluguel e manutenção preventiva e corretiva de grupos geradores.</p>
                    <p>Assim, a empresa completa que você precisa para possuir qualidade energética no seu negócio.</p>

                </div>
                <div className="slide">
                    <Slide />
                </div>
            </div>
            <div className="Home1">
                <h1>Diálise de Diesel</h1>
                <p>A realização da diálise de tanque de diesel é essencial para confirmar o funcionamento adequado de seu grupo gerador.
                <br/>Este procedimento consiste na passagem do óleo por um filtro separador de agua e pequenas partículas de resíduos sólidos.
                <br/>Estas partículas, oriundas do desgaste das partes do motor ou do próprio envelhecimento do óleo, são extremamente prejudiciais à vida útil dos componentes do motor. Assim, a diálise de tanque de diesel deve ser um processo periódico a ser realizado a cada 12 meses ou 800 horas de funcionamento do grupo gerador.
                </p>

            </div>
        </aside>


    )
}
export default Home