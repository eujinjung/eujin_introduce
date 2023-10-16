// Canvas 변수 설정
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 그리기 관련 변수 설정
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// 그리기 시작 이벤트 핸들러
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// 그리기 중 이벤트 핸들러
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// 그리기 종료 이벤트 핸들러
function stopDrawing() {
    isDrawing = false;
}

// 그림 그리기 버튼 클릭 시
document.getElementById('drawButton').addEventListener('click', () => {
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDrawing);
});

// 업로드 버튼 클릭 시
document.getElementById('uploadButton').addEventListener('click', () => {
    const dataURL = canvas.toDataURL(); // 캔버스 이미지를 데이터 URL로 변환
    saveToGallery(dataURL); // 갤러리에 저장
});

// 그리기 목록에 이미지 추가
function addToGallery(imageURL) {
    const galleryBody = document.getElementById('galleryBody');
    const row = document.createElement('tr');
    const imageCell = document.createElement('td');
    const timeCell = document.createElement('td');
    const image = document.createElement('img');

    image.src = imageURL;
    imageCell.appendChild(image);
    timeCell.textContent = new Date().toLocaleString();

    row.appendChild(imageCell);
    row.appendChild(timeCell);
    galleryBody.appendChild(row);
}

// 갤러리에 이미지 저장
function saveToGallery(imageURL) {
    addToGallery(imageURL);
    // 여기에서 이미지를 서버로 업로드하는 작업을 수행할 수 있습니다.
}