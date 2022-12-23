import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../src/index.css"

//custom style
import { ComponentGoogleMaps } from "./style/ContactStyle";

//map
import GoogleMaps from "./GoogleMapsReact";

// import "axios"
// import { useRef } from 'react';
// import emailjs from "@emailjs/browser";

import showResults from "../../Redux/showResults";
import SimpleForm from "../../Redux/SimpleForm";
import { Provider } from "react-redux";
import store from "../../Redux/store"



const ContactGoogleMaps = (props) => {
   // const form = useRef();

   //  const serviceID = 'service_41opjdn'
   //  const templateID = 'template_a3zfid9'
   //  const userId = 'y-6IQ9GDqO1620RNg'

   //  const sendEmail = (e) => {
   //     e.preventDefault();

   //        emailjs.sendForm(serviceID, templateID, form.current, userId)
   //          .then((result) => {
   //              console.log(result.text);
   //          }, (error) => {
   //              console.log(error.text);
   //          });

   //        form.current.reset()
   //  };


   // const [input, setInput] = useState({
   //   email: "",
   //   name: "",
   //   site: "",
   //   textArea: "",
   // });

   // const handleSubmit = (e) => {
   //   e.preventDefault();
   // };

   // const handleChangeInput = (e) => {
   //   if (e.target.getAttribute("name") === "name") {
   //     setInput({
   //       name: e.target.value,
   //     });
   //   } else if (e.target.getAttribute("name") === "email") {
   //     setInput({
   //       email: e.target.value,
   //     });
   //   } else if (e.target.getAttribute("name") === "website") {
   //     setInput({
   //       site: e.target.value,
   //     });
   //   } else if (e.target.getAttribute("name") === "message") {
   //     setInput({
   //       textArea: e.target.value,
   //     });
   //   }
   // };

   return (
      <ComponentGoogleMaps className="contact-location">
         <div className="container contact-location__container">
            {/* map */}

            <GoogleMaps />




            {/* form */}
            <div className="message__body">
               {/* <form ref={form} onSubmit={sendEmail}>
                     <div className="row">
                        <div className="col-md-6">
                           <input name='name' type="text" placeholder='Ad,Soyad' />
                        </div>
                        <div className="col-md-6">
                           <input name='email' type="email" placeholder='E-mail Ünvan'/>
                        </div>
                        <div className="col-md-12">
                           <textarea name="message" id="" cols="30" rows="10" placeholder='Mesaj Yaz'></textarea>
                        </div>
                     </div>
                     <div className="message__btn">
                        <input type="submit" value='Mesaj Göndər' />
                     </div>
                     </form>
                      */}
               <Provider store={store}>
                  <div style={{ padding: 15 }}>

                     <SimpleForm onSubmit={showResults} />

                  </div>
               </Provider>
            </div>
         </div>
      </ComponentGoogleMaps>
   );
};

export default ContactGoogleMaps;
