import { createContext, useEffect, useState } from "react";
import { URL } from "../utils/var";

export const DataContext = createContext();

const fetchJSON = async (urls) => {
  for (let url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}`);
      }
      const data = await response.json();
      return data; // Return the data if successful
    } catch (error) {}
  }
  throw new Error("All URLs failed"); // If none of the URLs worked
};

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const urls = [`${URL}/data.json`, "/data.json"];

  useEffect(() => {
    fetchJSON(urls)
      .then((json) => {
        setData(json); // Set your state with the fetched data
      })
      .catch((error) => {
        setData(null); // Handle the error case
      });
    // eslint-disable-next-line
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
