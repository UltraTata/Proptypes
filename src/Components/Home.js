import Products from "./Products.js";

export default function Home() {
  return (
    <>
      <section>
        <div class="col-6">
          <Products/>
        </div>
        <div className="col-md-6">
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
          </div>
        </div>
      </section>
    </>
  );
}