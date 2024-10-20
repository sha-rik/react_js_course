
import "./Item.css";
function Item(props)
{
    const name=props.name;
    return(
        <>
        <p className="hello">{name}</p>
        {props.children}
        </>
    );
}
export default Item;