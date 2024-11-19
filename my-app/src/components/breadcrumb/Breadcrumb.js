import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Breadcrumb.css'

const Breadcrumb = ({ product, department }) => {
  const location = useLocation();

  const breadcrumbItems = [];
  if (product) {
    breadcrumbItems.push(
      { path: "/", label: "Home" },
      { path: `/department/${product.department}`, label: product.department },
      { path: location.pathname, label: product.name }
    );
  } else if(department) {
    breadcrumbItems.push(
      { path: "/", label: "Home" },
      { path: `/department/${department}`, label: department },
    );
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li
            key={item.path}
            className={`breadcrumb-item ${
              index === breadcrumbItems.length - 1 ? "active" : ""
            }`}
            aria-current={index === breadcrumbItems.length - 1 ? "page" : undefined}
          >
            {index === breadcrumbItems.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
