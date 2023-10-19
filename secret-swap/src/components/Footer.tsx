function Footer() {
    return (
        <footer className="bg-indigo-300 text-black py-2">
            <div className="container mx-auto text-center">
            <h6>&copy; {new Date().getFullYear()} Secret Swap</h6>
            </div>
        </footer>
    )
}

export default Footer;