import '../CSS/App.css';

function App() {
  return (
    <div className="App">
      <div class="hero_area">
        <header class="header_section">
          <div class="container">
            <div class="top_contact-container">
              <div class="tel_container">
                <a href="">
                  <img src="images/telephone-symbol-button.png" alt=""/> Call : +01 1234567890
                </a>
              </div>
              <div class="social-container">
                <a href="">
                  <img src="images/fb.png" alt="" class="s-1"/>
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" class="s-2"/>
                </a>
                <a href="">
                  <img src="images/instagram.png" alt="" class="s-3"/>
                </a>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
              <a class="navbar-brand" href="index.html">
                <img src="images/logo.png" alt=""/>
                <span>
                  Medion
                </span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html"> About </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="medicine.html"> Medicine </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="buy.html"> Online Buy </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="news.html"> News </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact us</a>
                    </li>
                  </ul>
                  <form class="form-inline ">
                    <input type="search" placeholder="Search"/>
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                  <div class="login_btn-contanier ml-0 ml-lg-5">
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
        <section class=" slider_section position-relative">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="img-box">
                        <img src="images/medicine.png" alt=""/>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="detail-box">
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
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="img-box">
                        <img src="images/medicine.png" alt=""/>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="detail-box">
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
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="img-box">
                        <img src="images/medicine.png" alt=""/>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="detail-box">
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

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="sr-only">Next</span>
            </a>
          </div>


        </section>
      </div>
    </div>
  );
}

export default App;
