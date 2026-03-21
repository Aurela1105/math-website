import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { levels } from '../data/levels';
import { grade1Chapters } from '../data/grade1Chapters';
import { grade2Chapters } from '../data/grade2Chapters';
import { grade3Chapters } from '../data/grade3Chapters';
import { grade4Chapters } from '../data/grade4Chapters';
import { grade5Chapters } from '../data/grade5Chapters';
import { grade6Chapters } from '../data/grade6Chapters';
import { grade7Chapters } from '../data/grade7Chapters';
import { grade8Chapters } from '../data/grade8Chapters';
import { grade9Chapters } from '../data/grade9Chapters';
import { grade10Chapters } from '../data/grade10Chapters';
import { grade11Chapters } from '../data/grade11Chapters';
import { grade12Chapters } from '../data/grade12Chapters';
import CourseCard from '../components/Courses/CourseCard';
import Grade1Chapter from '../components/Courses/Grade1Chapter';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Courses.css';

export default function Courses() {
  const [searchParams] = useSearchParams();
  const selectedLevel = searchParams.get('level');
  const [filterLevel, setFilterLevel] = useState(selectedLevel || 'all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [openChapterId, setOpenChapterId] = useState<string | null>(null);
  const [openChapterIdGrade2, setOpenChapterIdGrade2] = useState<string | null>(null);
  const [openChapterIdGrade3, setOpenChapterIdGrade3] = useState<string | null>(null);
  const [openChapterIdGrade4, setOpenChapterIdGrade4] = useState<string | null>(null);
  const [openChapterIdGrade5, setOpenChapterIdGrade5] = useState<string | null>(null);
  const [openChapterIdGrade6, setOpenChapterIdGrade6] = useState<string | null>(null);
  const [openChapterIdGrade7, setOpenChapterIdGrade7] = useState<string | null>(null);
  const [openChapterIdGrade8, setOpenChapterIdGrade8] = useState<string | null>(null);
  const [openChapterIdGrade9, setOpenChapterIdGrade9] = useState<string | null>(null);
  const [openChapterIdGrade10, setOpenChapterIdGrade10] = useState<string | null>(null);
  const [openChapterIdGrade11, setOpenChapterIdGrade11] = useState<string | null>(null);
  const [openChapterIdGrade12, setOpenChapterIdGrade12] = useState<string | null>(null);

  const filteredCourses = filterLevel === 'all' 
    ? courses 
    : courses.filter(course => course.level === filterLevel);

  const selectedLevelData = filterLevel !== 'all' 
    ? levels.find(l => l.id === filterLevel) 
    : null;

  const handleChapterToggle = (chapterId: string) => {
    setOpenChapterId(openChapterId === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade2 = (chapterId: string) => {
    setOpenChapterIdGrade2(openChapterIdGrade2 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade3 = (chapterId: string) => {
    setOpenChapterIdGrade3(openChapterIdGrade3 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade4 = (chapterId: string) => {
    setOpenChapterIdGrade4(openChapterIdGrade4 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade5 = (chapterId: string) => {
    setOpenChapterIdGrade5(openChapterIdGrade5 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade6 = (chapterId: string) => {
    setOpenChapterIdGrade6(openChapterIdGrade6 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade7 = (chapterId: string) => {
    setOpenChapterIdGrade7(openChapterIdGrade7 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade8 = (chapterId: string) => {
    setOpenChapterIdGrade8(openChapterIdGrade8 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade9 = (chapterId: string) => {
    setOpenChapterIdGrade9(openChapterIdGrade9 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade10 = (chapterId: string) => {
    setOpenChapterIdGrade10(openChapterIdGrade10 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade11 = (chapterId: string) => {
    setOpenChapterIdGrade11(openChapterIdGrade11 === chapterId ? null : chapterId);
  };

  const handleChapterToggleGrade12 = (chapterId: string) => {
    setOpenChapterIdGrade12(openChapterIdGrade12 === chapterId ? null : chapterId);
  };

  return (
    <div className="courses-page">
      <FloatingCharacter emoji="📚" position="top-left" />
      <FloatingCharacter emoji="📖" position="top-right" />
      <FloatingCharacter emoji="✏️" position="bottom-left" />
      <FloatingCharacter emoji="🎓" position="bottom-right" />
      <div className="container">
        <h1 className="page-title">Kurse Matematike</h1>
        <p className="page-subtitle">
          Zgjidhni një kurs dhe filloni të mësoni
        </p>

        {/* Grade Filter */}
        <div className="grade-filter-section">
          <label htmlFor="grade-filter">Filtro sipas klasës:</label>
          <select 
            id="grade-filter"
            value={selectedGrade} 
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="grade-filter-select"
          >
            <option value="all">Të gjitha klasat</option>
            <option value="1">Klasa 1</option>
            <option value="2">Klasa 2</option>
            <option value="3">Klasa 3</option>
            <option value="4">Klasa 4</option>
            <option value="5">Klasa 5</option>
            <option value="6">Klasa 6</option>
            <option value="7">Klasa 7</option>
            <option value="8">Klasa 8</option>
            <option value="9">Klasa 9</option>
            <option value="10">Klasa 10</option>
            <option value="11">Klasa 11</option>
            <option value="12">Klasa 12</option>
          </select>
        </div>

        {/* Grades Section */}
        <section className="grades-section">
          <h2 className="grades-section-title">📚 Temat sipas Klasave</h2>
          
          {/* Klasa 1 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '1') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 1</h3>
            <div className="grade1-chapters-container">
              {grade1Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterId === chapter.id}
                  onToggle={() => handleChapterToggle(chapter.id)}
                  grade={1}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 2 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '2') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 2</h3>
            <div className="grade1-chapters-container">
              {grade2Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade2 === chapter.id}
                  onToggle={() => handleChapterToggleGrade2(chapter.id)}
                  grade={2}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 3 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '3') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 3</h3>
            <div className="grade1-chapters-container">
              {grade3Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade3 === chapter.id}
                  onToggle={() => handleChapterToggleGrade3(chapter.id)}
                  grade={3}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 4 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '4') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 4</h3>
            <div className="grade1-chapters-container">
              {grade4Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade4 === chapter.id}
                  onToggle={() => handleChapterToggleGrade4(chapter.id)}
                  grade={4}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 5 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '5') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 5</h3>
            <div className="grade1-chapters-container">
              {grade5Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade5 === chapter.id}
                  onToggle={() => handleChapterToggleGrade5(chapter.id)}
                  grade={5}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 6 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '6') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 6</h3>
            <div className="grade1-chapters-container">
              {grade6Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade6 === chapter.id}
                  onToggle={() => handleChapterToggleGrade6(chapter.id)}
                  grade={6}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 7 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '7') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 7</h3>
            <div className="grade1-chapters-container">
              {grade7Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade7 === chapter.id}
                  onToggle={() => handleChapterToggleGrade7(chapter.id)}
                  grade={7}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 8 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '8') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 8</h3>
            <div className="grade1-chapters-container">
              {grade8Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade8 === chapter.id}
                  onToggle={() => handleChapterToggleGrade8(chapter.id)}
                  grade={8}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 9 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '9') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 9</h3>
            <div className="grade1-chapters-container">
              {grade9Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade9 === chapter.id}
                  onToggle={() => handleChapterToggleGrade9(chapter.id)}
                  grade={9}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 10 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '10') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 10</h3>
            <div className="grade1-chapters-container">
              {grade10Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade10 === chapter.id}
                  onToggle={() => handleChapterToggleGrade10(chapter.id)}
                  grade={10}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 11 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '11') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 11</h3>
            <div className="grade1-chapters-container">
              {grade11Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade11 === chapter.id}
                  onToggle={() => handleChapterToggleGrade11(chapter.id)}
                  grade={11}
                />
              ))}
            </div>
          </div>
          )}

          {/* Klasa 12 - Me kapitullt e detajuara */}
          {(selectedGrade === 'all' || selectedGrade === '12') && (
          <div className="grade-group">
            <h3 className="grade-group-title">Klasa 12</h3>
            <div className="grade1-chapters-container">
              {grade12Chapters.map(chapter => (
                <Grade1Chapter 
                  key={chapter.id} 
                  chapter={chapter}
                  isOpen={openChapterIdGrade12 === chapter.id}
                  onToggle={() => handleChapterToggleGrade12(chapter.id)}
                  grade={12}
                />
              ))}
            </div>
          </div>
          )}
        </section>

        {/* Existing Courses Section */}
        <section className="existing-courses-section">
          <h2 className="section-divider-title">Kurse të Tjera</h2>
          
          <div className="filter-section">
            <label htmlFor="level-filter">Filtro sipas nivelit:</label>
            <select 
              id="level-filter"
              value={filterLevel} 
              onChange={(e) => setFilterLevel(e.target.value)}
              className="filter-select"
            >
              <option value="all">Të gjitha nivelet</option>
              {levels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name} - {level.ageRange} ({level.gradeRange})
                </option>
              ))}
            </select>
          </div>

          {selectedLevelData && (
            <div className="level-info-banner">
              <div className="level-badge-large" style={{ backgroundColor: selectedLevelData.color }}>
                {selectedLevelData.name}
              </div>
              <div className="level-details">
                <p><strong>Mosha:</strong> {selectedLevelData.ageRange}</p>
                <p><strong>Klasa:</strong> {selectedLevelData.gradeRange}</p>
                <p><strong>Topikët:</strong> {selectedLevelData.topics.join(', ')}</p>
              </div>
            </div>
          )}

          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="no-results">Nuk u gjetën kurse për këtë nivel.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

