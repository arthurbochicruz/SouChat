import './App.css'
import NavBar from './Components/NavBar/navbar'
import Article from './Components/Article/Article'
import SecondArticle from './Components/SecondArticle/SecondArticle'
import ThirdArticle from './Components/ThirdArticle/ThirdArticle'

function App(){
    return (
       <div className='HeartOfTheProject'>
           <NavBar />
           <Article />
           <SecondArticle />
           <ThirdArticle />
       </div>
    )
}

export default App
