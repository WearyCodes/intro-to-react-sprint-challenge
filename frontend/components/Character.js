import React, { useState } from 'react';

function Character(props) {
  const { person } = props; // Each character object

  const [homeworldOn, setHomeworldOn] = useState(false);

  return (
    <div className='character-card' onClick={() => setHomeworldOn(!homeworldOn)}>
      <h3 className='character-name'>{person.name}</h3>
      {homeworldOn && (
        <p>
          {"Planet: "}
          <span className='character-planet'>{person.homeworld.name}</span>
        </p>
      )}
    </div>
  );
}

function CharacterList(props) {
  const { peopleArray } = props;
console.log(peopleArray)
  return (

      peopleArray.map((person, index) => (
        <Character key={index} person={person} />
      ))

  );
}
export default CharacterList;
