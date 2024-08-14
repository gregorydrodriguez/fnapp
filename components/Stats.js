// components/Stats.js

import { Card } from 'react-bootstrap';

const Stats = ({ stats, type }) => (
    <Card>
        <Card.Body>
            <Card.Title>{type} Stats</Card.Title>
            <Card.Text>
                <p>Score: {stats.score}</p>
                <p>Wins: {stats.wins}</p>
                <p>Kills: {stats.kills}</p>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Stats;