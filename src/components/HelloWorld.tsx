import React, { useState, useEffect } from "react";
import axios from "axios";

function HelloWorld() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://seedlingbackend-production.up.railway.app/api/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;