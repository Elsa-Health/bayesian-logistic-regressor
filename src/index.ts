import { generateGaussian } from './gaussian';
import { times } from './utils';

interface NormalRVS {
  mean: number;
  variance: number;
}

export const normal = (mean: number, variance: number): NormalRVS => {
  return {
    mean,
    variance,
  };
};

// regress([[2,normal(45, 2)], [3,normal(4, 1)], [c]])

export const logitRegressor = (
  samples: number = 100,
  ...expr: ([number, NormalRVS] | NormalRVS)[]
): number[] => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }

  const terms: NormalRVS[] = expr?.map(exp => {
    if (Array.isArray(exp)) {
      // Element contains a number and a random variable
      return normal(exp[0] * exp[1].mean, exp[0] * exp[1].variance);
    }

    return exp;
  });

  let mean = 0;
  let variance = 0;

  terms.forEach(term => {
    mean += term.mean;
    variance += term.variance;
  });

  console.log("MEAN: ", mean)

  return times(samples, () => generateGaussian(mean, variance))?.map(
    s => 1 / (1 + Math.exp(-s))
  );
};
