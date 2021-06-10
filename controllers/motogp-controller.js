const fetch = require('node-fetch');

function test(req, res) {
    let origin = req.get('origin');
    let host = req.get('host');
    if(1 !== 2) {
        res.status(400).send({
            message: 'This is an error!' + origin + host
        });
    }
}

exports.getStandings = async (req, res) => {
    let year = req.query.year;
    let race = req.query.race;
    let category = req.query.category;
    let session = req.query.session ? req.query.session : 'RAC';

    let latestPath = `https://www.motogp.com/en/Results+Statistics/${year}/${race}/${category}/${session}/World+Standing`;

    fetch(latestPath)
        .catch(err => res.send({status: 500, data: `Request to url ${latestPath} failed`}))
        .then(res => res.text())
        .then(body => res.send({status: 200, data: body}))
}

exports.getLatestRace = async (req, res) => {
    test(req, res);
    let latestPath = `https://www.motogp.com/en/Results+Statistics`;

    fetch(latestPath)
        .catch(err => res.send({status: 500, data: `Request to url ${latestPath} failed`}))
        .then(res => res.text())
        .then(body => res.send({status: 200, data: body}))
}

exports.getRaces = async (req, res) => {

    let year = req.query.year;

    let latestPath = `https://www.motogp.com/en/ajax/results/selector/${year}`;

    fetch(latestPath)
        .catch(err => res.send({status: 500, data: `Request to url ${latestPath} failed`}))
        .then(res => res.text())
        .then(body => res.send({status: 200, data: body}))
}

exports.getCategories = async (req, res) => {

    let year = req.query.year;
    let race = req.query.race;

    let latestPath = `https://www.motogp.com/en/ajax/results/selector/${year}/${race}`;

    fetch(latestPath)
        .catch(err => res.send({status: 500, data: `Request to url ${latestPath} failed`}))
        .then(res => res.text())
        .then(body => res.send({status: 200, data: body}))
}

exports.getSessions = async (req, res) => {

    let year = req.query.year;
    let race = req.query.race;
    let category = req.query.category;

    let latestPath = `https://www.motogp.com/en/ajax/results/selector/${year}/${race}/${category}`;

    fetch(latestPath)
        .catch(err => res.send({status: 500, data: `Request to url ${latestPath} failed`}))
        .then(res => res.text())
        .then(body => res.send({status: 200, data: body}))
}

exports.getSession = async (req, res) => {

    let year = req.query.year;
    let race = req.query.race;
    let category = req.query.category;
    let session = req.query.session;

    // Strange motogp stuff
    if(session === 'RACE') {
        session = 'RAC';
    } else if (session === 'RACE2') {
        session = 'RAC2';
    }

    let latestPath = `https://www.motogp.com/en/ajax/results/parse/${year}/${race}/${category}/${session}`;

    fetch(latestPath)
        .catch(err => res.send({status: 500, data: `Request to url ${latestPath} failed`}))
        .then(res => res.text())
        .then(body => res.send({status: 200, data: body}))
}