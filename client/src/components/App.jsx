import Login from "./Login";
import React from "react";
import UseLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import ContactsProvider from "../context/ContactsProvider";

function App() {

  const [id, setId] = UseLocalStorage()
  const dashboard = (
      <ContactsProvider>
        <Dashboard id={id}/>
      </ContactsProvider>
  )
  return (
          id ? dashboard : <Login onIdSubmit={setId}/>

  );
}

export default App;
