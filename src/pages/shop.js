import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
// unused to continue developing
import ProtectedRoute from '../../components/ProtectedRoute';

export default function Shop() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fortnite-api.com/v2/shop/br');
                const data = await response.json();
                const uniqueItems = new Map();
                data.data.featured.entries.forEach(item => {
                    if (!uniqueItems.has(item.items[0].name)) {
                        uniqueItems.set(item.items[0].name, item);
                    }
                });
                setItems(Array.from(uniqueItems.values()));
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
            <div className={styles['shop-container']}>
                <h2 className={styles['section-title']}>PlayerShop</h2>
                <div className={styles['items-grid']}>
                    {currentItems.map((item, index) => (
                        <div key={index} className={styles['item-card']}>
                            <img src={item.items[0].images.icon} alt={item.items[0].name} className={styles['item-image']} />
                            <h3 className={styles['item-title']}>{item.items[0].name}</h3>
                            <p className={styles['item-description']}>{item.items[0].description}</p>
                            <p className={styles['item-price']}>Cost: {item.regularPrice} V-Bucks</p>
                        </div>
                    ))}
                </div>
                <Pagination className="justify-content-center mt-3">
                    {[...Array(Math.ceil(items.length / itemsPerPage)).keys()].map(pageNumber => (
                        <Pagination.Item
                            key={pageNumber + 1}
                            active={currentPage === pageNumber + 1}
                            onClick={() => handlePageChange(pageNumber + 1)}
                        >
                            {pageNumber + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
    );
}