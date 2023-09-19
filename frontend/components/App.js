import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

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
      if (person.homeworld === planet.id){console.log(person.name, planet.name)}
    })
  })



  people.forEach(person => {
    peopleArray.push({
      id: person.id,
      name: person.name,
      homeworld: {
        name: 'vas',
        id: 'vas'
      }
    })
  }, [])
console.log(peopleArray)
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
