// components/Account.js

import { Card } from 'react-bootstrap';

const Account = ({ account }) => (
    <Card className="mb-3">
        <Card.Body>
            <Card.Title>{account.name}</Card.Title>
            <Card.Text>ID: {account.id}</Card.Text>
        </Card.Body>
    </Card>
);

export default Account;