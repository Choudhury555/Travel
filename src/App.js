import React from "react"
import Header from "./Header"
import Card from "./Card"
import data from "./data"
import "./App.css"

export default function App() {
    
    const resArray=data.map(item => {
        return <Card 
                    key={item.title}
                    {...item}
                />
    })    
    
    return (
        <div>
            <Header />
            <div className="container">
                {resArray}
            </div>
        </div>
    )
}