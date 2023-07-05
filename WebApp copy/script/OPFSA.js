
onmessage = async (e) => {
                          async function returnFileHandle() {
                          const opfsRoot = await navigator.storage.getDirectory(); // A FileSystemDirectoryHandle whose type is "directory" and whose name is "".
                          const fileHandle = await opfsRoot.getFileHandle(e.data.fileName, {create: true})
                          return fileHandle;
                        }

                        async function writeToFile(fileHandle_para) {
                            let pos = {initial:0,
                                        final:0,}
                            const contents  = (e.data.dataObj);
                             // Get a writable stream.
                            const toSize = await fileHandle_para.getFile();
                            const received_text = await toSize.text();
                            const writable = await fileHandle_para.createWritable({keepExistingData : true,});
                            pos.final = received_text.length;
                            if(pos.final!=pos.initial)
                            {   
                               await writable.write({ 
                                type: "write", 
                                position : pos.final, 
                                data : `\n${contents}`,
                               });// Write the contents of the file to the stream.
                            }else{
                                await writable.write({ 
                                    type: "write", 
                                    position : pos.final, 
                                    data : `${contents}`,
                                   });
                            }  
                            await writable.close();// Close the stream, which persists the contents.
                            readFromFile(fileHandle_para);
                        }
                        
                        async function readFromFile(fileHandle_para){
                            const file = await fileHandle_para.getFile();
                            const readout = await file.text();    
                            postMessage(readout);
                        }

                        const retBack = returnFileHandle();

                        retBack.then((response) => {
                                    if(e.data.funName == "writeToFile") {
                                        writeToFile(response);

                                    }else{

                                    if(e.data.funName == "readFromFile") {
                                        readFromFile(response);
                                    }
                                    }
                        });
        
};