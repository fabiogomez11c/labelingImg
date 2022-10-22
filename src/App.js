import React from 'react';

function Label({label}) {
  return <button>{label}</button>
}

function App() {
  const [imgsrc, setImgsrc] = React.useState('');

  const labels = ['front', 'side_front', 'side', 'back_side', 'back'];

  return (
    <div className="App">
        <img src={imgsrc} className="App-logo" alt="logo" />
        {
          labels.map((item, index) => <Label key={index} label={item} />)
        }
    </div>
  );
}

export default App;
