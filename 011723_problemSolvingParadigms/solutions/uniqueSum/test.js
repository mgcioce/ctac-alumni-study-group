let nums = [1,2,3,2,4,2,5,4,7]; //expect 1,3,5,7

let returnValue = findUniqueElements(nums);
for(let i = 0; i < returnValue.length; i++)
    console.log(returnValue[i]);

function findUniqueElements(arrayOfNumbers) {
    let valueI = 0;
    let valueJ = 0;
    let match = false;
    let unique = [];
    for(let i = 0; i <= arrayOfNumbers.length - 1; i = i + 1) {
        //get the value at index i
        valueI = arrayOfNumbers[i];
        if(unique.length == 0) {
            unique.push(valueI);
            continue;
        } 
           
        for (let j = 0; j <= unique.length - 1; j++){
            //get the value at index j
            valueJ = unique[j];
            if(valueJ === valueI) {
                match = true;
                unique.splice(j,1);
                j = unique.length - 1;
            }
                
        }
        if(!match){
            unique.push(valueI);
        }
    }
    return unique;
}