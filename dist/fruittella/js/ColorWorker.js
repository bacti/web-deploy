(function(){
    importScripts('pako.inflate.min.js');

    let imageData;

    function init(){
        addEventListener("message", function(event){
            switch (event.data.message){
                case "setImageData":
                    imageData = event.data.imageData;
                    break;
                case "processImageData":
                    processImageData(event.data.imageBuffer);
                    break;
            }
        });
    }

    function processImageData(compressedData){
        let imageBuffer = pako.inflate(atob(compressedData));
        let pixelArray = imageData.data;
        let newPixelData = new Uint8Array(imageBuffer);
        let imageDataSize = imageData.data.length;
        for(let i = 0; i < imageDataSize; i++){
            imageData.data[i] = newPixelData[i];
        }
        self.postMessage({"message": "imageReady", "imageData": imageData});
    }

    init();
})();