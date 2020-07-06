import Link from 'next/link'

export default function Menu() {
    return (
            <ul className="menuList">
                <li><Link href="/about"><a>about me</a></Link></li>
                <li><a href="https://github.com/felky">github</a></li>
                <li><Link href="/work"><a>work</a></Link></li>
                <li><Link href="/inprogress"><a>blog</a></Link></li>
                <li><Link href="/contact"><a>contact</a></Link></li>
            </ul>
        )
}