use wasm_bindgen::prelude::*;
// wasm-pack build

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn read(file_reader: web_sys::FileReader) {
    match file_reader.result() {
        Ok(value) => match value.as_string() {
            Some(data) => log(&String::from(data)),
            None => log("Error")
        },
        Err(_) => log("Error")
    }
}