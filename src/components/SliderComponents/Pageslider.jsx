import React from "react";

export default function Pageslider({
  totalItem,
  currentPage,
  paginate,
  ProductperPage,
  nextpage,
  prevpage,
}) {
  const pagenumbers = [];
  for (var i = 1; i <= Math.ceil(totalItem / ProductperPage); i++) {
    pagenumbers.push(i);
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center align-content-center mt-4">
          <li style={{ margin: "0 5px" }}>
            <button
              className="btn btn-outline-danger"
              onClick={prevpage}
              disabled={currentPage === 1}
            >
              قبلی
            </button>
          </li>
          {pagenumbers.map((number) => (
            <li
              key={number}
              style={{
                margin: "0 5px",
                fontWeight: number === currentPage ? "bold" : "normal",
              }}
            >
              <button
                className="btn btn-outline-danger"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li style={{ margin: "0 5px" }}>
            <button
              className="btn btn-outline-danger"
              onClick={nextpage}
              disabled={currentPage === pagenumbers.length}
            >
              بعدی
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
