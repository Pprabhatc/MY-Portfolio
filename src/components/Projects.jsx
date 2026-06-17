import { motion } from "framer-motion";


const projects = [

{
id:"01",
title:"NeuroShield IDS",
tech:"Python • Machine Learning • Scikit-Learn",
image:"/neuroshield.png",
description:
"AI-powered intrusion and scam detection system that analyzes network traffic and identifies cyber threats using machine learning models.",
github:"https://github.com/Pprabhatc",
live:"#",
},


{
id:"02",
title:"Student Management System",
tech:"Python • MySQL • HTML • CSS",
image:"/student.png",
description:
"Full-stack web application for managing student records, attendance tracking, and academic information with database integration.",
github:"https://github.com/Pprabhatc",
live:"#",
},


{
id:"03",
title:"Portfolio Website",
tech:"React • Tailwind • Framer Motion",
image:"/portfolio.png",
description:
"Modern developer portfolio showcasing projects, skills, and DevOps journey with premium UI design.",
github:"https://github.com/Pprabhatc",
live:"https://dbitrishubywork22.vercel.app/",
},

];





export default function Projects(){


return(


<section
id="projects"
className="
py-32
bg-[#F5F1EA]
"
>


<div className="max-w-7xl mx-auto px-8">



<p className="
text-gray-400
text-sm
tracking-widest
mb-4
">

FEATURED WORK

</p>



<h2
className="
text-5xl
md:text-6xl
font-bold
mb-16
"
>

Selected Projects

</h2>





<div

className="
grid
md:grid-cols-2
gap-10
"

>



{

projects.map((project)=>(


<motion.div


key={project.id}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.5
}}



className="
group
bg-white
rounded-3xl
overflow-hidden
shadow-md
hover:shadow-2xl
transition-all
duration-500
"



>




<div className="
overflow-hidden
h-56
">


<img

src={project.image}

alt={project.title}

className="
w-full
h-full
object-cover
group-hover:scale-105
transition
duration-700
"

/>


</div>






<div className="
p-7
">



<p className="
text-gray-400
mb-2
">

{project.id}

</p>




<h3
className="
text-2xl
font-bold
mb-3
"
>

{project.title}

</h3>




<p className="
text-sm
text-gray-500
mb-4
">

{project.tech}

</p>




<p className="
text-gray-600
text-sm
leading-relaxed
mb-6
">

{project.description}

</p>





<div className="
flex
gap-4
">


<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
px-5
py-2
bg-black
text-white
rounded-full
text-sm
hover:scale-105
transition
"

>

GitHub →

</a>




<a

href={project.live}

target="_blank"

rel="noreferrer"

className="
px-5
py-2
border
border-black
rounded-full
text-sm
hover:bg-black
hover:text-white
transition
"

>

Live →

</a>



</div>




</div>





</motion.div>



))


}




</div>





</div>


</section>


)


}