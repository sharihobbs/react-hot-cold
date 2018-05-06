export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
  type: RESTART_GAME,
  correctAnswer
});


export const AURAL_FEEDBACK = 'AURAL_FEEDBACK';
export const auralFeedback = () => ({
  type: AURAL_FEEDBACK
})
