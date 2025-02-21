
document.getElementById("quick").addEventListener("click", async () => {
    const bars = document.querySelectorAll(".bar");
    console.log(`Total bars: ${bars.length}`);
    await quickSort(bars, 0, bars.length - 1);
    console.log("complete!");
});

async function quickSort(arr, start, end){
    if(end <= start) return;
    let pivot = await partition(arr, start, end);
    await quickSort(arr, start, pivot - 1);
    await quickSort(arr, pivot + 1, end);

}
async function partition(arr, start, end){
    arr[end].style.background = "blue";
    let pivot = parseInt(arr[end].style.height);
    let i = start - 1;
    for(let j = start; j <= end - 1; j++){
        arr[j].style.background = "red";
        await new Promise(resolve => setTimeout(resolve, 1000));
        if(parseInt(arr[j].style.height) < pivot){
            i++;
            arr[i].style.background = "orange";
            await new Promise(resolve => setTimeout(resolve, 1000));
            let temp = arr[i].style.height;
            
            arr[i].style.height = arr[j].style.height;
            
            arr[j].style.height = temp;

            arr[i].style.background = "greenyellow";
        }
        arr[j].style.background = "greenyellow";
    }
    i++;
    let temp = arr[i].style.height;
    arr[i].style.height = arr[end].style.height;
    arr[end].style.height = temp;

    arr[i].style.background = "green";
    await new Promise(resolve => setTimeout(resolve, 1000));
    for(let k=0;k<arr.length;k++){
        arr[k].style.background = "green";
    }
    return i;
}


