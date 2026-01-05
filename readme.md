# Backend Mahasiswa API

Backend service untuk menyediakan data mahasiswa yang dikonsumsi oleh aplikasi Android (Java).  
API ini dibangun dengan **Express + TypeScript + Prisma ORM** dan terhubung ke **PostgreSQL**.

---

## 🚀 Tech Stack

### 🧠 Core
- **Node.js**
- **TypeScript** – type safety & maintainability
- **Express.js** – RESTful API framework

---

### 🗄️ Database
- **PostgreSQL**
- **Prisma ORM** – database access & migration tool
- **pg** – PostgreSQL driver

---

### 🧩 Architecture
- **Repository Pattern**
- **Service Layer**
- **Controller Layer**
- **Modular routing**

---

### 🔐 Utility & Middleware
- **dotenv** – environment variable management
- **cors** – Cross-Origin Resource Sharing
- **morgan** – HTTP request logging

---

### 🛠️ Development Tools
- **nodemon** – hot reload during development
- **ts-node** – run TypeScript directly
- **Prisma CLI** – migration & database tooling

---

## 📂 Project Structure

# Backend Mahasiswa API

Backend service untuk menyediakan data mahasiswa yang dikonsumsi oleh aplikasi Android (Java).  
API ini dibangun dengan **Express + TypeScript + Prisma ORM** dan terhubung ke **PostgreSQL**.

---

## 🚀 Tech Stack

### 🧠 Core
- **Node.js**
- **TypeScript** – type safety & maintainability
- **Express.js** – RESTful API framework

---

### 🗄️ Database
- **PostgreSQL**
- **Prisma ORM** – database access & migration tool
- **pg** – PostgreSQL driver

---

### 🧩 Architecture
- **Repository Pattern**
- **Service Layer**
- **Controller Layer**
- **Modular routing**

---

### 🔐 Utility & Middleware
- **dotenv** – environment variable management
- **cors** – Cross-Origin Resource Sharing
- **morgan** – HTTP request logging

---

### 🛠️ Development Tools
- **nodemon** – hot reload during development
- **ts-node** – run TypeScript directly
- **Prisma CLI** – migration & database tooling

---

## 🌐 API Endpoint

### 🔹 Get All Mahasiswa

GET /api/mahasiswa

### 🔹 Search Mahasiswa by Nama
GET /api/mahasiswa?nama=andi


---

## 📦 Response Format

```json
{
  "message": "success",
  "data": [
    {
      "id": 1,
      "nama": "Andi Saputra",
      "nim": "2021001",
      "jurusan": "Informatika"
    }
  ]
}
