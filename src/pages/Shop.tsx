import CardShop from '../components/Card/CardShop'
import Header from '../components/Header/Header'
import { IShopProps } from '../modals'

interface ShopProps {
   shop: IShopProps[]
}

export function Shop({ shop }: ShopProps) {
   return (
      <div className="wrapper">
         <Header />
         <div className='content'>
            <div className='contentWrapper'>
               <h2>Список магазинів</h2>
            </div>
            <div className='shops'>
               {shop.map(item => (
                  <CardShop imgUrl={item.imgUrl} name={item.name} shopUrl={item.shopUrl} id={item.id} />
               ))}
            </div>
         </div>
      </div>
   )
}