import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Abhishek Saraswat
        </motion.span>
        <div className="social">
          <a href="https://github.com/solverAbhi">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abhisheksaraswatt/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://twitter.com/abhisaraswat12">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
