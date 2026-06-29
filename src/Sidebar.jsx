import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/instalacion', label: '2.1.1 Instalación' },
  { to: '/active-directory', label: '2.1.2 Active Directory' },
  { to: '/cliente', label: '2.1.3 Cliente' },
  { to: '/servicios-red', label: '2.1.4 Servicios de Red' },
  { to: '/gpo', label: '2.1.5 GPO' },
  { to: '/prompts', label: 'Bitácora IA' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <p className="sidebar-eyebrow">Wiki técnica</p>
        <h1>Jerale Lab</h1>
        <p className="sidebar-subtitle">Windows Server en VirtualBox</p>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
