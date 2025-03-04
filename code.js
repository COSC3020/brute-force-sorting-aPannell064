
function permutationSort(a) {
    var count = 1;
    
    var n = a.length
    var c = new Array(n).fill(0);
    var i = 1;
    
    while(i < n) {
        if(isSorted(a)) {return count;}

        //if(i%2 == 0) {
        [a[0], a[i]] = [a[i], a[0]];
        //}
        //else {[a[c[i]], a[i]] = [a[i], a[c[i]]];}

        count++;
        c[i]++;
        i=1;
        //console.log(a)
        for(var j = i; c[j] >= j; j++) {c[i++] = 0; }
    }
    
    return count; 

}

function isSorted(a) {
    for(var i = 1; i < a.length; i++) {
        if(a[i-1] > a[i]) {return false;}
    }
    return true;
}

//console.log(permutationSort([1,2,4,3]))
//console.log(permutationSort([2,1,3]))
//console.log(permutationSort([3,1,2]))
//console.log(permutationSort([1,3,2]))
//console.log(permutationSort([2,3,1]))
//console.log(permutationSort([3,2,1]))

/*
This implementation works by finding all permuations found by between just the first two elements. 
Once all of those permutations are found (there is only two at this level so only one swap needs to be made)
the 

*/