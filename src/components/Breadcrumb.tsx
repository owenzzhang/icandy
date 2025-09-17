import { Link, useLocation } from "react-router";

function BreadCrumb() {
  const location = useLocation();
  const bread = location.pathname.split("/").filter(Boolean);

  return (
    <div className="container mx-auto md:px-7">
      <ol className="text-gray-50 flex flex-row gap-2 mb-4 md:text-base text-sm">
        {bread.map((item, index) => (
          <li>
            <Link
              to={`/${bread.slice(0, index + 1).join("/")}`}
              key={index}
              className={`capitalize mr-2 ${
                index === bread.length - 1 ? "text-[#F6B600]" : "text-gray-50"
              }`}
            >
              {item}
            </Link>
            {index < bread.length - 1 && <span>|</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BreadCrumb;
