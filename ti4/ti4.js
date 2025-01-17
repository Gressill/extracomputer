﻿/* Author: Stephane Demots */
var gLang = 0;
const LANG_EN = 0;
const LANG_FR = 1;
const LANG_DE = 2;
const LANG_RU = 3;
const LANG_SP = 4;
const LANG_CN = 5;

const PLANET_NAME = 0;
const PLANET_TYPE = 1;

var gPlanet = [
["Abaddon", "cultural" ,""],
["Abyz", "hazardous" ,""],
["Accoen", "industrial" ,""],
["Acheron", "homeworld" ,""],
["Alio Prima", "cultural" ,""],
["Ang", "industrial" ,""],
["Arc Prime", "homeworld" ,""],
["Archon Tau", "homeworld" ,""],
["Archon Ren", "homeworld" ,""],
["Archon Vail", "hazardous" ,""],
["Arcturus", "homeworld" ,""],
["Arinam", "industrial" ,""],
["Arnor", "industrial" ,""],
["Arretze", "homeworld" ,""],
["Ashtroth", "hazardous" ,""],
["Atlas", "hazardous" ,""],
["Avar", "homeworld" ,""],
["Ba'kal", "industrial" ,""],
["Bereg", "hazardous" ,""],
["Cealdri", "cultural" ,""],
["Centauri", "cultural" ,""],
["Coorneeq", "cultural" ,""],
["Cormund", "hazardous" ,""],
["Creus Gate", "homeworld" ,""],
["Creuss", "homeworld" ,""],
["Dal Bootha", "cultural" ,""],
["Darien", "homeworld" ,""],
["The Dark", "homeworld" ,""],
["Druaa", "homeworld" ,""],
["Elysium", "homeworld" ,""],
["Everra", "cultural" ,""],
["Fria", "hazardous" ,""],
["Gral", "industrial" ,""],
["Hercant", "homeworld" ,""],
["Hope's End", "hazardous" ,""],
["Ixth", "homeworld" ,""],
["Jeol Ir", "industrial" ,""],
["Jol", "homeworld" ,""],
["Jord", "homeworld" ,""],
["Kamdorn", "homeworld" ,""],
["Kraag", "hazardous" ,""],
["Lazar", "industrial" ,""],
["Lisis", "industrial" ,""],
["Lisis II", "homeworld" ,""],
["Lirta IV", "hazardous" ,""],
["Lodor", "cultural" ,""],
["Loki", "cultural" ,""],
["Lor", "industrial" ,""],
["Maaluuk", "homeworld" ,""],
["Mallice", "cultural" ,""],
["Mecatol Rex", "homeworld" ,""],
["Meer", "hazardous" ,""],
["Mehar Xull", "hazardous" ,""],
["Mellon", "cultural" ,""],
["Mirage", "cultural" ,""],
["Moll Primus", "homeworld" ,""],
["Mordai II", "homeworld" ,""],
["Muaat", "homeworld" ,""],
["Nar", "homeworld" ,""],
["Naazir", "homeworld" ,""],
["Nestphar", "homeworld" ,""],
["New Albion", "industrial" ,""],
["Perimeter", "industrial" ,""],
["Primor", "cultural" ,""],
["Quann", "cultural" ,""],
["Quecen'n", "industrial" ,""],
["Quinarra", "homeworld" ,""],
["Ragh", "homeworld" ,""],
["Rarron", "cultural" ,""],
["Resculon", "cultural" ,""],
["Retillion", "homeworld" ,""],
["Rigel I", "hazardous" ,""],
["Rigel II", "industrial" ,""],
["Rigel III", "industrial" ,""],
["Rokha", "homeworld" ,""],
["Sakulag", "hazardous" ,""],
["Saudor", "industrial" ,""],
["Sem-Lore", "cultural" ,""],
["Shalloq", "homeworld" ,""],
["Siig", "hazardous" ,""],
["Starpoint", "hazardous" ,""],
["Tar'Mann", "industrial" ,""],
["Tequ'ran", "hazardous" ,""],
["Thibah", "industrial" ,""],
["Torkan", "cultural" ,""],
["Tren'Lak", "homeworld" ,""],
["Valk", "homeworld" ,""],
["Vega Major", "cultural" ,""],
["Vega Minor", "cultural" ,""],
["Vefut II", "hazardous" ,""],
["Velnor", "industrial" ,""],
["Vorhal", "cultural" ,""],
["Wellon", "industrial" ,""],
["Winnu", "homeworld" ,""],
["Wren Terra", "homeworld" ,""],
["Xanhact", "hazardous" ,""],
["XXehan", "cultural" ,""],
["Ylir", "homeworld" ,""],
["Zohbat", "hazardous" ,""],
["[0.0.0]", "homeworld" ,""],
];

