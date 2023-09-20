import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'
const theTester = {
  id: 18,
  name: 'Samuel',
  homeworld: {
name: 'Tatooine',
id: 35
  }
}
function App() {
  // ❗ Create state to hold the data from the API

  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])

  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    axios.get(urlPeople)
    .then(res => {
      setPeople(res.data)
    })
    .catch(err => console.log(err))
    axios.get(urlPlanets)
    .then(res => {
      setPlanets(res.data)}
    )
      .catch(err => console.log(err))
  }, [])
  
  if (people){console.log(people)}
  if (planets){console.log(planets)}
const peopleArray = []
  planets.forEach(planet => {
    people.forEach(person => {
      if (person.homeworld === planet.id){
        peopleArray.push({
          name: person.name,
      id: person.id,
      homeworld: {
        name: planet.name,
        id: planet.id
      }
    })
        
        
        console.log(person.name, planet.name)
      }
    })
  })
console.log(peopleArray)

  return (
    <div>
      <h2>Star Wars Characters</h2>
      
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
