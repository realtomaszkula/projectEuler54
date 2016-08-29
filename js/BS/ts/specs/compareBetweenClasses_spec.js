"use strict";
const HighCard_1 = require('./../classes/hands/HighCard');
const Pair_1 = require('./../classes/hands/Pair');
const TwoPair_1 = require('./../classes/hands/TwoPair');
const Trips_1 = require('./../classes/hands/Trips');
const Straight_1 = require('./../classes/hands/Straight');
const Flush_1 = require('./../classes/hands/Flush');
const FullHouse_1 = require('./../classes/hands/FullHouse');
const Quads_1 = require('./../classes/hands/Quads');
const StraightFlush_1 = require('./../classes/hands/StraightFlush');
const methods_1 = require('./helpers/methods');
const _interfaces_1 = require('./../classes/hands/_interfaces');
describe('Hand', function () {
    let pairParams = {
        cards: [methods_1.card('kingOfDiamonds'), methods_1.card('kingOfClubs'), methods_1.card('queenOfClubs'), methods_1.card('jackOfClubs'), methods_1.card('tenOfSpades')],
        handStrength: _interfaces_1.HandStrength.pair,
        pair: _interfaces_1.CardValue.king
    };
    let pair = new Pair_1.Pair(pairParams);
    let twoPairParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfClubs'), methods_1.card('kingOfclubs'), methods_1.card('kingOfDiamonds'), methods_1.card('jackOfClubs')],
        handStrength: _interfaces_1.HandStrength.twoPair,
        lowerPair: _interfaces_1.CardValue.king,
        higherPair: _interfaces_1.CardValue.ace
    };
    let twoPair = new TwoPair_1.TwoPair(twoPairParams);
    let tripsParams = {
        cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfClubs')],
        handStrength: _interfaces_1.HandStrength.trips,
        trips: _interfaces_1.CardValue.ace
    };
    let trips = new Trips_1.Trips(tripsParams);
    let straightParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('kingOfClubs'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfHearts')],
        handStrength: _interfaces_1.HandStrength.straight,
    };
    let straight = new Straight_1.Straight(straightParams);
    let flushParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
        handStrength: _interfaces_1.HandStrength.flush
    };
    let flush = new Flush_1.Flush(flushParams);
    let fullHouseParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
        handStrength: _interfaces_1.HandStrength.fullHouse,
        trips: _interfaces_1.CardValue.ace,
        pair: _interfaces_1.CardValue.king
    };
    let fullHouse = new FullHouse_1.FullHouse(fullHouseParams);
    let quadsParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs')],
        handStrength: _interfaces_1.HandStrength.quads,
        quads: _interfaces_1.CardValue.ace
    };
    let quads = new Quads_1.Quads(quadsParams);
    let straightFlushParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades')],
        handStrength: _interfaces_1.HandStrength.straightFlush,
    };
    let straightFlush = new StraightFlush_1.StraightFlush(straightFlushParams);
    let highCardParams = {
        cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
        handStrength: _interfaces_1.HandStrength.highCard
    };
    let highCard = new HighCard_1.HighCard(highCardParams);
    describe('when comparing pair to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(pair.compareTo(pair)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(pair.compareTo(trips)).toEqual(-1);
            expect(pair.compareTo(straight)).toEqual(-1);
            expect(pair.compareTo(flush)).toEqual(-1);
            expect(pair.compareTo(fullHouse)).toEqual(-1);
            expect(pair.compareTo(quads)).toEqual(-1);
            expect(pair.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(pair.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing two pair to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(twoPair.compareTo(twoPair)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(twoPair.compareTo(trips)).toEqual(-1);
            expect(twoPair.compareTo(straight)).toEqual(-1);
            expect(twoPair.compareTo(flush)).toEqual(-1);
            expect(twoPair.compareTo(fullHouse)).toEqual(-1);
            expect(twoPair.compareTo(quads)).toEqual(-1);
            expect(twoPair.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(twoPair.compareTo(pair)).toEqual(1);
            expect(twoPair.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing trips to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(trips.compareTo(trips)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(trips.compareTo(straight)).toEqual(-1);
            expect(trips.compareTo(flush)).toEqual(-1);
            expect(trips.compareTo(fullHouse)).toEqual(-1);
            expect(trips.compareTo(quads)).toEqual(-1);
            expect(trips.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(trips.compareTo(twoPair)).toEqual(1);
            expect(trips.compareTo(pair)).toEqual(1);
            expect(trips.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing straight to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(straight.compareTo(straight)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(straight.compareTo(flush)).toEqual(-1);
            expect(straight.compareTo(fullHouse)).toEqual(-1);
            expect(straight.compareTo(quads)).toEqual(-1);
            expect(straight.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(straight.compareTo(trips)).toEqual(1);
            expect(straight.compareTo(twoPair)).toEqual(1);
            expect(straight.compareTo(pair)).toEqual(1);
            expect(straight.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing flush to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(flush.compareTo(flush)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(flush.compareTo(fullHouse)).toEqual(-1);
            expect(flush.compareTo(quads)).toEqual(-1);
            expect(flush.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(flush.compareTo(straight)).toEqual(1);
            expect(flush.compareTo(trips)).toEqual(1);
            expect(flush.compareTo(twoPair)).toEqual(1);
            expect(flush.compareTo(pair)).toEqual(1);
            expect(flush.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing fullHouse to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(fullHouse.compareTo(fullHouse)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(fullHouse.compareTo(quads)).toEqual(-1);
            expect(fullHouse.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(fullHouse.compareTo(flush)).toEqual(1);
            expect(fullHouse.compareTo(straight)).toEqual(1);
            expect(fullHouse.compareTo(trips)).toEqual(1);
            expect(fullHouse.compareTo(twoPair)).toEqual(1);
            expect(fullHouse.compareTo(pair)).toEqual(1);
            expect(fullHouse.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing quads to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(quads.compareTo(quads)).toEqual(0);
        });
        it('should return -1 for every class higher then itself', function () {
            expect(quads.compareTo(straightFlush)).toEqual(-1);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(quads.compareTo(fullHouse)).toEqual(1);
            expect(quads.compareTo(flush)).toEqual(1);
            expect(quads.compareTo(straight)).toEqual(1);
            expect(quads.compareTo(trips)).toEqual(1);
            expect(quads.compareTo(twoPair)).toEqual(1);
            expect(quads.compareTo(pair)).toEqual(1);
            expect(quads.compareTo(highCard)).toEqual(1);
        });
    });
    describe('when comparing quads to other classes', function () {
        it('should return 0 when comparing to itself', function () {
            expect(straightFlush.compareTo(straightFlush)).toEqual(0);
        });
        it('should return 1 for every class lower then itself', function () {
            expect(straightFlush.compareTo(quads)).toEqual(1);
            expect(straightFlush.compareTo(fullHouse)).toEqual(1);
            expect(straightFlush.compareTo(flush)).toEqual(1);
            expect(straightFlush.compareTo(straight)).toEqual(1);
            expect(straightFlush.compareTo(trips)).toEqual(1);
            expect(straightFlush.compareTo(twoPair)).toEqual(1);
            expect(straightFlush.compareTo(pair)).toEqual(1);
            expect(straightFlush.compareTo(highCard)).toEqual(1);
        });
    });
});
//# sourceMappingURL=compareBetweenClasses_spec.js.map