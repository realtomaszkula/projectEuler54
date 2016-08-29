"use strict";
const Trips_1 = require('./../classes/hands/Trips');
describe('Trips', function () {
    let hand;
    describe('when creating an instance of Trips', function () {
        let params;
        hand = new Trips_1.Trips(params);
    });
    describe('when comparing to another trips', function () {
        let firstHand;
        let secondHand;
        beforeEach(function () {
            let firstParams;
            let secondParams;
            firstHand = new Trips_1.Trips(firstParams);
            secondHand = new Trips_1.Trips(secondParams);
        });
        it('should return 1 when higher', function () {
            expect(firstHand.resolveConflict(secondHand)).toEqual(1);
        });
        it('should return -1 when lower', function () {
            expect(secondHand.resolveConflict(firstHand)).toEqual(-1);
        });
        it('should return 0 if the same', function () {
            expect(secondHand.resolveConflict(secondHand)).toEqual(0);
        });
    });
});
//# sourceMappingURL=_tmpl.js.map