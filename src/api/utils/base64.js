// 이미지 파일을 base64로 변환시켜주는 코드
const imgToBase64 = e => {
  let img;
  const fileReader = new FileReader();
  const inputImage = e.target.files[0];

  fileReader.readAsDataURL(inputImage);
  fileReader.onloadend = () => {
    img = fileReader.result;
  };
};

export default imgToBase64;
