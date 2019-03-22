// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer,contentTracing}=require("electron");
const fs = require("fs");


class Renderer {
    constructor() {
        this.btnSelectDestDir = document.getElementById("btn-select-dest-dir");
        this.formSaveData = document.getElementById("form-data");

        this.addListeners();
    }

    addListeners() {
        var self = this;

        this.btnSelectDestDir.onclick = function () {
            console.log('1')
  
            function traceCallBack()
            {
                console.log('crash')
            }
          
            const options1 = {
              categoryFilter: '*',
              traceOptions: 'record-until-full,enable_sampling'
            }
            console.log('2')
         
            
            var files = ipcRenderer.sendSync("openDir");
            console.log('3')
            if (files && files.length) {
                self.destDir = files[0];
                alert(files);
            }
        };

        this.formSaveData.onsubmit = function (e) {
            e.preventDefault();

            if (!self.destDir) {
                alert("请选择要保存的目录");
                return;
            }

            var destFile = `${self.destDir}/data.txt`;
            fs.writeFile(destFile, this["txt"].value, function (err) {
                if (!err) {
                    alert(`成功保存文件${destFile}`);
                } else {
                    alert("无法保存文件");
                }
            })
        };
    }
}
new Renderer();