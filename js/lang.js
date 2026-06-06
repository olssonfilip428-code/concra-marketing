// ── Language toggle ──────────────────────────────────────────
// Supports 'sv' (default) and 'en'.
// Data-i18n attributes use textContent; data-i18n-html uses innerHTML.

const translations = {
  sv: {
    // Nav
    nav_produkt: 'Produkt',
    nav_priser: 'Priser',
    nav_kontakt: 'Kontakt',
    nav_cta: 'Boka demo',
    mob_produkt: 'Produkt',
    mob_priser: 'Priser',
    mob_kontakt: 'Kontakt',
    mob_cta: 'Boka demo',

    // Hero
    hero_tagline: 'Betongbranschen i realtid',
    hero_sub: 'Kunden ser bilen på kartan. Fakturan skapar sig själv. Du slipper ringa runt — och missar aldrig en leverans igen.',
    hero_btn_primary: 'Boka demo',
    hero_btn_ghost: 'Se hur det funkar',
    hero_scroll: 'Scrolla',
    ticker_initial: 'Leverans aktiv',

    // Problem
    problem_label: 'Det händer varje dag',
    problem_headline: 'Kunden ringer.<br>\n    <span class="dim">Ingen vet svaret.</span><br>\n    Fakturan stämmer fortfarande inte.',
    prob1_h3: 'Ingen vet var bilen är',
    prob1_p: 'Disponenten gissar. Kunden ringer. Bilen är på väg men ingen kan bekräfta det — för ingen har systemet för att se det i realtid.',
    prob2_h3: 'Manuella processer kostar mer än ni tror',
    prob2_p: 'Lassedlar förs in manuellt. Fakturor skickas fel eller försent. Tid slösas bort på administration som ett modernt system hanterar helt automatiskt — varje dag, varje leverans.',
    prob3_h3: 'Kunden får inget besked',
    prob3_p: 'Ingen notifiering. Inget SMS. Kunden ringer för att de inte vet. Du svarar för att du inte har något bättre alternativ. Varje gång.',

    // Story stepper labels
    step0_label: 'Order skapad',
    step1_label: 'Avgång',
    step2_label: 'Live-ETA',
    step3_label: 'Framme',
    step4_label: 'Faktura',

    // Story side (Varför Concra)
    story_side_label: 'Varför Concra',
    sp1_h4: 'Realtid hela vägen',
    sp1_p: 'Kunden ser bilen live på kartan. Inga samtal om "när kommer ni" — svaret finns alltid på skärmen.',
    sp2_h4: 'Fakturan skapar sig själv',
    sp2_p: 'Ordern avslutas — Fortnox uppdateras automatiskt. Korrekt, direkt, utan ett knapptryck.',
    sp3_h4: 'Kunden notifieras automatiskt',
    sp3_p: 'SMS skickas vid avgång och ankomst. Ni slipper ringa — kunden vet redan.',
    sp4_h4: 'Noll bindningstid',
    sp4_p: 'Betala per leverans. Inga setup-kostnader. Avsluta när ni vill.',

    // Story cards
    sc0_badge: 'Order skapad · 06:42',
    sc0_vol: 'Volym',
    sc0_qual: 'Kvalitet',
    sc0_addr: 'Adress',
    sc0_contact: 'Kontakt',
    sc0_status: 'Bekräftad av dispatchern',
    sc1_badge: 'Avgång · 07:14',
    sc1_title: 'SMS skickat automatiskt',
    sc1_sms: 'Hej Markus! Er betong är på väg från Mölndal. Estimerad ankomst: <strong>07:51</strong>. Spåra live: concra.se/t/A4K2',
    sc1_meta: 'Skickat av Concra · Fordon CG 847',
    sc2_badge: 'Live-spårning · 07:29',
    sc2_title: 'ETA uppdateras i realtid',
    sc2_speed: 'Hastighet',
    sc2_remaining: 'Kvar',
    sc3_badge: 'Framme · 07:48',
    sc3_title: 'Lossning påbörjad',
    sc3_confirm: 'Chauffören bekräftade ankomst',
    sc3_wait: 'Väntetid',
    sc3_chute: 'Hydraulränna',
    sc3_chute_val: 'Nej',
    sc3_status: 'Lossning pågår',
    sc4_badge: 'Faktura · 08:22',
    sc4_title: 'Skickad till Fortnox',
    sc4_item1: 'Betong C30/37 XC2 · 8 m³',
    sc4_item2: 'Frakt · 37 km',
    sc4_total: 'Totalt ex. moms',
    sc4_status: 'Bokförd i Fortnox automatiskt',

    // Stats
    stats_label: 'Skalbart från dag ett',
    stats_headline: '<strong>Betongbilar. Projekt. Leveranser.</strong><br>\n    Allt i ett system — betala per leverans.',
    stat1_number: '0<br>Bindningstid',
    stat2_number: '3<br>Bokföringssystem',
    stat1_label: 'Månadsvis. Avsluta när ni vill.',
    stat2_label: 'Fortnox · Visma · Kleer',
    stat3_label: 'Automatisk fakturasynk',

    // CTA
    cta_label: 'Redo att börja?',
    cta_headline: 'Era konkurrenter<br>väntar fortfarande.',
    cta_sub: 'Boka en 30-minuters demo. Vi visar hela systemet live — inga säljargument, bara produkten. Låg ingångskostnad, ingen bindningstid.',
    cta_placeholder: 'Din e-postadress',
    cta_btn: 'Boka demo',
    cta_note: 'Inga bindningar. Vi hör av oss inom 24 timmar.',

    // Footer
    footer_produkt: 'Produkt',
    footer_kalkylator: 'Kalkylator',
    footer_betongklasser: 'Betongklasser',
    footer_kontakt: 'Kontakt',

    // produkt.html
    prod_tag: 'Allt du behöver — inget du inte behöver',
    prod_h1: 'Byggd för<br><em>betong.</em><br>Inte för allt.',
    prod_sub: 'Concra löser de tre problemen som kostar betongföretag mest: tid, pengar och kundupplevelse.',
    feat1_num: '01 — Spårning', feat1_h: 'Vet var varje bil är. Nu.',
    feat1_p: 'Live-karta med alla fordon, uppdaterad i realtid. Kunden ser sin leverans röra sig mot platsen. Du ser flottan — alltid.',
    feat1_li1: 'GPS i realtid', feat1_li2: 'Automatisk ETA beräknad på rutten',
    feat1_li3: 'Historik per leverans och fordon', feat1_li4: 'Dedikerad 10" pekskärm i varje bil — alltid online, alltid på',
    feat2_num: '02 — Fakturering', feat2_h: 'Fakturan skrivs när bilen lämnar.',
    feat2_p: 'Leveransdata omvandlas automatiskt till en korrekt faktura i ert bokföringssystem. Inga manuella justeringar, inga glömda debiteringar.',
    feat2_li1: 'Direktintegration med Fortnox, Visma och Kleer', feat2_li2: 'Automatisk prissättning per zon och kund',
    feat2_li3: 'CO₂-rapportering ingår', feat2_li4: 'PDF-leveransspecifikation per order',
    feat3_num: '03 — Chaufför', feat3_h: 'Chauffören kör. Systemet sköter resten.',
    feat3_p: 'Leveransdetaljer, navigation och statusuppdateringar i ett flöde. Varje steg loggas i realtid — kunden informeras automatiskt längs vägen.',
    feat3_li1: 'Leveransadress, kontakt och betonggiva direkt vid start',
    feat3_li2: 'Inbyggd navigation mot leveransplatsen',
    feat3_li3: 'Statusflöde: Lastar → På väg → Framme → Lossar → Klar',
    feat3_li4: 'Väntetid registreras automatiskt — inga manuella anteckningar',
    feat3_li5: 'SMS till kunden skickas i rätt steg utan att chauffören gör något',
    feat4_num: '04 — Analys', feat4_h: 'Siffror du faktiskt fattar beslut på.',
    feat4_p: 'Månadsrapporter, leveranshistorik och CO₂-data genereras automatiskt. Exportera till Excel eller låt Concra skicka dem direkt.',
    feat4_li1: 'Automatisk månadsrapport per organisation', feat4_li2: 'CO₂-rapport per projekt och kund',
    feat4_li3: 'CSV-export för Excel med ett klick', feat4_li4: 'Automatiska insikter och beslutsstöd',
    hiw_tag: 'Så fungerar det', hiw_h: 'Igång på en dag. Inte en vecka.',
    step1_h: 'Anslut', step1_p: 'Koppla ihop Concra med ert bokföringssystem och lägg in era fordon. Det tar 30 minuter.',
    step2_h: 'Konfigurera', step2_p: 'Sätt priszoner, artiklar och SMS-mallar. Allt anpassas efter hur ni jobbar — inte tvärtom.',
    step3_h: 'Kör', step3_p: 'Chauffören öppnar appen. Kunden får SMS. Fakturan skapas. Ni ser allt på kartan i realtid.',
    step4_h: 'Optimera', step4_p: 'Månatliga insikter hjälper er hitta ineffektivitet och förbättra lönsamhet per rutt och kund.',
    prod_cta_tag: 'Redo att testa?', prod_cta_h: 'Se det live.', prod_cta_prices: 'Se priser',

    // priser.html
    pris_hero_tag: 'Kom igång',
    pris_hero_h: 'Betala per lass.<br><em>Inte per licens.</em>',
    pris_hero_p: 'Concras modell är byggd för att ge mindre betongföretag samma digitala förutsättningar som de stora. Inga fasta kostnader — ni betalar för varje levererat lass och ingenting annat.',
    pris_stat1_val: 'Engångskostnad', pris_stat1_lbl: 'Hårdvara per bil',
    pris_stat2_val: '1 dag', pris_stat2_lbl: 'Tid till igång',
    pris_stat3_lbl: 'Månaders bindning',
    pris_inc_tag: 'Vad ingår', pris_inc_h: 'Hela plattformen.<br>Från dag ett.',
    inc1: 'GPS-spårning i realtid', inc2: 'Automatisk fakturering via ditt bokföringssystem',
    inc3: 'Spårningslänk till kund via SMS när bilen lämnar fabriken',
    inc4: 'CO₂-data per leverans (Boverket-standard)', inc5: 'Dedikerat chaufförsgränssnitt med navigation',
    inc6: 'Automatiska månadsinsikter och beslutsstöd', inc7: 'Väder- och gjutdokumentation', inc8: 'CSV-export och kredithantering',
    hw_tag: 'Hårdvara', hw_h: 'En box.<br>Per bil. En gång.',
    hw_p1: 'Concra-terminalen är en kompakt industrienhet som monteras i varje bil. Den kopplar upp sig mot mobilnätet, loggar position och status i realtid, och synkar automatiskt med plattformen. Inga SIM-kort att hantera, inga appar att installera.',
    hw_p2: 'Vi hanterar installation och driftsättning på plats. Ni behöver inte göra något tekniskt — vi ser till att allt fungerar innan vi lämnar.',
    hw1_title: 'GPS + 4G inbyggt', hw1_desc: 'Realtidsposition utan externa donglar. Täckning via det svenska mobilnätet.',
    hw2_title: 'Strömförsörjning via bilen', hw2_desc: 'Kopplas till bilens elsystem. Inbyggt batteri hanterar kortare strömavbrott.',
    hw3_title: 'Chaufförsskärm ingår', hw3_desc: 'Chauffören ser order, navigering och status direkt på skärmen. Ingen telefon behövs.',
    hw4_title: 'OTA-uppdateringar', hw4_desc: 'Ny funktionalitet rullas ut automatiskt. Ni behöver aldrig uppdatera något manuellt.',
    gdpr_text: 'All data hanteras i enlighet med GDPR. Personuppgifter lagras inom EU och raderas på begäran. Ni äger er leveransdata — alltid.',
    calc_tag: 'Räkneexempel', calc_h: 'Vad det kostar<br><em style="color:rgba(255,255,255,.18);font-style:normal">i praktiken.</em>',
    calc_s1: 'Litet bolag', calc_s2: 'Medelstort bolag', calc_s3: 'Växande aktör',
    calc_trucks: 'Bilar', calc_loads_day: 'Lass / dag', calc_days_month: 'Dagar / månad', calc_loads_month: 'Lass / månad',
    calc_monthly: 'Månadskostnad',
    calc_note: 'Exakt pris per lass sätts tillsammans med er baserat på volym och upplägg — vi diskuterar det under demo-samtalet.',
    pris_cta_tag: 'Nästa steg', pris_cta_h: 'Prata<br>med oss.',
    pris_cta_p: '30 minuter. Vi visar systemet live och berättar allt om prissättningen. Inga dolda avgifter, inga obehagliga överraskningar.',
    pris_cta_prod: 'Se produkten',

    // kontakt.html
    kon_tag: 'Prata med oss',
    kon_h1: 'Låt oss<br>visa<br><em>Concra.</em>',
    kon_p: 'En 30-minuters demo räcker. Vi visar systemet live, svarar på alla frågor och ger er en realistisk bild av hur snabbt ni kan komma igång.',
    kon_email_lbl: 'E-post', kon_reply_lbl: 'Svarstid', kon_reply_val: 'Inom 24h',
    kon_demo_lbl: 'Demo', kon_demo_val: '30 minuter via video — ni ser systemet live',
    kon_cp1: 'Demo-längd', kon_cp2: 'Till igång', kon_cp3: 'Månaders bindning', kon_cp4: 'Utan bindning (3 mån)',
    kon_form_tag: 'Boka demo / kontakt', kon_form_h: 'Kom igång<br>idag.',
    kon_intent_lbl: 'Jag vill', kon_opt_demo: 'Boka en demo', kon_opt_info: 'Ställ en fråga',
    kon_lbl_name: 'Namn', kon_lbl_company: 'Företag', kon_ph_company: 'Ditt företag',
    kon_lbl_email: 'E-post', kon_lbl_phone: 'Telefon',
    kon_lbl_vehicles: 'Antal fordon', kon_opt_select: 'Välj antal',
    kon_opt_v1: '1–3 fordon', kon_opt_v2: '4–10 fordon', kon_opt_v3: '11–25 fordon', kon_opt_v4: 'Mer än 25 fordon',
    kon_lbl_msg: 'Meddelande (valfritt)', kon_ph_msg: 'Berätta gärna lite om er verksamhet eller vad ni funderar på...',
    kon_submit: 'Skicka',

    // kalkylator.html
    kal_hero_tag: 'Gratis verktyg',
    kal_hero_h: 'Betong&shy;kalkylator',
    kal_hero_p: 'Räkna ut exakt hur mycket betong du behöver — i m³. Välj konstruktionstyp, mata in måtten och få volymen direkt. Inkluderar spillmarginal och CO₂-estimat.',
    kal_tab_platta: 'Platta', kal_tab_vagg: 'Vägg', kal_tab_peler_fyr: 'Pelare (fyr.)', kal_tab_peler_rund: 'Pelare (rund)', kal_tab_trappa: 'Trappa', kal_tab_fundament: 'Fundament',
    kal_ft_platta: 'Platta', kal_fd_platta: 'Husgrunder, garage, uteplats, industrigolv. Ange mått i meter.',
    kal_ft_vagg: 'Vägg', kal_fd_vagg: 'Källarväggar, stödmurar, källarytterväggar. Ange mått i meter.',
    kal_ft_peler_fyr: 'Pelare — fyrkant', kal_fd_peler_fyr: 'Rektangulära betongpelare, pyloner och fundament. Ange mått i meter.',
    kal_ft_peler_rund: 'Pelare — rund', kal_fd_peler_rund: 'Cirkulära betongpelare, pålar och runda fundament. Ange mått i meter.',
    kal_ft_trappa: 'Trappa', kal_fd_trappa: 'Raka massiva betongtrappor. Volymen beräknas som en triangulär prism — standard för gjutna trappor.',
    kal_ft_fundament: 'Fundament / Sulor', kal_fd_fundament: 'Punktfundament, sulor under väggar och pelare. Ange mått i meter.',
    kal_lbl_laengd: 'Längd (m)', kal_lbl_bredd: 'Bredd (m)', kal_lbl_tjocklek: 'Tjocklek (m)', kal_lbl_hojd: 'Höjd (m)', kal_lbl_djup: 'Djup (m)', kal_lbl_diameter: 'Diameter (m)',
    kal_lbl_antal_peler: 'Antal pelare', kal_lbl_antal_steg: 'Antal steg', kal_lbl_stegdjup: 'Stegdjup (m)', kal_lbl_steghojd: 'Steghöjd (m)', kal_lbl_antal_fund: 'Antal fundament',
    kal_unit_platta: 'Vanligt: husgrund 0,15–0,20 m · industrigolv 0,20–0,30 m',
    kal_unit_vagg: 'Vanligt: källarvägg 0,20–0,30 m · stödmur 0,25–0,40 m',
    kal_unit_prund: 'Radie = diameter / 2',
    kal_unit_trappa_d: 'Standard 0,25–0,30 m', kal_unit_trappa_h: 'Standard 0,15–0,18 m',
    kal_op_platta: 'Dra av öppningar (håltagningar, pelare etc.)', kal_op_vagg: 'Dra av öppningar (dörrar, fönster etc.)',
    kal_add_opening: '+ Lägg till öppning',
    kal_res_label: 'Beräknad volym', kal_rr_exact: 'Exakt volym', kal_rr_spill: 'Med 10% spill', kal_rr_vikt: 'Vikt (ca)',
    kal_res_note: 'Spill på 10% rekommenderas alltid vid beställning. Vikt beräknad på 2 400 kg/m³.',
    kal_res_cta: 'Planerar du ett projekt? Prata med oss →',
    kal_info_tag: 'Bra att veta',
    kal_info1_h: 'Varför 10% spill?', kal_info1_p: 'Betong beställs i hela m³ och gjutformar är sällan perfekt exakta. 5–10% överskott täcker svinn, ojämnheter och rester i lastbil. Hellre lite för mycket än att behöva kompletteringsbeställa.',
    kal_info2_h: 'Öppningar och avdrag', kal_info2_p: 'För plattor och väggar kan du lägga till öppningar direkt i kalkylatorn — dörrar, fönster, håltagningar. Varje öppning dras av automatiskt. För trappor och pelare räknas alltid solid volym.',
    kal_info3_h: 'Vilken betongklass?', kal_info3_p: 'Fel klass kan ge frostskador, sprickor eller underkänd besiktning. Husgrund = C25/30. Garage = C30/37 med luftporbildning. Utomhus = minst C28/35. <a href="/betongklasser" style="color:rgba(255,255,255,.6);text-decoration:underline;text-underline-offset:3px">Se vår guide →</a>',
    kal_cta_tag: 'Logistiksystem för betongfabriker', kal_cta_h: 'Concra hanterar<br>leveransen.', kal_cta_p: 'GPS-spårning, automatisk fakturering och CO₂-rapportering — allt i ett system byggt för betongbranschen.',
    footer_iggang: 'Kom igång',

    // betongklasser.html
    bk_hero_tag: 'Guide', bk_hero_h: 'Vilken betong&shy;klass?',
    bk_hero_p: 'Välj fel klass och du riskerar sprickor, frostskador eller underkänd besiktning. Välj rätt — och betongen håller i generationer. Välj din konstruktion nedan.',
    bk_tool_q: 'Vad ska du gjuta?', bk_tool_sub: 'Klicka på din konstruktionstyp för rekommenderad klass.',
    bk_app_husgrund: 'Husgrund / Platta', bk_app_kallarvag: 'Källarvägg', bk_app_garage: 'Garage / Carport',
    bk_app_utomhusgolv: 'Utomhusterrass / Altan', bk_app_bjalklag: 'Bjälklag', bk_app_industrigolv: 'Industrigolv',
    bk_app_trappa: 'Utomhustrappa', bk_app_stodmur: 'Stödmur', bk_app_pool: 'Pool / Cistern',
    bk_app_pelare: 'Pelare / Balk', bk_app_fundament: 'Fundament / Sula', bk_app_bro: 'Bro / Väg',
    bk_res_tag: 'Rekommenderad klass', bk_res_strength: 'Tryckhållfasthet', bk_res_exp: 'Exponeringsklass', bk_res_vct: 'Max vct',
    bk_ref_tag: 'Referens', bk_ref_h: 'Alla klasser',
    bk_th_klass: 'Klass', bk_th_strength: 'Tryckhållfasthet', bk_th_use: 'Typiska användningsområden', bk_th_exp: 'Exponeringsklass', bk_th_vct: 'Max vct',
    bk_exp_note: 'Exponeringsklass: XC = karbonisering · XF = frost · XD = klorid (ej havs) · XS = havs · XA = kemisk påverkan.<br>vct = vattencementtal. Lägre vct = tätare betong = bättre beständighet. Kontrollera alltid med ansvarig konstruktör.',
    bk_cta_tag: 'Betong i rörelse', bk_cta_h: 'Concra hanterar<br>leveransen.', bk_cta_p: 'GPS-spårning, automatisk fakturering och CO₂-rapportering — ett system byggt för betongfabriker.',
  },

  en: {
    // Nav
    nav_produkt: 'Product',
    nav_priser: 'Pricing',
    nav_kontakt: 'Contact',
    nav_cta: 'Book demo',
    mob_produkt: 'Product',
    mob_priser: 'Pricing',
    mob_kontakt: 'Contact',
    mob_cta: 'Book demo',

    // Hero
    hero_tagline: 'The concrete industry in real time',
    hero_sub: 'The customer sees the truck on the map. Invoices create themselves. No more calling around — never miss a delivery again.',
    hero_btn_primary: 'Book demo',
    hero_btn_ghost: 'See how it works',
    hero_scroll: 'Scroll',
    ticker_initial: 'Delivery active',

    // Problem
    problem_label: 'This happens every day',
    problem_headline: 'The customer calls.<br>\n    <span class="dim">No one knows the answer.</span><br>\n    The invoice is still wrong.',
    prob1_h3: 'No one knows where the truck is',
    prob1_p: 'The dispatcher guesses. The customer calls. The truck is on its way but no one can confirm it — because no one has the system to see it in real time.',
    prob2_h3: 'Manual processes cost more than you think',
    prob2_p: 'Delivery notes are entered manually. Invoices are sent incorrectly or late. Time is wasted on administration that a modern system handles completely automatically — every day, every delivery.',
    prob3_h3: 'The customer gets no update',
    prob3_p: 'No notification. No SMS. The customer calls because they don\'t know. You answer because you have no better option. Every time.',

    // Story stepper labels
    step0_label: 'Order created',
    step1_label: 'Departure',
    step2_label: 'Live ETA',
    step3_label: 'Arrived',
    step4_label: 'Invoice',

    // Story side (Why Concra)
    story_side_label: 'Why Concra',
    sp1_h4: 'Real time all the way',
    sp1_p: 'The customer sees the truck live on the map. No calls about "when are you coming" — the answer is always on the screen.',
    sp2_h4: 'Invoices create themselves',
    sp2_p: 'The order closes — Fortnox updates automatically. Correct, instant, without a single click.',
    sp3_h4: 'Customers notified automatically',
    sp3_p: 'SMS is sent at departure and arrival. No need to call — the customer already knows.',
    sp4_h4: 'Zero lock-in',
    sp4_p: 'Pay per delivery. No setup costs. Cancel anytime.',

    // Story cards
    sc0_badge: 'Order created · 06:42',
    sc0_vol: 'Volume',
    sc0_qual: 'Grade',
    sc0_addr: 'Address',
    sc0_contact: 'Contact',
    sc0_status: 'Confirmed by dispatcher',
    sc1_badge: 'Departure · 07:14',
    sc1_title: 'SMS sent automatically',
    sc1_sms: 'Hi Markus! Your concrete is on its way from Mölndal. Estimated arrival: <strong>07:51</strong>. Track live: concra.se/t/A4K2',
    sc1_meta: 'Sent by Concra · Vehicle CG 847',
    sc2_badge: 'Live tracking · 07:29',
    sc2_title: 'ETA updates in real time',
    sc2_speed: 'Speed',
    sc2_remaining: 'Remaining',
    sc3_badge: 'Arrived · 07:48',
    sc3_title: 'Unloading started',
    sc3_confirm: 'Driver confirmed arrival',
    sc3_wait: 'Wait time',
    sc3_chute: 'Concrete chute',
    sc3_chute_val: 'No',
    sc3_status: 'Unloading in progress',
    sc4_badge: 'Invoice · 08:22',
    sc4_title: 'Sent to Fortnox',
    sc4_item1: 'Concrete C30/37 XC2 · 8 m³',
    sc4_item2: 'Freight · 37 km',
    sc4_total: 'Total excl. VAT',
    sc4_status: 'Booked in Fortnox automatically',

    // Stats
    stats_label: 'Scalable from day one',
    stats_headline: '<strong>Concrete trucks. Projects. Deliveries.</strong><br>\n    All in one system — pay per delivery.',
    stat1_number: '0<br>Lock-in',
    stat2_number: '3<br>Accounting systems',
    stat1_label: 'Monthly. Cancel anytime.',
    stat2_label: 'Fortnox · Visma · Kleer',
    stat3_label: 'Automatic invoice sync',

    // CTA
    cta_label: 'Ready to start?',
    cta_headline: 'Your competitors<br>are still waiting.',
    cta_sub: 'Book a 30-minute demo. We\'ll show you the full system live — no sales pitch, just the product. Low entry cost, no lock-in.',
    cta_placeholder: 'Your email address',
    cta_btn: 'Book demo',
    cta_note: 'No commitments. We\'ll be in touch within 24 hours.',

    // Footer
    footer_produkt: 'Product',
    footer_kalkylator: 'Calculator',
    footer_betongklasser: 'Concrete classes',
    footer_kontakt: 'Contact',

    // produkt.html
    prod_tag: 'Everything you need — nothing you don\'t',
    prod_h1: 'Built for<br><em>concrete.</em><br>Not for everything.',
    prod_sub: 'Concra solves the three problems that cost concrete companies the most: time, money, and customer experience.',
    feat1_num: '01 — Tracking', feat1_h: 'Know where every truck is. Now.',
    feat1_p: 'Live map with all vehicles, updated in real time. The customer sees their delivery moving to the site. You see the fleet — always.',
    feat1_li1: 'GPS in real time', feat1_li2: 'Automatic ETA calculated on route',
    feat1_li3: 'History per delivery and vehicle', feat1_li4: 'Dedicated 10" touchscreen in every truck — always online, always on',
    feat2_num: '02 — Invoicing', feat2_h: 'The invoice is written when the truck leaves.',
    feat2_p: 'Delivery data is automatically converted into a correct invoice in your accounting system. No manual adjustments, no forgotten charges.',
    feat2_li1: 'Direct integration with Fortnox, Visma and Kleer', feat2_li2: 'Automatic pricing per zone and customer',
    feat2_li3: 'CO₂ reporting included', feat2_li4: 'PDF delivery specification per order',
    feat3_num: '03 — Driver', feat3_h: 'The driver drives. The system handles the rest.',
    feat3_p: 'Delivery details, navigation and status updates in one flow. Every step logged in real time — the customer is notified automatically along the way.',
    feat3_li1: 'Delivery address, contact and concrete grade at start',
    feat3_li2: 'Built-in navigation to the delivery site',
    feat3_li3: 'Status flow: Loading → En route → Arrived → Unloading → Done',
    feat3_li4: 'Wait time recorded automatically — no manual notes',
    feat3_li5: 'SMS to customer sent at the right step without the driver doing anything',
    feat4_num: '04 — Analytics', feat4_h: 'Numbers you actually make decisions on.',
    feat4_p: 'Monthly reports, delivery history and CO₂ data generated automatically. Export to Excel or let Concra send them directly.',
    feat4_li1: 'Automatic monthly report per organisation', feat4_li2: 'CO₂ report per project and customer',
    feat4_li3: 'CSV export for Excel with one click', feat4_li4: 'Automatic insights and decision support',
    hiw_tag: 'How it works', hiw_h: 'Up and running in a day. Not a week.',
    step1_h: 'Connect', step1_p: 'Connect Concra to your accounting system and add your vehicles. Takes 30 minutes.',
    step2_h: 'Configure', step2_p: 'Set price zones, items and SMS templates. Everything adapts to how you work — not the other way around.',
    step3_h: 'Run', step3_p: 'The driver opens the app. The customer gets an SMS. The invoice is created. You see everything on the map in real time.',
    step4_h: 'Optimise', step4_p: 'Monthly insights help you find inefficiency and improve profitability per route and customer.',
    prod_cta_tag: 'Ready to try?', prod_cta_h: 'See it live.', prod_cta_prices: 'See pricing',

    // priser.html
    pris_hero_tag: 'Get started',
    pris_hero_h: 'Pay per load.<br><em>Not per licence.</em>',
    pris_hero_p: 'Concra\'s model is built to give smaller concrete companies the same digital conditions as the large ones. No fixed costs — you pay for every delivered load and nothing else.',
    pris_stat1_val: 'One-time cost', pris_stat1_lbl: 'Hardware per truck',
    pris_stat2_val: '1 day', pris_stat2_lbl: 'Time to go live',
    pris_stat3_lbl: 'Months lock-in',
    pris_inc_tag: 'What\'s included', pris_inc_h: 'The full platform.<br>From day one.',
    inc1: 'GPS tracking in real time', inc2: 'Automatic invoicing via your accounting system',
    inc3: 'Tracking link to customer via SMS when the truck leaves the plant',
    inc4: 'CO₂ data per delivery (Boverket standard)', inc5: 'Dedicated driver interface with navigation',
    inc6: 'Automatic monthly insights and decision support', inc7: 'Weather and pour documentation', inc8: 'CSV export and credit management',
    hw_tag: 'Hardware', hw_h: 'One box.<br>Per truck. Once.',
    hw_p1: 'The Concra terminal is a compact industrial unit mounted in every truck. It connects to the mobile network, logs position and status in real time, and syncs automatically with the platform. No SIM cards to manage, no apps to install.',
    hw_p2: 'We handle installation and commissioning on site. You don\'t need to do anything technical — we make sure everything works before we leave.',
    hw1_title: 'GPS + 4G built in', hw1_desc: 'Real-time position without external dongles. Coverage via the Swedish mobile network.',
    hw2_title: 'Powered by the truck', hw2_desc: 'Connected to the truck\'s electrical system. Built-in battery handles brief power cuts.',
    hw3_title: 'Driver screen included', hw3_desc: 'The driver sees orders, navigation and status directly on screen. No phone needed.',
    hw4_title: 'OTA updates', hw4_desc: 'New functionality rolls out automatically. You never need to update anything manually.',
    gdpr_text: 'All data is handled in accordance with GDPR. Personal data is stored within the EU and deleted on request. You own your delivery data — always.',
    calc_tag: 'Pricing examples', calc_h: 'What it costs<br><em style="color:rgba(255,255,255,.18);font-style:normal">in practice.</em>',
    calc_s1: 'Small company', calc_s2: 'Mid-size company', calc_s3: 'Growing operator',
    calc_trucks: 'Trucks', calc_loads_day: 'Loads / day', calc_days_month: 'Days / month', calc_loads_month: 'Loads / month',
    calc_monthly: 'Monthly cost',
    calc_note: 'The exact price per load is set together with you based on volume and setup — we discuss this during the demo call.',
    pris_cta_tag: 'Next step', pris_cta_h: 'Talk<br>to us.',
    pris_cta_p: '30 minutes. We show the system live and explain everything about pricing. No hidden fees, no unpleasant surprises.',
    pris_cta_prod: 'See the product',

    // kontakt.html
    kon_tag: 'Talk to us',
    kon_h1: 'Let us<br>show you<br><em>Concra.</em>',
    kon_p: 'A 30-minute demo is enough. We show the system live, answer all questions and give you a realistic picture of how quickly you can get started.',
    kon_email_lbl: 'Email', kon_reply_lbl: 'Response time', kon_reply_val: 'Within 24h',
    kon_demo_lbl: 'Demo', kon_demo_val: '30 minutes via video — you see the system live',
    kon_cp1: 'Demo length', kon_cp2: 'Time to go live', kon_cp3: 'Months lock-in', kon_cp4: 'No lock-in (3 months)',
    kon_form_tag: 'Book demo / contact', kon_form_h: 'Get started<br>today.',
    kon_intent_lbl: 'I want to', kon_opt_demo: 'Book a demo', kon_opt_info: 'Ask a question',
    kon_lbl_name: 'Name', kon_lbl_company: 'Company', kon_ph_company: 'Your company',
    kon_lbl_email: 'Email', kon_lbl_phone: 'Phone',
    kon_lbl_vehicles: 'Number of vehicles', kon_opt_select: 'Select number',
    kon_opt_v1: '1–3 vehicles', kon_opt_v2: '4–10 vehicles', kon_opt_v3: '11–25 vehicles', kon_opt_v4: 'More than 25 vehicles',
    kon_lbl_msg: 'Message (optional)', kon_ph_msg: 'Tell us a bit about your business or what you\'re thinking about...',
    kon_submit: 'Send',

    // kalkylator.html
    kal_hero_tag: 'Free tool',
    kal_hero_h: 'Concrete Calculator',
    kal_hero_p: 'Calculate exactly how much concrete you need — in m³. Choose construction type, enter dimensions and get the volume instantly. Includes waste margin and CO₂ estimate.',
    kal_tab_platta: 'Slab', kal_tab_vagg: 'Wall', kal_tab_peler_fyr: 'Column (sq.)', kal_tab_peler_rund: 'Column (rnd)', kal_tab_trappa: 'Staircase', kal_tab_fundament: 'Foundation',
    kal_ft_platta: 'Slab', kal_fd_platta: 'House foundations, garages, patios, industrial floors. Enter dimensions in metres.',
    kal_ft_vagg: 'Wall', kal_fd_vagg: 'Basement walls, retaining walls, basement exterior walls. Enter dimensions in metres.',
    kal_ft_peler_fyr: 'Column — square', kal_fd_peler_fyr: 'Rectangular concrete columns, pylons and foundations. Enter dimensions in metres.',
    kal_ft_peler_rund: 'Column — round', kal_fd_peler_rund: 'Circular concrete columns, piles and round foundations. Enter dimensions in metres.',
    kal_ft_trappa: 'Staircase', kal_fd_trappa: 'Straight solid concrete staircases. Volume calculated as a triangular prism — standard for cast-in-place stairs.',
    kal_ft_fundament: 'Foundation / Footings', kal_fd_fundament: 'Point foundations, footings under walls and columns. Enter dimensions in metres.',
    kal_lbl_laengd: 'Length (m)', kal_lbl_bredd: 'Width (m)', kal_lbl_tjocklek: 'Thickness (m)', kal_lbl_hojd: 'Height (m)', kal_lbl_djup: 'Depth (m)', kal_lbl_diameter: 'Diameter (m)',
    kal_lbl_antal_peler: 'Number of columns', kal_lbl_antal_steg: 'Number of steps', kal_lbl_stegdjup: 'Step depth (m)', kal_lbl_steghojd: 'Step height (m)', kal_lbl_antal_fund: 'Number of foundations',
    kal_unit_platta: 'Typical: house foundation 0.15–0.20 m · industrial floor 0.20–0.30 m',
    kal_unit_vagg: 'Typical: basement wall 0.20–0.30 m · retaining wall 0.25–0.40 m',
    kal_unit_prund: 'Radius = diameter / 2',
    kal_unit_trappa_d: 'Standard 0.25–0.30 m', kal_unit_trappa_h: 'Standard 0.15–0.18 m',
    kal_op_platta: 'Subtract openings (cutouts, columns etc.)', kal_op_vagg: 'Subtract openings (doors, windows etc.)',
    kal_add_opening: '+ Add opening',
    kal_res_label: 'Calculated volume', kal_rr_exact: 'Exact volume', kal_rr_spill: 'With 10% waste', kal_rr_vikt: 'Weight (approx.)',
    kal_res_note: '10% waste factor is always recommended when ordering. Weight calculated at 2,400 kg/m³.',
    kal_res_cta: 'Planning a project? Talk to us →',
    kal_info_tag: 'Good to know',
    kal_info1_h: 'Why 10% waste?', kal_info1_p: 'Concrete is ordered in whole m³ and formwork is rarely perfectly exact. 5–10% surplus covers waste, unevenness and residues in the truck. Better a little too much than having to place a supplementary order.',
    kal_info2_h: 'Openings and deductions', kal_info2_p: 'For slabs and walls you can add openings directly in the calculator — doors, windows, cutouts. Each opening is automatically deducted. For stairs and columns, solid volume is always calculated.',
    kal_info3_h: 'Which concrete class?', kal_info3_p: 'Wrong class can cause frost damage, cracking or failed inspection. House foundation = C25/30. Garage = C30/37 with air entrainment. Outdoors = at least C28/35. <a href="/betongklasser" style="color:rgba(255,255,255,.6);text-decoration:underline;text-underline-offset:3px">See our guide →</a>',
    kal_cta_tag: 'Logistics system for concrete plants', kal_cta_h: 'Concra handles<br>the delivery.', kal_cta_p: 'GPS tracking, automatic invoicing and CO₂ reporting — all in one system built for the concrete industry.',
    footer_iggang: 'Get started',

    // betongklasser.html
    bk_hero_tag: 'Guide', bk_hero_h: 'Which concrete class?',
    bk_hero_p: 'Choose the wrong class and you risk cracks, frost damage or a failed inspection. Choose right — and the concrete lasts for generations. Select your construction below.',
    bk_tool_q: 'What are you casting?', bk_tool_sub: 'Click on your construction type for the recommended class.',
    bk_app_husgrund: 'House foundation / Slab', bk_app_kallarvag: 'Basement wall', bk_app_garage: 'Garage / Carport',
    bk_app_utomhusgolv: 'Outdoor terrace / Deck', bk_app_bjalklag: 'Floor slab', bk_app_industrigolv: 'Industrial floor',
    bk_app_trappa: 'Outdoor stairs', bk_app_stodmur: 'Retaining wall', bk_app_pool: 'Pool / Cistern',
    bk_app_pelare: 'Column / Beam', bk_app_fundament: 'Foundation / Footing', bk_app_bro: 'Bridge / Road',
    bk_res_tag: 'Recommended class', bk_res_strength: 'Compressive strength', bk_res_exp: 'Exposure class', bk_res_vct: 'Max w/c ratio',
    bk_ref_tag: 'Reference', bk_ref_h: 'All classes',
    bk_th_klass: 'Class', bk_th_strength: 'Compressive strength', bk_th_use: 'Typical uses', bk_th_exp: 'Exposure class', bk_th_vct: 'Max w/c ratio',
    bk_exp_note: 'Exposure class: XC = carbonation · XF = frost · XD = chloride (non-marine) · XS = marine · XA = chemical attack.<br>w/c ratio = water-cement ratio. Lower w/c = denser concrete = better durability. Always verify with the responsible structural engineer.',
    bk_cta_tag: 'Concrete in motion', bk_cta_h: 'Concra handles<br>the delivery.', bk_cta_p: 'GPS tracking, automatic invoicing and CO₂ reporting — a system built for concrete plants.',
  },
};

