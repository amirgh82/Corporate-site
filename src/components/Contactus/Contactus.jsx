import React from "react";
import "./Contactus.css";
import RelationCard from "../RelationCard/RelationCard";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
export default function Contactus() {
  return (
    <div className="contactus">
      <h4 className="section-title">تماس با کدینو</h4>
      <span className="section-title-en">Contact Codeino</span>
      <div className="contactus-content">
        <div className="contactus-content-relations">
          <RelationCard
            title="آدرس : "
            desc="تهران، خیابان، کوچه، فرعی 2"
            icon={<CiLocationOn />}
          />
          <RelationCard
            title="ایمیل : "
            desc="codino@gmail.com"
            icon={<AiOutlineMail />}
          />
          <RelationCard
            title="شماره تماس : "
            desc="091285438756"
            icon={<AiOutlinePhone />}
          />
        </div>
        <div class="form-container">
          <form class="form">
            <div class="form-group">
              <label for="email">موضوع پیام : </label>
              <input required name="message" id="message" type="text" />
            </div>
            <div class="form-group">
              <label for="email">ایمیل : </label>
              <input required name="email" id="email" type="email" />
            </div>
            <div class="form-group">
              <label for="textarea">متن پیام :</label>
              <textarea
                required=""
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              >
              </textarea>
            </div>
            <button type="submit" class="form-submit-btn">
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
