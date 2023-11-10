# Colors
This is just a little test project to get familiar with Next.js, based on [Ali Spittel's Next tutorial]((https://welearncode.com/beginners-guide-nextjs/)). It uses some predefined data on Pantone colour of the year from the past few years (name and hex), and creates a page using that data to show the colour name and background colour. After working in print for so long it's nice to have a little crossover!  

### I added:
- styles for the home page 
- additional data such as the rest of the colours, the Pantone code, year, and colour (eg 'very peri' is blue).
- back button on each colour page
- click to copy hex code
- link to the colour on the Pantone website

## Future features

- Use a random display font for the header on each colour's page. 
- deploy to netlify with any API keys hidden (dotenv to netlify functions)
- add a contrast key to the data to determine the colour page text colour 
- add some searching or filtering functionality to find colours by year or colour group. 
- generate a moodboard on colour pages using [unsplash API](https://unsplash.com/developers)  
<!-- - look into making my own API from the (modified - no copyright infringment!) data with node & express.  -->

## Outcomes

### Struggles

#### Remembering to use 'color' instead of 'colour'
By convention syntax uses American spelling and I am not American so need to try to remember to spell it that way!

#### Getting the random Google font

There's no data in the API response that gives you link or import info like from the Google Fonts CSS API. You do get a ttf file link.  
However we do have the name, so could get the base URL of a link and insert the font name in the Head.  
It works locally but there is a problem with this outlined in the Next.js docs [here](https://nextjs.org/docs/messages/no-stylesheets-in-head-component).

### Using Next.js

Page routing is a real dream once you wrap your head around `getStaticPaths` and `getStaticProps`. I also like the Head component, makes it easy to control any data required (such as individual page names based on props).  

## Resources

- [A Complete Beginner's Guide to Next.js](https://welearncode.com/beginners-guide-nextjs/)
- [Next.js - Preserve Scroll History](https://jak-ch-ll.medium.com/next-js-preserve-scroll-history-334cf699802a)
- [Pantone Color of the Year | Palettes + Mood Boards | Ultimate List](https://buoyantdesignstudio.com/brand-strategy-design/pantone-color-of-the-year-palettes-mood-boards-ultimate-list/)
- [How to Hide API Keys in Frontend Apps using Netlify Functions](https://www.freecodecamp.org/news/hide-api-keys-in-frontend-apps-using-netlify-functions/)

