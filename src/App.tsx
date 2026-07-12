import './App.css'
import Header from './Header'
import Skills from './Skills'
import Works from './Works'

function App() {


  return (
    <>
      <div className="App">
        <div className="flex flex-col justify-items-center content-around gap-4">
          <Header />
          <Skills />
          <Works />
        </div>
      </div>
    </>
  )
}
export default App
