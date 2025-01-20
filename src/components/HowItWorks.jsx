const HowItWorks = () => {
    const steps = [
      {
        title: "Sign Up",
        description:
          "Create your free account to get started and access all features of the platform.",
        icon: "https://cdn-icons-png.flaticon.com/512/1804/1804408.png",
      },
      {
        title: "Browse",
        description:
          "Explore available food donations or post your own to help others in need.",
        icon: "https://cdn-icons-png.freepik.com/512/3128/3128287.png",
      },
      {
        title: "Request or Donate",
        description:
          "Request food donations or donate items to support the community.",
        icon: "https://thumbs.dreamstime.com/b/illustration-design-giving-food-poor-refugees-food-sharing-icon-illustration-design-giving-food-poor-157596932.jpg",
      },
    ];
  
    return (
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg mb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 px-6 py-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-lg p-6 text-white flex flex-col items-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  