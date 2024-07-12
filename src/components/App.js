import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemDetail />} />
          <Route path="/items/:id" element={<ItemList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
