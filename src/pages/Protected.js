import axios from 'axios';
import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router';
import Card from '../components/Card'
import classes from './Topbar.module.css'

class Protected extends Component{
    constructor(props){
        super(props);
        this.state={
            redirectToLogin: false,
            restaurants:[]
        }
    }

    logout = () => {
        localStorage.removeItem('userAuthenticated', false);
        this.setState({redirectToLogin: true})
    }

    listOfRestaurants = () => {
        // axios.get("https://food-power.glitch.me/restaurants?limit=3%lastDelieveryTime=0")
        axios.get("https://food-power.glitch.me/restaurants/")
        .then(res => {          
            const restaurantsData = res.data.data.map(r => ({
                name: r.name,
                cuisine:r.cuisines.join(', '),
                rating:r.avgRating,
                costForTwo: r.costForTwoString,
                deliveryTime:r.deliveryTime
            }));
            this.setState({restaurants: restaurantsData});
        })
        .catch(err => {
            console.log("Failed");
            console.log(err);
        })
    }

    render() {
        const {redirectToLogin} = this.state
        if(redirectToLogin === true){            
            return <Redirect to="/login"/>
        }

        return (
            <div>
                <h2>Logged In</h2>
                <button onClick={this.logout}>Log Out</button>
                <button onClick={this.listOfRestaurants}>Get Data</button>
                <div className={classes.menuWrapper}>
                    {
                        this.state.restaurants.map(r => (
                            <Fragment key={r.name}>
                                <Card
                                    name={r.name}                                    
                                    cuisine={r.cuisine}
                                    rating={r.rating}
                                    deliveryTime={r.deliveryTime}
                                    costForTwo={r.costForTwo}
                                />
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Protected;