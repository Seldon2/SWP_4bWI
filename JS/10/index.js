var startday = "MI";
var day = 0;
switch(startday){
  case "MO":
    day = 0;
    break;
  case "DI":
    day = -1;
    break;
  case "MI":
    day = -2;
    break;
  case "DO":
    day = -3;
    break;
  case "FR":
    day = -4;
    break;
  case "SA":
    day = -5;
    break;
  case "SO":
    day = -6;
    break;
}

var days = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];
var rows = Math.floor(31/7)+1;
var cols = days.length;
if(startday == "SA" || startday == "SO"){
  rows += 1;
}

for(var row = 0; row <= rows; row++){
  console.log();
  for(var col = 0; col < cols; col++){
    if(row == 0){
      if(col == 6){
        process.stdout.write("| " + days[col] + " |");
      }else{
        process.stdout.write("| " + days[col] + " ");
      }
    }else{
      day += 1;
      if(day <= 0){
        process.stdout.write("|    ");
      }
      else if(col == 6 && col != 0){
        if(day > 31){
          process.stdout.write("|    |");
        }else if(day <= 9){
          process.stdout.write("| " + day + "  |");
        }else{
          process.stdout.write("| " + day + " |");
        }
      }
      else{
        if(day > 31){
          process.stdout.write("|    ");
        }else if(day <= 9){
          process.stdout.write("| " + day + "  ");
        }else{
          process.stdout.write("| " + day + " ");
        }
      }
    }
  }
}

/* version with WE day*/ 
startday = "MI";
day = 0;
switch(startday){
  case "MO":
    day = 0;
    break;
  case "DI":
    day = -1;
    break;
  case "MI":
    day = -2;
    break;
  case "DO":
    day = -3;
    break;
  case "FR":
    day = -4;
    break;
  case "SA":
    day = -5;
    break;
  case "SO":
    day = -6;
    break;
}

days = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];
rows = Math.floor(31/7)+1;
cols = days.length;
if(startday == "SA" || startday == "SO"){
  rows += 1;
}
console.log();

for(var row = 0; row <= rows; row++){
  console.log();
  for(var col = 0; col < cols; col++){
    if(row == 0){
      if(col == 6){
        process.stdout.write("| " + days[col] + " |");
      }else{
        process.stdout.write("| " + days[col] + " ");
      }
    }else{
      day += 1;
      if(day <= 0){
        process.stdout.write("|    ");
      }
      else if(col == 6 && col != 0){
        if(day > 31){
          process.stdout.write("|    |");
        }else if(day <= 9){
          process.stdout.write("| WE |");
        }else{
          process.stdout.write("| WE |");
        }
      }else if(col == 5){
        if(day > 31){
          process.stdout.write("|    ");
        }else if(day <= 9){
          process.stdout.write("| WE ");
        }else{
          process.stdout.write("| WE ");
        }
      }
      else{
        if(day > 31){
          process.stdout.write("|    ");
        }else if(day <= 9){
          process.stdout.write("| " + day + "  ");
        }else{
          process.stdout.write("| " + day + " ");
        }
      }
    }
  }
}