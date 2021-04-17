import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BigArt from './BigArticle.jsx'
import FancyLink from './FancyLink.jsx'
import MidArt from './MidArt.jsx'
import NiceLink from './NiceLink.jsx'
import SmallArt from './SmallArticle.jsx';


const bigArtTitle = "Making Your D&D sessions Immersive Without Being Boring"
const bigArtDescript = "We were all in to plunge into this new world and find our fortune. Yet three minutes into the Dungeon Master&aposs intricate treatise on the society, geography, and factions of his city-state, and his words began to fade like those of Charlie Brown&aposs teacher..."
const bigArtAuth = "John Roy"
const bigArtPublishTime = new Date(2021, 3, 4);
const bigArtLink = "https://www.dndbeyond.com/posts/967-making-your-d-d-sessions-immersive-without-being"


const fancyLinks = [["fancylink-discord", "https://discord.com/invite/DytCXjc", 1],
["fancylink-twitter", "https://discord.com/invite/DytCXjc", 2],
["fancylink-facebook", "https://discord.com/invite/DytCXjc", 3],
["fancylink-youtube", "https://discord.com/invite/DytCXjc", 4],
["fancylink-twitch", "https://discord.com/invite/DytCXjc", 5],
["fancylink-sign", "https://www.dndbeyond.com/login?returnUrl=https%3a%2f%2fwww.dndbeyond.com%2f", 6],
["fancylink-register", "https://www.dndbeyond.com/register?returnUrl=https%3a%2f%2fwww.dndbeyond.com%2f", 7]]

const midArts = [
    ["Making Your D&D sessions Immersive Without Being Boring", 
    "We were all in to plunge into this new world and find our fortune. Yet three minutes into the Dungeon Master&aposs intricate treatise on the society, geography, and factions of his city-state, and his words began to fade like those of Charlie Brown&aposs teacher...",
    "John Roy",
    new Date(2021, 3, 4),
    "https://www.dndbeyond.com/posts/967-making-your-d-d-sessions-immersive-without-being", 1, 'mid-art-bg'],
    ["The All New D&D Beyond App is Coming!", 
    "We're super excited to announce the upcoming release of the all-new, consolidated D&D Beyond App! Details within!",
    "John Roy",
    new Date(2021, 3, 4),
    "https://www.dndbeyond.com/posts/967-making-your-d-d-sessions-immersive-without-being", 2, 'mid-art-bg-2']]



    const smallArts = [['An Ode to Heat Metal: The Greatest D&D Spell of All Time', "http://www.dndbeyond.com/posts/964-an-ode-to-heat-metal-the-greatest-d-d-spell-of-all", "Elliot Spilk", new Date(), 1],
    ['How To Play Vampires Like Apex Predators of the Night', "http://www.dndbeyond.com/posts/963-how-to-play-vampires-like-apex-predators-of-the", "Jeremy Blum", new Date(), 2],
    ["Welcome to Candlekeep: A Beginner's Guide to the Realm's Greatest Library", "http://www.dndbeyond.com/posts/962-welcome-to-candlekeep-a-beginners-guide-to-the", "Jeremy Blum", new Date(), 3]]

    const smallArts2 = [['How to Play Hags Like Terrifying, Tragic Villains', "http://www.dndbeyond.com/posts/961-how-to-play-hags-like-terrifying-tragic-villains", "DeAngelo Murillo", new Date() ,4],
    ["Wizard 101: Order of Scribes (from Tasha's Cauldron of Everything)", "http://www.dndbeyond.com/posts/959-wizard-101-order-of-scribes-from-tashas-cauldron", "Jeremy Blum", new Date(), 5],
    ["Candlekeep Mysteries is Available to Buy on D&D Beyond", "https://dndbeyond.link/cklaunch", "Joe Starr", new Date(), 6]]

function App() {


   return(
       <Router>
           <div>
           <Route path='/' component = {render} />
           </div>
       </Router>
       
   );
}

