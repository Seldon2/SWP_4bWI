for(var i = 1; i <= 4; i++){
  if(i % 2 != 0){
    for(var j = 0; j < 4; j++){
      process.stdout.write("X ");
    }
  }
  else if(i % 2 == 0){
    for(var j = 0; j < 4; j++){
      process.stdout.write("O ");
    }
  }
  console.log();
}

var sum = 0;
for(var i = 0; i <= 100; i++){
  if(i % 2 == 0){
    sum += i;
  }else {
    continue;
  }
}
console.log("Summe: " + sum);

sum = 0;
for(var i = 0; i <= 100; i+=2){
  sum += i;
}
console.log("Summe: " + sum);

for(var row = 0; row < 5; row++){
  console.log();
  if(row == 0 || row == 4){
    for(var col = 0; col < 5; col++){
      process.stdout.write("X");
    }
  }else if (row == 1 || row == 3){
    for(var col = 0; col < 1; col++){
      process.stdout.write("X");
    }
  }else{
    for(var col = 0; col < 3; col++){
      process.stdout.write("X");
    }
  }
}