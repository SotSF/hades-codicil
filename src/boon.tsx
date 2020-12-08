import React from 'react';
import { BoonType } from './models/boon';

function Boon(props: {boon: BoonType}) {
    const {boon} = props;
    const {rarityData} = boon;
    const ability_name = boon.name.replace(/\s+/g, "_").replace(/'/g, '_');
    const imagename = `Boon_${boon.god}_${ability_name}.png`;
    return (
        <div className="boon">
            <div className="header">
                <img src={`/images/${imagename}`}/> 
                {boon.name}
            </div>
            <div>
                {boon.description}
            </div>
            <div className="rarity">
                <table>
                    <th>rarity</th><th>percentage</th>
                    <tr><td>common</td><td>{rarityData.common}</td></tr>
                    <tr><td>rare</td><td>{rarityData.rare}</td></tr>
                    <tr><td>epic</td><td>{rarityData.epic}</td></tr>
                    <tr><td>heroic</td><td>{rarityData.heroic}</td></tr>
                </table>
            </div>
        </div>
    );
}

export { Boon };