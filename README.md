# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Worst Case

In the worst case, every permutation has to be checked. This algorithm swaps values 
on every iteration of the outer loop so that each swap generates a unique permutation. 
Every array will have n! unique permutations. Every permutation has to be checked for 
being sorted which takes a complexity of $\Theta(n)$. Additionally, there is a while 
loop at the end of the outer loop. However it only iterates through at most n elements, 
the same as the isSorted() function, so it won't affect the asymptotic complexity. 
This leaves us with a complexity of $\Theta(n \cdot n!)$

### Best Case

The best case is an already sorted array. The array is checked once and then returned.  
This leaves us with a complexity of $\Theta(n)$. 

### Average Case

On average, half the permutations would have to be checked. Therefore, n!/2 permutations 
would have to be generated. Because everything else is the same as the worst case complexity 
and the constant doesn't matter, this will also have a complexity of $\Theta(n \cdot n!)$

### Random Permutations

If permutations were randomly generated with no memory, then the best case would also be 
$Theta(n)$ as the array would already be sorted and just has to be checked for being sorted. 

The worst case would simply be that the correct permutation is never randomly generated. 
There is not really a definable time complexity in this case. 

On average, since there are n! cases, with a 1 in n! chance of generating the correct value,
we can expect n! permutations to be generated. This also gives us a complexity of 
$\Theta(n \cdot n!)$.

## Extra Help

After struggling for hours to come up with my own algorithm for generating permutations,
I was unsuccessful. My code is based on an iterative version of Heap's Algorithm, found on
https://en.wikipedia.org/wiki/Heap%27s_algorithm. This algorithm was very close to how I
was trying to implement my own method, but I didn't think of having different cases for 
when the iterator is even or odd. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
