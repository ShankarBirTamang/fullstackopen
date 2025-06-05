import { createRoot } from "react-dom/client";
import App from "./App";

let notes=[
    {id: 1, content: "HTML is easy", date: "2023-01-01", important: true},
    {id: 2, content: "Browser can execute only JavaScript", date: "2023-01-02", important: false},
    {id: 3, content: "GET and POST are the most important methods of HTTP protocol", date: "2023-01-03", important: true},
    {id: 4, content: "CSS is used for styling web pages", date: "2023-01-04", important: false},
]

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App notes={notes}/>);
