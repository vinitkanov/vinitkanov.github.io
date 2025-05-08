import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        <span className="w-24 h-24 inline-block mr-2">
          <img src="/mini.svg" alt="logo" />
        </span>
      </h1>
      <div className="space-x-6 mb-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About Me</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
      <div className="flex justify-center space-x-4 text-xl mb-6">
        <a href="https://github.com/" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>
      </div>
      <p className="text-xs text-gray-400">© 2025 MuhammadKhalid All Rights Reserved , Inc.</p>
    </footer>
  )
}

export default Footer
