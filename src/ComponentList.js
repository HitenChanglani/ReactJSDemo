import React, { Fragment, useState, useEffect } from "react"
import Component from "./Component"
import axios from "axios"

function ComponentList() {

    const [laptops, setLaptops] = useState([])
    const [mobiles, setMobiles] = useState([])
    const [earphones, setEarphones] = useState([])
    const [smartWatches, setSmartWatches] = useState([])
    const [jeans, setJeans] = useState([])
    const [tshirts, setTshirts] = useState([])
    const [underwear, setUnderwear] = useState([])
    
    useEffect(
        () => {
            axios.get('http://localhost:3000/electronics').then(res => {
                setLaptops(res.data[0].laptops.map(i => <Component key={i.id} name={i.name} price={i.price} />))
                setMobiles(res.data[0].mobiles.map(i => <Component key={i.id} name={i.name} price={i.price} />))
                setEarphones(res.data[0].earphones.map(i => <Component key={i.id} name={i.name} price={i.price} />))
                setSmartWatches(res.data[0].smartWatches.map(i => <Component key={i.id} name={i.name} price={i.price} />))
            })

            axios.get('http://localhost:3000/clothing').then(res => {
                setJeans(res.data[0].jeans.map(i => <Component key={i.id} name={i.name} price={i.price} />))
                setTshirts(res.data[0].tshirts.map(i => <Component key={i.id} name={i.name} price={i.price} />))
                setUnderwear(res.data[0].underwear.map(i => <Component key={i.id} name={i.name} price={i.price} />))
            })
        }, []
    )

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