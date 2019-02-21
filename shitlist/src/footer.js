import React,{Component} from 'react'
import './includes/footer.css';
import { Navbar } from 'react-bootstrap';

class AppFooter extends Component{
    render(){
        return(
            <div className="fot" style={{backgroundColor:'#' + '7d6a5a', border: 5 + 'px' + 'solid' + 'black'}}>
                <section className="left">
                    <Navbar.Brand className="navbar-brand mb-0 h1" href="#apphead" style={{color: "black", textDecoration: 'underline'}}>back to top of the Shit list</Navbar.Brand>
                </section>
            </div>
        )
    }

}

export default AppFooter