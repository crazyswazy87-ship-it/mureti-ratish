/** Generates a jagged "torn paper" polygon clip-path, teeth across the top edge. */
export function tornEdgeClipPath(teeth = 18, amplitude = 3): string {
  const points: string[] = [];
  for (let i = 0; i <= teeth; i++) {
    const x = (i / teeth) * 100;
    const y = i % 2 === 0 ? 0 : amplitude;
    points.push(`${x.toFixed(2)}% ${y}%`);
  }
  points.push("100% 100%", "0% 100%");
  return `polygon(${points.join(", ")})`;
}
