import { NavLink, Outlet } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-link active" : "nav-link";

export default function MainLayout() {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <NavLink to="/" end className={linkClass}>
            Головна
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Каталог
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer"> Магазин техніки</footer>
    </div>
  );
}
