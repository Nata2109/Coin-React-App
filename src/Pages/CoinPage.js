import React, { Component } from "react";
import axios from 'axios';

export default class CoinPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coins: []
        }
    }

    componentDidMount() {
        //fetch("http://localhost:4000/coins")
        //.then(res => res.json())
        //.then((json) => {
        //    this.setState({coinsdata: json})
        //    console.log(json)
        //})
        //.catch(console.log)

        axios.get('http://192.168.1.120:4000/coins', { headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                console.log(response)
                this.setState({coins: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { coins } = this.state

        console.log("HERE");
        console.log(coins)

        return (
            <div>
                <h1> Coin Page </h1>

                <h2> Add all coins and search functionality here </h2>
                
                {
                    coins.length ?
                    coins.map(coin => <div key={coin.Coin_Id}>{coin.Name}</div>) :
                    null

                }

                

            </div>
        );
    }
}