import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUsers onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
