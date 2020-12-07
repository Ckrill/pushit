type FeedbackHeading = {
  tier: number,
  words: string[],
}[];

type Streak = number;

export const getHeading = (
  feedbackHeading: FeedbackHeading,
  streak: Streak
) => {
  let tier = 1;

  if (streak < 15) {
    tier = 1;
  } else if (streak < 30) {
    tier = 2;
  } else if (streak < 60) {
    tier = 3;
  } else if (streak < 99) {
    tier = 4;
  } else if (streak < 100) {
    tier = 5;
  } else {
    tier = 6;
  }

  const wordList =
    feedbackHeading.find((item) => item.tier === tier)?.words || [];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const word = wordList[randomIndex];

  return word;
};
