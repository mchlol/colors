// Head is a component that allows us to insert data into the html head tag
import Head from 'next/head'
// Link allows client-side route transitions, can be used like an a tag
import Link from 'next/link'

import colors from '../data/colors.json'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colours to learn Next!" />
      </Head>

      <ul className="color-list">
      {colors.map(color => (
        
          <Link key={color.hex} className="card" href={`/${color.name}`}>
            <li className="card">
              <h2 
              style={{color: color.hex}}>
                {color.name}
              </h2>
              
              {
                color.year && <p style={{color: color.hex}}>{color.year}</p>
              }
            </li>
          </Link>
        
      ))}

      </ul>
      

    </main>
  )
}