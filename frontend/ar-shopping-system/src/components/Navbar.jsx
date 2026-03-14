import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="navbar">

<h2>AR Shop</h2>

<div className="links">
<Link to="/">Home</Link>
<Link to="/furniture">Furniture</Link>
<Link to="/costume">Clothing</Link>
</div>

</nav>

)

}

export default Navbar