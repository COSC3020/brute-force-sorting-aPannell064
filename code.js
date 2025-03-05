function permutationSort(a) {
    var count = 1;
    var n = a.length
    //Array tracks number of swaps in each position at each level
    var swaps = new Array(n).fill(0);
    var i = 1;
    
    while(i < n) {
        if(isSorted(a)) {return count;}

        if(i%2 == 0) {[a[0], a[i]] = [a[i], a[0]];}
        else {[a[swaps[i]], a[i]] = [a[i], a[swaps[i]]];}

        count++;
        swaps[i]++;
        i=1;

        //Resets the values in swaps when they exceed their indexes
        while(swaps[i] >= i && i < n) {swaps[i++] = 0;}
    }
    return count; 
}

function isSorted(a) {
    for(var i = 1; i < a.length; i++) {
        if(a[i-1] > a[i]) {return false;}
    }
    return true;
}