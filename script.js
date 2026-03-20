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

// Shorthand helper – keeps name objects concise
function n(pt,en,es,fr,de,it,nl,pl,ru,no,da,fi){
  return {pt,en,es,fr,de,it,nl,pl,ru,no,da,fi};
}

const menuData = {

  /* ---- ENTRADAS FRIAS ---- */
  entradas_frias: [
    {
      emoji: "🍤",
      name: n("Cocktail de Camarão","Shrimp Cocktail","Cóctel de Gambas","Cocktail de Crevettes","Garnelencocktail","Cocktail di Gamberi","Garnalencocktail","Koktajl Krewetkowy","Коктейль из Креветок","Rekecocktail","Rejecocktail","Katkarapucocktail"),
      desc: { pt: "Camarão fresco com molho cocktail, alface e limão.", en: "Fresh Shrimps with cocktail sauce, lettuce and lemon.", es: "Gambas frescas con salsa cocktail, lechuga y limón.", fr: "Crevettes fraîches avec sauce cocktail, laitue et citron." },
      price: "€ 12,75", tag: "mar",
    },
    {
      emoji: "🍈",
      name: n("Melão c/ Presunto","Melon with Ham","Melón con Jamón","Melon au Jambon","Melone mit Schinken","Melone con Prosciutto","Meloen met Ham","Melon z Szynką","Дыня с Ветчиной","Melon med Skinke","Melon med Skinke","Meloni ja Kinkku"),
      desc: { pt: "Melão doce e fresco acompanhado de finas fatias de presunto curado.", en: "Sweet fresh melon with thin slices of cured ham.", es: "Melón dulce y fresco con finas lonchas de jamón curado.", fr: "Melon doux et frais accompagné de fines tranches de jambon cru." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🥓",
      name: n("Presunto c/ Espargos e Queijo","Ham with Asparagus & Cheese","Jamón con Espárragos y Queso","Jambon, Asperges et Fromage","Schinken mit Spargel und Käse","Prosciutto con Asparagi e Formaggio","Ham met Asperges en Kaas","Szynka ze Szparagami i Serem","Ветчина со Спаржей и Сыром","Skinke med Asparges og Ost","Skinke med Asparges og Ost","Kinkku, Parsa ja Juusto"),
      desc: { pt: "Presunto regional com espargos grelhados e queijo da ilha.", en: "Regional ham with grilled asparagus and island cheese.", es: "Jamón regional con espárragos a la plancha y queso de la isla.", fr: "Jambon régional avec asperges grillées et fromage de l'île." },
      price: "€ 9,95", tag: "regional",
    },
    {
      emoji: "🦞",
      name: n("Marinara de Mariscos","Seafood Marinara","Marinara de Mariscos","Marinara de Fruits de Mer","Meeresfrüchte Marinara","Frutti di Mare alla Marinara","Zeevruchten Marinara","Owoce Morza Marinara","Морепродукты Маринара","Sjømat Marinara","Skaldyr Marinara","Merenantimet Marinara"),
      desc: { pt: "Seleção de mariscos frescos em molho marinara com pão torrado.", en: "Selection of fresh seafood in marinara sauce with toasted bread.", es: "Selección de mariscos frescos en salsa marinara con pan tostado.", fr: "Sélection de fruits de mer frais en sauce marinara avec pain grillé." },
      price: "€ 14,00", tag: "mar",
    },
  ],

  /* ---- ENTRADAS QUENTES ---- */
  entradas_quentes: [
    {
      emoji: "🦐",
      name: n("Camarão c/ Alho","Shrimp with Garlic","Gambas al Ajillo","Crevettes à l'Ail","Knoblauchgarnelen","Gamberi all'Aglio","Knoflookgarnalen","Krewetki z Czosnkiem","Креветки с Чесноком","Hvitløksreker","Hvidløgsrejer","Valkosipulikatkaravut"),
      desc: { pt: "Camarão salteado em azeite com alho fatiado e piri-piri. Servido com pão.", en: "Shrimps sautéed in olive oil with sliced garlic and piri-piri. Served with bread.", es: "Gambas salteadas en aceite de oliva con ajo laminado y piri-piri. Con pan.", fr: "Crevettes sautées à l'huile d'olive avec ail émincé et piri-piri. Servies avec du pain." },
      price: "€ 13,50", tag: "mar",
    },
    {
      emoji: "🐚",
      name: n("Mexilhão Grelhado","Grilled Mussels","Mejillones a la Plancha","Moules Grillées","Gegrillte Muscheln","Cozze alla Griglia","Gegrilde Mosselen","Małże z Grilla","Мидии на Гриле","Grillede Blåskjell","Grillede Muslinger","Grillattuja Simpukoita"),
      desc: { pt: "Mexilhões frescos grelhados na brasa com manteiga de alho e limão.", en: "Fresh mussels grilled over coals with garlic butter and lemon.", es: "Mejillones frescos a la brasa con mantequilla de ajo y limón.", fr: "Moules fraîches grillées au charbon avec beurre à l'ail et citron." },
      price: "€ 12,00", tag: "tipico",
    },
    {
      emoji: "🐚",
      name: n("Mexilhão à Espanhola","Spanish-style Mussels","Mejillones a la Española","Moules à l'Espagnole","Muscheln nach Spanischer Art","Cozze alla Spagnola","Mosselen op Spaanse Wijze","Małże po Hiszpańsku","Мидии по-Испански","Blåskjell på Spansk Vis","Muslinger på Spansk Vis","Espanjalaistyylisiä Simpukoita"),
      desc: { pt: "Mexilhões cozinhados com tomate, cebola, pimento e vinho branco.", en: "Mussels cooked with tomato, onion, pepper and white wine.", es: "Mejillones cocinados con tomate, cebolla, pimiento y vino blanco.", fr: "Moules cuites avec tomate, oignon, poivron et vin blanc." },
      price: "€ 12,00", tag: "popular",
    },
    {
      emoji: "🦪",
      name: n("Lapas Grelhadas","Grilled Limpets","Lapas a la Plancha","Berniques Grillées","Gegrillte Napfschnecken","Patelle alla Griglia","Gegrilde Napslakken","Grillowane Skałkoczki","Блюдечки на Гриле","Grillede Albuskjell","Grillede Stenmusling","Grillattuja Lapas-kotiloja"),
      desc: { pt: "Lapas frescas da Madeira grelhadas na brasa com manteiga de alho e limão. Um clássico irresistível da ilha.", en: "Fresh Madeiran limpets grilled over coals with garlic butter and lemon. An unmissable island classic.", es: "Lapas frescas de Madeira a la brasa con mantequilla de ajo y limón. Un clásico de la isla.", fr: "Patelles fraîches de Madère grillées au charbon avec beurre à l'ail et citron. Un incontournable." },
      price: "€ 18,00", tag: "tipico",
    },
    {
      emoji: "🐙",
      name: n("Polvo à Madeirense","Madeiran Octopus","Pulpo a la Madeirense","Poulpe à la Madéroise","Tintenfisch nach Madeirischer Art","Polpo alla Madeirense","Octopus op Madeiraanse Wijze","Ośmiornica po Madeirańsku","Осьминог по-Мадейрски","Blekksprut på Madeirisk Vis","Blæksprutte på Madeireisk Vis","Mustekala Madeiran Tapaan"),
      desc: { pt: "Polvo tenro cozinhado ao estilo madeirense com batata, cebola e azeite.", en: "Tender octopus cooked Madeiran-style with potato, onion and olive oil.", es: "Pulpo tierno cocinado al estilo madeirense con patata, cebolla y aceite.", fr: "Poulpe tendre cuisiné à la madéroise avec pomme de terre, oignon et huile d'olive." },
      price: "€ 13,50", tag: "tipico",
    },
    {
      emoji: "🐌",
      name: n("Amêijoas à Bulhão Pato","Bulhão Pato Clams","Almejas a la Bulhão Pato","Palourdes Bulhão Pato","Venusmuscheln Bulhão Pato","Vongole Bulhão Pato","Kokkels Bulhão Pato","Małże Bulhão Pato","Моллюски Булан Пату","Skjell Bulhão Pato","Muslinger Bulhão Pato","Simpukat Bulhão Pato"),
      desc: { pt: "Amêijoas abertas no vapor com azeite, alho, coentros frescos e vinho branco.", en: "Steamed clams with olive oil, garlic, fresh coriander and white wine.", es: "Almejas al vapor con aceite de oliva, ajo, cilantro fresco y vino blanco.", fr: "Palourdes à la vapeur avec huile d'olive, ail, coriandre frais et vin blanc." },
      price: "€ 13,50", tag: "mar",
    },
  ],

  /* ---- SALADAS ---- */
  saladas: [
    {
      emoji: "🥗",
      name: n("Salada Mista","Mixed Salad","Ensalada Mixta","Salade Mixte","Gemischter Salat","Insalata Mista","Gemengde Salade","Sałatka Mieszana","Смешанный Салат","Blandet Salat","Blandet Salat","Sekasalaatti"),
      desc: { pt: "Alface, tomate, cebola, azeitonas e cenoura com azeite e vinagre.", en: "Lettuce, tomato, onion, olives and carrot with olive oil and vinegar.", es: "Lechuga, tomate, cebolla, aceitunas y zanahoria con aceite y vinagre.", fr: "Laitue, tomate, oignon, olives et carotte avec huile d'olive et vinaigre." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🐟",
      name: n("Salada de Atum","Tuna Salad","Ensalada de Atún","Salade de Thon","Thunfischsalat","Insalata di Tonno","Tonijnsalade","Sałatka z Tuńczykiem","Салат с Тунцом","Tunfisksalat","Tunfisksalat","Tonnikalasalaatti"),
      desc: { pt: "Atum com tomate, cebola roxa, azeitonas, ovo cozido e azeite.", en: "Tuna with tomato, red onion, olives, boiled egg and olive oil.", es: "Atún con tomate, cebolla roja, aceitunas, huevo cocido y aceite.", fr: "Thon avec tomate, oignon rouge, olives, œuf dur et huile d'olive." },
      price: "€ 9,95", tag: "mar",
    },
    {
      emoji: "🍗",
      name: n("Salada de Frango c/ Queijo","Chicken Salad W/ Cheese ","Ensalada de Pollo y Queso","Salade Poulet et Fromage","Hähnchen-Käse-Salat","Insalata di Pollo e Formaggio","Kip-Kaassalade","Sałatka z Kurczakiem i Serem","Салат с Курицей и Сыром","Kylling- og Ostsalat","Kylling- og Ostsalat","Kana-Juustosalaatti"),
      desc: { pt: "Frango grelhado com queijo da ilha, alface fresca e tomate.", en: "Grilled chicken with island cheese, fresh lettuce and tomato.", es: "Pollo a la plancha con queso de la isla, lechuga fresca y tomate.", fr: "Poulet grillé avec fromage de l'île, laitue fraîche et tomate." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name: n("Salada de Camarão","Shrimp Salad","Ensalada de Gambas","Salade de Crevettes","Garnelensalat","Insalata di Gamberi","Garnalenasalade","Sałatka Krewetkowa","Салат с Креветками","Rekesalat","Rejesalat","Katkarapusalaatti"),
      desc: { pt: "Camarão fresco sobre cama de alface com molho cocktail e limão.", en: "Fresh Shrimps on a bed of lettuce with cocktail sauce and lemon.", es: "Gambas frescas sobre lecho de lechuga con salsa cocktail y limón.", fr: "Crevettes fraîches sur lit de laitue avec sauce cocktail et citron." },
      price: "€ 13,50", tag: "mar",
    },
    {
      emoji: "🦞",
      name: n("Salada de Marisco","Seafood Salad","Ensalada de Mariscos","Salade de Fruits de Mer","Meeresfrüchtesalat","Insalata di Frutti di Mare","Zeevruchtensalade","Sałatka z Owoców Morza","Салат из Морепродуктов","Sjømatsalat","Skaldyrssalat","Merenantimiasalaatti"),
      desc: { pt: "Seleção de mariscos frescos com alface, tomate e molho de iogurte.", en: "Selection of fresh seafood with lettuce, tomato and yoghurt dressing.", es: "Selección de mariscos frescos con lechuga, tomate y aliño de yogur.", fr: "Sélection de fruits de mer frais avec laitue, tomate et sauce yaourt." },
      price: "€ 13,50", tag: "mar",
    },
    {
      emoji: "🐙",
      name: n("Salada de Polvo","Octopus Salad","Ensalada de Pulpo","Salade de Poulpe","Tintenfischsalat","Insalata di Polpo","Octopussalade","Sałatka z Ośmiornicą","Салат с Осьминогом","Blekksprutsalat","Blæksprutsalat","Mustekala-salaatti"),
      desc: { pt: "Polvo cozido com cebola, salsa, azeite e limão.", en: "Cooked octopus with onion, parsley, olive oil and lemon.", es: "Pulpo cocido con cebolla, perejil, aceite de oliva y limón.", fr: "Poulpe cuit avec oignon, persil, huile d'olive et citron." },
      price: "€ 13,50", tag: "mar",
    },
  ],

  /* ---- SOPAS ---- */
  sopas: [
    {
      emoji: "🍵",
      name: n("Sopa do Dia","Soup of the Day","Sopa del Día","Soupe du Jour","Tagessuppe","Zuppa del Giorno","Dagsoep","Zupa Dnia","Суп Дня","Dagens Suppe","Dagens Suppe","Päivän Keitto"),
      desc: { pt: "Sopa caseira conforme a inspiração do dia. Pergunte ao seu servidor.", en: "Home-made soup of the day. Please ask your server.", es: "Sopa casera según la inspiración del día. Consulte con su servidor.", fr: "Soupe maison selon l'inspiration du jour. Demandez à votre serveur." },
      price: "€ 4,10", tag: "popular",
    },
    {
      emoji: "🐟",
      name: n("Sopa do Peixe","Fish Soup","Sopa de Pescado","Soupe de Poisson","Fischsuppe","Zuppa di Pesce","Vissoep","Zupa Rybna","Рыбный Суп","Fiskesuppe","Fiskesuppe","Kalakeritto"),
      desc: { pt: "Sopa rica com peixe fresco do dia, batata e legumes.", en: "Rich soup with fresh fish of the day, potato and vegetables.", es: "Sopa rica con pescado fresco del día, patata y verduras.", fr: "Soupe riche au poisson frais du jour, pomme de terre et légumes." },
      price: "€ 5,50", tag: "mar",
    },
    {
      emoji: "🍅",
      name: n("Sopa de Tomate","Tomato Soup","Sopa de Tomate","Soupe de Tomate","Tomatensuppe","Zuppa di Pomodoro","Tomatensoep","Zupa Pomidorowa","Томатный Суп","Tomatssuppe","Tomatssuppe","Tomaattikeitto"),
      desc: { pt: "Sopa cremosa de tomate maduro com ervas aromáticas.", en: "Creamy ripe tomato soup with aromatic herbs.", es: "Sopa cremosa de tomate maduro con hierbas aromáticas.", fr: "Soupe crémeuse de tomate mûre aux herbes aromatiques." },
      price: "€ 5,25", tag: "popular",
    },
    {
      emoji: "🦞",
      name: n("Sopa de Marisco","Seafood Soup","Sopa de Mariscos","Soupe de Fruits de Mer","Meeresfrüchtesuppe","Zuppa di Frutti di Mare","Zeevruchtenssoep","Zupa z Owoców Morza","Суп из Морепродуктов","Sjømatsuppe","Skaldyrssuppe","Merenantimikeitto"),
      desc: { pt: "Sopa reconfortante com camarão, amêijoa e berbigão.", en: "Comforting soup with Shrimps, clams and cockles.", es: "Sopa reconfortante con gambas, almejas y berberechos.", fr: "Soupe réconfortante aux crevettes, palourdes et coques." },
      price: "€ 5,50", tag: "mar",
    },
  ],

  /* ---- OMELETES ---- */
  omelets: [
    {
      emoji: "🍳",
      name: n("Omelete Mista","Mixed Omelette","Tortilla Mixta","Omelette Mixte","Gemischtes Omelett","Frittata Mista","Gemengd Omelet","Omlet Mieszany","Смешанный Омлет","Blandet Omelett","Blandet Omelet","Sekaomeletti"),
      desc: { pt: "Omelete com fiambre, queijo e cogumelos.", en: "Omelette with ham, cheese and mushrooms.", es: "Tortilla con jamón cocido, queso y champiñones.", fr: "Omelette au jambon, fromage et champignons." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name: n("Omelete de Camarão","Shrimp Omelette","Tortilla de Gambas","Omelette aux Crevettes","Garnelenomelett","Frittata di Gamberi","Garnalenomelet","Omlet z Krewetkami","Омлет с Креветками","Rekeomelett","Rejeomelet","Katkarapuomeletti"),
      desc: { pt: "Omelete recheada com camarão salteado e ervas frescas.", en: "Omelette filled with sautéed Shrimps and fresh herbs.", es: "Tortilla rellena de gambas salteadas y hierbas frescas.", fr: "Omelette garnie de crevettes sautées et d'herbes fraîches." },
      price: "€ 12,75", tag: "mar",
    },
    {
      emoji: "🍄",
      name: n("Omelete de Cogumelos","Mushroom Omelette","Tortilla de Champiñones","Omelette aux Champignons","Pilzomelett","Frittata di Funghi","Paddenstoelomelet","Omlet z Pieczarkami","Омлет с Грибами","Soppomelett","Champignonomelett","Sieniomeletti"),
      desc: { pt: "Omelete com cogumelos salteados e queijo derretido.", en: "Omelette with sautéed mushrooms and melted cheese.", es: "Tortilla con champiñones salteados y queso fundido.", fr: "Omelette aux champignons sautés et fromage fondu." },
      price: "€ 9,95", tag: "popular",
    },
    {
      emoji: "🐟",
      name: n("Omelete de Peixe","Fish Omelette","Tortilla de Pescado","Omelette au Poisson","Fischomelett","Frittata di Pesce","Visomelet","Omlet Rybny","Рыбный Омлет","Fiskeomelett","Fiskeomelet","Kalaomeletti"),
      desc: { pt: "Omelete com peixe desfiado e ervas aromáticas.", en: "Omelette with shredded fish and aromatic herbs.", es: "Tortilla con pescado desmenuzado y hierbas aromáticas.", fr: "Omelette au poisson effiloché et herbes aromatiques." },
      price: "€ 9,95", tag: "mar",
    },
    {
      emoji: "🥚",
      name: n("Omelete Espanhola","Spanish Omelette","Tortilla Española","Omelette Espagnole","Spanisches Omelett","Frittata Spagnola","Spaans Omelet","Omlet Hiszpański","Испанский Омлет","Spansk Omelett","Spansk Omelet","Espanjalainen Omeletti"),
      desc: { pt: "Tortilha tradicional com batata, cebola e ovo.", en: "Traditional Spanish tortilla with potato, onion and egg.", es: "Tortilla tradicional española con patata, cebolla y huevo.", fr: "Tortilla espagnole traditionnelle à la pomme de terre, oignon et œuf." },
      price: "€ 10,95", tag: "tipico",
    },
  ],

  /* ---- VEGETARIANO ---- */
  vegetariano: [
    {
      emoji: "🍝",
      name: n("Fusili c/ Espinafres e Queijo","Fusilli with Spinach & Cheese","Fusilli con Espinacas y Queso","Fusilli aux Épinards et Fromage","Fusilli mit Spinat und Käse","Fusilli con Spinaci e Formaggio","Fusilli met Spinazie en Kaas","Fusilli ze Szpinakiem i Serem","Фузилли со Шпинатом и Сыром","Fusilli med Spinat og Ost","Fusilli med Spinat og Ost","Fusilli Pinaatilla ja Juustolla"),
      desc: { pt: "Fusilli cremosos com espinafres frescos e queijo parmesão.", en: "Creamy fusilli with fresh spinach and parmesan cheese.", es: "Fusilli cremosos con espinacas frescas y queso parmesano.", fr: "Fusilli crémeux aux épinards frais et parmesan." },
      price: "€ 10,95", tag: "vegetariano",
    },
    {
      emoji: "🍝",
      name: n("Esparguete c/ Molho de Tomate","Spaghetti with Tomato Sauce","Espaguetis con Salsa de Tomate","Spaghetti à la Sauce Tomate","Spaghetti mit Tomatensauce","Spaghetti al Pomodoro","Spaghetti met Tomatensaus","Spaghetti z Sosem Pomidorowym","Спагетти с Томатным Соусом","Spaghetti med Tomatsaus","Spaghetti med Tomatsauce","Spagetti Tomaattikastikkeella"),
      desc: { pt: "Esparguete com molho de tomate fresco e manjericão.", en: "Spaghetti with fresh tomato sauce and basil.", es: "Espaguetis con salsa de tomate fresco y albahaca.", fr: "Spaghetti à la sauce tomate fraîche et basilic." },
      price: "€ 11,75", tag: "vegetariano",
    },
    {
      emoji: "🍚",
      name: n("Risoto de Cogumelos e Espargos","Mushroom Risotto W/ Asparagus ","Risotto de Champiñones y Espárragos","Risotto Champignons et Asperges","Pilz- und Spargelrisotto","Risotto di Funghi e Asparagi","Risotto met Paddenstoelen en Asperges","Risotto z Pieczarkami i Szparagami","Ризотто с Грибами и Спаржей","Risotto med Sopp og Asparges","Risotto med Svampe og Asparges","Sieni-Parsarisotto"),
      desc: { pt: "Risoto cremoso de cogumelos silvestres e espargos verdes.", en: "Creamy wild mushroom and green asparagus risotto.", es: "Risotto cremoso de setas silvestres y espárragos verdes.", fr: "Risotto crémeux aux champignons sauvages et asperges vertes." },
      price: "€ 10,95", tag: "vegetariano",
    },
    {
      emoji: "🍝",
      name: n("Esparguete Vegetariana","Vegetarian Spaghetti","Espaguetis Vegetarianos","Spaghetti Végétarien","Vegetarische Spaghetti","Spaghetti Vegetariani","Vegetarische Spaghetti","Spaghetti Wegetariańskie","Вегетарианские Спагетти","Vegetarisk Spaghetti","Vegetarisk Spaghetti","Kasvisspagetti"),
      desc: { pt: "Esparguete com legumes salteados e molho de tomate e ervas.", en: "Spaghetti with sautéed vegetables and herbed tomato sauce.", es: "Espaguetis con verduras salteadas y salsa de tomate con hierbas.", fr: "Spaghetti aux légumes sautés et sauce tomate aux herbes." },
      price: "€ 10,95", tag: "vegetariano",
    },
    {
      emoji: "🥦",
      name: n("Legumes Salteados","Sautéed Vegetables","Verduras Salteadas","Légumes Sautés","Gedünstetes Gemüse","Verdure Saltate","Gesauteerde Groenten","Smażone Warzywa","Обжаренные Овощи","Sauterte Grønnsaker","Sauterede Grøntsager","Paistetut Kasvikset"),
      desc: { pt: "Seleção de legumes frescos salteados no azeite com alho e ervas aromáticas.", en: "Selection of fresh vegetables sautéed in olive oil with garlic and aromatic herbs.", es: "Selección de verduras frescas salteadas en aceite de oliva con ajo y hierbas.", fr: "Sélection de légumes frais sautés à l'huile d'olive avec ail et herbes aromatiques." },
      price: "€ 10,95", tag: "vegetariano",
    },
  ],

  /* ---- MASSAS ---- */
  massas: [
    {
      emoji: "🍝",
      name: n("Esparguete à Carbonara ou Bolonhesa","Spaghetti Carbonara or Bolognese","Espaguetis Carbonara o Boloñesa","Spaghetti Carbonara ou Bolognaise","Spaghetti Carbonara oder Bolognese","Spaghetti alla Carbonara o Bolognese","Spaghetti Carbonara of Bolognese","Spaghetti Carbonara lub Bolognese","Спагетти Карбонара или Болоньезе","Spaghetti Carbonara eller Bolognese","Spaghetti Carbonara eller Bolognese","Spagetti Carbonara tai Bolognese"),
      desc: { pt: "Esparguete com molho carbonara cremoso ou bolonhesa de carne.", en: "Spaghetti with creamy carbonara or meat bolognese sauce.", es: "Espaguetis con salsa carbonara cremosa o boloñesa de carne.", fr: "Spaghetti à la carbonara crémeuse ou bolognaise à la viande." },
      price: "€ 10,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name: n("Linguini de Camarão e Molho Rosado","Shrimp Linguine with Rosé Sauce","Linguini de Gambas con Salsa Rosada","Linguini Crevettes Sauce Rosée","Garnelen-Linguini in Rosésauce","Linguine di Gamberi con Salsa Rosa","Garnalenl inguini met Roséssaus","Linguini z Krewetkami w Różowym Sosie","Лингвини с Креветками в Розовом Соусе","Rekelinguini med Rosésaus","Rejelinguini med Rosésauce","Katkarapulinguini Rosekastikkeella"),
      desc: { pt: "Linguini com camarão salteado em molho rosado cremoso.", en: "Linguini with sautéed Shrimps in a creamy rosé sauce.", es: "Linguini con gambas salteadas en salsa rosada cremosa.", fr: "Linguini aux crevettes sautées en sauce rosée crémeuse." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🦞",
      name: n("Tagliatelle de Mariscos c/ Aromas de Funcho","Seafood Tagliatelle with Fennel","Tagliatelle de Mariscos con Hinojo","Tagliatelle Fruits de Mer au Fenouil","Meeresfrüchte-Tagliatelle mit Fenchel","Tagliatelle di Frutti di Mare al Finocchio","Zeevruchtent agliatelle met Venkel","Tagliatelle z Owocami Morza i Koprem Włoskim","Тальятелле с Морепродуктами и Фенхелем","Sjømat-tagliatelle med Fennikel","Skaldyrs-tagliatelle med Fennikel","Merenantimistagliatelle Fenkolilla"),
      desc: { pt: "Tagliatelle com seleção de mariscos e subtil aroma de funcho.", en: "Tagliatelle with seafood selection and a subtle hint of fennel.", es: "Tagliatelle con selección de mariscos y sutil aroma de hinojo.", fr: "Tagliatelle aux fruits de mer avec un subtil parfum de fenouil." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🍝",
      name: n("Rigatone Milano","Rigatoni Milano","Rigatoni Milán","Rigatoni Milano","Rigatoni Mailänder Art","Rigatoni alla Milanese","Rigatoni Milano","Rigatoni po Mediolańsku","Ригатони по-Милански","Rigatoni Milano","Rigatoni Milano","Rigatoni Milano"),
      desc:  { pt: "Rigatoni com ragù de carne ao estilo milanês e parmesão.", en: "Rigatoni with Milanese-style meat ragù and parmesan.", es: "Rigatoni con ragú de carne estilo milanés y parmesano.", fr: "Rigatoni au ragù de viande à la milanaise et parmesan." },
      price: "€ 12,50", tag: "popular",
    },
  ],

  /* ---- RISOTOS ---- */
  risotos: [
    {
      emoji: "🍚",
      name: n("Risoto de Camarão e Lima","Shrimp & Lime Risotto","Risotto de Camarón y Lima","Risotto Crevettes et Citron Vert","Garnelen und Limetten Risotto","Risotto di Gamberetti e Lime","Risotto van Garnalen en Limoen","Risotto z Krewetkami i Limonką","Ризотто из Креветок с Лаймом","Reker og Lime Risotto","Risotto med Rejer og Lime","Katkarapuja ja Lime Risotto"),
      desc:  { pt: "Risoto cremoso com camarão fresco e toque cítrico de lima.", en: "Creamy risotto with fresh Shrimps and a citrus lime twist.", es: "Risotto cremoso con gambas frescas y toque cítrico de lima.", fr: "Risotto crémeux aux crevettes fraîches et touche citronnée de lime." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🦞",
      name: n("Risoto del Maré","Seafood Risotto","Risotto del Maré","Risotto del Maré","Risotto del Maré","Risotto del Mare","Risotto del Maré","Risotto del Maré","Ризотто «Морской»","Risotto del Maré","Risotto del Maré","Risotto del Mare"),
      desc:  { pt: "Risoto de frutos do mar com mariscos frescos da época.", en: "Seafood risotto with fresh seasonal shellfish.", es: "Risotto de frutos del mar con mariscos frescos de temporada.", fr: "Risotto aux fruits de mer avec coquillages frais de saison." },
      price: "€ 13,95", tag: "mar",
    },
    {
      emoji: "🍗",
      name: n("Risoto de Frango e Presunto","Chicken & Ham Risotto","Risotto de Pollo e Jamón Serrano","Risotto Poulet et Jambon","Hähnchen und Raucherschinken Risotto","Risotto di Pollo e Prosciutto","Risotto van Kip en Ham","Risotto z Kurczakiem i Wędzoną Szynką","Ризотто из Курицы и Ветчины","Kylling og Parmaskinke Risotto","Kylling og Parmaskinke Risotto","Kana ja Kinkku Risotto"),
      desc:  { pt: "Risoto com frango grelhado, presunto regional e ervas aromáticas.", en: "Risotto with grilled chicken, regional ham and aromatic herbs.", es: "Risotto con pollo a la plancha, jamón regional y hierbas aromáticas.", fr: "Risotto au poulet grillé, jambon régional et herbes aromatiques." },
      price: "€ 14,95", tag: "popular",
    },
    {
      emoji: "🐟",
      name: n("Risoto de Peixe","Fish Risotto","Risotto de Pescado","Risotto de Poisson","Fischrisotto","Risotto di Pesce","Risotto van Vis","Risotto z Ryby","Ризотто из Рыбы","Fisk Risotto","Fisk Risotto","Kala Risotto"),
      desc:  { pt: "Risoto cremoso com peixe fresco do dia e ervas aromáticas.", en: "Creamy risotto with fresh fish of the day and aromatic herbs.", es: "Risotto cremoso con pescado fresco del día y hierbas aromáticas.", fr: "Risotto crémeux au poisson frais du jour et herbes aromatiques." },
      price: "€ 14,95", tag: "mar",
    },
    {
      emoji: "🦑",
      name: n("Risoto de Lulas","Squid Risotto","Risotto de Calamares","Risotto aux Calmars","Tintenfisch Risotto","Risotto di Calamari","Risotto van Inktvis","Risotto z Kałamarnicy","Ризотто из Кальмаров","Blekksprut Risotto","Blekksprut Risotto","Kalmari Risotto"),
      desc:  { pt: "Risoto negro de lulas com tinta de choco, azeite e salsa.", en: "Black squid ink risotto with olive oil and parsley.", es: "Risotto negro de calamares con tinta de sepia, aceite y perejil.", fr: "Risotto noir aux calmars avec encre de seiche, huile d'olive et persil." },
      price: "€ 15,10", tag: "mar",
    },
  ],

  /* ---- PEIXES ---- */
  peixes: [
    {
      emoji: "🐟",
      name: n("Filete de Espada c/ Banana ou Maracujá","Scabbardfish Fillet with Banana or Passion Fruit","Filete de Espada con Plátano o Maracuyá","Filet de Sabre Banane ou Fruit de la Passion","Schwarzer Degenfisch Filet mit Banane oder Passionsfrucht","Filetto di Pesce Spada con Banana o Frutto della Passione","Visfilet 'Espada' met Banaan of Passievrucht","Ryby z Czarnego Miecza z Bananem lub Owocami Pasji","Рыбное Филе с Бананом или Маракуйей","'Espada' Fiskfilet med Banan eller Pasjonsfrukt","'Espada' Fiskfilet med Banan eller Passionsfrugt","'Espada' Kalafilee Bananaa tai Passiohedelmää"),
      desc:  { pt: "Filetes de espada preta fritos, acompanhados de banana frita ou molho de maracujá. Prato emblemático da Madeira.", en: "Fried black scabbardfish fillets served with fried banana or passion fruit sauce. Madeira's iconic dish.", es: "Filetes de pez espada negro fritos, con plátano frito o salsa de maracuyá. El plato más emblemático de Madeira.", fr: "Filets de poisson-sabre noir frits, servis avec banane frite ou sauce aux fruits de la passion. Le plat emblématique de Madère." },
      price: "€ 13,75", tag: "tipico",
    },
    {
      emoji: "🐟",
      name: n("Filete de Espada c/ Camarão ou Marisco","Scabbardfish Fillet with Shrimps or Seafood","Filete de Espada con Camarón o Marisco","Filet de Sabre aux Crevettes ou Fruits de Mer","Schwarzer Degenfisch Filet mit Garnelen oder Meeresfrüchten","Filetto di Spada con Gamberetti e Frutti di Mare","Visfilet 'Espada' met Garnalen of Zeevruchten","Filet z Czarnego Miecza z Krewetkami lub Skorupiakami","Филе Рыбы «Меч» с Креветками или Моллюсками","'Espada' Fisk med Reker eller Skaldyr","'Espada' Fisk med Rejer eller Skaldyr","'Espada' Kalafilee Katkarapua tai Äyriäisiä"),
      desc:  { pt: "Filetes de espada preta com camarão salteado ou seleção de mariscos.", en: "Black scabbardfish fillets topped with sautéed Shrimps or a seafood selection.", es: "Filetes de pez espada negro con gambas salteadas o selección de mariscos.", fr: "Filets de poisson-sabre noir avec crevettes sautées ou sélection de fruits de mer." },
      price: "€ 15,95", tag: "mar",
    },
    {
      emoji: "🐠",
      name: n("Espada Grelhada","Grilled Scabbardfish","Espada a la Plancha","Poisson-Sabre Grillé","Gegrillter Schwarzer Degenfisch","Spigola alla Griglia","Gegrilde Vis 'Espada'","Grillowany Miecz","Рыба «Меч» Жареная","Grillet 'Espada' Fisk","Grillet Espada Fisk","Grillattu 'Espada' Kalaa"),
      desc:  { pt: "Espada preta grelhada na brasa com azeite, alho e limão.", en: "Grilled black scabbardfish with olive oil, garlic and lemon.", es: "Pez espada negro a la brasa con aceite de oliva, ajo y limón.", fr: "Poisson-sabre noir grillé au charbon avec huile d'olive, ail et citron." },
      price: "€ 15,95", tag: "tipico",
    },
    {
      emoji: "🐟",
      name: n("Sardinhas Grelhadas","Grilled Sardines","Sardinas a la Plancha","Sardines Grillées","Gegrillte Sardinen","Sardine alla Griglia","Gegrilde Sardines","Grillowane Sardynki","Жареные Сардины","Grillede Sardiner","Grillede Sardiner","Grillattu Sardinkit"),
      desc:  { pt: "Sardinhas frescas grelhadas na brasa, servidas com pimentos e batata cozida.", en: "Fresh sardines grilled over coals, served with peppers and boiled potato.", es: "Sardinas frescas a la brasa, servidas con pimientos y patata cocida.", fr: "Sardines fraîches grillées au charbon, servies avec poivrons et pomme de terre cuite." },
      price: "€ 9,95", tag: "tipico",
    },
    {
      emoji: "🐡",
      name: n("Bife de Atum","Tuna Steak","Bistec de Atún","Steak de Thon","Thunfisch Steak","Bistecca di Tonno","Tonijnsteak","Stek z Tuńczyka","Биф из Тунца","Tunfisk Biff","Tunfisk Bif","Tonnikalapahvi"),
      desc:  { pt: "Lombo de atum local grelhado com molho de cebola e tomate.", en: "Local tuna loin grilled with onion and tomato sauce.", es: "Lomo de atún local a la plancha con salsa de cebolla y tomate.", fr: "Longe de thon local grillée avec sauce oignon et tomate." },
      price: "€ 13,75", tag: "mar",
    },
    {
      emoji: "🦑",
      name: n("Lulas e Gambas","Squid & Shrimps","Calamares y Gambas","Calamars et Crevettes","Tintenfisch und Garnelen","Calamari e Gamberetti","Inktvis en Grote Garnalen","Kalmary i Duże Krewetki","Кальмары и Креветки","Blekksprut og Store Reker","Blæksprutter og Store Rejer","Kalmaria ja Suuria Katkarapuja"),
      desc:  { pt: "Lulas e gambas salteadas em azeite, alho e piri-piri.", en: "Squid and Shrimps sautéed in olive oil, garlic and piri-piri.", es: "Calamares y gambas salteados en aceite de oliva, ajo y piri-piri.", fr: "Calamars et crevettes sautés à l'huile d'olive, ail et piri-piri." },
      price: "€ 15,10", tag: "mar",
    },
    {
      emoji: "🐠",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bacalhau_a_lagareiro.jpg/400px-Bacalhau_a_lagareiro.jpg",
      name: n("Bacalhau à Lagareiro","Codfish à Lagareiro","Bacalao a la Lagareiro","Morue à la Lagareiro","Kabeljau à Lagareiro","Baccalà à Lagareiro","Stokvisch à Lagareiro","Dorsz à Lagareiro","Бакалья à Lagareiro","Klippfisk à Lagareiro","Klipfisk à Lagareiro","Turska à Lagareiro"),
      desc:  { pt: "Lombo de bacalhau assado no forno com batata murro, azeite virgem extra e alho.", en: "Baked cod loin with crushed potatoes, extra virgin olive oil and garlic.", es: "Lomo de bacalao asado al horno con patatas aplastadas, aceite de oliva virgen extra y ajo.", fr: "Dos de morue rôti au four avec pommes de terre écrasées, huile d'olive extra vierge et ail." },
      price: "€ 20,95", tag: "popular",
    },
    {
      emoji: "🐙",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Polvo_a_lagareiro.jpg/400px-Polvo_a_lagareiro.jpg",
      name: n("Polvo à Lagareiro","Octopus à Lagareiro","Pulpo a la Lagareiro","Poulpe à la Lagareiro","Tintenfisch à Lagareiro","Polpo à Lagareiro","Octopus à Lagareiro","Ośmiornica à Lagareiro","Осьминог à Lagareiro","Blekksprut à Lagareiro","Blæksprutte à Lagareiro","Mustekala à Lagareiro"),
      desc:  { pt: "Tentáculos de polvo assados com batata murro, azeite de qualidade e salsa.", en: "Octopus tentacles roasted with crushed potatoes, quality olive oil and parsley.", es: "Tentáculos de pulpo asados con patatas aplastadas, aceite de calidad y perejil.", fr: "Tentacules de poulpe rôtis avec pommes de terre écrasées, huile d'olive et persil." },
      price: "€ 18,75", tag: "mar",
    },
    {
      emoji: "🍢",
      name: n("Espetada Mista de Peixe","Mixed Fish Skewer","Brocheta Mixta de Pescado","Brochette Mixte de Poisson","Gemischter Fischspieß","Spiedino Misto di Pesce","Gemengde Vissspiesen","Mieszany Szaszłyk Rybny","Смешанный Шашлык из Рыбы","Blandet Fiskespyd","Blandet Fiskespyd","Sekoitettu Kala-annos Spietissä"),
      desc:  { pt: "Espetada de peixe misto grelhada no carvão com legumes da época.", en: "Mixed fish skewer grilled over coals with seasonal vegetables.", es: "Brocheta de pescado mixto a la brasa con verduras de temporada.", fr: "Brochette de poisson mixte grillée au charbon avec légumes de saison." },
      price: "€ 18,95", tag: "popular",
    },
    {
      emoji: "🦐",
      name: n("Gambas Tigre","Tiger Prawns","Gambas Tigre","Crevettes Tigre","Tigergarnelen","Gamberi Tiger","Tijgergarnalen","Krewetki Tygrysie","Тигровые Креветки","Tigerreker","Tigerrejer","Tiikerikatkaravut"),
      desc:  { pt: "Gambas tigre grelhadas na brasa com manteiga de alho e coentros.", en: "Tiger Prawns grilled over coals with garlic butter and coriander.", es: "Gambas tigre a la brasa con mantequilla de ajo y cilantro.", fr: "Crevettes tigre grillées au charbon avec beurre à l'ail et coriandre." },
      price: "€ 19,95", tag: "mar",
    },
    {
      emoji: "🦐",
      name: n("Gambas à \"Velhinho\"","Prawns \"Velhinho\" Style","Gambas al Estilo \"Velhinho\"","Crevettes à la \"Velhinho\"","Garnelen nach \"Velhinho\" Art","Gamberi alla \"Velhinho\"","Garnalen op \"Velhinho\" Wijze","Krewetki w Stylu \"Velhinho\"","Креветки по-\"Вельинью\"","Reker på \"Velhinho\"-Vis","Rejer på \"Velhinho\"-Vis","Katkaravut \"Velhinho\"-Tyyliin"),
      desc:  { pt: "Gambas salteadas no molho especial da casa com bolo do caco.", en: "Prawns sautéed in the house special sauce with bolo do caco.", es: "Gambas salteadas en la salsa especial de la casa con bolo do caco.", fr: "Crevettes sautées en sauce spéciale maison avec bolo do caco." },
      price: "€ 27,50", tag: "popular",
    },
    {
      emoji: "🦐",
      name: n("Gambas Grelhadas","Grilled Prawns","Gambas a la Plancha","Crevettes Grillées","Gegrillte Garnelen","Gamberi alla Griglia","Gegrilde Garnalen","Grillowane Krewetki","Жареные Креветки","Grillede Reker","Grillede Rejer","Grillatut Katkaravut"),
      desc:  { pt: "Gambas grelhadas na brasa com azeite, alho e coentros frescos.", en: "Prawns grilled over coals with olive oil, garlic and fresh coriander.", es: "Gambas a la brasa con aceite de oliva, ajo y cilantro fresco.", fr: "Crevettes grillées au charbon avec huile d'olive, ail et coriandre frais." },
      price: "€ 19,95", tag: "mar",
    },
    {
      emoji: "🐟",
      name: n("Pescado do Dia","Catch of the Day","Pescado del Día","Poisson du Jour","Tagesfisch","Pesce del Giorno","Vis van de Dag","Ryba Dnia","Рыба Дня","Dagens Fisk","Dagens Fisk","Päivän Kala"),
      desc:  { pt: "Peixe fresco do dia preparado conforme a sua preferência. Preço ao kg — pergunte ao seu servidor.", en: "Fresh catch of the day prepared to your preference. Priced per kg — ask your server.", es: "Pescado fresco del día preparado según su preferencia. Precio al kg — consulte con su servidor.", fr: "Poisson frais du jour préparé selon vos préférences. Prix au kg — demandez à votre serveur." },
      price: "€ 40,00 / kg", tag: "tipico",
    },
  ],

  /* ---- CARNES ---- */
  carnes: [
    {
      emoji: "🥩",
      name: n("Bife à \"Velhinho\"","\"O Velhinho\" Steak","Filete a la \"Velhinho\"","Bifteck \"O Velhinho\"","Rindersteak nach \"Velhinho\" Art","Bistecca alla \"Velhinho\"","Bief op \"Velhinho\" Stijl","Stek \"Velhinho\"","Стейк «Вельинью»","Biff fra \"Velhinho\"","Biff fra \"Velhinho\"","Pihvi \"Velhinho\"-Tyyliin"),
      desc:  { pt: "Bife grelhado com molho especial da casa. A especialidade do chef.", en: "Grilled steak with the house special sauce. The chef's speciality.", es: "Filete a la plancha con salsa especial de la casa. La especialidad del chef.", fr: "Bifteck grillé avec sauce spéciale maison. La spécialité du chef." },
      price: "€ 18,95", tag: "popular",
    },
    {
      emoji: "🍄",
      name: n("Bife c/ Cogumelos","Steak with Mushrooms","Filete con Champiñones","Bifteck aux Champignons","Steak mit Pilzen","Bistecca con Funghi","Biefstuk met Paddenstoelen","Stek z Pieczarkami","Стейк с Грибами","Biff med Sopp","Biff med Champignoner","Pihvi Sienillä"),
      desc:  { pt: "Bife grelhado com molho de cogumelos salteados e ervas aromáticas.", en: "Grilled steak with sautéed mushroom sauce and aromatic herbs.", es: "Filete a la plancha con salsa de champiñones salteados y hierbas.", fr: "Bifteck grillé avec sauce aux champignons sautés et herbes aromatiques." },
      price: "€ 18,95", tag: "popular",
    },
    {
      emoji: "🥩",
      name: n("Bife do Lombo Grelhado","Grilled Sirloin Steak","Solomillo a la Plancha","Faux-filet Grillé","Gegrilltes Rinderfilet","Filetto di Manzo alla Griglia","Gegrild Runderhaas","Stek Wołowy na Grillu","Стейк Говядины на Гриле","Grillet Oksefilet","Grillet Oksekotelet","Grillattu Naudan Sisäfilee"),
      desc:  { pt: "Lombo de novilho grelhado na chapa com azeite e ervas. Servido com batata frita e salada.", en: "Grilled veal sirloin with olive oil and herbs. Served with fries and salad.", es: "Solomillo de ternera a la plancha con aceite y hierbas. Con patatas fritas y ensalada.", fr: "Faux-filet de veau grillé avec huile d'olive et herbes. Servi avec frites et salade." },
      price: "€ 18,00", tag: "popular",
    },
    {
      emoji: "🌶️",
      name: n("Bife de Filé c/ Molho de Pimenta","Fillet Steak with Pepper Sauce","Filete con Salsa de Pimienta","Filet Mignon Sauce Poivre","Filetbiff mit Pfeffersauce","Filetto di Manzo con Salsa al Pepe","Filetsteak met Pepersaus","Stek z Filetu z Sosem Pieprzowym","Стейк из Говядины с Острым Соусом","Filetbiff med Peppersaus","Filet Biff med Pebersovs","Fileepihvi Pippurikastikkeella"),
      desc:  { pt: "Filé de novilho grelhado com molho de pimenta preta e natas.", en: "Grilled veal fillet with black pepper and cream sauce.", es: "Solomillo de ternera a la plancha con salsa de pimienta negra y nata.", fr: "Filet de veau grillé avec sauce poivre noir et crème." },
      price: "€ 23,00", tag: "tipico",
    },
    {
      emoji: "🍢",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Espetada%2CBoaventura-Sao_Jorge_-_panoramio.jpg/400px-Espetada%2CBoaventura-Sao_Jorge_-_panoramio.jpg",
      name: n("Espetada Regional","Regional Espetada","Pincho de Carne Regional","Espetada Régionale","Rindfleisch am Spieß Regionale Art","Manzo allo Spiedo Regionale","Regionale Espetada","Regionalny Szaszłyk Wołowy","Шашлык из Говядины Регональный","Oksekjøtt på Spyd Regional","Oksekød på Spyd Regional","Alueellinen Naudanlihasätikkä"),
      desc:  { pt: "Carne de vaca em pau de loureiro, marinada em sal grosso, alho e louro. Servida com bolo do caco.", en: "Beef on a laurel stick, marinated in coarse salt, garlic and bay leaf. Served with bolo do caco.", es: "Ternera en palo de laurel, marinada en sal gruesa, ajo y laurel. Con bolo do caco.", fr: "Bœuf sur bâton de laurier, mariné en gros sel, ail et laurier. Servi avec bolo do caco." },
      price: "€ 14,75", tag: "tipico",
    },
    {
      emoji: "🐖",
      name: n("Medalhões de Porco c/ Molho de Cogumelos ou Pimenta","Pork Medallions with Mushroom or Pepper Sauce","Medallones de Cerdo con Salsa de Champiñones o Pimienta","Médaillons de Porc Sauce Champignons ou Poivre","Schweinemedaillons mit Pilzsauce oder Pfeffer","Medaglioni di Maiale con Salsa ai Funghi o Pepe","Varkensmedaillons met Paddestoelen- of Pepersaus","Medaliony Wieprzowe z Sosem Grzybowym lub Pieprzowym","Медальоны Свинины с Грибным Соусом или Перцем","Svinemedaljong med Soppsaus eller Pepper","Svinemedaljoner med Champignonsovs eller Peber","Porsaan Medaljongit Sienti- tai Pippurikastikkeella"),
      desc:  { pt: "Medalhões de lombo de porco grelhados com molho de cogumelos ou molho de pimenta.", en: "Grilled pork loin medallions with mushroom sauce or pepper sauce.", es: "Medallones de lomo de cerdo a la plancha con salsa de champiñones o salsa de pimienta.", fr: "Médaillons de longe de porc grillés, sauce champignons ou sauce poivre." },
      price: "€ 14,50", tag: "popular",
    },
    {
      emoji: "🍗",
      name: n("Peito de Frango Grelhado c/ Molho de Cogumelos ou Pimenta","Grilled Chicken Breast with Mushroom or Pepper Sauce","Pechuga de Pollo con Salsa de Champiñones o Pimienta","Blanc de Poulet Grillé Sauce Champignons ou Poivre","Gegrillte Hähnchenbrust mit Pilzsauce oder Pfeffer","Petto di Pollo alla Griglia con Salsa ai Funghi o Pepe","Gegrilde Kipfilet met Paddestoelen- of Pepersaus","Filet z Kurczaka na Grillu z Sosem Grzybowym lub Pieprzowym","Куриная Грудка на Гриле с Грибным Соусом или Перцем","Grillet Kyllingbryst med Soppsaus eller Peppersaus","Grillet Kyllingebryst med Champignonsovs eller Peber","Grillattu Kananrinta Sienti- tai Pippurikastikkeella"),
      desc:  { pt: "Peito de frango grelhado na chapa com molho de cogumelos ou pimenta. Servido com arroz e salada.", en: "Grilled chicken breast with mushroom or pepper sauce. Served with rice and salad.", es: "Pechuga de pollo a la plancha con salsa de champiñones o pimienta. Con arroz y ensalada.", fr: "Blanc de poulet grillé avec sauce champignons ou poivre. Servi avec riz et salade." },
      price: "€ 11,95", tag: "popular",
    },
    {
      emoji: "🍗",
      name: n("Espetada de Frango com Laranja","Chicken Skewer with Orange","Pincho de Pollo a la Naranja","Brochette de Poulet à l'Orange","Hähnchenspieß mit Orange","Spiedino di Pollo all'Arancia","Kipspies met Sinaasappel","Szaszłyk z Kurczaka z Pomarańczą","Куриный Шашлык с Апельсином","Grillet Kyllingspyd med Appelsin","Grillet Kyllingespyd med Appelsin","Kana-Appelsiinivarras"),
      desc:  { pt: "Espetada de frango marinado em laranja e ervas, grelhada na brasa.", en: "Chicken skewer marinated in orange and herbs, grilled over coals.", es: "Brocheta de pollo marinado en naranja y hierbas, a la brasa.", fr: "Brochette de poulet mariné à l'orange et aux herbes, grillée au charbon." },
      price: "€ 13,50", tag: "regional",
    },
    {
      emoji: "🥩",
      name: n("Costeleta de Vaca Grelhada","Grilled Beef Chop","Chuleta de Vaca a la Brasa","Côte de Bœuf Grillée","Gegrilltes Rinderkotelett","Costoletta di Manzo alla Griglia","Gegrild Runderkotelet","Grillowany Kotlet Wołowy","Жареная Говядина на Гриле","Grillet Oksekotelett","Grillet Oksekotelet","Grillattu Naudan Kyljys"),
      desc:  { pt: "Costeleta de vaca grelhada na chapa com sal grosso, alho e azeite.", en: "Grilled beef chop with coarse salt, garlic and olive oil.", es: "Chuleta de vaca a la plancha con sal gruesa, ajo y aceite de oliva.", fr: "Côte de bœuf grillée avec gros sel, ail et huile d'olive." },
      price: "€ 24,00", tag: "tipico",
    },
    {
      emoji: "🍖",
      name: n("Costeleta de Borrego c/ Molho de Menta","Lamb Chop with Mint Sauce","Chuleta de Cordero con Salsa de Menta","Côtelette d'Agneau Sauce Menthe","Lammkotelett mit Minzsauce","Costoletta d'Agnello con Salsa alla Menta","Lamskotelet met Muntssaus","Kotlet Jagnięcy z Sosem Miętowym","Отбивная из Баранины с Мятным Соусом","Lammekotelett med Myntsaus","Lammekotelet med Myntsovs","Karitsan Kyljys Minttukasstikkeella"),
      desc:  { pt: "Costeleta de borrego grelhada com molho de menta fresca.", en: "Grilled lamb chop with fresh mint sauce.", es: "Chuleta de cordero a la plancha con salsa de menta fresca.", fr: "Côtelette d'agneau grillée avec sauce à la menthe fraîche." },
      price: "€ 19,50", tag: "popular",
    },
    {
      emoji: "🐖",
      name: n("Costeleta de Porco Grelhada","Grilled Pork Chop","Chuleta de Cerdo a la Brasa","Côtelette de Porc Grillée","Gegrilltes Schweinekotelett","Costoletta di Maiale alla Griglia","Gegrild Varskenskotelet","Grillowany Kotlet Wieprzowy","Жареная Отбивная из Свинины","Grillet Sveinekotelett","Grillet Svinekotelet","Grillattu Porsaan Kyljys"),
      desc:  { pt: "Costeleta de porco grelhada na brasa com azeite, alho e ervas.", en: "Grilled pork chop with olive oil, garlic and herbs.", es: "Chuleta de cerdo a la brasa con aceite de oliva, ajo y hierbas.", fr: "Côtelette de porc grillée au charbon avec huile d'olive, ail et herbes." },
      price: "€ 14,50", tag: "popular",
    },
  ],

  /* ---- MENU ESPECIAL ---- */
  especial: [
    {
      price: "€ 19,75",
      label_or: { pt: "ou", en: "or", es: "o", fr: "ou", de: "oder", it: "o", nl: "of", pl: "lub", ru: "или", no: "eller", da: "eller", fi: "tai" },
      courses: [
        {
          label: { pt: "1º Prato", en: "1st Course", es: "1er Plato", fr: "1er Plat", de: "1. Gang", it: "1° Piatto", nl: "1e Gang", pl: "1. Danie", ru: "1-е Блюдо", no: "1. Rett", da: "1. Ret", fi: "1. Ruokalaji" },
          options: {
            pt: ["Sopa de Tomate", "Salada de Atum"],
            en: ["Tomato Soup",    "Tuna Salad"],
            es: ["Sopa de Tomate", "Ensalada de Atún"],
            fr: ["Soupe de Tomate","Salade de Thon"],
            de: ["Tomatensuppe",   "Thunfischsalat"],
            it: ["Zuppa di Pomodoro", "Insalata di Tonno"],
            nl: ["Tomatensoep",    "Tonijnsalade"],
            pl: ["Zupa Pomidorowa","Sałatka z Tuńczykiem"],
            ru: ["Томатный Суп",   "Салат из Тунца"],
            no: ["Tomatssuppe",    "Tunfisksalat"],
            da: ["Tomatssuppe",    "Tunfisksalat"],
            fi: ["Tomaattikeitto", "Tonnikalasalaatti"],
          },
        },
        {
          label: { pt: "Prato Principal", en: "Main Course", es: "Plato Principal", fr: "Plat Principal", de: "Hauptgericht", it: "Piatto Principale", nl: "Hoofdgerecht", pl: "Danie Główne", ru: "Основное Блюдо", no: "Hovedrett", da: "Hovedret", fi: "Pääruoka" },
          options: {
            pt: ["Bife de Atum", "Filete de Espada c/ Molho de Maracujá", "Espetada Regional", "Frango Grelhado"],
            en: ["Tuna Steak",   "Scabbardfish Fillet with Passion Fruit Sauce", "Regional Espetada", "Grilled Chicken"],
            es: ["Bistec de Atún","Filete de Espada con Maracuyá", "Pincho de Carne Regional", "Pollo Asado"],
            fr: ["Steak de Thon", "Filet de Poisson-Sabre Sauce Fruit de la Passion", "Espetada Régionale", "Poulet Grillé"],
            de: ["Thunfisch Steak","Schwarzer Degenfisch Filet mit Passionsfrucht", "Rindfleisch am Spieß Regional", "Gegrilltes Hähnchen"],
            it: ["Bistecca di Tonno","Filetto di Pesce Spada con Frutto della Passione", "Manzo allo Spiedo Regionale", "Pollo alla Griglia"],
            nl: ["Tonijnsteak",   "Visfilet 'Espada' met Passievrucht", "Regionale Espetada", "Gegrilde Kip"],
            pl: ["Stek z Tuńczyka","Filet z Pałasza Czarnego z Marakują", "Regionalny Szaszłyk Wołowy", "Grillowany Kurczak"],
            ru: ["Биф из Тунца",  "Филе Рыбы «Меч» с Маракуйей", "Шашлык Говядины Региональный", "Цыплёнок на Гриле"],
            no: ["Tunfisk Biff",  "'Espada' Fiskfilet med Pasjonsfrukt", "Oksekjøtt på Spyd Regional", "Grillet Kylling"],
            da: ["Tunfisk Bif",   "'Espada' Fiskfilet med Passionsfrugt", "Oksekød på Spyd Regional", "Grillet Kylling"],
            fi: ["Tonnikalapahvi","'Espada' Kalafilee Passiohedelmällä", "Alueellinen Naudanlihasätikkä", "Grillattua Kanaa"],
          },
        },
        {
          label: { pt: "", en: "", es: "", fr: "", de: "", it: "", nl: "", pl: "", ru: "", no: "", da: "", fi: "" },
          options: {
            pt: ["Pão com Manteiga de Alho"],
            en: ["Garlic Bread"],
            es: ["Pan con Mantequilla de Ajo"],
            fr: ["Pain à l'Ail"],
            de: ["Knoblauchbrot"],
            it: ["Pane con Burro e Aglio"],
            nl: ["Knoflookbrood"],
            pl: ["Chleb Czosnkowy"],
            ru: ["Хлеб с Чесноком"],
            no: ["Hvitløksbrød"],
            da: ["Hvidløgsbrød"],
            fi: ["Valkosipulileipä"],
          },
        },
        {
          label: { pt: "", en: "", es: "", fr: "", de: "", it: "", nl: "", pl: "", ru: "", no: "", da: "", fi: "" },
          options: {
            pt: ["Sobremesa"],
            en: ["Dessert"],
            es: ["Postre"],
            fr: ["Dessert"],
            de: ["Nachspeise"],
            it: ["Dolce"],
            nl: ["Nagerecht"],
            pl: ["Deser"],
            ru: ["Десерт"],
            no: ["Dessert"],
            da: ["Dessert"],
            fi: ["Jälkiruoka"],
          },
        },
        {
          label: { pt: "", en: "", es: "", fr: "", de: "", it: "", nl: "", pl: "", ru: "", no: "", da: "", fi: "" },
          options: {
            pt: ["Café"],
            en: ["Coffee"],
            es: ["Café"],
            fr: ["Café"],
            de: ["Kaffee"],
            it: ["Caffè"],
            nl: ["Koffie"],
            pl: ["Kawa"],
            ru: ["Кофе"],
            no: ["Kaffe"],
            da: ["Kaffe"],
            fi: ["Kahvi"],
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

const categoryOrder = [
  'entradas_frias','entradas_quentes','saladas','sopas','omelets',
  'vegetariano','massas','risotos','peixes','carnes','especial'
];

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
  const activeBtn = btn || document.querySelector(`.nav-btn[data-category="${category}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    const nav = activeBtn.closest('.category-nav');
    if (nav) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      nav.scrollLeft += btnRect.left - navRect.left - navRect.width / 2 + btnRect.width / 2;
    }
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

    card.innerHTML = `
      <div class="card-left">
        <span class="card-bullet">·</span>
        <div class="card-body">
          <h3 class="card-name">${item.name[currentLang] || item.name['en']}</h3>
        </div>
      </div>
      <div class="card-right">
        <span class="card-price">${item.price}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* =============================
   INIT
   ============================= */
document.addEventListener('DOMContentLoaded', () => {
  /* ---- Swipe navigation ---- */
  let touchStartX = null;
  document.getElementById('menu-screen').addEventListener('touchstart', e => {
    if (e.target.closest('.category-nav')) { touchStartX = null; return; }
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.getElementById('menu-screen').addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 50) return;
    const idx = categoryOrder.indexOf(currentCategory);
    if (dx < 0 && idx < categoryOrder.length - 1) {
      showCategory(categoryOrder[idx + 1], null);
    } else if (dx > 0 && idx > 0) {
      showCategory(categoryOrder[idx - 1], null);
    }
  }, { passive: true });
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
