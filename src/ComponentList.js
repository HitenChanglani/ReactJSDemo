import React, { Fragment } from "react"
import Component from "./Component"
import axios from "axios"

function ComponentList() {

    //const cities = [{index: 0, name: "San Francisco", price: 10000}, {index: 1, name: "New York City", price: 8000}, {index: 2, name: "Charlotte", price: 5000}]
    
    let laptops, mobiles, earphones, smartWatches, jeans, tshirts, underwear
    
    axios.get('http://localhost:3000/electronics').then(res => {
        laptops = res.data[0].laptops.map(i => <Component key={i.id} name={i.name} price={i.price} />)
        mobiles = res.data[0].mobiles.map(i => <Component key={i.id} name={i.name} price={i.price} />)
        earphones = res.data[0].earphones.map(i => <Component key={i.id} name={i.name} price={i.price} />)
        smartWatches = res.data[0].smartWatches.map(i => <Component key={i.id} name={i.name} price={i.price} />)
        console.log(laptops)
    })

    axios.get('http://localhost:3000/clothing').then(res => {
        jeans = res.data[0].jeans.map(i => <Component key={i.id} name={i.name} price={i.price} />)
        tshirts = res.data[0].tshirts.map(i => <Component key={i.id} name={i.name} price={i.price} />)
        underwear = res.data[0].underwear.map(i => <Component key={i.id} name={i.name} price={i.price} />)
    })

    //const citiList = cities.map(i => <Component key={i.index} name={i.name} price={i.price} />)

    return (
        <Fragment>
            <div>{laptops}</div>
            <div>{mobiles}</div>
            <div>{earphones}</div>
            <div>{smartWatches}</div>
            <div>{jeans}</div>
            <div>{tshirts}</div>
            <div>{underwear}</div>
        </Fragment>
    )
}

export default ComponentList