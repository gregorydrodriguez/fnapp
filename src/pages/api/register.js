// src/pages/api/register.js

import { connect, registerUser } from "../../../mongo";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connect();
            const result = await registerUser(req.body);
            res.status(201).json({ message: result });
        } catch (err) {
            console.error('Registration error:', err)
            res.status(400).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Error(405): ${req.method}`);
    }
}