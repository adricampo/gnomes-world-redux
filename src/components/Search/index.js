import React from 'react'
import './index.sass'
import { useDispatch } from 'react-redux'
import { searchGnomesAction } from '../../redux/actions'

export default function Search({ gnomes, onResultsRender }) { 
    const dispatch = useDispatch()

    const onSearch = (query, searchCriteria) => dispatch(searchGnomesAction(query, searchCriteria))
    
    return <section className="search">
            <div className="search__container container">
                <form className="container__form form" onSubmit={event => {
                    event.preventDefault()
                    const { query: { value: query } , select: { value: searchCriteria }  } = event.target
                    onSearch(query, searchCriteria) 
                    }}>
                    <div className="form__box box">
                        <h1 className="box__title">Search:</h1>
                        <input className="box__criteria" type="text" name="query" placeholder="criteria"/>
                        <button className="box__button">GO</button>
                    </div>
                    <div className="container__sortby sortby">
                        <h2 className="sortby__subtitle">Filter:</h2>
                        <select className="sortby__submit" name="select">
                            <option className="sortby__submit" value= "none">Chose one:</option>
                            <option className="sortby__submit" value="name">Name</option>
                            <option className="sortby__submit" value= "age">Age</option>
                            <option className="sortby__submit" value="hairColor">Hair Color</option>
                        </select>   
                    </div>
                </form>
            </div>
            
            {gnomes && onResultsRender(gnomes)}

        </section>
}