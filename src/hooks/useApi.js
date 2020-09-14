import { useState } from "react";
//apiFunc() is the function being used for getting data
export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);
    // if (!response.ok) {
    //   setError(true);
    //   return;
    // }
    setError(!response.ok);
    // setError(false);
    setData(response.data);
    return response;
  };
  return {
    data,
    error,
    loading,
    request,
  };
};