var gLaw = [
["Anti-Intellectual Revolution", "Révolution Anti-Intellectuelle", "Antiintellektuelle Revolution", "Анти-технологическая революция", "Revolución Anti-Intelectual" ,"反智发展法"],
["Articles of War", "Articles of War", "Articles of War", "Articles of War", "Articles of War" ,"战争条例"],
["Checks and Balances", "Checks and Balances", "Checks and Balances", "Checks and Balances", "Checks and Balances" ,"制衡"],
["Classified Document Leaks", "Fuites de documents classés", "Geheimnisverrat", "Утечка секретной информации", "Filtrar Documentos Clasificados" ,"公文泄密"],
["Committee Formation", "Formation de comité", "Bilguns eines Komitees", "Формирование комитета", "Formar un Comité" ,"委员会结成"],
["Conventions of War", "Conventions de guerre", "Kriegsrechtskonventionen", "Правила ведения войны", "Convenciones de Guerra" ,"战争公约"],
["Core Mining", "Minage de noyau", "Bergbau im Planetenkern", "Разработки ядра", "Explotación del Nucleo Planetario" ,"矿业中心"],
["Demilitarized Zone", "Zone démilitarisée", "Entmilitarisierte Zone", "Демилитаризованная зона", "Zona Desmilitarizada" ,"非武装地区"],
["Enforced Travel Ban", "Inderdiction de voyager", "Durchreiseverbot", "Ограничение на передвижение", "Prohibición de Viajes Espaciales" ,"虫洞旅行禁令"],
["Executive Sanctions", "Sanctions éxécutives", "Sanktionsdekret", "Ограничение полномочий", "Sanciones Ejecutivas" ,"管理许可"],
["Fleet Regulations", "Régulations de flotte", "Flottenabkommen", "Регулирование флота", "Normativa Naval" ,"舰队规章"],
["Holy Planet of Ixth", "Planète sacrée d'Ixth", "Der heilige Planet Ixth", "Священная планета Икстов", "El Planeta Sagrado Ixth" ,"手握圣地"],
["Homeland Defense Act", "Ordonnance de défense du territoire", "Heimatschutzgesetz", "Закон об обороне", "Ley de Defensa Nacional" ,"家园防卫规章"],
["Imperial Arbiter", "Arbitre Impérial", "Imperialer Vermittler", "Имперский арбитр", "Arbitrador Imperial" ,"帝国权贵"],
["Minister of Commerce", "Ministre du Commerce", "Handelminister", "Министр торговли", "Ministro de Commercio" ,"商贸大臣"],
["Minister of Exploration", "Ministre de l'Exploration", "Raumfahrtminister", "Министр открытий", "Ministro de Exploración" ,"勘探大臣"],
["Minister of Industry", "Ministre de l'Industrie", "Industrieminister", "Министр промышленности", "Ministro de Industria" ,"工业大臣"],
["Minister of Peace", "Ministre de la Paix", "Friedensminister", "Министр мира", "Ministro de Paz" ,"和平大臣"],
["Minister of Policy", "Ministre de la Politique", "Minister für politische Strategie", "Министр политики", "Ministro de Política" ,"内政大臣"],
["Minister of Sciences", "Ministre des Sciences", "Wissenschaftsminister", "Министр науки", "Ministro de Ciencia" ,"科技大臣"],
["Minister of War", "Ministre de la Guerre", "Kriegsminister", "Министр войны", "Ministro de Guerra" ,"军事大臣"],
["Nexus Sovereignty", "Nexus Sovereignty", "Nexus Sovereignty", "Nexus Sovereignty", "Nexus Sovereignty" ,"连结主权"],
["Political Censure", "Political Censure", "Political Censure", "Political Censure", "Political Censure" ,"政治谴责"],
["Prophecy of Ixth", "Prophétie d'Ixth", "Die Prophezeiung von Ixth", "Пророчество Икстов", "La Profecía de Ixth" ,"神的预言"],
["Publicize Weapon Schematics", "Publication de plans d'armes", "Freigabe von Waffenbauplänen", "Раскрытие военных чертежей", "Divulgar Planos de Armas" ,"宣传先进武器"],
["Regulated Conscription", "Régularisation de la conscription", "Beschränkung der Wehrpflicht", "Плановый призыв", "Servicio Militar Compensatorio" ,"征兵管制"],
["Representative Government ", "Gouvernement représentatif", "Repräsentative Regierung", "Галактический сенат", "Gobierno Representativo" ,"代议政体"],
["Research Team: Biotic", "Equipe de recherche: Biotique", "Forschungsgruppe Biotechnik", "Разработка: биотехнологии", "Equipo de Investigación: Biótica" ,"研究团队：生化学"],
["Research Team: Cybernetic", "Equipe de recherche: Cybernétique", "Forschungsgruppe Kybernetik", "Разработка: кибернетика", "Equipo de Investigación: Cibernética" ,"研究团队：模控学"],
["Research Team: Propulsion", "Equipe de recherche: Propulsion", "Forschungsgruppe Antriebstechnik", "Разработка: двигатели", "Equipo de Investigación: Propulsión" ,"研究团队：推力学"],
["Research Team: Warfare", "Equipe de recherche: Combat", "Forschungsgruppe Militärtechnik", "Разработка: оружие", "Equipo de Investigación: Guerra" ,"研究团队：战争学"],
["Search Warrant", "Search Warrant", "Search Warrant", "Search Warrant", "Search Warrant" ,"搜查令"],
["Senate Sanctuary", "Sanctuaire Sénatorial", "Senatssitz", "Убежище сената", "Santuario del Senado" ,"评议会圣所"],
["Shard of the Throne", "Fragment du Trône", "Scherbe des Throns", "Осколки трона", "Fragmento del Trono" ,"王座的碎片"],
["Shared Research", "Partage des connaissances", "gemeinsames Forschungsprojekt", "Совместные исследования", "Investigación Conjunta" ,"研发天幕"],
["Terraforming Initiative", "Initiative de Terraformation", "Terraforming-Initiative", "Терраформирование", "Iniciativa de Terraformación" ,"地貌开发"],
["The Crown of Emphidia", "La couronne d'Emphidia", "Die Krone von Emphidia", "Корона Эмфидии", "La Corona de Emphidia" ,"因菲迪亚之冠"],
["The Crown of Thalnos", "La couronne de Thanlos", "Die Krone von Thanlos", "Корона Талноса", "La Corona de Thanlos" ,"塔洛斯之冠"],
["Wormhole Reconstruction", "Reconstruction de Trou de Ver", "Rekonstruktion von Wurmlöchern", "Перестройка чревоточин", "Reconstruir Agujero de Gusano" ,"虫洞修复"],
];

