import React from 'react'
import './Dialise.css'
import YoutubeEmbed from './YoutubeEmbed'

const Dialise = () => {
    return (
        <div className="Dialise">
            <div className="DialiseVideo">
                <div className="Text">
                    <h1>Diálise de diesel</h1>
                    <p>A realização da diálise de tanque de diesel é essencial para confirmar o funcionamento adequado de seu grupo gerador.
                    <br />Este procedimento consiste na passagem do óleo por um filtro separador de agua e pequenas partículas de resíduos sólidos.
                    <br />Estas partículas, oriundas do desgaste das partes do motor ou do próprio envelhecimento do óleo, são extremamente prejudiciais à vida útil dos componentes do motor. Assim, a diálise de tanque de diesel deve ser um processo periódico a ser realizado a cada 12 meses ou 800 horas de funcionamento do grupo gerador.
                    <br />Evitar um prejuízo decorrente da inutilização de componentes é um motivo válido para a realização frequente da diálise de tanque de diesel, mas não é o único. Este procedimento também atua diretamente no aumento da eficiência do ciclo de funcionamento do grupo gerador.
                    <br />Sem a atuação de partículas sólidas, capazes de alterar as propriedades dos fluidos, as irreversibilidades do sistema são diminuídas. Por conta disso, menores perdas de potência por atrito e calor são observadas em cada elemento do ciclo, potencializando o rendimento de todo o conjunto.</p>
                </div>

                <div className="Video">
                    <YoutubeEmbed embedId="Zgg-KxR9Q-c" />
                </div>
            </div>
            <div className="List">
                <h2>PRINCIPAIS PROBLEMAS SOLUCIONADOS ATRAVÉS DA DIÁLISE DE TANQUE DE DIESEL</h2>

                <p>A descontaminação de tanques apresenta inúmeras vantagens. A principal delas está relacionada à economia da manutenção, que aumenta a durabilidade de algumas partes de sistemas mecânicos. A realização da diálise de tanque de diesel é uma solução rápida e eficiente para os seguintes problemas:</p>

                <ul>
                    <li>Entupimento de bicos do sistema de injeção: A diálise de tanque de diesel retira as partículas indesejadas do combustível. Desta forma, com uma composição homogênea e exclusiva de diesel, o entupimento dos bicos injetores é evitado.</li>

                    <li>Falhas em elementos mecânicos: O fluxo de água em conjunto com o combustível tende a oxidar a tubulação do motor, desenvolvendo ainda mais resíduos que escoam com o diesel. Nestes casos, a ação da diálise de tanque de diesel é tanto preventiva quanto corretiva.</li>

                    <li>Fornecemos sem custos DIÁLISE DE DIESEL para clientes que possuam contrato de manutenção preventiva.</li>

                </ul>
            </div>
        </div>
    )

}
export default Dialise