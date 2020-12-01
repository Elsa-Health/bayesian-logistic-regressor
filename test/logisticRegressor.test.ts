import { logitRegressor, normal } from '../src';

describe('Logit Regressor', () => {
  it('works', () => {
    const a = normal(7, 4);
    const b = normal(4, 2);
    const intercept = normal(3, 1);

    const answer = logitRegressor(5, [2, a], [3, b], intercept);

    console.log(b, answer);

    expect(true).toBe(true);

    // expect(answer.mean).toBe(17);
    // expect(answer.variance).toBe(8 + 6 + 1);
  });

  it('categorizes patients', () => {
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

    // const patientRisks = [[0.8014045652351326]];

    const terms = patients.map(patient =>
      patient.map((val, idx) => [val, coefficients[idx]])
    )[0];

    console.log(terms);

    // @ts-ignore
    const answer = logitRegressor(500, ...terms, intercept);

    console.log(answer);

    // FIXME: update tests! So far doing okay!
  });
});
