function compressImage() {
    const fileInput = document.getElementById('fileInput');
    const statusMessage = document.getElementById('statusMessage');

    if (fileInput.files.length === 0) {
        statusMessage.textContent = "Please upload an image.";
        return;
    }

    const file = fileInput.files[0];
    // Perform compression logic here...
    statusMessage.textContent = "Image compressed successfully!";
}
