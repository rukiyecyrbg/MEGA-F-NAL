import React from "react";
import "./NewsSection.css"; // Stil dosyası

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2 className="news-title">Son Haberler</h2>
      <div className="news-container">
        <div className="news-item">
          <img
            src="https://www.meram.bel.tr/upload/medya/4_231.jpg"
            alt="Karne sevinci"
          />
          <div className="news-content">
            <h3>Mega Yazılım Akademisi</h3>
            <p>
              Yazılım dünyasına adım atmak ya da kendini geliştirmek isteyenler
              için Meram Belediyesi’nden müjdeli bir haber geldi. Meram
              Belediyesi Meram Gelişim Akademisi (MEGA) bünyesinde hayata
              geçirilen ‘MEGA Yazılım Akademisi’ kapılarını yazılım meraklıları
              için açıyor.
            </p>
            <a href="haber_linki" className="news-read-more">
              Devamını Oku
            </a>
          </div>
        </div>

        <div className="news-item">
          <img
            src="https://www.meram.bel.tr/upload/medya/1-1_192.jpg"
            alt="Şivlilik"
          />
          <div className="news-content">
            <h3>MERAM’IN MAHALLELERİNDE BİSİKLET YARIŞI HEYECANI YAŞANDI</h3>
            <p>
              Meram Belediyesi tarafından çocuklara yönelik düzenlenen Düz
              Bisiklet Yarışları’nın startı Gödene ve Alpaslan mahallelerinde
              verildi. Renkli anlara sahne olan etkinlikte konuşan Meram
              Belediye Başkanı Mustafa Kavuş, “Mahallelerimizde heyecan ve coşku
              ile gerçekleşen etkinliklerde hem hemşehrilerimiz hem de
              çocuklarımızla mutlu bir gün geçirdik” dedi.
            </p>
            <a href="haber_linki" className="news-read-more">
              Devamını Oku
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
