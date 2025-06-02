### **Key Topics Covered in Part 0**

#### **1. How Web Apps Work**

- **Client-Server Model**:
  - The browser (**client**) requests data from a **server** via HTTP/HTTPS.
  - Servers process requests and return responses (HTML, JSON, etc.).
- **HTTP Protocol**:
  - Defines communication between clients and servers (e.g., `GET`, `POST`, `PUT`, `DELETE`).
  - Stateless nature: Each request is independent unless sessions/cookies are used.

#### **2. Traditional Websites vs. Single-Page Apps (SPAs)**

- **Traditional (Multi-Page Apps)**:
  - Server renders **full HTML pages** for every user action (e.g., clicking a link).
  - Slower due to full page reloads.
- **SPAs (e.g., React, Angular)**:
  - **Single HTML page** dynamically updated via JavaScript.
  - Faster UX; communicates with servers via APIs (JSON data).

#### **3. JavaScript’s Role in Web Apps**

- **Dynamic Content**: Manipulates the DOM to update pages without reloading.
- **Event Handling**: Responds to user actions (clicks, form submissions).
- **Async Operations**: Fetching data from servers (**AJAX**/`fetch` API).

#### **4. Debugging & Developer Tools**

- **Chrome DevTools**:
  - Inspect HTML/CSS, debug JavaScript (`Console` tab).
  - Monitor network requests (`Network` tab).
  - Analyze performance (`Performance` tab).
- **`console.log`**: Basic debugging tool.

#### **5. Core Concepts**

- **DOM (Document Object Model)**:
  - Tree-like representation of HTML; JavaScript modifies it to change UI.
- **APIs (Application Programming Interfaces)**:
  - Rules for how software components interact (e.g., REST APIs).
- **JSON (JavaScript Object Notation)**:
  - Lightweight data format for client-server communication.

---

### **Why This Matters**

- Part 0 explains the **"why"** behind modern web development before teaching the **"how"** (React, Node.js, etc.).
- Understanding these fundamentals makes it easier to grasp later topics (e.g., React’s virtual DOM, RESTful backends).

### **Next Steps in the Course**

After Part 0, the course dives into:

- **Part 1**: React (frontend).
- **Part 2**: APIs, REST, connecting frontend to backend.
- **Part 3**: Backend with Node.js/Express.

---

### **Key Takeaways**

1. Web apps rely on **client-server communication** (HTTP/APIs).
2. SPAs **reduce page reloads** by using JavaScript to update the DOM.
3. Debugging tools (**DevTools**) are essential for development.
4. JSON is the **lingua franca** of web data exchange.
