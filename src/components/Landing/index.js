import React from 'react'
import './index.sass'
import { useHistory } from 'react-router-dom'

export default function Landing() {
    const history = useHistory()

    const onMainPage = () => {
        history.push('search')
    }

    return  <> 
        <section className="landing">
            <div className="landing__container container" onClick={event => {
                event.preventDefault()
                onMainPage()
                }}>
                <h1 className="container__title">Welcome to Gnomes Land</h1>                
            </div>
         </section>
    </>
}