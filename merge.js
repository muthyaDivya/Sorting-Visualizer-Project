

document.getElementById("merge").addEventListener("click", async () => {
    const bars = document.querySelectorAll(".bar");
    console.log(`Total bars: ${bars.length}`);
    await mergeSort(bars, 0, bars.length - 1);
});

async function mergeSort(arr, left, right) {
    if (left >= right) return;

    const mid = Math.floor(left + (right - left) / 2);
    arr[mid].style.background = "skyblue";
    
    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
    
    
}
async function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temp arrays
    const L = [], R = [];
    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i].style.height;
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j].style.height;
    }

    let i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (parseInt(L[i]) <= parseInt(R[j])) {
            arr[k].style.height = L[i];
            arr[k].style.background = "orange";
            i++;
        } else {
            arr[k].style.height = R[j];
            arr[k].style.background = "orange";
            j++;
        }
        k++;
    }

    // Copy remaining elements
    while (i < n1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        arr[k].style.height = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        await new Promise(resolve => setTimeout(resolve, 100));
        arr[k].style.height = R[j];
        j++;
        k++;
    }

    // Reset colors after merge
    for (let i = left; i <= right; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        arr[i].style.background = "green";
    }
}


// async function merge(arr, left, mid, right) {
//     const n1 = mid - left + 1;
//     const n2 = right - mid;
//     // Create temp arrays
//     const L = new Array(n1);
//     const R = new Array(n2);
//     // Copy data to temp arrays L[] and R[]
//     for (let i = 0; i < n1; i++){
        
//         L[i] = arr[left + i];}
//     for (let j = 0; j < n2; j++){
        
//         R[j] = arr[mid + 1 + j];}

//     let i = 0, j = 0;
//     let k = left;
//     // Merge the temp arrays back into arr[left..right]
//     while (i < n1 && j < n2) {
//         await new Promise(resolve => setTimeout(resolve, 100));
//         const height1 =  parseInt(L[i].style.height);
//         const height2 =  parseInt(R[j].style.height);
//         const style1 = window.getComputedStyle(L[i]);
//         const style2 = window.getComputedStyle(R[j]);
//         const transform1 = style1.getPropertyValue("height");
//         const transform2 = style2.getPropertyValue("height");
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         if (height1 <= height2) {
            
//             arr[k].style.height= L[i].style.height  // ✅ Update arr[k] height
//             arr[k].style.background = "orange";
            
//             i++;
//         } else {
//             arr[k].style.height = R[j].style.height  // ✅ Update arr[k] height
//             arr[k].style.background = "orange";
//             j++;
//         }
//         k++;
//     }
//     // Copy the remaining elements of L[], if there are any
//     while (i < n1) {
//         await new Promise(resolve => setTimeout(resolve, 100));
//         arr[k].style.height = `${parseInt(L[i].style.height)}px`;
//         console.log(arr[k].style.height);
//         i++;
//         k++;
//     }

//     // Copy the remaining elements of R[], if there are any
//     while (j < n2) {
//         await new Promise(resolve => setTimeout(resolve, 100));
//         arr[k].style.height = `${parseInt(R[j].style.height)}px`;
//         j++;
//         k++;
//     }
// }




