import ProductCard from "../components/ProductCard"

function Costume(){

const products = [
{
name:"Jacket",
price:1500,
model:"/models/jacket.glb"
},


]

return(

<div className="products">

{products.map((product,index)=>(
<ProductCard key={index} product={product}/>
))}

</div>

)

}

export default Costume