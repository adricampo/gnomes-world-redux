import React from 'react'
import './index.sass'
import { useSelector } from 'react-redux'
import ResultItem from '../Result-item'

export default function Results() {
    const items = useSelector(state =>  state.results.results)

    return <ul className="results">   
        {items && items.length > 0 ? items.map(item => <ResultItem key={item.id} item={item}/>) : <li className="results__no-results">NO RESULTS...</li>} 
    </ul>
}