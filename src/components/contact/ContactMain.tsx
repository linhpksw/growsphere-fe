import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

const ContactMain = () => {
  return (
    <>
      {" "}
      <Breadcrumb breadHome="Trang chủ" breadMenu="Liên lạc" />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default ContactMain;
