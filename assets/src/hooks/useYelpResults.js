import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useYelpResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const searchApi = async (searchTerm) => {
    console.log(searchTerm);
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError(true);
    }
  };

  // useEffect(() => {}) -> Run the arrow function every time the component is rendered
  // useEffect(() => {}, []) -> Run the arrow function only when the component is first rendered
  // useEffect(() => {}, [value]) -> Run the arrow function only when the component is first rendered and when the 'value' changes

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, error];
};

export default useYelpResults;
