import { NavLink } from 'react-router-dom'
import React,{Component} from 'react'
import './includes/header.css';
import { Navbar,Nav } from 'react-bootstrap';
const path = window.location.pathname

class Header extends Component {
    // active = {
    //     backgroundColor: "#212F3D",
    //     color: "white",
    //     fontWeight: "bold"
    // }
    // header = {
    //     listStyle: "none",
    //     display: "flex",
    //     justifyContent: "space-evenly"
    // }
    render() {
        return(
            <div className="appHeader">
                <Navbar bg="white" expand="lg">
                    <nav class="navbar navbar-white bg-white">
                        <a class="navbar-brand" href="#">
                            <img id="logo" width="210" height="80" src="#" class="d-inline-block allign-top" alt=""></img>
                        </a>
                    </nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#allShows">All Shows</Nav.Link>
                        <Nav.Link href="#ratedShow">All Rated Shows</Nav.Link>
                        <Nav.Link href="#nonRated">Non Rated Shows</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                                     
            </div>

        //     <div style={this.header}>
        //         <NavLink exact to={`${path}`} activeStyle={this.active}>
        //          Home
        //      </NavLink>

        //      <NavLink to={`${path}ScoreAndWins`} activeStyle={this.active}>
        //     Scores and Wins
        //     </NavLink>

        //      <NavLink to={`${path}UpdateScore`} activeStyle={this.active}>
        //      Update Score
        //     </NavLink>

        // </div>
        )}
}

export default Header