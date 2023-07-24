// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burstMode: number
// }

// interface Story {
//     createStory(): void
// }

// class Instagram implements TakePhoto {
//     // cameraMode: string = ""
//     // filter: string = ""
//     // burstMode: number = 0
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burstMode: number
//     ) {}
// }


// class Youtube implements TakePhoto, Story {
//     constructor (
//         public cameraMode: string,
//         public filter: string,
//         public burstMode: number,
//         public short: string
//     ) {}

//     createStory(): void {
//         console.log("Story was created")
//     }
// } 