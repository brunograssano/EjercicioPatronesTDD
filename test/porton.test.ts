import {ClosingState, OpeningState} from "../src/porton/MovementState";
import {Gate} from "../src/porton/Gate";

describe('Porton', function() {

    describe('MovementState', () => {
        it('Should increase by 10 the gate openness when it is opening', () => {
            let movement = new OpeningState();
            expect(movement.move(0)).toEqual(10);
        });

        it('Should get to 100 the gate openness when it is opening', () => {
            let movement = new OpeningState();
            expect(movement.move(90)).toEqual(100);
        });

        it('Should stay at 100 the gate openness when it is opened', () => {
            let movement = new OpeningState();
            expect(movement.move(100)).toEqual(100);
        });

        it('Should decrease by 10 the gate openness when it is closing', () => {
            let movement = new ClosingState();
            expect(movement.move(50)).toEqual(40);
        });

        it('Should stay at 0 the gate openness when it is closed', () => {
            let movement = new ClosingState();
            expect(movement.move(0)).toEqual(0);
        });
    });

    describe('Gate', () => {

        it('Should be 100 (openness) after 10 steps', () => {
            let gate = new Gate();
            gate.buttonClick();
            for ( let i = 0; i < 10 ; i++){
                gate.step();
            }
            expect(gate.getOpenLevel()).toEqual(100);
        });

        it('Should decrease to 0 after being opened', () => {
            let gate = new Gate();
            for ( let i = 0; i < 10 ; i++){
                gate.step();
            }
            gate.buttonClick();
            gate.buttonClick();
            for ( let i = 0; i < 10 ; i++){
                gate.step();
            }
            expect(gate.getOpenLevel()).toEqual(0);
        });

        it('Should stay at 0 if the engine never started', () => {
            let gate = new Gate();
            for ( let i = 0; i < 10 ; i++){
                gate.step();
            }
            expect(gate.getOpenLevel()).toEqual(0);
        });

        it('Should be 0 after one step, switch, step', () => {
            let gate = new Gate();
            gate.buttonClick();
            gate.step();
            gate.buttonClick();
            gate.buttonClick();
            gate.step();
            expect(gate.getOpenLevel()).toEqual(0);
        });

        it('Should turn off the engine after reaching 100', () => {
            let gate = new Gate();
            gate.buttonClick();
            for ( let i = 0; i < 15 ; i++){
                gate.step();
            }
            expect(gate.getOpenLevel()).toEqual(100);
        });



    });


});