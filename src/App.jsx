import './App.css'
import ImgZapZap from '../src/assets/img-wa.png'
import NavBar from './Components/NavBar/navbar'
import Article from './Components/Article/Article'
import SecondArticle from './Components/SecondArticle/SecondArticle'
import ThirdArticle from './Components/ThirdArticle/ThirdArticle'
import FourthArticle from '../src/Components/FourthArticle/FourthArticle'

function App(){
    return (
       <div className='HeartOfTheProject'>
           <NavBar />
           <Article />
           <SecondArticle />
           <ThirdArticle />
           <FourthArticle />

           <div className='div-pricipal-button'>

            <div>
                <img className='img-zapzap' src={ImgZapZap} alt="" />
            </div>

            <a className='link_button' href="#">

                <span className='span-button'>
                    Fale Conosco
                </span>

            </a>

           </div>
           
       </div>

    )
}

export default App
