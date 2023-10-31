const elBtn = document.querySelector("#btn");
const elInfo = document.querySelector(".title");
const burjlar = {
    qoy: `Qo’y burji vakillari boshqa barcha burjlar ichida eng omadlisi sanaladi. Ular juda harakatchan va adolatdsizlikka chidab turolmaydi. Qo’ylar o’z fikrini to’g’ridan to’g’ri aytaveradi. O’z manfaatini birinchi o’ringa qo’yadi, bu boshqa kishilarga qanday tasir qilishi ularni qiziqtirmaydi. Ammo qo’ylarninh bu harakatidan xafa bo’lish kerak emas, chunki bu holat ularning ihtiyoridan tashqarida ro’y beradi.
    Qo’ylar chin dildan ishonadilar. Ularning fe’lida yashirin va murakkab narsaning o’zi yo’q. Ko’ngli juda nozik, ularga yoqmagan narsalar haqida arz qilishni yoqtirishadi.Qo’y burjidagilar biror bir mavqega erishmoqchi bo’lsalar, albatta muvafaqiyat qozonadilar. Qo’ylarning yana bir asosiy hislati — ularning to’griso’zligidir. Lekin bunga juda ishonib ham bo’lmaydi, chunki bu burj vakillari ma’suliyatni his qilmaydilar`,
    buzoq: `Buzok burji xarakteri va bir birlariga mosligi haqida malumot – buzok burji vakillari aynan mana shu – «men balki hech narsaga qodir emasdirman», degan o’y fikrdan qutilolmaydilar. Chunki ular o’zlarining kuch va imkoniyatlarini balog’atga etgachgina sarf qila boshlaydilar.
    Tavakkalchilik ularga umuman yot. Biror ishni boshlashdan avval uzoq o’ylanadilar, ikkilanadilar va ko’p hollarda mana shu uzoq ikkilanishlar samarasini ham o’zlarining foydalariga hal qila olmaydilar. Ular o’zlarini tanasi emas, ruhlari (miyyasi) boshqarishiga juda qattiq ishonadilar.`,
    egizak: `Egizaklar burji xarakteri va bir birlariga mosligi haqida malumot – Egizaklar burji ostida tavallud topgan insonlar hayotda juda ko’p narsalarni hohlashlari bilan o’ziga hos harakterga ega insonlar toifasiga kiradilar.
    Ular hayotlari davomida tez – tez o’zgarishlar qilib turishni va shu ishlari bilan atrofdagilarni qoyil qoldirishni yaxshi ko’radilar. Egizaklar orasida izzattalab, maqtanchoq, davlatini ko’z – ko’z qiladiganlar ko’plab topiladi. Ular – kayfiyatning odami. Shuningdek, egizaklar burji, turli tuman, to’g’irog’i, qarama – qarshi xarakterdagi insonlardir..`,
    qisqichbaqa: `Qisqichbaqa burji xarakteri va bir birlariga mosligi haqida malumot – Qisqichbaqa burji ostida tug’ilganlar o’zgacha xarakter sohiblaridirlar. Ularning fel – atvori atrofdagilar uchun hamisha jumboq bo’lib kelgan. Qalbidagini boshqalarga Doston qilishni unchalik ham hush ko’rmaydilar.Tabiatan juda ehtiyotkor bo’lganliklaridan, Qisqichbaqa burjidagilarni aldab yoki chuv tushurib bo’lmaydi. Siz ijobiy baholagan voqea hodisa yoki biror odam haqidagi fikrlaringizni ular asosli ravishda yo’qqa chiqara oladilar va aksincha, ular eng mudhish narsalarning ham go’zal tomonlari borligini isbotlab bera oladilar.`,
    arslon: `Arslon burji xarakteri va bir birlariga mosligi haqida malumot – Burjlar orasida qalban eng chiroyli va eng yaxshi fazilatlarni o’zlarida jamlagan burj vakili, bu Arslon burjidir.Ularga ham yaxshi yashashlari uchun doimo nimadir yetishmasligi mumkin, ammo Arslon burjidagilar buni odatiy hol sifatida qabul qila oladilar va butun hayotlaridan, o’tgan har bir kunidan minnatdor bo’lib yashaydilar.`,
    parizod: `Parizod burji xarakteri va bir birlariga mosligi haqida malumot – o’z oldilariga qo’ygan maqsadlariga mashaqqat bilan erishishdan cho’chimaydigan Parizod burji vakillari aslida muloqotga hadeb kirishib ketavermaydigan, kamgap odamlardir.Kam gapirsalarda nasihat qilishni juda yaxshi ko’radilar. Ularga nisbatan aslida mavjud bo’lmagan adolasizlikdan mudom aziyat chekib yashaydilar. Shu bois Parizod burjidagilarning hatti harakatlarida doimo odamlarga nisbatan ishonchsizlik va ehtiyotkorlik sezilib turadi.`,
    tarozi: `Tarozi burji xarakteri va bir birlariga mosligi haqida malumot – tabiatan juda ochiqko’ngil bo’lgan tarozi burji vakillari birinchi suhbatdayoq hamrohida o’zlari haqida yoqimli taasurot paydo qila oladilar.Bayram tadbirlarini, oilaviy bayramlarni, tug’ilgan kun sanalarini nishonlashni yaxshi ko’radigan mazkur burj vakillari o’sha davraning o’zidayoq odamlar etiborini o’zlariga jalb eta oladilar va o’zlariga nisbatan qiziqish paydo ham qiladilar.`,
    chayon: `CTarozi burji xarakteri va bir birlariga mosligi haqida malumot – tabiatan juda ochiqko’ngil bo’lgan tarozi burji vakillari birinchi suhbatdayoq hamrohida o’zlari haqida yoqimli taasurot paydo qila oladilar.Bayram tadbirlarini, oilaviy bayramlarni, tug’ilgan kun sanalarini nishonlashni yaxshi ko’radigan mazkur burj vakillari o’sha davraning o’zidayoq odamlar etiborini o’zlariga jalb eta oladilar va o’zlariga nisbatan qiziqish paydo ham qiladilar.`,
    oqotar: `O’qotar burji xarakteri va bir birlariga mosligi haqida malumot – odamshavanda davralarning guli bo’lgan o’qotar burji vakillari talay ijobiy xarakterga ega insonlar toifasidandirlar. Ularning yashashga, hayotga bo’lgan ishtiyoqlari shu qadar balandki, ulardagi ko’tarinki kayfiyatni ko’rgan zahoti har qanday odam kundalik tashvishlardan o’znini biroz bo’lsada chalg’igandek his etadi.O’qotar burji hamisha harakatchang, dilkash va samimiydirlar. Jamo ichida yurishni, ularga yo’lboshchilik qilishni, shovqin suronli hayotni hush ko’radilar`,
    echki: `Tog’ echkisi burji xarakteri va bir birlariga mosligi haqida malumot – tog’ echkisi burjiga mansub kishini deyarli har joyda uchratish mumkin. Bu Burjlar doim harakatda, faqat oldinga qadam tashlaydilar. Oddiy ko’z bilan qaraganda tog’ echkilari boshqalarga nisbatan kuchsizdek ko’rinadi, biroq oqibatda ularga yengilib qo’yishingiz hech gap emas.Bundan tashqari, ularning yana bir hususiyati shuki, o’zlaridan ilgarilab ketgan kimsalarni alohida hurmat qiladilar. Bu deganiki, ular kuchlilarni yoqtiradi. Tog’echkilari tanqidiy fikirlarini o’ylab o’tirmasdan ochiqchasiga aytishi mumkin. Bu bilan ular o’zlariga raqib ortirish ilinjida emas.`,
    qovga: `Qovg’a burji xarakteri va bir birlariga mosligi haqida malumot — deyarli barcha inson kamalakni yoqtiradi, ammo Qovg’a burji vakillari uni sevadi, sababi qovg’alar Kamalakda hayot kechiradi. Qovg’a burjidagilar kam bo’lsada orzulari ro’yobga chiqishiga umid bildiradi. Lekin bu burjdagilar ko’proq realist inson sanaladi.Bordiyu siz ushbu burj vakili bilan yaqin bo’lsangiz, demak kutilmagan sarguzashtlarga tayyor bo’lavering. Ularning ko’pchiligi mehribon hamda oqko’ngil insonlardir. Qovg’a burjidagilar jamoa fikriga ko’p hollarda qarshi chiqishadi va bu Qovg’alarga yoqadi.`,
    baliq: `Baliq burji xarakteri va bir birlariga mosligi haqida malumot – bu insonlarni katta ishlarda deyarli uchratish mushkul. Biroq baliq burji orasidan, ijodkor va badiy insonlar ko’plab yetishib chiqadi. Ularning yana bir hususiyatlaridan biri, rahbarlikka ega chiqishni hohlamaydilar. Mol dunyo ular uchun unchalik qiziq emas.Biroq ular pul topish borasida juda usta, bazi baliq burji vakillari, boyligini meros tariqasida qo’lga kiritishgan. Shuni aytish mumkinki, boshqalardan farqli o’laroq, ular ham pulga unchalik qarshi emas, taklif bo’lsa bas rad etmasdan qabul qilishadi. Lekin baliqlar pul vaqtincha kerak bo’ladigan narsa ekanini boshqa insonlarga qaraganda yaxshi bilishadi.`
};

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "uz-UZ";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (evt) => {
    const resultText = evt.results[0][0].transcript;
    console.log(resultText);
    if(resultText.includes("Qo'y" || "qo'chqor")) {
        elInfo.textContent = burjlar.qoy;
    }else if(resultText.includes("sigir" || "buqa" || "buzoq")) {
        elInfo.textContent = burjlar.buzoq;
    }else if(resultText.includes("egizak")) {
        elInfo.textContent = burjlar.egizak;
    }else if(resultText.includes("qisqichbaqa")) {
        elInfo.textContent = burjlar.qisqichbaqa;
    }else if(resultText.includes("arslon")) {
        elInfo.textContent = burjlar.arslon;
    }else if(resultText.includes("parizod")) {
        elInfo.textContent = burjlar.parizod;
    }else if(resultText.includes("tarozi")) {
        elInfo.textContent = burjlar.tarozi;
    }else if(resultText.includes("chayon")) {
        elInfo.textContent = burjlar.chayon;
    }else if(resultText.includes("o'qotar" || "oqotar")) {
        elInfo.textContent = burjlar.oqotar;
    }else if(resultText.includes("echki")) {
        elInfo.textContent = burjlar.echki;
    }else if(resultText.includes("qovga" || "qovg'a")) {
        elInfo.textContent = burjlar.qovga;
    }else if(resultText.includes("baliq")) {
        elInfo.textContent = burjlar.baliq;
    }
};

elBtn.addEventListener("click", function () {
    recognition.start();
    recognition.onresult();
});


