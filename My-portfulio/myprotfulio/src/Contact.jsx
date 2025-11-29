function Contact() {
return (
<section className="p-10 md:p-16 text-center bg-white rounded-3xl shadow-xl border border-blue-50">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Me</h2>
<p className="text-gray-700 mb-2">Email: <span className="font-semibold">akashpandit01@gmail.com</span></p>
<p className="text-gray-700 mb-6">Phone: <span className="font-semibold">1234567890</span></p>
<div className="flex justify-center gap-6 text-sm md:text-base">
<a href="#" className="text-blue-600 hover:text-blue-800 underline">LinkedIn</a>
<a href="#" className="text-gray-900 hover:text-black underline">GitHub</a>
</div>
</section>
);
}
export default Contact;