import React from "react";

export default function About() {
  document.title = "درباره ما";

  return (
    <div className="mt-5 me-3  ">
      <div>
        <h2>اهداف و تعهد فروشگاه</h2>
        <p>
          هدف ما فروش و معرفی محصولات با کیفیت به منظور جلب رضایت مشتریان خود
          است.
        </p>
        <ul>
          <li>دارا بودن کاملترین مشخصات از محصولات موجود در سایت.</li>
          <li>
            تعهدی اعم از اصل بودن و ضمانت بازگشت کالا در مقابل محصولات عرضه شده
            در سایت.
          </li>
          <li>
            ایجاد سایتی که نه تنها مفید برای خریدارن باشد بلکه به عنوان مرجع
            اطلاعات برای سایت‌های موازی آن باشد.
          </li>
          <li>ایجاد رابطه با خریدار و حمایت از او قبل از خرید و پس از خرید.</li>
          <li>
            حمایت از خریدار در مواردی که محصول نیاز به استفاده از خدمات، گارانتی
            و پشتیبانی دارد.
          </li>
          <li>به روز بودن قیمت‌ها و موجود بودن تمامی محصولات.</li>
          <li>
            راحتی خریدار از طریق ارسال محصول به آدرس ثبتی، پرداخت الکترونیک،
            تحویل سریع و فروش محصولات اصل و معتبر.
          </li>
          <li>تعهد همیشگی در راستای بهبود سایت و خدمات قابل ارائه.</li>
        </ul>
      </div>
    </div>
  );
}
