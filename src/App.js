import { 
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';

import MainMenu from './pages/MainMenu';
import MenuVocabulary from './pages/MenuVocabulary';
import MenuPhrase from './pages/MenuPhrase';
import About from './pages/About';
import Quiz from "./pages/Quiz";

const App = () => {

  const router = createBrowserRouter([
    { 
      path: '/unati', 
      element: <MainMenu />
    },  
    { 
      path: '/menuVocabulary', 
      element: <MenuVocabulary />
    },
    { 
      path: '/menuPhrases', 
      element: <MenuPhrase />
    },
    { 
      path: '/quiz', 
      element: <Quiz />
    },    
    { 
      path: '/about', 
      element: <About />
    },       
  ])    

  return(
    <main>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
