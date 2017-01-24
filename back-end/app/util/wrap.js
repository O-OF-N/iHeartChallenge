import co from 'co';

const wrap = (genFn) => (req, res, next) => {
    co.wrap(genFn)(req, res, next).catch(next);
};

export default wrap;