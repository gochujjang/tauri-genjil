// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
#[tauri::command]
fn hitung(angkaInt: i32) -> String {
    if angkaInt % 2 == 0 {
        format!("Angka {} adalah Genap", angkaInt)
    } else {
        format!("Angka {} adalah Ganjil", angkaInt)
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![hitung])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
