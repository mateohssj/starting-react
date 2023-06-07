import React from "react"

export const Greetings = (props) => <h1>{props.name}</h1>

export const Greeter = (props) => {
    return(
        <h1>
            Hello, {props.first} {props.last}
        </h1>
    )
}

export const Greeter2 = (props) => {
    return(
        <h1>
            Hello, {props.first} {props.last} {props.status} {props.age}
        </h1>
    )
}