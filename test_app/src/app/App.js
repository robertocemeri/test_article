import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from '../screens/SignUp';
import Articles from '../screens/Articles';
import DashboardTheme from './theme/style-screens/DashboardTheme';
import appStorage from "../helpers/appStorage";
import SignIn from '../screens/SignIn';
import MyArticles from '../screens/MyArticles';
import NewArticle from '../screens/NewArticle';
import ViewArticle from '../screens/ViewArticle';

const Storage = appStorage();

function App() {
  const loggedUser = Storage.getUser();

  if (loggedUser === null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <DashboardTheme>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/home" element={<Articles />} />
          <Route path="/my-articles" element={<MyArticles />} />
          <Route path="/article/new" element={<NewArticle />} />
          <Route path="/article/:id" element={<ViewArticle />} />
        </Routes>
      </DashboardTheme>
    </Router>
  );
}

export default App;