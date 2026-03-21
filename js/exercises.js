// exercises.js - Interactive exercises handler

document.addEventListener('DOMContentLoaded', function() {
  const answers = document.querySelectorAll('.answer');

  answers.forEach(button => {
    button.addEventListener('click', function() {
      const isCorrect = this.hasAttribute('data-correct');
      const feedback = this.parentElement.querySelector('.feedback');

      if (isCorrect) {
        feedback.textContent = 'Saktë! 🎉';
        feedback.style.color = 'green';
      } else {
        feedback.textContent = 'Gabim. Provo përsëri. ❌';
        feedback.style.color = 'red';
      }
    });
  });
});