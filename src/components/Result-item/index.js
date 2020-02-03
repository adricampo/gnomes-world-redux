import React from 'react'
import './index.sass'
import { useHistory } from 'react-router-dom'

export default function ResultItem({ item: { id, name, thumbnail, hair_color, professions, age } }) { 
    const history = useHistory()
    
    const onGoDetail = async (id) => {
        history.push(`detail/${id}`)
    }
    
    return <li className="results__item">
                <div className="item" onClick={event => {
                event.preventDefault()
                onGoDetail(id)
                }}>
                    <h2 className="item__name-age">{name} - {age} years</h2>
                    <img className="item__image" src={thumbnail} alt={name} />
                    <span className="item__hair_color">Hair color: {hair_color}</span>
                    <span className="item__professions">Professions: {professions.join(', ')}</span>
                </div>
    </li> 
}