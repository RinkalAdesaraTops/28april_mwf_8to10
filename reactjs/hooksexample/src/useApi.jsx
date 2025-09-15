import React, { useState,useEffect } from "react";
import axios from "axios";
const useApi = (url) => {
  let [alldata, setAlldata] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setAlldata(res.data));
  }, [url]);
  return [alldata]
};

// localstorage with custom hooks
//insert - disp - edit - update
export default useApi;
