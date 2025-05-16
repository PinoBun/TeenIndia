import React from 'react';
import { motion } from 'framer-motion';

const WrappedStats = () => {
  const stats = [
    {
      title: "Top Commenters on TeenIndia This May",
      data: [
        { username: "u/Low-Principle-1539" },
        { username: "u/Big-Try-1918" },
        { username: "u/Reddit-user1088" },
        { username: "u/ALLenthealien00" },
        { username: "u/Tron_004" },
      ],
      bgColor: "bg-yellow-300",
      textColor: "text-black",
    },
    {
      title: "TeenIndia Personalities",
      data: [
        { type: "1% Poster", desc: "The Karma Police (not a Radiohead reference)", image: "/assets/image9.png" },
        { type: "1% Commenter", desc: "Endless Yapper", image: "/assets/image18.png" },
        { type: "1% Lurker", desc: "The watcher, the gossiper and knowledge gainer", image: "/assets/image2.png" },
      ],
      bgColor: "bg-black",
      textColor: "text-green-400",
    },
    {
      title: "Top Posts in TeenIndia",
      data: [
        { type: "Fake posts", author: "Karma Farmers" },
        { type: "Relationship posts", author: "Local life haver" },
        { type: "Reposts", author: "u/veryoriginalguy" },
        { type: "Storyteller", author: "Yapper" },
        { type: "Trends", author: "icarrythings" },
      ],
      bgColor: "bg-orange-400",
      textColor: "text-black",
      backgroundImage: "/assets/image20.png",
    },
    {
      title: "Peak Listening Month",
      data: ["June"],
      bgColor: "bg-teal-400",
      textColor: "text-black",
      backgroundImage: "/assets/image13.png",
    },
    {
      title: "Your Top Mods",
      data: [
        { nickname: "Pino BUM", image: "/assets/image12.png" },
        { nickname: "Low effort Pratham", image: "/assets/image10.png" },
        { nickname: "LoveableLover", image: "/assets/image5.png" },
        { nickname: "Chutpaglu Feminist", image: "/assets/image16.jpg" },
        { nickname: "Astyyyyyyyyyy", image: "/assets/image1.png" },
      ],
      bgColor: "bg-purple-600",
      textColor: "text-yellow-300",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Wrapped Highlights</h2>
      <div className="space-y-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${stat.bgColor} ${stat.textColor} relative overflow-hidden`}
            style={stat.backgroundImage ? { backgroundImage: `url(${stat.backgroundImage})`, backgroundSize: 'cover' } : {}}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">{stat.title}</h3>
            {stat.data.map((item, i) => (
              <div key={i} className="mt-2 flex items-center">
                {item.image && (
                  <img src={item.image} alt={`${item.type || item.nickname}`} className="w-12 h-12 mr-4 rounded-full" />
                )}
                <p>
                  {i + 1}. {item.username || item.type || item.nickname || item}
                  {item.desc && `: ${item.desc}`}
                  {item.author && ` by ${item.author}`}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WrappedStats;
