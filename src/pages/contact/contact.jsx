import contact from "./contact.module.scss"
import hero_img from "../../assets/img/contak_hero_img.jpg"
import adress from "../../assets/img/address_contact_img.png"
import { WhatsAppIcon } from "../../assets/icon/whatsApp-icon";






export const Contact = () => {
  return (
    <section>
         <div className={contact.img}>
         </div>

    <div >
        <div className="container">
          <div className={contact.touch}>
               <div>
               <img src={hero_img} alt="" />
               </div>
             <div className={contact.title}>
                 <h1>Get in touch</h1>
                 <p>Send us a note anytime — we welcome <br /> feedback and requests.</p>
                 <h4>Give us a call</h4>
                 <p>Mon – Fri, 9am – 7pm EST: <br /> +44 583 837390</p>
                 
                 <h4>Write us an email</h4>
                 <h6>hello@example.com</h6>
                 <button className={contact.btn}>Visit FAQ</button>
              </div>


          </div>
        </div>
      </div>

      <div className={contact.Come}>
        <div className="container">
        <div className={contact.come}>
            <div className={contact.visit}>
              <h1>Come and visit</h1>
              <p>Adresse:</p>
              <span>Kaiser-Friedrich-Strasse 19, 10585 Berlin</span>
              <p>Termine nach Vereinbarung</p>
              <h3>RU / DE / UA</h3>
              <div className={contact.icons}>
                <WhatsAppIcon/>
                <p>+49 176 436 036 89</p>
              </div>
              <h3>ENG / RU</h3>
              <div className={contact.icons}>
                <WhatsAppIcon/>
                <p>+49 176 436 036 89</p>
              </div>
            </div>
            <div>
              <img src={adress} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={contact.Drop}>
        <div className="container">
          <h1>Drop us a line</h1>
          <p>We are here to help. Please complete the short form below and <br /> we’ll respond as soon as possible.</p>
         <div className={contact.inputs}>
         <input type="text" placeholder="Default" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Phone" />
         </div>
         <input type="text" className={contact.input_subject} placeholder="Subject"/>
         <input type="text" className={contact.input_messange}  placeholder="Message"/>
        </div>
        <button className={contact.input_btn}>Send Message</button>

      </div>
    </section>
   
  )
}
