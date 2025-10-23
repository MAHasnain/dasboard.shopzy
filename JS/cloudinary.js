const CLOUD_NAME = `CLOUD_NAME`;
const CLOUDINARY_UPLOAD_PRESET = `CLOUDINARY_UPLOAD_PRESET`;
// const CLOUDINARY_URL = `cloudinary://${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@${CLOUD_NAME}`;

const CLOUDINARY_BASEURL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export const uploadAnImage = async (userFile) => {
    const formData = new FormData();
    let file = userFile.files[0];
    formData.append('file', file)
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
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