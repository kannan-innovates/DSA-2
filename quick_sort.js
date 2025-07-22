     function quickSort(arr, low = 0, high = arr.length - 1) {
          if (low < high) {
               const pIndex = partition(arr, low, high);
               quickSort(arr, low, pIndex - 1);
               quickSort(arr, pIndex + 1, high);
          }
          return arr;
     }

     function partition(arr, low, high) {
          const pivot = arr[low];
          let i = low;
          let j = high;

          while (i < j) {

               while (arr[i] <= pivot && i < high) i++;


               while (arr[j] > pivot && j > low) j--;


               if (i < j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
               }
          }


          [arr[low], arr[j]] = [arr[j], arr[low]];
          return j;
     }


     console.log(quickSort([7, 2, 4, 1, 9, 3])); 