import React from 'react';
import { BoonType } from './models/boon';

function Boon(props: {boon: BoonType}) {
    const {boon} = props;
    const {rarityData} = boon;
    return (
        <div className="boon">
            <div className="header">
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