import React from "react";
import { Link } from "react-router-dom";
import SectionProductsItem from "./SectionProductsItem";

export default function SectionProducts() {
  const InfoSections = [
    {
      pagelink: "/productsAll",
      img: "/Images/iphone/14BB.webp",
      title: "گوشی موبایل",
    },
    {
      pagelink: "/productsAll",
      img: "/Images/leptop/color_image_TLP-35481_91a04316-0780-428b-a557-6f3df63484eb.png",
      title: "لپ تاپ",
    },
    {
      pagelink: "/productsAll",
      img: "/Images/watch/gallery-2-TLP-38677_d6712293-93ad-423c-ae88-be4dcb921e0e_1_11zon.jpg",
      title: "ساعت هوشمند",
    },
    {
      pagelink: "/productsAll",
      img: "/Images/airpod/0071140_هندزفری-بی-سیم-اپل-مدل-airpods-4-anc-نسخه-دارای-نویز-کنسلینگ_700.jpeg.webp",
      title: "هندزفری",
    },
    {
      pagelink: "/productsAll",
      img: "/Images/accessories/gallery-1-TLP-43045_141f68b1-0c86-45f9-bbdb-e0ca21f8c03e_2_11zon.jpg",
      title: "لوازم جانبی",
    },
  ];
  return (
    <section className="w-100 h-25 mt-5  d-none d-md-block">
      <div className="col-12">
        <div className="row">
          <div className="container  d-flex flex-row  justify-content-between p-5 ">
            <SectionProductsItem
              pagelink={InfoSections[0].pagelink}
              img={InfoSections[0].img}
              title={InfoSections[0].title}
            />
            <SectionProductsItem
              pagelink={InfoSections[1].pagelink}
              img={InfoSections[1].img}
              title={InfoSections[1].title}
            />
            <SectionProductsItem
              pagelink={InfoSections[2].pagelink}
              img={InfoSections[2].img}
              title={InfoSections[2].title}
            />
            <SectionProductsItem
              pagelink={InfoSections[3].pagelink}
              img={InfoSections[3].img}
              title={InfoSections[3].title}
            />
            <SectionProductsItem
              pagelink={InfoSections[4].pagelink}
              img={InfoSections[4].img}
              title={InfoSections[4].title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
