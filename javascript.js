window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // 複数のスマホ用ドロップダウンメニューが、1つ開いたら他は閉じるように修正
  const dropdownTogglesSp = document.querySelectorAll('.dropdown-toggle-sp');
  const allDropdownMenusSp = document.querySelectorAll('.dropdown-menu-sp');

  dropdownTogglesSp.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // リンクのデフォルト動作を停止
      
      // クリックされたメニューを特定
      const currentMenu = toggle.nextElementSibling;
      
      // 他のすべてのメニューを一旦閉じる
      allDropdownMenusSp.forEach(menu => {
        // もし、今ループしているメニューが、クリックされたメニューと違うものであれば
        if (menu !== currentMenu) {
          menu.classList.remove('show'); // showクラスを削除して閉じる
        }
      });
      
      // クリックされたメニューの表示/非表示を切り替える
      currentMenu.classList.toggle('show');
    });
  });
  
  // =========================================================================
  // ⭐ Firebase関連のコードは削除またはコメントアウトして軽量化
  // =========================================================================

  // ⭐ パートナーカード スライドショーロジックは削除 (このLPでは使用しないため)
});