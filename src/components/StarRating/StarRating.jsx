import React from "react";

const RatingSystem = ({ rating, handleRatingChange }) => {
  return (
    <div>
      <h2>Rating: {rating}</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingChange(value)}
            style={{
              backgroundColor: value <= rating ? "gold" : "gray",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingSystem;

// import React from "react";
// import { Rate } from "antd";
// import { IoAccessibilityOutline } from "react-icons/io5";
// import "./StarRating.css";

// const StarRating = () => {
//   return (
//     <section className="ratings-container">
//       <div className="rating-container-with-icon">
//         <IoAccessibilityOutline />
//         <div className="rating-container">
//           <Rate
//             defaultValue={0}
//             allowHalf
//             allowClear={false}
//             character="-"
//             id=""
//           />
//           <button>Rate</button>
//         </div>
//       </div>
//       <div className="rating-container">
//         <IoAccessibilityOutline />
//         <Rate
//           defaultValue={0}
//           allowHalf
//           allowClear={false}
//           character="-"
//           id=""
//         />
//       </div>
//       <div className="rating-container">
//         <IoAccessibilityOutline />
//         <Rate
//           defaultValue={0}
//           allowHalf
//           allowClear={false}
//           character="-"
//           id=""
//         />
//       </div>
//       <div className="rating-container">
//         <IoAccessibilityOutline />
//         <Rate
//           defaultValue={0}
//           allowHalf
//           allowClear={false}
//           character="-"
//           id=""
//         />
//       </div>
//       <div className="rating-container">
//         <IoAccessibilityOutline />
//         <Rate
//           defaultValue={0}
//           allowHalf
//           allowClear={false}
//           character="-"
//           id=""
//         />
//       </div>
//     </section>
//   );
// };

// export default StarRating;
