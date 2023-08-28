import React from "react";
import './App.css'
import Header from './components/jsx/Header.jsx'
import kitties from '../kitty.json'
import KittyCard from './components/jsx/KittyCard'

const App = () => {
    console.log(kitties.imgURL)
    return (
        <>
            <Header />
            <main>
                { kitties.map(( {name, imgURL, kittenId, likes} ) => {
                    // console.log(imgURL)
                    return <KittyCard
                        name = {name}
                        imgURL = {imgURL}
                        likes = {likes}
                        key = {kittenId}
                    />
                }) }
        </main>
        </>
    )
}

export default App