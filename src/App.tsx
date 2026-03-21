import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import VisitTracker from './components/Analytics/VisitTracker';
import SoundHandler from './components/Common/SoundHandler';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import TopicDetail from './pages/TopicDetail';
import Exercises from './pages/Exercises';
import Games from './pages/Games';
import Tests from './pages/Tests';
import About from './pages/About';
import Worksheets from './pages/Worksheets';
import Search from './pages/Search';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <VisitTracker />
      <SoundHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurse" element={<Courses />} />
          <Route path="/kurse/:courseId" element={<CourseDetail />} />
          <Route path="/tema/:topicId" element={<TopicDetail />} />
          <Route path="/ushtrime" element={<Exercises />} />
          <Route path="/lojera" element={<Games />} />
          <Route path="/testime" element={<Tests />} />
          <Route path="/flete-pune" element={<Worksheets />} />
          <Route path="/kerko" element={<Search />} />
          <Route path="/rreth-nesh" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

