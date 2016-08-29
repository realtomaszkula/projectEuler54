"use strict";
const Quads_1 = require('./../classes/hands/Quads');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('Quads', function () {
    let hand;
    describe('when creating an instance of Quads', function () {
        let params = {
            cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs')],
            handStrength: _interfaces_1.HandStrength.quads,
            quads: _interfaces_1.CardValue.ace
        };
        hand = new Quads_1.Quads(params);
        it('should set quads correctly', function () {
            expect(hand.quads).toEqual(_interfaces_1.CardValue.ace);
        });
    });
    describe('when comparing to another Quads', function () {
        describe('with different quad hand', function () {
            let firstHand;
            let secondHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.quads,
                    quads: _interfaces_1.CardValue.ace
                };
                let secondParams = {
                    cards: [methods_1.card('queenOfSpades'), methods_1.card('queenOfDiamonds'), methods_1.card('queenOfClubs'), methods_1.card('queenOfHearts'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.quads,
                    quads: _interfaces_1.CardValue.queen
                };
                firstHand = new Quads_1.Quads(firstParams);
                secondHand = new Quads_1.Quads(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('with same quad hand and different kicker', function () {
            let firstHand;
            let secondHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.quads,
                    quads: _interfaces_1.CardValue.ace
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('queenOfClubs')],
                    handStrength: _interfaces_1.HandStrength.quads,
                    quads: _interfaces_1.CardValue.ace
                };
                firstHand = new Quads_1.Quads(firstParams);
                secondHand = new Quads_1.Quads(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('with same quad hand and the same kicker', function () {
            let firstHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.quads,
                    quads: _interfaces_1.CardValue.ace
                };
                firstHand = new Quads_1.Quads(firstParams);
            });
            it('should return 0', function () {
                expect(firstHand.compareTo(firstHand)).toEqual(0);
            });
        });
    });
});
//# sourceMappingURL=quads_spec.js.map