// ── Ticker arrays ────────────────────────────────────────────
const tickerUpdates_sv = [
  'Betongbil 3 — Helsingborg → Kungsbacka',
  'Leverans startad — Malmö → Lund',
  'Bil 7 framme — Göteborg, Hisings Backa',
  'Faktura skapad — 12,5 m³ C30/37',
  'Betongbil 1 — Landskrona → Ängelholm',
  'Ny order — Värnamo, kl 07:30',
  'Bil 4 lossar — Helsingborg C',
  'CO₂-rapport klar — April 2026',
  'Betongbil 2 — Halmstad → Laholm',
  'Leverans bekräftad — Kristianstad',
];

const tickerUpdates_en = [
  'Concrete truck 3 — Helsingborg → Kungsbacka',
  'Delivery started — Malmö → Lund',
  'Truck 7 arrived — Gothenburg, Hisings Backa',
  'Invoice created — 12.5 m³ C30/37',
  'Concrete truck 1 — Landskrona → Ängelholm',
  'New order — Värnamo, 07:30',
  'Truck 4 unloading — Helsingborg C',
  'CO₂ report ready — April 2026',
  'Concrete truck 2 — Halmstad → Laholm',
  'Delivery confirmed — Kristianstad',
];

// ── tabData per language ─────────────────────────────────────
const tabData_sv = [
  {
    img: '/img/screenshot-dashboard.jpg',
    title: 'Realtid. Alltid.',
    text: 'Se varje bil på kartan, live. Du vet exakt var varje lass befinner sig utan att ringa chauffören. Kunden frågar — du svarar direkt. Inga gissningar, inget väntande.',
    slides: null,
  },
  {
    img: '/img/screenshot-aktiva.jpg',
    title: 'Full kontroll på en skärm.',
    text: 'Alla aktiva leveranser samlade i ett flöde — status, förare, adress och volym. Ingen radiokontakt, inget spring. Disponenten ser allt och kan agera direkt.',
    slides: null,
  },
  {
    img: '/img/screenshot-chauf-order.jpg',
    title: 'Byggd för betongbilen.',
    text: 'Chauffören ser sina ordrar och bekräftar lastning och lossning med ett tryck. Inga lappar, ingen privat telefon. Gränssnittet fungerar med handskar på — i alla väder.',
    slides: ['/img/screenshot-chauf-order.jpg', '/img/screenshot-chauf-nav.jpg'],
  },
  {
    img: '/img/screenshot-invoice.jpg',
    title: 'Mappa dina artiklar. Låt programmet lösa resten.',
    text: 'Koppla väntetid, hydraulränna, restbetong och tillval till era artikelnummer en gång. Sedan sköter Concra beräkningarna automatiskt — rätt pris, rätt artikel, rätt faktura. Varje gång.',
    slides: null,
  },
  {
    img: '/img/screenshot-projekt.jpg',
    title: 'Håll koll på hela projektet — inte bara nästa lass.',
    text: 'Kviberg Park, 180 m³, 3 lass klara. Concra samlar alla leveranser under ett projekt — volym, körlogg, fordon och kund på ett ställe. Byggföretaget ser framstegen, ni har full kontroll.',
    slides: null,
  },
];

