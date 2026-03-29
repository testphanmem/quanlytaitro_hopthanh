// --- CẤU HÌNH HỆ THỐNG ---
// Thầy lưu ý thay link Deploy App Script (doPost) mới nhất vào đây sau khi cập nhật nhé
const linkapi = "https://script.google.com/macros/s/AKfycbys1vRnTRAgGnJLAR1CRoHMs0APmGfALISRylysGv06AyLM9_fun7cQroRj7l5aaVum/exec"; 

// --- HÀM KẾT NỐI API CHUNG ---
async function callServer(tenYeuCau, duLieuTai = {}) {
    duLieuTai.yeuCau = tenYeuCau;
    try {
        const phanHoi = await fetch(linkapi, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(duLieuTai)
        });
        return await phanHoi.json();
    } catch (loiMang) {
        console.error("Lỗi Fetch API:", loiMang);
        throw new Error("Lỗi đường truyền đến máy chủ. Vui lòng kiểm tra lại mạng hoặc liên kết triển khai!");
    }
}