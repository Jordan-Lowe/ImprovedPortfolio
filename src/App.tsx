import '../public/styling/index.css'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'
import Test from './components/Test'



function App() {

  return (
    <>
      <div className='AppContainer'>
        <Hero />
        <Who />
        <Works />
        <Contact />
        <Test />
        </div>
    </>
  )
}

export default App
