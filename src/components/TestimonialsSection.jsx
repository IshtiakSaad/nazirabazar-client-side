const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        feedback:
          "This platform has made it so easy for me to donate and help those in need. Highly recommended!",
        image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png",
      },
      {
        name: "Jane Smith",
        feedback:
          "I love how seamless and user-friendly the entire process is. It's a game-changer for community support.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhD8Sk4j6lgN3BGP17nZPfkwNCbX5vrNWWTd7sFfM9zOeOpKWDpsMGOIc6T3WCngJBWU&usqp=CAU",
      },
      {
        name: "Emily Johnson",
        feedback:
          "The best way to give back to the community. The platform ensures every donation reaches the right hands.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT23UG45LuuCAs8tqtMm6DwCattS3n2LoIIpqte4uE6vlsM8oeTd2MPD0wEIo7l8Ip6jk&usqp=CAU",
      },
    ];
  
    return (
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 px-6 py-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-lg p-6 text-white flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-300 text-center">
              &quot;{testimonial.feedback}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  