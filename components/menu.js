import Link from 'next/link'

export default function Menu() {
    return (
            <ul className="menuList">
                <li><Link href="/about">about me</Link></li>
                <li><a href="https://github.com/felky">github</a></li>
                <li><Link href="/work">work</Link></li>
                <li><Link href="/inprogress">blog</Link></li>
                <li><Link href="/contact">contact</Link></li>
            </ul>
        )
}