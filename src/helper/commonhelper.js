//handle email or username duplicates
exports.handleError = function (err, res) {
    const field = err.keyValue.email;
    const code = 400;
    res.setHeader('Content-Type', 'application/json');
    res.status(code).send(JSON.stringify({ status: 200, data: [], message: `An account with that ${field} already exists.` }));
}