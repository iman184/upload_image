import React, { useState } from "react";
import app from "./firebase/config";
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

const Home = () => {
   const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
 <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}   
         <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;