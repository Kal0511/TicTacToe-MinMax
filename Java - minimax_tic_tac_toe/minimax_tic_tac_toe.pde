char board[][] = new char [3][3];

int w; // = width / 3;
int h; // = height / 3;

char ai = 'X';
char human = 'O';
char currentPlayer = human;
char start = 'y';

void setup() {
  frameRate(60);
  size(600, 600);
  w = width / 3;
  h = height / 3;
  for(int j=0;j<3;j++){
  for(int i=0;i<3;i++){
  board[i][j] = 'n';
  }
  }
}

void mousePressed() {
  if(start != 'y'){
  if (currentPlayer == human) {
    // Human make turn
    int i = round(mouseX / w);
    int j = round(mouseY / h);
    // If valid turn
    if (board[i][j] == 'n') {
      board[i][j] = human;
      currentPlayer = ai;
      bestMove();
    }
    }
  }
}

void keyPressed() {
    if (key == 'r' || key == 'R') {
      for(int j=0;j<3;j++){
      for(int i=0;i<3;i++){
      board[i][j] = 'n';
      }
      }
      start = 'y';
      loop();
    }
    
  if(spots(board) == 9 && start == 'y'){
  if (key == 'a' || key == 'A') {
    start = 'n';
    bestMove();
  }
  if (key == 'h' || key == 'H') {
    start = 'n';
  }
  }
}

void draw() {
  background(255);
  strokeWeight(5);

if(start != 'y'){
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
}
  
  if(start == 'y'){
  printText("Tic Tac Toe",96,width/2,height*0.2);
  printText("Press A to make the AI go first",36,width/2,height*2/3*0.9);
  printText("Press H for Human to go first",36,width/2,height*2/3*1.1);
  }

  for (int j = 0; j < 3; j++) {
    for (int i = 0; i < 3; i++) {
      int x = w * i + w / 2;
      int y = h * j + h / 2;
      char spot = board[i][j];
      int r = w / 4;
      if (spot == human) {
        noFill();
        ellipse(x, y, r * 2, r * 2);
      } else if (spot == ai) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
  
  int result = checkWinner();
  if (result == 1) {
    println("AI Wins!");
    printText("AI Wins!",128,width/2,height/2);
  }else if(result == -1){
    println("Human Wins!");
    printText("Human Wins!",90,width/2,height/2);
  }else if (result == 0){
    println("Draw!");
    printText("Draw!",128,width/2,height/2);
  }
  if(result == 1 || result == -1 || result == 0){
    printText("Press R to Reset",64,width/2,height*0.9);
    noLoop();
  }
  
}
