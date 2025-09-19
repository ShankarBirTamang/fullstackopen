import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./App";
// import { NotificationContextProvider } from "./NotificationContext";
// import store from "./store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <NotificationContextProvider>
//       <App />
//     </NotificationContextProvider>
//   </Provider>
// );

import App from "./ReactQueryApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationContextProvider } from "./NotificationContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>
  </QueryClientProvider>
);
