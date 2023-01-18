const getSum = (frame) => frame.length == 0 ? 0: frame.reduce((acc, item) => acc+item);

const bowlingScoreCalculator = (rolls) => {

    const frames = [];
    let score = 0;
    let currFrame = new Array();
    let throwsInThisFrame = 0;
    let finalCaseIsThere = false;
    
    rolls.forEach((roll, index) => {
        if(finalCaseIsThere) {
            return;
        }
        if(throwsInThisFrame == 2) {
            score += getSum(currFrame);
            frames.push(currFrame);
            currFrame = [];
            throwsInThisFrame = 0;
        }
        if(index < 19) {
            throwsInThisFrame+=1;
            if(roll == 10 && throwsInThisFrame == 1){ // case for strike
                currFrame.push(10, rolls[index+1], rolls[index+2]);
                throwsInThisFrame = 2;
            }
            else if(getSum(currFrame) + roll == 10 && throwsInThisFrame == 2) { // case for spare
                if(index == 18) // last frame starts
                 {
                    for(let currRoll = 18; currRoll < rolls.length; currRoll++) currFrame.push(rolls[currRoll]);
                    finalCaseIsThere = true;
                    frames.push(currFrame);
                     score+= getSum(currFrame);
                    currFrame = [];
                 }
                 else {
                    currFrame.push(roll, rolls[index+1]);
                    throwsInThisFrame = 2
                      
                 }
              }
            else {
                currFrame.push(roll);
            }
    
        }
        else {
           for(let currRoll = 19; currRoll < rolls.length; currRoll++) currFrame.push(rolls[currRoll]);
           finalCaseIsThere = true;
           frames.push(currFrame);
           score+= getSum(currFrame);
           currFrame = [];

            // last case
        }
        



    } )    
    if(currFrame.length != 0) {
        frames.push(currFrame);
        score+= getSum(currFrame);
    }

    console.log(frames);
    console.log(score);

}


bowlingScoreCalculator([  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])