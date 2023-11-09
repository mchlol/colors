import colors from '../data/colors.json'

// getStaticPaths() is the function Next looks for to generate static pages for this template. it can use data from your file system or from an API to generate paths.
export async function getStaticPaths() {
    // loop through the colours and name the route params for each
    const paths = colors.map(color => ({
        params: {color: color.name}
        // route will be /Colour
    }))
    return { paths, fallback: false }
}

// getStaticProps() is the function Next looks for to provide props to the React component for the page. Next requires the return to be nested within {props}.
export async function getStaticProps( {params}) {
    // find the info for one colour
    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format
    return { props: {color} }
}

// create the component and pass it the props object created by getStaticProps
export default function Color ( {color} ) {
    return <div className='color-page' style={{ backgroundColor: color.hex}}>
        <h1>{color.name}</h1>
    </div>
}