const tabData_en = [
  {
    img: '/img/screenshot-dashboard.jpg',
    title: 'Real time. Always.',
    text: 'See every truck on the map, live. You know exactly where every load is without calling the driver. The customer asks — you answer immediately. No guessing, no waiting.',
    slides: null,
  },
  {
    img: '/img/screenshot-aktiva.jpg',
    title: 'Full control on one screen.',
    text: 'All active deliveries in one flow — status, driver, address and volume. No radio contact, no running around. The dispatcher sees everything and can act immediately.',
    slides: null,
  },
  {
    img: '/img/screenshot-chauf-order.jpg',
    title: 'Built for the concrete truck.',
    text: 'The driver sees their orders and confirms loading and unloading with one tap. No paper, no personal phone. The interface works with gloves on — in any weather.',
    slides: ['/img/screenshot-chauf-order.jpg', '/img/screenshot-chauf-nav.jpg'],
  },
  {
    img: '/img/screenshot-invoice.jpg',
    title: 'Map your items. Let the system handle the rest.',
    text: 'Connect waiting time, chute, leftover concrete and extras to your item numbers once. Then Concra handles the calculations automatically — correct price, correct item, correct invoice. Every time.',
    slides: null,
  },
  {
    img: '/img/screenshot-projekt.jpg',
    title: 'Track the whole project — not just the next load.',
    text: 'Kviberg Park, 180 m³, 3 loads complete. Concra gathers all deliveries under one project — volume, trip log, vehicle and customer in one place. The builder sees the progress, you have full control.',
    slides: null,
  },
];

