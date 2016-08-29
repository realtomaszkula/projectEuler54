"use strict";
const HighCard_1 = require('./../classes/hands/HighCard');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('HighCard', function () {
    describe('when comparing to another HighCard', function () {
        let firstHand;
        let secondHand;
        describe('made of the same five cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                firstHand = new HighCard_1.HighCard(firstParams);
                secondHand = new HighCard_1.HighCard(secondParams);
            });
            it('should return 0', function () {
                expect(secondHand.compareTo(secondHand)).toEqual(0);
            });
        });
        describe('made of the same four cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('eightOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                firstHand = new HighCard_1.HighCard(firstParams);
                secondHand = new HighCard_1.HighCard(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('made of the same three cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                firstHand = new HighCard_1.HighCard(firstParams);
                secondHand = new HighCard_1.HighCard(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('made of the same two cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades'), methods_1.card('sixOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                firstHand = new HighCard_1.HighCard(firstParams);
                secondHand = new HighCard_1.HighCard(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('made of the same one card', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades'), methods_1.card('sixOfSpades'), methods_1.card('fiveOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                firstHand = new HighCard_1.HighCard(firstParams);
                secondHand = new HighCard_1.HighCard(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
        describe('made of different cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                let secondParams = {
                    cards: [methods_1.card('kingOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades'), methods_1.card('sixOfSpades'), methods_1.card('fiveOfClubs')],
                    handStrength: _interfaces_1.HandStrength.highCard
                };
                firstHand = new HighCard_1.HighCard(firstParams);
                secondHand = new HighCard_1.HighCard(secondParams);
            });
            it('should return 1 when higher', function () {
                expect(firstHand.compareTo(secondHand)).toEqual(1);
            });
            it('should return -1 when lower', function () {
                expect(secondHand.compareTo(firstHand)).toEqual(-1);
            });
        });
    });
});
//# sourceMappingURL=highCard_spec.js.map