document.getElementById("insertion").addEventListener("click", async () => {
    const bars = document.querySelectorAll(".bar");
    console.log(`Total bars: ${bars.length}`);
    await insertionSort(bars);
});

async function insertionSort(arr){
    
    for(let i = 1; i < arr.length; i++){
        arr[i].style.background = "red"
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to visualize
        let temp = arr[i].style.height;
        let j = i-1;
        arr[j].style.background = "red"
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to visualize
        while(j >= 0 && parseInt(arr[j].style.height) > parseInt(temp)){
            arr[j + 1].style.height = arr[j].style.height;
            arr[j].style.background = "green";
            j--;
        }
        
        arr[j + 1].style.height = temp;
        arr[i].style.background = "green"
        
    }
    
}