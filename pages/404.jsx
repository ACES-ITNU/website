import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import Link from 'next/link'
import image404 from '../images/404.jpg'
import { useRouter } from 'next/router'

export default function Home(props) {
    const router = useRouter();
    const { active, setactive } = props
    useEffect(() => {
        setactive(null)
    }, [])
    return (
        <div>
            <Head>
                <title>404 Not Found</title>
                <meta name="description" content="Oops, 404 Page Not Found!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active={active} />
            <main id="notFound">
                <a href="https://www.vecteezy.com/free-vector/404" target="_blank"
                    rel="noopener noreferrer"><img src={image404.src} /></a>
                <p>Oops, Seems Like You Got Lost!!!</p>
                <button onClick={() => router.push('/')}>Back to ACES Home</button>
            </main>
        </div>
    )
}
