export class Experiment{
    constructor(){

    }
    iterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.iterJSlice(set, i, j)
    }
    reverseIterJSliceExperiment(set, i, j){
        var recursion = new Recursion()
        return recursion.reverseIterJSlice(set, i, j)
    }
}
