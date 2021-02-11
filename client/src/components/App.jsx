import Login from "./Login";
import React from "react";
import UseLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import ContactsProvider from "../context/ContactsProvider";
import ConversationsProvider from "../context/ConversationsProvider";

function App() {

  const [id, setId] = UseLocalStorage()
  const dashboard = (
      <ContactsProvider>
          <ConversationsProvider id={id}>
            <Dashboard id={id}/>
          </ConversationsProvider>
      </ContactsProvider>
  )
  return (
          id ? dashboard : <Login onIdSubmit={setId}/>

  );
}

export default App;
