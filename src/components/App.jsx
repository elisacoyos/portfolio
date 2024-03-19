import { useEffect } from 'react';

import Header from './Header/Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { ThemeProvider } from '../utils/context/context';
import GlobalStyle from '../style/GlobalStyle';

export default function App() {

  useEffect(() => {
    document.title = `Elisa COYOS`
  }, [])

  return (
    <ThemeProvider>
      <GlobalStyle  />
      <div className="App">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
