export const saveImage = async (drawingLink: string, title?: string) => {
  async function toDataURL(url: string) {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
  }

  const a = document.createElement('a');
  a.href = await toDataURL(drawingLink);
  a.download = title ?? 'image.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
