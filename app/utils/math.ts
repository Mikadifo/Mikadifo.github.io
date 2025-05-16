export const mapValue = (
  x: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => {
  const newValue = ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  if (x > inMax) {
    return outMax;
  }

  if (x < inMin) {
    return outMin;
  }

  return newValue;
};
