import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./App";
import App from "./ReactQueryApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
// import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
