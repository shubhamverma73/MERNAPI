//handle email or username duplicates
exports.handleError = function (err, res, msg) {
    const field = err.keyValue.email;
    const code = 400;
    res.setHeader('Content-Type', 'application/json');
    res.status(code).send(JSON.stringify({ status: 200, data: [], message: msg }));
}

exports.handleSuccess = function (req, res, msg) {
    const code = 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(code).send(JSON.stringify({ status: 200, data: [], message: msg }));
}

exports.handleData = function (req, res, result) {
    const code = 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(code).send(JSON.stringify({ status: 200, data: result, message: '' }));
}