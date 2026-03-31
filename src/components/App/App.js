import "./App.scss"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Main from "../Main/Main"

const App = () => {
  return(
    <div className="page">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </div>
  )
}

export default App