import './style.css'
import billie from './assets/billie.jpg'
import bruno from './assets/bruno.jpg'

function App() {

  return (

  <section>    
    <div>
      <h1>Billie Eillish</h1>
      <p>When the party's over</p>
    </div>
      <img src={billie} alt="" />

      <div>
      <h1>Bruno Mars</h1>
      <p>Die With A Smile</p>
    </div>
      <img src={bruno} alt="" />
  </section>

  


  )
}

export default App
