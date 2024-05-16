import { Link } from "react-router-dom";

const StoresNearYou = () => {
  return (
    <section aria-labelledby="Stores near you">
      <div className="container mx-auto rounded-sm bg-purple-100 py-4">
        <div className="flex items-center justify-center gap-4">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
            <path
              fillRule="evenodd"
              d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
              clipRule="evenodd"
            />
          </svg>

          <p>Find Shops Near You</p>
          <Link to="contact" className="btn btn-outline">
            Find Store
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoresNearYou;
