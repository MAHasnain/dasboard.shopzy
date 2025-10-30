const CLOUD_NAME = `mahatta427`;
const UPLOAD_PRESET = `ml_default`;
// const CLOUDINARY_URL = `cloudinary://${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@mahatta427`;

const CLOUDINARY_BASEURL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export const uploadAnImage = async (userFile) => {
    const formData = new FormData();
    let file = userFile.files[0];
    formData.append('file', file)
    formData.append("upload_preset", UPLOAD_PRESET)
    // fetch(CLOUDINARY_BASEURL, {
    //     method: "POST",
    //     body: formData
    // }).then(response => {
    //     return response.text()
    // }).catch(error => {
    //     console.log(error);
    // }).then(data => {
    //     const result = JSON.parse(data);
    //     // console.log(result);
    //     return result;
    // })
    const response = await fetch(CLOUDINARY_BASEURL, {
        method: "POST",
        body: formData
    })
    const data = await response.json();
    console.log(data);
    return data;
}