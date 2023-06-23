async function getTheFile() {
    /*const pickerOpts = {
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    };*/
  
    // open file picker
    const [fileHandle] = await window.showOpenFilePicker();
    // get file contents
    const fileData = await fileHandle.getFile();
    return fileData;
  }