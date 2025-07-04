import './FourthArticle.css'
import Imgfourtharticle from '../../assets/FourthArticle.png'

function FourthArticle() {
    return (
        <article className='FourthArticle'>
        
            <div className='div-elementor-FourthArticle'>
                <h2 className='h2-FourthArticle'>
                    Atendimento mais fácil <br /> e rápido
                </h2>
               
                    <p className='p-FourthArticle'>
                        A Souchat permite sua empresa ter um <br /> atendimento 24 horas por dia e 7 dias na semana. <br /> Com a nossa plataforma você pode criar um <br /> chatbot para fazer o atendimento inicial do seu <br /> cliente, direcionando para um departamento, <br /> atendente específico ou respondendo as dúvidas <br /> mais simples. Assim seus colaboradores ganham <br /> tempo para se concentrarem apenas nos <br /> atendimentos e tarefas mais importantes.
                    </p>

                    <a href="#" className='a-FourthArticle'>
                        <span className='span-FourthArticle'>
                            Fale Agora Com Nosso Time
                        </span>
                    </a>

            </div>

            <img className='img-fourtharticle' src={Imgfourtharticle} alt="" />

        </article>
    )
}

export default FourthArticle;
