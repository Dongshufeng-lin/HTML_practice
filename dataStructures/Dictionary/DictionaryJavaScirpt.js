/*
 * @Author: your name
 * @Date: 2020-09-20 15:39:40
 * @LastEditTime: 2020-11-23 18:05:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\dataStructures\Dictionary\DictionaryJavaScirpt.js
 */
const twoSum = (nums, target) => {
    const hashmap = {}
    for (let i = 0  ; i < nums.length ;   i++){
        console.log(hashmap)  
        const diff = target - nums[i]  
        
        
        console.log(diff)  
        console.log(`------`)  
        if(hashmap[diff] !== undefined && hashmap[diff] !== i) 
        {
            console.log(`this is :${hashmap[diff]}`)
            return [i, hashmap[diff]]  
        } 
		hashmap[nums[i]] = i
    }
}

const result = twoSum([10,11,12,13],25)  
console.log(result)      