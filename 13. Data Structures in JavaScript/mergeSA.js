function merge(arr1, arr2) {
    let size1 = arr1.length;
    let size2 = arr2.length;
    let left = 0, right = 0;
    let ans = [];
    while(left < size1 && right < size2) {
        if (arr1[left] < arr2[right]) {
            ans.push(arr1[left]);
            left++;
        } else {
            ans.push(arr2[right]);
            right++; 
        }
    }

    while(left < size1) {
        ans.push(arr1[left]);
        left++;
    }

    while(right < size2) {
        ans.push(arr2[right]);
        right++;
    }
    return ans;
}

function merge2(arr1, arr2) {
    let ans = [].concat(arr1, arr2);
    return ans.sort((a, b) => a - b);
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftPart = mergeSort(arr.slice(0, mid));
    let rightPart = mergeSort(arr.slice(mid));
    return merge2(leftPart, rightPart);
}

let array = [4,6,8,3,5,7,9,0,4,78,34,7,325,7,4,52,7];
console.log(mergeSort(array));
