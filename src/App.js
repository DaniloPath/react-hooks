import React, { useState } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';


export default function App() {
  const [candidates, setCandidates] = useState([])
  const [previousVotes, setPreviousVotes] = useState([])
  
  useState(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes').then((res)=>{
        return res.json()
      }).then((json)=>{

        const previousVotes = candidates.map(({id, votes})=>{
          return {id, votes}
        })

        setCandidates(json.candidates)
        setPreviousVotes(previousVotes)        
      })      
    }, 1000)    
    return () => {
      clearInterval(interval)
    }
  }, [candidates])

if (candidates.length === 0) {
  return (
    <Spinner descript="Carregando..." />
    )
}

return (
  <div>
    <Header>Votação</Header>
    <Candidates candidates={candidates} previousVotes={previousVotes} />
  </div>
  )
}

