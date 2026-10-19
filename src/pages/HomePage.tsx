import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <h1>Магазин техніки</h1>
      <p>Телефони та ноутбуки за найкращими цінами.</p>
      <Link to="/products" className="btn">
        Перейти до каталогу
      </Link>
    </section>
  );
}
