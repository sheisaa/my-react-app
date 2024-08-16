import { useEffect, useState } from 'react';
import CardProduct from '../ui/CardProducts';

export default function AllProducts() {
    const [products, setProducts] = useState([]);

    function getProducts() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((result) => {
                setProducts(result.products);
            })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <section className='container py-10 grid grid-cols-4 gap-4'>
            {
                products.map((product) => {
                    return (
                        <CardProduct key={product.id} product={product} />
                    )
                })
            }
        </section>
    )
}