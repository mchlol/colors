import axios from "axios";

const dotenv = require("dotenv").config();
// ! temporary
const API_KEY = 'AIzaSyBh0Ilj0J-phMsQFpvZNwSBwdz4TVKCNfA';

const fetchRandomFont = async () => {
    try {
        const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`);
        const data = res.data.items;
        // get an array of display fonts only
        const displayFonts = data.filter(item => item.category === 'display');
        // get a single font from the array at random
        const singleFont = displayFonts[Math.floor(Math.random() * displayFonts.length)];
        // get the name of the font
        return singleFont.family;
    } catch (err) {
        console.error('Error fetching random font:', err);
        return null;
    }
}

export default fetchRandomFont;