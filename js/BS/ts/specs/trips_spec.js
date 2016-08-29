"use strict";
const Trips_1 = require('./../classes/hands/Trips');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('Trips', function () {
    let hand;
    describe('when creating an instance of Trips', function () {
        let params = {
            cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfClubs')],
            handStrength: _interfaces_1.HandStrength.trips,
            trips: _interfaces_1.CardValue.ace
        };
        hand = new Trips_1.Trips(params);
        it('should set trips correctly', function () {
            expect(hand.trips).toEqual(_interfaces_1.CardValue.ace);
        });
    });
    describe('when comparing to different trips', function () {
        let firstHand;
        let secondHand;
        beforeEach(function () {
            let firstParams = {
                cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfClubs')],
                handStrength: _interfaces_1.HandStrength.trips,
                trips: _interfaces_1.CardValue.ace
            };
            let secondParams = {
                cards: [methods_1.card('kingOfClubs'), methods_1.card('kingOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfClubs')],
                handStrength: _interfaces_1.HandStrength.trips,
                trips: _interfaces_1.CardValue.king
            };
            firstHand = new Trips_1.Trips(firstParams);
            secondHand = new Trips_1.Trips(secondParams);
        });
        it('should return 1 when higher', function () {
            expect(firstHand.compareTo(secondHand)).toEqual(1);
        });
        it('should return -1 when lower', function () {
            expect(secondHand.compareTo(firstHand)).toEqual(-1);
        });
        it('should return 0 if the same', function () {
            expect(secondHand.compareTo(secondHand)).toEqual(0);
        });
    });
    describe('when comparing to the same trips', function () {
        let firstHand;
        let secondHand;
        describe('with one different kicker ', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.trips,
                    trips: _interfaces_1.CardValue.ace
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('eightOfSpades')],
                    handStrength: _interfaces_1.HandStrength.trips,
                    trips: _interfaces_1.CardValue.ace
                };
                firstHand = new Trips_1.Trips(firstParams);
                secondHand = new Trips_1.Trips(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('with two different kickers ', function () {
            let firstHand;
            let secondHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.trips,
                    trips: _interfaces_1.CardValue.ace
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades')],
                    handStrength: _interfaces_1.HandStrength.trips,
                    trips: _interfaces_1.CardValue.ace
                };
                firstHand = new Trips_1.Trips(firstParams);
                secondHand = new Trips_1.Trips(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('and the same kickers', function () {
            let firstHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.trips,
                    trips: _interfaces_1.CardValue.ace
                };
                firstHand = new Trips_1.Trips(firstParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(firstHand)).toEqual(0);
            });
        });
    });
});
//# sourceMappingURL=trips_spec.js.map