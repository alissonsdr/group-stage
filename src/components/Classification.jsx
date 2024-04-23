import React from 'react'
import './Classification.css'

const Classification = ({ teamsImages }) => {
    return (
        <div className='classification'>
            <h2 className='title'>Classificação Grupo A</h2>
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
                {teamsImages.map((team, i) => {
                        return (
                            <tr key={i}>
                                <td>{team.team}</td>
                                <td>0</td>
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