import React, {useState} from 'react';
import { Link } from "react-router-dom";

export const ListTaker = () => {
    const [list] = useState(0);
    return (
        <form style={{display:'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <label>
                Liste de tickets:
                <input type="text" name="Liste de tickets"/>
                <br />
            </label>
        </form>
    )
}

export default ListTaker;