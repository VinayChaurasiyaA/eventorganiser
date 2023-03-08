import axios from 'axios';
import React from 'react'

const userprofile =() => {
    const getData = () => {
        axios.get("http://localhost/login").then(() => console.log())
    }
}
export default userprofile;