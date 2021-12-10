import {EngineState, OffState} from "./EngineState";


export class Gate {

    private engine : EngineState;

    constructor(){
        this.engine = new OffState();
    }

    buttonClick() : void {
        this.engine = this.engine.switch();
    }

    step() : void{
        this.engine.step();
    }

    // for tests
    getOpenLevel() : number {
        return this.engine.getOpenLevel();
    }

}