import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaLinux,
  FaDocker,
  FaAws
} from "react-icons/fa";


import {
  SiTailwindcss,
  SiMysql,
  SiGithubactions
} from "react-icons/si";



const skillCategories = [


{
title:"Programming Languages",

skills:[

{
name:"Python",
icon:<FaPython/>
},

{
name:"Java",
icon:<FaJava/>
},

{
name:"JavaScript",
icon:<FaJs/>
}

]

},





{
title:"🌐 Frontend Development",

skills:[

{
name:"HTML5",
icon:<FaHtml5/>
},

{
name:"CSS3",
icon:<FaCss3Alt/>
},

{
name:"JavaScript",
icon:<FaJs/>
},

{
name:"React.js",
icon:<FaReact/>
},

{
name:"Tailwind CSS",
icon:<SiTailwindcss/>
}

]

},






{
title:"🗄️ Database",

skills:[

{
name:"MySQL",
icon:<SiMysql/>
},

{
name:"DBMS Concepts",
icon:<FaDatabase/>
}

]

},






{
title:"📊 Data Analysis",

skills:[

{
name:"Pandas",
icon:<FaPython/>
},

{
name:"NumPy",
icon:<FaPython/>
},

{
name:"Matplotlib",
icon:<FaCode/>
},

{
name:"Jupyter Notebook",
icon:<FaLaptopCode/>
}

]

},






{
title:"🧩 Core Concepts",

skills:[


{
name:"Object-Oriented Programming (OOPs)",
icon:<FaCode/>
},


{
name:"Data Structures & Algorithms (DSA)",
icon:<FaCode/>
},


{
name:"Computer Networks",
icon:<FaNetworkWired/>
},


{
name:"Operating Systems",
icon:<FaServer/>
}


]

},







{
title:"🛠️ Tools & Platforms",

skills:[


{
name:"Git",
icon:<FaGitAlt/>
},


{
name:"GitHub",
icon:<FaGithub/>
},


{
name:"VS Code",
icon:<FaLaptopCode/>
},


{
name:"CodeBlocks",
icon:<FaJava/>
}


]

},







{
title:"☁️ DevOps & Cloud(Learning)",

skills:[


{
name:"Linux",
icon:<FaLinux/>
},


{
name:"Docker",
icon:<FaDocker/>
},


{
name:"CI/CD",
icon:<SiGithubactions/>
},


{
name:"AWS",
icon:<FaAws/>
},


{
name:"Cloud Basics",
icon:<FaServer/>
}


]

}



];







export default function Skills(){


return(

<section

id="skills"

className="
py-40
bg-[#F5F1EA]
"

>


<div

className="
max-w-7xl
mx-auto
px-8
"

>



<p

className="
text-gray-400
text-sm
tracking-widest
mb-4
"

>

SKILLS

</p>






<h2

className="
text-4xl
md:text-7xl
font-bold
mb-20
"

>

Skills & Technologies

</h2>







<div className="space-y-16">



{

skillCategories.map((category)=>(



<div key={category.title}>



<h3

className="
text-2xl
font-bold
mb-8
"

>

{category.title}

</h3>







<div

className="
grid
grid-cols-2
md:grid-cols-5
gap-6
"

>



{


category.skills.map((skill)=>(



<div


key={skill.name}


className="
bg-white
p-7
rounded-3xl
shadow-sm
flex
flex-col
items-center
gap-4
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
"

>




<div className="text-4xl">

{skill.icon}

</div>





<p

className="
font-semibold
text-center
"

>

{skill.name}

</p>





</div>



))


}





</div>





</div>



))


}





</div>





</div>



</section>


)

}