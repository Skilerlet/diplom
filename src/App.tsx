import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Topbar from "./components/Topbar";
import Popup from "./components/Popup";

function App() {
    const [albums, setAlbums] = useState({})
    const [content, setPopupContent] = useState({});

    function closePopup() {
        setPopupContent({})
    }

    return (
      <div id='main'>
          <div className="Root encore-dark-theme">
              <div className="Root__top-container">
                  <Topbar setAlbums={setAlbums}/>
                  <Navbar />
                  <Content albums={albums} popupContent={setPopupContent}/>
                  {content && Object.keys(content).length !== 0 && <Popup content={content} closePopup={closePopup}/>}
              </div>
          </div>
      </div>
  );
}

export default App;
