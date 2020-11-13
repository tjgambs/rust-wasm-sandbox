import * as wasm from "../pkg";

const element = document.createElement('div')
element.innerHTML = '<input type="file" multiple>'
const fileInput = element.firstChild
fileInput.addEventListener('change', () => {
    const file = Array.from(fileInput.files)[0]
    const reader = new FileReader()
    reader.onloadend = () => {
        wasm.read(reader)
    }
    reader.readAsBinaryString(file)
})
fileInput.click()