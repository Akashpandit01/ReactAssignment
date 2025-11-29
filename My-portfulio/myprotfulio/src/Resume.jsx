function Resume() {
return (
<section className="p-10 md:p-16 text-center bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-xl border border-blue-50">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Resume</h2>
<p className="text-gray-700 mb-6">Download my updated resume:</p>
<a
className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm md:text-base font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
href="/Akash-Pandit-Resume.pdf"
download
>
Download Resume
</a>
</section>
);
}

export default Resume