import React, {Component } from 'react'
import show from './show'

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
                    {/* <show key={`show${i}`} index={i}>
                        <h3>{show.name}</h3>
                        <h5>Points: {show.points}</h5>
                        <h6>Number of Wins: {show.wins}</h6>
                        <h6>Number of Losses: {show.losses}</h6>
                        <h6>Coach: {show.coach}</h6>
                    </show> */}
                </div>
            </div>
        )
    }

    add({ event = null, id = null, show = 'default show', points = 'default points', wins = 'default', losses = 'default', coach = 'default', players = 'default'}) {
        this.setState(prevState => ({
          shows: [
            ...prevState.shows, {
              id: id !== null ? id : this.nextID(prevState.shows),
              show: show,
              points: points,
              wins: wins,
              losses: losses,
              coach: coach,
              players: players
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
                this.add({show: item.Name, 
                        points: item.Points, 
                        wins: item.W, 
                        losses: item.L,
                        coach: item.Coach ,
                        players: item.Players
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