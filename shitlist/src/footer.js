import React,{Component} from 'react'
import './footer';
import { Navbar,Nav } from 'react-bootstrap';

class AppFooter extends Component{
    render(){
        return(
            <div className="fot">
                <section className="left">
                    <Navbar.Brand href="#home">back to top of the Shit list</Navbar.Brand>
                </section>
            </div>
        )
    }

}

export default AppFooter