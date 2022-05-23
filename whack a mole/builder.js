

/* This returns a number based on the i and j, basically converting two numbers into 1. */

function GetSpaceNumber(i, j)
{
  if (i == 0 && j == 0)
  {
    return 1;
  }

  else if (i == 0 && j == 1)
  {
    return 2;
  }

  else if (i == 0 && j == 2)
  {
    return 3;
  }

  else if (i == 1 && j == 0)
  {
    return 4;
  }

  else if (i == 1 && j == 1)
  {
    return 5;
  }

  else if (i == 1 && j == 2)
  {
    return 6;
  }

  else if (i == 2 && j == 0)
  {
    return 7;
  }

  else if (i == 2 && j == 1)
  {
    return 8;
  }

  else if (i == 2 && j == 2)
  {
    return 9;
  }
}

/* This function converts the i and j to an ID used by the HTML. */

function GetId(i, j)
{
  if (i == 0 && j == 0)
  {
    return "A1";
  }
  else if (i == 0 && j == 1)
  {
    return "A2";
  }
  else if (i == 0 && j == 2)
  {
    return "A3";
  }

  else if (i == 1 && j == 0)
  {
    return "B1";
  }
  else if (i == 1 && j == 1)
  {
    return "B2";
  }
  else if (i == 1 && j == 2)
  {
    return "B3";
  }

  else if (i == 2 && j == 0)
  {
    return "C1";
  }
  else if (i == 2 && j == 1)
  {
    return "C2";
  }
  else if (i == 2 && j == 2)
  {
    return "C3";
  }
}