import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";


export default function Contact() {


  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  });


  const [status,setStatus] = useState("");



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }



  const sendMessage = (e)=>{

    e.preventDefault();


    if(
      !formData.name ||
      !formData.email ||
      !formData.message
    ){

      setStatus("Please fill all fields ❌");
      return;

    }



    emailjs.send(

      "service_8z8zswl",
      "template_fyb7m8m",
      formData,
      "g-JDP1pysYW4lxf1J"

    )


    .then(()=>{


      setStatus("Message sent successfully ✅");


      setFormData({

        name:"",
        email:"",
        message:""

      });


    })


    .catch(()=>{


      setStatus("Message failed ❌");


    });



  }




return (

<section
id="contact"
className="bg-black text-white py-40"
>


<div className="max-w-6xl mx-auto px-8">


<div className="grid md:grid-cols-2 gap-16 items-center">



{/* LEFT */}


<div>


<p className="text-gray-400 tracking-widest">
TOUCH
</p>




<h2 className="text-5xl md:text-6xl font-bold mt-6">

Let's Build

<br/>

Something Great.

</h2>




<p className="mt-8 text-gray-400 text-lg">

Open to internships, collaborations
and exciting opportunities.

</p>





<div className="flex gap-8 mt-10 text-3xl">



<a

href="https://github.com/Pprabhatc"

target="_blank"

rel="noreferrer"

className="hover:scale-110 transition"

>

<FaGithub/>

</a>




<a

href="https://linkedin.com/in/mrprabhat22/"

target="_blank"

rel="noreferrer"

className="hover:scale-110 transition"

>

<FaLinkedin/>

</a>



</div>





{/* EMAIL + LOCATION */}


<div className="mt-10 space-y-3">



<a

href="mailto:chaurasiaprabhat42@gmail.com"

className="
flex
items-center
gap-3
text-gray-400
text-lg
hover:text-white
transition
"

>

<span className="text-xl">

📧

</span>


chaurasiaprabhat42@gmail.com


</a>





<p

className="
flex
items-center
gap-3
text-gray-400
text-lg
"

>


<span className="text-xl">

📍

</span>


Bengaluru, India


</p>



</div>





</div>






{/* FORM */}



<div className="
bg-white/10
backdrop-blur-lg
p-8
rounded-3xl
shadow-xl
">



<form onSubmit={sendMessage}>


<input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

required

placeholder="Your Name"

className="
w-full
mb-5
px-5
py-4
rounded-xl
bg-white/10
border
border-gray-700
outline-none
"

/>





<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

required

placeholder="Your Gmail"

className="
w-full
mb-5
px-5
py-4
rounded-xl
bg-white/10
border
border-gray-700
outline-none
"

/>





<textarea

name="message"

value={formData.message}

onChange={handleChange}

required

placeholder="Your Message"

rows="5"

className="
w-full
mb-5
px-5
py-4
rounded-xl
bg-white/10
border
border-gray-700
outline-none
"

/>





<button

type="submit"

className="
w-full
py-4
bg-white
text-black
rounded-full
font-semibold
hover:scale-105
transition
"

>

Send Message

</button>



</form>





<p className="text-center mt-5 text-sm">

{status}

</p>




</div>




</div>


</div>


</section>


)

}