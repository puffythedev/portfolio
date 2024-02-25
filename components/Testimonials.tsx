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
		id: 0,
		quote: "i luh ma bf🤪",
		author: "Khloe",
		role: "Sky's wife",
		img: "https://cdn.discordapp.com/avatars/1129112487900491876/5f0136a9e29c6c206ff6f5bba181cc06.webp"
	},
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
	},
	{
		id: 3,
		quote: "Hi\n",
		author: "notbangbang",
		role: "Pro MC gamer",
		img: "https://cdn.discordapp.com/attachments/1173954453045514240/1181351258242678895/t3WSIkm.png"
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