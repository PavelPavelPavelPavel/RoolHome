export const createPhotosArr = (arr) => {
    const photosArrForRender = [];
    arr.forEach((item) => {
        photosArrForRender.push({
            id: crypto.randomUUID(),
            fileName: item,
        });
    });
    return photosArrForRender;
}