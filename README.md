# Bayesian Logistic Regression

![CI](https://github.com/Elsa-Health/bayesian-logistic-regressor/workflows/ci-test-coverage/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/Elsa-Health/bayesian-logistic-regressor/badge.svg?branch=test/init-workflow)](https://coveralls.io/github/Elsa-Health/bayesian-logistic-regressor?branch=test/init-workflow)

According to Wikipedia:

> In statistics, the logistic model (or logit model) is used to model the probability of a certain class or event existing such as pass/fail, win/lose, alive/dead or healthy/sick. This can be extended to model several classes of events such as determining whether an image contains a cat, dog, lion, etc. Each object being detected in the image would be assigned a probability between 0 and 1, with a sum of one.

For more information please [see this page](https://en.wikipedia.org/wiki/Logistic_regression#:~:text=Logistic%20regression%20is%20a%20statistical,a%20form%20of%20binary%20regression).)

This repository makes the logistic regression model more bayesian by accounting for uncertainities in the coefficients.

To install:
_Yarn_
`yarn add bayesian-logistic-regressor`

_npm_
`npm install --save bayesian-logistic-regressor`


**Example:**

Below is an examble of using Bayesian logistic regression to classify the risk of non adherence for HIV patients using Anti Retroviral Therapy Medication

```typescript
const intercept = normal(0.6508878758727246, 0.2264982936096282);
const age = normal(-0.21962766469973202, 0.03269431515510608);
const edu_lev = normal(-0.5272945932107651, 0.05905121110792727);
const share_drugs = normal(1.2688017000378393, 0.8698750752572072);
const occupation = normal(-0.3442870769761993, 0.03766084731176981);
const side_effect = normal(0.954476056820323, 0.25315211689704664);
const understand_reg = normal(1.1073743170216346, 0.4689712444172365);
const alc_drinks = normal(0.297833433932746, 0.2612879518029633);
const sex = normal(0.1267616891927831, 0.11690499307270034);

const coefficients = [
  occupation,
  age,
  share_drugs,
  understand_reg,
  side_effect,
  edu_lev,
  alc_drinks,
  sex,
];

const patients = [[0.0, -1.0636597901584577, 0.0, 0.0, 2.0, 2.0, 0.0, 1.0]];

const terms = patients.map(patient =>
  patient.map((val, idx) => [val, coefficients[idx]])
)[0];

const answer = logitRegressor(500, ...terms, intercept);
```

Welcoming any contributions! Please see our [Contribution Guides](CONTRIBUTION.md) for more information.

#### TODOs

- [x] Support normally (gaussian) distributed coefficients
- [x] Add base tests for each distribution
- [ ] Improved sampling perfomance
- [ ] Add support for more distributions
  - [ ] Bernoulli
  - [ ] Cauchy
  - [ ] Poisson
- [ ] Improved DLS support
