import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cmd from './cmd';
import Miyazawa from './miyazawa';
import Shirashoji from './shirashoji';
import Traveler from './traveler';
import Wsan from './wsan';


export const Members = () => {
  return (
    <div>
      <Routes>
        <Route path="chutoro_Detteiu" element={<Cmd />} />
        <Route path="cmd_exe" element={<Cmd />} />
        <Route path="cmd" element={<Cmd />} />
        <Route path="miyazawa" element={<Miyazawa />} />
        <Route path="shirashoji" element={<Shirashoji />} />
        <Route path="traveler" element={<Traveler />} />
        <Route path="Traveler__" element={<Traveler />} />
        <Route path="wsan" element={<Wsan />} />
      </Routes>
    </div>
  );
}


export default Members;
