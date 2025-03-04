
function permutationSort(a) {
    var count = 1;
    var n = a.length
    var c = new Array(n).fill(0);
    var i = 1;
    
    while(i < n) {
        if(isSorted(a)) {return count;}

        if(i%2 == 0) {[a[0], a[i]] = [a[i], a[0]];}
        else {[a[c[i]], a[i]] = [a[i], a[c[i]]];}

        count++;
        c[i]++;
        i=1;

        for(var j = i; c[j] >= j; j++) {c[i++] = 0;}
    }
    return count; 
}

function isSorted(a) {
    for(var i = 1; i < a.length; i++) {
        if(a[i-1] > a[i]) {return false;}
    }
    return true;
}