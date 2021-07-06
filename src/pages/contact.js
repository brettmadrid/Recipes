import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Prism cold-pressed pour-over, locavore polaroid flexitarian fixie
              venmo mixtape next level hell of. Fam hammock try-hard put a bird
              on it salvia cold-pressed.
            </p>
            <p>
              Photo booth shoreditch hot chicken tacos, mustache franzen keytar
              whatever man bun.
            </p>
            <p>
              Pickled pok pok pug offal chicharrones. Lomo pitchfork pour-over,
              williamsburg fam enamel pin kitsch celiac bitters small batch
              shaman actually.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div class="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="form-row">
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="form-row">
                <label for="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
