import { useState } from "react";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  /** lastCategory: this variable keep track of the category of the
   last processed product to determine when
   to insert a new category row */
  let lastCategory = null;

  products.forEach((product) => {
    /** if the product's name does not contain the filterText,
     * its skipped and the loop move to the next product
     */
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    // console.log(product.name.toLowerCase().indexOf(filterText.toLowerCase()));
    // console.log(inStockOnly && !product.stocked);

    /** if the isStockOnly is true and the product is not in the
     * stock(product.stocked is false), its skipped and the loop
     * move to the next product
     */
    if (inStockOnly && !product.stocked) {
      return;
    }

    /** if the current product category is different from the lastCategory
     * a new productCategoryRow comp is added to the rows array
     */
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  // console.log(rows[0]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        onChange={(e) => onFilterTextChange(e.target.value)}
        value={filterText}
        type="text"
        placeholder="Search..."
      />
      <br />
      <label>
        <input
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          checked={inStockOnly}
          type="checkbox"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{ margin: "30px" }}>
      <SearchBar
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
      <ProductTable
        products={products}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Pomegranate" },
  { category: "Fruits", price: "$1", stocked: true, name: "Pear" },
  { category: "Fruits", price: "$1", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$2", stocked: false, name: "Watermelon" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
