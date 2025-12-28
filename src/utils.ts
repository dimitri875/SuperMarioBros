// Just parse CSV -> 2D Array
// Argument -> LevelFile
export async function loadLevel(filePath: string): Promise<number[][]> {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to load CSV: ${response.statusText}`);
  }

  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse<number[]>(csvText, {
      skipEmptyLines: true,
      dynamicTyping: true,  // Convert to number automatically
      complete: (result) => {
        resolve(result.data as number[][]);
      },
      error: (error: any) => reject(error),
    });
  });
};

export function loadSpriteSheet(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onerror = reject;
    image.onload = () => resolve(image);
  })
}
