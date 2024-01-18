import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className="header-main">
                <Link href="/"><h2>NextStore</h2></Link>
                <nav>
                    <Link href="/products">Produtos</Link>
                    <Link href="/cart"><i class="fa-regular fa-cart-shopping"></i></Link>
                </nav>
            </header>
        </>
    )
}