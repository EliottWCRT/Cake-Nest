import { useState } from 'react'
import './App.css'

function App() {
  const [InputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${InputValue}`)
    setInputValue('')
  }


  return (
    <>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <br></br>
        <h2>Connectez-vous</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={InputValue} placeholder="Entrez votre prénom" onChange={(e) => setInputValue(e.target.value)}/><button type="submit">Accéder à votre espace</button> 
        </form>
      </div>
    </>
  )
}

export default App