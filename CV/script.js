// Khi DOM đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  const qrBtn = document.querySelector(".qr-btn");
  const modal = document.getElementById("qrModal");
  const closeBtn = document.querySelector(".close-btn");

  // Mở modal khi click nút QR
  qrBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Đóng modal khi click vào nút "×"
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Đóng modal nếu click ra ngoài hộp modal-content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
