
import React from "react";

const categories = [
  { name: "Travel and Outdoor", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/travel_and_outdoor.svg?w=32" },
  { name: "Social Activities", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/social_activities.svg?w=32" },
  { name: "Hobbies and Passions", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/hobbies_and_passions.svg?w=48" },
  { name: "Sports and Fitness", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/sports_and_fitness.svg?w=48" },
  { name: "Health and Well-Being", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/health_and_wellness.svg?w=48" },
  { name: "Technology", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/technology.svg?w=48" },
  { name: "Art and Culture", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/art_and_culture.svg?w=48" },
  { name: "Games", image: "https://secure.meetupstatic.com/next/images/indexPage/categories/games.svg?w=48" },
];

const ExploreC = () => {
  return (
    <section className="py-10 bg-[#04152d]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-6 text-center">
          Explore Top Categories
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between">
          {categories.map((category, index) => (
            <div key={index} className="bg-[#ffffffd8] cursor-pointer rounded-lg p-4 m-2 flex flex-col items-center transition duration-300 ease-in-out transform ">
              <img src={category.image} alt={category.name} className="h-16 w-16 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800 text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreC;

