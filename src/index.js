import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './pages/home/home';
import Questions from './components/QuestionComponent/Questions';
import Notifications from './components/Notification/Notifications/Notifications';
import QuestionWrapper from './components/AnswerQuestion/Wrapper/QuestionWrapper';
import BookMarks from './components/BookMark/Bookmarks/Bookmarks'
import Auth from './pages/auth/auth';
import SignIn from './components/auths/signIn';
import SignUp from './components/auths/signUp';
import Profile from './components/auths/profile';

import ManageStud from './components/ManageStudents/ManageStud';
import Analysis from './components/Analysis/Analysis';
import MainEditor from './components/EditorMain/mainEditor';
import QuestionEditorProvider from './contexts/questionEditorContext/questionEditorProvider';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>component not yet created, please create it🤷‍♂️😎!!!</h1>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "questions",
        element: <Questions />
      },

      {
        path: "notifications",
        element: <Notifications />
      },

      {
        path: "answer-question",
        element: <QuestionWrapper />
      },

      {
        path: "bookemarked-questions",
        element: <BookMarks />
      },

      {
        path: "create-questions",
        element: (
          <QuestionEditorProvider>
            {" "}
            <MainEditor />
          </QuestionEditorProvider>
        )
      },

      {
        path: "manage-students",
        element: <ManageStud />,
        children: [
          {
            path: "analysis",
            element: <Analysis />
          }
        ]
      }
    ]
  },

  //authentication routes

  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "create-profile",
        element: <Profile />
      }
    ]
  },

  //tesing the editor component
  {
    path: "editor",
    element: <MainEditor />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={Router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
