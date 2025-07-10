import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncloadproducts } from "./store/actions/ProductActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  }, [dispatch]); // ✅ Added dependency array

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-amber-100 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Nav />

        {/* Page content */}
        <main className="py-6 text-lg sm:text-xl">
          <Mainroutes />
        </main>
      </div>
    </div>
  );
};

export default App;
