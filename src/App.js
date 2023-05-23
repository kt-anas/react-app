import React, { Component } from "react";
import TodoApp from "./component/TodoAPP/TodoApp";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
// import Counter from "./component/Counter";

// import Forms from "./component/Forms";
export default () => {
  return (
      
         <BrowserRouter>
           <Header/>
           <Routes>
              <Route path="/" exact Component={TodoApp}/>
              <Route path="/about" Component={About}/>
           </Routes>
         </BrowserRouter>
       
  );
};
