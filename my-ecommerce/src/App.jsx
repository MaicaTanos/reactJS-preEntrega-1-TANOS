import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className= "app">
      <NavBar />
      <ItemListContainer greeting={'bienvenidos!'} />
    </div>
      
  )
}

export default App
