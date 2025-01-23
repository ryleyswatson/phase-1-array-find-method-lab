// code your solution here
function superbowlWin(record){
    const winRecord=record.find(item => item.result === "W");
    return winRecord ? winRecord.year : undefined;
}