import { useNavigate, useParams } from "react-router-dom";
import { categoryLabels, products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  return (
    <section>
      <button type="button" className="btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>
      {product ? (
        <article className="product-details">
          <h1>{product.name}</h1>
          <p>
            <strong>Категорія:</strong> {categoryLabels[product.category]}
          </p>
          <p>
            <strong>Ціна:</strong> {product.price.toLocaleString("uk-UA")} грн
          </p>
          <p>{product.description}</p>
          <p className="muted">ID: {product.id}</p>
        </article>
      ) : (
        <div className="not-found">
          <h1>Товар не знайдено</h1>
          <p>Товару з id «{id}» не існує.</p>
        </div>
      )}
    </section>
  );
}
