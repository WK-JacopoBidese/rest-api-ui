import { useEffect, useState } from "react";
import ProductList from "../../components/products/ProductList";
import '../../shared/css/PageLayout.css';
import { FiPlus, FiArrowLeft } from "react-icons/fi";

export interface Product {
    id?: number,
    code: string,
    description: string,
    um: string,
    price: number,
    discontinued: boolean
}

interface ProductResponse {
    totalProducts: number,
    products: Product[]
}

export default function Prodotti() {
    const [products, setProducts] = useState<ProductResponse | null>(null);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost:3001/v1/products");
            const data = await request.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    async function handleDelete(id: number) {
        const canProceed = window.confirm("Sei sicuro di voler procedere?");

        if (!canProceed) return;

        const response = await fetch("http://localhost:3001/v1/products/" + id, {
            method: "DELETE"
        });

        if (response.status === 204) {
            console.log("Articolo cancellato.");

            if (!products) return;

            const allProducts = products?.products.filter(product => product.id !== id);
            const newProducts = { totalProducts: allProducts?.length, products: allProducts };
            setProducts(newProducts);
        }
        else {
            console.log("Errore durante la cancellazione del articolo.");
        }
    }

    return (
        <section>
            <div className="page-title">
                <h1>Elenco articoli {products ? `(${products.totalProducts})` : ""}</h1>
                <div className="page-links">
                    <a href="/prodotti/crea"><FiPlus />Nuovo</a>
                    <a href="/"><FiArrowLeft />Torna indietro</a>
                </div>
            </div>
            <ProductList products={products?.products} deleteProduct={handleDelete} />
        </section>
    );
}