import React, {Component } from 'react'
import Show from './show'

class showList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
        this.eachshow = this.eachshow.bind(this)
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
    }

    eachshow(show, i) {
        return (
            <div key={`container${i}`} className="card" style={{width: 18 + 'rem', marginBottom: 7 + 'px'}}>
                <div className="card-body">
                    <Show key={`show${i}`} index={i}>
                        <h3>{show.name}</h3>
                        <h5>Start Date: {show.startDate}</h5>
                        <h6>Rating: {show.avgRating}</h6>
                        <h6>Rated by: {show.numOfUserRated} users.</h6>
                        <h6>Status: {show.status}</h6>
                        <img src= {show.img_url}></img>
                    </Show>
                </div>
            </div>
        )
    }

    add({ id = null, name = 'default name', start_date = 'default points', average_rating = 'default', num_of_users_rating = 'default', status = 'default', img_url = 'default'}) {
        this.setState(prevState => ({
          shows: [
            ...prevState.shows, {
              id: id !== null ? id : this.nextID(prevState.shows),
              name: name,
              startDate: start_date,
              avgRating: average_rating,
              numOfUserRated: num_of_users_rating,
              status: status,
              img_url: img_url
            }]
        }))
    }

    nextID(shows = []) {
        let max = shows.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0)
        return ++max
      }

    componentDidMount() {
        const url = 'https://ex1-shows.herokuapp.com/allshows';
        fetch(url)
            .then(res => res.json())
            .then(data => data.map(item =>
                this.add({name: name,
                        startDate: start_date,
                        avgRating: average_rating,
                        numOfUserRated: num_of_users_rating,
                        status: status,
                        img_url: img_url
                    })))
            .catch(err => console.error(err));
    }
    render() {
        return(
            <div className = "showList">
                { this.state.shows.map(this.eachshow)}
            </div>
        )
    }
}

export default showList