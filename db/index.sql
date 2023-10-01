DROP DATABASE Sciagi
CREATE DATABASE sciagi;
use sciagi


CREATE TABLE sciagahistoria (
    id INT PRIMARY KEY IDENTITY(1,1),
    dzial VARCHAR(255),
    podtemat1 TEXT,
    podtemat2 TEXT,
    podtemat3 TEXT,
    podtemat4 TEXT,
    podtemat5 TEXT,
    podtemat6 TEXT,
    podtemat7 TEXT,
    podtemat8 TEXT
);



CREATE TABLE sciagabiologia (
    id INT PRIMARY KEY IDENTITY(1,1),
    dzial VARCHAR(255),
    podtemat1 TEXT,
    podtemat2 TEXT,
    podtemat3 TEXT,
    podtemat4 TEXT,
    podtemat5 TEXT,
    podtemat6 TEXT,
    podtemat7 TEXT,
    podtemat8 TEXT
);



CREATE TABLE sciagachemia (
    id INT PRIMARY KEY IDENTITY(1,1),
    dzial VARCHAR(255),
    podtemat1 TEXT,
    podtemat2 TEXT,
    podtemat3 TEXT,
    podtemat4 TEXT,
    podtemat5 TEXT,
    podtemat6 TEXT,
    podtemat7 TEXT,
    podtemat8 TEXT
);




INSERT INTO sciagahistoria (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8)
VALUES ('Starożytność', 'Egipt', 'Grecja', 'Rzym', 'Chiny', 'Indie', 'Mezopotamia', 'Persja', 'Ameryka przedkolumbijska');

INSERT INTO sciagahistoria (dzial, podtemat1, podtemat2)
VALUES ('Średniowiecze', 'Krucjaty', 'Feudalizm');

