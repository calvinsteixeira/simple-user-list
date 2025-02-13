import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterComponent from "./routes";
import QueryProvider from "./providers/QueryProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <RouterComponent />
    </QueryProvider>
  </StrictMode>
);
