// TOPIC : Interface with Class

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

/** NOTE:
 * An interface describes the public contract of a class.
 * A class cannot satisfy a public interface property with a private property.
 */

/** NOTE:
 * An interface defines what is publicly available.
 * Private/protected members cannot be used to satisfy an interface's public members.
 */

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    // private burst: number, // interface member is publicly accessible,
    public burst: number, // interface member is publicly accessible,
    // public burst: string,
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {}
  createStory(): void {
    console.log('Story created');
  }
}

export {};
