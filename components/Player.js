// components/Player.js

import Account from "./Account";
import Stats from "./Stats";

const Player = ({ data }) => (
    <div>
        <Account account={data.account} />
        <Stats stats={data.stats.all.overall} type="Overall" />
        <Stats stats={data.stats.all.solo} type="Solo" />
        <Stats stats={data.stats.all.duo} type="Duo" />
        <Stats stats={data.stats.all.squad} type="Squad" />
    </div>
);

export default Player;