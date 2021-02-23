import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const kontakt = () => (
  <Layout location={{pathname : '/kontakt'}}>
    <SEO title="Kontaktformular" />
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <h2>Contact Form</h2>
                    <p>Drop us a message!</p>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label for="first_name" className="block text-sm font-medium text-gray-700">First name
                    <input type="text" id="first_name" name="first_name" className="mt-1 focus:ring-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /></label>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label for="last_name" className="block text-sm font-medium text-gray-700">Last name
                    <input type="text" id="last_name" name="last_name" className="mt-1 focus:ring-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /></label>
                  </div>
                  <div className="col-span-6">
                    <label for="email" className="block text-sm font-medium text-gray-700">E-Mail-Adress
                    <input type="text" id="email" name="email" className="mt-1 focus:ring-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /></label>
                  </div>
                  <div className="col-span-6">
                    <label for="message" className="block text-sm font-medium text-gray-700">Your message
                    <textarea id="message" name="message" className="mt-1 focus:ring-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /></label>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  send
                </button>
              </div>
        </form>
  </Layout>
)

export default kontakt