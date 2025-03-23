import { createContext, useEffect, useState } from "react";
import { URL } from "../utils/var";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const url = `${URL}/data.json`; // "/data.json"

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((j) => {
        console.log(j);
        return j;
      })
      .then((json) => setData(json))

      .catch((e) => {
        setData(null);
      });
  }, [url]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
