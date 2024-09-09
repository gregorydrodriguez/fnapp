// pages/api/auth.js

import jwt from 'jsonwebtoken';
import { connect, findUserByUsername } from '../../../mongo';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            await connect();
            const user = await findUserByUsername(username);

            if (!user) {
                return res.status(401).json({ error: 'Username/Password is incorrect' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ error: 'Username/Password is incorrect' });
            }
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ token, user: { username: user.username, fullName: user.fullName, role: user.role } });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Error(405): ${req.method}`);
    }
}
