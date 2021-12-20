import './App.css';
import { ImagesInput } from './components/ImagesInput/ImagesInput';
import { useState } from 'react';
import axios from 'axios';
import { Results } from './components/Results/Results';

function App() {

  const [nameImage, setNameImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [themeImage, setThemeImage] = useState("");

  const [imagesList, setImagesList] = useState([]);

  const addImage = () => {
    axios.post('http://localhost:3001/create', {
      nameImage: nameImage,
      urlImage: urlImage,
      themeImage: themeImage,
    }).then(() => {
      setImagesList([
        ...imagesList,
        {
          nameImage: nameImage,
          urlImage: urlImage,
          themeImage: themeImage,
        },
      ]);
    });
  };

  const getImages = () => {
    axios.get("http://localhost:3001/images").then((response) => {
      setImagesList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="inputSection col-6">
        <ImagesInput setNameImage={setNameImage} setUrlImage={setUrlImage} setThemeImage={setThemeImage} />
        <button className="btnSendImage" onClick={addImage}>Add Image</button>
        <button className='btnShowImage' onClick={getImages}>Show Images</button>
      </div>
      <div className='imagesSection col-6'>
        <Results imagesList={imagesList} setImagesList={setImagesList} />
      </div>
    </div>
  );
}

export default App;
