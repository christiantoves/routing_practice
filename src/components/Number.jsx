import {Link} from "@reach/router"
import React from "react"

const Number = props => {
    console.log(isNaN(props.number))
    if (isNaN(props.number)){
        return(
            <div>
                <h1>This is a Word {props.number}</h1>
                <Link to="/home">Link to home</Link>
                <br />
                <Link to="/:word">Link to number</Link>
            </div>
        )
    }
    else{
        return(
        <div>
            <h1>This is the Number {props.number}</h1>
            <Link to="/home">Link to home</Link>
            <br />
            <Link to="/:word">Link to number</Link>
        </div>
    )}
}
export default Number