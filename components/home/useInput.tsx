import { useState } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event: { target: { value: any; }; }) => {
    setValue(event.target.value);

    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoiYm9kaWVmYW4iLCJhIjoiY2s4eHMyNzFhMGQyazNsbnJ3ODAxcmo1OCJ9.SLnRmKiL5WPP4vNYEU8UmQ&autocomplete=true&country=us&types=address&limit=5`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions
  };
};

export default useInput;
