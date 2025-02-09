// export const renderRatingIcon = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       if (rating > 0.5) {
//         stars.push(<i key={i} className="bi bi-star-fill"></i>);
//         rating--;
//       } else if (rating > 0 && rating < 1) {
//         stars.push(<i key={"half"} className="bi bi-star-half"></i>);
//         rating--;
//       } else {
//         stars.push(<i key={`empty ${i}`} className="bi bi-star"></i>);
//       }
//     }
//     return stars;
//   };
  
export const renderRatingIcon = (rating) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
        if (rating >= 1) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating -= 1;
        } else if (rating >= 0.5) {
            stars.push(<i key={`half-${i}`} className="bi bi-star-half"></i>);
            rating = 0;
        } else {
            stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
        }
    }
  
    return stars;
};
