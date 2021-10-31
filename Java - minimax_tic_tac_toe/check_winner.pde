int checkWinner() {
char winner = 'n';

  // horizontal
  for (int i = 0; i < 3; i++) {
    if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] != 'n') {
      winner = board[i][0];
    }
  }

  // Vertical
  for (int i = 0; i < 3; i++) {
    if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != 'n') {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 'n') {
    winner = board[0][0];
  }
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != 'n') {
    winner = board[2][0];
  }

  int openSpots = spots(board);

  if (winner == 'X') {
    return 1;
  }else if(winner == 'O'){
    return -1;
  }else if (openSpots == 0){
    return 0;
  }
  return 10;
}

void printText(String a, int s, float x, float y){
  textSize(s);
  textAlign(CENTER, CENTER);
for(int i = -1; i < 2; i++){
  fill(0);
  text(a, x+i*2,y);
  text(a, x,y+i*2);
  text(a, x+i*2,y+i*2);
  text(a, x-i*2,y+i*2);
}
fill(255);
text(a,x,y);
}

int spots(char a[][]){
int openSpots = 0;
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (a[i][j] == 'n') {
        openSpots++;
      }
    }
  }
return openSpots;
}
