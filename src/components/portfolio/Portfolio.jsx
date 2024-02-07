import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SNAPPY",
    img: "https://github.com/solverAbhi/Snappy/assets/118924633/6e2bf7cf-e180-4fa3-9321-15770926a907",
    desc: "Created a dynamic real-time chat application with robust user authentication capabilities, including secure login and signup functionalities. Implemented personalized avatar settings, allowing users to customize their profiles within the application. Utilized cutting-edge technologies such as WebSocket or Socket.IO to enable seamless real-time communication, providing users with an immersive live chat experience.",
  },
  {
    id: 2,
    title: "CRYPTONIAN",
    img: "https://github.com/solverAbhi/Cryptonains/assets/118924633/b49f5996-6d1a-42bd-a865-0e109a5c40a2",
    desc: "Crafted a responsive web application leveraging HTML, React, JavaScript, and CSS to deliver real-time insights into cryptocurrency prices and values. Employed responsive design principles to optimize functionality and visual aesthetics across diverse devices, ensuring seamless access on desktops, tablets, and mobile phones. Leveraged React to develop dynamic and interactive user interfaces, facilitating smooth navigation through various crypto coins. ",
  },
  {
    id: 3,
    title: "GPT- 4.0",
    img: "https://github.com/solverAbhi/Cryptonains/assets/118924633/d322dbb9-9bac-4794-b00e-f9618662a878",
    desc: "Crafted a responsive web application integrated with OpenAI within the MERN stack, fostering smooth communication and interaction with advanced language models. Developed a tailored Chatbot functionality, ensuring user messages are securely stored and accessible for retrieval or deletion. Employed top-notch security measures, including JWT Tokens, HTTP-Only Cookies, Password Encryption, and Middleware Chains, to safeguard user data and privacy.",
  },
  {
    id: 4,
    title: "AIR-Bnb",
    img: "https://github.com/solverAbhi/Cryptonains/assets/118924633/fd846ac4-1f0f-4b05-9359-b084418cdc38",
    desc: "Crafted a responsive web application akin to Airbnb, offering users a seamless experience to sign in and book accommodations and tourist destinations. This project showcases my proficiency in designing intuitive user interfaces and implementing robust booking functionalities, enhancing user engagement and satisfaction.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
