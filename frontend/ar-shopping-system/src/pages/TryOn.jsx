javascript
import React, { useState, useRef } from "react"
import Webcam from "react-webcam"

function TryOn(){

const [image,setImage] = useState(null)
const [cloth,setCloth] = useState("/models/tshirt.png")

const [dragging,setDragging] = useState(false)
const [dressPosition,setDressPosition] = useState({x:80,y:100})

const [clothSize,setClothSize] = useState(220)
const [rotation,setRotation] = useState(0)

const webcamRef = useRef(null)
const [camera,setCamera] = useState(false)

const uploadImage = (e)=>{
const file = e.target.files[0]
if(file){
setImage(URL.createObjectURL(file))
}
}

const capturePhoto = ()=>{
const imgSrc = webcamRef.current.getScreenshot()
setImage(imgSrc)
setCamera(false)
}

return(

<div className="tryon">

<h1>Virtual Try-On</h1>

<input type="file" onChange={uploadImage} />

<button onClick={()=>setCamera(true)}>
Open Camera
</button>

{camera && (
<div>
<Webcam
ref={webcamRef}
screenshotFormat="image/png"
width={300}
/>

<button onClick={capturePhoto}>
Capture
</button>
</div>
)}

<div
className="preview"

onMouseMove={(e)=>{

if(!dragging) return

const rect = e.currentTarget.getBoundingClientRect()

const x = e.clientX - rect.left - 110
const y = e.clientY - rect.top - 110

setDressPosition({x,y})

}}

onMouseUp={()=>setDragging(false)}
>

{image && (
<img
src={image}
className="user"
alt="user"
/>
)}

{image && (
<img
src={cloth}
className="dress"
alt="cloth"

onMouseDown={()=>setDragging(true)}

style={{
left:dressPosition.x+"px",
top:dressPosition.y+"px",
width:clothSize+"px",
transform:`rotate(${rotation}deg)`
}}
/>
)}

</div>

<div className="controls">

<h3>Select Clothing</h3>

<button onClick={()=>setCloth("/models/tshirt.png")}>
T-Shirt
</button>

<button onClick={()=>setCloth("/models/jacket.png")}>
Jacket
</button>

<h3>Resize</h3>

<input
type="range"
min="150"
max="350"
value={clothSize}
onChange={(e)=>setClothSize(e.target.value)}
/>

<h3>Rotate</h3>

<button onClick={()=>setRotation(rotation+10)}>
Rotate Right
</button>

<button onClick={()=>setRotation(rotation-10)}>
Rotate Left
</button>

</div>

</div>

)

}

export default TryOn

