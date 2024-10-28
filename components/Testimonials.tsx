import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  img: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
	{
      id: 1,
      quote: "always sky, always sky; boyfriends can be gay and girlfriends can be lesbian",
      author: "Julian",
      role: "XenoFM owner",
	  img: "https://cdn3.kars.bio/assets/external/sky_1.webp"
    },
	{
		id: 2,
		quote: "I eat animal's hearts\n",
		author: "Yastube",
		role: "TeamEnvex Owner",
		img: "https://cdn3.kars.bio/assets/external/sky_2.webp"
	}
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#112240] bg-gray-800 p-6 rounded-lg shadow-md">
              <h1 className="text-white p-2 text-xl font-semibold">{testimonial.author}</h1>
              <p className="text-slate-400 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;