myList = [1,2,5,8]
myTarget = 7

def twoSum(arr,Target):
    hashmap={}
    for i in range(len(arr)):
        currentNum = arr[i]
        diff = Target - currentNum
        if diff in hashmap:
            return [hashmap[diff], i]
        else:
            hashmap[currentNum] = i

print(twoSum(myList,myTarget))