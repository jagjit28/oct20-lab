import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingList from './components/ShoppingList';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ShoppingList} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);