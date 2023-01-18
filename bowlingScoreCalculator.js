const getSum = (frame) => frame.length == 0 ? 0 : frame.reduce((acc, item) => acc + item);
/**
 * 
 * @param {Array<Integer>} rolls 
 */

const bowlingScoreCalculator = (rolls) => {
	if (!Array.isArray(rolls)) throw 'unsupported type';
	if (rolls.length == 0) throw 'Not enough frames';
	let throwsInCurrentFrame = 0;
	const totalFrames = 10;

	const frames = [];
	let currentFrameScores = [];
	let score = 0;
	let currentFrame = 1;
	rolls.forEach((roll, index) => {
		if (currentFrame == totalFrames) {
			currentFrameScores.push(roll);
			return;
		}

		if (throwsInCurrentFrame === 2) {
			score += getSum(currentFrameScores);
			frames.push(currentFrameScores);
			currentFrameScores = [];
			throwsInCurrentFrame = 0;

		}

		if (roll === 10) { // case for strike
			currentFrameScores.push(10, rolls[index], rolls[index + 1]);
			throwsInCurrentFrame = 2;
		}
		else if (getSum(currentFrameScores) + roll == 10) { //case for spare
			currentFrameScores.push(roll, rolls[index + 1]);
			throwsInCurrentFrame = 2;
		}
		else { // case for non 10s
			currentFrameScores.push(roll);
			throwsInCurrentFrame++;
		}
		if(throwsInCurrentFrame == 2) {
			currentFrame++;

		}

	});
	if (currentFrameScores.length != 0) {
		score += getSum(currentFrameScores);
		frames.push(currentFrameScores);
	}
	

	return score;
};

module.exports = { bowlingScoreCalculator };
