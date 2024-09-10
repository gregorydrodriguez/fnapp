// src/pages/api/search.js

export default async function handler(req, res) {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    const apiKey = process.env.API_KEY;
    const apiUrl = `https://fortnite-api.com/v2/stats/br/v2?name=${username}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: apiKey,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error fetching user data' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}