INSERT INTO sciagahistoria (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5)
VALUES (
    'Świat w XVI wieku',
    'Wielkie odkrycia geograficzne. Do przyczyn wielkich odkryć geograficznych należały m.in. niedobór szlachetnych kruszców i nowych ziem pod uprawę rolną, przeludnienie, utrudnienia w handlu ze Wschodem po zdobyciu Konstantynopola przez Turków, rozwój nauki, techniki oraz kartografii. Dalekie podróże stały się możliwe także dzięki skonstruowaniu nowych typów żaglowców. Pierwsze wyprawy zaczęli organizować Portugalczycy - najpierw opłynęli południowy kraniec Afryki, a następnie dotarli do Indii. Z kolei Hiszpanie wysłali wyprawę pod dowództwem Krzysztofa Kolumba, która w 1492 r. dotarła do Nowego Świata, jak nazwano kontynent amerykański. Sfinansowali też wyprawę, która w latach 1519-1522 opłynęła Ziemię. Kontynent amerykański przed przybyciem Europejczyków był zamieszkiwany przez Indian, z których największe osiągnięcia cywilizacyjne mieli Majowie, Aztekowie i Inkowie.',
    'Podbóje kolonialne i ich skutki. Hiszpanie prowadzili od początku XVI w. podbój terenów Ameryki Środkowej i Południowej. Portugalczycy zdobyli zaś posiadłości w Ameryce Południowej (Brazylia), Afryce i Azji. W Europie rozwijały się banki i upowszechniały weksle. Powstały giełdy towarowe, na których zawierano umowy na dostawy większych ilości towarów i surowców. Kontynent europejski podzieliła symboliczna granica na rzece Łable - na zachód od niej rozwijała się gospodarka kapitalistyczna, a na wschodzie dominowala gospodarka folwarczno-pańszczyźniana. Skutki ekspansji kolonialnej to m.in.: napływ bogactwa do Hiszpanii i Portugalii, wyludnienie wielu zamorskich obszarów, niszczenie kultur rdzennych mieszkańców, wprowadzanie chrześcijańskich i europejskich wzorców kulturowych w koloniach. Ze względu na wysoką śmiertelność Indian, których zmuszano do pracy na rzecz Europejczyków, do Ameryki zaczęto sprowadzać niewolników z Afryki.',
    'Kultura i sztuka renesansu. Idee renesansu rozwinęły się we Włoszech, na co wpływ miało m.in. przybycie uczonych bizantyjskich po zajęciu Konstantynopola przez Turków oraz finansowanie artystów przez szlachtę, arystokrację i bogate mieszczaństwo. W centrum zainteresowania twórców znalazły się: człowiek, życie doczesne i wiedza o świecie, odwoływano się przy tym do osiągnięć antyku. Upowszechnianie idei renesansu i dzieł jego twórców ułatwił druk, który ok. 1455 r. wynalazł Jan Gutenberg. Ponadto coraz częściej pisano w językach narodowych. Przełomową dla nauki teorię heliocentryczną przedstawił Mikołaj Kopernik, który w dziele O obrotach sfer niebieskich wykazał, że to Ziemia wraz z innymi planetami porusza się po orbitach wokół Słońca. Twórcy epoki renesansu często zajmowali się wieloma dziedzinami sztuki czy nauki. Najważniejszymi ośrodkami malarstwa renesansowego były Włochy i Niderlandy.',
    'Reformacja w Europie. Przyczyną reformacji był kryzys Kościoła, który objawiał się m.in. symonią (sprzedawaniem stanowisk kościelnych), nepotyzmem (obsadzaniem kościelnych urzędów krewnymi), łamaniem przez duchownych zasad celibatu i ubóstwa. Działania Marcina Lutra i ogłoszenie w 1517 r. w Wittenberdze tez przeciwko odpustom dały początek reformacji, czyli działaniom na rzecz odnowy chrześcijaństwa. Konflikt Lutra z papieżem doprowadził do powstania wyznania ewangelicko-augsburskiego. Szybkie rozprzestrzenianie się nowych idei religijnych przyczyniło się do wybuchu wojen. W Niemczech w 1555 r. zakończył je pokój augsburski, w którym wybór wiary uzależniono od woli władcy. Dochodziło też do zamieszek na tle religijnym, prześladowań oraz niszczenia świątyni. W Szwajcarii działalność Jana Kalwina doprowadziła do powstania Kościoła ewangelicko-reformowanego. W Anglii król Henryk VIII w 1534 r. ogłosil Akt supremacji, co dało początek kościołowi narodowemu.',
    'Reforma katolicka. Kościół podjął działania w celu wewnętrznej reformy. W latach 1545-1563 odbyły się obrady soboru w Trydencie, którego wynikiem było m.in. potwierdzenie przywódczej roli papieża, uznanie za źródło objawienia Biblii i tradycji, zwiększenie dyscypliny wśród duchownych. Walka z osobami głoszącymi poglądy niezgodne z nauczaniem Kościoła odbywała się z pomocą inkwizycji papieskiej, działalności jezuitów, a także poprzez cenzurę (indeks ksiąg zakazanych). W niektórych państwach próbowano siłą wyeliminować protestantyzm. We Francji spowodowało to wybuch wojny domowej z tamtejszymi kalwinistami (hugenotami). W 1572 r. w Paryżu doszło do ich rzezi i dopiero Edykt nantejski z 1598 r., gwarantujący wolność religijną, zakończył konflikt. W Kościele katolickim - aby odróżnić się od protestantów - rozbudowano oprawę liturgiczną, bogato wyposażano świątynie, rozwinięto kult maryjny, popularyzowano też pielgrzymki.'
);


INSERT INTO sciagabiologia (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8)
VALUES ('Komórka', 'Budowa', 'Podział', 'Fotosynteza', 'Oddychanie komórkowe', 'DNA', 'RNA', 'Mitochondrium', 'Jądro komórkowe');

INSERT INTO sciagabiologia (dzial, podtemat1, podtemat2, podtemat3)
VALUES ('Ewolucja', 'Darwin', 'Selekcja naturalna', 'Ewolucja człowieka');


INSERT INTO sciagachemia (dzial, podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8)
VALUES ('Pierwiastki', 'Wodór', 'Hel', 'Węgiel', 'Azot', 'Tlen', 'Neon', 'Krypton', 'Radon');

INSERT INTO sciagachemia (dzial, podtemat1, podtemat2, podtemat3, podtemat4)
VALUES ('Związki chemiczne', 'Kwasy', 'Zasady', 'Sole', 'Estry');


SELECT * FROM sciagahistoria;
SELECT * FROM sciagabiologia;
SELECT * FROM sciagachemia;
