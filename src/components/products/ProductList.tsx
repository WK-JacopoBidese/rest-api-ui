import { Product } from "../../routes/products/Prodotti";
import "./ProductList.css";
import {FiEye, FiTrash2} from "react-icons/fi";

interface ProductListProps {
    products: Product[] | undefined,
    deleteProduct: Function
}

export default function ProductList(props: ProductListProps) {
    if (props.products && props.products.length <= 0) {
        return (
            <p>
                "Nessun articolo trovato"
            </p>
        );
    }

    return (
        <ul>
            {props.products?.map(
                product => <li key={product.id}>
                    <span>{product.code} - {product.description}</span>
                    <span className="actions">
                        <a href={`/prodotti/${product.id}`} className="action-view"><FiEye />Visualizza</a>
                        <button onClick={() => props.deleteProduct(product.id)} className="action-delete"><FiTrash2 /></button>
                    </span>
                </li>
            )}
        </ul>
    );
}