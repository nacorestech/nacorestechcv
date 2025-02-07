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

  // Xử lý mở ứng dụng mạng xã hội trên mobile nhưng vẫn giữ tab trình duyệt
  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const url = this.href;
      const platform = this.classList[1]; // Lấy class thứ hai làm tên nền tảng
      let appUrl = "";

      switch (platform) {
        case "facebook":
          appUrl = "fb://page/" + url.split("facebook.com/")[1];
          break;
        case "tiktok":
          appUrl = "snssdk1233://user/profile/";
          break;
        case "instagram":
          appUrl =
            "instagram://user?username=" + url.split("instagram.com/")[1];
          break;
        case "youtube":
          appUrl = "vnd.youtube://channel/" + url.split("youtube.com/@")[1];
          break;
        default:
          window.open(url, "_blank");
          return;
      }

      window.open(appUrl, "_self"); // Mở app
      setTimeout(() => {
        window.open(url, "_blank"); // Nếu không mở được app, mở trình duyệt
      }, 2000);
    });
  });
});