// ── Story step copy per language ─────────────────────────────
const stepCopy_sv = [
  { label: '01 — Order skapad', headline: 'Beställt.<br>Klart på sekunder.' },
  { label: '02 — Avgång',       headline: 'Bilen rullar.<br>Kunden är notifierad.' },
  { label: '03 — Live-ETA',     headline: 'Ankomsttiden<br>uppdateras i realtid.' },
  { label: '04 — Framme',       headline: 'Leveransen<br>är bekräftad.' },
  { label: '05 — Faktura',      headline: 'Fakturerat till<br>Fortnox automatiskt.' },
];

const stepCopy_en = [
  { label: '01 — Order created', headline: 'Ordered.<br>Done in seconds.' },
  { label: '02 — Departure',     headline: 'En route.<br>Customer notified.' },
  { label: '03 — Live tracking', headline: 'ETA updates<br>in real time.' },
  { label: '04 — Arrived',       headline: 'On site.<br>Unloading confirmed.' },
  { label: '05 — Invoice',       headline: 'Invoice sent.<br>Booked automatically.' },
];

// Expose EN copy so updateCopy in index.html can pick it at fire time
window._stepCopyEn = stepCopy_en;

// ── Current language state ───────────────────────────────────
let _currentLang = localStorage.getItem('lang') || 'sv';

