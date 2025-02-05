# Next.js Blog App

## **Get Started**

Clone the repository:

```bash
git clone https://github.com/atlantiS2k/shadcn-ui-app
```

Install dependencies:

```bash
npm i or yarn
```

Run the development server:

```bash
npm run dev or yarn dev
```

---



### **Main Page**
**Description:**

- Lazy-loaded posts displayed for optimized performance.

### **SSR Page**


**Description:**

- Fully Server-Side Rendered (SSR).
- Search and pagination implemented using SSR.
- Optimized for SEO.

**Description:**

- Client-Side Rendering (CSR) with **Zustand** for state management.
- Implements "Load More" functionality.

**Description:**

- Dynamically generated sitemap for better robot indexing of both dynamic and static pages.

---

## **Architecture**

The application follows the **Feature-Sliced Design (FSD)** architecture. Learn more about FSD: [https://feature-sliced.design/ru/docs](https://feature-sliced.design/ru/docs)

### **API**

- Uses **fetch** and **react-query** for data fetching and caching.

### **State Management**

- Powered by **Zustand** for efficient and lightweight state management.

### **Patterns**

- **Adapter (Mappers):** Used to structure API results.

---

## **Tools and Technologies**

- **Framework:** Next.js
- **Testing:** Jest
- **State Management:** Zustand
- **Data Fetching:** React Query, Fetch
- **Rendering:** SSR, CSR
- **SEO:** Metadata
- **UI Library:** ShadCn UI
- **Styling:** Tailwind CSS
- **Themes:** Next Themes
- **Code Quality:** Husky, Prettier

### **Additional Notes:**

- **Husky:** Pre-commit hooks are set up to enforce Prettier formatting. Additional commands can be added if needed (e.g., checking commit messages).

---
