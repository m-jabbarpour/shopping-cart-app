import { createContext, useState } from "react";

export const contexts = createContext({
  data: [],
  setData: () => {},
  displayedData: [],
  setDisplayedData: () => {},
  order: "Lowest",
  setOrder: () => {},
  filter: "All",
  setFilter: () => {},
  orders: [],
  setOrders: () => {},
});

const ContextsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [order, setOrder] = useState("Lowest");
  const [filter, setFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  return (
    <contexts.Provider
      value={{
        data,
        setData,
        displayedData,
        setDisplayedData,
        order,
        setOrder,
        filter,
        setFilter,
        orders,
        setOrders,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextsProvider;
