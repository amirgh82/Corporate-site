import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h4 className="section-title">درباره کدینو</h4>
      <span className="section-title-en">َAbout Codino</span>
      <div className="about-content">
        <img
          className="about-content-img"
          src="/src/assets/images/background1.jpg"
          alt="about me"
        />
        <p className="about-content-desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            طراحان گرافیک است، چاپگرها و متون روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی{" "}
          <mark>تکنولوژی</mark>، و کاربردهای متنوع با هدف بهبود
          ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
          آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
           موجود در ارائه راهکارها،<mark>دشواری</mark> و شرایط سخت تایپ به پایان رسد و زمان
          مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
           اساسا <mark>دنیای موجود</mark> مورد استفاده قرار گیرد.
        </p>
      </div>
    </div>
  );
}
