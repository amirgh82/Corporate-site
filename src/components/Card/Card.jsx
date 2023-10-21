import React from "react";
import "./Card.css";
export default function Card({ title, description, scale, icon }) {
  return (
    <div className={`card ${scale ? "scale" : ""}`}>
      <div className="card2">
        <h4 className="card-title">
          {title}
          <span>{icon}</span>
        </h4>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
}
