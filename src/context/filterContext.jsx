import { useState, createContext } from "react";

const defaultProductFilter = {
  searchKeyword: "",
  area: "장교동",
  category: [],
  period: "all",
};

export const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(defaultProductFilter);

  return (
    <ProductFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </ProductFilterContext.Provider>
  );
};
