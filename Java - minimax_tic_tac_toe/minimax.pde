void bestMove() {
  // AI to make its turn
  int bestScore = -1000;
  int movei = 0;
  int movej = 0;
  int open = 0;
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      // Is the spot available?
      if (board[i][j] == 'n') {
        open++;
        board[i][j] = ai;
        int score = minimax(board, false);
        board[i][j] = 'n';
        if (score > bestScore) {
          bestScore = score;
          movei = i;
          movej = j;
        }
      }
    }
  }
  if(open != 0){
  board[movei][movej] = ai;
  }
  currentPlayer = human;
}


int minimax(char board[][], boolean isMaximizing) {
  int result = checkWinner();
  if(result == 1){
    return result;
  }
  if(result == -1){
    return result;
  }
  if(result == 0){
    return result;
  }
  
  if (isMaximizing) {
    int bestScore = -1000;
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == 'n') {
          board[i][j] = ai;
          int score = minimax(board, false);
          board[i][j] = 'n';
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    int bestScore = 1000;
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == 'n') {
          board[i][j] = human;
          int score = minimax(board, true);
          board[i][j] = 'n';
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}
