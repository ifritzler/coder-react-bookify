export const calculateTime = (lastFetchMiliseconds) =>
  (Date.now() - lastFetchMiliseconds) / 1000 / 60
