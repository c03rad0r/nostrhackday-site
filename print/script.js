function createQRCode() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('inputArea').classList.add('hidden');
    
    const qrCodeElement = document.getElementById('qrCode');
    const outputText = document.getElementById('outputText');

    new QRCode(qrCodeElement, {
        text: userInput,
        width: window.innerWidth,
        height: window.innerWidth
    });
	outputText0.innerText = "NOSTR HACKDAY 2K25";
	   outputText1.innerText = "";
	outputText2.innerText = "";
	outputText3.innerText = "";
	outputText4.innerText = "";
	outputText5.innerText = "";
	outputText6.innerText = "";
    document.getElementById('qrArea').classList.remove('hidden');
}

