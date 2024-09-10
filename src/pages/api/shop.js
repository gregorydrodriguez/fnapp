// src/pages/api/shop.js

export default async function handler(req, res) {
    const apiUrl = 'https://fortnite-api.com/v2/shop/br';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error fetching shop data' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}