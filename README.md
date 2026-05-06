# 🍽️ RecipeVault

RecipeVault is a modern and responsive recipe browsing web application built using **React**.  
It allows users to explore recipes, filter by categories, search meals, and save their favorite recipes for later.


# Check Recipe Vault Site

Link : [https://recipevaultassesment.netlify.app/login](https://recipe-vault-task-1.netlify.app/login)
---

# Screen_Shots

<img width="1703" height="961" alt="recipeVault LoginPage" src="https://github.com/user-attachments/assets/7bdf136b-5cc6-4857-912a-2ebbda14c506" />

<img width="1885" height="979" alt="RecipeVault LogoutPage" src="https://github.com/user-attachments/assets/b9592348-aa7b-4dab-a322-8393bc91cfbd" />

<img width="1834" height="968" alt="RecipeVault MainPage" src="https://github.com/user-attachments/assets/ae510a0c-a58a-4c73-b310-95fb132a0bcd" />

<img width="469" height="846" alt="RecipeVault MobileResponisve" src="https://github.com/user-attachments/assets/b03c994d-7f77-400c-8838-c43f5e5122b8" />



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
