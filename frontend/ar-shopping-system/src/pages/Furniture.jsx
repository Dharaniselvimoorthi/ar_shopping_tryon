
import React, { useEffect } from "react"
import "aframe"

function FurnitureAR(){

useEffect(()=>{

const scene = document.querySelector("a-scene")

if(scene){
console.log("AR Scene Loaded")
}

},[])

return(

<div>

<h1 style={{textAlign:"center"}}>
Furniture AR Viewer
</h1>

<a-scene embedded arjs="sourceType: webcam;">

<a-marker preset="hiro">

<a-box
position="0 0.5 0"
rotation="0 45 0"
color="#4CC3D9"
></a-box>

</a-marker>

<a-entity camera></a-entity>

</a-scene>

</div>

)

}
<button onClick={()=>navigate("/furniture-ar")}>
View Furniture in AR
</button>

export default FurnitureAR

