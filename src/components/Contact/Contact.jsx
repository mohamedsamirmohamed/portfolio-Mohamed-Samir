import React, { useState } from "react";
import styles from "../Contact/Contact.module.css";
import { usePortfolio } from "../Context/PortfolioContext";
import { useContact } from "../Context/Contact";
import { toast, Toaster } from "react-hot-toast";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const { darkMode } = usePortfolio();
  const { sendEmail } = useContact();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formData);
      toast.success("Message sent successfully!"); // إشعار النجاح فقط
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error); // الأخطاء لا تظهر للمستخدم
    }
  };

  return (
    <section className={`${styles.contactSection} ${darkMode ? styles.dark : styles.light}`}>
      <Toaster position="top-right" />
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        <div className={styles.titleUnderline}></div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h3>Let's Connect!</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>

            <div className={styles.infoItem}>
              <span>📧</span> mohamedsamir111qwe222@gmail.com
            </div>
            <div className={styles.infoItem}>
              <span>📞</span> +971 50 707 9549
            </div>
            <div className={styles.infoItem}>
              <span>📍</span> Dubai, United Arab Emirates
            </div>

            <div className={styles.socials}>
  <a 
     href="https://www.linkedin.com/in/mohamed-samir-73a4ba237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a 
     href="https://github.com/mohamedsamirmohamed" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  {/* <a 
    href="https://instagram.com/mohamedsamir111" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a> */}
</div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
