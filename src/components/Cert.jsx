export default function DevOps() {


const certificates = [

{
title:"Full Stack Development",
issuer:"Certificate Provider",
year:"2025",
desc:"HTML, CSS, JavaScript, React and responsive web development."
},


{
title:"Python Programming",
issuer:"Certificate Provider",
year:"2025",
desc:"Python programming, logic building and problem solving."
},


{
title:"AI & Machine Learning",
issuer:"Certificate Provider",
year:"2025",
desc:"Machine learning concepts and AI based project development."
},


{
title:"DevOps Fundamentals",
issuer:"Certificate Provider",
year:"2026",
desc:"Linux, Docker, CI/CD, GitHub Actions and AWS basics."
},


{
title:"SQL & DBMS",
issuer:"Certificate Provider",
year:"2025",
desc:"Database concepts, SQL queries and DBMS fundamentals."
}


];



return (

<section
className="
py-40
bg-white
"
>


<div className="max-w-6xl mx-auto px-8">



<p
className="
text-gray-400
text-sm
tracking-widest
mb-4
"
>

CERTIFICATES

</p>



<h2
className="
text-4xl
md:text-7xl
font-bold
mb-20
"
>

My Certifications

</h2>




<div
className="
grid
md:grid-cols-2
gap-8
"
>


{

certificates.map((cert,index)=>(


<div

key={index}

className="
bg-[#F5F1EA]
p-8
rounded-3xl
shadow-sm
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
"

>


<h3
className="
text-2xl
font-bold
"
>

{cert.title}

</h3>




<p
className="
text-gray-500
mt-3
"
>

{cert.issuer} • {cert.year}

</p>




<p
className="
mt-4
text-gray-600
leading-relaxed
"
>

{cert.desc}

</p>




<button

className="
mt-6
px-6
py-3
bg-black
text-white
rounded-full
hover:scale-105
transition
"

>

View Certificate

</button>



</div>


))


}



</div>



</div>



</section>


)

}