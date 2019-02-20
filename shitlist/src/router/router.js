import React from 'react'
import {Route} from 'react-router-dom'
import showList from '../Components/showList'
import Header from '../header'
// import UpdateScore from '../Components/UpdateScore'
// import ScoreAndWins from '../Components/ScoreAndWins'

const path = window.location.pathname

const ReactRouter = () => {
    return(
        <React.Fragment>
            <Header/>
            <Route exact path={path} component={showList}/>
            
            {/* <Route path={`${path}ScoreAndWins`} component={ScoreAndWins}/>
            <Route path={`${path}UpdateScore`} component={UpdateScore}/> */}
            
            
        </React.Fragment>
    )
}

export default ReactRouter