import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  img: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "always sky, always sky; boyfriends can be gay and girlfriends can be lesbian",
      author: "Julian",
      role: "XenoFM owner",
	  img: "/public/julian.webp"
    },
	{
		id: 1,
		quote: "I eat animal's hearts",
		author: "Yastube",
		role: "TeamEnvex Owner",
		img: "/public/yastube.png"
	}
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-slate-400 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={`${testimonial.img}`}
                    alt={`${testimonial.author} - ${testimonial.role}`}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-white font-semibold">{testimonial.author}</h2>
                  <p className="text-gray-400">{testimonial.role}</p>
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