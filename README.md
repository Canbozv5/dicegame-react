# 🎲 Reaktif Zar Atma Oyunu (Dice Game)

Bu proje, bir frontend eğitim ödevi olarak, **React** ve **Vite** kullanılarak geliştirilmiş basit bir zar atma oyunudur. Projenin temel amacı, React'te durum yönetimi (`useState`), zamanlayıcılar (`setTimeout`, `setInterval`) ve bileşenler arası iletişim (`props`) becerilerini uygulamaktır.

## Canlı Demoya Ulaşmak İçin (Opsiyonel - Eğer projeyi yayınlarsan)

📌 [Projenizin Canlı Demo Bağlantısı Buraya Gelecek] 📌

---

## İçindekiler

- [Genel Bakış ve Amaç](#genel-bakış-ve-amaç)
- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Katkıda Bulunma](#katkıda-bulunma)
- [İletişim](#iletişim)

---

## Genel Bakış ve Amaç

Bu proje, bir oyuncu (Kullanıcı) ile Bilgisayar (PC) arasında geçen tek turluk basit bir şans oyunudur. Her el atılan zarlar karşılaştırılır ve kazanan (yüksek zar atan), kaybeden veya berabere sonucu anında ekranda gösterilir.

**Projenin eğitim amaçlı temel hedefleri:**

- React ile temel **Durum Yönetimi (State Management)** uygulaması.
- Zar sallama efekti için **`setTimeout`** ve **`setInterval`** kullanılarak zamanlama mantığı oluşturmak.
- Bileşenler arası veri akışını **Props** ile yönetmek.
- Basit **Flexbox** yapısı kullanarak arayüzü yan yana hizalamak.

## Özellikler

- **Tek El Atma:** Kullanıcı ve PC aynı anda zar atar.
- **Dinamik Sonuç:** Her atış sonrası "KAZANDI", "KAYBETTİ" veya "BERABERE" sonucu ekranda belirir.
- **Zar Sallama Efekti:** Zar atma butonuna basıldıktan sonra, sonuç gelene kadar (yaklaşık 3 saniye) zarların yüzleri rastgele değişir. Bu süre zarfında buton devre dışı kalır.
- **Kullanıcı Adı Güncelleme:** Oyuncu, kendi kullanıcı adını anlık olarak güncelleyebilir.
- **Skor Takibi:** Kullanıcının ve PC'nin toplam galibiyet sayıları takip edilir.
- **Basit Dark Mode Tasarım:** Proje, öğrenci ödevine uygun, minimal ve koyu tema üzerine kurulmuş bir arayüze sahiptir.

## Kullanılan Teknolojiler

- **React:** Uygulamanın temelini oluşturan JavaScript kütüphanesi.
  - `useState` ve `useEffect` kullanımı.
- **Vite:** Hızlı geliştirme ortamı ve bundler (derleyici).
- **CSS:** Temel stil ve yatay hizalama için **Flexbox** kullanımı.

## Katkıda Bulunma

Bu bir öğrenci ödevi olsa da, her türlü yapıcı eleştiri ve öneri gelişime açıktır.

1.  Bu depoyu **fork edin**.
2.  Değişikliklerinizi yapın.
3.  Bir **Pull Request (PR)** oluşturun.

## İletişim

Can BOZ - [LinkedIn](https://www.linkedin.com/in/emrecanboz)
