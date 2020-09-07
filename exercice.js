/* 
Write a function that removes repeated words from a string.
example
str = "this has has repeated repeated words words"
str = "this has repeated words"
*/

/* P.S ; add a new branch called feature/exercice1 and commit /push the solution on this branch. good luck*/


let strA = "this has has repeated repeated words words";

// let strNew = strA.split(' ')

//         strNew= strNew.filter((e,ind) => {
//             console.log(strA.indexOf(e));
//             return 
//         })


let removeRepeatedWords = (str) => {

    let arr = str.split(" ");
    console.log(arr); 
    return arr.reduce((all, elem, index)=>{
        console.log(arr.indexOf(elem))
        console.log(index)
        if (arr.indexOf(elem) !== index-1) {
            let newArr = []
            all.push(elem)
            
            console.log(newArr)
        }
        return all;
    },[])
}

console.log(removeRepeatedWords(strA))