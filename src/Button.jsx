import React from "react";

const Button = () => {
  return (
    <>
      <div className="whatsapp_chat_support wcs_fixed_right" id="button-w">
        <div className="wcs_button_label">Contáctanos</div>
        <div className="wcs_button wcs_button_circle">
          <span className="fa fa-whatsapp"></span>
        </div>

        <div className="wcs_popup">
          <div className="wcs_popup_close">
            <span className="fa fa-close"></span>
          </div>
          <div className="wcs_popup_header">
            <span className="fa fa-whatsapp"></span>
            <strong>Servicio al cliente</strong>

            <div className="wcs_popup_header_description">
              ¿Necesidad de ayuda? Chatea con nosotros en Whatsapp
            </div>
          </div>
          <div
            className="wcs_popup_input"
            data-number="573137982373"
            data-availability='{ "monday":"07:00-22:30", "tuesday":"07:00-22:30", "wednesday":"07:7030-22:30", "thursday":"07:00-22:30", "friday":"07:00-22:30", "saturday":"09:00-22:30", "sunday":"09:00-22:30" }'
          >
            <input type="text" placeholder="Escribir pregunta!" />
            <i className="fa fa-play"></i>
          </div>
          <div className="wcs_popup_avatar">
            <img
              src="https://avatars.githubusercontent.com/janl?s=180"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
