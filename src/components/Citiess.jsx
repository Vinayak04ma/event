
import React from 'react';

const cities = [
  {
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The city of dream.',
  },
  {
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1721787405154-0ad3afc600d7?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The capital city offers a mix of historical landmarks.',
  },
  {
    name: 'Banglore',
    image: 'https://images.unsplash.com/photo-1597220397294-0d95abb2031c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Silicon Valley of India.',
  },
  {
    name: 'Kolkata',
    image: 'https://images.unsplash.com/photo-1647102208648-5f3175091dda?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A city rich in history and culture.',
  },
  {
    name: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1589820745312-e04227bf8843?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'City of Pearls,.',
  },
  {
    name: 'Jaipur',
    image: 'https://images.unsplash.com/photo-1705497242721-459526b5157e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Pink city of India.',
  },
  {
    name: 'Chennai',
    image: 'https://images.unsplash.com/photo-1695834195972-9fd5877b8ad0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'City of light and romance.',
  },
  {
    name: 'Pune',
    image: 'https://images.unsplash.com/photo-1663057698338-34779bb6d235?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1bmV8ZW58MHx8MHx8fDA%3D',
    description: 'A cultural hub with a blend of history and modernity.',
  },
];

const Citiess = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Popular Cities for Meetups
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative  cursor-pointer bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:border-red-500 transition-all"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 image-hover-effect"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-red-500">
                {city.name}
              </h3>
              <p className="text-center text-gray-600 group-hover:text-gray-800">
                {city.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Citiess;

