"use strict";
const FullHouse_1 = require('./../classes/hands/FullHouse');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('FullHouse', function () {
    let hand;
    describe('when creating an instance of FullHouse', function () {
        let params = {
            cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
            handStrength: _interfaces_1.HandStrength.fullHouse,
            trips: _interfaces_1.CardValue.ace,
            pair: _interfaces_1.CardValue.king
        };
        hand = new FullHouse_1.FullHouse(params);
        it('should set trips correctly', function () {
            expect(hand.trips).toEqual(_interfaces_1.CardValue.ace);
        });
        it('should set pair correctly', function () {
            expect(hand.pair).toEqual(_interfaces_1.CardValue.king);
        });
    });
    describe('when comparing to another FullHouse', function () {
        describe('with different trips and pair', function () {
            let firstHand;
            let secondHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.ace,
                    pair: _interfaces_1.CardValue.king
                };
                let secondParams = {
                    cards: [methods_1.card('threeOfClubs'), methods_1.card('threeOfSpades'), methods_1.card('threeOfDiamonds'), methods_1.card('fourOfClubs'), methods_1.card('fourOfDiamonds')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.three,
                    pair: _interfaces_1.CardValue.four
                };
                firstHand = new FullHouse_1.FullHouse(firstParams);
                secondHand = new FullHouse_1.FullHouse(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('with different pair and the same trips', function () {
            let firstHand;
            let secondHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.ace,
                    pair: _interfaces_1.CardValue.king
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('fourOfClubs'), methods_1.card('fourOfDiamonds')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.ace,
                    pair: _interfaces_1.CardValue.four
                };
                firstHand = new FullHouse_1.FullHouse(firstParams);
                secondHand = new FullHouse_1.FullHouse(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('with different trips and the same pair', function () {
            let firstHand;
            let secondHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.ace,
                    pair: _interfaces_1.CardValue.king
                };
                let secondParams = {
                    cards: [methods_1.card('threeOfClubs'), methods_1.card('threeOfSpades'), methods_1.card('threeOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.three,
                    pair: _interfaces_1.CardValue.king
                };
                firstHand = new FullHouse_1.FullHouse(firstParams);
                secondHand = new FullHouse_1.FullHouse(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('with the same pair and trips', function () {
            let firstHand;
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfHearts'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfClubs')],
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: _interfaces_1.CardValue.ace,
                    pair: _interfaces_1.CardValue.king
                };
                firstHand = new FullHouse_1.FullHouse(firstParams);
            });
            it('should return 0 when the same', function () {
                expect(firstHand.compareTo(firstHand)).toEqual(0);
            });
        });
    });
});
//# sourceMappingURL=fullHouse_spec.js.map