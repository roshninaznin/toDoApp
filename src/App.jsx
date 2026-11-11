// import { useState } from "react";
// import Todo from "./components/Todo";
// import InlineComponent from "./components/InlineComponent";
// import OutlineComponent from "./components/OutlineComponent";

// function App() {
//   return (
//     <>
//       <InlineComponent />

//       <OutlineComponent />
//       {/* <Todo /> */}
//     </>
//   );
// }

// export default App;

import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";

function App() {
  return (
    <>
      <OutlineComponent />
      <InlineComponent />
    </>
  );
}

export default App;
