import './navbar.css'
import '../responsividade.css'

function NavBar() {
    return (
        <main className='Conteiner'>

            <h1 className='Souchat-logo'><img className='Souchat-logo' src="Souchat-logo.png" alt="Logo SouChat" /></h1>

            <div className='divLink'>
                <a id='Home'        className='Links'       href="#">Home</a>
                <a id='Clientes'    className='Links'       href="#">Nossos Clientes</a>
                <a id='Int'         className='Links'       href="#">Integrações</a>
                <a id='blog'        className='Links'       href="#">Blog</a>
            </div>

            <a className='fal' href="#">
                <p className='spantext'>
                        Falar com <br />
                      Especialistas
                </p>
            </a>
            
        </main>
    )
}

export default NavBar;
