import React, { createContext, useContext } from "react";
import emailjs from "emailjs-com";

const ContactContext = createContext();
export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const sendEmail = async (formData) => {
    try {
      await emailjs.send(
        "service_bnqczmk",        // Service ID الصحيح
        "template_xs8xpyq",       // Template ID الجديد من حسابك
        {
          name: formData.name,    // يتطابق مع {{name}}
          email: formData.email,  // يتطابق مع {{email}}
          title: formData.subject, // يتطابق مع {{title}} في القالب
          message: formData.message
        },
        "2ox6DEfOPYczJoSok"       // Public Key الصحيح
      );
      // إشعار النجاح يظهر في Contact.jsx
    } catch (error) {
      console.error(error); // لا نعرض أي رسالة فشل للمستخدم
    }
  };

  return (
    <ContactContext.Provider value={{ sendEmail }}>
      {children}
    </ContactContext.Provider>
  );
};
