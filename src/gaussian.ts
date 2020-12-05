// const PRECISION = 1e9;
const _2PI = Math.PI * 2;

export const generateGaussian = (mean: number, variance: number): number => {
  const std = Math.pow(variance, 2);
  const u1 = Math.random();
  const u2 = Math.random();

  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
  //   const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

  return z0 * std + mean;
};

// Credit: https://github.com/errcw/gaussian/blob/master/lib/box-muller.js
