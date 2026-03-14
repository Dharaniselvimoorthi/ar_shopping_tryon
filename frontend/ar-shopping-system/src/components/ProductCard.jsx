import { useNavigate } from "react-router-dom"

function ProductCard({product}){

const navigate = useNavigate()

if(!product) return null

const openAR = () =>{
navigate("/ar",{state:{model:product.model}})
}

return(

<div className="card">

<h2>{product.name}</h2>

<p>₹ {product.price}</p>

<button onClick={openAR}>
Try in AR
</button>

</div>

)

}

export default ProductCard