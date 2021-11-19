
export type GateOpenness = number;

export const CLOSED : GateOpenness = 0;
export const OPEN : GateOpenness = 100;
const MOVEMENT_DIFF : GateOpenness = 10;

export interface MovementState {

    move(openLevel : GateOpenness) : GateOpenness;

    oppositeMovement() : MovementState;

}

export class OpeningState implements MovementState{

    move(openLevel: GateOpenness): GateOpenness {
        if (openLevel>=OPEN){
            return OPEN;
        }
        return openLevel+MOVEMENT_DIFF;
    }

    oppositeMovement(): MovementState {
        return new ClosingState();
    }

}

export class ClosingState implements MovementState{

    move(openLevel: GateOpenness): GateOpenness {
        if (openLevel<=CLOSED){
            return CLOSED;
        }
        return openLevel-MOVEMENT_DIFF;
    }

    oppositeMovement(): MovementState {
        return new OpeningState();
    }

}