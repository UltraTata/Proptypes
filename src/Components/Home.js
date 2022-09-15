export default function Home() {
  return (
    <div className="App">
      <div className="hero_area">
        <header className="header_section">
          <div className="container">
            <div className="top_contact-container">
              <div className="tel_container">
                <a href="">
                  <img src="images/telephone-symbol-button.png" alt=""/> Call : +01 1234567890
                </a>
              </div>
              <div className="social-container">
                <a href="">
                  <img src="images/fb.png" alt="" className="s-1"/>
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" className="s-2"/>
                </a>
                <a href="">
                  <img src="images/instagram.png" alt="" className="s-3"/>
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt=""/>
                <span>
                  Medion
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html"> About </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="medicine.html"> Medicine </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="buy.html"> Online Buy </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="news.html"> News </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact us</a>
                    </li>
                  </ul>
                  <form className="form-inline ">
                    <input type="search" placeholder="Search"/>
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                  <div className="login_btn-contanier ml-0 ml-lg-5">
                    <a href="">
                      <img src="images/user.png" alt=""/>
                      <span>
                        Login
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </nav>
          </div>
        </header>
        <section className=" slider_section position-relative">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-box">
                        <img src="images/medicine.png" alt=""/>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="detail-box">
                        <h1>
                          Welcome To Our <br/>
                          <span>
                            Online Medicine
                          </span>

                        </h1>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour, or randomised words which don't look even slightly
                          believable.
                        </p>
                        <div>
                          <a href="">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-box">
                        <img src="images/medicine.png" alt=""/>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="detail-box">
                        <h1>
                          Welcome To Our <br/>
                          <span>
                            Online Medicine
                          </span>

                        </h1>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour, or randomised words which don't look even slightly
                          believable.
                        </p>
                        <div>
                          <a href="">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="img-box">
                        <img src="images/medicine.png" alt=""/>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="detail-box">
                        <h1>
                          Welcome To Our <br/>
                          <span>
                            Online Medicine
                          </span>

                        </h1>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration in some form, by injected humour, or randomised words which don't look even slightly
                          believable.
                        </p>
                        <div>
                          <a href="">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a 
              className="carousel-control-next" href="Feature" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>


        </section>
      </div>
    </div>
  );
}