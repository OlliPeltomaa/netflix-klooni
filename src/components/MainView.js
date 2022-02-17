import React, {useContext, useRef} from 'react';
import { AppContext } from '../helpers/Context';
import "../App.css";

export default function MainView() {

    const ref = useRef(null);

    const {setAppState} = useContext(AppContext)

    const Navbar = () => {
        return (
            <nav>
                <ul id='topleft'>
                    <li><h1 id='logo'>NETFLIX</h1></li>
                    <li className='navlink'><a>Etusivu</a></li>
                    <li className='navlink'><a href='#'>Sarjat</a></li>
                    <li className='navlink'><a href='#'>Elokuvat</a></li>
                    <li className='navlink'><a href='#'>Uutta ja suosittua</a></li>
                    <li className='navlink'><a href='#'>Oma lista</a></li>
                    <div id='dropdown'>
                        <button id="dropbtn">Selaa</button>
                        <div id="dropdown-content">
                            <a>Etusivu</a>
                            <a href="#">Sarjat</a>
                            <a href='#'>Elokuvat</a>
                            <a href='#'>Uutta ja suosittua</a>
                            <a href='#'>Oma lista</a>
                        </div>
                    </div>
                </ul>
                <ul id='topright'>
                    <li id='search'>
                        <div id='outer'>
                            <div id='inner'></div>
                            <div id='handle'></div>
                        </div>
                    </li>
                    <li><a>Lapset</a></li>
                    <li id='bell'>
                        <div id='bellbody'>
                            <div id='bellskirt'></div>
                            <div id='bellbtm'></div>
                        </div>
                    </li>
                    <li id='signedin' onClick={() => {
                        setAppState('account');
                    }}>
                        <div id='acc'></div>
                    </li>
                </ul>
            </nav>
        );
    }

    const scroll = (scrollOffset, categ) => {
        if((ref.current+scrollOffset)>=0) ref.current = ref.current+scrollOffset;
        document.getElementById(categ).scrollLeft = ref.current+scrollOffset;
    }


    const Category = (props) => {
        const titleids = [props.name+1, props.name+2, props.name+3, props.name+4, props.name+5, props.name+6, props.name+7, props.name+8, props.name+9, props.name+10]

        return (
            <>
                <h3 className='category' id='movies'>{props.name}</h3>
                <div className='titles' id={'scroll'+props.name}>
                    <div className='arrows'>
                        <div className='leftarrow' id={props.left} onClick={() => scroll(-40, 'scroll'+props.name)}>
                            <div className='arr' id="leftarrtop"></div>
                            <div className='arr' id='leftarrbtm'></div>
                        </div>
                        <div className='rightarrow' id={props.right} onClick={() => scroll(40, 'scroll'+props.name)}>
                            <div className='arr' id="rightarrtop"></div>
                            <div className='arr' id='rightarrbtm'></div>
                        </div>
                    </div>
                    <div className='title' id={titleids[0]}></div>
                    <div className='title' id={titleids[1]}></div>
                    <div className='title' id={titleids[2]}></div>
                    <div className='title' id={titleids[3]}></div>
                    <div className='title' id={titleids[4]}></div>
                    <div className='title' id={titleids[5]}></div>
                    <div className='title' id={titleids[6]}></div>
                    <div className='title' id={titleids[7]}></div>
                    <div className='title' id={titleids[8]}></div>
                    <div className='title' id={titleids[9]}></div>
                </div>
            </>
        );
    }

    return (
        <div>
            <Navbar/>
            <div id='preview'>
                <h1 id='previewname'>MOVIE TITLE</h1>
                <button id='watch'>Toista</button>
                <button id='info'>Lisätietoja</button>
            </div>
            <div id='categories'>
                <Category name='Sarjat' left='seriesleft' right='seriesright'/>
                <Category name='Elokuvat' left='moviesleft' right='moviesright'/>
                <Category name='Uutta ja suosittua' left='newleft' right='newright'/>
                <Category name='Oma lista' left='mylistleft' right='mylistright'/>
            </div>
        </div>
    );
}