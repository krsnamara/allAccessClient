import "./NavAll.css";

export default function NavAll() {
  return (
    <div className="nav-all">
      <input
        type="checkbox"
        id="nav-all-checkbox"
        className="nav-all-checkbox"
      />
      <label htmlFor="nav-all-checkbox" className="nav-all-icon">
        <svg
          width="35"
          height="35"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nav-svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="29"
            height="29"
            rx="14.5"
            fill="none"
            stroke="#2B2C2B"
            className="nav-all-rect"
          />
          <path
            d="M11.8564 11.2246L9.03219 19H7.87789L11.1298 10.4688H11.874L11.8564 11.2246ZM14.2236 19L11.3935 11.2246L11.3759 10.4688H12.1201L15.3837 19H14.2236ZM14.0771 15.8418V16.7676H9.28414V15.8418H14.0771ZM18 10V19H16.9102V10H18ZM21.378 10V19H20.2881V10H21.378Z"
            className="nav-all-line"
          />
        </svg>
      </label>
    </div>
  );
}
