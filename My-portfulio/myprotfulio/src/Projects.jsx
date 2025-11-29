function Projects() {
const projects = [
{
title: "Hospital Management System",
desc: "A web-based system for managing patients, appointments and billing using JSP/Servlets and MySQL.",
tech: ["Java", "JSP", "Servlet", "MySQL"],
},
{
title: "Academic Certificate Verification System",
desc: "Secure platform to verify student certificates with role-based access.",
tech: ["Java", "Spring Boot", "Spring JDBC", "MySQL"],
},
];


return (
<section className="mt-10 max-w-5xl mx-auto">

<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
<div className="grid gap-6 md:grid-cols-2">
{projects.map((p) => (
<article
key={p.title}
className="shadow-xl p-6 rounded-2xl bg-white hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 border border-blue-50"
>
<h3 className="text-xl font-semibold mb-2 text-gray-900">{p.title}</h3>
<p className="text-gray-700 mb-3 text-sm md:text-base">{p.desc}</p>
<div className="flex flex-wrap gap-2 mt-2">
{p.tech.map((t) => (
<span
key={t}
className="px-3 py-1 text-xs md:text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-100"
>
{t}
</span>
))}
</div>
</article>
))}
</div>
</section>
);
}
export default Projects;