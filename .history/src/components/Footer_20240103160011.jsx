const { default: Link } = require("next/link");

function Footer() {
    return(
        <>
            <footer>
                <p>Todos os direitos reservados - NextSore</p>
                <div>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                    
                </div>
            </footer>
        </>
    )
}

export default Footer