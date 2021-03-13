import React, { useEffect, useState } from "react";
import firebaseAuth from "./FirebaseConfig";

import { Row, Spinner } from "react-bootstrap";

import { searchUser } from "../Controllers/User";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    function: "",
    name: "",
    reg: "",
  });
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebaseAuth.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDataDB = await searchUser(user.uid);
        setUserData(userDataDB);
      }
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <Row className="my-auto">
        <Spinner className="mx-auto my-5 text-system" animation="border" />
      </Row>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
