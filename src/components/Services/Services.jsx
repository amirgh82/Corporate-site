import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import { SiBmcsoftware } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
export default function Services() {
  return (
    <>
      <div className="services">
        <h3 className="services-title">خدمات کدینو</h3>
        <span className="services-title-info">Codino services</span>
        <div className="services-card">
          <Card
            title="توسعه نرم افزار"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
            icon={<SiBmcsoftware />}
          />
          <Card
            title="طراحی وب سایت"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
            scale="scale"
            icon={<MdOutlineDesignServices />}
          />
          <Card
            title="پشتیبانی و آموزش"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
            icon={<MdSupportAgent />}
          />
        </div>
      </div>
    </>
  );
}
