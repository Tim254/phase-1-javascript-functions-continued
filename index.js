// code your solution here
function saturdayFun(n = "roller-skate") {
    return `This Saturday, I want to ${n}!`
}
function mondayWork(n = "go to the office"){
    return `This Monday, I will ${n}.`
}
function wrapAdjective(n = "*") {
    return function (adj = "a hard worker") {
        return `You are ${n}${adj}${n}!`
    }
}