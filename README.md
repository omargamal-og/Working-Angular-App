# 🧾 Simple Products Dashboard (Angular)

A simple Angular application that demonstrates core Angular concepts such as routing, guards, services, and CRUD operations using a mocked API.

---

## 🚀 Features
- Mock authentication (login/logout)
- Route protection using AuthGuard
- Products dashboard
- Add & delete products
- Stock status handling
- Clean component & service separation

---

## 🛠 Tech Stack
- Angular 15+
- TypeScript
- Angular Router
- RxJS
- Bootstrap 5
- Mock services (in-memory data)

---
##  Project Structure
```
src/app/
│── auth/
│ ├── login.component.ts
│ ├── auth.service.ts
│ └── auth.guard.ts
│
│── products/
│ ├── products.component.ts
│ └── product.service.ts
│
│── app.routes.ts
│── app.component.ts
```

---

##  How to Run
```
npm install
ng serve
