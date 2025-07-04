import './FifthArticle.css'
import ImgfifthArticle from '../../assets/fiftharticle.png'

function Fiftharticle() {
    return (
        <article className='FifthArticle'>
            <div className='div-title-FifthArticle'>
                    <h2 className='title-h2-FifthArticle'>
                        Monitoramento em <br /> tempo real
                    </h2>

                    <p className='FifthArticle-p'>
                        Visualize de forma clara e objetiva todos os dados <br /> necessários para otimizar seus processos de <br /> atendimento ao cliente. Com nossos relatórios, <br /> você visualiza seus horários de pico e pode <br /> remanejar seus colaboradores de acordo com a <br /> demanda, comparar a produtividade e a média de <br /> avaliação por atendente e departamentos, além <br /> de poder tomar decisões baseadas em <br /> informações valiosas sobre a sua operação.

                    </p>

                    <a href="@" className='a-FifthArticle'>
                        <span className='span-FifthArticle'>
                            Fale Agora Com Nosso Time
                        </span>
                    </a>
            </div>

            <img className='img-fifthArticle' src={ImgfifthArticle} alt="" />

        </article>
    )
}

export default Fiftharticle;