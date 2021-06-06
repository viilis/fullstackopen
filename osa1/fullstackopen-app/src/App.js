import React from 'react';

const App = () =>{
  return(
    <div>
      <h1>
        Otsikko
      </h1>
      <Hello emote=":D"/>
      <Hello emote=" :)"/>
    </div>
  )
}

const Hello = (props) => {
  return(
    <>
      <p>
        How do you do, fellow kids? {props.emote}
      </p>
    </>
  )
}

export default App;
