import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";
function AddUsers(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  // use ref
  //  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const ageInputRef = useRef();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  // use ref
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "please input valid username or age",
      });
      return;
    }

    if (+enteredUserAge < 18) {
      setError({
        title: "invalid age",
        message: "please input valid  age > 18",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredUserAge);
    ageInputRef.current.value = "";
    setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age"> Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit"> Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUsers;
