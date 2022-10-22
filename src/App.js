import React from 'react';
import filenames from './filenames.json';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function App() {
  const [sources, setSources] = React.useState(filenames.filename);
  const [imgsrc, setImgsrc] = React.useState('test/Honda_civic_2005/10287.jpg');
  const [result, setResult] = React.useState({label: []});

  const labels = ['front', 'side_front', 'side', 'back_side', 'back'];

  // clean sources
  React.useEffect(() => {
    setSources(filenames.filename);
    document.querySelector(".soyimagen").src = require(`./data/splited_data/${imgsrc}`)
  }, []);

  // // load new
  React.useEffect(() => {
    setSources(sources.slice(1));
  }, [result]);

  // update imgsrc
  React.useEffect(() => {
    setImgsrc(sources[0].replace('./data/splited_data/', ''));
  }, [sources])
  React.useEffect(() => {
    document.querySelector(".soyimagen").src = require(`./data/splited_data/${imgsrc}`)
  }, [imgsrc])

  // handle new item
  const handleNew = (e) => {
    const clickLabel = e.target.innerText;
    let labelAux = result.label;
    labelAux.push([imgsrc, clickLabel]);
    setResult({label: labelAux});
  };

  return (
    <div className="App">
      <img src="" className="soyimagen" width="600px" height="500px"/>
      <Card>
        <CardContent>
          <Typography>Left: {sources.length}</Typography>
        </CardContent>
        <CardActions>
          {
            labels.map((item, index) => <Button key={index} onClick={e => handleNew(e)} disabled={sources.length === 0} variant='contained'>
              {item}
            </Button>)
          }
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
