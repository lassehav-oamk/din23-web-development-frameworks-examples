import CategoryDish from "./CategoryDish"

export default function MenuCategory({ name, image, dishes }) {

    let dishArrayJsx = []
    for(let i =0; i < dishes.length; i++) {
        dishArrayJsx.push(<CategoryDish dishName={dishes[i].name} price={dishes[i].price}/>)
    }

    return (
        <div>
            <img src={ image }/>
            <h1>{ name }</h1>
            { dishArrayJsx }
            
        </div>
    )
}
