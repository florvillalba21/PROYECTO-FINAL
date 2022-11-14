import { Link } from "react-router-dom";

export const BuscadorDom = () => {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input
            className="search_input"
            type="text"
            name=""
            placeholder="Search..."
          />
          <Link href="#" class="search_icon">
            <i class="fas fa-search"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
