function partition(list, i, j) {
    let pivot = Math.floor(Math.random() * (j + 1 - i) + i); //j is max, j+1 for random inclusion
    while( i != j){
        while (list[i] < list[pivot]) {
            i++;
        }
        while (list[j] > list[pivot]) {
            j--;
        }
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return j;
}
function quicksort(list, i, j) {
    let pivot_point = partition(list, i, j);
    //sorts left side of initial pivot
    if ( i < pivot_point - 1) { //chose left side to exclude pivot point
        quicksort(list, i, pivot_point - 1);
    }
    //sorts right side of initial pivot
    if ( j > pivot_point) {
        quicksort(list, pivot_point, j)
    }
    return list;
}

let myList = [1,4,2,7,6,3,8,20,9,15,12,10,30];
console.log(quicksort(myList, 0, myList.length-1));