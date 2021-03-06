/**
 * Created by Armin on 11.06.2017.
 */
let request = require('request');
let expect = require('chai').expect;
let assert = require('chai').assert;
let actionUrl = process.env.ACTION_PREFIX_URL + '/timetable';

let params = {
    semester: 5,
    courseOfStudies: 'INFB',
    entities: [{value:'Montag'}]
};

describe("Timetable Action Test", function () {
    it("returns a timetable", (done) => {
        request.post({
            headers: {'content-type': 'text/plain'},
            url: actionUrl,
            body: JSON.stringify(params)
        }, function (err, response, body) {
            assert.isOk(JSON.parse(body).payload, 'no payload');
            assert.isOk(JSON.parse(body).htmlText, 'no htmlText');
            done()
        });
    })
});