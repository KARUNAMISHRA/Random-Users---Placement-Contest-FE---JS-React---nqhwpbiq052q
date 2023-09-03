 import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
            setLoading(true);
            fetch('https://randomuser.me/api/?results=10')
            .then((res)=>res.json())
            .then((data)=>{setItems(data.results)});
            setLoading(false);
    }, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;
