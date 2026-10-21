# 🏙️ Integrated Complaint Management System

A web platform where citizens can register civic complaints (electricity, garbage and waste, water supply, etc.) and the Municipal Corporation (MNC) can view and resolve them.
<a href="https://your-live-demo-link.com](https://your-live-demo-link.com](https://integrated-complaint-management-sys.vercel.app">🔗 **Live Demo:** </a>

---

## 📌 Overview

Reporting a civic issue usually means long queues and phone calls with no follow-up. This system makes it easy:

- Citizens **register a complaint** online.
- The MNC **views all complaints** and **resolves** them.

---

## ✨ Features

### 👤 Citizen
- Register / log in
- Submit a complaint with title, description, category, and location
- Track complaint status (Pending → In Progress → Resolved)
- View complaint history

### 🏛️ MNC / Admin
- View all registered complaints
- Filter complaints by category or status
- Update status and mark complaints as resolved

---

## 🗂️ Complaint Categories

| Category | Examples |
|---|---|
| ⚡ Electricity | Power cuts, broken streetlights |
| 🗑️ Garbage & Waste | Uncollected garbage, overflowing bins |
| 💧 Water Supply | No water, low pressure, leakage |
| 🛣️ Roads | Potholes, damaged roads |
| 🚰 Drainage | Blocked drains, sewage overflow |
| 📋 Other | Any other civic issue |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |

---

## 📁 Project Structure

```
complaint-management-system/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── complaint_controller.js
│   │   │   ├── login_controller.js
│   │   │   └── register_controller.js
│   │   ├── middleware/
│   │   │   └── protectRoute.js
│   │   ├── models/
│   │   │   ├── complaint_model.js
│   │   │   ├── login_model.js
│   │   │   └── register_model.js
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── admin_page.html
│   ├── home_page.html
│   ├── home.html
│   ├── image_detection.html
│   ├── login.html
│   └── register.html
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above)
- MongoDB (local or Atlas)
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/complaint-management-system.git
cd complaint-management-system

# 2. Install backend dependencies
cd backend
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run the App

```bash
# Start the backend (from the backend folder)
node src/server.js
```

Then open `frontend/home.html` in your browser.

---

## 🔄 How It Works

1. Citizen registers and logs in.
2. Citizen submits a complaint with details.
3. The complaint appears on the MNC dashboard as **Pending**.
4. The MNC reviews it and works on it (**In Progress**).
5. Once fixed, the MNC marks it **Resolved**.
6. Citizen sees the updated status.

---

## 🔮 Future Improvements

- Email / SMS notifications
- Photo upload for complaints
- Live map view of complaints
- Mobile app
- Multi-language support

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Antara**
GitHub: [@your-username](https://github.com/your-username)
