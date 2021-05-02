import React from 'react';
import './entry.css';
import {Clipboard} from 'react-feather';
import {Button} from 'react-bootstrap'


function tableContent({host,status, link, statusType}) {
    return (
        <tr className = "text-center">
            <td>{host}</td>
            <td><Button className = "bg-light" onClick={() =>  navigator.clipboard.writeText("https://hubs.mozilla.com/VN3sXzo?embed_token=e3e498051d58f87815b2c6d095ac24fd")}><Clipboard className = "icon" size = {24}></Clipboard></Button></td>
        </tr>
    )
}

export default tableContent
