import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct(props) {

    function saveProduct(product){
        console.log(product);
        console.log("NewProduct.js");

        props.pranay(product);
    }
    return (
        <div className="new-product">
            <ProductForm onSaveProduct= {saveProduct} />
        </div>
    );
}
export default NewProduct;