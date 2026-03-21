import { useState } from 'react';
import { exercises } from '../data/exercises';
import { levels } from '../data/levels';
import DragDropExercise from '../components/Exercises/DragDropExercise';
import StepByStepSolution from '../components/Exercises/StepByStepSolution';
import ExerciseCard from '../components/Exercises/ExerciseCard';
import FloatingCharacter from '../components/Common/FloatingCharacter';
import './Exercises.css';

export default function Exercises() {
  const [filterLevel, setFilterLevel] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const filteredExercises = filterLevel === 'all'
    ? exercises
    : exercises.filter(ex => ex.level === filterLevel);

  const currentExercise = selectedExercise
    ? exercises.find(ex => ex.id === selectedExercise)
    : null;

  if (selectedExercise && currentExercise) {
    return (
      <div className="exercises-page">
        <FloatingCharacter emoji="✏️" position="top-left" />
        <FloatingCharacter emoji="📝" position="top-right" />
        <FloatingCharacter emoji="🔢" position="bottom-left" />
        <FloatingCharacter emoji="💡" position="bottom-right" />
        <div className="container">
          <button
            onClick={() => setSelectedExercise(null)}
            className="back-button"
          >
            ← Kthehu te Ushtrimet
          </button>

          <div className="exercise-viewer">
            <h2>{currentExercise.title}</h2>
            <p className="exercise-question-text">{currentExercise.question}</p>

            {currentExercise.type === 'drag-drop' && (
              <DragDropExercise
                question={currentExercise.question}
                options={currentExercise.options || []}
                correctOrder={[0, 1, 2, 3]}
                onComplete={(correct) => {
                  // Sound is already played in DragDropExercise component
                  alert(correct ? 'Saktë! +' + currentExercise.points + ' pikë' : 'Gabim, provoni përsëri');
                }}
              />
            )}

            {currentExercise.steps && (
              <StepByStepSolution
                title="Zgjidhja Hap pas Hapi"
                steps={currentExercise.steps.map((step, index) => ({
                  step: index + 1,
                  description: step,
                  explanation: `Hapi ${index + 1} i zgjidhjes`
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="exercises-page">
      <FloatingCharacter emoji="✏️" position="top-left" />
      <FloatingCharacter emoji="📝" position="top-right" />
      <FloatingCharacter emoji="🔢" position="bottom-left" />
      <FloatingCharacter emoji="💡" position="bottom-right" />
      <div className="container">
        <h1 className="page-title">Ushtrime Matematike</h1>
        <p className="page-subtitle">
          Praktikoni me ushtrime interaktive për të gjitha nivelet
        </p>

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
                {level.name}
              </option>
            ))}
          </select>
        </div>

        <div className="exercises-grid">
          {filteredExercises.map(exercise => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onClick={() => setSelectedExercise(exercise.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

