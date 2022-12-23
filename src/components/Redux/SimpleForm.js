import React , { useState }  from 'react';
import { Field, reduxForm } from 'redux-form';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const SimpleForm = props => {
  // const {  pristine, reset, submitting } = props;
  const form = useRef();
   
  const serviceID = 'service_41opjdn'
  const templateID = 'template_a3zfid9'
  const userId = 'y-6IQ9GDqO1620RNg'
  
  const sendEmail = (e) => {
     e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, form.current, userId)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
     
        form.current.reset()
  };
 
 
 const [ setInput] = useState({
   email: "",
   name: "",
   site: "",
   textArea: "",
 });

 const handleSubmit = (e) => {
   e.preventDefault();
 };

 const handleChangeInput = (e) => {
   if (e.target.getAttribute("name") === "name") {
     setInput({
       name: e.target.value,
     });
   } else if (e.target.getAttribute("name") === "email") {
     setInput({
       email: e.target.value,
     });
   } else if (e.target.getAttribute("name") === "website") {
     setInput({
       site: e.target.value,
     });
   } else if (e.target.getAttribute("name") === "message") {
     setInput({
       textArea: e.target.value,
     });
   }
 };
  return (
    <div className="message__body">
    <form ref={form} onSubmit={sendEmail}>
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
           
   
 </div>

  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
