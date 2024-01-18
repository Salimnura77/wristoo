import React, { useState } from "react";
import FirstApi from "./Firstapi";

const App = () => {
  const [apiData, setApiData] = useState(null);

  const handleApiDataChange = (data) => {
    setApiData(data);
  };

  return (
    <div>
      <FirstApi onApiDataChange={handleApiDataChange} />
    </div>
  );
};

export default App;
