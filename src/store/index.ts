
import { IShopProps, IProduct } from '../modals'


export const shop: IShopProps[] =
    [
        {   id: '1',
            imgUrl: '../images/shops/yabko.jpg',
            name: 'Ябко',
            shopUrl: "Yabko"
        },
        {
            id: '2',
            imgUrl: '../images/shops/cutrys.jpg',
            name: 'Цитрус',
            shopUrl: "Citrus"
        },
        {
            id: '3',
            imgUrl: '../images/shops/rozetka.jpg',
            name: 'Розетка',
            shopUrl: "Rozetka"
        },
    ]


export const yabkoProducts: IProduct[] = [

    {   id: 'e1',
        imageUrl: '../images/shops/yabko-products/iphone11.webp',
        name: 'Iphone',
        price: 34555
    },

    {
        id:'e2',
        imageUrl: '../images/shops/yabko-products/iphone13.webp',
        name: 'Iphone',
        price: 43000
    },

    {
        id: 'e3',
        imageUrl: '../images/shops/yabko-products/iphone14.webp',
        name: 'Iphone',
        price: 43000
    },
]


export const citrusProducts: IProduct[] = [

    {
        id: 'e4',
        imageUrl: '../images/shops/citrus-products/scooter1.jpg',
        name: 'Scooter',
        price: 34555
    },

    {
        id: 'e5',
        imageUrl: '../images/shops/citrus-products/scooter2.jpg',
        name: 'Scooter',
        price: 4000
    },

    {
        id: 'e6',
        imageUrl: '../images/shops/citrus-products/scooter3.jpg',
        name: 'Scooter',
        price: 3000
    },
]


export const rozetkaProducts: IProduct[] = [

    {
        id: 'e7',
        imageUrl: '../images/shops/rozetka-products/airpods1.jpg',
        name: 'AirPods 2',
        price: 5555
    },

    {
        id: 'e8',
        imageUrl: '../images/shops/rozetka-products/airpods2.jpg',
        name: 'AirPods 2+',
        price: 7000
    },
    
    {
        id: 'e9',
        imageUrl: '../images/shops/rozetka-products/airpods3.webp',
        name: 'AirPods Pro',
        price: 14000
    },
]