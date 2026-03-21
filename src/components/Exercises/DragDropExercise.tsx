import { useState } from 'react';
import { playSuccessSound, playErrorSound } from '../../utils/sounds';
import './DragDropExercise.css';

interface DragDropExerciseProps {
  question: string;
  options: string[];
  correctOrder: number[];
  onComplete: (correct: boolean) => void;
}

export default function DragDropExercise({
  question,
  options,
  correctOrder,
  onComplete
}: DragDropExerciseProps) {
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [droppedItems, setDroppedItems] = useState<(number | null)[]>(
    new Array(correctOrder.length).fill(null)
  );
  const [availableItems, setAvailableItems] = useState<number[]>(
    options.map((_, index) => index)
  );

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedItem === null) return;

    const newDroppedItems = [...droppedItems];
    const newAvailableItems = [...availableItems];

    // If there's already an item in the drop zone, return it to available
    if (newDroppedItems[dropIndex] !== null) {
      newAvailableItems.push(newDroppedItems[dropIndex]!);
    }

    // Remove from available and add to dropped
    newAvailableItems.splice(newAvailableItems.indexOf(draggedItem), 1);
    newDroppedItems[dropIndex] = draggedItem;

    setDroppedItems(newDroppedItems);
    setAvailableItems(newAvailableItems);
    setDraggedItem(null);

    // Check if all items are placed
    if (newDroppedItems.every(item => item !== null)) {
      const isCorrect = newDroppedItems.every(
        (item, index) => item === correctOrder[index]
      );
      if (isCorrect) {
        playSuccessSound();
      } else {
        playErrorSound();
      }
      onComplete(isCorrect);
    }
  };

  const handleRemove = (dropIndex: number) => {
    const item = droppedItems[dropIndex];
    if (item !== null) {
      const newDroppedItems = [...droppedItems];
      const newAvailableItems = [...availableItems];
      newDroppedItems[dropIndex] = null;
      newAvailableItems.push(item);
      setDroppedItems(newDroppedItems);
      setAvailableItems(newAvailableItems);
    }
  };

  return (
    <div className="drag-drop-exercise">
      <h3 className="exercise-question">{question}</h3>
      
      <div className="drop-zones">
        {droppedItems.map((item, index) => (
          <div
            key={index}
            className={`drop-zone ${item !== null ? 'filled' : ''}`}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {item !== null ? (
              <div className="dropped-item">
                <span>{options[item]}</span>
                <button
                  onClick={() => handleRemove(index)}
                  className="remove-button"
                >
                  ×
                </button>
              </div>
            ) : (
              <span className="drop-zone-placeholder">
                Vendosni këtu ({index + 1})
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="available-items">
        <h4>Opsionet:</h4>
        <div className="items-container">
          {availableItems.map((index) => (
            <div
              key={index}
              className="draggable-item"
              draggable
              onDragStart={() => handleDragStart(index)}
            >
              {options[index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

