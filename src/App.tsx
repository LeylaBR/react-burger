import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout";
import {URL} from './constants'
import {Ingredient} from "./components/types";

function App() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    const getData = () => {
        fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setIngredients(data.data))
            .catch(e => {
                throw new Error(e.message)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return <Layout ingredients={ingredients}/>
}

export default App;
