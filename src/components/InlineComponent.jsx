//  ----------- Inline Style ---------
// import React from "react";
// const header = { color: "blue", fontSize: "100px" };
// export default function InlineComponent() {
//   return (
//     <div>
//       {/* <h1 style={{ color: "blue", fontSize: "100px" }}>Inline Component</h1> */}
//       <h1 style={header}>Inline Component</h1>
//     </div>
//   );
// }

//  -----------  Style Sheet ---------

// import React from "react";
// import "../css/style.css";
// export default function InlineComponent() {
//   return (
//     <div>
//       <h1 className="header">Inline Component</h1>
//     </div>
//   );
// }

//  ----------- CSS Module ---------
import React from "react";

import styles from "./inlinecomponent.module.css";

export default function InlineComponent() {
  return (
    <div>
      <h1 className={styles.header}>Inline Component</h1>
    </div>
  );
}