function applyLang(lang) {
  _currentLang = lang;
  const t = translations[lang];

  // Apply textContent for data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Apply innerHTML for data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Apply placeholder for data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update lang toggle button label
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'sv' ? 'EN' : 'SV';

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Patch ticker array reference
  if (typeof _tickerSetUpdates === 'function') {
    _tickerSetUpdates(lang === 'sv' ? tickerUpdates_sv : tickerUpdates_en);
  }

  // Patch tabData and refresh active tab
  if (typeof tabData !== 'undefined' && typeof showTab === 'function') {
    const newTabData = lang === 'sv' ? tabData_sv : tabData_en;
    // Replace entries in place so showTab() sees the new data
    tabData.splice(0, tabData.length, ...newTabData);
    if (typeof activeTab !== 'undefined') showTab(activeTab);
  }

  // Update storyLabel and storyHeadline to match current step
  if (typeof window._currentStepIdx !== 'undefined') {
    const copies = lang === 'en' ? stepCopy_en : stepCopy_sv;
    const copy = copies[window._currentStepIdx];
    if (copy) {
      const lEl = document.getElementById('storyLabel');
      const hEl = document.getElementById('storyHeadline');
      if (lEl) { lEl.textContent = copy.label; lEl.style.opacity = '1'; lEl.style.transform = 'translateY(0)'; }
      if (hEl) { hEl.innerHTML = copy.headline; hEl.style.opacity = '1'; hEl.style.transform = 'translateY(0)'; }
    }
  }

  localStorage.setItem('lang', lang);
}

function toggleLang() {
  applyLang(_currentLang === 'sv' ? 'en' : 'sv');
}

// Apply saved language on page load.
// lang.js loads at bottom of <body>, so DOM is already parsed.
// Use requestAnimationFrame to ensure any synchronous layout is done first.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { applyLang(_currentLang); });
} else {
  applyLang(_currentLang);
}
