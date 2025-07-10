import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"
import { asyncloadproducts } from "./store/actions/ProductActions"

const App = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  })

  return (
    <div className='w-screen h-screen px-[10%] bg-gray-900 text-2xl text-amber-100 overflow-auto'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App