function render()
{
    return (
        <>
        <div className = "topbar">
            <FancyLink displayimg = "logo" myref= "https://www.dndbeyond.com"/>
            <div className = "searchLogo"/>
            <input type='text' placeholder='Search Everything...' className='searchBar' />
            {fancyLinks.map((link)=>(<FancyLink displayimg={link[0]} myref = {link[1]} key={link[2]}/>))}
            </div>
            <div className = 'barra' />
            <div className= 'banner'>
                
               <BigArt title={bigArtTitle} descript =  {bigArtDescript} date = {bigArtPublishTime} auth = {bigArtAuth} myref={bigArtLink}/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gDKLPbXQ-BI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                </div>
                <div className='article-container'>
                    {midArts.map((art)=>(<MidArt title={art[0]} descript = {art[1]} date = {art[3]} auth = {art[2]} myref={art[4]} key={art[5]} bg={art[6]}/>))}
                </div>

                <div className='article-cont'>
                    {smallArts.map((art)=>(<SmallArt title={art[0]} myref={art[1]} auth = {art[2]} date={art[3]} key={art[4]}/>))}
                </div>
                <div className='article-cont'>
                    {smallArts2.map((art)=>(<SmallArt title={art[0]} myref={art[1]} auth = {art[2]} date={art[3]} key={art[4]}/>))}
                </div>
                

                <div className='center-cont'><a href = "https://www.dndbeyond.com/posts"><div className='see-all-posts'> </div></a></div>

                <div>
                <div className='center-cont-extras'>
                <div><a href = "https://www.dndbeyond.com/compendium"><div className='compendium'> </div></a>
                <a href = "https://www.dndbeyond.com/homebrew"><div className='homebrew'> </div></a></div>
                <div className = 'container-2'><a href = "https://www.dndbeyond.com/characters/builder"><div className='createAchara'> </div></a>
                <a href = "https://www.dndbeyond.com/encounter-builder"><div className='encounter'> </div></a></div>
                
                </div>
                
                
                </div>
                <div className='pie'>
                    <div style = {{display: 'inline-flex'}}>
                    <div style={{paddingLeft: '780px', position: 'relative', paddingTop: '62px'}}> 
                    <NiceLink text = 'COMPENDIUM' myref = "https://www.dndbeyond.com/compendium"/> 
                    <NiceLink text = 'BUILDER' myref = "https://www.dndbeyond.com/characters/builder"/>
                    <NiceLink text = 'CHARACTERS' myref = "https://www.dndbeyond.com/my-characters"/>
                    <NiceLink text = 'CHANGELOG' myref = "https://www.dndbeyond.com/changelog"/>
                     </div>
                    <div style={{paddingLeft: '112px', position: 'relative', paddingTop: '62px'}}> 
                    <NiceLink text = 'HELP PORTAL' myref = "https://dndbeyond.zendesk.com/hc/en-us"/> 
                    <NiceLink text = 'SUPPORT FORUM' myref = "https://www.dndbeyond.com/forums/d-d-beyond-general/bugs-support"/>
                    <NiceLink text = 'CONTACT US' myref = "https://dndbeyond.zendesk.com/hc/en-us/articles/360055233654-Contact-Information"/>
                    <NiceLink text = 'DO NOT SELL MY INFO' myref = "https://www.dndbeyond.com/do-not-sell-my-info"/>
                     </div>
                    <div style={{paddingLeft: '42px', position: 'relative', paddingTop: '62px'}}> 
                    <NiceLink text = 'TWITTER' myref = "https://twitter.com/DnDBeyond"/> 
                    <NiceLink text = 'FACEBOOK' myref = "https://www.facebook.com/dndbeyond/"/>
                    <NiceLink text = 'YOUTUBE' myref = "https://www.youtube.com/channel/UCPy-338BEVgDkQade0qJmkw"/>
                    <NiceLink text = 'TWITCH' myref = "https://www.twitch.tv/dndbeyond"/>
                     </div>
                     </div>
                </div>
        </>
    );
}




export default App;

