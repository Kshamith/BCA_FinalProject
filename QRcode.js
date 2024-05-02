function generateQRCode() {
    let content = document.getElementById('qr-content').value;
    let size = 200;
    let qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${content}`;
    document.getElementById('qr-image').src = qrCodeURL;
}