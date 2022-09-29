import { useContext } from "react";
import { Context } from "../context.js";
import Products from "./Products.js";

export default function Home() {
  const {noQuantity} = useContext(Context);
  return (
    <>
      <section class="flex-row d-flex h-100 overflow-hidden justify-content-around">
        <div class="d-flex flex-column justify-content-around p-2">
          {
            noQuantity ? <div class="p-2 alert alert-warning" role="alert">You ordered 0 quanity.</div> : <></>
          }
          <div class="overflow-hidden">
            <Products/>
          </div>
          <div class="p-2">
            <a href="/Products">
              <button class="btn btn-product-card">See all products...</button>
            </a>
          </div>
        </div>
        <div className="col-5 d-flex align-items-center justify-content-center">
          <div
            className="detail-box m-3"
            style={
                {
                    backgroundColor:"var(--product-card-bg)",
                    color: "var(--product-card-main)",
                    border: "solid",
                    borderColor: "var(--product-card-main)",
                    borderWidth: "3px"
                }
            }
          >
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