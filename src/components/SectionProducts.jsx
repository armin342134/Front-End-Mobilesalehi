import React from "react";
import { Link } from "react-router-dom";

export default function SectionProducts() {
  return (
    <section className="w-100 h-25 mt-5  d-none d-md-block">
      <div className="col-12">
        <div className="row">
          <div className="container  d-flex flex-row  justify-content-between p-5 ">
            <div className="col-2  ">
              <Link
                to={"/productsAll"}
                className="text-center text-white text-decoration-none  "
              >
                <div
                  style={{
                    border: "5px solid red",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <img
                    src="/Images/iphone/14BB.webp"
                    className="img-fluid rounded-circle "
                  />
                </div>
                <h2 className="mt-4 ">گوشی موبایل</h2>
              </Link>
            </div>
            <div className="col-2">
              {" "}
              <Link className="text-center text-white text-decoration-none  ">
                <div
                  style={{
                    border: "5px solid red",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <img
                    src="/Images/leptop/color_image_TLP-35481_91a04316-0780-428b-a557-6f3df63484eb.png"
                    className="img-fluid rounded-circle "
                  />
                </div>
                <h2 className="mt-4 "> لپ تاپ</h2>
              </Link>
            </div>
            <div className="col-2">
              {" "}
              <Link className="text-center text-white text-decoration-none  ">
                <div
                  style={{
                    border: "5px solid red",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <img
                    src="/Images/watch/gallery-2-TLP-38677_d6712293-93ad-423c-ae88-be4dcb921e0e_1_11zon.jpg"
                    className="img-fluid rounded-circle "
                  />
                </div>
                <h2 className="mt-4 "> ساعت هوشمند</h2>
              </Link>
            </div>
            <div className="col-2">
              {" "}
              <Link className="text-center text-white text-decoration-none  ">
                <div
                  style={{
                    border: "5px solid red",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <img
                    src="/Images/airpod/0071140_هندزفری-بی-سیم-اپل-مدل-airpods-4-anc-نسخه-دارای-نویز-کنسلینگ_700.jpeg.webp"
                    className="img-fluid rounded-circle "
                  />
                </div>
                <h2 className="mt-4 "> هندزفری</h2>
              </Link>
            </div>
            <div className="col-2">
              {" "}
              <Link className="text-center text-white text-decoration-none  ">
                <div
                  style={{
                    border: "5px solid red",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <img
                    src="/Images/accessories/gallery-1-TLP-43045_141f68b1-0c86-45f9-bbdb-e0ca21f8c03e_2_11zon.jpg"
                    className="img-fluid rounded-circle "
                  />
                </div>
                <h2 className="mt-4 "> لوازم جانبی</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
