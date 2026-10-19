import { Link, useSearchParams } from "react-router-dom";
import { products, type Category } from "../data/products";

type Filter = "all" | Category;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Усі" },
  { value: "phones", label: "Телефони" },
  { value: "laptops", label: "Ноутбуки" },
];

const isFilter = (value: string | null): value is Filter =>
  filters.some((f) => f.value === value);

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("category");
  const current: Filter = isFilter(param) ? param : "all";

  const handleFilter = (value: Filter) => {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  const visible =
    current === "all" ? products : products.filter((p) => p.category === current);

  return (
    <section>
      <h1>Каталог</h1>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={f.value === current ? "btn active" : "btn"}
            onClick={() => handleFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="product-list">
        {visible.map((p) => (
          <li key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p className="price">{p.price.toLocaleString("uk-UA")} грн</p>
            <Link to={`/products/${p.id}`}>Детальніше</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
