document.addEventListener("DOMContentLoaded", function () {
    // Toggle submenu for "Nữ"
    const nuMenuItem = document.querySelector(".menu-item > a");
    const nuSubMenu = document.querySelector(".menu-item .sub-menu");
    if (nuMenuItem && nuSubMenu) {
        nuMenuItem.addEventListener("mouseenter", function () {
            nuSubMenu.style.display = "block";
        });
        nuMenuItem.addEventListener("mouseleave", function () {
            nuSubMenu.style.display = "none";
        });
    }

    // Nested submenu logic for "Áo"
    const womenItem = document.querySelectorAll(".menu-item .sub-menu > li > a");
    const womenSubMenu = document.querySelector(".women");
    if (womenItem && womenSubMenu) {
        womenItem.forEach(item => {
            item.addEventListener("mouseenter", function () {
                womenSubMenu.style.display = "block";
            });
            item.addEventListener("mouseleave", function () {
                womenSubMenu.style.display = "none";
            });
        });
    }

    // Image switcher
document.addEventListener("DOMContentLoaded", function () {
    // Image switcher
    const bigImg = document.querySelector(".product-content-left-big-img img");
    const smallImgs = document.querySelectorAll(".product-content-left-small-img img");

    smallImgs.forEach(function (imgItem) {
        imgItem.addEventListener("click", function () {
            bigImg.src = imgItem.src; // Chuyển đổi hình ảnh lớn
            bigImg.alt = imgItem.alt; // Cập nhật thuộc tính alt nếu cần
        });
    });
});
//button

    // Toggle product detail and baoquan
    const detailButton = document.querySelector(".product-content-right-bottom-content-title-item:nth-child(1) p");
    const baoquanButton = document.querySelector(".product-content-right-bottom-content-title-item:nth-child(2) p");
    const detailContent = document.querySelector(".product-content-right-bottom-content-detail");
    const baoquanContent = document.querySelector(".product-content-right-bottom-content-baoquan");

    // Hiển thị nội dung chi tiết ban đầu
    detailContent.style.display = "block";
    baoquanContent.style.display = "none";

    if (detailButton) {
        detailButton.addEventListener("click", function () {
            detailContent.style.display = detailContent.style.display === "none" ? "block" : "none";
            baoquanContent.style.display = baoquanContent.style.display === "none" ? "block" : "none";
        });
    }

    if (baoquanButton) {
        baoquanButton.addEventListener("click", function () {
            detailContent.style.display = "none";
            baoquanContent.style.display = "block";
        });
    }
});

