import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Costume from "./pages/Costume"
import Furniture from "./pages/Furniture"
import ARView from "./pages/ARView"
import Navbar from "./components/Navbar"
import TryOn from "./pages/TryOn"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/costume" element={<Costume/>}/>
<Route path="/furniture" element={<Furniture/>}/>
<Route path="/ar" element={<ARView/>}/>
<Route path="/tryon" element={<TryOn/>}/>

</Routes>

</BrowserRouter>

)

}

export default App