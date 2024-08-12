// components/Stats.js

const Stats = ({ stats, type }) => (
    <div>
        <h4>{type} Stats</h4>
        <p>Score: {stats.score}</p>
        <p>Wins: {stats.wins}</p>
        <p>Kills: {stats.kills}</p>
    </div>
);

export default Stats;