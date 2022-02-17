import React, {useContext} from 'react';
import { AppContext } from '../helpers/Context';
import "../App.css";

export default function MainView() {
    const {setAppState} = useContext(AppContext)

    const Navbar = () => {
        return (
            <nav>
                <ul id='topleft'>
                    <li><h1 id='logo'>NETFLIX</h1></li>
                    <li className='navlink'><a>Etusivu</a></li>
                    <li className='navlink'><a href='#series'>Sarjat</a></li>
                    <li className='navlink'><a href='#movies'>Elokuvat</a></li>
                    <li className='navlink'><a href='#new'>Uutta ja suosittua</a></li>
                    <li className='navlink'><a href='#list'>Oma lista</a></li>
                    <div id='dropdown'>
                        <button id="dropbtn">Selaa</button>
                        <div id="dropdown-content">
                            <a>Etusivu</a>
                            <a href="#">Sarjat</a>
                            <a href='#movies'>Elokuvat</a>
                            <a href='#new'>Uutta ja suosittua</a>
                            <a href='#list'>Oma lista</a>
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

    const Category = (props) => {
        return (
            <>
                <h3 className='category' id='movies'>{props.name}</h3>
                <div className='titles'>
                    <div className='arrows'>
                        <div className='leftarrow'>
                            <div className='arr' id="leftarrtop"></div>
                            <div className='arr' id='leftarrbtm'></div>
                        </div>
                        <div className='rightarrow'>
                            <div className='arr' id="rightarrtop"></div>
                            <div className='arr' id='rightarrbtm'></div>
                        </div>
                    </div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
                    <div className='title'></div>
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
                <Category name='Sarjat'/>
                <Category name='Elokuvat'/>
                <Category name='Uutta ja suosittua'/>
                <Category name='Oma lista'/>
            </div>
        </div>
    );
}