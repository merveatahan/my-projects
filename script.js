// 1. yontem
// fetch("https://sozluk.gov.tr/atasozu")
//   .then((gelen) => gelen.json())
//   .then((veri) => console.log(veri));

//giriş ve çıkış için kullanacağımız HTML nesnelerini değişkenlere alalım
const sonuc = document.getElementById("sonuc");
const aramaKutusu = document.getElementById("aramaKutusu");
const aramaListesi = document.getElementById("aramaListesi");

//JSON kaynağında aldiğimiz verileri sayfada tutmak için dizi değiskenleri olustur
const anahtarKelimeler = [];
const deyimlerSozler = [];

//2.yontem:daha performanslı çalışan asynchronous fonksiyon:aynı anda bırden fazla işlemı yapıyor
verileriYükle();
async function verileriYükle() {
  const sunucuYaniti = await fetch("https://sozluk.gov.tr/atasozu");
  let veriler = await sunucuYaniti.json();

  console.log(veriler);

  veriler.forEach((eleman) => {
    anahtarKelimeler.push(eleman.anahtar);
    deyimlerSozler.push(eleman.sozum);
  });

  const birlesmisKelimeler = [...new Set(anahtarKelimeler)];
  //   console.log(anahtarKelimeler);

  birlesmisKelimeler.sort(() => Math.random() - 0.5);
  let sayac = 0;
  birlesmisKelimeler.forEach((kelime) => {
    if (sayac < 5) {
      const yeniOneri = document.createElement("option");
      aramaListesi.appendChild(yeniOneri);
      yeniOneri.value = kelime;
    }
    sayac++;
  });
}

aramaKutusu.addEventListener("input", (e) => sonuclariFiltrele(e.target.value));

function sonuclariFiltrele(arananKelime) {
  sonuc.innerHTML = " ";
  const aramaKriteri = new RegExp(arananKelime, "gi");
  let eslesenler = deyimlerSozler.filter((soz) => aramaKriteri.test(soz));

  // console.log(eslesenler); // o test etti GeolocationCoordinates,benımkı getirmedi

  if (arananKelime.length < 3) {
    //onda 3 harf altına öneri çıkarmıyor bende olmadı
    eslesenler = [];
  }

  eslesenler.forEach((es) => {
    const siradakiSonuc = document.createElement("li");
    sonuc.appendChild(siradakiSonuc);
    siradakiSonuc.innerHTML = es;
  });
}
