const { default: Link } = require("next/link");

function Footer() {
    return(
        <>
            <footer>
                <p>Todos os direitos reservados - NextSore</p>
                <div>
                    <a href="https://www.instagram.com/leonardo.sw/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/leonardoweiss"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/leonardo-weiss-145aa1233/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </footer>
        </>
    )
}

export default Footer