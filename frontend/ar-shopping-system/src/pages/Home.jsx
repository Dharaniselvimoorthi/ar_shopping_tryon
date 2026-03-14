import { Link } from "react-router-dom"

function Home(){

return(

<div className="home">

<h1>AR Virtual Shopping</h1>

<p>Try furniture and clothes in Augmented Reality</p>

<div className="home-buttons">

<Link to="/furniture">
<button className="btn">Furniture AR</button>
</Link>

<Link to="/costume">
<button className="btn">Clothing AR</button>
</Link>

<Link to="/tryon">
<button className="btn">Virtual Try-On</button>
</Link>

</div>

</div>

)

}

export default Home