var gSecretObj = [
["Adapt New Strategies", "Adoptez de nouvelles stratégies", "Entwickle neue Strategie", "Разработайте новые стратегии", "Adoptar Nuevas Estrategias" ,"调整新战略"],
["Become a Martyr", "Become a Martyr", "Become a Martyr", "Become a Martyr", "Become a Martyr" ,"成为殉道者"],
["Become the Gatekeeper", "Devenez la sentinelle de la porte", "Bewache die Tore", "Станьте привратником", "Vigilar los Portales" ,"虫洞门神"],
["Betray a Friend", "Betray a Friend", "Betray a Friend", "Betray a Friend", "Betray a Friend" ,"背后插刀"],
["Brave the Void", "Brave the Void", "Brave the Void", "Brave the Void", "Brave the Void" ,"直面虚空"],
["Control the Region", "Contrôlez la région", "Beherrsche die Region", "Контролируйте регион", "Controlar la Región" ,"地区控制"],
["Cut Supply Lines", "Coupez les lignes d'approvision.", "Blockiere die Versorgungswege", "Перекройте каналы поставок", "Cortar las Líneas de Suministro" ,"截断补给"],
["Darken the Skies", "Darken the Skies", "Darken the Skies", "Darken the Skies", "Darken the Skies" ,"重兵压境"],
["Defy Space and Time", "Defy Space and Time", "Defy Space and Time", "Defy Space and Time", "Defy Space and Time" ,"挑战时空"],
["Demonstrate Your Power", "Demonstrate Your Power", "Demonstrate Your Power", "Demonstrate Your Power", "Demonstrate Your Power" ,"展示力量"],
["Destroy Heretical Works", "Destroy Heretical Works", "Destroy Heretical Works", "Destroy Heretical Works", "Destroy Heretical Works" ,"销毁异端"],
["Destroy Their Greatest Ship", "Détruisez leur plus grand vaisseau", "Zerstöre Ihr mächtigstes Schiff", "Уничтожьте гордость флота", "Destruir su Nave Más Grande" ,"擒贼先擒王"],
["Dictate Policy", "Dictate Policy", "Dictate Policy", "Dictate Policy", "Dictate Policy" ,"指鹿为马"],
["Drive the Debate", "Drive the Debate", "Drive the Debate", "Drive the Debate", "Drive the Debate" ,"运筹帷幄"],
["Establish a Perimeter", "Etablissez un périmètre", "Errichte einen Verteidigungsring", "Укрепите границы", "Establecer un Perímetro" ,"部署阵地"],
["Establish Hegemony", "Establish Hegemony", "Establish Hegemony", "Establish Hegemony", "Establish Hegemony" ,"霸气初现"],
["Fight With Precision", "Fight With Precision", "Fight With Precision", "Fight With Precision", "Fight With Precision" ,"百步穿杨"],
["Forge an Alliance", "Forgez une alliance", "Schmiede ein Bündnis", "Создайте альянс", "Forjar una Alianza" ,"假造同盟"],
["Form a Spy Network", "Formez un réseau d'espions", "Bilde ein Spionagenetzwerk", "Сформируйте шпионскую сеть", "Crear Una Red de Espionaje" ,"建立间谍网"],
["Foster Cohesion", "Foster Cohesion", "Foster Cohesion", "Foster Cohesion", "Foster Cohesion" ,"培养凝聚力"],
["Fuel the War Machine", "Alimentez la Machine de Guerre", "Treibe die Kriegsmaschinerie an", "Разогрейте военную машину", "Alimentar la Maquinaria Bélica" ,"战争机器"],
["Gather a Mighty Fleet", "Rassemblez une puissante flotte", "Versammle eine mächtige Flotte", "Соберите мощный флот", "Reunir una Flota Formidable" ,"征招强力船舰"],
["Hoard Raw Materials", "Hoard Raw Materials", "Hoard Raw Materials", "Hoard Raw Materials", "Hoard Raw Materials" ,"地大物博"],
["Learn Secrets of the Cosmos", "Apprenez les secrets du Cosmos", "Ergründe die Geheimnisse des Kosmos", "Познайте тайны космоса", "Desvelar los Secretos del Cosmos" ,"学习宇宙的奥秘"],
["Monopolize Production", "Monopolisez la production", "Errichte ein Monopol", "Монополизируйте производство", "Monopolizar la Producción" ,"产品垄断"],
["Make an Example of Their World", "Faites de leur monde un exemple", "Statuiere ein Exempel", "Преподайте урок", "Dar Ejemplo con su Planeta" ,"杀一儆百"],
["Master the Laws of Physics", "Maîtrisez les lois de la physique", "Beherrsche die Naturgesetze", "Изучите законы физики", "Dominar la Leyes de la Física" ,"物理法则大师"],
["Mine Rare Metals", "Extrayez des métaux rares", "Schürfe seltene Metalle", "Добывайте редкие металлы", "Extraer Metales Poco Comunes" ,"开采稀有金属"],
["Occupy the Seat of the Empire", "Occupez le siege de l'empire", "Besetze die Thronwelt", "Захватите сердце Империи", "Ocupar la Capital Imperial" ,"占领帝国王座"],
["Produce En Masse", "Produce En Masse", "Produce En Masse", "Produce En Masse", "Produce En Masse" ,"批量生产"],
["Prove Endurance", "Prove Endurance", "Prove Endurance", "Prove Endurance", "Prove Endurance" ,"坚持到底"],
["Seize An Icon", "Seize An Icon", "Seize An Icon", "Seize An Icon", "Seize An Icon" ,"抢占圣地"],
["Spark a Rebellion", "Déclenchez une rébellion", "Zettele eine Rebellion an", "Поднимите восстание", "Iniciar una Rebelión" ,"革命的火苗"],
["Stake your Claim", "Stake your Claim", "Stake your Claim", "Stake your Claim", "Stake your Claim" ,"兵临城下"],
["Strengthen Bonds", "Strengthen Bonds", "Strengthen Bonds", "Strengthen Bonds", "Strengthen Bonds" ,"加强债券"],
["Threaten Enemies", "Menacez vos ennemies", "Bedränge den Feind", "Угрожайте врагам", "Intimidar a tus Enemigos" ,"恐吓敌人"],
["Turn Their Fleets to Dust", "Réduisez leurs flottes en cendres", "Vernichte Ihre Flotten", "Обратите флот в пыль", "Reducir sus Flotas a Polvo" ,"化敌船为齑粉"],
["Unveil Flagship", "Révélez un Vaisseau Amiral", "Enthülle dein Flagschiff", "Покажите флагман в деле", "Revelar Nave Insignia" ,"旗舰开幕式"],
];

