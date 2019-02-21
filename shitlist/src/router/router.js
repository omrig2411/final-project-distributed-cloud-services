import React from 'react'
import {Route} from 'react-router-dom'
import showList from '../Components/showList'
import Header from '../header'
import Footer from '../footer'
import '../includes/router.css';


const path = window.location.pathname

const ReactRouter = () => {
    return(
        <React.Fragment>
            <div id="headerBG">
                <img></img>
                <Header/>
            </div>
            <Route exact path={path} component={showList}/>            
            <Footer/>
        </React.Fragment>
    )
}

export default ReactRouter