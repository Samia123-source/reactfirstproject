
import './App.css'
import Actor from './Actor'


function App() {

  const actors = ['Sakib', 'Shariful Raj', 'Jasim', 'Rubel']

  return (
    <>

      <h3>Vite+React</h3> 
      <Actor name= {"Bappa Raj"}></Actor>
    
     {
      actors.map (actor => <Actor name={actor}></Actor>)
     }
      
    </>
  )
}


 export default App
