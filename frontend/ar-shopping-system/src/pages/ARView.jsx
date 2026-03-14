import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useLocation } from "react-router-dom"

function Model({ path }){

const model = useGLTF(path)

return <primitive object={model.scene} scale={1.5} />

}

function ARView(){

const location = useLocation()
const modelPath = location.state?.model

return(

<div style={{height:"100vh"}}>

<h2 style={{textAlign:"center"}}>AR Preview</h2>

<Canvas>

<ambientLight intensity={0.5}/>
<directionalLight position={[2,2,2]}/>

{modelPath && <Model path={modelPath}/>}

<OrbitControls/>

</Canvas>

</div>

)

}

export default ARView