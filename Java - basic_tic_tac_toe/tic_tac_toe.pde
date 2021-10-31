boolean player = true;

int[][] board = new int [3][3];

void setup() {
  size(500, 500);
  for (int j = 0; j < 3; j++) {
    for (int i = 0; i < 3; i++) {
      board[i][j] = 0;
    }
  }
}

void draw() {
  background(200);
  for (int i = 1; i < 3; i++) {
    line(width*i/3, 0, width*i/3, height);
    line(0, height*i/3, width, height*i/3);
  }
  for (int j = 0; j < 3; j++) {
    for (int i = 0; i < 3; i++) {
      if (board[i][j] == 1) {
        circle((i+0.5)/3*width, (j+0.5)/3*height, 20);
      }
      if (board[i][j] == 2) {
        rect((i+0.5)/3*width, (j+0.5)/3*height, 10, 10);
      }
    }
  }
}



void mousePressed() {
  println(mouseX*3/width, mouseY*3/height);
  int x = mouseX*3/width;
  int y = mouseY*3/height;
  if (board[x][y] == 0) {
    if (player) {
      board[x][y] = 1;
      player = false;
    } else {
      board[x][y] = 2;
      player = true;
    }
  }
  for (int i = 0; i < 3; i++) {
    if () {
    }
  }
}
