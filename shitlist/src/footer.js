import React,{Component} from 'react'
import './includes/footer.css';
import { Navbar,Nav } from 'react-bootstrap';

class AppFooter extends Component{
    render(){
        return(
            <div className="fot">
                <section className="left">
                    <Navbar.Brand class="navbar-brand mb-0 h1" href="#home">back to top of the Shit list</Navbar.Brand>
                </section>
            </div>
        )
    }

}

export default AppFooter