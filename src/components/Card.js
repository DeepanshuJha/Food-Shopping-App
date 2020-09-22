import React, { Component } from 'react'
import classes from './Card.module.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            cuisine:props.cuisine,
            rating:props.rating,
            deliveryTime:props.deliveryTime,
            costForTwo:props.costForTwo
        }
    }

    render(){
        return (
            <div className={classes.cardWrapper}>
                <img src="assets/dessert.jpg" alt="Biryani"/>               
                <div className={classes.cardInfo}>
                    <h3>{this.state.name}</h3>
                    <p className={classes.cuisine}>{this.state.cuisine}</p>
                    <ul className={classes.foodMetrics}>
                        <li id={classes.foodRating} className={classes.foodItems}><img src="assets/star.png" alt="rating"/><span>{this.state.rating}</span></li>
                        <li className={classes.foodItems}>{this.state.deliveryTime} MINS</li>                        
                        <li className={classes.foodItems}>{this.state.costForTwo}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Card