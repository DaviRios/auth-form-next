# Next.js Auth Form — Best Practices with Server Components, Actions, Middleware, Zod & TypeScript

This project is a simple and practical study of modern authentication in **Next.js**, focusing on the most up-to-date features of the framework, such as **Server Components**, **Server Actions**, **Middleware**, and validation with **Zod**.

---

## Tech Stack

- **Next.js (App Router)**
- **React 18 Server Components**
- **Server Actions & Route Handlers**
- **Middleware for access control**
- **Session-based Authentication**
- **Zod for schema validation**
- **TypeScript for type safety**
- **Tailwind CSS for styling**

---

## Project Goals

- Practice **safe and typed form validation** using Zod.
- Apply **modern authentication patterns** with built-in Next.js tools.
- Understand how **middleware, cookies, and server logic** work together.
- Use **`useFormState`** and **`useFormStatus`** for user-friendly UX.

---

## Folder Structure

```bash
app/
├── signup/
│   ├── form.tsx       # Client component with form UI
│   ├── actions.ts     # Server action with Zod validation
│   └── page.tsx       # Signup route layout
│
├── _lib/              # Shared types and session helpers
│   └── definitions.ts
│
├── middleware.ts      # Access control with cookies/session
├── tailwind.config.js # Tailwind configuration

```

## Auth Flow


- Diagram inspired by official Next.js documentation: Server Components, Actions, Middleware, Auth stages

## How to Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

