import Image from "next/image";
import React from "react";
import "./inside-li.scss";

const InsideLi = (props) => {
  const { time, image, paraf } = props;
  return (
    <div className="inside-li" style={{ backgroundImage: `url(${image})` }}>
      <span className="badge ">
        {time}
      </span>
      <p className="paraf">{paraf}</p>
    </div>
  );
};

export default InsideLi;
