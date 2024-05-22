import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className= "app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'bienvenidos!'}/>}/>
          <Route path='categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          
          <ItemCount inicial={1} stock={5} onAdd={(cantidad => console.log('Cantidad de items ', cantidad))}/>
        </Routes>
      </BrowserRouter>
    </div>
      
  )
}

export default App
