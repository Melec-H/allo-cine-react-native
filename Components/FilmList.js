import React, { Component } from 'react'
import CardCreator from './CardCreator';

//import {Link} from "react-router-dom";
//import {getPosterFromApi} from './../API/TMDB'

export default class FilmList extends Component {

    // static defaultProps = {
    //     items: []
    // }



    cardCreation() {
       // const {items} = this.props

        return (items.map( item => (
            
                <CardCreator 
                key = {item.id}
                id = {item.id}
                className = 'card'
                title = {item.title}
                releaseYear = {item.releaseYear}
                synopsis = {item.synopsis}
                poster = {getPosterFromApi(item.poster)}
                ></CardCreator>

        )))

    }
        
    displayCard() {
        // let styleDiv = {
        //     display: 'flex',
        //     maxWidth: '4000',
        //     height: '35',
        //     flexWrap: 'wrap',
        //     justifyContent: 'space-around',
        //     alignItems: 'center',
        // }
        return (
            <div style={styleDiv}>
                {this.cardCreation()}
            </div>
        )
    }

    render(){
        return(<div>
            {this.displayCard()}
        </div>)
    }
}