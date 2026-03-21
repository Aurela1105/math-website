import { Exercise } from '../../types';
import { levels } from '../../data/levels';
import './ExerciseCard.css';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick: () => void;
}

export default function ExerciseCard({ exercise, onClick }: ExerciseCardProps) {
  const level = levels.find(l => l.id === exercise.level);
  const typeLabels = {
    'multiple-choice': 'Zgjedhje të shumëfishta',
    'fill-blank': 'Plotëso bosh',
    'calculation': 'Llogaritje',
    'drag-drop': 'Tërheq dhe Vendos'
  };

  return (
    <div onClick={onClick} className="exercise-card">
      <div className="exercise-header">
        <div 
          className="exercise-level-badge"
          style={{ backgroundColor: level?.color || '#gray' }}
        >
          {level?.name}
        </div>
        <span className="exercise-points">{exercise.points} pikë</span>
      </div>
      <h3 className="exercise-title">{exercise.title}</h3>
      <p className="exercise-question">{exercise.question}</p>
      <div className="exercise-type">
        {typeLabels[exercise.type] || exercise.type}
      </div>
      {exercise.steps && (
        <div className="exercise-has-steps">
          ✓ Ka zgjidhje hap pas hapi
        </div>
      )}
    </div>
  );
}

