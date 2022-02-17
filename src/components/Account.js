import React, {useContext} from 'react';
import { AppContext } from '../helpers/Context';
import "../App.css";

export default function Account() {
    const {setAppState} = useContext(AppContext)

    return (
        <div>
            <h1 id='logo'>NETFLIX</h1>
            <div id='profcontainer'>
                <h1 id='who'>Kuka katselee?</h1>
                <div id='accounts'>
                    <div id='me' onClick={() => {
                        setAppState('main');
                    }}>
                        <p>Minä</p>
                    </div>
                    <div id='add'>
                        <div id='circle'>
                            <p>Lisää profiili</p>
                        </div>
                        <div id='vert'></div>
                        <div id='hori'></div>
                    </div>
                </div>
                <div id='manage'><p>Hallinnoi profiileja</p></div>
            </div>
        </div>
    );
}