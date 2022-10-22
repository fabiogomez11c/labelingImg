import React from 'react';


function App() {
  const [sources, setSources] = React.useState([]);
  const [imgsrc, setImgsrc] = React.useState('');
  const [result, setResult] = React.useState({label: []});

  const labels = ['front', 'side_front', 'side', 'back_side', 'back'];

  // clean sources
  React.useEffect(() => {}, []);

  // load new
  React.useEffect(() => {
    setSources(sources.slice(1));
  }, [result]);

  // update imgsrc
  React.useEffect(() => {
    setImgsrc(sources[0])
  }, [sources])

  // handle new item
  const handleNew = (e) => {
    const clickLabel = e.target.value;
    setResult({
      result: result.label.push([imgsrc, clickLabel]),
    });
  };

  return (
    <div className="App">
        {
          sources.length > 1
            ? <img src={imgsrc} className="App-logo" alt="logo" />
              : <p>No more data</p>
        }
        <p>Left: {sources.length}</p>
        {
          labels.map((item, index) => <button key={index} onClick={e => handleNew(e)} disabled={sources.length === 0}>{item}</button>)
        }
    </div>
  );
}

export default App;
