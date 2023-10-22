import React from "react";
import "./RelationCard.css";
export default function RelationCard({ title, desc, icon }) {
  return (
    <div className="relation-card">
      {icon}
      <div className="relation-card-content">
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}
