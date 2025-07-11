import './Article.css'
import '../responsividade.css'
import Img from '../../assets/Cmp.png'
import ImgTwo from '../../assets/Comptuador-cell__img.png'

function Article() {

    return (
        <div className='Dad'>
            <article className='article'>

                <h2 className='title1'>
                    1ª Plataforma De Atendimentos<br />Corporativos Nacional Para<br className='brh2'/>Atacadistas,<br className='brtp'/> Distribuidoras E<br className='brh2'/>Indústrias.
                </h2>

                <h2 className='title2'>
                    Aproveite nossa plataforma inteligente de atendimento e integre as áreas de Marketing, Vendas e Suporte ao cliente da sua empresa, por meio de chats em alta escala e jornadas personalizadas.
                    
                </h2>

                <div className='button'>
                
                    <a className='linkButton' href="#">
                        <span className='Span'>        
                            <h1 className='h1'>Solicite uma Demonstração</h1>
                        </span>        
                    </a>     
                                
                </div>

            </article>

                <img className='Img-Comp_cll' src={Img} alt="Computador em celular" />
                <img className='Img2' src={ImgTwo} alt="" />
        </div>
    )
}

export default Article;
