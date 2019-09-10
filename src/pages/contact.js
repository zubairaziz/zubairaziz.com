import React from "react"
import Layout from "../layouts/main-layout"
import Head from "../components/head"
import ContactForm from "../components/contact-form"

const ContactPage = () => (
  <Layout>
    <Head pageTitle="Contact" />
    <h1>Contact Page</h1>
    <ContactForm />
  </Layout>
)

export default ContactPage
