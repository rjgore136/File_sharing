import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadfile } from "./services/api.js";

function App() {
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
  const fileUploadRef = useRef();

  const [file, setFile] = useState("");
  const [path, setPath] = useState("");

  const onUpload = () => {
    fileUploadRef.current.click();
  };

  useEffect(() => {
    console.log(`My file: ${file.name}`);
    // console.log(file);

    console.log("updated !");
  }, [file]);

  // console.log(file);

  useEffect(() => {
    const getImage = async () => {
      const fileData = new FormData();
      if (file) {
        fileData.append("name", file.name);
        fileData.append("file", file);
        const response = await uploadfile(fileData);
        setPath(response.path);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="container">
      <img src={logo} alt="img"></img>
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        <button onClick={onUpload}>Upload</button>
        <input
          type="file"
          ref={fileUploadRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={path} target="_blank">
          {path}
        </a>
      </div>
    </div>
  );
}

export default App;
