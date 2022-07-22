import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <p>
          <span>2022 </span>made with
        </p>
      </div>
      <div className="footer__icon">
        <Icon icon="ant-design:heart-filled" />
      </div>
    </div>
  );
};
export default Footer;
