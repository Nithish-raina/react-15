/* eslint-disable no-unused-vars */
import React, { useReducer, useRef } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
    const [count, setCount] = useState(0);
    const myRandom = () => {
        console.log("Calling myy random function");
        return Math.random();
    };
    const logUsers = (name) => {
        // do something
        console.log(`Hello ${name}`);
    };
    // useEffect(() => {
    //     const clearIntId = setInterval(() => logUsers("nithish"), 2000);
    //     return () => {
    //         clearInterval(clearIntId);
    //     };
    // });
    const [no, setNumber] = useState(() => myRandom());
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
    };
    const handleChangeRandomNumber = () => {
        setNumber(Math.random());
    };
    // if (1) {
    //     console.log("Inside if block");
    //     const [data, setData] = useState({});
    // }
    const useOfAmperSandOperator = (
        <>
            {0 && <div> 0 is Rendering </div>}
            {undefined && <div> undefined is Rendering </div>}
            {null && <div> null is Rendering </div>}
            {false && <div> false is Rendering </div>}
            {NaN && <div>NaN is Rendering </div>}
        </>
    );
    const people = [
        {
            id: 0,
            name: "Creola Katherine Johnson",
            profession: "mathematician",
        },
        {
            id: 1,
            name: "Mario José Molina-Pasquel Henríquez",
            profession: "chemist",
        },
        {
            id: 2,
            name: "Mohammad Abdus Salam",
            profession: "physicist",
        },
        {
            name: "Percy Lavon Julian",
            profession: "chemist",
        },
        {
            name: "Subrahmanyan Chandrasekhar",
            profession: "astrophysicist",
        },
    ];
    const peopleList = people.map(
        ({ name: personName, profession: personProfession }) => {
            return (
                <li key={personName}>
                    <input value={personName} />
                </li>
            );
        }
    );
    const refVal = React.createRef();
    const changeRefVal = () => {
        console.log(refVal);
        refVal.current = Math.floor(Math.random() * 10);
    };
    const doAsyncOperation = () => {
        return new Promise((resolve, reject) => {
            resolve("PROMISE RESOLVED");
        });
    };
    const [name, setName] = useState("");
    useEffect(() => {
        doAsyncOperation().then(
            (data) => {
                try {
                    setName(data);
                } catch (error) {
                    console.log("Error in setting name state", error);
                }
            },
            (error) => console.log("ERROR OCCURED", error)
        );
        // setName(result);
    });
    const userDetailsReducer = (state, action) => {
        console.log(
            ` User details reducer state here ${state} and action here ${action}`
        );
        const result = { ...state, ...action };
        console.log("RESULT IS ", result);
        return result;
        // return "My own string";
    };
    const [userDetails, setUserDetails] = useReducer(userDetailsReducer, {
        name: "",
        age: "",
    });
    const postListRef = useRef();
    console.log("POST LIST REF", postListRef);
    const scrollToTop = () => {
        console.log("SCROLL TOP CLICKED");
        postListRef.current.scrollToTop();
    };
    return (
        <>
            {/* <h1>Use-State-Debugging {no}</h1>
            <button onClick={handleChangeRandomNumber}> Change number </button>
            <div className="card">
                <button onClick={incrementCount}>count is {count}</button>
            </div>
            {false && useOfAmperSandOperator}
            <ul>{peopleList}</ul>
            <h2>Ref value {refVal.current}</h2>
            <button onClick={changeRefVal}>Change Ref Value</button>
            <h3>Hello {name}</h3>
            <h5>
                User name {userDetails.name}{" "}
                <span>User age {userDetails.age}</span>
                <button
                    onClick={() =>
                        setUserDetails({ name: "new name", age: "new age" })
                    }
                >
                    Set user Details{" "}
                </button>
            </h5> */}
            <Posts ref={postListRef} />
            <button onClick={scrollToTop} style={{ backgroundColor: "red" }}>
                Scroll to top
            </button>
        </>
    );
}

export default App;
