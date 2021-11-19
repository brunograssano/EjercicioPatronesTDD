import {CLOSED, GateOpenness, MovementState, OPEN, OpeningState} from "./MovementState";


export abstract class EngineState {
    protected movement : MovementState;
    protected openLevel : GateOpenness;

    protected constructor(movement : MovementState,openLevel : GateOpenness) {
        this.movement = movement;
        this.openLevel = openLevel;
    }

    abstract switch() : EngineState;
    abstract step() : void;

    // for tests
    getOpenLevel() : number {
        return this.openLevel;
    }

}

export class OffState extends  EngineState {

    constructor(movement : MovementState = new OpeningState(), openLevel : GateOpenness = CLOSED){
        super(movement,openLevel);
    }

    switch(): EngineState {
        return new OnState(this.movement,this.openLevel);
    }

    step(): void {
    }
}

class OnState extends  EngineState {

    constructor(movement : MovementState, openLevel : GateOpenness = CLOSED){
        super(movement,openLevel);
    }

    switch(): EngineState {
        return new OffState(this.movement.oppositeMovement(),this.openLevel);
    }

    step(): void {
        this.openLevel = this.movement.move(this.openLevel);
        if(this.openLevel == OPEN || this.openLevel == CLOSED){
            this.switch();
        }
    }
}