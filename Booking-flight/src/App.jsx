import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Components/Home/Home"
import Search from "./Components/Search/Search"
import Support from "./Components/Support/Support"
import Info from "./Components/Info/Info"
import Lounge from "./Components/Lounge/Lounge"
import Subscriber from "./Components/Subscriber/Subscriber"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Subscriber />
      <Footer />
    </div>
  )
}
export default App;