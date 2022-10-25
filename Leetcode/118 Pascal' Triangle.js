/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const triangle=[[1]];
    if(numRows==1)return triangle;
    let row=0;
    while(triangle.length<numRows){
        const prevRow=triangle[row];
        const currRow=new Array(prevRow.length+1).fill(1);
        for(let i=1;i<currRow.length-1;i++){
            
        }
    return triangle;
    }
};