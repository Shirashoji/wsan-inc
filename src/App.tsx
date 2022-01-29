import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageB from './components/PageB';
import PageA from './components/PageA';
import MainPage from './components/MainPage';
import ImageMasonry from './components/ImageMasonry';
import Navigator from './components/Navigator';
import Members from './components/members/Members';


function App() {
  return (
    <>
      <Navigator>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/PageA" element={<PageA />} />
            <Route path="/PageB" element={<PageB />} />;
            <Route path="/Images" element={<ImageMasonry />} />;
            <Route path="/members/*" element={<Members />} />;
          </Routes>
        </BrowserRouter>
      </Navigator>
    </>
  );
}


export default App;
