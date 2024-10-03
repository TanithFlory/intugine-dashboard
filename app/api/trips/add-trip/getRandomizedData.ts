export function getRandomizedTripData() {
  const randomDate = () =>
    new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString();

  const randomLatitude = () => Math.random() * 180 - 90;
  const randomLongitude = () => Math.random() * 360 - 180;
  const randomDistanceRemaining = () => Math.floor(Math.random() * 1000);
  const randomEtaDays = () => Math.floor(Math.random() * 5) + 1;

  return {
    tripStartTime: randomDate(),
    etaDays: randomEtaDays(),
    distanceRemaining: randomDistanceRemaining(),
    tripEndTime: null,
    sourceLatitude: randomLatitude(),
    sourceLongitude: randomLongitude(),
    destLatitude: randomLatitude(),
    destLongitude: randomLongitude(),
    lastPingTime: randomDate(),
    createdAt: randomDate(),
  };
}
