abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void;
    getReelTime(): number {
        return 9;
    }
}

//YOU CANNOT CREATE OBJECTS FROM AN ABSTRACT CLASS YOU HAVE TO EXTEND IT FROM ANOTHER CLASS


class Instagram extends TakePhoto {
     constructor(
        public cameraMode: string, 
        public filter: string,
        public burst: number
        ) {
            super(cameraMode, filter);
        }
        getSepia(): void {
            console.log("Sepia")
        }
}

const animish2 = new Instagram("test", "test", 3);

animish2.getReelTime();