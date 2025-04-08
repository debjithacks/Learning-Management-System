# 📚 LMS - Learning Management System

A full-stack Learning Management System (LMS) web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** for managing users, courses, and admin functionality. Designed for seamless online learning experiences, this platform is ideal for educational institutions and personal e-learning projects.

---

## 🚀 Features

- 🧑‍🏫 Admin Dashboard
  - Add/Edit/Delete Courses
  - Manage Users
  - View Course Enrollments

- 🙋‍♂️ User Dashboard
  - Register/Login (Authentication)
  - View Available Courses
  - Enroll in Courses

- 📂 Course Management
  - Course List with Details
  - EJS Templating for Dynamic Pages
  - Flash Messages for Feedback

- 🔐 Authentication & Authorization
  - Secure login system
  - Admin/User role management

---

## 🛠️ Tech Stack

| Tech          | Usage                          |
|---------------|--------------------------------|
| Node.js       | Runtime environment            |
| Express.js    | Backend framework              |
| MongoDB       | Database (Mongoose ORM)        |
| EJS           | Templating engine              |
| Bootstrap     | UI styling                     |
| Express-Layouts | Layout management            |
| dotenv        | Environment variable handling  |

---

## 📂 Folder Structure

```
LMS/
├── routes/
│   ├── admin.js
│   └── user.js
├── models/
│   └── user.js
├── views/
│   ├── admin.ejs
│   ├── admin-course.ejs
│   ├── partials/
│   └── ...
├── middleware.js
├── app.js
├── .env
└── package.json
```

---

## 🧪 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/debjithacks/TryLMS.git
cd TryLMS

# 2. Install dependencies
npm install

# 3. Set up environment variables
Create a `.env` file in root and add:
MONGO_URI=your_mongodb_uri
PORT=5000
SECRET=your_secret_key

# 4. Run the application
node app.js
```

---

## 🧠 Future Enhancements

- ✅ Course completion tracking  
- ✅ Certificate generation  
- ✅ Payment gateway integration  
- ✅ Video streaming for lessons  
- ✅ Student progress analytics

---

## 📸 Screenshots

*(Add screenshots of your project here — login page, admin dashboard, course list, etc.)*

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🔗 Connect with Me

- [LinkedIn](https://www.linkedin.com/in/debjitghosh03/)
- [GitHub](https://github.com/debjithacks)
