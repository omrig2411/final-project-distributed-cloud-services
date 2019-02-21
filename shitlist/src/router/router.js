import React from 'react'
import {Route} from 'react-router-dom'
import showList from '../components/showList'
import Header from '../header'
import Footer from '../footer'
import '../includes/router.css';


const path = window.location.pathname

const ReactRouter = () => {
    return(
        <React.Fragment>
            <div id="headerBG">
                <Header/>
            </div>
            <Route exact path={path} component={showList}/>            
            <Footer/>
        </React.Fragment>
    )
}

export default ReactRouter