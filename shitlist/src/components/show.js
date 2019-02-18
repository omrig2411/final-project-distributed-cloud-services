import React, {Component } from 'react'

class show extends Component {
    render() {
        return (
            <div className= 'show'>
                <div> {this.props.children} </div>
            </div>
        )
    }
}

export default show