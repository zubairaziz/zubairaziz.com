import React from "react"
import { Link } from "gatsby"
import formStyles from "../styles/modules/form.module.scss"
// import { Button } from "./button"

const ContactForm = () => {
  return (
    <form
      className={formStyles.form}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className={formStyles.row}>
        <div className={formStyles.formControl}>
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className={formStyles.formControl}>
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
      </div>
      <div className={formStyles.formControl}>
        <label for="message">Message</label>
        <textarea rows="6" name="message" />
      </div>
      <input className={formStyles.spam} name="bot-field" />
      <div className={formStyles.buttonContainer}>
        <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
