import Header from "./layout/Header.jsx"
import Footer from "./layout/Footer.jsx"
import Main from "./layout/Main.jsx"
import { Component } from "react"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App
