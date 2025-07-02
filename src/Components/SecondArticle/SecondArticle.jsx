import './SecondArticle.css'
import WorkImg from '../../assets/work-chat.gif'

function SecondArticle() {
    return (
        <section className='section-elementor'>
            <div className='div-titles'>
                <h2 className='title-atendimentos'>
                Setorize o seu atendimento com <br /> apenas 1 Número de<br />WhatsApp.
                </h2>

                <p className='par-Chat'>
                    A Souchat permite que a sua empresa tenha <br /> diversos setores de atendimento com apenas <strong>1 <br /> número de WhatsApp</strong> e com distribuição de forma <br /> automática das mensagens dos clientes entre <br /> esses usuários e setores.
                </p>

                <div className='div-a-button'>
                    <a className='a-plans' href="#">
                        <span>Conheça Nossos Planos</span>
                    </a>
                </div>
            </div>

            
                    <div className='space-imag-work'><img  src={WorkImg} alt="" /></div>
            
        </section>
    )
}

export default SecondArticle;