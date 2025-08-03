abstract class TakePhoto1 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    return 8;
  }
}

class FaceBook extends TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("testtt");
  }
}
const mm = new FaceBook("test", "test2", 6);

mm.getReelTime;