var gStrategy = [
["Leadership", "Gouvern.", "Führungsstärke", "Лидерство", "Liderazgo", "领导力"],
["Diplomacy", "Diplomacie", "Diplomatie", "Дипломатия", "Diplomacia", "外交"],
["Politics", "Politique", "Politik", "Политика", "Política", "政治"],
["Construction", "Construction", "Infrastruktur", "Строительство", "Construcción", "建设"],
["Trade", "Commerce", "Handel", "Торговля", "Comercio", "贸易"],
["Warfare", "Guerre", "Kriegsführung", "Война", "Guerra", "战争"],
["Technology", "Techno.", "Technologie", "Исследования", "Tecnología", "科技"],
["Imperial", "Intrigue", "Imperium", "Экспансия", "Imperialismo", "皇权"],
];

const FACTION_NAME_EN = 0;
const FACTION_NAME_FR = 1;
const FACTION_NAME_DE = 2;
const FACTION_NAME_RU = 3;
const FACTION_NAME_SP = 4;
const FACTION_NAME_CN = 5;
const FACTION_ICON = 6;
const FACTION_FACE = 7;
const FACTION_SHORTNAME = 8;

var FACTION_NAME = FACTION_NAME_EN + gLang;

const IMG_FOLDER = "ti4/img/";
var factionList = [
["Arborec", "Arborec", "Arborec", "Арбореки", "Los Arborec", "昂博瑞克", IMG_FOLDER + "arborec.png", "", "Arborec"],
["Barony of Letnev", "Baronnie de Letnev", "Baronat von Letnev", "Баронат Летнев", "La Baronía de Letnev", "蓝特涅夫领地", IMG_FOLDER + "letnev.png", "", "Letnev"],
["Clan of Saar", "Clan de Saar", "Clan der Zaar", "Клан Сааров", "El Clan de Saar", "萨尔氏族", IMG_FOLDER + "saar.png", "", "Saar"],
["Embers of Muaat", "Braises de Muaat", "Glut von Muaat", "Тлеющие с Муаата", "Las Ascuas de Muaat", "穆亚特灰烬", IMG_FOLDER + "muat.png", "", "Muaat"],
["Emirates of Hacan", "Emirats de Hacan", "Emirate von Hacan", "Хаканские Эмираты", "Los Emiratos de Hacan", "哈肯酋长国", IMG_FOLDER + "hacan.png", "", "Hacan"],
["Federation of Sol", "Fédération de Sol", "Sol Föderation", "Федерация Сол", "La Federación de Sol", "太阳系联邦", IMG_FOLDER + "sol.png", "", "Sol"],
["Ghosts of Creuss", "Fantômes de Creuss", "Geister von Creuss", "Призраки Креусса", "Los Fantasmas de Creuss", "克洛斯幽灵", IMG_FOLDER + "creuss.png", "", "Creuss"],
["L1z1x Mindnet", "Réseau d'Esprit L1z1x", "L1Z1X Gedankennetz", "Психосеть Л1З1КС", "La Red Mental L1z1x", "拉萨斯智慧体", IMG_FOLDER + "l1z1x.png", "", "L1z1x"],
["Mentak Coalition", "Coalition Mentak", "Mentak Koalition", "Коалиция Ментака", "La Coalición Mentak", "曼塔克联盟", IMG_FOLDER + "mentak.png", "", "Mentak"],
["Naalu Collective", "Collectif Naalu", "Naalo-Kollektiv", "Клубок Наалу", "El Colectivo Naalu", "纳鲁集团", IMG_FOLDER + "naalu.png", "", "Naalu"],
["Nekro Virus", "Virus Nekro", "Nekro-Virus", "Некровирус", "El Virus Nekro", "奈克洛病毒", IMG_FOLDER + "nekro.png", "", "Nekro"],
["Sardak Norr", "Sardakk N'orr", "Sardakk N'orr", "Сардак Н’орр", "Los Sardak Norr", "萨达克诺里", IMG_FOLDER + "sardak.png", "", "Sardak"],
["Universities of Jol-Nar", "Universités de Jol-Nar", "Universitiät von Jol-Nar", "Жол-Нарские университеты", "Las Universidades de Jol-Nar", "乔纳学盟", IMG_FOLDER + "jol.png", "", "Jol"],
["Winnu", "Winnu", "Winnu", "Винну", "Los Winnu", "维努人", IMG_FOLDER + "winnu.png", "", "Winnu"],
["Xxcha Kingdoms", "Royaume Xxcha", "Xxcha Königreich", "Королевство Ззча", "El Reino de Xxcha", "艾克私恰王国", IMG_FOLDER + "xxcha.png", "", "Xxcha"],
["Yin Brotherhood", "Fraternité de Yin", "Yin Brunderschaft", "Братство Инь", "La Hermandad del Yin", "伊恩兄弟会", IMG_FOLDER + "yin.png", "", "Yin"],
["Yssaril Tribes", "Tribus Yssaril", "Yssaril-Stämme", "Племена Иссарилов", "Las Tribus de Yssaril", "伊萨利尔部落", IMG_FOLDER + "yssrail.png", "", "Yssaril"],
["Argent Flight", "Nuée Argentée", "Argent Flight", "Argent Flight", "La Bandada Argéntea", "银色飞翼", IMG_FOLDER + "argent.png", "", "Argent"],
["Empyrean", "Empyréens", "Empyrean", "Empyrean", "Los Empíreos", "最高天", IMG_FOLDER + "empyrean.png", "", "Empyrean"],
["Mahact Gene-Sorcerers", "Sorciers Mahact", "Mahact Gene-Sorcerers", "Mahact Gene-Sorcerers", "Los Genechiceros de Mahact", "玛哈克特-基因术士", IMG_FOLDER + "mahact.png", "", "Mahact"],
["Naaz-Rokha Alliance", "Alliance Naaz-Rokha", "Naaz-Rokha Alliance", "Naaz-Rokha Alliance", "La Alianza Naaz-Rokha", "纳兹-洛克哈联盟", IMG_FOLDER + "naaz.png", "", "Naaz"],
["The Nomad", "Le Nomade", "The Nomad", "The Nomad", "Los Nomadas", "游牧民/流浪者", IMG_FOLDER + "nomad.png", "", "Nomad"],
["Titans of Ul", "Titans d'Ul", "Titans of Ul", "Titans of Ul", "Los Titanes de Ul", "提坦复苏/泰坦", IMG_FOLDER + "titans.png", "", "Titans"],
["Vuil'Raith Cabal", "Cabale de Vuil'Raith", "Vuil'Raith Cabal", "Vuil'Raith Cabal", "La Cábala de Vuil'Raith", "乌尔莱斯之祸/鳄鱼", IMG_FOLDER + "vuil.png", "", "Vuil"],
["The Council Keleres", "Le Conseil Keleres", "The Council Keleres", "The Council Keleres", "The Council Keleres", "克勒雷斯理事会", IMG_FOLDER + "keleres.png", "", "Keleres"],
];

