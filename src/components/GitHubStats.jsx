export default function GitHubStats() {
  return (
    <section className="py-32 bg-[#F5F1EA]">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          GitHub Activity
        </h2>

        <a 
  href="https://github.com/Pprabhatc"
  target="_blank"
  rel="noreferrer"
>
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

    <img
      src="https://github-readme-stats.vercel.app/api?username=Pprabhatc&show_icons=true&theme=tokyonight&hide_border=true"
      alt="GitHub Stats"
      className="rounded-3xl shadow-xl w-full md:w-[45%]"
    />

    <img
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pprabhatc&layout=compact&theme=tokyonight&hide_border=true"
      alt="Top Languages"
      className="rounded-3xl shadow-xl w-full md:w-[45%]"
    />

  </div>
</a>

      </div>
    </section>
  );
}