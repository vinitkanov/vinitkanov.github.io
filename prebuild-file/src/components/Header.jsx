const Header = ({ activeSection }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="flex justify-between items-center pr-8 pl-4 fixed w-full top-0 z-50 bg-[#130020]">
      <div className="cursor-pointer text-xl font-bold" onClick={() => window.location.reload()}>
        {/* Placeholder Logo */}
        <span className="text-white">
          <img src="/full.svg" alt="Logo" className="h-32 w-32 inline-block mr-2" />
        </span>
        <span className="text-purple-400"></span>
      </div>
      <nav className="space-x-6 text-sm">
        {['home', 'about', 'projects'].map((sec) => (
          <button
            key={sec}
            onClick={() => scrollTo(sec)}
            className={`${
              activeSection === sec ? 'text-purple-400' : 'text-white'
            } hover:text-purple-400`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
