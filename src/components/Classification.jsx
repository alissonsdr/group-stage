import React, { useEffect, useState } from 'react'
import './Classification.css'

const Classification = ({ teamsInfos, game, quantity, setQuantity }) => {
    
    return (
        <div className='classification'>
            <h2 className='subTitle'>Classificação Grupo A</h2>
            <table>
                <thead>
                    <th>Seleção</th>
                    <th>JG</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>PT</th>
                </thead>
                <tbody>
                    {teamsInfos.map((team, i) => {
                        return (
                            <tr key={i}>
                                <td>{team.team}</td>
                                <td>{quantity}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Classification