export default function Header(){
    return (
        <header className="header_section">
            <div className="container">
            </div>
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container pt-3 align-middle">
                <a className="navbar-brand" href="/">
                    <img src="images/logo.png" alt=""/>
                    <span>Medion</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                    <ul className="navbar-nav  ">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/About"> About </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Feature"> Payment methods </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Client"> Reviews </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">Contact us</a>
                    </li>
                    </ul>
                    <form className="form-inline ">
                    <input type="search" placeholder="Search"/>
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                    </form>
                    <div className="login_btn-contanier ml-0 ml-lg-5">
                    <a href="">
                        <img src="images/user.png" alt=""/>
                        <span>Login</span>
                    </a>
                    </div>
                </div>
                </div>

            </nav>
            </div>
        </header>
    );
}