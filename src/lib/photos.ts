function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("No se pudo leer la foto"));
    img.src = src;
  });
}

function resize(width: number, height: number, max: number) {
  if (width <= max && height <= max) return { width, height };
  if (width > height) {
    return { width: max, height: Math.round((height * max) / width) };
  }
  return { width: Math.round((width * max) / height), height: max };
}

export async function compressPhoto(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    const size = resize(img.naturalWidth || img.width, img.naturalHeight || img.height, 960);
    const canvas = document.createElement("canvas");
    canvas.width = size.width;
    canvas.height = size.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("No se pudo preparar la foto");
    ctx.fillStyle = "#f4f0e8";
    ctx.fillRect(0, 0, size.width, size.height);
    ctx.drawImage(img, 0, 0, size.width, size.height);
    let quality = 0.72;
    let data = canvas.toDataURL("image/jpeg", quality);
    if (data.length > 450_000) {
      const smaller = resize(size.width, size.height, 720);
      canvas.width = smaller.width;
      canvas.height = smaller.height;
      ctx.fillStyle = "#f4f0e8";
      ctx.fillRect(0, 0, smaller.width, smaller.height);
      ctx.drawImage(img, 0, 0, smaller.width, smaller.height);
      quality = 0.58;
      data = canvas.toDataURL("image/jpeg", quality);
    }
    return data;
  } finally {
    URL.revokeObjectURL(url);
  }
}
