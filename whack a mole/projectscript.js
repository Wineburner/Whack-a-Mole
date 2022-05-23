/* Set up for the game. */

let gameOver = 0;
let delay = 1000;
let spots = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let currentLevel = 1;
let currentScore = 0;
document.getElementById("level").innerHTML = "Level: " + currentLevel;
document.getElementById("score").innerHTML = "Score: " + currentScore;

let curve = 1.0;

let bonkSFX = new Audio('sfx/bonk.wav');
let gameOverSFX = new Audio('sfx/lose.wav');

let levelTimer = setInterval(LevelUp, delay);

/* This progresses one of the moles to the next level */

function LevelUp()
{
  let pick = Math.floor(Math.random() * 9) + 1;

  switch(pick)
  {
    case 1:spots[0][0] += 1;break;
    case 2:spots[0][1] += 1;break;
    case 3:spots[0][2] += 1;break;
    case 4:spots[1][0] += 1;break;
    case 5:spots[1][1] += 1;break;
    case 6:spots[1][2] += 1;break;
    case 7:spots[2][0] += 1;break;
    case 8:spots[2][1] += 1;break;
    case 9:spots[2][2] += 1;break;
  }

  ChangeSlide()
}

/** 
 * This also progresses the moles, but it will not 
 * progress the mole the player clicked on.
 */

function LevelUpEx(num)
{
  let pick = num;
  do
  {
    pick = Math.floor(Math.random() * 9) + 1;
  } while (pick == num);


  
  switch(pick)
  {
    case 1:spots[0][0] += 1;break;
    case 2:spots[0][1] += 1;break;
    case 3:spots[0][2] += 1;break;
    case 4:spots[1][0] += 1;break;
    case 5:spots[1][1] += 1;break;
    case 6:spots[1][2] += 1;break;
    case 7:spots[2][0] += 1;break;
    case 8:spots[2][1] += 1;break;
    case 9:spots[2][2] += 1;break;
  }

  ChangeSlide()
}

/* This function changes the img displayed on the screen. */

function ChangeSlide()
{
  let myId = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) { 
      myId = GetId(i, j);

      if (spots[i][j] >= 5)
      {
        EndGame();
      }
      else if (spots[i][j] == 4)
      {
        document.getElementById(myId).src = "img/moleLevel4.png";
      }

      else if (spots[i][j] == 3)
      {
        document.getElementById(myId).src = "img/moleLevel3.png";
      }

      else if (spots[i][j] == 2)
      {
        document.getElementById(myId).src = "img/moleLevel2.png";
      }

      else if (spots[i][j] == 1)
      {
        document.getElementById(myId).src = "img/moleLevel1.png";
      }

      else if (spots[i][j] == 0)
      {
        document.getElementById(myId).src = "img/moleLevel0.png";
      }
      else if (spots[i][j] < 0)
      {
        document.getElementById(myId).src = "img/moleLevel5.png";
      }
      
    }
  }

  
}

/* This is the click event, this runs everytime you click a mole. */

function Whack(i, j, myId)
{
  if (gameOver == 0 && spots[i][j] > 0)
  {


    currentScore += (spots[i][j] * spots[i][j]);
    spots[i][j] = 0;

    bonkSFX.play();

    clearInterval(levelTimer);
    document.getElementById(myId).src = "img/moleLevel0.png";

    let spaceNumber = GetSpaceNumber(i, j)
    
    /** 
     * The following two lines make it so there is a chance another mole will
     * levelup when you click, it's more likeily to have as the timer lowers.
     */

    let randChance = Math.floor(Math.random() * 1500);
    if (randChance > delay)
    {
      LevelUpEx(spaceNumber);
    }

    /** 
     * 182 to 190 is the level balance, everytime you click the timer gets shorter, 
     * the amount taken decreases in till you enter a new level, 
     * where it lowers the delay by a large amount but resets the curve, 
     * to give the player a breather after getting a new level. 
     * The game is insanely easy at first but can get really fast near the end. 
     */
    
    delay -= Math.floor(curve);
    curve += 1;
    levelTimer = setInterval(LevelUp, delay);
    if ((1000 - (currentLevel*50)) > delay)
    {
      currentLevel += 1;
      delay -= Math.floor(curve) + 10;
      curve = 1.0;
    }

    document.getElementById("level").innerHTML = "Level: " + currentLevel;
    document.getElementById("score").innerHTML = "Score: " + currentScore;
  } 
}

/* This is the end game state, this stops the game when the player looses. */

function EndGame()
{
  clearInterval(levelTimer);
  gameOver = 1;

  gameOverSFX.play();

  spots = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];

  ChangeSlide();
  
  document.getElementById("level").innerHTML = "Level: " + currentLevel;
  document.getElementById("score").innerHTML = "Score: " + currentScore;
  document.getElementById("gameover").innerHTML = "GAMEOVER, refresh the page to play again!";
}