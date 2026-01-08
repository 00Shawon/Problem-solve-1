//  problem -1 : reverse a string 

const reverse = (text)=> {
   return text.split('').reverse().join('')
}
const result = reverse('hello')



// problem- 2:Count vowels in a string

const CountVowel = (str) => {
    let num = 0;
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    const ArrayFromString = str.split('')
     ArrayFromString.forEach(i => {
        if (vowels.includes(i)){
           num = num+1;
        }
    })
    return num
   
}  
const NumberOfVowel = CountVowel('hello Programming')




//problem 3: Palindrome

const isPalindrome = (str) => {
const string = str.toLowerCase()
const reverseString = string.split('').reverse().join('')
if (string === reverseString){
return true
}else{
 return false
}
}


//problem 4: Find The max 


const a = [5, 1, 9, 3]
const isMax = (nums) => {
    let maxNum = 0;
    nums.forEach(num =>{
       if(num>maxNum)  maxNum= num}   
    ) 
    return maxNum
    } 

    // console.log(isMax(a));


    //problem 5: remove the duplicate

const b =  [1, 2, 2, 3, 4, 4]
const removeDuplicate = (array) => {
  const obj = new Set(b)
  const arr= [...obj]
  return arr
}


// const b =  [1, 2, 2, 3, 4, 4]
// const removeDuplicate = (array) => {
//    return array.filter((item, index) => array.indexOf(item) === index);
//  }


// console.log(removeDuplicate((b)))


// problem - 6: sum of array

const test = [1, 2, 3, 4]

const sumOfArray = (array) => {
    let sum = 0;
    array.forEach(num => sum = sum + num)
    return sum
}

// console.log(sumOfArray(test))

//Problem-7: find the even num 

const test2 = [1, 2, 3, 4, 5, 6]
const findEven = (arr) => {
    const evenArray = [] ;
    arr.forEach( i => {if(i%2===0) {evenArray.push(i)}})
        return evenArray
}

// console.log(findEven(test2))

//Problem-8: capitalize first letter of each word

const sentence = 'hello world'

const capitalizeEachWord = (text) => {
const textArray = text.split(' ')
return textArray.map(i=> i[0].toUpperCase()+i.slice(1)).join(' ')
}
// console.log(capitalizeEachWord(sentence))

// problem - 9: find the factorial

const factorial = (num) => {
    let i = 1
    let factorial = 1;
    for (let i=1;i<=num; i++){
  factorial = factorial * i
    }
    return factorial
}
// console.log(factorial(3))

// problem- 10: print number 

const print = (num) => {
let i = 0;
for(i =0 ; i<=num; i++){
    if(i%3===0 && i%5===0){
        console.log('PingPong')
    } else if (i %5 ===0){
        console.log('Pong')
    } else if (i%3 ===0){
        console.log('Ping')
    }
    console.log(i)
}

}
// print(20)