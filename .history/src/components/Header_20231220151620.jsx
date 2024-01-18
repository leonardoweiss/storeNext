import Link from "next/link";

export default function Header() {
    return(
        <>
            <header>
                <h2>NextStore</h2>
                <nav>
                    <Link href="/products">Produtos</Link>
                </nav>
            </header>
        </>
    )
}