import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white py-6 mt-auto">
      <hr className="border-gray-600 mb-6" />

      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/OpeyemiKol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/opeyemi-kolurejo-a94117229/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://facebook.com/kolurejoopeyemi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaFacebook size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Opeyemi. All rights reserved.</p>
      </div>
    </footer>
  );
}
