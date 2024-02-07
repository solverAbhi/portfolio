import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Empowering collaboration to craft exceptional Software,
          <br /> driving growth through innovative solutions.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Inovative</motion.b>{" "}
            Software Solution
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>WEB APPLICATIONS</h2>
          <p>
            I specialize in developing tailored web applications for businesses,
            focusing on delivering customized solutions that meet their unique
            needs and drive growth. With a keen eye for user experience and a
            passion for innovation, I create dynamic and impactful digital
            solutions that empower businesses to thrive in the online landscape.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>REFACTORING</h2>
          <p>
            I excel in simplifying and optimizing code complexity, transforming
            intricate algorithms into clean and efficient solutions. With a
            meticulous approach to problem-solving and a commitment to best
            practices, I streamline codebases to enhance readability,
            maintainability, and overall performance. My goal is to ensure that
            every line of code contributes to a cohesive and scalable software
            architecture.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SYNERGY</h2>
          <p>
            I lead a dynamic team specializing in Android app development for
            businesses. Collaborating closely with our clients, we harness our
            collective expertise to craft exceptional apps that meet their
            unique requirements and exceed expectations. With a focus on
            innovation and user-centric design, we strive to deliver
            cutting-edge solutions that drive growth and success in the digital
            marketplace.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>FUSION</h2>
          <p>
            I collaborate with diverse teams to drive holistic business
            development through innovative tech solutions. Leveraging
            cross-functional expertise, we synergize efforts to propel the
            organizations technological advancements and overall growth,
            ensuring seamless integration across all aspects of operations.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
