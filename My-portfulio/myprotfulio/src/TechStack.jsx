function TechStack() {
const skills = [
"HTML", "CSS", "JavaScript", "React", "Java", "Spring Boot", "MySQL", "Git", "GitHub",
];


return (
<section className="p-10 max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Tech Stack & Tools</h2>
<p className="text-gray-700 mb-6">Technologies I use to build projects:</p>
<div className="flex flex-wrap justify-center gap-3 md:gap-4">
{skills.map((s) => (
<div
key={s}
className="px-4 py-2 bg-white shadow-md rounded-full text-sm md:text-base text-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-blue-100"
>
{s}
</div>
))}
</div>
</section>
);
}
export default TechStack;