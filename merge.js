
document.getElementById("merge").addEventListener("click", async () => {
    const bars = document.querySelectorAll(".bar");
    console.log(`Total bars: ${bars.length}`);
    await mergeSort(bars, 0, bars.length - 1);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
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
    const speed = document.querySelector("#sort_speed").value;
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
        await new Promise(resolve => setTimeout(resolve, speed));

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
        await new Promise(resolve => setTimeout(resolve, speed));
        arr[k].style.height = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        await new Promise(resolve => setTimeout(resolve, speed));
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







