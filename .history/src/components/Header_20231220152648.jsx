import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className="header-main">
                <Link href="/"><h2>NextStore</h2></Link>
                <nav>
                    <Link href="/products">Produtos</Link>
                </nav>
            </header>
        </>
    )
}