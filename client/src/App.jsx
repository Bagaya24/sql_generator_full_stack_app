import { useState } from 'react'
import styles from "./index.module.css"
import sqlLogo from "./assets/sql-logo.png"

function App() {
  const [queryDescription, setQueryDescription] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submited:", queryDescription)
  }

  return (
    
    <main className={styles.main}>
      <img src={sqlLogo} alt="sql logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form onSubmit={onSubmit}>
        <input
         type="text"  
         name='query-description'
         placeholder='Describe your query'
         onChange={(e) => setQueryDescription(e.target.value)}
         />
         <input type="submit" value="Generate" />
      </form>
    </main>
  )
}

export default App
