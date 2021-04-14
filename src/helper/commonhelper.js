//handle email or username duplicates
exports.handleError = function (err, res) {
    console.log(err);
    const field = err.keyValue.phone;
    const code = 400;
    res.setHeader('Content-Type', 'application/json');
    res.status(code).send(JSON.stringify({ status: 200, data: [], message: `An account with that ${field} already exists.` }));
}