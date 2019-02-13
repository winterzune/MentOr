import React from "react";
import "../../data/menteeData.js"

const PadawanProfile = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.firstName+props.lastName}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Rank:</strong> {props.rank}
        </li>
      </ul>
    </div>
</div>
);

export default PadawanProfile;
