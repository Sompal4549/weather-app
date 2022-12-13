import * as ReactDOM from "react-dom/client";
import { createStandaloneToast } from "@chakra-ui/toast";
import App from "./App";
const { ToastContainer, toast } = createStandaloneToast();

// render the ToastContainer in your React root
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
    <App />
    <ToastContainer />
  </>
);

toast({ title: "Chakra UI" });
