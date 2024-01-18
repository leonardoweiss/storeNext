import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className="header-main">
                <h2 cl>NextStore</h2>
                <nav>
                    <Link href="/products">Produtos</Link>
                </nav>
            </header>
        </>
    )
}