const HACAN_FACTION = 4;
const NAALU_FACTION = 9;
const NEKRO_FACTION = 10;
const WINNU_FACTION = 13;
const POK_FACTION = 17;
const CODEX_FACTION = 24;


var playerColorList = [
"black",
"blue",
"green",
"purple",
"red",
"yellow",
"orange",
"hotpink"
];

var gGenericChoice = [
["Proposal A", "Proposition A", "Vorschlag A", "Предложение A", "Propuesta A" ,"提案A"],
["Proposal B", "Proposition B", "Vorschlag B", "Предложение B", "Propuesta B" ,"提案B"],
["Proposal C", "Proposition B", "Vorschlag C", "Предложение C", "Propuesta C" ,"提案C"],
["Proposal D", "Proposition D", "Vorschlag D", "Предложение D", "Propuesta D" ,"提案D"],
["Proposal E", "Proposition E", "Vorschlag E", "Предложение E", "Propuesta E" ,"提案E"],
["Proposal F", "Proposition F", "Vorschlag F", "Предложение F", "Propuesta F" ,"提案F"],
["Proposal G", "Proposition G", "Vorschlag G", "Предложение G", "Propuesta G" ,"提案G"],
["Proposal H", "Proposition H", "Vorschlag H", "Предложение H", "Propuesta H" ,"提案H"],
];
