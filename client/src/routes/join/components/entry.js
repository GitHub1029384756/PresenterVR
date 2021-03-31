import React from 'react';
import './entry.css';
import {Clipboard} from 'react-feather';
import {Button} from 'react-bootstrap'


function tableContent({date,time,host,status, link, statusType}) {
    return (
        <tr className = "text-center">
            <td>{date}</td>
            <td>{time}</td>
            <td>{host}</td>
            <td><Button className = "bg-light" onClick={() =>  navigator.clipboard.writeText("https://hubs.mozilla.com/wC84cL3?embed_token=35023d4d924c87911d5353ad934fe30f")}><Clipboard className = "icon" size = {24}></Clipboard></Button></td>
            <td className = {statusType}>{status}</td>
        </tr>
    )
}

export default tableContent
