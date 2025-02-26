document.getElementById("insertion").addEventListener("click", async () => {
    const bars = document.querySelectorAll(".bar");
    console.log(`Total bars: ${bars.length}`);
    await insertionSort(bars);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
});

async function insertionSort(arr){
    const speed = document.querySelector("#sort_speed").value;
    for(let i = 1; i < arr.length; i++){
        arr[i].style.background = "red"
        await new Promise(resolve => setTimeout(resolve, speed)); // Delay to visualize
        let temp = arr[i].style.height;
        let j = i-1;
        arr[j].style.background = "red"
        await new Promise(resolve => setTimeout(resolve, speed)); // Delay to visualize
        while(j >= 0 && parseInt(arr[j].style.height) > parseInt(temp)){
            arr[j + 1].style.height = arr[j].style.height;
            arr[j].style.background = "green";
            j--;
        }
        
        arr[j + 1].style.height = temp;
        arr[i].style.background = "green"
        
    }
    
}