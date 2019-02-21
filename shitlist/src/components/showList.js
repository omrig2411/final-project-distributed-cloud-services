import Show from './show'
import InfiniteLoader from 'react-infinite-loader'
import React, { Component } from 'react'

class showList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
        this.eachshow = this.eachshow.bind(this)
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.update = this.update.bind(this)
}
    update(newIdea, i) {
    }

    eachshow(show, i) {
        return (
            <div key={`container${i}`} className="card bg-light mb-3" style={{width: 18 + 'rem', marginBottom: 7 + 'px'}}>
                <img class="card-img-top" src= {show.img_url} alt="card image cap"></img>
                <div className="card-body">
                    <Show key={`show${i}`} index={i}
                    onChange={ this.update }
                    onDelete={ this.delete }>
                        <h3 class="card-title">{show.name}</h3>
                        <h5>Start Date: {show.startDate}</h5>
                        <h6>Rating: {show.avgRating}</h6>
                        <h6>Rated by: {show.numOfUserRated} users.</h6>
                        <h6>Status: {show.status}</h6>
                        {/* <a href="#" class="btn btn-primary">Rate Show</a> */}
                        
                    </Show>
                </div>
            </div>
        )
    }

    add({ id = null, name = 'default name', start_date = 'unknown', average_rating = 'not rated yet', num_of_users_rating = '0', status = 'default', img_url = 'default'}) {
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
        const url = 'https://shit-list-zahor-omri.herokuapp.com/show/getallshows';
        fetch(url)
            .then(res => res.json())
            .then(data => data.slice(0,5).map(item =>
                this.add({name: item.name,
                        start_date: item.startDate,
                        average_rating: item.avgRating,
                        num_of_users_rating: item.numOfUserRated,
                        status: item.status,
                        img_url: item.img_url
                    })))
            .catch(err => console.error(err));
    }


    render() {
        return(
            <div className = "card-group">
                { this.state.shows.map(this.eachshow)}
            </div>
        )
    }
}

export default showList