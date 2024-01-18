import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className="header-main">
                <Link></Link>
                <nav>
                    <Link href="/products">Produtos</Link>
                </nav>
            </header>
        </>
    )
}