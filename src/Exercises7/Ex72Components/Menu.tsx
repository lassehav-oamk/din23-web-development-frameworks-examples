import MenuCategory from "./MenuCategory"
import wingsImage from '../../assets/4c0f345e-a3a3-4be8-a3ac-d0e7b8163548.jpg'
import pastaImage from '../../assets/91e56fce-17b1-49bc-8a80-8e363a3fd671.jpg'
import hamburgerImage from '../../assets/d2f77dc7-2b63-4ac1-a38c-96757573ae7f.jpg'


export default function Menu({ menuData }) {

    const wings = [
        { name: 'Curry Wings', price: 5},
        { name: 'Roasted Wings', price: 10 },
        { name: 'Spicy Wings', price: 11}
    ]

    const pasta = [
        { name: 'Pasta Carbonara', price: 12},
        { name: 'Pasta Bolognese', price: 20}
    ]

    const hamburgers = [
        { name: 'Double Cheese', price: 7}
    ];

    

    return (
        <div>
            <h1>Menu</h1>
            <MenuCategory name="Wings" image={ wingsImage } dishes={ wings }/>
            <MenuCategory name="Pasta" image={ pastaImage } dishes={ pasta} />
            <MenuCategory name="Hamburgers" image={ hamburgerImage } dishes={ hamburgers }/>
        </div>
    )
}
