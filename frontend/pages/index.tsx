import { ConnectWallet, useContract, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { abi } from "../constants/abi";
import { CA } from "../constants/address";
import { useState } from "react";

const Home: NextPage = () => {
 const { contract } = useContract(CA, abi);
 const [userAddress, setUserAddress] = useState<string>("");
 const [isRegistered, setIsRegistered] = useState<boolean>(false);

 const registerUser = () => {
  return contract?.call("registerUser", [userAddress]).then(() => {
     setIsRegistered(true);
  }).catch((error) => {
     console.error("Failed to register user", error);
  });
 };
 

 const deregisterUser = () => {
   contract?.call("deregisterUser", [userAddress]).then(() => {
     setIsRegistered(false);
   }).catch((error) => {
     console.error("Failed to deregister user", error);
   });
 };

 const checkRegistrationStatus = () => {
   contract?.call("isRegistered", [userAddress]).then((status) => {
     console.log(status);
   }).catch((error) => {
     console.error("Failed to check registration status", error);
   });
 };

 return (
  <main className={styles.main}>
    <div className={styles.container}>
      <div className={styles.connect}>
        <ConnectWallet />
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <span className={styles.gradientText0}>
            the user registry dApp.
          </span>
        </h1>

        <input
          className={styles.inputField}
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          placeholder="Enter user address"
        />
        <span className={styles.registrationStatus}>Registration Status: {isRegistered ? "Registered" : "Not Registered"}</span>
      </div>

      <div className={styles.functions}>
        <Web3Button onSuccess={registerUser} onError={() => alert("Something went wrong!")} contractAddress={CA} contractAbi={abi} action={registerUser}>
          Register User
        </Web3Button>
        <Web3Button onSuccess={deregisterUser} onError={() => alert("Something went wrong!")} contractAddress={CA} contractAbi={abi} action={deregisterUser}>
          Deregister User
        </Web3Button>
        <button className={styles.button} onClick={checkRegistrationStatus}>Check Registration Status</button>
      </div>
    </div>
  </main>
);
};


export default Home;

