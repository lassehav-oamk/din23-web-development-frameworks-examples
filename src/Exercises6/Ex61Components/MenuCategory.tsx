import { MenuCategoryProps } from "./MenuTypes"


export default function MenuCategory({ menuItems } : MenuCategoryProps) {
  return (
    <div>
      { menuItems.map(i => <div>{i.name}, {i.price}€</div>) }
    </div>
  )
}
