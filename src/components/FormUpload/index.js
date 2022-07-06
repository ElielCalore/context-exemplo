import { useState } from "react";
import axios from "axios";

export function FormUpload() {
  const [form, setForm] = useState({
    name: "",
    picture: "",
  });

  function handleFile(event) {
    setForm({ ...form, picture: event.target.files[0] });
  }

  function handleChange(event) {
    setForm({ ...form, name: event.target.value });
  }

  async function handleUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("file", file);
      uploadData.append("api_key", "535655727723928");
      uploadData.append("cloud_name", "alexandreatlima");
      uploadData.append("api_secret", "u6hpJ08DCeSJUhD7VA5JMWY7g4o");
      uploadData.append("upload_preset", "default-preset");

      //   cloudinary.config({
      //     cloud_name: "alexandreatlima",
      //     api_key: "535655727723928",
      //     api_secret: "u6hpJ08DCeSJUhD7VA5JMWY7g4o",
      //     secure: true,
      //   });

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/alexandreatlima/image/upload",
        uploadData
      );

      console.log(response.data.url);

      return response.data.url;
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const urlFile = handleUpload();

      console.log(urlFile);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={form.name} />
      <input type="file" onChange={handleFile} />
      <button type="submit">Enviar</button>
    </form>
  );
}
