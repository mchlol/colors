import Link from 'next/link'
import colors from '../data/colors.json'
import React from 'react'
import Head from 'next/head'
import axios from 'axios'

const dotenv = require("dotenv").config();
const API_KEY = 'AIzaSyBh0Ilj0J-phMsQFpvZNwSBwdz4TVKCNfA';

// getStaticPaths() is the function Next looks for to generate static pages for this template. it can use data from your file system or from an API to generate paths.
export async function getStaticPaths() {
    // loop through the colours and name the route params for each
    const paths = colors.map(color => ({
        params: {color: color.name}
        // route will be /Colour
    }))
    // fallback is false so we get a 404 page if the data doesnt exist
    return { paths, fallback: false }
}

// getStaticProps() is the function Next looks for to provide props to the React component for the page. Next requires the return to be nested within {props}.
export async function getStaticProps( {params}) {
    // find the info for one colour
    const color = colors.find(color => color.name === params.color);

    // return it in the necessary format
    return { 
        props: { 
            color 
        } 
    }
}

// create the component and pass it the props object created by getStaticProps
export default function Color ( {color } ) {

    const [alertActive, setAlertActive] = React.useState(false);
    const [fontName, setFontName] = React.useState('');
    // set the font in the Head and pass it to the [color] page
    console.log('fontName: ',fontName);

    const style = {
        fontFamily: {fontName} + ', display'
    }
  
    React.useEffect( () => {
        axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
        .then( res => {
            const data = res.data.items;
            // get an array of display fonts only
            const displayFonts = data.filter(item => item.category === 'display');
            // get a random font from the array
            const singleFont = displayFonts[Math.floor(Math.random() * displayFonts.length)];
            setFontName(singleFont.family);
        })
        .catch ( err => {
            console.log(err);
        })
    },[]);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Copied: ',text);
            setAlertActive(true);
            setTimeout( () => {
                setAlertActive(false)
            },1500)

        } catch (err) {
            console.log('Copy failed', err);
        }
    }

    return (
    <div className='color-page' style={{ backgroundColor: color.hex}}>
        <Head>
            <title>{color.name} - {color.year}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/ >
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href={"https://fonts.googleapis.com/css2?family=" + "New+Rocker" + "&display=swap"} rel="stylesheet" />
        </Head>

        <div className="color-name">
            <h1 style={{fontFamily: "'New Rocker', display"}}>{color.name}</h1>
            <h2>{color.year}</h2>
            <p><a href={'https://www.pantone.com/connect/' + color.pantone + '-tcx'} target="_blank">Pantone {color.pantone}</a></p>
        </div>
        
        <h2 onClick={() => copyToClipboard(color.hex)}>{color.hex.toUpperCase()}</h2>
        <Link href="/"><button>Back</button></Link>

        { alertActive && <div className="confirm-copy">
            <p>Copied!</p>
        </div>
        }

    </div>
   
    )
}

