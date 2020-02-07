import React, { useEffect } from 'react'
import './index.sass'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { retrieveGnomeAction } from '../../redux/actions'

export default function Detail({id}) { 
    let name, thumbnail, hair_color, weight, height, friends, professions, age
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        (async () =>{
            id && await dispatch(retrieveGnomeAction(parseInt(id)))
        })()
    }, [dispatch, id])
    
    const item = useSelector( state => state.detail.detail )

    if(item) {
        name = item.name 
        thumbnail = item.thumbnail
        hair_color = item.hair_color
        weight = item.weight
        height = item.height
        friends = item.friends
        professions = item.professions
        age = item.age 
    }
    
    const onBack = () => {
        history.push('/search')
    }
    
    return <>
    { name && <section className="detail">
        <h2 className="detail__name-age">{name} - ({age} years)</h2>
        <img className="detail__image" src={thumbnail} alt="item" />
        <div className="detail__sizes">
            <p className="detail__weight">Weight: {weight}</p>
            <p className="detail__height">Height: {height}</p>
        </div>
        <span className="detail__hair_color">Hair color: {hair_color}</span>
        <span className="detail__friends">Friend of: {friends.join(', ')}</span>
        <span className="detail__professions">Professions: {professions.join(', ')}</span>
        <div className="detail__button-container">
            <button className="detail__back" onClick={event => {
                event.preventDefault()

                onBack()
            }}>Go back</button>
        </div>
    </section>
    }
    </>
}