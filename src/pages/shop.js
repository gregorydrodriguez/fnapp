import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function Shop() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://fortnite-api.com/v2/shop/br');
                const uniqueItems = new Map();
                response.data.data.featured.entries.forEach(item => {
                    if (!uniqueItems.has(item.items[0].name)) {
                        uniqueItems.set(item.items[0].name, item);
                    }
                });
                // Fetches 18 unique items
                setItems(Array.from(uniqueItems.values()).slice(0, 18));
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    const addToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.items[0].name} added to cart!`);
    };

    return (
        <ProtectedRoute>
            <div className={styles['shop-container']}>
                <h2 className={styles['section-title']}>PlayerShop</h2>
                <div className={styles['items-grid']}>
                    {items.map((item, index) => (
                        <div key={index} className={styles['item-card']}>
                            <img src={item.items[0].images.icon} alt={item.items[0].name} className={styles['item-image']} />
                            <h3 className={styles['item-title']}>{item.items[0].name}</h3>
                            <p className={styles['item-description']}>{item.items[0].description}</p>
                            <p className={styles['item-price']}>Cost: {item.regularPrice} V-Bucks</p>
                            <button
                                className={styles['cart-button']}
                                onClick={() => addToCart(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </ProtectedRoute>
    );
}
