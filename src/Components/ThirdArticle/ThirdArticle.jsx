import './ThirdArticle.css'
import CheckCircle from '../../assets/check_circle.png'
import Pullimg from '../../assets/Pull-request.gif'

function ThirdArticle() {

    return (
        <div className='ThirdArticle'>
            <div className='div-elementor-thirdarticle'>
                <h2 className='h2-thirdarticle'>Integração com outras Ferramentas</h2>

                <p className='p'>
                    A Souchat é integrada com os maiores ERP e CRM <br /> do mercado, trazendo a agilidade para sua equipe<br /> de vendas e auxiliando o departamento<br />financeiro. 
                </p>

                <ul className='ul-elementor'>
                    
                    <li className='li-elementor'>
                        <img className='img-circle-check' src={CheckCircle} alt="" /> 
                        Acompanhamento de Pedidos
                    </li>

                   
                    <li className='li-elementor'> 
                        <img className='img-circle-check' src={CheckCircle} alt="" /> 
                        Emissão de 2ª via de Boleto
                    </li>

                    
                    <li className='li-elementor'>
                        <img className='img-circle-check' src={CheckCircle} alt="" /> 
                        Solicitação de Código de Barras
                    </li>

                    
                    <li className='li-elementor'>
                        <img className='img-circle-check' src={CheckCircle} alt="" />
                        Integração para Nota Fiscal
                    </li>

                    
                    <li className='li-elementor'>
                        <img className='img-circle-check' src={CheckCircle} alt="" /> 
                        Solicitação de 2ª via de Pedidos
                    </li>

                     
                    <li className='li-elementor'>
                        <svg className='img-circle-check' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#06BEB6"><path d="m480-336 144-144-144-144-51 51 57 57H336v72h150l-57 57 51 51Zm0 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                        e muito mais...
                    </li>
                </ul>
                <div className='div-buttonHire'>
    
                    <a className='a-buttonHire' href="#">
                        <span className='span-buttonHire'>
    
                                Contrate Agora
                        </span>
                    </a>
                </div>

                

            </div>
                <div className='div-Pull-Img'>
                    <img src={Pullimg} alt="" />
                </div>
        </div>
    )
}

export default ThirdArticle;