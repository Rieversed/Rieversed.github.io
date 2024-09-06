function convertFile() {
    const fileInput = document.getElementById('fileInput');
    const statusMessage = document.getElementById('statusMessage');

    if (fileInput.files.length === 0) {
        statusMessage.textContent = "Please upload a file.";
        return;
    }

    const file = fileInput.files[0];
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();

    if (fileExtension !== 'mrpack' && fileExtension !== 'zip') {
        statusMessage.textContent = "Invalid file type. Please upload a .mrpack or .zip file.";
        return;
    }

    statusMessage.textContent = "Converting " + fileName + "...";

    // Simulate conversion with a delay
    setTimeout(() => {
        const newExtension = fileExtension === 'mrpack' ? 'zip' : 'mrpack';
        const newFileName = fileName.replace(fileExtension, newExtension);

        // Simulate download of converted file
        const blob = new Blob([file], { type: 'application/octet-stream' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = newFileName;
        downloadLink.click();

        statusMessage.textContent = "Conversion complete!";
    }, 2000); // Simulate a 2-second conversion delay
}
