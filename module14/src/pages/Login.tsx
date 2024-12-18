import React from "react";
import { login, logout } from "../store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <h1>
      This is the login page! Welcome user {username}
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit login
      </button>
      <button onClick={() => dispatch(logout())}> Logout </button>
    </h1>
  );
};
