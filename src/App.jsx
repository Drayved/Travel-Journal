import React from "react"
import Header from "./components/Header.jsx"
import Cards from "./components/Cards.jsx"
import data from "./data.jsx"


export default function App(){
   
  const card = data.map(item => {
    return(
      <Cards
        
        location={item.location}
        googleMaps={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
       />
       )
      })


      return(
        <div>
          <Header />
          {card}
        </div>
      )
}