"use strict";
const Flush_1 = require('./../classes/hands/Flush');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('Flush', function () {
    describe('when comparing to another Flush', function () {
        let firstHand;
        let secondHand;
        describe('made of the same five cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                firstHand = new Flush_1.Flush(firstParams);
                secondHand = new Flush_1.Flush(secondParams);
            });
            it('should return 0', function () {
                expect(secondHand.compareTo(secondHand)).toEqual(0);
            });
        });
        describe('made of the same four cards', function () {
            beforeEach(function () {
                let firstParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('eightOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                firstHand = new Flush_1.Flush(firstParams);
                secondHand = new Flush_1.Flush(secondParams);
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
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                firstHand = new Flush_1.Flush(firstParams);
                secondHand = new Flush_1.Flush(secondParams);
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
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades'), methods_1.card('sixOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                firstHand = new Flush_1.Flush(firstParams);
                secondHand = new Flush_1.Flush(secondParams);
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
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                let secondParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades'), methods_1.card('sixOfSpades'), methods_1.card('fiveOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                firstHand = new Flush_1.Flush(firstParams);
                secondHand = new Flush_1.Flush(secondParams);
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
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                let secondParams = {
                    cards: [methods_1.card('kingOfSpades'), methods_1.card('eightOfSpades'), methods_1.card('sevenOfSpades'), methods_1.card('sixOfSpades'), methods_1.card('fiveOfSpades')],
                    handStrength: _interfaces_1.HandStrength.flush
                };
                firstHand = new Flush_1.Flush(firstParams);
                secondHand = new Flush_1.Flush(secondParams);
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
//# sourceMappingURL=flush_spec.js.map