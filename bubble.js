
async function bubbleSort(){
    const bars = document.querySelectorAll(".bar");
    const speed = document.getElementById("sort_speed").value;
    console.log(speed);

    for(let i = 0; i < bars.length - 1; i++){
        for(let j = 0; j < bars.length - i - 1;j++){
            bars[j].style.background = 'red';
            bars[j + 1].style.background = 'red';

            await new Promise(resolve => setTimeout(resolve, speed)); //set delay

            //get the height values of the bars
            const height1 = parseInt(bars[j].style.height);
            const height2 = parseInt(bars[j + 1].style.height);
            

            //compare the heights and swap
                if(height1 > height2){
                    swap(bars[j], bars[j+1]);
                    await new Promise(resolve => setTimeout(resolve, speed)); //set delay for swap
        
                }
                //revert the bar colors back to original
                bars[j].style.background = "greenyellow";
                bars[j + 1].style.background = "greenyellow";
                
            }
            bars[bars.length - i -1].style.background = "green";
        }
        bars[0].style.background = "green";
    }

    //swap function for swapping the bar heights
    function swap(el1, el2){
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");

        el1.style.height = transform2;
        el2.style.height = transform1;
    }

    document.getElementById("bubble").addEventListener("click", bubbleSort); // Call the function when button is clicked;