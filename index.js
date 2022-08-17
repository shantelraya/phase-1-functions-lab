// Code your solution in this file!
function distanceFromHqInBlocks(a, b = 42){
    if (a > b){
        return (a - b);
    } else {
        return (b - a);
    }

}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);


function distanceTravelledInFeet(x, y){
    if (x > y){
        return (x - y)* 264;
    } else {
        return (y - x)* 264;
    };
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(x, y){
    let distance = distanceTravelledInFeet(x, y);
    if (distance<= 400){
      return 0;
    }
    if (distance > 400 && distance < 2000){
      return (distance-400)* 0.02;
    }
    else if(distance > 2000&& distance < 2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    };
  }

calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);