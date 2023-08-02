import '../public/styling/index.css'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'



function App() {

  return (
    <>
      <div className='AppContainer'>
        <Hero />
        <Who />
        <Works />
        <Contact />
        </div>
    </>
  )
}

export default App
