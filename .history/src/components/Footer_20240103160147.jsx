const { default: Link } = require("next/link");

function Footer() {
    return(
        <>
            <footer>
                <p>Todos os direitos reservados - NextSore</p>
                <div>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href="">                    <i class="fa-brands fa-linkedin"></i></a>
                </div>
            </footer>
        </>
    )
}

export default Footer