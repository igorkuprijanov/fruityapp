import React from 'react'
import './App.css'


function About(){
    return(
        <div id='aboutpage' class="animate__fadeIn animate__animated animate__faster">
            <div>
                <h1 id='aboutpagehead'>What is this?</h1>
                <p id='aboutpageparagraph'>This website showcases some fruits and vegetables as well as gives some quick facts about them. Sometimes facts are about the history of the fruit, sometimes about cultivation and sometimes its nutritional value. The website is built with React and utilises React Router, React Datalist Input and arts and icons from Flaticons. Main purpose of the project is to give overview of some more known fruits and vegetables.</p>
                <ul id='aboutpagelist'>
                   <p>The project has:</p>
                    <li>Selection of over 30 fruits.</li>
                    <li>Some facts about all the fruits.</li>
                    <li>Seasonal selection of fruits.</li>
                    <li>Dynamic search to go through the catalog.</li>
                </ul>
                <div id='aboutpageicontribute'>Icons made by <a href="https://www.flaticon.com/authors/freepik" target="_blank" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/creaticca-creative-agency" target="_blank"title="Creaticca Creative Agency">Creaticca Creative Agency</a>, <a href="https://www.flaticon.com/authors/turkkub" target="_blank" title="turkkub">turkkub</a>, <a href="https://www.flaticon.com/authors/monkik" target="_blank" title="monkik">monkik</a>, <a href="https://www.flaticon.com/authors/icongeek26" target="_blank" title="Icongeek26">Icongeek26</a>, <a href="https://www.flaticon.com/authors/good-ware" target="_blank" title="Good Ware">Good Ware</a>, <a href="https://www.flaticon.com/authors/nikita-golubev" target="_blank" title="Nikita Golubev">Nikita Golubev</a>, <a href="https://www.flaticon.com/authors/bqlqn" target="_blank" title="bqlqn">bqlqn</a>, <a href="https://www.flaticon.com/authors/vitaly-gorbachev" target="_blank" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    )
}

export default About