import {Link} from "@reach/router"
import React from "react"

const Home = props => {
    return(
        <div>
            <h1>Welcome</h1>
            <Link to="/hello">Link to word</Link>
            <br />
            <Link to="/:number">Link to number</Link>
        </div>
    )
}
export default Home