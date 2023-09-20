import React, {useState} from 'react'

function Character(name, homeworld) {
  const [homeworldOn, setHomeworldOn] = useState(false)
  const divvy = document.querySelector('div')
  {divvy.addEventListener('click', () => {
setHomeworldOn(!homeworldOn)
  })}
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'>
<h3 className='character-name'>{name}</h3>
{homeworldOn ? (<p>
    {"Planet: "}
<span className='character-planet'>{homeworld.name}</span>
</p>) : undefined}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
