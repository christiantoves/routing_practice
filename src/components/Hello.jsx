import {Link} from "@reach/router"
import React from "react"

const Hello = ({color1, color2}) => {
    
    const style = {
        "color" : color1,
        "backgroundColor" : color2
    }
    return(
        <div>
            <h1 style = {style} >Hello</h1>
            <Link to="/home">Link to home</Link>
            <br />
            <Link to="/:number">Link to number</Link>
        </div>
    )
}
export default Hello