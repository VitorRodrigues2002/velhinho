/* =============================
   TRANSLATIONS
   ============================= */
const translations = {
  pt: {
    langTitle: "Escolha o seu idioma",
    headerSub: "Zona Velha · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-pt"></span>',
    nav: {
      entradas_frias:    "Entradas Frias",
      entradas_quentes:  "Entradas Quentes",
      saladas:           "Saladas",
      sopas:             "Sopas",
      omelets:           "Omeletes",
      vegetariano:       "Vegetariano",
      massas:            "Massas",
      risotos:           "Risotos",
      peixes:            "Peixes",
      carnes:            "Carnes",
      especial:          "Menu Especial",
    },
    categories: {
      entradas_frias:   { title: "Entradas Frias",    desc: "Frescos sabores para começar a sua refeição" },
      entradas_quentes: { title: "Entradas Quentes",  desc: "Petiscos quentes da tradição madeirense" },
      saladas:          { title: "Saladas",            desc: "Frescas e saborosas, preparadas na hora" },
      sopas:            { title: "Sopas",              desc: "Reconfortantes e feitas com amor" },
      omelets:          { title: "Omeletes",           desc: "Leves e saborosas a qualquer hora" },
      vegetariano:      { title: "Vegetariano",        desc: "Pratos deliciosos sem carne nem peixe" },
      massas:           { title: "Massas",             desc: "Pastas artesanais com sabores autênticos" },
      risotos:          { title: "Risotos",            desc: "Risotos cremosos com ingredientes da época" },
      peixes:           { title: "Peixes",             desc: "O melhor do Atlântico direto à sua mesa" },
      carnes:           { title: "Carnes",             desc: "Grelhados e tradição madeirense na brasa" },
      especial:         { title: "Menu Especial",      desc: "Uma refeição completa ao melhor preço" },
    },
    tags: { popular: "Popular", tipico: "Típico", mar: "Do Mar", regional: "Regional", vegetariano: "Vegetariano", especial: "Especial" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Zona Velha, Funchal · IVA incluído à taxa em vigor",
  },
  en: {
    langTitle: "Choose your language",
    headerSub: "Old Town · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-gb"></span>',
    nav: {
      entradas_frias:    "Cold Starters",
      entradas_quentes:  "Hot Starters",
      saladas:           "Salads",
      sopas:             "Soups",
      omelets:           "Omelettes",
      vegetariano:       "Vegetarian",
      massas:            "Pasta",
      risotos:           "Risottos",
      peixes:            "Fish",
      carnes:            "Meats",
      especial:          "Set Menu",
    },
    categories: {
      entradas_frias:   { title: "Cold Starters",   desc: "Fresh flavours to begin your meal" },
      entradas_quentes: { title: "Hot Starters",    desc: "Warm bites from Madeiran tradition" },
      saladas:          { title: "Salads",           desc: "Fresh and tasty, made to order" },
      sopas:            { title: "Soups",            desc: "Comforting and made with love" },
      omelets:          { title: "Omelettes",        desc: "Light and tasty at any time" },
      vegetariano:      { title: "Vegetarian",       desc: "Delicious dishes without meat or fish" },
      massas:           { title: "Pasta",            desc: "Artisan pasta with authentic flavours" },
      risotos:          { title: "Risottos",         desc: "Creamy risottos with seasonal ingredients" },
      peixes:           { title: "Fish",             desc: "The best of the Atlantic straight to your table" },
      carnes:           { title: "Meats",            desc: "Grilled meats and Madeiran tradition over the coals" },
      especial:         { title: "Set Menu",         desc: "A complete meal at the best price" },
    },
    tags: { popular: "Popular", tipico: "Traditional", mar: "From the Sea", regional: "Regional", vegetariano: "Vegetarian", especial: "Special" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Old Town, Funchal · VAT included",
  },
  es: {
    langTitle: "Elige tu idioma",
    headerSub: "Zona Vieja · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-es"></span>',
    nav: {
      entradas_frias:    "Entradas Frías",
      entradas_quentes:  "Entradas Calientes",
      saladas:           "Ensaladas",
      sopas:             "Sopas",
      omelets:           "Tortillas",
      vegetariano:       "Vegetariano",
      massas:            "Pastas",
      risotos:           "Risottos",
      peixes:            "Pescados",
      carnes:            "Carnes",
      especial:          "Menú Especial",
    },
    categories: {
      entradas_frias:   { title: "Entradas Frías",      desc: "Sabores frescos para comenzar bien" },
      entradas_quentes: { title: "Entradas Calientes",  desc: "Aperitivos calientes de la tradición madeirense" },
      saladas:          { title: "Ensaladas",            desc: "Frescas y sabrosas, preparadas al momento" },
      sopas:            { title: "Sopas",                desc: "Reconfortantes y hechas con amor" },
      omelets:          { title: "Tortillas",            desc: "Ligeras y sabrosas a cualquier hora" },
      vegetariano:      { title: "Vegetariano",          desc: "Platos deliciosos sin carne ni pescado" },
      massas:           { title: "Pastas",               desc: "Pastas artesanales con sabores auténticos" },
      risotos:          { title: "Risottos",             desc: "Risottos cremosos con ingredientes de temporada" },
      peixes:           { title: "Pescados",             desc: "Lo mejor del Atlántico directamente a su mesa" },
      carnes:           { title: "Carnes",               desc: "Carnes a la brasa y tradición madeirense" },
      especial:         { title: "Menú Especial",        desc: "Una comida completa al mejor precio" },
    },
    tags: { popular: "Popular", tipico: "Típico", mar: "Del Mar", regional: "Regional", vegetariano: "Vegetariano", especial: "Especial" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Zona Vieja, Funchal · IVA incluido",
  },
  fr: {
    langTitle: "Choisissez votre langue",
    headerSub: "Vieille Ville · Funchal · Madère",
    btnChangeLang: '<span class="fi fi-fr"></span>',
    nav: {
      entradas_frias:    "Entrées Froides",
      entradas_quentes:  "Entrées Chaudes",
      saladas:           "Salades",
      sopas:             "Soupes",
      omelets:           "Omelettes",
      vegetariano:       "Végétarien",
      massas:            "Pâtes",
      risotos:           "Risottos",
      peixes:            "Poissons",
      carnes:            "Viandes",
      especial:          "Menu Spécial",
    },
    categories: {
      entradas_frias:   { title: "Entrées Froides",  desc: "Saveurs fraîches pour commencer votre repas" },
      entradas_quentes: { title: "Entrées Chaudes",  desc: "Amuse-bouches chauds de la tradition madéroise" },
      saladas:          { title: "Salades",           desc: "Fraîches et savoureuses, préparées à la minute" },
      sopas:            { title: "Soupes",            desc: "Réconfortantes et préparées avec amour" },
      omelets:          { title: "Omelettes",         desc: "Légères et savoureuses à toute heure" },
      vegetariano:      { title: "Végétarien",        desc: "Plats délicieux sans viande ni poisson" },
      massas:           { title: "Pâtes",             desc: "Pâtes artisanales aux saveurs authentiques" },
      risotos:          { title: "Risottos",          desc: "Risottos crémeux aux ingrédients de saison" },
      peixes:           { title: "Poissons",          desc: "Le meilleur de l'Atlantique directement à votre table" },
      carnes:           { title: "Viandes",           desc: "Grillades et tradition madéroise au charbon" },
      especial:         { title: "Menu Spécial",      desc: "Un repas complet au meilleur prix" },
    },
    tags: { popular: "Populaire", tipico: "Typique", mar: "De la Mer", regional: "Régional", vegetariano: "Végétarien", especial: "Spécial" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Vieille Ville, Funchal · TVA incluse",
  },
  de: {
    langTitle: "Wählen Sie Ihre Sprache",
    headerSub: "Altstadt · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-de"></span>',
    nav: {
      entradas_frias:    "Kalte Vorspeisen",
      entradas_quentes:  "Warme Vorspeisen",
      saladas:           "Salate",
      sopas:             "Suppen",
      omelets:           "Omeletts",
      vegetariano:       "Vegetarisch",
      massas:            "Pasta",
      risotos:           "Risottos",
      peixes:            "Fisch",
      carnes:            "Fleisch",
      especial:          "Tagesmenü",
    },
    categories: {
      entradas_frias:   { title: "Kalte Vorspeisen",  desc: "Frische Aromen zum Beginn Ihrer Mahlzeit" },
      entradas_quentes: { title: "Warme Vorspeisen",  desc: "Warme Häppchen aus der madeirischen Tradition" },
      saladas:          { title: "Salate",             desc: "Frisch und lecker, auf Bestellung zubereitet" },
      sopas:            { title: "Suppen",             desc: "Wärmende Suppen mit viel Liebe zubereitet" },
      omelets:          { title: "Omeletts",           desc: "Leicht und lecker zu jeder Tageszeit" },
      vegetariano:      { title: "Vegetarisch",        desc: "Köstliche Gerichte ohne Fleisch oder Fisch" },
      massas:           { title: "Pasta",              desc: "Hausgemachte Pasta mit authentischen Aromen" },
      risotos:          { title: "Risottos",           desc: "Cremige Risottos mit saisonalen Zutaten" },
      peixes:           { title: "Fisch",              desc: "Das Beste des Atlantiks direkt auf Ihren Tisch" },
      carnes:           { title: "Fleisch",            desc: "Gegrilltes Fleisch und madeirische Tradition" },
      especial:         { title: "Tagesmenü",          desc: "Ein vollständiges Menü zum besten Preis" },
    },
    tags: { popular: "Beliebt", tipico: "Typisch", mar: "Vom Meer", regional: "Regional", vegetariano: "Vegetarisch", especial: "Spezial" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Altstadt, Funchal · MwSt. enthalten",
  },
  it: {
    langTitle: "Scegli la tua lingua",
    headerSub: "Città Vecchia · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-it"></span>',
    nav: {
      entradas_frias:    "Antipasti Freddi",
      entradas_quentes:  "Antipasti Caldi",
      saladas:           "Insalate",
      sopas:             "Zuppe",
      omelets:           "Frittate",
      vegetariano:       "Vegetariano",
      massas:            "Paste",
      risotos:           "Risotti",
      peixes:            "Pesce",
      carnes:            "Carni",
      especial:          "Menu Speciale",
    },
    categories: {
      entradas_frias:   { title: "Antipasti Freddi",  desc: "Sapori freschi per iniziare il vostro pasto" },
      entradas_quentes: { title: "Antipasti Caldi",   desc: "Stuzzichini caldi della tradizione madeirense" },
      saladas:          { title: "Insalate",           desc: "Fresche e gustose, preparate al momento" },
      sopas:            { title: "Zuppe",              desc: "Confortanti e preparate con amore" },
      omelets:          { title: "Frittate",           desc: "Leggere e gustose a qualsiasi ora" },
      vegetariano:      { title: "Vegetariano",        desc: "Piatti deliziosi senza carne né pesce" },
      massas:           { title: "Paste",              desc: "Pasta artigianale con sapori autentici" },
      risotos:          { title: "Risotti",            desc: "Risotti cremosi con ingredienti di stagione" },
      peixes:           { title: "Pesce",              desc: "Il meglio dell'Atlantico direttamente alla vostra tavola" },
      carnes:           { title: "Carni",              desc: "Grigliate e tradizione madeirense sulla brace" },
      especial:         { title: "Menu Speciale",      desc: "Un pasto completo al miglior prezzo" },
    },
    tags: { popular: "Popolare", tipico: "Tipico", mar: "Dal Mare", regional: "Regionale", vegetariano: "Vegetariano", especial: "Speciale" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Funchal · IVA inclusa",
  },
  nl: {
    langTitle: "Kies uw taal",
    headerSub: "Oude Stad · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-nl"></span>',
    nav: {
      entradas_frias:    "Koude Voorgerechten",
      entradas_quentes:  "Warme Voorgerechten",
      saladas:           "Salades",
      sopas:             "Soepen",
      omelets:           "Omeletten",
      vegetariano:       "Vegetarisch",
      massas:            "Pasta",
      risotos:           "Risotto's",
      peixes:            "Vis",
      carnes:            "Vlees",
      especial:          "Dagmenu",
    },
    categories: {
      entradas_frias:   { title: "Koude Voorgerechten",  desc: "Frisse smaken om uw maaltijd mee te beginnen" },
      entradas_quentes: { title: "Warme Voorgerechten",  desc: "Warme hapjes uit de Madeireense traditie" },
      saladas:          { title: "Salades",               desc: "Vers en smakelijk, op bestelling bereid" },
      sopas:            { title: "Soepen",                desc: "Verwarmende soepen met veel liefde gemaakt" },
      omelets:          { title: "Omeletten",             desc: "Licht en lekker op elk moment van de dag" },
      vegetariano:      { title: "Vegetarisch",           desc: "Heerlijke gerechten zonder vlees of vis" },
      massas:           { title: "Pasta",                 desc: "Ambachtelijke pasta met authentieke smaken" },
      risotos:          { title: "Risotto's",             desc: "Romige risotto's met seizoensgebonden ingrediënten" },
      peixes:           { title: "Vis",                   desc: "Het beste van de Atlantische Oceaan aan uw tafel" },
      carnes:           { title: "Vlees",                 desc: "Gegrild vlees en Madeireense traditie" },
      especial:         { title: "Dagmenu",               desc: "Een complete maaltijd voor de beste prijs" },
    },
    tags: { popular: "Populair", tipico: "Traditioneel", mar: "Uit de Zee", regional: "Regionaal", vegetariano: "Vegetarisch", especial: "Speciaal" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Funchal · BTW inbegrepen",
  },
  pl: {
    langTitle: "Wybierz swój język",
    headerSub: "Stare Miasto · Funchal · Madera",
    btnChangeLang: '<span class="fi fi-pl"></span>',
    nav: {
      entradas_frias:    "Zimne Przystawki",
      entradas_quentes:  "Ciepłe Przystawki",
      saladas:           "Sałatki",
      sopas:             "Zupy",
      omelets:           "Omlety",
      vegetariano:       "Wegetariańskie",
      massas:            "Makaron",
      risotos:           "Risotto",
      peixes:            "Ryby",
      carnes:            "Mięso",
      especial:          "Menu Dnia",
    },
    categories: {
      entradas_frias:   { title: "Zimne Przystawki",   desc: "Świeże smaki na początek posiłku" },
      entradas_quentes: { title: "Ciepłe Przystawki",  desc: "Ciepłe kąski z maderyjskiej tradycji" },
      saladas:          { title: "Sałatki",             desc: "Świeże i smaczne, przygotowane na zamówienie" },
      sopas:            { title: "Zupy",                desc: "Rozgrzewające zupy przygotowane z miłością" },
      omelets:          { title: "Omlety",              desc: "Lekkie i smaczne o każdej porze dnia" },
      vegetariano:      { title: "Wegetariańskie",      desc: "Pyszne dania bez mięsa i ryb" },
      massas:           { title: "Makaron",             desc: "Rzemieślniczy makaron z autentycznymi smakami" },
      risotos:          { title: "Risotto",             desc: "Kremowe risotto z sezonowymi składnikami" },
      peixes:           { title: "Ryby",                desc: "To co najlepsze z Atlantyku prosto na stół" },
      carnes:           { title: "Mięso",               desc: "Grillowane mięso i maderyjska tradycja" },
      especial:         { title: "Menu Dnia",           desc: "Kompletny posiłek w najlepszej cenie" },
    },
    tags: { popular: "Popularne", tipico: "Tradycyjne", mar: "Z Morza", regional: "Regionalne", vegetariano: "Wegetariańskie", especial: "Specjalne" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Funchal · Cena zawiera VAT",
  },
  ru: {
    langTitle: "Выберите язык",
    headerSub: "Старый Город · Фуншал · Мадейра",
    btnChangeLang: '<span class="fi fi-ru"></span>',
    nav: {
      entradas_frias:    "Холодные Закуски",
      entradas_quentes:  "Горячие Закуски",
      saladas:           "Салаты",
      sopas:             "Супы",
      omelets:           "Омлеты",
      vegetariano:       "Вегетарианское",
      massas:            "Паста",
      risotos:           "Ризотто",
      peixes:            "Рыба",
      carnes:            "Мясо",
      especial:          "Меню Дня",
    },
    categories: {
      entradas_frias:   { title: "Холодные Закуски",   desc: "Свежие вкусы для начала вашей трапезы" },
      entradas_quentes: { title: "Горячие Закуски",    desc: "Горячие закуски мадейрской традиции" },
      saladas:          { title: "Салаты",              desc: "Свежие и вкусные, приготовленные на заказ" },
      sopas:            { title: "Супы",                desc: "Согревающие супы, приготовленные с любовью" },
      omelets:          { title: "Омлеты",              desc: "Лёгкие и вкусные в любое время суток" },
      vegetariano:      { title: "Вегетарианское",      desc: "Вкусные блюда без мяса и рыбы" },
      massas:           { title: "Паста",               desc: "Авторская паста с аутентичными вкусами" },
      risotos:          { title: "Ризотто",             desc: "Кремовое ризотто с сезонными ингредиентами" },
      peixes:           { title: "Рыба",                desc: "Лучшее из Атлантики прямо на ваш стол" },
      carnes:           { title: "Мясо",                desc: "Мясо на гриле и мадейрские традиции" },
      especial:         { title: "Меню Дня",            desc: "Полноценный обед по лучшей цене" },
    },
    tags: { popular: "Популярное", tipico: "Традиционное", mar: "Из Моря", regional: "Региональное", vegetariano: "Вегетарианское", especial: "Специальное" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Фуншал · НДС включён",
  },
  no: {
    langTitle: "Velg ditt språk",
    headerSub: "Gamlebyen · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-no"></span>',
    nav: {
      entradas_frias:    "Kalde Forretter",
      entradas_quentes:  "Varme Forretter",
      saladas:           "Salater",
      sopas:             "Supper",
      omelets:           "Omeletter",
      vegetariano:       "Vegetar",
      massas:            "Pasta",
      risotos:           "Risotto",
      peixes:            "Fisk",
      carnes:            "Kjøtt",
      especial:          "Dagsmeny",
    },
    categories: {
      entradas_frias:   { title: "Kalde Forretter",  desc: "Friske smaker for å starte måltidet" },
      entradas_quentes: { title: "Varme Forretter",  desc: "Varme småretter fra madeireisk tradisjon" },
      saladas:          { title: "Salater",           desc: "Ferske og smakfulle, laget på bestilling" },
      sopas:            { title: "Supper",            desc: "Varme supper laget med kjærlighet" },
      omelets:          { title: "Omeletter",         desc: "Lette og smakfulle til enhver tid" },
      vegetariano:      { title: "Vegetar",           desc: "Deilige retter uten kjøtt eller fisk" },
      massas:           { title: "Pasta",             desc: "Håndlaget pasta med autentiske smaker" },
      risotos:          { title: "Risotto",           desc: "Kremete risotto med sesongbaserte ingredienser" },
      peixes:           { title: "Fisk",              desc: "Det beste fra Atlanterhavet rett til bordet" },
      carnes:           { title: "Kjøtt",             desc: "Grillet kjøtt og madeireisk tradisjon" },
      especial:         { title: "Dagsmeny",          desc: "Et komplett måltid til best pris" },
    },
    tags: { popular: "Populær", tipico: "Tradisjonell", mar: "Fra Havet", regional: "Regional", vegetariano: "Vegetar", especial: "Spesial" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Funchal · MVA inkludert",
  },
  da: {
    langTitle: "Vælg dit sprog",
    headerSub: "Gamlebyen · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-dk"></span>',
    nav: {
      entradas_frias:    "Kolde Forretter",
      entradas_quentes:  "Varme Forretter",
      saladas:           "Salater",
      sopas:             "Supper",
      omelets:           "Omeletter",
      vegetariano:       "Vegetar",
      massas:            "Pasta",
      risotos:           "Risotto",
      peixes:            "Fisk",
      carnes:            "Kød",
      especial:          "Dagens Menu",
    },
    categories: {
      entradas_frias:   { title: "Kolde Forretter",  desc: "Friske smage for at starte dit måltid" },
      entradas_quentes: { title: "Varme Forretter",  desc: "Varme bidder fra den madeireiske tradition" },
      saladas:          { title: "Salater",           desc: "Friske og velsmagende, tilberedt på bestilling" },
      sopas:            { title: "Supper",            desc: "Varme supper lavet med kærlighed" },
      omelets:          { title: "Omeletter",         desc: "Lette og lækre på ethvert tidspunkt" },
      vegetariano:      { title: "Vegetar",           desc: "Lækre retter uden kød eller fisk" },
      massas:           { title: "Pasta",             desc: "Håndlavet pasta med autentiske smage" },
      risotos:          { title: "Risotto",           desc: "Cremet risotto med sæsonbestemte ingredienser" },
      peixes:           { title: "Fisk",              desc: "Det bedste fra Atlanterhavet direkte til dit bord" },
      carnes:           { title: "Kød",               desc: "Grillet kød og madeireisk tradition" },
      especial:         { title: "Dagens Menu",       desc: "Et komplet måltid til den bedste pris" },
    },
    tags: { popular: "Populær", tipico: "Traditionel", mar: "Fra Havet", regional: "Regional", vegetariano: "Vegetar", especial: "Special" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Funchal · Moms inkluderet",
  },
  fi: {
    langTitle: "Valitse kielesi",
    headerSub: "Vanha Kaupunki · Funchal · Madeira",
    btnChangeLang: '<span class="fi fi-fi"></span>',
    nav: {
      entradas_frias:    "Kylmät Alkupalat",
      entradas_quentes:  "Lämpimät Alkupalat",
      saladas:           "Salaatit",
      sopas:             "Keitot",
      omelets:           "Omelettit",
      vegetariano:       "Kasvisruoat",
      massas:            "Pasta",
      risotos:           "Risotot",
      peixes:            "Kala",
      carnes:            "Liha",
      especial:          "Päivän Menu",
    },
    categories: {
      entradas_frias:   { title: "Kylmät Alkupalat",   desc: "Raikkaita makuja aterian aloitukseksi" },
      entradas_quentes: { title: "Lämpimät Alkupalat", desc: "Lämpimät suupalat madeirialaisesta perinteestä" },
      saladas:          { title: "Salaatit",            desc: "Tuoreita ja maukkaita, valmistetaan tilauksesta" },
      sopas:            { title: "Keitot",              desc: "Lämmittäviä keittoja rakkaudella valmistettuna" },
      omelets:          { title: "Omelettit",           desc: "Kevyitä ja maukkaita mihin aikaan tahansa" },
      vegetariano:      { title: "Kasvisruoat",         desc: "Herkullisia annoksia ilman lihaa tai kalaa" },
      massas:           { title: "Pasta",               desc: "Käsintehtyä pastaa aidoilla mauilla" },
      risotos:          { title: "Risotot",             desc: "Kermaisia risottoja kauden raaka-aineilla" },
      peixes:           { title: "Kala",                desc: "Atlantin parhaat herkkut suoraan pöytääsi" },
      carnes:           { title: "Liha",                desc: "Grillattua lihaa ja madeiralaista perinnettä" },
      especial:         { title: "Päivän Menu",         desc: "Täydellinen ateria parhaaseen hintaan" },
    },
    tags: { popular: "Suosittu", tipico: "Perinteinen", mar: "Merestä", regional: "Alueellinen", vegetariano: "Kasvis", especial: "Erikois" },
    footer: "© 2026 Restaurante O Velhinho — Rua de Santa Maria 86, Funchal · ALV sisältyy",
  },
};

/* =============================
   MENU DATA — Restaurante O Velhinho
   ============================= */
const menuData = {

  /* ---- ENTRADAS FRIAS ---- */
  entradas_frias: [
    {
      emoji: "🍤",
      name:  { pt: "Cocktail de Camarão", en: "Prawn Cocktail", es: "Cóctel de Gambas", fr: "Cocktail de Crevettes" },
      desc:  { pt: "Camarão fresco com molho cocktail, alface e limão.", en: "Fresh prawns with cocktail sauce, lettuce and lemon.", es: "Gambas frescas con salsa cocktail, lechuga y limón.", fr: "Crevettes fraîches avec sauce cocktail, laitue et citron." },
      price: "€ 12,75", tag: "mar",
    },
    {
      emoji: "🍈",
      name:  { pt: "Melão c/ Presunto", en: "Melon with Ham", es: "Melón con Jamón", fr: "Melon au Jambon" },
      desc:  { pt: "Melão doce e fresco acompanhado de finas fatias de presunto curado.", en: "Sweet fresh melon with thin slices of cured ham.", es: "Melón dulce y fresco con finas lonchas de jamón curado.", fr: "Melon doux et frais accompagné de fines tranches de jambon cru." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🥓",
      name:  { pt: "Presunto c/ Espargos e Queijo", en: "Ham with Asparagus & Cheese", es: "Jamón con Espárragos y Queso", fr: "Jambon, Asperges et Fromage" },
      desc:  { pt: "Presunto regional com espargos grelhados e queijo da ilha.", en: "Regional ham with grilled asparagus and island cheese.", es: "Jamón regional con espárragos a la plancha y queso de la isla.", fr: "Jambon régional avec asperges grillées et fromage de l'île." },
      price: "€ 9,95", tag: "regional",
    },
    {
      emoji: "🦞",
      name:  { pt: "Marinara de Mariscos", en: "Seafood Marinara", es: "Marinara de Mariscos", fr: "Marinara de Fruits de Mer" },
      desc:  { pt: "Seleção de mariscos frescos em molho marinara com pão torrado.", en: "Selection of fresh seafood in marinara sauce with toasted bread.", es: "Selección de mariscos frescos en salsa marinara con pan tostado.", fr: "Sélection de fruits de mer frais en sauce marinara avec pain grillé." },
      price: "€ 14,00", tag: "mar",
    },
  ],

  /* ---- ENTRADAS QUENTES ---- */
  entradas_quentes: [
    {
      emoji: "🦐",
      name:  { pt: "Camarão c/ Alho", en: "Garlic Prawns", es: "Gambas al Ajillo", fr: "Crevettes à l'Ail" },
      desc:  { pt: "Camarão salteado em azeite com alho fatiado e piri-piri. Servido com pão.", en: "Prawns sautéed in olive oil with sliced garlic and piri-piri. Served with bread.", es: "Gambas salteadas en aceite de oliva con ajo laminado y piri-piri. Con pan.", fr: "Crevettes sautées à l'huile d'olive avec ail émincé et piri-piri. Servies avec du pain." },
      price: "€ 13,50", tag: "mar",
    },
    {
      emoji: "🐚",
      name:  { pt: "Mexilhão Grelhado", en: "Grilled Mussels", es: "Mejillones a la Plancha", fr: "Moules Grillées" },
      desc:  { pt: "Mexilhões frescos grelhados na brasa com manteiga de alho e limão.", en: "Fresh mussels grilled over coals with garlic butter and lemon.", es: "Mejillones frescos a la brasa con mantequilla de ajo y limón.", fr: "Moules fraîches grillées au charbon avec beurre à l'ail et citron." },
      price: "€ 12,00", tag: "tipico",
    },
    {
      emoji: "🐚",
      name:  { pt: "Mexilhão à Espanhola", en: "Spanish-style Mussels", es: "Mejillones a la Española", fr: "Moules à l'Espagnole" },
      desc:  { pt: "Mexilhões cozinhados com tomate, cebola, pimento e vinho branco.", en: "Mussels cooked with tomato, onion, pepper and white wine.", es: "Mejillones cocinados con tomate, cebolla, pimiento y vino blanco.", fr: "Moules cuites avec tomate, oignon, poivron et vin blanc." },
      price: "€ 12,00", tag: "popular",
    },
    {
      emoji: "🦪",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lapas_grelhadas.JPG/400px-Lapas_grelhadas.JPG",
      name:  { pt: "Lapas Grelhadas", en: "Grilled Limpets", es: "Lapas a la Plancha", fr: "Patelles Grillées" },
      desc:  { pt: "Lapas frescas da Madeira grelhadas na brasa com manteiga de alho e limão. Um clássico irresistível da ilha.", en: "Fresh Madeiran limpets grilled over coals with garlic butter and lemon. An unmissable island classic.", es: "Lapas frescas de Madeira a la brasa con mantequilla de ajo y limón. Un clásico de la isla.", fr: "Patelles fraîches de Madère grillées au charbon avec beurre à l'ail et citron. Un incontournable." },
      price: "€ 18,00", tag: "tipico",
    },
    {
      emoji: "🐙",
      name:  { pt: "Polvo à Madeirense", en: "Madeiran Octopus", es: "Pulpo a la Madeirense", fr: "Poulpe à la Madéroise" },
      desc:  { pt: "Polvo tenro cozinhado ao estilo madeirense com batata, cebola e azeite.", en: "Tender octopus cooked Madeiran-style with potato, onion and olive oil.", es: "Pulpo tierno cocinado al estilo madeirense con patata, cebolla y aceite.", fr: "Poulpe tendre cuisiné à la madéroise avec pomme de terre, oignon et huile d'olive." },
      price: "€ 13,50", tag: "tipico",
    },
    {
      emoji: "🐌",
      name:  { pt: "Amêijoas à Bulhão Pato", en: "Clams Bulhão Pato", es: "Almejas a la Bulhão Pato", fr: "Palourdes Bulhão Pato" },
      desc:  { pt: "Amêijoas abertas no vapor com azeite, alho, coentros frescos e vinho branco.", en: "Steamed clams with olive oil, garlic, fresh coriander and white wine.", es: "Almejas al vapor con aceite de oliva, ajo, cilantro fresco y vino blanco.", fr: "Palourdes à la vapeur avec huile d'olive, ail, coriandre frais et vin blanc." },
      price: "€ 13,50", tag: "mar",
    },
  ],

  /* ---- SALADAS ---- */
  saladas: [
    {
      emoji: "🥗",
      name:  { pt: "Salada Mista", en: "Mixed Salad", es: "Ensalada Mixta", fr: "Salade Mixte" },
      desc:  { pt: "Alface, tomate, cebola, azeitonas e cenoura com azeite e vinagre.", en: "Lettuce, tomato, onion, olives and carrot with olive oil and vinegar.", es: "Lechuga, tomate, cebolla, aceitunas y zanahoria con aceite y vinagre.", fr: "Laitue, tomate, oignon, olives et carotte avec huile d'olive et vinaigre." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🐟",
      name:  { pt: "Salada de Atum", en: "Tuna Salad", es: "Ensalada de Atún", fr: "Salade de Thon" },
      desc:  { pt: "Atum com tomate, cebola roxa, azeitonas, ovo cozido e azeite.", en: "Tuna with tomato, red onion, olives, boiled egg and olive oil.", es: "Atún con tomate, cebolla roja, aceitunas, huevo cocido y aceite.", fr: "Thon avec tomate, oignon rouge, olives, œuf dur et huile d'olive." },
      price: "€ 9,95", tag: "mar",
    },
    {
      emoji: "🍗",
      name:  { pt: "Salada de Frango c/ Queijo", en: "Chicken & Cheese Salad", es: "Ensalada de Pollo y Queso", fr: "Salade Poulet et Fromage" },
      desc:  { pt: "Frango grelhado com queijo da ilha, alface fresca e tomate.", en: "Grilled chicken with island cheese, fresh lettuce and tomato.", es: "Pollo a la plancha con queso de la isla, lechuga fresca y tomate.", fr: "Poulet grillé avec fromage de l'île, laitue fraîche et tomate." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name:  { pt: "Salada de Camarão", en: "Prawn Salad", es: "Ensalada de Gambas", fr: "Salade de Crevettes" },
      desc:  { pt: "Camarão fresco sobre cama de alface com molho cocktail e limão.", en: "Fresh prawns on a bed of lettuce with cocktail sauce and lemon.", es: "Gambas frescas sobre lecho de lechuga con salsa cocktail y limón.", fr: "Crevettes fraîches sur lit de laitue avec sauce cocktail et citron." },
      price: "€ 13,50", tag: "mar",
    },
    {
      emoji: "🦞",
      name:  { pt: "Salada de Marisco", en: "Seafood Salad", es: "Ensalada de Mariscos", fr: "Salade de Fruits de Mer" },
      desc:  { pt: "Seleção de mariscos frescos com alface, tomate e molho de iogurte.", en: "Selection of fresh seafood with lettuce, tomato and yoghurt dressing.", es: "Selección de mariscos frescos con lechuga, tomate y aliño de yogur.", fr: "Sélection de fruits de mer frais avec laitue, tomate et sauce yaourt." },
      price: "€ 13,50", tag: "mar",
    },
    {
      emoji: "🐙",
      name:  { pt: "Salada de Polvo", en: "Octopus Salad", es: "Ensalada de Pulpo", fr: "Salade de Poulpe" },
      desc:  { pt: "Polvo cozido com cebola, salsa, azeite e limão.", en: "Cooked octopus with onion, parsley, olive oil and lemon.", es: "Pulpo cocido con cebolla, perejil, aceite de oliva y limón.", fr: "Poulpe cuit avec oignon, persil, huile d'olive et citron." },
      price: "€ 13,50", tag: "mar",
    },
  ],

  /* ---- SOPAS ---- */
  sopas: [
    {
      emoji: "🍵",
      name:  { pt: "Sopa do Dia", en: "Soup of the Day", es: "Sopa del Día", fr: "Soupe du Jour" },
      desc:  { pt: "Sopa caseira conforme a inspiração do dia. Pergunte ao seu servidor.", en: "Home-made soup of the day. Please ask your server.", es: "Sopa casera según la inspiración del día. Consulte con su servidor.", fr: "Soupe maison selon l'inspiration du jour. Demandez à votre serveur." },
      price: "€ 4,10", tag: "popular",
    },
    {
      emoji: "🐟",
      name:  { pt: "Sopa do Peixe", en: "Fish Soup", es: "Sopa de Pescado", fr: "Soupe de Poisson" },
      desc:  { pt: "Sopa rica com peixe fresco do dia, batata e legumes.", en: "Rich soup with fresh fish of the day, potato and vegetables.", es: "Sopa rica con pescado fresco del día, patata y verduras.", fr: "Soupe riche au poisson frais du jour, pomme de terre et légumes." },
      price: "€ 5,50", tag: "mar",
    },
    {
      emoji: "🍅",
      name:  { pt: "Sopa de Tomate", en: "Tomato Soup", es: "Sopa de Tomate", fr: "Soupe de Tomate" },
      desc:  { pt: "Sopa cremosa de tomate maduro com ervas aromáticas.", en: "Creamy ripe tomato soup with aromatic herbs.", es: "Sopa cremosa de tomate maduro con hierbas aromáticas.", fr: "Soupe crémeuse de tomate mûre aux herbes aromatiques." },
      price: "€ 5,25", tag: "popular",
    },
    {
      emoji: "🦞",
      name:  { pt: "Sopa de Marisco", en: "Seafood Soup", es: "Sopa de Mariscos", fr: "Soupe de Fruits de Mer" },
      desc:  { pt: "Sopa reconfortante com camarão, amêijoa e berbigão.", en: "Comforting soup with prawns, clams and cockles.", es: "Sopa reconfortante con gambas, almejas y berberechos.", fr: "Soupe réconfortante aux crevettes, palourdes et coques." },
      price: "€ 5,50", tag: "mar",
    },
  ],

  /* ---- OMELETES ---- */
  omelets: [
    {
      emoji: "🍳",
      name:  { pt: "Omelete Mista", en: "Mixed Omelette", es: "Tortilla Mixta", fr: "Omelette Mixte" },
      desc:  { pt: "Omelete com fiambre, queijo e cogumelos.", en: "Omelette with ham, cheese and mushrooms.", es: "Tortilla con jamón cocido, queso y champiñones.", fr: "Omelette au jambon, fromage et champignons." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name:  { pt: "Omelete de Camarão", en: "Prawn Omelette", es: "Tortilla de Gambas", fr: "Omelette aux Crevettes" },
      desc:  { pt: "Omelete recheada com camarão salteado e ervas frescas.", en: "Omelette filled with sautéed prawns and fresh herbs.", es: "Tortilla rellena de gambas salteadas y hierbas frescas.", fr: "Omelette garnie de crevettes sautées et d'herbes fraîches." },
      price: "€ 12,75", tag: "mar",
    },
    {
      emoji: "🍄",
      name:  { pt: "Omelete de Cogumelos", en: "Mushroom Omelette", es: "Tortilla de Champiñones", fr: "Omelette aux Champignons" },
      desc:  { pt: "Omelete com cogumelos salteados e queijo derretido.", en: "Omelette with sautéed mushrooms and melted cheese.", es: "Tortilla con champiñones salteados y queso fundido.", fr: "Omelette aux champignons sautés et fromage fondu." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🐟",
      name:  { pt: "Omelete de Peixe", en: "Fish Omelette", es: "Tortilla de Pescado", fr: "Omelette au Poisson" },
      desc:  { pt: "Omelete com peixe desfiado e ervas aromáticas.", en: "Omelette with shredded fish and aromatic herbs.", es: "Tortilla con pescado desmenuzado y hierbas aromáticas.", fr: "Omelette au poisson effiloché et herbes aromatiques." },
      price: "€ 9,95", tag: "mar",
    },
    {
      emoji: "🥚",
      name:  { pt: "Omelete Espanhola", en: "Spanish Omelette", es: "Tortilla Española", fr: "Omelette Espagnole" },
      desc:  { pt: "Tortilha tradicional com batata, cebola e ovo.", en: "Traditional Spanish tortilla with potato, onion and egg.", es: "Tortilla tradicional española con patata, cebolla y huevo.", fr: "Tortilla espagnole traditionnelle à la pomme de terre, oignon et œuf." },
      price: "€ 10,95", tag: "tipico",
    },
  ],

  /* ---- VEGETARIANO ---- */
  vegetariano: [
    {
      emoji: "🍝",
      name:  { pt: "Fusili c/ Espinafres e Queijo", en: "Fusilli with Spinach & Cheese", es: "Fusilli con Espinacas y Queso", fr: "Fusilli aux Épinards et Fromage" },
      desc:  { pt: "Fusilli cremosos com espinafres frescos e queijo parmesão.", en: "Creamy fusilli with fresh spinach and parmesan cheese.", es: "Fusilli cremosos con espinacas frescas y queso parmesano.", fr: "Fusilli crémeux aux épinards frais et parmesan." },
      price: "€ 10,95", tag: "vegetariano",
    },
    {
      emoji: "🍝",
      name:  { pt: "Esparguete c/ Molho de Tomate", en: "Spaghetti with Tomato Sauce", es: "Espaguetis con Salsa de Tomate", fr: "Spaghetti à la Sauce Tomate" },
      desc:  { pt: "Esparguete com molho de tomate fresco e manjericão.", en: "Spaghetti with fresh tomato sauce and basil.", es: "Espaguetis con salsa de tomate fresco y albahaca.", fr: "Spaghetti à la sauce tomate fraîche et basilic." },
      price: "€ 11,75", tag: "vegetariano",
    },
    {
      emoji: "🍚",
      name:  { pt: "Risoto de Cogumelos e Espargos", en: "Mushroom & Asparagus Risotto", es: "Risotto de Champiñones y Espárragos", fr: "Risotto Champignons et Asperges" },
      desc:  { pt: "Risoto cremoso de cogumelos silvestres e espargos verdes.", en: "Creamy wild mushroom and green asparagus risotto.", es: "Risotto cremoso de setas silvestres y espárragos verdes.", fr: "Risotto crémeux aux champignons sauvages et asperges vertes." },
      price: "€ 10,95", tag: "vegetariano",
    },
    {
      emoji: "🍝",
      name:  { pt: "Esparguete Vegetariana", en: "Vegetarian Spaghetti", es: "Espaguetis Vegetarianos", fr: "Spaghetti Végétarien" },
      desc:  { pt: "Esparguete com legumes salteados e molho de tomate e ervas.", en: "Spaghetti with sautéed vegetables and herbed tomato sauce.", es: "Espaguetis con verduras salteadas y salsa de tomate con hierbas.", fr: "Spaghetti aux légumes sautés et sauce tomate aux herbes." },
      price: "€ 10,95", tag: "vegetariano",
    },
    {
      emoji: "🥦",
      name:  { pt: "Legumes Salteados", en: "Sautéed Vegetables", es: "Verduras Salteadas", fr: "Légumes Sautés" },
      desc:  { pt: "Seleção de legumes frescos salteados no azeite com alho e ervas aromáticas.", en: "Selection of fresh vegetables sautéed in olive oil with garlic and aromatic herbs.", es: "Selección de verduras frescas salteadas en aceite de oliva con ajo y hierbas.", fr: "Sélection de légumes frais sautés à l'huile d'olive avec ail et herbes aromatiques." },
      price: "€ 10,95", tag: "vegetariano",
    },
  ],

  /* ---- MASSAS ---- */
  massas: [
    {
      emoji: "🍝",
      name:  { pt: "Esparguete à Carbonara ou Bolonhesa", en: "Spaghetti Carbonara or Bolognese", es: "Espaguetis Carbonara o Boloñesa", fr: "Spaghetti Carbonara ou Bolognaise" },
      desc:  { pt: "Esparguete com molho carbonara cremoso ou bolonhesa de carne.", en: "Spaghetti with creamy carbonara or meat bolognese sauce.", es: "Espaguetis con salsa carbonara cremosa o boloñesa de carne.", fr: "Spaghetti à la carbonara crémeuse ou bolognaise à la viande." },
      price: "€ 10,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name:  { pt: "Linguini de Camarão e Molho Rosado", en: "Prawn Linguine with Rosé Sauce", es: "Linguini de Gambas con Salsa Rosada", fr: "Linguini Crevettes Sauce Rosée" },
      desc:  { pt: "Linguini com camarão salteado em molho rosado cremoso.", en: "Linguini with sautéed prawns in a creamy rosé sauce.", es: "Linguini con gambas salteadas en salsa rosada cremosa.", fr: "Linguini aux crevettes sautées en sauce rosée crémeuse." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🦞",
      name:  { pt: "Tagliatelle de Mariscos c/ Aromas de Funcho", en: "Seafood Tagliatelle with Fennel", es: "Tagliatelle de Mariscos con Hinojo", fr: "Tagliatelle Fruits de Mer au Fenouil" },
      desc:  { pt: "Tagliatelle com seleção de mariscos e subtil aroma de funcho.", en: "Tagliatelle with seafood selection and a subtle hint of fennel.", es: "Tagliatelle con selección de mariscos y sutil aroma de hinojo.", fr: "Tagliatelle aux fruits de mer avec un subtil parfum de fenouil." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🍝",
      name:  { pt: "Rigatone Milano", en: "Rigatoni Milano", es: "Rigatoni Milán", fr: "Rigatoni Milano" },
      desc:  { pt: "Rigatoni com ragù de carne ao estilo milanês e parmesão.", en: "Rigatoni with Milanese-style meat ragù and parmesan.", es: "Rigatoni con ragú de carne estilo milanés y parmesano.", fr: "Rigatoni au ragù de viande à la milanaise et parmesan." },
      price: "€ 12,50", tag: "popular",
    },
  ],

  /* ---- RISOTOS ---- */
  risotos: [
    {
      emoji: "🍚",
      name:  { pt: "Risoto de Camarão e Lima", en: "Prawn & Lime Risotto", es: "Risotto de Gambas y Lima", fr: "Risotto Crevettes et Citron Vert" },
      desc:  { pt: "Risoto cremoso com camarão fresco e toque cítrico de lima.", en: "Creamy risotto with fresh prawns and a citrus lime twist.", es: "Risotto cremoso con gambas frescas y toque cítrico de lima.", fr: "Risotto crémeux aux crevettes fraîches et touche citronnée de lime." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🦞",
      name:  { pt: "Risoto del Maré", en: "Seafood Risotto", es: "Risotto del Maré", fr: "Risotto del Maré" },
      desc:  { pt: "Risoto de frutos do mar com mariscos frescos da época.", en: "Seafood risotto with fresh seasonal shellfish.", es: "Risotto de frutos del mar con mariscos frescos de temporada.", fr: "Risotto aux fruits de mer avec coquillages frais de saison." },
      price: "€ 13,95", tag: "mar",
    },
    {
      emoji: "🍗",
      name:  { pt: "Risoto de Frango e Presunto", en: "Chicken & Ham Risotto", es: "Risotto de Pollo y Jamón", fr: "Risotto Poulet et Jambon" },
      desc:  { pt: "Risoto com frango grelhado, presunto regional e ervas aromáticas.", en: "Risotto with grilled chicken, regional ham and aromatic herbs.", es: "Risotto con pollo a la plancha, jamón regional y hierbas aromáticas.", fr: "Risotto au poulet grillé, jambon régional et herbes aromatiques." },
      price: "€ 14,95", tag: "popular",
    },
    {
      emoji: "🐟",
      name:  { pt: "Risoto de Peixe", en: "Fish Risotto", es: "Risotto de Pescado", fr: "Risotto de Poisson" },
      desc:  { pt: "Risoto cremoso com peixe fresco do dia e ervas aromáticas.", en: "Creamy risotto with fresh fish of the day and aromatic herbs.", es: "Risotto cremoso con pescado fresco del día y hierbas aromáticas.", fr: "Risotto crémeux au poisson frais du jour et herbes aromatiques." },
      price: "€ 14,95", tag: "mar",
    },
    {
      emoji: "🦑",
      name:  { pt: "Risoto de Lulas", en: "Squid Risotto", es: "Risotto de Calamares", fr: "Risotto aux Calmars" },
      desc:  { pt: "Risoto negro de lulas com tinta de choco, azeite e salsa.", en: "Black squid ink risotto with olive oil and parsley.", es: "Risotto negro de calamares con tinta de sepia, aceite y perejil.", fr: "Risotto noir aux calmars avec encre de seiche, huile d'olive et persil." },
      price: "€ 15,10", tag: "mar",
    },
  ],

  /* ---- PEIXES ---- */
  peixes: [
    {
      emoji: "🐟",
      name:  { pt: "Filete de Espada c/ Banana ou Maracujá", en: "Scabbardfish Fillet with Banana or Passion Fruit", es: "Filete de Pez Espada con Plátano o Maracuyá", fr: "Filet de Sabre Banane ou Fruit de la Passion" },
      desc:  { pt: "Filetes de espada preta fritos, acompanhados de banana frita ou molho de maracujá. Prato emblemático da Madeira.", en: "Fried black scabbardfish fillets served with fried banana or passion fruit sauce. Madeira's iconic dish.", es: "Filetes de pez espada negro fritos, con plátano frito o salsa de maracuyá. El plato más emblemático de Madeira.", fr: "Filets de poisson-sabre noir frits, servis avec banane frite ou sauce aux fruits de la passion. Le plat emblématique de Madère." },
      price: "€ 13,75", tag: "tipico",
    },
    {
      emoji: "🐟",
      name:  { pt: "Filete de Espada c/ Camarão ou Marisco", en: "Scabbardfish Fillet with Prawns or Seafood", es: "Filete de Pez Espada con Gambas o Mariscos", fr: "Filet de Sabre aux Crevettes ou Fruits de Mer" },
      desc:  { pt: "Filetes de espada preta com camarão salteado ou seleção de mariscos.", en: "Black scabbardfish fillets topped with sautéed prawns or a seafood selection.", es: "Filetes de pez espada negro con gambas salteadas o selección de mariscos.", fr: "Filets de poisson-sabre noir avec crevettes sautées ou sélection de fruits de mer." },
      price: "€ 15,95", tag: "mar",
    },
    {
      emoji: "🐠",
      name:  { pt: "Espada Grelhada", en: "Grilled Scabbardfish", es: "Pez Espada a la Plancha", fr: "Poisson-Sabre Grillé" },
      desc:  { pt: "Espada preta grelhada na brasa com azeite, alho e limão.", en: "Grilled black scabbardfish with olive oil, garlic and lemon.", es: "Pez espada negro a la brasa con aceite de oliva, ajo y limón.", fr: "Poisson-sabre noir grillé au charbon avec huile d'olive, ail et citron." },
      price: "€ 15,95", tag: "tipico",
    },
    {
      emoji: "🐟",
      name:  { pt: "Sardinhas Grelhadas", en: "Grilled Sardines", es: "Sardinas a la Plancha", fr: "Sardines Grillées" },
      desc:  { pt: "Sardinhas frescas grelhadas na brasa, servidas com pimentos e batata cozida.", en: "Fresh sardines grilled over coals, served with peppers and boiled potato.", es: "Sardinas frescas a la brasa, servidas con pimientos y patata cocida.", fr: "Sardines fraîches grillées au charbon, servies avec poivrons et pomme de terre cuite." },
      price: "€ 9,95", tag: "tipico",
    },
    {
      emoji: "🐡",
      name:  { pt: "Bife de Atum", en: "Tuna Steak", es: "Filete de Atún", fr: "Steak de Thon" },
      desc:  { pt: "Lombo de atum local grelhado com molho de cebola e tomate.", en: "Local tuna loin grilled with onion and tomato sauce.", es: "Lomo de atún local a la plancha con salsa de cebolla y tomate.", fr: "Longe de thon local grillée avec sauce oignon et tomate." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🦑",
      name:  { pt: "Lulas e Gambas", en: "Squid & Prawns", es: "Calamares y Gambas", fr: "Calamars et Crevettes" },
      desc:  { pt: "Lulas e gambas salteadas em azeite, alho e piri-piri.", en: "Squid and prawns sautéed in olive oil, garlic and piri-piri.", es: "Calamares y gambas salteados en aceite de oliva, ajo y piri-piri.", fr: "Calamars et crevettes sautés à l'huile d'olive, ail et piri-piri." },
      price: "€ 15,10", tag: "mar",
    },
    {
      emoji: "🐠",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bacalhau_a_lagareiro.jpg/400px-Bacalhau_a_lagareiro.jpg",
      name:  { pt: "Bacalhau à Lagareiro", en: "Bacalhau à Lagareiro", es: "Bacalao a la Lagareiro", fr: "Morue à la Lagareiro" },
      desc:  { pt: "Lombo de bacalhau assado no forno com batata murro, azeite virgem extra e alho.", en: "Baked cod loin with crushed potatoes, extra virgin olive oil and garlic.", es: "Lomo de bacalao asado al horno con patatas aplastadas, aceite de oliva virgen extra y ajo.", fr: "Dos de morue rôti au four avec pommes de terre écrasées, huile d'olive extra vierge et ail." },
      price: "€ 20,95", tag: "popular",
    },
    {
      emoji: "🐙",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Polvo_a_lagareiro.jpg/400px-Polvo_a_lagareiro.jpg",
      name:  { pt: "Polvo à Lagareiro", en: "Octopus à Lagareiro", es: "Pulpo a la Lagareiro", fr: "Poulpe à la Lagareiro" },
      desc:  { pt: "Tentáculos de polvo assados com batata murro, azeite de qualidade e salsa.", en: "Octopus tentacles roasted with crushed potatoes, quality olive oil and parsley.", es: "Tentáculos de pulpo asados con patatas aplastadas, aceite de calidad y perejil.", fr: "Tentacules de poulpe rôtis avec pommes de terre écrasées, huile d'olive et persil." },
      price: "€ 18,75", tag: "mar",
    },
    {
      emoji: "🍢",
      name:  { pt: "Espetada Mista de Peixe", en: "Mixed Fish Skewer", es: "Brocheta Mixta de Pescado", fr: "Brochette Mixte de Poisson" },
      desc:  { pt: "Espetada de peixe misto grelhada no carvão com legumes da época.", en: "Mixed fish skewer grilled over coals with seasonal vegetables.", es: "Brocheta de pescado mixto a la brasa con verduras de temporada.", fr: "Brochette de poisson mixte grillée au charbon avec légumes de saison." },
      price: "€ 18,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name:  { pt: "Gambas Tigre", en: "Tiger Prawns", es: "Gambas Tigre", fr: "Crevettes Tigre" },
      desc:  { pt: "Gambas tigre grelhadas na brasa com manteiga de alho e coentros.", en: "Tiger prawns grilled over coals with garlic butter and coriander.", es: "Gambas tigre a la brasa con mantequilla de ajo y cilantro.", fr: "Crevettes tigre grillées au charbon avec beurre à l'ail et coriandre." },
      price: "€ 19,95", tag: "mar",
    },
    {
      emoji: "🦐",
      name:  { pt: "Gambas à \"Velhinho\"", en: "Prawns \"Velhinho\" Style", es: "Gambas al Estilo \"Velhinho\"", fr: "Crevettes à la \"Velhinho\"" },
      desc:  { pt: "Gambas salteadas no molho especial da casa com bolo do caco.", en: "Prawns sautéed in the house special sauce with bolo do caco.", es: "Gambas salteadas en la salsa especial de la casa con bolo do caco.", fr: "Crevettes sautées en sauce spéciale maison avec bolo do caco." },
      price: "€ 27,50", tag: "popular",
    },
    {
      emoji: "🦐",
      name:  { pt: "Gambas Grelhadas", en: "Grilled Prawns", es: "Gambas a la Plancha", fr: "Crevettes Grillées" },
      desc:  { pt: "Gambas grelhadas na brasa com azeite, alho e coentros frescos.", en: "Prawns grilled over coals with olive oil, garlic and fresh coriander.", es: "Gambas a la brasa con aceite de oliva, ajo y cilantro fresco.", fr: "Crevettes grillées au charbon avec huile d'olive, ail et coriandre frais." },
      price: "€ 19,95", tag: "mar",
    },
    {
      emoji: "🐟",
      name:  { pt: "Pescado do Dia", en: "Catch of the Day", es: "Pescado del Día", fr: "Poisson du Jour" },
      desc:  { pt: "Peixe fresco do dia preparado conforme a sua preferência. Preço ao kg — pergunte ao seu servidor.", en: "Fresh catch of the day prepared to your preference. Priced per kg — ask your server.", es: "Pescado fresco del día preparado según su preferencia. Precio al kg — consulte con su servidor.", fr: "Poisson frais du jour préparé selon vos préférences. Prix au kg — demandez à votre serveur." },
      price: "Preço ao kg", tag: "tipico",
    },
  ],

  /* ---- CARNES ---- */
  carnes: [
    {
      emoji: "🥩",
      name:  { pt: "Bife à \"Velhinho\"", en: "\"O Velhinho\" Steak", es: "Filete a la \"Velhinho\"", fr: "Bifteck \"O Velhinho\"" },
      desc:  { pt: "Bife grelhado com molho especial da casa. A especialidade do chef.", en: "Grilled steak with the house special sauce. The chef's speciality.", es: "Filete a la plancha con salsa especial de la casa. La especialidad del chef.", fr: "Bifteck grillé avec sauce spéciale maison. La spécialité du chef." },
      price: "€ 18,95", tag: "popular",
    },
    {
      emoji: "🍄",
      name:  { pt: "Bife c/ Cogumelos", en: "Steak with Mushrooms", es: "Filete con Champiñones", fr: "Bifteck aux Champignons" },
      desc:  { pt: "Bife grelhado com molho de cogumelos salteados e ervas aromáticas.", en: "Grilled steak with sautéed mushroom sauce and aromatic herbs.", es: "Filete a la plancha con salsa de champiñones salteados y hierbas.", fr: "Bifteck grillé avec sauce aux champignons sautés et herbes aromatiques." },
      price: "€ 18,95", tag: "popular",
    },
    {
      emoji: "🥩",
      name:  { pt: "Bife do Lombo Grelhado", en: "Grilled Sirloin Steak", es: "Solomillo a la Plancha", fr: "Faux-filet Grillé" },
      desc:  { pt: "Lombo de novilho grelhado na chapa com azeite e ervas. Servido com batata frita e salada.", en: "Grilled veal sirloin with olive oil and herbs. Served with fries and salad.", es: "Solomillo de ternera a la plancha con aceite y hierbas. Con patatas fritas y ensalada.", fr: "Faux-filet de veau grillé avec huile d'olive et herbes. Servi avec frites et salade." },
      price: "€ 18,00", tag: "popular",
    },
    {
      emoji: "🌶️",
      name:  { pt: "Bife de Filé c/ Molho de Pimenta", en: "Fillet Steak with Pepper Sauce", es: "Filete con Salsa de Pimienta", fr: "Filet Mignon Sauce Poivre" },
      desc:  { pt: "Filé de novilho grelhado com molho de pimenta preta e natas.", en: "Grilled veal fillet with black pepper and cream sauce.", es: "Solomillo de ternera a la plancha con salsa de pimienta negra y nata.", fr: "Filet de veau grillé avec sauce poivre noir et crème." },
      price: "€ 23,00", tag: "tipico",
    },
    {
      emoji: "🍢",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Espetada%2CBoaventura-Sao_Jorge_-_panoramio.jpg/400px-Espetada%2CBoaventura-Sao_Jorge_-_panoramio.jpg",
      name:  { pt: "Espetada Regional", en: "Regional Espetada", es: "Espeto Regional", fr: "Espetada Régionale" },
      desc:  { pt: "Carne de vaca em pau de loureiro, marinada em sal grosso, alho e louro. Servida com bolo do caco.", en: "Beef on a laurel stick, marinated in coarse salt, garlic and bay leaf. Served with bolo do caco.", es: "Ternera en palo de laurel, marinada en sal gruesa, ajo y laurel. Con bolo do caco.", fr: "Bœuf sur bâton de laurier, mariné en gros sel, ail et laurier. Servi avec bolo do caco." },
      price: "€ 14,75", tag: "tipico",
    },
    {
      emoji: "🐖",
      name:  { pt: "Medalhões de Porco c/ Molho de Cogumelos ou Pimenta", en: "Pork Medallions with Mushroom or Pepper Sauce", es: "Medallones de Cerdo con Salsa de Champiñones o Pimienta", fr: "Médaillons de Porc Sauce Champignons ou Poivre" },
      desc:  { pt: "Medalhões de lombo de porco grelhados com molho de cogumelos ou molho de pimenta.", en: "Grilled pork loin medallions with mushroom sauce or pepper sauce.", es: "Medallones de lomo de cerdo a la plancha con salsa de champiñones o salsa de pimienta.", fr: "Médaillons de longe de porc grillés, sauce champignons ou sauce poivre." },
      price: "€ 14,50", tag: "popular",
    },
    {
      emoji: "🍗",
      name:  { pt: "Peito de Frango Grelhado c/ Molho de Cogumelos ou Pimenta", en: "Grilled Chicken Breast with Mushroom or Pepper Sauce", es: "Pechuga de Pollo con Salsa de Champiñones o Pimienta", fr: "Blanc de Poulet Grillé Sauce Champignons ou Poivre" },
      desc:  { pt: "Peito de frango grelhado na chapa com molho de cogumelos ou pimenta. Servido com arroz e salada.", en: "Grilled chicken breast with mushroom or pepper sauce. Served with rice and salad.", es: "Pechuga de pollo a la plancha con salsa de champiñones o pimienta. Con arroz y ensalada.", fr: "Blanc de poulet grillé avec sauce champignons ou poivre. Servi avec riz et salade." },
      price: "€ 11,95", tag: "popular",
    },
    {
      emoji: "🍗",
      name:  { pt: "Espetada de Frango com Laranja", en: "Chicken Skewer with Orange", es: "Brocheta de Pollo con Naranja", fr: "Brochette de Poulet à l'Orange" },
      desc:  { pt: "Espetada de frango marinado em laranja e ervas, grelhada na brasa.", en: "Chicken skewer marinated in orange and herbs, grilled over coals.", es: "Brocheta de pollo marinado en naranja y hierbas, a la brasa.", fr: "Brochette de poulet mariné à l'orange et aux herbes, grillée au charbon." },
      price: "€ 13,50", tag: "regional",
    },
    {
      emoji: "🥩",
      name:  { pt: "Costeleta de Vaca Grelhada", en: "Grilled Beef Chop", es: "Chuleta de Vaca a la Plancha", fr: "Côte de Bœuf Grillée" },
      desc:  { pt: "Costeleta de vaca grelhada na chapa com sal grosso, alho e azeite.", en: "Grilled beef chop with coarse salt, garlic and olive oil.", es: "Chuleta de vaca a la plancha con sal gruesa, ajo y aceite de oliva.", fr: "Côte de bœuf grillée avec gros sel, ail et huile d'olive." },
      price: "€ 24,00", tag: "tipico",
    },
    {
      emoji: "🍖",
      name:  { pt: "Costeleta de Borrego c/ Molho de Menta", en: "Lamb Chop with Mint Sauce", es: "Chuleta de Cordero con Salsa de Menta", fr: "Côtelette d'Agneau Sauce Menthe" },
      desc:  { pt: "Costeleta de borrego grelhada com molho de menta fresca.", en: "Grilled lamb chop with fresh mint sauce.", es: "Chuleta de cordero a la plancha con salsa de menta fresca.", fr: "Côtelette d'agneau grillée avec sauce à la menthe fraîche." },
      price: "€ 19,50", tag: "popular",
    },
    {
      emoji: "🐖",
      name:  { pt: "Costeleta de Porco Grelhada", en: "Grilled Pork Chop", es: "Chuleta de Cerdo a la Plancha", fr: "Côtelette de Porc Grillée" },
      desc:  { pt: "Costeleta de porco grelhada na brasa com azeite, alho e ervas.", en: "Grilled pork chop with olive oil, garlic and herbs.", es: "Chuleta de cerdo a la brasa con aceite de oliva, ajo y hierbas.", fr: "Côtelette de porc grillée au charbon avec huile d'olive, ail et herbes." },
      price: "€ 14,50", tag: "popular",
    },
  ],

  /* ---- MENU ESPECIAL ---- */
  especial: [
    {
      price: "€ 19,75",
      label_or: { pt: "ou", en: "or", es: "o", fr: "ou" },
      courses: [
        {
          label: { pt: "1º Prato", en: "1st Course", es: "1er Plato", fr: "1er Plat" },
          options: {
            pt: ["Sopa de Tomate", "Salada de Atum"],
            en: ["Tomato Soup",    "Tuna Salad"],
            es: ["Sopa de Tomate", "Ensalada de Atún"],
            fr: ["Soupe de Tomate","Salade de Thon"],
          },
        },
        {
          label: { pt: "Prato Principal", en: "Main Course", es: "Plato Principal", fr: "Plat Principal" },
          options: {
            pt: ["Bife de Atum", "Filete de Espada c/ Molho de Maracujá", "Espetada Regional", "Frango Grelhado", "Pão com Manteiga de Alho"],
            en: ["Tuna Steak",   "Scabbardfish Fillet with Passion Fruit Sauce", "Regional Espetada", "Grilled Chicken", "Garlic Bread"],
            es: ["Filete de Atún","Filete de Pez Espada con Salsa de Maracuyá", "Espeto Regional", "Pollo a la Plancha", "Pan con Mantequilla de Ajo"],
            fr: ["Steak de Thon", "Filet de Poisson-Sabre Sauce Fruit de la Passion", "Espetada Régionale", "Poulet Grillé", "Pain à l'Ail"],
          },
        },
        {
          label: { pt: "Sobremesa + Café", en: "Dessert + Coffee", es: "Postre + Café", fr: "Dessert + Café" },
          options: {
            pt: ["Sobremesa à escolha", "Café"],
            en: ["Dessert of your choice", "Coffee"],
            es: ["Postre a elegir", "Café"],
            fr: ["Dessert au choix", "Café"],
          },
        },
      ],
    },
  ],
};

/* =============================
   STATE
   ============================= */
let currentLang = 'pt';
let currentCategory = 'entradas_frias';

/* =============================
   FUNCTIONS
   ============================= */
function setLanguage(lang) {
  currentLang = lang;
  applyTranslations();

  document.getElementById('lang-screen').classList.remove('active');
  const menuScreen = document.getElementById('menu-screen');
  menuScreen.style.display = 'flex';
  menuScreen.classList.add('active');

  showCategory(currentCategory, null);
}

function goToLang() {
  document.getElementById('menu-screen').classList.remove('active');
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('lang-screen').classList.add('active');
}

function applyTranslations() {
  const t = translations[currentLang];
  document.getElementById('lang-title').textContent = t.langTitle;
  document.getElementById('header-sub').textContent = t.headerSub;
  document.getElementById('btn-change-lang').innerHTML = t.btnChangeLang;
  document.getElementById('footer-text').textContent = t.footer;
  Object.keys(t.nav).forEach(key => {
    const el = document.getElementById('nav-' + key);
    if (el) el.textContent = t.nav[key];
  });
}

function showCategory(category, btn) {
  currentCategory = category;

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    const target = document.querySelector(`.nav-btn[data-category="${category}"]`);
    if (target) target.classList.add('active');
  }

  const t = translations[currentLang];
  const catInfo = t.categories[category];
  document.getElementById('category-title').textContent = catInfo.title;
  document.getElementById('category-desc').textContent = catInfo.desc;

  renderMenu(category);
}

function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  const items = menuData[category];
  const t = translations[currentLang];

  if (category === 'especial') {
    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'menu-card card-especial';
      card.style.animationDelay = `${i * 0.07}s`;

      const or = item.label_or[currentLang] || item.label_or['en'];
      const coursesHTML = item.courses.map(course => {
        const opts = (course.options[currentLang] || course.options['en'])
          .map(o => `<li>${o}</li>`)
          .join(`<li class="especial-or">${or}</li>`);
        return `
          <div class="especial-course">
            <span class="especial-course-label">${course.label[currentLang] || course.label['en']}</span>
            <ul class="especial-options">${opts}</ul>
          </div>`;
      }).join('<div class="especial-divider">✦</div>');

      card.innerHTML = `
        <div class="especial-courses">${coursesHTML}</div>
        <div class="especial-price-row">
          <span class="card-price">${item.price}</span>
          <span class="card-tag especial">${t.tags.especial}</span>
        </div>
      `;
      grid.appendChild(card);
    });
    return;
  }

  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.07}s`;

    const tagLabel = t.tags[item.tag] || item.tag;
    const descText = (item.desc[currentLang] || item.desc['en']).replace(/\n/g, ' · ');

    card.innerHTML = `
      <div class="card-left">
        <span class="card-bullet">·</span>
        <div class="card-body">
          <h3 class="card-name">${item.name[currentLang] || item.name['en']}</h3>
          <p class="card-desc">${descText}</p>
        </div>
      </div>
      <div class="card-right">
        <span class="card-price">${item.price}</span>
        <span class="card-tag ${item.tag}">${tagLabel}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* =============================
   INIT
   ============================= */
document.addEventListener('DOMContentLoaded', () => {
  const titles = [
    "Escolha o seu idioma",
    "Choose your language",
    "Elige tu idioma",
    "Choisissez votre langue"
  ];
  let ti = 0;
  const el = document.getElementById('lang-title');
  el.style.transition = 'opacity 0.3s ease';

  setInterval(() => {
    ti = (ti + 1) % titles.length;
    el.style.opacity = '0';
    setTimeout(() => { el.textContent = titles[ti]; el.style.opacity = '1'; }, 300);
  }, 2500);
});
