async function selectionSort() {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length - 1; i++) {
        let minimum = i; // Assume the first unsorted element is the minimum
        bars[minimum].style.background = "blue"; // Highlight current index

        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to visualize

        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.background = "red"; // Highlight comparison

            await new Promise(resolve => setTimeout(resolve, 1000));

            const height1 = parseInt(bars[minimum].style.height);
            const height2 = parseInt(bars[j].style.height);

            if (height2 < height1) { // Update minimum index if a smaller element is found
                bars[minimum].style.background = "greenyellow"; // Reset old minimum
                minimum = j;
                
            } else {
                bars[j].style.background = "greenyellow"; // Reset if not minimum
            }
        }

        // Swap the minimum element with the first unsorted element
        if (minimum !== i) {
            await swap(bars[i], bars[minimum]); // Swapping elements
        }

        bars[i].style.background = "green"; // Mark as sorted
    }
    bars[bars.length - 1].style.background = "green"; // Mark last element as sorted
    console.log("Selection sort completed!");
}

// Function to swap bar heights
async function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    el1.style.height = height2;
    el2.style.height = height1;

    await new Promise(resolve => setTimeout(resolve, 300)); // Delay for animation
}

// Add event listener to selection sort button
document.getElementById("selection").addEventListener("click", selectionSort);


// async function selectionSort () {
//     // temporary variable to store the position of minimum element
//     const bars = document.querySelectorAll(".bar");
//     let minimum;        
//     // reduces the effective size of the array by one in  each iteration.

//     for(let i = 0; i < bars.length-1 ; i++)  {

//        // assuming the first element to be the minimum of the unsorted array .
//        let minimum = i; // Assume the first unsorted element is the minimum

//        bars[i].style.background = "blue"; // Highlight current index
//        await new Promise(resolve => setTimeout(resolve, 1000));
//         for(let j = 0; j < bars.length-i-1 ; j++ ) {
//             bars[j].style.background = "red"; // Highlight comparison

//             await new Promise(resolve => setTimeout(resolve, 1000));

//             const height1 = parseInt(bars[minimum].style.height);
//             const height2 = parseInt(bars[j].style.height);
            
//             if (height2 < height1) { // Update minimum index if a smaller element is found
//                 bars[minimum].style.background = "greenyellow"; // Reset old minimum
//                 minimum = j;
//                 bars[minimum].style.background = "orange"; // Highlight new minimum
//             } else {
//                 bars[j].style.background = "greenyellow"; // Reset if not minimum
//             }
//         }
//         // Swap the minimum element with the first unsorted element
//         if (minimum !== i) {
//             swap(bars[i], bars[minimum]);
//         }

//         bars[i].style.background = "green"; // Mark as sorted
//     }
//     bars[bars.length - 1].style.background = "green"; // Mark last element as sorted
//     console.log("Selection sort completed!");
// }

// // Function to swap bar heights
// function swap(el1, el2) {
//     const style1 = window.getComputedStyle(el1);
//     const style2 = window.getComputedStyle(el2);

//     const height1 = style1.getPropertyValue("height");
//     const height2 = style2.getPropertyValue("height");

//     el1.style.height = height2;
//     el2.style.height = height1;
// }

// // Add event listener to selection sort button
// document.getElementById("selection").addEventListener("click", selectionSort);
//       // putting minimum element on its proper position.
     
// //     await new Promise(resolve => setTimeout(resolve, 1000)); //set delay for swap
// //     bars[i].style.background = "green";
// //     }
// //     console.log("completed!");
// // }
// // function swap(el1, el2){
// //     const style1 = window.getComputedStyle(el1);
// //     const style2 = window.getComputedStyle(el2);

// //     const transform1 = style1.getPropertyValue("height");
// //     const transform2 = style2.getPropertyValue("height");
// //     const temp = transform1;
// //     el1.style.height = transform2;
// //     el2.style.height = temp;
// // }

// // document.getElementById("selection").addEventListener("click", selectionSort); 

// // async function selectionSort() {
// //     const bars = document.querySelectorAll(".bar");

// //     for (let i = 0; i < bars.length - 1; i++) {
// //         let minimum = i; // Assume the first unsorted element is the minimum

// //         bars[i].style.background = "blue"; // Highlight current index
// //         await new Promise(resolve => setTimeout(resolve, 500));

// //         for (let j = i + 1; j < bars.length; j++) {
// //             bars[j].style.background = "red"; // Highlight comparison

// //             await new Promise(resolve => setTimeout(resolve, 500));

// //             const height1 = parseInt(bars[minimum].style.height);
// //             const height2 = parseInt(bars[j].style.height);

// //             if (height2 < height1) { // Update minimum index if a smaller element is found
// //                 bars[minimum].style.background = "greenyellow"; // Reset old minimum
// //                 minimum = j;
// //                 bars[minimum].style.background = "orange"; // Highlight new minimum
// //             } else {
// //                 bars[j].style.background = "greenyellow"; // Reset if not minimum
// //             }
// //         }

// //         // Swap the minimum element with the first unsorted element
// //         if (minimum !== i) {
// //             swap(bars[i], bars[minimum]);
// //         }

// //         bars[i].style.background = "green"; // Mark as sorted
// //     }
// //     bars[bars.length - 1].style.background = "green"; // Mark last element as sorted
// //     console.log("Selection sort completed!");
// // }

// // // Function to swap bar heights
// // function swap(el1, el2) {
// //     const style1 = window.getComputedStyle(el1);
// //     const style2 = window.getComputedStyle(el2);

// //     const height1 = style1.getPropertyValue("height");
// //     const height2 = style2.getPropertyValue("height");

// //     el1.style.height = height2;
// //     el2.style.height = height1;
// // }

// // // Add event listener to selection sort button
// // document.getElementById("selection").addEventListener("click", selectionSort);
