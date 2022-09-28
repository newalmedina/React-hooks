import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GitHub = () => {

    const [data, setData] = useState([]);
    const [serachTerm, setSerachTerm] = useState("");
    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${serachTerm}`).then(res => {
            setData(res.data.items)
            console.log(res.data.items)
        })
    },[serachTerm]);

    return (
        <div>
           
        </div>
    );
}

export default GitHub;