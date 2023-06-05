import { Route, Routes } from 'react-router-dom'

import { Shop } from "./pages/Shop"
import Catalog from './pages/Catalog'
import { ShoppingCart } from './pages/ShoppingCart'
import { shop } from "./store"
import { yabkoProducts, citrusProducts, rozetkaProducts } from './store/index'




function App() {
  return (
    <Routes>
      <Route path='/' element={<Shop shop={shop} />} />
      <Route path='/drawer' element={<ShoppingCart />} />
      <Route path='/yabko' element={<Catalog products={yabkoProducts} />} />
      <Route path='/citrus' element={<Catalog products={citrusProducts} />} />
      <Route path='/rozetka' element={<Catalog products={rozetkaProducts} />} />
    </Routes>
  )
}

export default App
