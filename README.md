# 🍽️ RecipeVault

RecipeVault is a modern and responsive recipe browsing web application built using **React**.  
It allows users to explore recipes, filter by categories, search meals, and save their favorite recipes for later.

---

## 🚀 Features

- Browse a wide variety of recipes
- Search recipes by name
- Filter recipes by category
- Add and remove recipes from favorites
- Responsive design for desktop and mobile devices
- Clean and user-friendly UI
- Smooth horizontal category scrolling on mobile

---

## 🛠️ Tech Stack

- **Frontend:** React
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Styling:** CSS 
- **Icons:** React Icons
- **API:** [TheMealDB](https://www.themealdb.com)

---

## 📱 Responsive Design

### Desktop
- Sidebar layout with vertical navigation

### Mobile
- Sidebar converts to a top navigation bar
- Categories displayed as horizontally scrollable chips
- Optimized layout for all mobile screen sizes

---

## 📂 Project Structure
src/
│
├─ components/
│  ├─ AppLayout.jsx
│  ├─ ProtectedRoute.jsx
│  ├─ Sidebar.jsx
│  ├─ RecipeCard.jsx
│  └─ styles/
│     └─ Sidebar.css
│
├─ pages/
│  ├─ Recipes.jsx
│  ├─ Login.jsx
│  ├─ Logout.jsx
│  ├─ RecipeDetail.jsx
│  ├─ Recipes.jsx
│  └─ styles/
│    ├─ Favorites.module.css
│    ├─ Login.css
│    ├─ RecipeDetails.css
│    ├─ Setting.module.css
│    └─ Recipes.css
|
├─ context/
│  ├─ FavoritesContext.jsx
│  └─ AuthContext.jsx
|
|
├─ hooks
│  └─ useLocalSTorage.js
│
├─ index.css
├─ App.jsx
└─ main.jsx

### Password Credentials for login

Email: bharath@demo.com
Password: cook123


Link for rep: https://github.com/Bharathraj9159/Recipe_Vault
