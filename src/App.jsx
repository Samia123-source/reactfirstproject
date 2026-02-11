
import './App.css'
import Actor from './Actor'
import Singer from './Singer'


function App() {

  const actors = ['Sakib', 'Shariful Raj', 'Jasim', 'Rubel'];
  const singers = [
    {id:1, name:'Dr.Mahfuz', age: 68},
    {id:2, name: 'Eva', age: 38},
    {id:3, name:'Shuvro',age:58},
    {id:4, name: 'Pritom',age:28}
    ]

  return (
    <>

      <h3>Vite+React</h3> 
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raj"}></Actor>
    
     {
      actors.map (actor => <Actor name={actor}></Actor>)
     }
      
    </>
  )
}


 export default App
// ekhane Singer j class ta banaiso , oitay 2 ta jinish proyojon , name r age , so , 
// 2 tai pathaite hobe 