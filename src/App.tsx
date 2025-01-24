import { BrowserRouter } from "react-router-dom";
import Stack from "./stack/Stack";

function App() {
  return (
    <>
      <BrowserRouter>
        <Stack />
      </BrowserRouter>
    </>
  );
}

export default App;