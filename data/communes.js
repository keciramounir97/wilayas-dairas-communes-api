// communes.js
import { dairas } from './dairas.js';
import { wilayas } from './wilayas.js';

// Liste des 1541 communes (liées à leur daira_id et wilaya_id)
export const communes = [
  {
    "id": 1,
    "nom_francais": "Adrar",
    "nom_arabe": "أدرار",
    "wilaya_id": 1,
    "daira": "Adrar",
    "daira_ar": "أدرار",
    "post_code": "01001",
    "daira_id": 1
  },
  {
    "id": 2,
    "nom_francais": "Tamest",
    "nom_arabe": "تأماست",
    "wilaya_id": 1,
    "daira": "Fenoughil",
    "daira_ar": "فنوغيل",
    "post_code": "01002",
    "daira_id": 3
  },
  {
    "id": 3,
    "nom_francais": "Charouine",
    "nom_arabe": "شروين",
    "wilaya_id": 49,
    "daira": "Charouine",
    "daira_ar": "شروين",
    "post_code": "49003",
    "daira_id": 485
  },
  {
    "id": 4,
    "nom_francais": "Reggane",
    "nom_arabe": "رڨان",
    "wilaya_id": 1,
    "daira": "Reggane",
    "daira_ar": "رقان",
    "post_code": "01004",
    "daira_id": 4
  },
  {
    "id": 5,
    "nom_francais": "In Zghmir",
    "nom_arabe": "ان زغمير",
    "wilaya_id": 1,
    "daira": "Zaouiat Kounta",
    "daira_ar": "زاوية كنتة",
    "post_code": "01005",
    "daira_id": 6
  },
  {
    "id": 6,
    "nom_francais": "Tit",
    "nom_arabe": "تــيـــت",
    "wilaya_id": 1,
    "daira": "Aoulef",
    "daira_ar": "أولف",
    "post_code": "01006",
    "daira_id": 2
  },
  {
    "id": 7,
    "nom_francais": "Ksar Kaddour",
    "nom_arabe": "قصر قدور",
    "wilaya_id": 49,
    "daira": "Tinerkouk",
    "daira_ar": "تنركوك",
    "post_code": "49007",
    "daira_id": 487
  },
  {
    "id": 8,
    "nom_francais": "Tsabit",
    "nom_arabe": "تسابيت",
    "wilaya_id": 1,
    "daira": "Tsabit",
    "daira_ar": "تسابيت",
    "post_code": "01008",
    "daira_id": 5
  },
  {
    "id": 9,
    "nom_francais": "Timimoun",
    "nom_arabe": "تيميمون",
    "wilaya_id": 49,
    "daira": "Timimoun",
    "daira_ar": "تيميمون",
    "post_code": "49009",
    "daira_id": 486
  },
  {
    "id": 10,
    "nom_francais": "Ouled Said",
    "nom_arabe": "أولاد سعيد",
    "wilaya_id": 49,
    "daira": "Timimoun",
    "daira_ar": "تيميمون",
    "post_code": "49010",
    "daira_id": 486
  },
  {
    "id": 11,
    "nom_francais": "Zaouiet Kounta",
    "nom_arabe": "زاوية كنتة",
    "wilaya_id": 1,
    "daira": "Zaouiat Kounta",
    "daira_ar": "زاوية كنتة",
    "post_code": "01011",
    "daira_id": 6
  },
  {
    "id": 12,
    "nom_francais": "Aoulef",
    "nom_arabe": "أولف",
    "wilaya_id": 1,
    "daira": "Aoulef",
    "daira_ar": "أولف",
    "post_code": "01012",
    "daira_id": 2
  },
  {
    "id": 13,
    "nom_francais": "Timokten",
    "nom_arabe": "تيمقتن",
    "wilaya_id": 1,
    "daira": "Aoulef",
    "daira_ar": "أولف",
    "post_code": "01013",
    "daira_id": 2
  },
  {
    "id": 14,
    "nom_francais": "Tamentit",
    "nom_arabe": "تامنطيت",
    "wilaya_id": 1,
    "daira": "Fenoughil",
    "daira_ar": "فنوغيل",
    "post_code": "01014",
    "daira_id": 3
  },
  {
    "id": 15,
    "nom_francais": "Fenoughil",
    "nom_arabe": "فنوغيل",
    "wilaya_id": 1,
    "daira": "Fenoughil",
    "daira_ar": "فنوغيل",
    "post_code": "01015",
    "daira_id": 3
  },
  {
    "id": 16,
    "nom_francais": "Tinerkouk",
    "nom_arabe": "زاوية دباغ",
    "wilaya_id": 49,
    "daira": "Tinerkouk",
    "daira_ar": "تنركوك",
    "post_code": "49016",
    "daira_id": 487
  },
  {
    "id": 17,
    "nom_francais": "Deldoul",
    "nom_arabe": "دﻟﺪول",
    "wilaya_id": 49,
    "daira": "Aougrout",
    "daira_ar": "أوقروت",
    "post_code": "49017",
    "daira_id": 484
  },
  {
    "id": 18,
    "nom_francais": "Sali",
    "nom_arabe": "سالى",
    "wilaya_id": 1,
    "daira": "Reggane",
    "daira_ar": "رقان",
    "post_code": "01018",
    "daira_id": 4
  },
  {
    "id": 19,
    "nom_francais": "Akabli",
    "nom_arabe": "أقبلي",
    "wilaya_id": 1,
    "daira": "Aoulef",
    "daira_ar": "أولف",
    "post_code": "01019",
    "daira_id": 2
  },
  {
    "id": 20,
    "nom_francais": "Metarfa",
    "nom_arabe": "المطارفة",
    "wilaya_id": 49,
    "daira": "Aougrout",
    "daira_ar": "أوقروت",
    "post_code": "49020",
    "daira_id": 484
  },
  {
    "id": 21,
    "nom_francais": "Ouled Ahmed Tammi",
    "nom_arabe": "أولاد أحمد تيمى",
    "wilaya_id": 1,
    "daira": "Adrar",
    "daira_ar": "أدرار",
    "post_code": "01021",
    "daira_id": 1
  },
  {
    "id": 22,
    "nom_francais": "Bouda",
    "nom_arabe": "بودة",
    "wilaya_id": 1,
    "daira": "Adrar",
    "daira_ar": "أدرار",
    "post_code": "01022",
    "daira_id": 1
  },
  {
    "id": 23,
    "nom_francais": "Aougrout",
    "nom_arabe": "أوقروت",
    "wilaya_id": 49,
    "daira": "Aougrout",
    "daira_ar": "أوقروت",
    "post_code": "49023",
    "daira_id": 484
  },
  {
    "id": 24,
    "nom_francais": "Talmine",
    "nom_arabe": "طالمين",
    "wilaya_id": 49,
    "daira": "Charouine",
    "daira_ar": "شروين",
    "post_code": "49024",
    "daira_id": 485
  },
  {
    "id": 25,
    "nom_francais": "Bordj Badji Mokhtar",
    "nom_arabe": "برج باجي مختار",
    "wilaya_id": 50,
    "daira": "Bordj Badji Mokhtar",
    "daira_ar": "برج باجي مختار",
    "post_code": "50025",
    "daira_id": 488
  },
  {
    "id": 26,
    "nom_francais": "Sbaa",
    "nom_arabe": "السبع",
    "wilaya_id": 1,
    "daira": "Tsabit",
    "daira_ar": "تسابيت",
    "post_code": "01026",
    "daira_id": 5
  },
  {
    "id": 27,
    "nom_francais": "Ouled Aissa",
    "nom_arabe": "أولاد عيسى",
    "wilaya_id": 49,
    "daira": "Charouine",
    "daira_ar": "شروين",
    "post_code": "49027",
    "daira_id": 485
  },
  {
    "id": 28,
    "nom_francais": "Timiaouine",
    "nom_arabe": "تيمياوين",
    "wilaya_id": 50,
    "daira": "Bordj Badji Mokhtar",
    "daira_ar": "برج باجي مختار",
    "post_code": "50028",
    "daira_id": 488
  },
  {
    "id": 29,
    "nom_francais": "Chlef",
    "nom_arabe": "الشلف",
    "wilaya_id": 2,
    "daira": "Chlef",
    "daira_ar": "الشلف",
    "post_code": "02001",
    "daira_id": 11
  },
  {
    "id": 30,
    "nom_francais": "Tenes",
    "nom_arabe": "تنس",
    "wilaya_id": 2,
    "daira": "Tenes",
    "daira_ar": "تنس",
    "post_code": "02002",
    "daira_id": 18
  },
  {
    "id": 31,
    "nom_francais": "Benairia",
    "nom_arabe": "بنايرية",
    "wilaya_id": 2,
    "daira": "Zeboudja",
    "daira_ar": "الزبوجة",
    "post_code": "02003",
    "daira_id": 19
  },
  {
    "id": 32,
    "nom_francais": "El Karimia",
    "nom_arabe": "الكريمية",
    "wilaya_id": 2,
    "daira": "El Karimia",
    "daira_ar": "الكريمية",
    "post_code": "02004",
    "daira_id": 12
  },
  {
    "id": 33,
    "nom_francais": "Tadjna",
    "nom_arabe": "تاجنة",
    "wilaya_id": 2,
    "daira": "Abou El Hassane",
    "daira_ar": "أبو الحسن",
    "post_code": "02005",
    "daira_id": 7
  },
  {
    "id": 34,
    "nom_francais": "Taougrite",
    "nom_arabe": "تاوقريت",
    "wilaya_id": 2,
    "daira": "Taougrit",
    "daira_ar": "تاوقريت",
    "post_code": "02006",
    "daira_id": 17
  },
  {
    "id": 35,
    "nom_francais": "Beni Haoua",
    "nom_arabe": "بني حواء",
    "wilaya_id": 2,
    "daira": "Beni Haoua",
    "daira_ar": "بني حواء",
    "post_code": "02007",
    "daira_id": 9
  },
  {
    "id": 36,
    "nom_francais": "Sobha",
    "nom_arabe": "صبحة",
    "wilaya_id": 2,
    "daira": "Boukadir",
    "daira_ar": "بوقادير",
    "post_code": "02008",
    "daira_id": 10
  },
  {
    "id": 37,
    "nom_francais": "Harchoun",
    "nom_arabe": "حرشون",
    "wilaya_id": 2,
    "daira": "El Karimia",
    "daira_ar": "الكريمية",
    "post_code": "02009",
    "daira_id": 12
  },
  {
    "id": 38,
    "nom_francais": "Ouled Fares",
    "nom_arabe": "أولاد فارس",
    "wilaya_id": 2,
    "daira": "Ouled Fares",
    "daira_ar": "أولاد فارس",
    "post_code": "02010",
    "daira_id": 16
  },
  {
    "id": 39,
    "nom_francais": "Sidi Akacha",
    "nom_arabe": "سيدي عكاشة",
    "wilaya_id": 2,
    "daira": "Tenes",
    "daira_ar": "تنس",
    "post_code": "02011",
    "daira_id": 18
  },
  {
    "id": 40,
    "nom_francais": "Boukadir",
    "nom_arabe": "بوقدير",
    "wilaya_id": 2,
    "daira": "Boukadir",
    "daira_ar": "بوقادير",
    "post_code": "02012",
    "daira_id": 10
  },
  {
    "id": 41,
    "nom_francais": "Beni Rached",
    "nom_arabe": "بني راشد",
    "wilaya_id": 2,
    "daira": "Oued Fodda",
    "daira_ar": "وادي الفضة",
    "post_code": "02013",
    "daira_id": 14
  },
  {
    "id": 42,
    "nom_francais": "Talassa",
    "nom_arabe": "تلعصة",
    "wilaya_id": 2,
    "daira": "Abou El Hassane",
    "daira_ar": "أبو الحسن",
    "post_code": "02014",
    "daira_id": 7
  },
  {
    "id": 43,
    "nom_francais": "Herenfa",
    "nom_arabe": "الهرنفة",
    "wilaya_id": 2,
    "daira": "Ain Merane",
    "daira_ar": "عين مران",
    "post_code": "02015",
    "daira_id": 8
  },
  {
    "id": 44,
    "nom_francais": "Oued Goussine",
    "nom_arabe": "واد ڨوسين",
    "wilaya_id": 2,
    "daira": "Beni Haoua",
    "daira_ar": "بني حواء",
    "post_code": "02016",
    "daira_id": 9
  },
  {
    "id": 45,
    "nom_francais": "Dahra",
    "nom_arabe": "الظهرة",
    "wilaya_id": 2,
    "daira": "Taougrit",
    "daira_ar": "تاوقريت",
    "post_code": "02017",
    "daira_id": 17
  },
  {
    "id": 46,
    "nom_francais": "Ouled Abbes",
    "nom_arabe": "أولاد عباس",
    "wilaya_id": 2,
    "daira": "Oued Fodda",
    "daira_ar": "وادي الفضة",
    "post_code": "02018",
    "daira_id": 14
  },
  {
    "id": 47,
    "nom_francais": "Sendjas",
    "nom_arabe": "سنجاس",
    "wilaya_id": 2,
    "daira": "Chlef",
    "daira_ar": "الشلف",
    "post_code": "02019",
    "daira_id": 11
  },
  {
    "id": 48,
    "nom_francais": "Zeboudja",
    "nom_arabe": "الزبوجة",
    "wilaya_id": 2,
    "daira": "Zeboudja",
    "daira_ar": "الزبوجة",
    "post_code": "02020",
    "daira_id": 19
  },
  {
    "id": 49,
    "nom_francais": "Oued Sly",
    "nom_arabe": "واد سلي",
    "wilaya_id": 2,
    "daira": "Boukadir",
    "daira_ar": "بوقادير",
    "post_code": "02021",
    "daira_id": 10
  },
  {
    "id": 50,
    "nom_francais": "Abou El Hassen",
    "nom_arabe": "أبو الحسن",
    "wilaya_id": 2,
    "daira": "Abou El Hassane",
    "daira_ar": "أبو الحسن",
    "post_code": "02022",
    "daira_id": 7
  },
  {
    "id": 51,
    "nom_francais": "El Marsa",
    "nom_arabe": "المرصى",
    "wilaya_id": 2,
    "daira": "El Marsa",
    "daira_ar": "المرسى",
    "post_code": "02023",
    "daira_id": 13
  },
  {
    "id": 52,
    "nom_francais": "Chettia",
    "nom_arabe": "الشطية",
    "wilaya_id": 2,
    "daira": "Ouled Fares",
    "daira_ar": "أولاد فارس",
    "post_code": "02024",
    "daira_id": 16
  },
  {
    "id": 53,
    "nom_francais": "Sidi Abderrahmane",
    "nom_arabe": "سيدي عبد الرحمان",
    "wilaya_id": 2,
    "daira": "Tenes",
    "daira_ar": "تنس",
    "post_code": "02025",
    "daira_id": 18
  },
  {
    "id": 54,
    "nom_francais": "Moussadek",
    "nom_arabe": "مصدق",
    "wilaya_id": 2,
    "daira": "El Marsa",
    "daira_ar": "المرسى",
    "post_code": "02026",
    "daira_id": 13
  },
  {
    "id": 55,
    "nom_francais": "El Hadjadj",
    "nom_arabe": "الحجاج",
    "wilaya_id": 2,
    "daira": "Ouled Ben Abdelkader",
    "daira_ar": "أولاد بن عبد القادر",
    "post_code": "02027",
    "daira_id": 15
  },
  {
    "id": 56,
    "nom_francais": "Labiod Medjadja",
    "nom_arabe": "الأبيض مجاجة",
    "wilaya_id": 2,
    "daira": "Ouled Fares",
    "daira_ar": "أولاد فارس",
    "post_code": "02028",
    "daira_id": 16
  },
  {
    "id": 57,
    "nom_francais": "Oued Fodda",
    "nom_arabe": "واد الفضة",
    "wilaya_id": 2,
    "daira": "Oued Fodda",
    "daira_ar": "وادي الفضة",
    "post_code": "02029",
    "daira_id": 14
  },
  {
    "id": 58,
    "nom_francais": "Ouled Ben Abdelkader",
    "nom_arabe": "أولاد بن عبد القادر",
    "wilaya_id": 2,
    "daira": "Ouled Ben Abdelkader",
    "daira_ar": "أولاد بن عبد القادر",
    "post_code": "02030",
    "daira_id": 15
  },
  {
    "id": 59,
    "nom_francais": "Bouzghaia",
    "nom_arabe": "بوزغاية",
    "wilaya_id": 2,
    "daira": "Zeboudja",
    "daira_ar": "الزبوجة",
    "post_code": "02031",
    "daira_id": 19
  },
  {
    "id": 60,
    "nom_francais": "Ain Merane",
    "nom_arabe": "عين مران",
    "wilaya_id": 2,
    "daira": "Ain Merane",
    "daira_ar": "عين مران",
    "post_code": "02032",
    "daira_id": 8
  },
  {
    "id": 61,
    "nom_francais": "Oum Drou",
    "nom_arabe": "أم الذروع",
    "wilaya_id": 2,
    "daira": "Chlef",
    "daira_ar": "الشلف",
    "post_code": "02033",
    "daira_id": 11
  },
  {
    "id": 62,
    "nom_francais": "Breira",
    "nom_arabe": "بريرة",
    "wilaya_id": 2,
    "daira": "Beni Haoua",
    "daira_ar": "بني حواء",
    "post_code": "02034",
    "daira_id": 9
  },
  {
    "id": 63,
    "nom_francais": "Beni Bouateb",
    "nom_arabe": "بني بوعتاب",
    "wilaya_id": 2,
    "daira": "El Karimia",
    "daira_ar": "الكريمية",
    "post_code": "02035",
    "daira_id": 12
  },
  {
    "id": 64,
    "nom_francais": "Laghouat",
    "nom_arabe": "الأغواط",
    "wilaya_id": 3,
    "daira": "Laghouat",
    "daira_ar": "الأغواط",
    "post_code": "03001",
    "daira_id": 23
  },
  {
    "id": 65,
    "nom_francais": "Ksar El Hirane",
    "nom_arabe": "قصر الحيران",
    "wilaya_id": 3,
    "daira": "Ksar El Hirane",
    "daira_ar": "قصر الحيران",
    "post_code": "03002",
    "daira_id": 22
  },
  {
    "id": 66,
    "nom_francais": "Benacer Ben Chohra",
    "nom_arabe": "بن ناصر بن شهرة",
    "wilaya_id": 3,
    "daira": "Ksar El Hirane",
    "daira_ar": "قصر الحيران",
    "post_code": "03003",
    "daira_id": 22
  },
  {
    "id": 67,
    "nom_francais": "Sidi Makhlouf",
    "nom_arabe": "سيدي مخلوف",
    "wilaya_id": 3,
    "daira": "Sidi Makhlouf",
    "daira_ar": "سيدي مخلوف",
    "post_code": "03004",
    "daira_id": 24
  },
  {
    "id": 68,
    "nom_francais": "Hassi Delaa",
    "nom_arabe": "حاسي دلاعة",
    "wilaya_id": 3,
    "daira": "Hassi R'mel",
    "daira_ar": "حاسي الرمل",
    "post_code": "03005",
    "daira_id": 21
  },
  {
    "id": 69,
    "nom_francais": "Hassi R'Mel",
    "nom_arabe": "حاسي الرمل",
    "wilaya_id": 3,
    "daira": "Hassi R'mel",
    "daira_ar": "حاسي الرمل",
    "post_code": "03006",
    "daira_id": 21
  },
  {
    "id": 70,
    "nom_francais": "Ain Mahdi",
    "nom_arabe": "عــيــن مـــاضــي",
    "wilaya_id": 3,
    "daira": "Ain Madhi",
    "daira_ar": "عين ماضي",
    "post_code": "03007",
    "daira_id": 20
  },
  {
    "id": 71,
    "nom_francais": "Tadjmout",
    "nom_arabe": "تاجموت",
    "wilaya_id": 3,
    "daira": "Ain Madhi",
    "daira_ar": "عين ماضي",
    "post_code": "03008",
    "daira_id": 20
  },
  {
    "id": 72,
    "nom_francais": "El Kheneg",
    "nom_arabe": "الخنق",
    "wilaya_id": 3,
    "daira": "Ain Madhi",
    "daira_ar": "عين ماضي",
    "post_code": "03009",
    "daira_id": 20
  },
  {
    "id": 73,
    "nom_francais": "Gueltat Sidi Saad",
    "nom_arabe": "قلتة سيدي سعد",
    "wilaya_id": 59,
    "daira": "Gueltat Sidi Saad",
    "daira_ar": "قتلة سيدي سعيد",
    "post_code": "59010",
    "daira_id": 513
  },
  {
    "id": 74,
    "nom_francais": "Ain Sidi Ali",
    "nom_arabe": "عين سيدي علي",
    "wilaya_id": 59,
    "daira": "Gueltat Sidi Saad",
    "daira_ar": "قتلة سيدي سعيد",
    "post_code": "59011",
    "daira_id": 513
  },
  {
    "id": 75,
    "nom_francais": "Beidha",
    "nom_arabe": "بيضاء",
    "wilaya_id": 59,
    "daira": null,
    "daira_ar": null,
    "post_code": "59012",
    "daira_id": null
  },
  {
    "id": 76,
    "nom_francais": "Brida",
    "nom_arabe": "بريدة",
    "wilaya_id": 59,
    "daira": "Brida",
    "daira_ar": "بريدة",
    "post_code": "59013",
    "daira_id": 511
  },
  {
    "id": 77,
    "nom_francais": "El Ghicha",
    "nom_arabe": "الغيشة",
    "wilaya_id": 59,
    "daira": "El Ghicha",
    "daira_ar": "الغيشة",
    "post_code": "59014",
    "daira_id": 512
  },
  {
    "id": 78,
    "nom_francais": "Hadj Mechri",
    "nom_arabe": "الحاج المشري",
    "wilaya_id": 59,
    "daira": "Brida",
    "daira_ar": "بريدة",
    "post_code": "03015",
    "daira_id": 511
  },
  {
    "id": 79,
    "nom_francais": "Sebgag",
    "nom_arabe": "سبقاق",
    "wilaya_id": 59,
    "daira": "Aflou",
    "daira_ar": "أفلو",
    "post_code": "59016",
    "daira_id": 510
  },
  {
    "id": 80,
    "nom_francais": "Taouiala",
    "nom_arabe": "تاويالة",
    "wilaya_id": 59,
    "daira": "Brida",
    "daira_ar": "بريدة",
    "post_code": "03017",
    "daira_id": 511
  },
  {
    "id": 81,
    "nom_francais": "Tadjrouna",
    "nom_arabe": "تاجرونة",
    "wilaya_id": 3,
    "daira": "Ain Madhi",
    "daira_ar": "عين ماضي",
    "post_code": "03018",
    "daira_id": 20
  },
  {
    "id": 82,
    "nom_francais": "Aflou",
    "nom_arabe": "أفلو",
    "wilaya_id": 59,
    "daira": "Aflou",
    "daira_ar": "أفلو",
    "post_code": "59019",
    "daira_id": 510
  },
  {
    "id": 83,
    "nom_francais": "El Assafia",
    "nom_arabe": "العسافية",
    "wilaya_id": 3,
    "daira": "Sidi Makhlouf",
    "daira_ar": "سيدي مخلوف",
    "post_code": "03020",
    "daira_id": 24
  },
  {
    "id": 84,
    "nom_francais": "Oued Morra",
    "nom_arabe": "وادي مرة",
    "wilaya_id": 59,
    "daira": "Oued Morra",
    "daira_ar": "وادي مرة",
    "post_code": "59021",
    "daira_id": 514
  },
  {
    "id": 85,
    "nom_francais": "Oued M'Zi",
    "nom_arabe": "وادي مزي",
    "wilaya_id": 59,
    "daira": "Oued Morra",
    "daira_ar": "وادي مرة",
    "post_code": "03022",
    "daira_id": 514
  },
  {
    "id": 86,
    "nom_francais": "El Haouaita",
    "nom_arabe": "الهوارية",
    "wilaya_id": 3,
    "daira": "Ain Madhi",
    "daira_ar": "عين ماضي",
    "post_code": "03023",
    "daira_id": 20
  },
  {
    "id": 87,
    "nom_francais": "Sidi Bouzid",
    "nom_arabe": "سيدي بوزيد",
    "wilaya_id": 59,
    "daira": null,
    "daira_ar": null,
    "post_code": "59024",
    "daira_id": null
  },
  {
    "id": 88,
    "nom_francais": "Oum El Bouaghi",
    "nom_arabe": "أم البواقي",
    "wilaya_id": 4,
    "daira": "Oum El Bouaghi",
    "daira_ar": "أم البواقي",
    "post_code": "04001",
    "daira_id": 34
  },
  {
    "id": 89,
    "nom_francais": "Ain Beida",
    "nom_arabe": "عين البيضاء",
    "wilaya_id": 4,
    "daira": "Ain Beida",
    "daira_ar": "عين البيضاء",
    "post_code": "04002",
    "daira_id": 26
  },
  {
    "id": 90,
    "nom_francais": "Ain M'lila",
    "nom_arabe": "عين مليلة",
    "wilaya_id": 4,
    "daira": "Ain M'lila",
    "daira_ar": "عين مليلة",
    "post_code": "04003",
    "daira_id": 29
  },
  {
    "id": 91,
    "nom_francais": "Behir Chergui",
    "nom_arabe": "بحير الشرڨي",
    "wilaya_id": 4,
    "daira": "Meskiana",
    "daira_ar": "مسكيانة",
    "post_code": "04004",
    "daira_id": 33
  },
  {
    "id": 92,
    "nom_francais": "El Amiria",
    "nom_arabe": "العامرية",
    "wilaya_id": 4,
    "daira": "Sigus",
    "daira_ar": "سيقوس",
    "post_code": "04005",
    "daira_id": 35
  },
  {
    "id": 93,
    "nom_francais": "Sigus",
    "nom_arabe": "سيقوس",
    "wilaya_id": 4,
    "daira": "Sigus",
    "daira_ar": "سيقوس",
    "post_code": "04006",
    "daira_id": 35
  },
  {
    "id": 94,
    "nom_francais": "El Belala",
    "nom_arabe": "البلالة",
    "wilaya_id": 4,
    "daira": "Meskiana",
    "daira_ar": "مسكيانة",
    "post_code": "04007",
    "daira_id": 33
  },
  {
    "id": 95,
    "nom_francais": "Ain Babouche",
    "nom_arabe": "عين بابوش",
    "wilaya_id": 4,
    "daira": "Ain Babouche",
    "daira_ar": "عين ببوش",
    "post_code": "04008",
    "daira_id": 25
  },
  {
    "id": 96,
    "nom_francais": "Berriche",
    "nom_arabe": "بريش",
    "wilaya_id": 4,
    "daira": "Ain Beida",
    "daira_ar": "عين البيضاء",
    "post_code": "04009",
    "daira_id": 26
  },
  {
    "id": 97,
    "nom_francais": "Ouled Hamla",
    "nom_arabe": "أولاد حملة",
    "wilaya_id": 4,
    "daira": "Ain M'lila",
    "daira_ar": "عين مليلة",
    "post_code": "04010",
    "daira_id": 29
  },
  {
    "id": 98,
    "nom_francais": "Dhala",
    "nom_arabe": "الضلعة",
    "wilaya_id": 4,
    "daira": "Dhalaa",
    "daira_ar": "الضلعة",
    "post_code": "04011",
    "daira_id": 30
  },
  {
    "id": 99,
    "nom_francais": "Ain Kercha",
    "nom_arabe": "عين كرشة",
    "wilaya_id": 4,
    "daira": "Ain Kercha",
    "daira_ar": "عين كرشة",
    "post_code": "04012",
    "daira_id": 28
  },
  {
    "id": 100,
    "nom_francais": "Hanchir Toumghani",
    "nom_arabe": "هنشير تومغني",
    "wilaya_id": 4,
    "daira": "Ain Kercha",
    "daira_ar": "عين كرشة",
    "post_code": "04013",
    "daira_id": 28
  },
  {
    "id": 101,
    "nom_francais": "El Djazia",
    "nom_arabe": "الجازيـــــــة",
    "wilaya_id": 4,
    "daira": "Dhalaa",
    "daira_ar": "الضلعة",
    "post_code": "04014",
    "daira_id": 30
  },
  {
    "id": 102,
    "nom_francais": "Ain Diss",
    "nom_arabe": "عين الديس",
    "wilaya_id": 4,
    "daira": "Ain Babouche",
    "daira_ar": "عين ببوش",
    "post_code": "04015",
    "daira_id": 25
  },
  {
    "id": 103,
    "nom_francais": "Fkirina",
    "nom_arabe": "فكرينة",
    "wilaya_id": 4,
    "daira": "F'kirina",
    "daira_ar": "فكيرينة",
    "post_code": "04016",
    "daira_id": 31
  },
  {
    "id": 104,
    "nom_francais": "Souk Naamane",
    "nom_arabe": "سوق نعمان",
    "wilaya_id": 4,
    "daira": "Souk Naamane",
    "daira_ar": "سوق نعمان",
    "post_code": "04017",
    "daira_id": 36
  },
  {
    "id": 105,
    "nom_francais": "Zorg",
    "nom_arabe": "الزرڨ",
    "wilaya_id": 4,
    "daira": "Ain Beida",
    "daira_ar": "عين البيضاء",
    "post_code": "04018",
    "daira_id": 26
  },
  {
    "id": 106,
    "nom_francais": "El Fedjoudj Boughrara Saoudi",
    "nom_arabe": "الفجوج بوغرارة سعودى",
    "wilaya_id": 4,
    "daira": "Ain Fekroun",
    "daira_ar": "عين فكرون",
    "post_code": "04019",
    "daira_id": 27
  },
  {
    "id": 107,
    "nom_francais": "Ouled Zouai",
    "nom_arabe": "أولاد زواي",
    "wilaya_id": 4,
    "daira": "Souk Naamane",
    "daira_ar": "سوق نعمان",
    "post_code": "04020",
    "daira_id": 36
  },
  {
    "id": 108,
    "nom_francais": "Bir Chouhada",
    "nom_arabe": "بئر الشهداء",
    "wilaya_id": 4,
    "daira": "Souk Naamane",
    "daira_ar": "سوق نعمان",
    "post_code": "04021",
    "daira_id": 36
  },
  {
    "id": 109,
    "nom_francais": "Ksar Sbahi",
    "nom_arabe": "قصر صباحي",
    "wilaya_id": 4,
    "daira": "Ksar Sbahi",
    "daira_ar": "قصر الصباحي",
    "post_code": "04022",
    "daira_id": 32
  },
  {
    "id": 110,
    "nom_francais": "Oued Nini",
    "nom_arabe": "وادي نيني",
    "wilaya_id": 4,
    "daira": "F'kirina",
    "daira_ar": "فكيرينة",
    "post_code": "04023",
    "daira_id": 31
  },
  {
    "id": 111,
    "nom_francais": "Meskiana",
    "nom_arabe": "مسكيانة",
    "wilaya_id": 4,
    "daira": "Meskiana",
    "daira_ar": "مسكيانة",
    "post_code": "04024",
    "daira_id": 33
  },
  {
    "id": 112,
    "nom_francais": "Ain Fekroune",
    "nom_arabe": "عين فكرون",
    "wilaya_id": 4,
    "daira": "Ain Fekroun",
    "daira_ar": "عين فكرون",
    "post_code": "04025",
    "daira_id": 27
  },
  {
    "id": 113,
    "nom_francais": "Rahia",
    "nom_arabe": "الراحية",
    "wilaya_id": 4,
    "daira": "Meskiana",
    "daira_ar": "مسكيانة",
    "post_code": "04026",
    "daira_id": 33
  },
  {
    "id": 114,
    "nom_francais": "Ain Zitoun",
    "nom_arabe": "عين الزيتون",
    "wilaya_id": 4,
    "daira": "Oum El Bouaghi",
    "daira_ar": "أم البواقي",
    "post_code": "04027",
    "daira_id": 34
  },
  {
    "id": 115,
    "nom_francais": "Ouled Gacem",
    "nom_arabe": "أولاد ڨاسم",
    "wilaya_id": 4,
    "daira": "Ain M'lila",
    "daira_ar": "عين مليلة",
    "post_code": "04028",
    "daira_id": 29
  },
  {
    "id": 116,
    "nom_francais": "El Harmilia",
    "nom_arabe": "الحرملية",
    "wilaya_id": 4,
    "daira": "Ain Kercha",
    "daira_ar": "عين كرشة",
    "post_code": "04029",
    "daira_id": 28
  },
  {
    "id": 117,
    "nom_francais": "Batna",
    "nom_arabe": "باتنة",
    "wilaya_id": 5,
    "daira": "Batna",
    "daira_ar": "باتنة",
    "post_code": "05001",
    "daira_id": 40
  },
  {
    "id": 118,
    "nom_francais": "Ghassira",
    "nom_arabe": "غسيرة",
    "wilaya_id": 5,
    "daira": "Tkout",
    "daira_ar": "تكوت",
    "post_code": "05002",
    "daira_id": 54
  },
  {
    "id": 119,
    "nom_francais": "Maafa",
    "nom_arabe": "معافة",
    "wilaya_id": 5,
    "daira": "Ain Touta",
    "daira_ar": "عين التوتة",
    "post_code": "05003",
    "daira_id": 38
  },
  {
    "id": 120,
    "nom_francais": "Merouana",
    "nom_arabe": "مروانة",
    "wilaya_id": 5,
    "daira": "Merouana",
    "daira_ar": "مروانة",
    "post_code": "05004",
    "daira_id": 46
  },
  {
    "id": 121,
    "nom_francais": "Seriana",
    "nom_arabe": "سريانة",
    "wilaya_id": 5,
    "daira": "Seriana",
    "daira_ar": "سريانة",
    "post_code": "05005",
    "daira_id": 50
  },
  {
    "id": 122,
    "nom_francais": "Menaa",
    "nom_arabe": "منعة",
    "wilaya_id": 5,
    "daira": "Menaa",
    "daira_ar": "منعة",
    "post_code": "05006",
    "daira_id": 45
  },
  {
    "id": 123,
    "nom_francais": "El Madher",
    "nom_arabe": "المعذر",
    "wilaya_id": 5,
    "daira": "El Madher",
    "daira_ar": "المعذر",
    "post_code": "60007",
    "daira_id": 43
  },
  {
    "id": 124,
    "nom_francais": "Tazoult",
    "nom_arabe": "تازولت",
    "wilaya_id": 5,
    "daira": "Tazoult",
    "daira_ar": "تازولت",
    "post_code": "05008",
    "daira_id": 51
  },
  {
    "id": 125,
    "nom_francais": "Ngaous",
    "nom_arabe": "نڨاوس",
    "wilaya_id": 5,
    "daira": "N'gaous",
    "daira_ar": "نقاوس",
    "post_code": "05009",
    "daira_id": 47
  },
  {
    "id": 126,
    "nom_francais": "Guigba",
    "nom_arabe": "قيقبة",
    "wilaya_id": 5,
    "daira": "Ras El Aioun",
    "daira_ar": "رأس العيون",
    "post_code": "05010",
    "daira_id": 49
  },
  {
    "id": 127,
    "nom_francais": "Inoughissen",
    "nom_arabe": "إينوغيسن",
    "wilaya_id": 5,
    "daira": "Ichemoul",
    "daira_ar": "إشمول",
    "post_code": "05011",
    "daira_id": 44
  },
  {
    "id": 128,
    "nom_francais": "Ouyoun El Assafir",
    "nom_arabe": "عيون العصافير",
    "wilaya_id": 5,
    "daira": "Tazoult",
    "daira_ar": "تازولت",
    "post_code": "05012",
    "daira_id": 51
  },
  {
    "id": 129,
    "nom_francais": "Djerma",
    "nom_arabe": "جرمة",
    "wilaya_id": 5,
    "daira": "El Madher",
    "daira_ar": "المعذر",
    "post_code": "60013",
    "daira_id": 43
  },
  {
    "id": 130,
    "nom_francais": "Bitam",
    "nom_arabe": "بيطام",
    "wilaya_id": 60,
    "daira": "Barika",
    "daira_ar": "بريكة",
    "post_code": "60014",
    "daira_id": 515
  },
  {
    "id": 131,
    "nom_francais": "Metkaouak",
    "nom_arabe": "عزيل عبد القادر",
    "wilaya_id": 60,
    "daira": null,
    "daira_ar": null,
    "post_code": "05015",
    "daira_id": null
  },
  {
    "id": 132,
    "nom_francais": "Arris",
    "nom_arabe": "اريس",
    "wilaya_id": 5,
    "daira": "Arris",
    "daira_ar": "أريس",
    "post_code": "05016",
    "daira_id": 39
  },
  {
    "id": 133,
    "nom_francais": "Kimmel",
    "nom_arabe": "كيمل",
    "wilaya_id": 5,
    "daira": "Tkout",
    "daira_ar": "تكوت",
    "post_code": "05017",
    "daira_id": 54
  },
  {
    "id": 134,
    "nom_francais": "Tilatou",
    "nom_arabe": "تيلاطو",
    "wilaya_id": 60,
    "daira": "Seggana",
    "daira_ar": "سقانة",
    "post_code": "05018",
    "daira_id": 517
  },
  {
    "id": 135,
    "nom_francais": "Ain Djasser",
    "nom_arabe": "عين جاسر",
    "wilaya_id": 5,
    "daira": "Ain Djasser",
    "daira_ar": "عين جاسر",
    "post_code": "05019",
    "daira_id": 37
  },
  {
    "id": 136,
    "nom_francais": "Ouled Selam",
    "nom_arabe": "أولاد سلام",
    "wilaya_id": 5,
    "daira": "Ras El Aioun",
    "daira_ar": "رأس العيون",
    "post_code": "05020",
    "daira_id": 49
  },
  {
    "id": 137,
    "nom_francais": "Tigherghar",
    "nom_arabe": "تيغرغار",
    "wilaya_id": 5,
    "daira": null,
    "daira_ar": null,
    "post_code": "05021",
    "daira_id": null
  },
  {
    "id": 138,
    "nom_francais": "Ain Yagout",
    "nom_arabe": "عين ياقوت",
    "wilaya_id": 5,
    "daira": "El Madher",
    "daira_ar": "المعذر",
    "post_code": "05022",
    "daira_id": 43
  },
  {
    "id": 139,
    "nom_francais": "Fesdis",
    "nom_arabe": "فسديس",
    "wilaya_id": 5,
    "daira": "Batna",
    "daira_ar": "باتنة",
    "post_code": "05023",
    "daira_id": 40
  },
  {
    "id": 140,
    "nom_francais": "Sefiane",
    "nom_arabe": "سفيان",
    "wilaya_id": 5,
    "daira": "N'gaous",
    "daira_ar": "نقاوس",
    "post_code": "05024",
    "daira_id": 47
  },
  {
    "id": 141,
    "nom_francais": "Rahbat",
    "nom_arabe": "الرحبات",
    "wilaya_id": 5,
    "daira": "Ras El Aioun",
    "daira_ar": "رأس العيون",
    "post_code": "05025",
    "daira_id": 49
  },
  {
    "id": 142,
    "nom_francais": "Tighanimine",
    "nom_arabe": "تيغانمين",
    "wilaya_id": 5,
    "daira": "Arris",
    "daira_ar": "أريس",
    "post_code": "05026",
    "daira_id": 39
  },
  {
    "id": 143,
    "nom_francais": "Lemsane",
    "nom_arabe": "لمسان",
    "wilaya_id": 5,
    "daira": null,
    "daira_ar": null,
    "post_code": "05027",
    "daira_id": null
  },
  {
    "id": 144,
    "nom_francais": "Ksar Belezma",
    "nom_arabe": "قصر بلازمة",
    "wilaya_id": 5,
    "daira": null,
    "daira_ar": null,
    "post_code": "05028",
    "daira_id": null
  },
  {
    "id": 145,
    "nom_francais": "Seggana",
    "nom_arabe": "سقانة",
    "wilaya_id": 60,
    "daira": "Seggana",
    "daira_ar": "سقانة",
    "post_code": "60029",
    "daira_id": 517
  },
  {
    "id": 146,
    "nom_francais": "Ichmoul",
    "nom_arabe": "ايشمول",
    "wilaya_id": 5,
    "daira": null,
    "daira_ar": null,
    "post_code": "05030",
    "daira_id": null
  },
  {
    "id": 147,
    "nom_francais": "Foum Toub",
    "nom_arabe": "فم الطوب",
    "wilaya_id": 5,
    "daira": "Ichemoul",
    "daira_ar": "إشمول",
    "post_code": "05031",
    "daira_id": 44
  },
  {
    "id": 148,
    "nom_francais": "Beni Foudhala El Hakania",
    "nom_arabe": "بنى فضالة الحقانية",
    "wilaya_id": 5,
    "daira": "Ain Touta",
    "daira_ar": "عين التوتة",
    "post_code": "05032",
    "daira_id": 38
  },
  {
    "id": 149,
    "nom_francais": "Oued El Ma",
    "nom_arabe": "واد الماء",
    "wilaya_id": 5,
    "daira": "Merouana",
    "daira_ar": "مروانة",
    "post_code": "05033",
    "daira_id": 46
  },
  {
    "id": 150,
    "nom_francais": "Talkhamt",
    "nom_arabe": "تالخمت",
    "wilaya_id": 5,
    "daira": "Ras El Aioun",
    "daira_ar": "رأس العيون",
    "post_code": "05034",
    "daira_id": 49
  },
  {
    "id": 151,
    "nom_francais": "Bouzina",
    "nom_arabe": "بوزينة",
    "wilaya_id": 5,
    "daira": "Bouzina",
    "daira_ar": "بوزينة",
    "post_code": "05035",
    "daira_id": 41
  },
  {
    "id": 152,
    "nom_francais": "Chemora",
    "nom_arabe": "الشمرة",
    "wilaya_id": 5,
    "daira": "Chemora",
    "daira_ar": "الشمرة",
    "post_code": "05036",
    "daira_id": 42
  },
  {
    "id": 153,
    "nom_francais": "Oued Chaaba",
    "nom_arabe": "واد الشعبة",
    "wilaya_id": 5,
    "daira": "Batna",
    "daira_ar": "باتنة",
    "post_code": "05037",
    "daira_id": 40
  },
  {
    "id": 154,
    "nom_francais": "Taxlent",
    "nom_arabe": "تاكسلانت",
    "wilaya_id": 5,
    "daira": "Ouled Si Slimane",
    "daira_ar": "أولاد سي سليمان",
    "post_code": "05038",
    "daira_id": 48
  },
  {
    "id": 155,
    "nom_francais": "Gosbat",
    "nom_arabe": "القصبات",
    "wilaya_id": 5,
    "daira": "Ras El Aioun",
    "daira_ar": "رأس العيون",
    "post_code": "05039",
    "daira_id": 49
  },
  {
    "id": 156,
    "nom_francais": "Ouled Aouf",
    "nom_arabe": "أولاد عوف",
    "wilaya_id": 5,
    "daira": "Ain Touta",
    "daira_ar": "عين التوتة",
    "post_code": "05040",
    "daira_id": 38
  },
  {
    "id": 157,
    "nom_francais": "Boumagueur",
    "nom_arabe": "بــومقر",
    "wilaya_id": 5,
    "daira": "N'gaous",
    "daira_ar": "نقاوس",
    "post_code": "05041",
    "daira_id": 47
  },
  {
    "id": 158,
    "nom_francais": "Barika",
    "nom_arabe": "بريكة",
    "wilaya_id": 60,
    "daira": "Barika",
    "daira_ar": "بريكة",
    "post_code": "60042",
    "daira_id": 515
  },
  {
    "id": 159,
    "nom_francais": "Djezzar",
    "nom_arabe": "الجزار",
    "wilaya_id": 60,
    "daira": "Djezzar",
    "daira_ar": "الجزار",
    "post_code": "05043",
    "daira_id": 516
  },
  {
    "id": 160,
    "nom_francais": "Tkout",
    "nom_arabe": "تكوت",
    "wilaya_id": 5,
    "daira": "Tkout",
    "daira_ar": "تكوت",
    "post_code": "05044",
    "daira_id": 54
  },
  {
    "id": 161,
    "nom_francais": "Ain Touta",
    "nom_arabe": "عين التوتة",
    "wilaya_id": 5,
    "daira": "Ain Touta",
    "daira_ar": "عين التوتة",
    "post_code": "05045",
    "daira_id": 38
  },
  {
    "id": 162,
    "nom_francais": "Hidoussa",
    "nom_arabe": "حيدوسة",
    "wilaya_id": 5,
    "daira": "Merouana",
    "daira_ar": "مروانة",
    "post_code": "05046",
    "daira_id": 46
  },
  {
    "id": 163,
    "nom_francais": "Teniet El Abed",
    "nom_arabe": "نية العابد",
    "wilaya_id": 5,
    "daira": "Theniet El Abed",
    "daira_ar": "ثنية العابد",
    "post_code": "05047",
    "daira_id": 52
  },
  {
    "id": 164,
    "nom_francais": "Oued Taga",
    "nom_arabe": "وادي الطاقة",
    "wilaya_id": 5,
    "daira": "Theniet El Abed",
    "daira_ar": "ثنية العابد",
    "post_code": "05048",
    "daira_id": 52
  },
  {
    "id": 165,
    "nom_francais": "Ouled Fadel",
    "nom_arabe": "أولاد فاضل",
    "wilaya_id": 5,
    "daira": "Timgad",
    "daira_ar": "تيمقاد",
    "post_code": "05049",
    "daira_id": 53
  },
  {
    "id": 166,
    "nom_francais": "Timgad",
    "nom_arabe": "تيمقاد",
    "wilaya_id": 5,
    "daira": "Timgad",
    "daira_ar": "تيمقاد",
    "post_code": "05050",
    "daira_id": 53
  },
  {
    "id": 167,
    "nom_francais": "Ras El Aioun",
    "nom_arabe": "رأس العيون",
    "wilaya_id": 5,
    "daira": "Ras El Aioun",
    "daira_ar": "رأس العيون",
    "post_code": "05051",
    "daira_id": 49
  },
  {
    "id": 168,
    "nom_francais": "Chir",
    "nom_arabe": "شير",
    "wilaya_id": 5,
    "daira": "Theniet El Abed",
    "daira_ar": "ثنية العابد",
    "post_code": "05052",
    "daira_id": 52
  },
  {
    "id": 169,
    "nom_francais": "Ouled Si Slimane",
    "nom_arabe": "أولاد سي سليمان",
    "wilaya_id": 5,
    "daira": "Ouled Si Slimane",
    "daira_ar": "أولاد سي سليمان",
    "post_code": "05053",
    "daira_id": 48
  },
  {
    "id": 170,
    "nom_francais": "Zanat El Beida",
    "nom_arabe": "زانة البيضاء",
    "wilaya_id": 5,
    "daira": null,
    "daira_ar": null,
    "post_code": "05054",
    "daira_id": null
  },
  {
    "id": 171,
    "nom_francais": "M'doukel",
    "nom_arabe": "أمدوكال",
    "wilaya_id": 60,
    "daira": "Barika",
    "daira_ar": "بريكة",
    "post_code": "05055",
    "daira_id": 515
  },
  {
    "id": 172,
    "nom_francais": "Ouled Ammar",
    "nom_arabe": "أولاد عمار",
    "wilaya_id": 60,
    "daira": "Djezzar",
    "daira_ar": "الجزار",
    "post_code": "60056",
    "daira_id": 516
  },
  {
    "id": 173,
    "nom_francais": "El Hassi",
    "nom_arabe": "الحاسي",
    "wilaya_id": 5,
    "daira": "Ain Djasser",
    "daira_ar": "عين جاسر",
    "post_code": "05057",
    "daira_id": 37
  },
  {
    "id": 174,
    "nom_francais": "Lazrou",
    "nom_arabe": "لازرو",
    "wilaya_id": 5,
    "daira": "Seriana",
    "daira_ar": "سريانة",
    "post_code": "05058",
    "daira_id": 50
  },
  {
    "id": 175,
    "nom_francais": "Boumia",
    "nom_arabe": "بومية",
    "wilaya_id": 5,
    "daira": "El Madher",
    "daira_ar": "المعذر",
    "post_code": "05059",
    "daira_id": 43
  },
  {
    "id": 176,
    "nom_francais": "Boulhilat",
    "nom_arabe": "بولهيلات",
    "wilaya_id": 5,
    "daira": "Chemora",
    "daira_ar": "الشمرة",
    "post_code": "05060",
    "daira_id": 42
  },
  {
    "id": 177,
    "nom_francais": "Larbaa",
    "nom_arabe": "الاربعاء",
    "wilaya_id": 5,
    "daira": "Bouzina",
    "daira_ar": "بوزينة",
    "post_code": "05061",
    "daira_id": 41
  },
  {
    "id": 178,
    "nom_francais": "Bejaia",
    "nom_arabe": "بجاية",
    "wilaya_id": 6,
    "daira": "Bejaia",
    "daira_ar": "بجاية",
    "post_code": "06001",
    "daira_id": 60
  },
  {
    "id": 179,
    "nom_francais": "Amizour",
    "nom_arabe": "اميزور",
    "wilaya_id": 6,
    "daira": "Amizour",
    "daira_ar": "أميزور",
    "post_code": "06002",
    "daira_id": 57
  },
  {
    "id": 180,
    "nom_francais": "Ferraoun",
    "nom_arabe": "فرعون",
    "wilaya_id": 6,
    "daira": "Amizour",
    "daira_ar": "أميزور",
    "post_code": "06003",
    "daira_id": 57
  },
  {
    "id": 181,
    "nom_francais": "Taourirt Ighil",
    "nom_arabe": "تاوريرت اغيل",
    "wilaya_id": 6,
    "daira": "Adekar",
    "daira_ar": "أدكار",
    "post_code": "06004",
    "daira_id": 55
  },
  {
    "id": 182,
    "nom_francais": "Chelata",
    "nom_arabe": "شلاطة",
    "wilaya_id": 6,
    "daira": "Akbou",
    "daira_ar": "أقبو",
    "post_code": "06005",
    "daira_id": 56
  },
  {
    "id": 183,
    "nom_francais": "Tamokra",
    "nom_arabe": "تامقرة",
    "wilaya_id": 6,
    "daira": "Akbou",
    "daira_ar": "أقبو",
    "post_code": "06006",
    "daira_id": 56
  },
  {
    "id": 184,
    "nom_francais": "Timzrit",
    "nom_arabe": "تيمزريت",
    "wilaya_id": 6,
    "daira": "Timezrit",
    "daira_ar": "تيمزريت",
    "post_code": "06007",
    "daira_id": 73
  },
  {
    "id": 185,
    "nom_francais": "Souk El Thenine",
    "nom_arabe": "ﺳﻮق اﻻﺛﻨﻴﻦ",
    "wilaya_id": 6,
    "daira": "Souk El Tenine",
    "daira_ar": "سوق الإثنين",
    "post_code": "06008",
    "daira_id": 70
  },
  {
    "id": 186,
    "nom_francais": "M'cisna",
    "nom_arabe": "مسيسنة",
    "wilaya_id": 6,
    "daira": "Seddouk",
    "daira_ar": "صدوق",
    "post_code": "06009",
    "daira_id": 68
  },
  {
    "id": 187,
    "nom_francais": "Thinabdher",
    "nom_arabe": "تينبذار",
    "wilaya_id": 6,
    "daira": "Sidi Aich",
    "daira_ar": "سيدي عيش",
    "post_code": "06010",
    "daira_id": 69
  },
  {
    "id": 188,
    "nom_francais": "Tichi",
    "nom_arabe": "تيشي",
    "wilaya_id": 6,
    "daira": "Tichy",
    "daira_ar": "تيشي",
    "post_code": "06011",
    "daira_id": 72
  },
  {
    "id": 189,
    "nom_francais": "Semaoun",
    "nom_arabe": "سمعون",
    "wilaya_id": 6,
    "daira": "Amizour",
    "daira_ar": "أميزور",
    "post_code": "06012",
    "daira_id": 57
  },
  {
    "id": 190,
    "nom_francais": "Kendira",
    "nom_arabe": "كنديرة",
    "wilaya_id": 6,
    "daira": "Barbacha",
    "daira_ar": "برباشة",
    "post_code": "06013",
    "daira_id": 59
  },
  {
    "id": 191,
    "nom_francais": "Tifra",
    "nom_arabe": "تيفرة",
    "wilaya_id": 6,
    "daira": "Sidi Aich",
    "daira_ar": "سيدي عيش",
    "post_code": "06014",
    "daira_id": 69
  },
  {
    "id": 192,
    "nom_francais": "Ighram",
    "nom_arabe": "إغرم",
    "wilaya_id": 6,
    "daira": "Akbou",
    "daira_ar": "أقبو",
    "post_code": "06015",
    "daira_id": 56
  },
  {
    "id": 193,
    "nom_francais": "Amalou",
    "nom_arabe": "امالو",
    "wilaya_id": 6,
    "daira": "Seddouk",
    "daira_ar": "صدوق",
    "post_code": "06016",
    "daira_id": 68
  },
  {
    "id": 194,
    "nom_francais": "Ighil Ali",
    "nom_arabe": "إغيل على",
    "wilaya_id": 6,
    "daira": "Ighil Ali",
    "daira_ar": "إغيل علي",
    "post_code": "06017",
    "daira_id": 66
  },
  {
    "id": 195,
    "nom_francais": "Ifelain Ilmathen",
    "nom_arabe": "افناين الماثن",
    "wilaya_id": 6,
    "daira": "El Kseur",
    "daira_ar": "القصر",
    "post_code": "06018",
    "daira_id": 64
  },
  {
    "id": 196,
    "nom_francais": "Toudja",
    "nom_arabe": "توجة",
    "wilaya_id": 6,
    "daira": "El Kseur",
    "daira_ar": "القصر",
    "post_code": "06019",
    "daira_id": 64
  },
  {
    "id": 197,
    "nom_francais": "Darguina",
    "nom_arabe": "درقينة",
    "wilaya_id": 6,
    "daira": "Darguina",
    "daira_ar": "درقينة",
    "post_code": "06020",
    "daira_id": 63
  },
  {
    "id": 198,
    "nom_francais": "Sidi Ayad",
    "nom_arabe": "سيدي عياد",
    "wilaya_id": 6,
    "daira": "Sidi Aich",
    "daira_ar": "سيدي عيش",
    "post_code": "06021",
    "daira_id": 69
  },
  {
    "id": 199,
    "nom_francais": "Aokas",
    "nom_arabe": "أوقاس",
    "wilaya_id": 6,
    "daira": "Aokas",
    "daira_ar": "أوقاس",
    "post_code": "06022",
    "daira_id": 58
  },
  {
    "id": 200,
    "nom_francais": "Ait Djellil",
    "nom_arabe": "آيث جليل",
    "wilaya_id": 6,
    "daira": "Amizour",
    "daira_ar": "أميزور",
    "post_code": "06023",
    "daira_id": 57
  },
  {
    "id": 201,
    "nom_francais": "Adekar",
    "nom_arabe": "آدكار",
    "wilaya_id": 6,
    "daira": "Adekar",
    "daira_ar": "أدكار",
    "post_code": "06024",
    "daira_id": 55
  },
  {
    "id": 202,
    "nom_francais": "Akbou",
    "nom_arabe": "أقبو",
    "wilaya_id": 6,
    "daira": "Akbou",
    "daira_ar": "أقبو",
    "post_code": "06025",
    "daira_id": 56
  },
  {
    "id": 203,
    "nom_francais": "Seddouk",
    "nom_arabe": "صدوق",
    "wilaya_id": 6,
    "daira": "Seddouk",
    "daira_ar": "صدوق",
    "post_code": "06026",
    "daira_id": 68
  },
  {
    "id": 204,
    "nom_francais": "Tazmalt",
    "nom_arabe": "تازمالت",
    "wilaya_id": 6,
    "daira": "Tazmalt",
    "daira_ar": "تازملت",
    "post_code": "06027",
    "daira_id": 71
  },
  {
    "id": 205,
    "nom_francais": "Ait R'zine",
    "nom_arabe": "آيت أرزين",
    "wilaya_id": 6,
    "daira": "Ighil Ali",
    "daira_ar": "إغيل علي",
    "post_code": "06028",
    "daira_id": 66
  },
  {
    "id": 206,
    "nom_francais": "Chemini",
    "nom_arabe": "شميني",
    "wilaya_id": 6,
    "daira": "Chemini",
    "daira_ar": "شميني",
    "post_code": "06029",
    "daira_id": 62
  },
  {
    "id": 207,
    "nom_francais": "Souk Oufella",
    "nom_arabe": "سوق أوفلة",
    "wilaya_id": 6,
    "daira": "Chemini",
    "daira_ar": "شميني",
    "post_code": "06030",
    "daira_id": 62
  },
  {
    "id": 208,
    "nom_francais": "Taskriout",
    "nom_arabe": "تاسقريوت",
    "wilaya_id": 6,
    "daira": "Darguina",
    "daira_ar": "درقينة",
    "post_code": "06031",
    "daira_id": 63
  },
  {
    "id": 209,
    "nom_francais": "Tibane",
    "nom_arabe": "طيبان",
    "wilaya_id": 6,
    "daira": "Chemini",
    "daira_ar": "شميني",
    "post_code": "06032",
    "daira_id": 62
  },
  {
    "id": 210,
    "nom_francais": "Tala Hamza",
    "nom_arabe": "ثالة حمزة",
    "wilaya_id": 6,
    "daira": "Tichy",
    "daira_ar": "تيشي",
    "post_code": "06033",
    "daira_id": 72
  },
  {
    "id": 211,
    "nom_francais": "Barbacha",
    "nom_arabe": "برباشة",
    "wilaya_id": 6,
    "daira": "Barbacha",
    "daira_ar": "برباشة",
    "post_code": "06034",
    "daira_id": 59
  },
  {
    "id": 212,
    "nom_francais": "Beni Ksila",
    "nom_arabe": "بنى كسيلة",
    "wilaya_id": 6,
    "daira": "Adekar",
    "daira_ar": "أدكار",
    "post_code": "06035",
    "daira_id": 55
  },
  {
    "id": 213,
    "nom_francais": "Ouzallaguen",
    "nom_arabe": "أوزلاقن",
    "wilaya_id": 6,
    "daira": "Ifri Ouzellaguene",
    "daira_ar": "إفري أوزلاقن",
    "post_code": "06036",
    "daira_id": 65
  },
  {
    "id": 214,
    "nom_francais": "Bouhamza",
    "nom_arabe": "بوحمزة",
    "wilaya_id": 6,
    "daira": "Seddouk",
    "daira_ar": "صدوق",
    "post_code": "06037",
    "daira_id": 68
  },
  {
    "id": 215,
    "nom_francais": "Beni Melikeche",
    "nom_arabe": "بنى مليكش",
    "wilaya_id": 6,
    "daira": "Tazmalt",
    "daira_ar": "تازملت",
    "post_code": "06038",
    "daira_id": 71
  },
  {
    "id": 216,
    "nom_francais": "Sidi Aich",
    "nom_arabe": "سيدي عيش",
    "wilaya_id": 6,
    "daira": "Sidi Aich",
    "daira_ar": "سيدي عيش",
    "post_code": "06039",
    "daira_id": 69
  },
  {
    "id": 217,
    "nom_francais": "El Kseur",
    "nom_arabe": "القصر",
    "wilaya_id": 6,
    "daira": "El Kseur",
    "daira_ar": "القصر",
    "post_code": "06040",
    "daira_id": 64
  },
  {
    "id": 218,
    "nom_francais": "Melbou",
    "nom_arabe": "ملبو",
    "wilaya_id": 6,
    "daira": "Souk El Tenine",
    "daira_ar": "سوق الإثنين",
    "post_code": "06041",
    "daira_id": 70
  },
  {
    "id": 219,
    "nom_francais": "Akfadou",
    "nom_arabe": "اكفادو",
    "wilaya_id": 6,
    "daira": "Chemini",
    "daira_ar": "شميني",
    "post_code": "06042",
    "daira_id": 62
  },
  {
    "id": 220,
    "nom_francais": "Leflaye",
    "nom_arabe": "لفلاى",
    "wilaya_id": 6,
    "daira": "Sidi Aich",
    "daira_ar": "سيدي عيش",
    "post_code": "06043",
    "daira_id": 69
  },
  {
    "id": 221,
    "nom_francais": "Kherrata",
    "nom_arabe": "خراطة",
    "wilaya_id": 6,
    "daira": "Kherrata",
    "daira_ar": "خراطة",
    "post_code": "06044",
    "daira_id": 67
  },
  {
    "id": 222,
    "nom_francais": "Draa Kaid",
    "nom_arabe": "ذراع القايد",
    "wilaya_id": 6,
    "daira": "Kherrata",
    "daira_ar": "خراطة",
    "post_code": "06045",
    "daira_id": 67
  },
  {
    "id": 223,
    "nom_francais": "Tamridjet",
    "nom_arabe": "تامريجت",
    "wilaya_id": 6,
    "daira": "Souk El Tenine",
    "daira_ar": "سوق الإثنين",
    "post_code": "06046",
    "daira_id": 70
  },
  {
    "id": 224,
    "nom_francais": "Ait Smail",
    "nom_arabe": "آيت سماعيل",
    "wilaya_id": 6,
    "daira": "Darguina",
    "daira_ar": "درقينة",
    "post_code": "06047",
    "daira_id": 63
  },
  {
    "id": 225,
    "nom_francais": "Boukhelifa",
    "nom_arabe": "بوخليفة",
    "wilaya_id": 6,
    "daira": "Tichy",
    "daira_ar": "تيشي",
    "post_code": "06048",
    "daira_id": 72
  },
  {
    "id": 226,
    "nom_francais": "Tizi N'berber",
    "nom_arabe": "تيزى نبربر",
    "wilaya_id": 6,
    "daira": "Aokas",
    "daira_ar": "أوقاس",
    "post_code": "06049",
    "daira_id": 58
  },
  {
    "id": 227,
    "nom_francais": "Beni Maouch",
    "nom_arabe": "بني معوش",
    "wilaya_id": 6,
    "daira": "Beni Maouche",
    "daira_ar": "بني معوش",
    "post_code": "06050",
    "daira_id": 61
  },
  {
    "id": 228,
    "nom_francais": "Oued Ghir",
    "nom_arabe": "وادي غير",
    "wilaya_id": 6,
    "daira": "Bejaia",
    "daira_ar": "بجاية",
    "post_code": "06051",
    "daira_id": 60
  },
  {
    "id": 229,
    "nom_francais": "Boudjellil",
    "nom_arabe": "بوجليل",
    "wilaya_id": 6,
    "daira": "Tazmalt",
    "daira_ar": "تازملت",
    "post_code": "06052",
    "daira_id": 71
  },
  {
    "id": 230,
    "nom_francais": "Biskra",
    "nom_arabe": "بسكرة",
    "wilaya_id": 7,
    "daira": "Biskra",
    "daira_ar": "بسكرة",
    "post_code": "07001",
    "daira_id": 74
  },
  {
    "id": 231,
    "nom_francais": "Oumache",
    "nom_arabe": "أوماش",
    "wilaya_id": 7,
    "daira": "Ourlal",
    "daira_ar": "أورلال",
    "post_code": "07002",
    "daira_id": 77
  },
  {
    "id": 232,
    "nom_francais": "Branis",
    "nom_arabe": "البرانس",
    "wilaya_id": 61,
    "daira": "Djemorah",
    "daira_ar": "جمورة",
    "post_code": "61003",
    "daira_id": 518
  },
  {
    "id": 233,
    "nom_francais": "Chetma",
    "nom_arabe": "شتمة",
    "wilaya_id": 7,
    "daira": "Sidi Okba",
    "daira_ar": "سيدي عقبة",
    "post_code": "07004",
    "daira_id": 78
  },
  {
    "id": 234,
    "nom_francais": "Ouled Djellal",
    "nom_arabe": "أولاد جلال",
    "wilaya_id": 51,
    "daira": "Ouled Djellal",
    "daira_ar": "أولاد جلال",
    "post_code": "51005",
    "daira_id": 489
  },
  {
    "id": 235,
    "nom_francais": "Ras El Miaad",
    "nom_arabe": "راس الميعاد",
    "wilaya_id": 51,
    "daira": "Sidi Khaled",
    "daira_ar": "سيدي  خالد",
    "post_code": "51006",
    "daira_id": 490
  },
  {
    "id": 236,
    "nom_francais": "Besbes",
    "nom_arabe": "البسباس",
    "wilaya_id": 51,
    "daira": "Sidi Khaled",
    "daira_ar": "سيدي  خالد",
    "post_code": "51007",
    "daira_id": 490
  },
  {
    "id": 237,
    "nom_francais": "Sidi Khaled",
    "nom_arabe": "سيدي خالد",
    "wilaya_id": 51,
    "daira": "Sidi Khaled",
    "daira_ar": "سيدي  خالد",
    "post_code": "51008",
    "daira_id": 490
  },
  {
    "id": 238,
    "nom_francais": "Doucen",
    "nom_arabe": "الدوسن",
    "wilaya_id": 51,
    "daira": "Ouled Djellal",
    "daira_ar": "أولاد جلال",
    "post_code": "51009",
    "daira_id": 489
  },
  {
    "id": 239,
    "nom_francais": "Ech Chaiba",
    "nom_arabe": "أولاد رحمة",
    "wilaya_id": 51,
    "daira": "Ouled Djellal",
    "daira_ar": "أولاد جلال",
    "post_code": "07010",
    "daira_id": 489
  },
  {
    "id": 240,
    "nom_francais": "Sidi Okba",
    "nom_arabe": "سيدي عقبة",
    "wilaya_id": 7,
    "daira": "Sidi Okba",
    "daira_ar": "سيدي عقبة",
    "post_code": "07011",
    "daira_id": 78
  },
  {
    "id": 241,
    "nom_francais": "Mchouneche",
    "nom_arabe": "مشونش",
    "wilaya_id": 7,
    "daira": "Mechouneche",
    "daira_ar": "مشونش",
    "post_code": "07012",
    "daira_id": 76
  },
  {
    "id": 242,
    "nom_francais": "El Haouch",
    "nom_arabe": "الحوش",
    "wilaya_id": 7,
    "daira": "Sidi Okba",
    "daira_ar": "سيدي عقبة",
    "post_code": "07013",
    "daira_id": 78
  },
  {
    "id": 243,
    "nom_francais": "Ain Naga",
    "nom_arabe": "عين الناقة",
    "wilaya_id": 7,
    "daira": "Sidi Okba",
    "daira_ar": "سيدي عقبة",
    "post_code": "07014",
    "daira_id": 78
  },
  {
    "id": 244,
    "nom_francais": "Zeribet El Oued",
    "nom_arabe": "زريبة الوادي",
    "wilaya_id": 7,
    "daira": "Zeribet El Oued",
    "daira_ar": "زريبة الوادي",
    "post_code": "07015",
    "daira_id": 80
  },
  {
    "id": 245,
    "nom_francais": "El Feidh",
    "nom_arabe": "الفيض",
    "wilaya_id": 7,
    "daira": "Zeribet El Oued",
    "daira_ar": "زريبة الوادي",
    "post_code": "07016",
    "daira_id": 80
  },
  {
    "id": 246,
    "nom_francais": "El Kantara",
    "nom_arabe": "القنطرة",
    "wilaya_id": 61,
    "daira": "El Kantara",
    "daira_ar": "القنطرة",
    "post_code": "61017",
    "daira_id": 519
  },
  {
    "id": 247,
    "nom_francais": "Ain Zaatout",
    "nom_arabe": "عين زعطوط",
    "wilaya_id": 61,
    "daira": "El Kantara",
    "daira_ar": "القنطرة",
    "post_code": "61018",
    "daira_id": 519
  },
  {
    "id": 248,
    "nom_francais": "El Outaya",
    "nom_arabe": "لوطاية",
    "wilaya_id": 61,
    "daira": "El Outaya",
    "daira_ar": "الوطاية",
    "post_code": "61019",
    "daira_id": 520
  },
  {
    "id": 249,
    "nom_francais": "Djemorah",
    "nom_arabe": "جمورة",
    "wilaya_id": 61,
    "daira": "Djemorah",
    "daira_ar": "جمورة",
    "post_code": "07020",
    "daira_id": 518
  },
  {
    "id": 250,
    "nom_francais": "Tolga",
    "nom_arabe": "طولقة",
    "wilaya_id": 7,
    "daira": "Tolga",
    "daira_ar": "طولقة",
    "post_code": "07021",
    "daira_id": 79
  },
  {
    "id": 251,
    "nom_francais": "Lioua",
    "nom_arabe": "لواء",
    "wilaya_id": 7,
    "daira": "Ourlal",
    "daira_ar": "أورلال",
    "post_code": "07022",
    "daira_id": 77
  },
  {
    "id": 252,
    "nom_francais": "Lichana",
    "nom_arabe": "لشانة",
    "wilaya_id": 7,
    "daira": "Tolga",
    "daira_ar": "طولقة",
    "post_code": "07023",
    "daira_id": 79
  },
  {
    "id": 253,
    "nom_francais": "Ourlal",
    "nom_arabe": "أورلال",
    "wilaya_id": 7,
    "daira": "Ourlal",
    "daira_ar": "أورلال",
    "post_code": "07024",
    "daira_id": 77
  },
  {
    "id": 254,
    "nom_francais": "M'lili",
    "nom_arabe": "مليلي",
    "wilaya_id": 7,
    "daira": "Ourlal",
    "daira_ar": "أورلال",
    "post_code": "07025",
    "daira_id": 77
  },
  {
    "id": 255,
    "nom_francais": "Foughala",
    "nom_arabe": "فوغالة",
    "wilaya_id": 7,
    "daira": "Foughala",
    "daira_ar": "فوغالة",
    "post_code": "07026",
    "daira_id": 75
  },
  {
    "id": 256,
    "nom_francais": "Bordj Ben Azzouz",
    "nom_arabe": "برج بن عزوز",
    "wilaya_id": 7,
    "daira": "Tolga",
    "daira_ar": "طولقة",
    "post_code": "07027",
    "daira_id": 79
  },
  {
    "id": 257,
    "nom_francais": "M'ziraa",
    "nom_arabe": "مزيرعة",
    "wilaya_id": 7,
    "daira": "Zeribet El Oued",
    "daira_ar": "زريبة الوادي",
    "post_code": "07028",
    "daira_id": 80
  },
  {
    "id": 258,
    "nom_francais": "Bouchagroun",
    "nom_arabe": "بوشقرون",
    "wilaya_id": 7,
    "daira": null,
    "daira_ar": null,
    "post_code": "07029",
    "daira_id": null
  },
  {
    "id": 259,
    "nom_francais": "Mekhadma",
    "nom_arabe": "مخادمة",
    "wilaya_id": 7,
    "daira": "Ourlal",
    "daira_ar": "أورلال",
    "post_code": "07030",
    "daira_id": 77
  },
  {
    "id": 260,
    "nom_francais": "El Ghrous",
    "nom_arabe": "الغروس",
    "wilaya_id": 7,
    "daira": "Foughala",
    "daira_ar": "فوغالة",
    "post_code": "07031",
    "daira_id": 75
  },
  {
    "id": 261,
    "nom_francais": "El Hadjab",
    "nom_arabe": "الحاجب",
    "wilaya_id": 7,
    "daira": "Biskra",
    "daira_ar": "بسكرة",
    "post_code": "07032",
    "daira_id": 74
  },
  {
    "id": 262,
    "nom_francais": "Khanguet Sidinadji",
    "nom_arabe": "خنڨة سيدي ناجي",
    "wilaya_id": 7,
    "daira": null,
    "daira_ar": null,
    "post_code": "07033",
    "daira_id": null
  },
  {
    "id": 263,
    "nom_francais": "Bechar",
    "nom_arabe": "بشار",
    "wilaya_id": 8,
    "daira": "Bechar",
    "daira_ar": "بشار",
    "post_code": "08001",
    "daira_id": 82
  },
  {
    "id": 264,
    "nom_francais": "Erg Ferradj",
    "nom_arabe": "عرق فراج",
    "wilaya_id": 8,
    "daira": "Abadla",
    "daira_ar": "العبادلة",
    "post_code": "08002",
    "daira_id": 81
  },
  {
    "id": 265,
    "nom_francais": "Ouled Khoudir",
    "nom_arabe": "أولاد خدير",
    "wilaya_id": 52,
    "daira": "Ouled Khodeir",
    "daira_ar": "أولاد خضير",
    "post_code": "52003",
    "daira_id": 495
  },
  {
    "id": 266,
    "nom_francais": "Meridja",
    "nom_arabe": "مريجة",
    "wilaya_id": 8,
    "daira": "Kenadsa",
    "daira_ar": "القنادسة",
    "post_code": "08004",
    "daira_id": 84
  },
  {
    "id": 267,
    "nom_francais": "Timoudi",
    "nom_arabe": "تيمودى",
    "wilaya_id": 52,
    "daira": "Kerzaz",
    "daira_ar": "كرزاز",
    "post_code": "52005",
    "daira_id": 494
  },
  {
    "id": 268,
    "nom_francais": "Lahmar",
    "nom_arabe": "لحمر",
    "wilaya_id": 8,
    "daira": "Lahmar",
    "daira_ar": "لحمر",
    "post_code": "08006",
    "daira_id": 85
  },
  {
    "id": 269,
    "nom_francais": "Beni Abbes",
    "nom_arabe": "بني عباس",
    "wilaya_id": 52,
    "daira": "Beni Abbes",
    "daira_ar": "بني عباس",
    "post_code": "52007",
    "daira_id": 491
  },
  {
    "id": 270,
    "nom_francais": "Beni Ikhlef",
    "nom_arabe": "بني يخلف",
    "wilaya_id": 52,
    "daira": "Kerzaz",
    "daira_ar": "كرزاز",
    "post_code": "08008",
    "daira_id": 494
  },
  {
    "id": 271,
    "nom_francais": "Mechraa Houari Boumedienne",
    "nom_arabe": "مشرع ھوارى بومدين",
    "wilaya_id": 8,
    "daira": "Abadla",
    "daira_ar": "العبادلة",
    "post_code": "08009",
    "daira_id": 81
  },
  {
    "id": 272,
    "nom_francais": "Kenedsa",
    "nom_arabe": "القنادسة",
    "wilaya_id": 8,
    "daira": "Kenadsa",
    "daira_ar": "القنادسة",
    "post_code": "08010",
    "daira_id": 84
  },
  {
    "id": 273,
    "nom_francais": "Igli",
    "nom_arabe": "إقلي",
    "wilaya_id": 52,
    "daira": "Igli",
    "daira_ar": "إقلي",
    "post_code": "52011",
    "daira_id": 493
  },
  {
    "id": 274,
    "nom_francais": "Tabalbala",
    "nom_arabe": "تبلبالة",
    "wilaya_id": 8,
    "daira": "Tabelbala",
    "daira_ar": "تبلبالة",
    "post_code": "08012",
    "daira_id": 86
  },
  {
    "id": 275,
    "nom_francais": "Taghit",
    "nom_arabe": "تــــاغـيــث",
    "wilaya_id": 8,
    "daira": "Taghit",
    "daira_ar": "تاغيت",
    "post_code": "08013",
    "daira_id": 87
  },
  {
    "id": 276,
    "nom_francais": "El Ouata",
    "nom_arabe": "الوطى",
    "wilaya_id": 52,
    "daira": "El Ouata",
    "daira_ar": "الواتة",
    "post_code": "52014",
    "daira_id": 492
  },
  {
    "id": 277,
    "nom_francais": "Boukais",
    "nom_arabe": "بوكايس",
    "wilaya_id": 8,
    "daira": "Lahmar",
    "daira_ar": "لحمر",
    "post_code": "08015",
    "daira_id": 85
  },
  {
    "id": 278,
    "nom_francais": "Mogheul",
    "nom_arabe": "موغل",
    "wilaya_id": 8,
    "daira": "Lahmar",
    "daira_ar": "لحمر",
    "post_code": "08016",
    "daira_id": 85
  },
  {
    "id": 279,
    "nom_francais": "Abadla",
    "nom_arabe": "العبادلة",
    "wilaya_id": 8,
    "daira": "Abadla",
    "daira_ar": "العبادلة",
    "post_code": "08017",
    "daira_id": 81
  },
  {
    "id": 280,
    "nom_francais": "Kerzaz",
    "nom_arabe": "كرزاز",
    "wilaya_id": 52,
    "daira": "Kerzaz",
    "daira_ar": "كرزاز",
    "post_code": "52018",
    "daira_id": 494
  },
  {
    "id": 281,
    "nom_francais": "Ksabi",
    "nom_arabe": "قصابى",
    "wilaya_id": 52,
    "daira": "Ouled Khodeir",
    "daira_ar": "أولاد خضير",
    "post_code": "52019",
    "daira_id": 495
  },
  {
    "id": 282,
    "nom_francais": "Tamtert",
    "nom_arabe": "تامترت",
    "wilaya_id": 52,
    "daira": "Beni Abbes",
    "daira_ar": "بني عباس",
    "post_code": "08020",
    "daira_id": 491
  },
  {
    "id": 283,
    "nom_francais": "Beni Ounif",
    "nom_arabe": "بني ونيف",
    "wilaya_id": 8,
    "daira": "Beni Ounif",
    "daira_ar": "بني ونيف",
    "post_code": "08021",
    "daira_id": 83
  },
  {
    "id": 284,
    "nom_francais": "Blida",
    "nom_arabe": "البليدة‎",
    "wilaya_id": 9,
    "daira": "Blida",
    "daira_ar": "البليدة",
    "post_code": "09001",
    "daira_id": 88
  },
  {
    "id": 285,
    "nom_francais": "Chebli",
    "nom_arabe": "الشبلي",
    "wilaya_id": 9,
    "daira": "Bouinan",
    "daira_ar": "بوعينان",
    "post_code": "09002",
    "daira_id": 91
  },
  {
    "id": 286,
    "nom_francais": "Bouinan",
    "nom_arabe": "بوعينان",
    "wilaya_id": 9,
    "daira": "Bouinan",
    "daira_ar": "بوعينان",
    "post_code": "09003",
    "daira_id": 91
  },
  {
    "id": 287,
    "nom_francais": "Oued El Alleug",
    "nom_arabe": "واد العلايڨ",
    "wilaya_id": 9,
    "daira": "Oued El Alleug",
    "daira_ar": "وادي العلايق",
    "post_code": "09004",
    "daira_id": 96
  },
  {
    "id": 288,
    "nom_francais": "Ouled Yaich",
    "nom_arabe": "اولاد يعيش",
    "wilaya_id": 9,
    "daira": "Ouled Yaich",
    "daira_ar": "أولاد يعيش",
    "post_code": "09007",
    "daira_id": 97
  },
  {
    "id": 289,
    "nom_francais": "Chrea",
    "nom_arabe": "الشريعة",
    "wilaya_id": 9,
    "daira": "Ouled Yaich",
    "daira_ar": "أولاد يعيش",
    "post_code": "09008",
    "daira_id": 97
  },
  {
    "id": 290,
    "nom_francais": "El Affroun",
    "nom_arabe": "العفرون",
    "wilaya_id": 9,
    "daira": "El Affroun",
    "daira_ar": "العفرون",
    "post_code": "09010",
    "daira_id": 92
  },
  {
    "id": 291,
    "nom_francais": "Chiffa",
    "nom_arabe": "الشفة",
    "wilaya_id": 9,
    "daira": "Mouzaia",
    "daira_ar": "موزاية",
    "post_code": "09011",
    "daira_id": 95
  },
  {
    "id": 292,
    "nom_francais": "Hammam Melouane",
    "nom_arabe": "حمام ملوان",
    "wilaya_id": 9,
    "daira": "Bougara",
    "daira_ar": "بوقرة",
    "post_code": "09012",
    "daira_id": 90
  },
  {
    "id": 293,
    "nom_francais": "Ben Khlil",
    "nom_arabe": "بني خليل",
    "wilaya_id": 9,
    "daira": "Oued El Alleug",
    "daira_ar": "وادي العلايق",
    "post_code": "09013",
    "daira_id": 96
  },
  {
    "id": 294,
    "nom_francais": "Soumaa",
    "nom_arabe": "صومعة",
    "wilaya_id": 9,
    "daira": "Boufarik",
    "daira_ar": "بوفاريك",
    "post_code": "09014",
    "daira_id": 89
  },
  {
    "id": 295,
    "nom_francais": "Mouzaia",
    "nom_arabe": "موزاية",
    "wilaya_id": 9,
    "daira": "Mouzaia",
    "daira_ar": "موزاية",
    "post_code": "09016",
    "daira_id": 95
  },
  {
    "id": 296,
    "nom_francais": "Souhane",
    "nom_arabe": "صوحان",
    "wilaya_id": 9,
    "daira": "Larbaa",
    "daira_ar": "الأربعاء",
    "post_code": "09017",
    "daira_id": 93
  },
  {
    "id": 297,
    "nom_francais": "Meftah",
    "nom_arabe": "مفتاح",
    "wilaya_id": 9,
    "daira": "Meftah",
    "daira_ar": "مفتاح",
    "post_code": "09018",
    "daira_id": 94
  },
  {
    "id": 298,
    "nom_francais": "Ouled Selama",
    "nom_arabe": "أولاد سلامة",
    "wilaya_id": 9,
    "daira": "Bougara",
    "daira_ar": "بوقرة",
    "post_code": "09019",
    "daira_id": 90
  },
  {
    "id": 299,
    "nom_francais": "Boufarik",
    "nom_arabe": "بوفاريك",
    "wilaya_id": 9,
    "daira": "Boufarik",
    "daira_ar": "بوفاريك",
    "post_code": "09020",
    "daira_id": 89
  },
  {
    "id": 300,
    "nom_francais": "Larbaa",
    "nom_arabe": "الاربعاء",
    "wilaya_id": 9,
    "daira": "Larbaa",
    "daira_ar": "الأربعاء",
    "post_code": "09021",
    "daira_id": 93
  },
  {
    "id": 301,
    "nom_francais": "Oued Djer",
    "nom_arabe": "واد جر",
    "wilaya_id": 9,
    "daira": "El Affroun",
    "daira_ar": "العفرون",
    "post_code": "09022",
    "daira_id": 92
  },
  {
    "id": 302,
    "nom_francais": "Beni Tamou",
    "nom_arabe": "بني تامو",
    "wilaya_id": 9,
    "daira": "Oued El Alleug",
    "daira_ar": "وادي العلايق",
    "post_code": "09023",
    "daira_id": 96
  },
  {
    "id": 303,
    "nom_francais": "Bouarfa",
    "nom_arabe": "بوعرفة",
    "wilaya_id": 9,
    "daira": "Blida",
    "daira_ar": "البليدة",
    "post_code": "09024",
    "daira_id": 88
  },
  {
    "id": 304,
    "nom_francais": "Beni Mered",
    "nom_arabe": "بني مراد",
    "wilaya_id": 9,
    "daira": "Ouled Yaich",
    "daira_ar": "أولاد يعيش",
    "post_code": "09025",
    "daira_id": 97
  },
  {
    "id": 305,
    "nom_francais": "Bougara",
    "nom_arabe": "بوڨرة",
    "wilaya_id": 9,
    "daira": "Bougara",
    "daira_ar": "بوقرة",
    "post_code": "09026",
    "daira_id": 90
  },
  {
    "id": 306,
    "nom_francais": "Guerrouaou",
    "nom_arabe": "ڨرواو",
    "wilaya_id": 9,
    "daira": "Boufarik",
    "daira_ar": "بوفاريك",
    "post_code": "09027",
    "daira_id": 89
  },
  {
    "id": 307,
    "nom_francais": "Ain Romana",
    "nom_arabe": "عين الرمانة",
    "wilaya_id": 9,
    "daira": "Mouzaia",
    "daira_ar": "موزاية",
    "post_code": "09028",
    "daira_id": 95
  },
  {
    "id": 308,
    "nom_francais": "Djebabra",
    "nom_arabe": "جبابرة",
    "wilaya_id": 9,
    "daira": "Meftah",
    "daira_ar": "مفتاح",
    "post_code": "09029",
    "daira_id": 94
  },
  {
    "id": 309,
    "nom_francais": "Bouira",
    "nom_arabe": "البويرة",
    "wilaya_id": 10,
    "daira": "Bouira",
    "daira_ar": "البويرة",
    "post_code": "10001",
    "daira_id": 102
  },
  {
    "id": 310,
    "nom_francais": "El Asnam",
    "nom_arabe": "الأصنام",
    "wilaya_id": 10,
    "daira": "Bechloul",
    "daira_ar": "بشلول",
    "post_code": "10002",
    "daira_id": 99
  },
  {
    "id": 311,
    "nom_francais": "Guerrouma",
    "nom_arabe": "قرومة",
    "wilaya_id": 10,
    "daira": "Lakhdaria",
    "daira_ar": "الأخضرية",
    "post_code": "10003",
    "daira_id": 106
  },
  {
    "id": 312,
    "nom_francais": "Souk El Khemis",
    "nom_arabe": "سوق الخميس",
    "wilaya_id": 10,
    "daira": "Souk El Khemis",
    "daira_ar": "سوق الخميس",
    "post_code": "10004",
    "daira_id": 108
  },
  {
    "id": 313,
    "nom_francais": "Kadiria",
    "nom_arabe": "قادرية",
    "wilaya_id": 10,
    "daira": "Kadiria",
    "daira_ar": "القادرية",
    "post_code": "10005",
    "daira_id": 105
  },
  {
    "id": 314,
    "nom_francais": "Hanif",
    "nom_arabe": "احنيف",
    "wilaya_id": 10,
    "daira": "M'chedallah",
    "daira_ar": "مشد الله",
    "post_code": "10006",
    "daira_id": 107
  },
  {
    "id": 315,
    "nom_francais": "Dirah",
    "nom_arabe": "ديــرة",
    "wilaya_id": 10,
    "daira": "Sour El Ghozlane",
    "daira_ar": "سور الغزلان",
    "post_code": "10007",
    "daira_id": 109
  },
  {
    "id": 316,
    "nom_francais": "Ait Laaziz",
    "nom_arabe": "آيت لعزيز",
    "wilaya_id": 10,
    "daira": "Bouira",
    "daira_ar": "البويرة",
    "post_code": "10008",
    "daira_id": 102
  },
  {
    "id": 317,
    "nom_francais": "Taghzout",
    "nom_arabe": "تاغزوت",
    "wilaya_id": 10,
    "daira": "Haizer",
    "daira_ar": "الحيزر",
    "post_code": "10009",
    "daira_id": 104
  },
  {
    "id": 318,
    "nom_francais": "Raouraoua",
    "nom_arabe": "الروراوة",
    "wilaya_id": 10,
    "daira": "Bir Ghbalou",
    "daira_ar": "بئر غبالو",
    "post_code": "10010",
    "daira_id": 100
  },
  {
    "id": 319,
    "nom_francais": "Mezdour",
    "nom_arabe": "مسدور",
    "wilaya_id": 10,
    "daira": "Bordj Okhriss",
    "daira_ar": "برج أوخريص",
    "post_code": "10011",
    "daira_id": 101
  },
  {
    "id": 320,
    "nom_francais": "Haizer",
    "nom_arabe": "حيزر",
    "wilaya_id": 10,
    "daira": "Haizer",
    "daira_ar": "الحيزر",
    "post_code": "10012",
    "daira_id": 104
  },
  {
    "id": 321,
    "nom_francais": "Lakhdaria",
    "nom_arabe": "الأخضرية",
    "wilaya_id": 10,
    "daira": "Lakhdaria",
    "daira_ar": "الأخضرية",
    "post_code": "10013",
    "daira_id": 106
  },
  {
    "id": 322,
    "nom_francais": "Maala",
    "nom_arabe": "معالة",
    "wilaya_id": 10,
    "daira": "Lakhdaria",
    "daira_ar": "الأخضرية",
    "post_code": "10014",
    "daira_id": 106
  },
  {
    "id": 323,
    "nom_francais": "El Hachimia",
    "nom_arabe": "الھاشمية",
    "wilaya_id": 10,
    "daira": "El Hachimia",
    "daira_ar": "الهاشمية",
    "post_code": "10015",
    "daira_id": 103
  },
  {
    "id": 324,
    "nom_francais": "Aomar",
    "nom_arabe": "أعمر",
    "wilaya_id": 10,
    "daira": "Kadiria",
    "daira_ar": "القادرية",
    "post_code": "10016",
    "daira_id": 105
  },
  {
    "id": 325,
    "nom_francais": "Chorfa",
    "nom_arabe": "الشرفاء",
    "wilaya_id": 10,
    "daira": "M'chedallah",
    "daira_ar": "مشد الله",
    "post_code": "10017",
    "daira_id": 107
  },
  {
    "id": 326,
    "nom_francais": "Bordj Oukhriss",
    "nom_arabe": "برج أوخريص",
    "wilaya_id": 10,
    "daira": "Bordj Okhriss",
    "daira_ar": "برج أوخريص",
    "post_code": "10018",
    "daira_id": 101
  },
  {
    "id": 327,
    "nom_francais": "El Adjiba",
    "nom_arabe": "العجيبة",
    "wilaya_id": 10,
    "daira": "Bechloul",
    "daira_ar": "بشلول",
    "post_code": "10019",
    "daira_id": 99
  },
  {
    "id": 328,
    "nom_francais": "El Hakimia",
    "nom_arabe": "الحاكمية",
    "wilaya_id": 10,
    "daira": "Sour El Ghozlane",
    "daira_ar": "سور الغزلان",
    "post_code": "10020",
    "daira_id": 109
  },
  {
    "id": 329,
    "nom_francais": "El Khebouzia",
    "nom_arabe": "الخبوزية",
    "wilaya_id": 10,
    "daira": "Bir Ghbalou",
    "daira_ar": "بئر غبالو",
    "post_code": "10021",
    "daira_id": 100
  },
  {
    "id": 330,
    "nom_francais": "Ahl El Ksar",
    "nom_arabe": "أھل القصر",
    "wilaya_id": 10,
    "daira": "Bechloul",
    "daira_ar": "بشلول",
    "post_code": "10022",
    "daira_id": 99
  },
  {
    "id": 331,
    "nom_francais": "Bouderbala",
    "nom_arabe": "بودربالة",
    "wilaya_id": 10,
    "daira": "Lakhdaria",
    "daira_ar": "الأخضرية",
    "post_code": "10023",
    "daira_id": 106
  },
  {
    "id": 332,
    "nom_francais": "Zbarbar",
    "nom_arabe": "زبربر",
    "wilaya_id": 10,
    "daira": "Lakhdaria",
    "daira_ar": "الأخضرية",
    "post_code": "10024",
    "daira_id": 106
  },
  {
    "id": 333,
    "nom_francais": "Ain El Hadjar",
    "nom_arabe": "عين الحجر",
    "wilaya_id": 10,
    "daira": "Ain Bessem",
    "daira_ar": "عين بسام",
    "post_code": "10025",
    "daira_id": 98
  },
  {
    "id": 334,
    "nom_francais": "Djebahia",
    "nom_arabe": "الجباحية",
    "wilaya_id": 10,
    "daira": "Kadiria",
    "daira_ar": "القادرية",
    "post_code": "10026",
    "daira_id": 105
  },
  {
    "id": 335,
    "nom_francais": "Aghbalou",
    "nom_arabe": "أغبالو",
    "wilaya_id": 10,
    "daira": "M'chedallah",
    "daira_ar": "مشد الله",
    "post_code": "10027",
    "daira_id": 107
  },
  {
    "id": 336,
    "nom_francais": "Taguedit",
    "nom_arabe": "تاڨديت",
    "wilaya_id": 10,
    "daira": "Bordj Okhriss",
    "daira_ar": "برج أوخريص",
    "post_code": "10028",
    "daira_id": 101
  },
  {
    "id": 337,
    "nom_francais": "Ain Turk",
    "nom_arabe": "عين الترك",
    "wilaya_id": 10,
    "daira": "Bouira",
    "daira_ar": "البويرة",
    "post_code": "10029",
    "daira_id": 102
  },
  {
    "id": 338,
    "nom_francais": "Saharidj",
    "nom_arabe": "الصهاريج",
    "wilaya_id": 10,
    "daira": "M'chedallah",
    "daira_ar": "مشد الله",
    "post_code": "10030",
    "daira_id": 107
  },
  {
    "id": 339,
    "nom_francais": "Dechmia",
    "nom_arabe": "الدشمية",
    "wilaya_id": 10,
    "daira": "Sour El Ghozlane",
    "daira_ar": "سور الغزلان",
    "post_code": "10031",
    "daira_id": 109
  },
  {
    "id": 340,
    "nom_francais": "Ridane",
    "nom_arabe": "ريدان",
    "wilaya_id": 10,
    "daira": "Sour El Ghozlane",
    "daira_ar": "سور الغزلان",
    "post_code": "10032",
    "daira_id": 109
  },
  {
    "id": 341,
    "nom_francais": "Bechloul",
    "nom_arabe": "بشلول",
    "wilaya_id": 10,
    "daira": "Bechloul",
    "daira_ar": "بشلول",
    "post_code": "10033",
    "daira_id": 99
  },
  {
    "id": 342,
    "nom_francais": "Boukram",
    "nom_arabe": "بوكرام",
    "wilaya_id": 10,
    "daira": "Lakhdaria",
    "daira_ar": "الأخضرية",
    "post_code": "10034",
    "daira_id": 106
  },
  {
    "id": 343,
    "nom_francais": "Ain Bessam",
    "nom_arabe": "عين بسام",
    "wilaya_id": 10,
    "daira": "Ain Bessem",
    "daira_ar": "عين بسام",
    "post_code": "10035",
    "daira_id": 98
  },
  {
    "id": 344,
    "nom_francais": "Bir Ghbalou",
    "nom_arabe": "بئر غبالو",
    "wilaya_id": 10,
    "daira": "Bir Ghbalou",
    "daira_ar": "بئر غبالو",
    "post_code": "10036",
    "daira_id": 100
  },
  {
    "id": 345,
    "nom_francais": "Mchedallah",
    "nom_arabe": "مشدا الله",
    "wilaya_id": 10,
    "daira": "M'chedallah",
    "daira_ar": "مشد الله",
    "post_code": "10037",
    "daira_id": 107
  },
  {
    "id": 346,
    "nom_francais": "Sour El Ghozlane",
    "nom_arabe": "سور الغزلان",
    "wilaya_id": 10,
    "daira": "Sour El Ghozlane",
    "daira_ar": "سور الغزلان",
    "post_code": "10038",
    "daira_id": 109
  },
  {
    "id": 347,
    "nom_francais": "Maamora",
    "nom_arabe": "المعمورة",
    "wilaya_id": 10,
    "daira": "Sour El Ghozlane",
    "daira_ar": "سور الغزلان",
    "post_code": "10039",
    "daira_id": 109
  },
  {
    "id": 348,
    "nom_francais": "Ouled Rached",
    "nom_arabe": "أولاد راشد",
    "wilaya_id": 10,
    "daira": "Bechloul",
    "daira_ar": "بشلول",
    "post_code": "10040",
    "daira_id": 99
  },
  {
    "id": 349,
    "nom_francais": "Ain Laloui",
    "nom_arabe": "عين العلوي",
    "wilaya_id": 10,
    "daira": "Ain Bessem",
    "daira_ar": "عين بسام",
    "post_code": "10041",
    "daira_id": 98
  },
  {
    "id": 350,
    "nom_francais": "Hadjera Zerga",
    "nom_arabe": "الحجرة الزرقاء",
    "wilaya_id": 10,
    "daira": "Bordj Okhriss",
    "daira_ar": "برج أوخريص",
    "post_code": "10042",
    "daira_id": 101
  },
  {
    "id": 351,
    "nom_francais": "Ath Mansour",
    "nom_arabe": "آث منصور",
    "wilaya_id": 10,
    "daira": "M'chedallah",
    "daira_ar": "مشد الله",
    "post_code": "10043",
    "daira_id": 107
  },
  {
    "id": 352,
    "nom_francais": "El Mokrani",
    "nom_arabe": "المقراني",
    "wilaya_id": 10,
    "daira": "Souk El Khemis",
    "daira_ar": "سوق الخميس",
    "post_code": "10044",
    "daira_id": 108
  },
  {
    "id": 353,
    "nom_francais": "Oued El Berdi",
    "nom_arabe": "وادى البردي",
    "wilaya_id": 10,
    "daira": "El Hachimia",
    "daira_ar": "الهاشمية",
    "post_code": "10045",
    "daira_id": 103
  },
  {
    "id": 354,
    "nom_francais": "Tamanghasset",
    "nom_arabe": "تمنراست",
    "wilaya_id": 11,
    "daira": "Tamanrasset",
    "daira_ar": "تمنراست",
    "post_code": "11001",
    "daira_id": 111
  },
  {
    "id": 355,
    "nom_francais": "Abalessa",
    "nom_arabe": "أبلسة",
    "wilaya_id": 11,
    "daira": "Silet",
    "daira_ar": "سيلت",
    "post_code": "11002",
    "daira_id": 110
  },
  {
    "id": 356,
    "nom_francais": "In Ghar",
    "nom_arabe": "عـيـن غــار",
    "wilaya_id": 53,
    "daira": "In Ghar",
    "daira_ar": "إينغر",
    "post_code": "53003",
    "daira_id": 496
  },
  {
    "id": 357,
    "nom_francais": "In Guezzam",
    "nom_arabe": "عين قزام",
    "wilaya_id": 54,
    "daira": "In Guezzam",
    "daira_ar": "عين قزام",
    "post_code": "54004",
    "daira_id": 498
  },
  {
    "id": 358,
    "nom_francais": "Idles",
    "nom_arabe": "إدلس",
    "wilaya_id": 11,
    "daira": "Tazrouk",
    "daira_ar": "تاظروك",
    "post_code": "11005",
    "daira_id": 112
  },
  {
    "id": 359,
    "nom_francais": "Tazouk",
    "nom_arabe": "تاظروك",
    "wilaya_id": 11,
    "daira": "Tazrouk",
    "daira_ar": "تاظروك",
    "post_code": "11006",
    "daira_id": 112
  },
  {
    "id": 360,
    "nom_francais": "Tinzaouatine",
    "nom_arabe": "تين زاوتين",
    "wilaya_id": 54,
    "daira": "Tin Zouatine",
    "daira_ar": "تين زواتين",
    "post_code": "11007",
    "daira_id": 499
  },
  {
    "id": 361,
    "nom_francais": "In Salah",
    "nom_arabe": "عين صالح",
    "wilaya_id": 53,
    "daira": "In Salah",
    "daira_ar": "عين صالح",
    "post_code": "53008",
    "daira_id": 497
  },
  {
    "id": 362,
    "nom_francais": "In Amguel",
    "nom_arabe": "ان أمقل",
    "wilaya_id": 11,
    "daira": "Tamanrasset",
    "daira_ar": "تمنراست",
    "post_code": "11009",
    "daira_id": 111
  },
  {
    "id": 363,
    "nom_francais": "Foggaret Ezzaouia",
    "nom_arabe": "فقارة الزوى",
    "wilaya_id": 53,
    "daira": "In Salah",
    "daira_ar": "عين صالح",
    "post_code": "53010",
    "daira_id": 497
  },
  {
    "id": 364,
    "nom_francais": "Tebessa",
    "nom_arabe": "تبسة",
    "wilaya_id": 12,
    "daira": "Tebessa",
    "daira_ar": "تبسة",
    "post_code": "12001",
    "daira_id": 122
  },
  {
    "id": 365,
    "nom_francais": "Bir El Ater",
    "nom_arabe": "بئر العاتر",
    "wilaya_id": 62,
    "daira": "Bir El Ater",
    "daira_ar": "بئر العاتر",
    "post_code": "62002",
    "daira_id": 521
  },
  {
    "id": 366,
    "nom_francais": "Cheria",
    "nom_arabe": "الــشــريــعـة",
    "wilaya_id": 12,
    "daira": "Cheria",
    "daira_ar": "الشريعة",
    "post_code": "12003",
    "daira_id": 114
  },
  {
    "id": 367,
    "nom_francais": "Stah Guentis",
    "nom_arabe": "سطح قنطيس",
    "wilaya_id": 12,
    "daira": "El Ogla",
    "daira_ar": "العقلة",
    "post_code": "12004",
    "daira_id": 118
  },
  {
    "id": 368,
    "nom_francais": "El Aouinet",
    "nom_arabe": "العوينات",
    "wilaya_id": 12,
    "daira": "El Aouinet",
    "daira_ar": "العوينات",
    "post_code": "12005",
    "daira_id": 115
  },
  {
    "id": 369,
    "nom_francais": "Lahouidjbet",
    "nom_arabe": "الحويجبات",
    "wilaya_id": 12,
    "daira": null,
    "daira_ar": null,
    "post_code": "12006",
    "daira_id": null
  },
  {
    "id": 370,
    "nom_francais": "Safsaf El Ouesra",
    "nom_arabe": "صفصاف الوسرة",
    "wilaya_id": 12,
    "daira": "Oum Ali",
    "daira_ar": "أم علي",
    "post_code": "12007",
    "daira_id": 121
  },
  {
    "id": 371,
    "nom_francais": "Hammamet",
    "nom_arabe": "الحمامات",
    "wilaya_id": 12,
    "daira": "Bir Mokadem",
    "daira_ar": "بئر مقدم",
    "post_code": "12008",
    "daira_id": 113
  },
  {
    "id": 372,
    "nom_francais": "Negrine",
    "nom_arabe": "نقرين",
    "wilaya_id": 62,
    "daira": "Negrine",
    "daira_ar": "نقرين",
    "post_code": "62009",
    "daira_id": 523
  },
  {
    "id": 373,
    "nom_francais": "Bir El Mokadem",
    "nom_arabe": "بــئــر مــقـدم",
    "wilaya_id": 12,
    "daira": "Bir Mokadem",
    "daira_ar": "بئر مقدم",
    "post_code": "12010",
    "daira_id": 113
  },
  {
    "id": 374,
    "nom_francais": "El Kouif",
    "nom_arabe": "الكويف",
    "wilaya_id": 12,
    "daira": "El Kouif",
    "daira_ar": "الكويف",
    "post_code": "12011",
    "daira_id": 116
  },
  {
    "id": 375,
    "nom_francais": "Morsott",
    "nom_arabe": "مرسط",
    "wilaya_id": 12,
    "daira": "Morsott",
    "daira_ar": "مرسط",
    "post_code": "12012",
    "daira_id": 119
  },
  {
    "id": 376,
    "nom_francais": "El Ogla",
    "nom_arabe": "العقلة",
    "wilaya_id": 62,
    "daira": "El Ogla",
    "daira_ar": "العقلة",
    "post_code": "62013",
    "daira_id": 522
  },
  {
    "id": 377,
    "nom_francais": "Bir Dheb",
    "nom_arabe": "بٔير الذھب",
    "wilaya_id": 12,
    "daira": "Morsott",
    "daira_ar": "مرسط",
    "post_code": "12014",
    "daira_id": 119
  },
  {
    "id": 378,
    "nom_francais": "El Ogla",
    "nom_arabe": "العقلة",
    "wilaya_id": 12,
    "daira": "El Ogla",
    "daira_ar": "العقلة",
    "post_code": "12015",
    "daira_id": 118
  },
  {
    "id": 379,
    "nom_francais": "Gorriguer",
    "nom_arabe": "قوريقر",
    "wilaya_id": 12,
    "daira": null,
    "daira_ar": null,
    "post_code": "12016",
    "daira_id": null
  },
  {
    "id": 380,
    "nom_francais": "Bekkaria",
    "nom_arabe": "بكارية",
    "wilaya_id": 12,
    "daira": "El Kouif",
    "daira_ar": "الكويف",
    "post_code": "12017",
    "daira_id": 116
  },
  {
    "id": 381,
    "nom_francais": "Boukhadra",
    "nom_arabe": "بوخضرة",
    "wilaya_id": 12,
    "daira": "El Aouinet",
    "daira_ar": "العوينات",
    "post_code": "12018",
    "daira_id": 115
  },
  {
    "id": 382,
    "nom_francais": "Ouenza",
    "nom_arabe": "الونزة",
    "wilaya_id": 12,
    "daira": "Ouenza",
    "daira_ar": "الونزة",
    "post_code": "12019",
    "daira_id": 120
  },
  {
    "id": 383,
    "nom_francais": "El Ma El Biodh",
    "nom_arabe": "الماء الأبيض",
    "wilaya_id": 12,
    "daira": "El Malabiod",
    "daira_ar": "الماء الابيض",
    "post_code": "12020",
    "daira_id": 117
  },
  {
    "id": 384,
    "nom_francais": "Oum Ali",
    "nom_arabe": "أم على",
    "wilaya_id": 12,
    "daira": "Oum Ali",
    "daira_ar": "أم علي",
    "post_code": "12021",
    "daira_id": 121
  },
  {
    "id": 385,
    "nom_francais": "Tlidjene",
    "nom_arabe": "ثليجان",
    "wilaya_id": 12,
    "daira": null,
    "daira_ar": null,
    "post_code": "12022",
    "daira_id": null
  },
  {
    "id": 386,
    "nom_francais": "Ain Zerga",
    "nom_arabe": "عين الزرقاء",
    "wilaya_id": 12,
    "daira": "Ouenza",
    "daira_ar": "الونزة",
    "post_code": "12023",
    "daira_id": 120
  },
  {
    "id": 387,
    "nom_francais": "El Meridj",
    "nom_arabe": "المريج",
    "wilaya_id": 12,
    "daira": "Ouenza",
    "daira_ar": "الونزة",
    "post_code": "12024",
    "daira_id": 120
  },
  {
    "id": 388,
    "nom_francais": "Boulhaf Dyr",
    "nom_arabe": "بولحاف الدير",
    "wilaya_id": 12,
    "daira": "El Kouif",
    "daira_ar": "الكويف",
    "post_code": "12025",
    "daira_id": 116
  },
  {
    "id": 389,
    "nom_francais": "Bedjene",
    "nom_arabe": "بجن",
    "wilaya_id": 12,
    "daira": "El Ogla",
    "daira_ar": "العقلة",
    "post_code": "12026",
    "daira_id": 118
  },
  {
    "id": 390,
    "nom_francais": "El Mazeraa",
    "nom_arabe": "المزرعة",
    "wilaya_id": 12,
    "daira": "El Ogla",
    "daira_ar": "العقلة",
    "post_code": "12027",
    "daira_id": 118
  },
  {
    "id": 391,
    "nom_francais": "Ferkane",
    "nom_arabe": "فـــــــركـــــان",
    "wilaya_id": 62,
    "daira": "Negrine",
    "daira_ar": "نقرين",
    "post_code": "62028",
    "daira_id": 523
  },
  {
    "id": 392,
    "nom_francais": "Tlemcen",
    "nom_arabe": "تلمسان",
    "wilaya_id": 13,
    "daira": "Tlemcen",
    "daira_ar": "تلمسان",
    "post_code": "13001",
    "daira_id": 141
  },
  {
    "id": 393,
    "nom_francais": "Beni Mester",
    "nom_arabe": "بني مستار",
    "wilaya_id": 13,
    "daira": "Mansourah",
    "daira_ar": "منصورة",
    "post_code": "13002",
    "daira_id": 134
  },
  {
    "id": 394,
    "nom_francais": "Ain Tallout",
    "nom_arabe": "عين تالوت",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13003",
    "daira_id": null
  },
  {
    "id": 395,
    "nom_francais": "Remchi",
    "nom_arabe": "الرمشي",
    "wilaya_id": 13,
    "daira": "Remchi",
    "daira_ar": "الرمشي",
    "post_code": "13004",
    "daira_id": 138
  },
  {
    "id": 396,
    "nom_francais": "El Fehoul",
    "nom_arabe": "الفحول",
    "wilaya_id": 13,
    "daira": "Remchi",
    "daira_ar": "الرمشي",
    "post_code": "13005",
    "daira_id": 138
  },
  {
    "id": 397,
    "nom_francais": "Sabra",
    "nom_arabe": "صبرة",
    "wilaya_id": 13,
    "daira": "Sabra",
    "daira_ar": "صبرة",
    "post_code": "13006",
    "daira_id": 139
  },
  {
    "id": 398,
    "nom_francais": "Ghazaouet",
    "nom_arabe": "الغزوات",
    "wilaya_id": 13,
    "daira": "Ghazaouet",
    "daira_ar": "الغزوات",
    "post_code": "13007",
    "daira_id": 130
  },
  {
    "id": 399,
    "nom_francais": "Souani",
    "nom_arabe": "السواني",
    "wilaya_id": 13,
    "daira": "Bab El Assa",
    "daira_ar": "باب العسة",
    "post_code": "13008",
    "daira_id": 124
  },
  {
    "id": 400,
    "nom_francais": "Djebala",
    "nom_arabe": "جبالة",
    "wilaya_id": 13,
    "daira": "Nedroma",
    "daira_ar": "ندرومة",
    "post_code": "13009",
    "daira_id": 136
  },
  {
    "id": 401,
    "nom_francais": "El Gor",
    "nom_arabe": "الغور",
    "wilaya_id": 63,
    "daira": "Sebdou",
    "daira_ar": "سبدو",
    "post_code": "63010",
    "daira_id": 524
  },
  {
    "id": 402,
    "nom_francais": "Oued Chouly",
    "nom_arabe": "وادى الشولى",
    "wilaya_id": 13,
    "daira": "Honnaine",
    "daira_ar": "هنين",
    "post_code": "13011",
    "daira_id": 132
  },
  {
    "id": 403,
    "nom_francais": "Ain Fezza",
    "nom_arabe": "عين فزّة",
    "wilaya_id": 13,
    "daira": "Chetouane",
    "daira_ar": "شتوان",
    "post_code": "13012",
    "daira_id": 128
  },
  {
    "id": 404,
    "nom_francais": "Ouled Mimoun",
    "nom_arabe": "أولاد ميمون",
    "wilaya_id": 13,
    "daira": "Ouled Mimoun",
    "daira_ar": "أولاد ميمون",
    "post_code": "13013",
    "daira_id": 137
  },
  {
    "id": 405,
    "nom_francais": "Amieur",
    "nom_arabe": "عمير",
    "wilaya_id": 13,
    "daira": "Chetouane",
    "daira_ar": "شتوان",
    "post_code": "13014",
    "daira_id": 128
  },
  {
    "id": 406,
    "nom_francais": "Ain Youcef",
    "nom_arabe": "عين يوسف",
    "wilaya_id": 13,
    "daira": "Remchi",
    "daira_ar": "الرمشي",
    "post_code": "13015",
    "daira_id": 138
  },
  {
    "id": 407,
    "nom_francais": "Zenata",
    "nom_arabe": "زناتة",
    "wilaya_id": 13,
    "daira": "Hennaya",
    "daira_ar": "الحناية",
    "post_code": "13016",
    "daira_id": 131
  },
  {
    "id": 408,
    "nom_francais": "Beni Snous",
    "nom_arabe": "بنى سنوس",
    "wilaya_id": 13,
    "daira": "Beni Snous",
    "daira_ar": "بني سنوس",
    "post_code": "13017",
    "daira_id": 126
  },
  {
    "id": 409,
    "nom_francais": "Bab El Assa",
    "nom_arabe": "باب العسة",
    "wilaya_id": 13,
    "daira": "Bab El Assa",
    "daira_ar": "باب العسة",
    "post_code": "13018",
    "daira_id": 124
  },
  {
    "id": 410,
    "nom_francais": "Dar Yaghmouracene",
    "nom_arabe": "دار يغمراسن",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13019",
    "daira_id": null
  },
  {
    "id": 411,
    "nom_francais": "Fellaoucene",
    "nom_arabe": "فلاوسن",
    "wilaya_id": 13,
    "daira": "Fellaoucene",
    "daira_ar": "فلاوسن",
    "post_code": "13020",
    "daira_id": 129
  },
  {
    "id": 412,
    "nom_francais": "Azails",
    "nom_arabe": "العزايل",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13021",
    "daira_id": null
  },
  {
    "id": 413,
    "nom_francais": "Sebbaa Chioukh",
    "nom_arabe": "سبعة شيوخ",
    "wilaya_id": 13,
    "daira": "Remchi",
    "daira_ar": "الرمشي",
    "post_code": "13022",
    "daira_id": 138
  },
  {
    "id": 414,
    "nom_francais": "Terni Beni Hediel",
    "nom_arabe": "تيرني بني هديل",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13023",
    "daira_id": null
  },
  {
    "id": 415,
    "nom_francais": "Bensekrane",
    "nom_arabe": "بن سكران",
    "wilaya_id": 13,
    "daira": "Bensekrane",
    "daira_ar": "بن سكران",
    "post_code": "13024",
    "daira_id": 127
  },
  {
    "id": 416,
    "nom_francais": "Ain Nehala",
    "nom_arabe": "عين نحالة",
    "wilaya_id": 13,
    "daira": "Ain Tellout",
    "daira_ar": "عين تالوت",
    "post_code": "13025",
    "daira_id": 123
  },
  {
    "id": 417,
    "nom_francais": "Hennaya",
    "nom_arabe": "الحناية",
    "wilaya_id": 13,
    "daira": "Hennaya",
    "daira_ar": "الحناية",
    "post_code": "13026",
    "daira_id": 131
  },
  {
    "id": 418,
    "nom_francais": "Maghnia",
    "nom_arabe": "مغنية",
    "wilaya_id": 13,
    "daira": "Maghnia",
    "daira_ar": "مغنية",
    "post_code": "13027",
    "daira_id": 133
  },
  {
    "id": 419,
    "nom_francais": "Hammam Boughrara",
    "nom_arabe": "حمام بوغرارة",
    "wilaya_id": 13,
    "daira": "Maghnia",
    "daira_ar": "مغنية",
    "post_code": "13028",
    "daira_id": 133
  },
  {
    "id": 420,
    "nom_francais": "Souahlia",
    "nom_arabe": "تونان",
    "wilaya_id": 13,
    "daira": "Ghazaouet",
    "daira_ar": "الغزوات",
    "post_code": "13029",
    "daira_id": 130
  },
  {
    "id": 421,
    "nom_francais": "Msirda Fouaga",
    "nom_arabe": "مسيردة الفواقة",
    "wilaya_id": 13,
    "daira": "Marsa Ben Mehdi",
    "daira_ar": "مرسى بن مهيدي",
    "post_code": "13030",
    "daira_id": 135
  },
  {
    "id": 422,
    "nom_francais": "Ain Fetah",
    "nom_arabe": "عين فتاح",
    "wilaya_id": 13,
    "daira": "Fellaoucene",
    "daira_ar": "فلاوسن",
    "post_code": "13031",
    "daira_id": 129
  },
  {
    "id": 423,
    "nom_francais": "El Aricha",
    "nom_arabe": "العريشة",
    "wilaya_id": 63,
    "daira": "Sebdou",
    "daira_ar": "سبدو",
    "post_code": "63032",
    "daira_id": 524
  },
  {
    "id": 424,
    "nom_francais": "Souk Thlata",
    "nom_arabe": "سوق الثلاثاء",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13033",
    "daira_id": null
  },
  {
    "id": 425,
    "nom_francais": "Sidi Abdelli",
    "nom_arabe": "سيدي العبدلي",
    "wilaya_id": 13,
    "daira": "Bensekrane",
    "daira_ar": "بن سكران",
    "post_code": "13034",
    "daira_id": 127
  },
  {
    "id": 426,
    "nom_francais": "Sebdou",
    "nom_arabe": "سبدو",
    "wilaya_id": 13,
    "daira": "Sebdou",
    "daira_ar": "سبدو",
    "post_code": "13035",
    "daira_id": 140
  },
  {
    "id": 427,
    "nom_francais": "Beni Ouarsous",
    "nom_arabe": "برج عريمة",
    "wilaya_id": 13,
    "daira": "Remchi",
    "daira_ar": "الرمشي",
    "post_code": "13036",
    "daira_id": 138
  },
  {
    "id": 428,
    "nom_francais": "Sidi Medjahed",
    "nom_arabe": "سيدي مجاهد",
    "wilaya_id": 13,
    "daira": "Beni Boussaid",
    "daira_ar": "بني بوسعيد",
    "post_code": "13037",
    "daira_id": 125
  },
  {
    "id": 429,
    "nom_francais": "Beni Boussaid",
    "nom_arabe": "بني بوسعيد",
    "wilaya_id": 13,
    "daira": "Beni Boussaid",
    "daira_ar": "بني بوسعيد",
    "post_code": "13038",
    "daira_id": 125
  },
  {
    "id": 430,
    "nom_francais": "Marsa Ben Mhidi",
    "nom_arabe": "مرسى بن مھيدي",
    "wilaya_id": 13,
    "daira": "Marsa Ben Mehdi",
    "daira_ar": "مرسى بن مهيدي",
    "post_code": "13039",
    "daira_id": 135
  },
  {
    "id": 431,
    "nom_francais": "Nedroma",
    "nom_arabe": "ندرومة",
    "wilaya_id": 13,
    "daira": "Nedroma",
    "daira_ar": "ندرومة",
    "post_code": "13040",
    "daira_id": 136
  },
  {
    "id": 432,
    "nom_francais": "Sidi Djillali",
    "nom_arabe": "سيدي الجيلالي",
    "wilaya_id": 63,
    "daira": "Sidi Djillali",
    "daira_ar": "سيدي الجيلالي",
    "post_code": "13041",
    "daira_id": 525
  },
  {
    "id": 433,
    "nom_francais": "Beni Bahdel",
    "nom_arabe": "بني بهدل",
    "wilaya_id": 13,
    "daira": "Beni Snous",
    "daira_ar": "بني سنوس",
    "post_code": "13042",
    "daira_id": 126
  },
  {
    "id": 434,
    "nom_francais": "El Bouihi",
    "nom_arabe": "البويھي",
    "wilaya_id": 63,
    "daira": null,
    "daira_ar": null,
    "post_code": "13043",
    "daira_id": null
  },
  {
    "id": 435,
    "nom_francais": "Honaine",
    "nom_arabe": "هنين",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13044",
    "daira_id": null
  },
  {
    "id": 436,
    "nom_francais": "Tianet",
    "nom_arabe": "تيانت",
    "wilaya_id": 13,
    "daira": "Ghazaouet",
    "daira_ar": "الغزوات",
    "post_code": "13045",
    "daira_id": 130
  },
  {
    "id": 437,
    "nom_francais": "Ouled Riyah",
    "nom_arabe": "أولاد رياح",
    "wilaya_id": 13,
    "daira": "Hennaya",
    "daira_ar": "الحناية",
    "post_code": "13046",
    "daira_id": 131
  },
  {
    "id": 438,
    "nom_francais": "Bouhlou",
    "nom_arabe": "بوحلو",
    "wilaya_id": 13,
    "daira": "Sabra",
    "daira_ar": "صبرة",
    "post_code": "13047",
    "daira_id": 139
  },
  {
    "id": 439,
    "nom_francais": "Souk El Khemis",
    "nom_arabe": "سوق الخميس",
    "wilaya_id": 13,
    "daira": "Ouled Mimoun",
    "daira_ar": "أولاد ميمون",
    "post_code": "13048",
    "daira_id": 137
  },
  {
    "id": 440,
    "nom_francais": "Ain Ghoraba",
    "nom_arabe": "عين غرابة",
    "wilaya_id": 13,
    "daira": "Mansourah",
    "daira_ar": "منصورة",
    "post_code": "13049",
    "daira_id": 134
  },
  {
    "id": 441,
    "nom_francais": "Chetouane",
    "nom_arabe": "شتوان",
    "wilaya_id": 13,
    "daira": "Chetouane",
    "daira_ar": "شتوان",
    "post_code": "13050",
    "daira_id": 128
  },
  {
    "id": 442,
    "nom_francais": "Mansourah",
    "nom_arabe": "المنصورة",
    "wilaya_id": 13,
    "daira": "Mansourah",
    "daira_ar": "منصورة",
    "post_code": "13051",
    "daira_id": 134
  },
  {
    "id": 443,
    "nom_francais": "Beni Semiel",
    "nom_arabe": "بني مستار",
    "wilaya_id": 13,
    "daira": null,
    "daira_ar": null,
    "post_code": "13052",
    "daira_id": null
  },
  {
    "id": 444,
    "nom_francais": "Ain Kebira",
    "nom_arabe": "عين الكبيرة",
    "wilaya_id": 13,
    "daira": "Fellaoucene",
    "daira_ar": "فلاوسن",
    "post_code": "13053",
    "daira_id": 129
  },
  {
    "id": 445,
    "nom_francais": "Tiaret",
    "nom_arabe": "تيارت‎",
    "wilaya_id": 14,
    "daira": "Tiaret",
    "daira_ar": "تيارت",
    "post_code": "14001",
    "daira_id": 153
  },
  {
    "id": 446,
    "nom_francais": "Medroussa",
    "nom_arabe": "مدروسة",
    "wilaya_id": 14,
    "daira": "Medroussa",
    "daira_ar": "مدروسة",
    "post_code": "14002",
    "daira_id": 148
  },
  {
    "id": 447,
    "nom_francais": "Ain Bouchekif",
    "nom_arabe": "بوشقيف",
    "wilaya_id": 14,
    "daira": "Dahmouni",
    "daira_ar": "دحموني",
    "post_code": "14003",
    "daira_id": 144
  },
  {
    "id": 448,
    "nom_francais": "Sidi Ali Mellal",
    "nom_arabe": "سيدي علي ملال",
    "wilaya_id": 14,
    "daira": "Oued Lili",
    "daira_ar": "وادي ليلي",
    "post_code": "14004",
    "daira_id": 150
  },
  {
    "id": 449,
    "nom_francais": "Ain Zarit",
    "nom_arabe": "عين زاريت",
    "wilaya_id": 14,
    "daira": "Mahdia",
    "daira_ar": "مهدية",
    "post_code": "14005",
    "daira_id": 146
  },
  {
    "id": 450,
    "nom_francais": "Ain Deheb",
    "nom_arabe": "عين الذهب",
    "wilaya_id": 14,
    "daira": "Ain Deheb",
    "daira_ar": "عين الذهب",
    "post_code": "14006",
    "daira_id": 142
  },
  {
    "id": 451,
    "nom_francais": "Sidi Bakhti",
    "nom_arabe": "سيدي بختي",
    "wilaya_id": 14,
    "daira": "Medroussa",
    "daira_ar": "مدروسة",
    "post_code": "14007",
    "daira_id": 148
  },
  {
    "id": 452,
    "nom_francais": "Medrissa",
    "nom_arabe": "مدريسة",
    "wilaya_id": 14,
    "daira": "Ain Kermes",
    "daira_ar": "عين كرمس",
    "post_code": "14008",
    "daira_id": 143
  },
  {
    "id": 453,
    "nom_francais": "Zmalet El Emir Aek",
    "nom_arabe": "زمالة الأمير عبد القادر",
    "wilaya_id": 64,
    "daira": null,
    "daira_ar": null,
    "post_code": "14009",
    "daira_id": null
  },
  {
    "id": 454,
    "nom_francais": "Madna",
    "nom_arabe": "مادنة",
    "wilaya_id": 14,
    "daira": "Ain Kermes",
    "daira_ar": "عين كرمس",
    "post_code": "14010",
    "daira_id": 143
  },
  {
    "id": 455,
    "nom_francais": "Sebt",
    "nom_arabe": "السبت",
    "wilaya_id": 14,
    "daira": "Meghila",
    "daira_ar": "مغيلة",
    "post_code": "14011",
    "daira_id": 149
  },
  {
    "id": 456,
    "nom_francais": "Mellakou",
    "nom_arabe": "ملاكو",
    "wilaya_id": 14,
    "daira": "Medroussa",
    "daira_ar": "مدروسة",
    "post_code": "14012",
    "daira_id": 148
  },
  {
    "id": 457,
    "nom_francais": "Dahmouni",
    "nom_arabe": "دحموني",
    "wilaya_id": 14,
    "daira": "Dahmouni",
    "daira_ar": "دحموني",
    "post_code": "14013",
    "daira_id": 144
  },
  {
    "id": 458,
    "nom_francais": "Rahouia",
    "nom_arabe": "رحوية",
    "wilaya_id": 14,
    "daira": "Rahouia",
    "daira_ar": "رحوية",
    "post_code": "14014",
    "daira_id": 151
  },
  {
    "id": 459,
    "nom_francais": "Mahdia",
    "nom_arabe": "المھدية",
    "wilaya_id": 14,
    "daira": "Mahdia",
    "daira_ar": "مهدية",
    "post_code": "14015",
    "daira_id": 146
  },
  {
    "id": 460,
    "nom_francais": "Sougueur",
    "nom_arabe": "سوقر",
    "wilaya_id": 14,
    "daira": "Sougueur",
    "daira_ar": "السوقر",
    "post_code": "14016",
    "daira_id": 152
  },
  {
    "id": 461,
    "nom_francais": "Sidi Abdelghani",
    "nom_arabe": "سيدي عبد الغنى",
    "wilaya_id": 14,
    "daira": null,
    "daira_ar": null,
    "post_code": "64017",
    "daira_id": null
  },
  {
    "id": 462,
    "nom_francais": "Ain El Hadid",
    "nom_arabe": "عين الحديد",
    "wilaya_id": 14,
    "daira": "Frenda",
    "daira_ar": "فرندة",
    "post_code": "14018",
    "daira_id": 145
  },
  {
    "id": 463,
    "nom_francais": "Ouled Djerad",
    "nom_arabe": "اولاد جراد",
    "wilaya_id": 14,
    "daira": "Ain Kermes",
    "daira_ar": "عين كرمس",
    "post_code": "14019",
    "daira_id": 143
  },
  {
    "id": 464,
    "nom_francais": "Naima",
    "nom_arabe": "نعيمة",
    "wilaya_id": 14,
    "daira": "Ain Deheb",
    "daira_ar": "عين الذهب",
    "post_code": "14020",
    "daira_id": 142
  },
  {
    "id": 465,
    "nom_francais": "Meghila",
    "nom_arabe": "مغيلة",
    "wilaya_id": 14,
    "daira": "Meghila",
    "daira_ar": "مغيلة",
    "post_code": "14021",
    "daira_id": 149
  },
  {
    "id": 466,
    "nom_francais": "Guertoufa",
    "nom_arabe": "قرطوفة",
    "wilaya_id": 14,
    "daira": "Rahouia",
    "daira_ar": "رحوية",
    "post_code": "14022",
    "daira_id": 151
  },
  {
    "id": 467,
    "nom_francais": "Sidi Hosni",
    "nom_arabe": "سيدي حسني",
    "wilaya_id": 14,
    "daira": "Meghila",
    "daira_ar": "مغيلة",
    "post_code": "14023",
    "daira_id": 149
  },
  {
    "id": 468,
    "nom_francais": "Djillali Ben Amar",
    "nom_arabe": "جيلالي بن عمار",
    "wilaya_id": 14,
    "daira": "Mechraa Sfa",
    "daira_ar": "مشرع الصفا",
    "post_code": "14024",
    "daira_id": 147
  },
  {
    "id": 469,
    "nom_francais": "Sebaine",
    "nom_arabe": "سبعين",
    "wilaya_id": 14,
    "daira": "Mahdia",
    "daira_ar": "مهدية",
    "post_code": "14025",
    "daira_id": 146
  },
  {
    "id": 470,
    "nom_francais": "Tousnina",
    "nom_arabe": "توسنينة",
    "wilaya_id": 14,
    "daira": "Sougueur",
    "daira_ar": "السوقر",
    "post_code": "14026",
    "daira_id": 152
  },
  {
    "id": 471,
    "nom_francais": "Frenda",
    "nom_arabe": "فرندة",
    "wilaya_id": 14,
    "daira": "Frenda",
    "daira_ar": "فرندة",
    "post_code": "14027",
    "daira_id": 145
  },
  {
    "id": 472,
    "nom_francais": "Ain Kermes",
    "nom_arabe": "عين كرمس",
    "wilaya_id": 14,
    "daira": "Ain Kermes",
    "daira_ar": "عين كرمس",
    "post_code": "14028",
    "daira_id": 143
  },
  {
    "id": 473,
    "nom_francais": "Ksar Chellala",
    "nom_arabe": "قصر الشلالة",
    "wilaya_id": 64,
    "daira": "Ksar Chellala",
    "daira_ar": "قصر الشلالة",
    "post_code": "64029",
    "daira_id": 527
  },
  {
    "id": 474,
    "nom_francais": "Rechaiga",
    "nom_arabe": "الرشايقة",
    "wilaya_id": 64,
    "daira": "Hamadia",
    "daira_ar": "حمادية",
    "post_code": "64030",
    "daira_id": 526
  },
  {
    "id": 475,
    "nom_francais": "Nadorah",
    "nom_arabe": "ملاكو",
    "wilaya_id": 14,
    "daira": "Mahdia",
    "daira_ar": "مهدية",
    "post_code": "14031",
    "daira_id": 146
  },
  {
    "id": 476,
    "nom_francais": "Tagdemt",
    "nom_arabe": "تاقدمت",
    "wilaya_id": 14,
    "daira": null,
    "daira_ar": null,
    "post_code": "14032",
    "daira_id": null
  },
  {
    "id": 477,
    "nom_francais": "Oued Lilli",
    "nom_arabe": "وادى ليلى",
    "wilaya_id": 14,
    "daira": "Oued Lili",
    "daira_ar": "وادي ليلي",
    "post_code": "14033",
    "daira_id": 150
  },
  {
    "id": 478,
    "nom_francais": "Mechraa Safa",
    "nom_arabe": "مشرع الصفاء",
    "wilaya_id": 14,
    "daira": "Mechraa Sfa",
    "daira_ar": "مشرع الصفا",
    "post_code": "14034",
    "daira_id": 147
  },
  {
    "id": 479,
    "nom_francais": "Hamadia",
    "nom_arabe": "الحمادية",
    "wilaya_id": 64,
    "daira": "Hamadia",
    "daira_ar": "حمادية",
    "post_code": "64035",
    "daira_id": 526
  },
  {
    "id": 480,
    "nom_francais": "Chehaima",
    "nom_arabe": "شحيمة",
    "wilaya_id": 14,
    "daira": "Ain Deheb",
    "daira_ar": "عين الذهب",
    "post_code": "14036",
    "daira_id": 142
  },
  {
    "id": 481,
    "nom_francais": "Takhemaret",
    "nom_arabe": "تاخمرت",
    "wilaya_id": 14,
    "daira": "Frenda",
    "daira_ar": "فرندة",
    "post_code": "14037",
    "daira_id": 145
  },
  {
    "id": 482,
    "nom_francais": "Sidi Abderrahmane",
    "nom_arabe": "سيدي عبدالرحمان",
    "wilaya_id": 14,
    "daira": "Ain Kermes",
    "daira_ar": "عين كرمس",
    "post_code": "14038",
    "daira_id": 143
  },
  {
    "id": 483,
    "nom_francais": "Serghine",
    "nom_arabe": "سرغين",
    "wilaya_id": 64,
    "daira": "Ksar Chellala",
    "daira_ar": "قصر الشلالة",
    "post_code": "64039",
    "daira_id": 527
  },
  {
    "id": 484,
    "nom_francais": "Bougara",
    "nom_arabe": "بوقرة",
    "wilaya_id": 64,
    "daira": "Hamadia",
    "daira_ar": "حمادية",
    "post_code": "64040",
    "daira_id": 526
  },
  {
    "id": 485,
    "nom_francais": "Faidja",
    "nom_arabe": "الفايجة",
    "wilaya_id": 14,
    "daira": "Sougueur",
    "daira_ar": "السوقر",
    "post_code": "14041",
    "daira_id": 152
  },
  {
    "id": 486,
    "nom_francais": "Tidda",
    "nom_arabe": "تيدة",
    "wilaya_id": 14,
    "daira": "Oued Lili",
    "daira_ar": "وادي ليلي",
    "post_code": "14042",
    "daira_id": 150
  },
  {
    "id": 487,
    "nom_francais": "Tizi Ouzou",
    "nom_arabe": "تيزي وزو",
    "wilaya_id": 15,
    "daira": "Tizi Ouzou",
    "daira_ar": "تيزي وزو",
    "post_code": "15001",
    "daira_id": 172
  },
  {
    "id": 488,
    "nom_francais": "Ain El Hammam",
    "nom_arabe": "عين الحمام",
    "wilaya_id": 15,
    "daira": "Ain El Hammam",
    "daira_ar": "عين الحمام",
    "post_code": "15002",
    "daira_id": 154
  },
  {
    "id": 489,
    "nom_francais": "Akbil",
    "nom_arabe": "أقبيل",
    "wilaya_id": 15,
    "daira": "Ain El Hammam",
    "daira_ar": "عين الحمام",
    "post_code": "15003",
    "daira_id": 154
  },
  {
    "id": 490,
    "nom_francais": "Freha",
    "nom_arabe": "فريحة",
    "wilaya_id": 15,
    "daira": "Azazga",
    "daira_ar": "عزازقة",
    "post_code": "15004",
    "daira_id": 155
  },
  {
    "id": 491,
    "nom_francais": "Souamaa",
    "nom_arabe": "صوامع",
    "wilaya_id": 15,
    "daira": "Mekla",
    "daira_ar": "مقلع",
    "post_code": "15005",
    "daira_id": 167
  },
  {
    "id": 492,
    "nom_francais": "Mechtrass",
    "nom_arabe": "مشطراس",
    "wilaya_id": 15,
    "daira": "Boghni",
    "daira_ar": "بوغني",
    "post_code": "15006",
    "daira_id": 159
  },
  {
    "id": 493,
    "nom_francais": "Irdjen",
    "nom_arabe": "إرجن",
    "wilaya_id": 15,
    "daira": "Larbaa Nath Iraten",
    "daira_ar": "الأربعاء ناث إيراثن",
    "post_code": "15007",
    "daira_id": 164
  },
  {
    "id": 494,
    "nom_francais": "Timizart",
    "nom_arabe": "تيميزارت",
    "wilaya_id": 15,
    "daira": "Ouaguenoun",
    "daira_ar": "واقنون",
    "post_code": "15008",
    "daira_id": 170
  },
  {
    "id": 495,
    "nom_francais": "Makouda",
    "nom_arabe": "ماكودة",
    "wilaya_id": 15,
    "daira": "Makouda",
    "daira_ar": "ماكودة",
    "post_code": "15009",
    "daira_id": 166
  },
  {
    "id": 496,
    "nom_francais": "Draa El Mizan",
    "nom_arabe": "ذراع الميزان",
    "wilaya_id": 15,
    "daira": "Draa El Mizan",
    "daira_ar": "ذراع الميزان",
    "post_code": "15010",
    "daira_id": 162
  },
  {
    "id": 497,
    "nom_francais": "Tizi Ghenif",
    "nom_arabe": "تيزي غنيف",
    "wilaya_id": 15,
    "daira": "Tizi-Ghenif",
    "daira_ar": "تيزي غنيف",
    "post_code": "15011",
    "daira_id": 174
  },
  {
    "id": 498,
    "nom_francais": "Bounouh",
    "nom_arabe": "بونوح",
    "wilaya_id": 15,
    "daira": "Boghni",
    "daira_ar": "بوغني",
    "post_code": "15012",
    "daira_id": 159
  },
  {
    "id": 499,
    "nom_francais": "Ait Chaffaa",
    "nom_arabe": "آيت شفعة",
    "wilaya_id": 15,
    "daira": "Azeffoun",
    "daira_ar": "أزفون",
    "post_code": "15013",
    "daira_id": 156
  },
  {
    "id": 500,
    "nom_francais": "Frikat",
    "nom_arabe": "فريقات",
    "wilaya_id": 15,
    "daira": "Draa El Mizan",
    "daira_ar": "ذراع الميزان",
    "post_code": "15014",
    "daira_id": 162
  },
  {
    "id": 501,
    "nom_francais": "Beni Aissi",
    "nom_arabe": "بني عيسي",
    "wilaya_id": 15,
    "daira": "Beni Douala",
    "daira_ar": "بني دوالة",
    "post_code": "15015",
    "daira_id": 157
  },
  {
    "id": 502,
    "nom_francais": "Beni Zmenzer",
    "nom_arabe": "أيت زمنزر",
    "wilaya_id": 15,
    "daira": "Beni Douala",
    "daira_ar": "بني دوالة",
    "post_code": "15016",
    "daira_id": 157
  },
  {
    "id": 503,
    "nom_francais": "Iferhounene",
    "nom_arabe": "إيفرحونن",
    "wilaya_id": 15,
    "daira": "Iferhounene",
    "daira_ar": "إفرحونان",
    "post_code": "15017",
    "daira_id": 163
  },
  {
    "id": 504,
    "nom_francais": "Azazga",
    "nom_arabe": "عزازقة",
    "wilaya_id": 15,
    "daira": "Azazga",
    "daira_ar": "عزازقة",
    "post_code": "15018",
    "daira_id": 155
  },
  {
    "id": 505,
    "nom_francais": "Iloula Oumalou",
    "nom_arabe": "إيلولة أمالو",
    "wilaya_id": 15,
    "daira": "Bouzeguene",
    "daira_ar": "بوزقن",
    "post_code": "15019",
    "daira_id": 160
  },
  {
    "id": 506,
    "nom_francais": "Yakouren",
    "nom_arabe": "اعكورن",
    "wilaya_id": 15,
    "daira": "Azazga",
    "daira_ar": "عزازقة",
    "post_code": "15020",
    "daira_id": 155
  },
  {
    "id": 507,
    "nom_francais": "Larba Nait Irathen",
    "nom_arabe": "الأربعاء نايت إيراثن",
    "wilaya_id": 15,
    "daira": "Larbaa Nath Iraten",
    "daira_ar": "الأربعاء ناث إيراثن",
    "post_code": "15021",
    "daira_id": 164
  },
  {
    "id": 508,
    "nom_francais": "Tizi Rached",
    "nom_arabe": "تيزي راشد",
    "wilaya_id": 15,
    "daira": "Tizi Rached",
    "daira_ar": "تيزي راشد",
    "post_code": "15022",
    "daira_id": 173
  },
  {
    "id": 509,
    "nom_francais": "Zekri",
    "nom_arabe": "زكري",
    "wilaya_id": 15,
    "daira": "Azazga",
    "daira_ar": "عزازقة",
    "post_code": "15023",
    "daira_id": 155
  },
  {
    "id": 510,
    "nom_francais": "Ouaguenoun",
    "nom_arabe": "واقنون",
    "wilaya_id": 15,
    "daira": "Ouaguenoun",
    "daira_ar": "واقنون",
    "post_code": "15024",
    "daira_id": 170
  },
  {
    "id": 511,
    "nom_francais": "Ain Zaouia",
    "nom_arabe": "عين الزاوية",
    "wilaya_id": 15,
    "daira": "Draa El Mizan",
    "daira_ar": "ذراع الميزان",
    "post_code": "15025",
    "daira_id": 162
  },
  {
    "id": 512,
    "nom_francais": "Mkira",
    "nom_arabe": "مكيرة",
    "wilaya_id": 15,
    "daira": "Tizi-Ghenif",
    "daira_ar": "تيزي غنيف",
    "post_code": "15026",
    "daira_id": 174
  },
  {
    "id": 513,
    "nom_francais": "Ait Yahia",
    "nom_arabe": "أيت يحي",
    "wilaya_id": 15,
    "daira": "Ain El Hammam",
    "daira_ar": "عين الحمام",
    "post_code": "15027",
    "daira_id": 154
  },
  {
    "id": 514,
    "nom_francais": "Ait Mahmoud",
    "nom_arabe": "أيت محمود",
    "wilaya_id": 15,
    "daira": "Beni Douala",
    "daira_ar": "بني دوالة",
    "post_code": "15028",
    "daira_id": 157
  },
  {
    "id": 515,
    "nom_francais": "Maatka",
    "nom_arabe": "المعاتقة",
    "wilaya_id": 15,
    "daira": "Maatkas",
    "daira_ar": "معاتقة",
    "post_code": "15029",
    "daira_id": 165
  },
  {
    "id": 516,
    "nom_francais": "Ait Boumehdi",
    "nom_arabe": "آيت بومھدى",
    "wilaya_id": 15,
    "daira": "Ouacif",
    "daira_ar": "واسيف",
    "post_code": "15030",
    "daira_id": 168
  },
  {
    "id": 517,
    "nom_francais": "Abi Youcef",
    "nom_arabe": "أبي يوسف",
    "wilaya_id": 15,
    "daira": "Ain El Hammam",
    "daira_ar": "عين الحمام",
    "post_code": "15031",
    "daira_id": 154
  },
  {
    "id": 518,
    "nom_francais": "Beni Douala",
    "nom_arabe": "بني دوالة",
    "wilaya_id": 15,
    "daira": "Beni Douala",
    "daira_ar": "بني دوالة",
    "post_code": "15032",
    "daira_id": 157
  },
  {
    "id": 519,
    "nom_francais": "Illilten",
    "nom_arabe": "إليلتن",
    "wilaya_id": 15,
    "daira": "Iferhounene",
    "daira_ar": "إفرحونان",
    "post_code": "15033",
    "daira_id": 163
  },
  {
    "id": 520,
    "nom_francais": "Bouzguen",
    "nom_arabe": "بوزقن",
    "wilaya_id": 15,
    "daira": "Bouzeguene",
    "daira_ar": "بوزقن",
    "post_code": "15034",
    "daira_id": 160
  },
  {
    "id": 521,
    "nom_francais": "Ait Aggouacha",
    "nom_arabe": "أيت أقواشة",
    "wilaya_id": 15,
    "daira": "Larbaa Nath Iraten",
    "daira_ar": "الأربعاء ناث إيراثن",
    "post_code": "15035",
    "daira_id": 164
  },
  {
    "id": 522,
    "nom_francais": "Ouadhia",
    "nom_arabe": "واضية",
    "wilaya_id": 15,
    "daira": "Ouadhias",
    "daira_ar": "واضية",
    "post_code": "15036",
    "daira_id": 169
  },
  {
    "id": 523,
    "nom_francais": "Azzefoun",
    "nom_arabe": "أزفون",
    "wilaya_id": 15,
    "daira": "Azeffoun",
    "daira_ar": "أزفون",
    "post_code": "15037",
    "daira_id": 156
  },
  {
    "id": 524,
    "nom_francais": "Tigzirt",
    "nom_arabe": "تقزيرت",
    "wilaya_id": 15,
    "daira": "Tigzirt",
    "daira_ar": "تيقزيرت",
    "post_code": "15038",
    "daira_id": 171
  },
  {
    "id": 525,
    "nom_francais": "Ait Aissa Mimoun",
    "nom_arabe": "آيت عيسى ميمون",
    "wilaya_id": 15,
    "daira": "Ouaguenoun",
    "daira_ar": "واقنون",
    "post_code": "15039",
    "daira_id": 170
  },
  {
    "id": 526,
    "nom_francais": "Boghni",
    "nom_arabe": "بوغني",
    "wilaya_id": 15,
    "daira": "Boghni",
    "daira_ar": "بوغني",
    "post_code": "15040",
    "daira_id": 159
  },
  {
    "id": 527,
    "nom_francais": "Ifigha",
    "nom_arabe": "ايفيغاء",
    "wilaya_id": 15,
    "daira": "Azazga",
    "daira_ar": "عزازقة",
    "post_code": "15041",
    "daira_id": 155
  },
  {
    "id": 528,
    "nom_francais": "Ait Oumalou",
    "nom_arabe": "آيت أومالو",
    "wilaya_id": 15,
    "daira": "Tizi Rached",
    "daira_ar": "تيزي راشد",
    "post_code": "15042",
    "daira_id": 173
  },
  {
    "id": 529,
    "nom_francais": "Tirmitine",
    "nom_arabe": "ترمتين",
    "wilaya_id": 15,
    "daira": "Draa Ben Khedda",
    "daira_ar": "ذراع بن خدة",
    "post_code": "15043",
    "daira_id": 161
  },
  {
    "id": 530,
    "nom_francais": "Akerrou",
    "nom_arabe": "أقرو",
    "wilaya_id": 15,
    "daira": "Azeffoun",
    "daira_ar": "أزفون",
    "post_code": "15044",
    "daira_id": 156
  },
  {
    "id": 531,
    "nom_francais": "Yatafen",
    "nom_arabe": "يطافن",
    "wilaya_id": 15,
    "daira": "Benni Yenni",
    "daira_ar": "بني يني",
    "post_code": "15045",
    "daira_id": 158
  },
  {
    "id": 532,
    "nom_francais": "Beni Ziki",
    "nom_arabe": "بنى زيكى",
    "wilaya_id": 15,
    "daira": "Bouzeguene",
    "daira_ar": "بوزقن",
    "post_code": "15046",
    "daira_id": 160
  },
  {
    "id": 533,
    "nom_francais": "Draa Ben Khedda",
    "nom_arabe": "ذراع بن خدة",
    "wilaya_id": 15,
    "daira": "Draa Ben Khedda",
    "daira_ar": "ذراع بن خدة",
    "post_code": "15047",
    "daira_id": 161
  },
  {
    "id": 534,
    "nom_francais": "Ouacif",
    "nom_arabe": "واسيف",
    "wilaya_id": 15,
    "daira": "Ouacif",
    "daira_ar": "واسيف",
    "post_code": "15048",
    "daira_id": 168
  },
  {
    "id": 535,
    "nom_francais": "Idjeur",
    "nom_arabe": "آجر",
    "wilaya_id": 15,
    "daira": "Bouzeguene",
    "daira_ar": "بوزقن",
    "post_code": "15049",
    "daira_id": 160
  },
  {
    "id": 536,
    "nom_francais": "Mekla",
    "nom_arabe": "مقلع",
    "wilaya_id": 15,
    "daira": "Mekla",
    "daira_ar": "مقلع",
    "post_code": "15050",
    "daira_id": 167
  },
  {
    "id": 537,
    "nom_francais": "Tizi Nthlata",
    "nom_arabe": "تيزي نثلاثة",
    "wilaya_id": 15,
    "daira": "Ouadhias",
    "daira_ar": "واضية",
    "post_code": "15051",
    "daira_id": 169
  },
  {
    "id": 538,
    "nom_francais": "Beni Yenni",
    "nom_arabe": "بني يني",
    "wilaya_id": 15,
    "daira": "Benni Yenni",
    "daira_ar": "بني يني",
    "post_code": "15052",
    "daira_id": 158
  },
  {
    "id": 539,
    "nom_francais": "Aghrib",
    "nom_arabe": "أغريب",
    "wilaya_id": 15,
    "daira": "Azeffoun",
    "daira_ar": "أزفون",
    "post_code": "15053",
    "daira_id": 156
  },
  {
    "id": 540,
    "nom_francais": "Iflissen",
    "nom_arabe": "إفليسن",
    "wilaya_id": 15,
    "daira": "Tigzirt",
    "daira_ar": "تيقزيرت",
    "post_code": "15054",
    "daira_id": 171
  },
  {
    "id": 541,
    "nom_francais": "Boudjima",
    "nom_arabe": "بوجيمة",
    "wilaya_id": 15,
    "daira": "Makouda",
    "daira_ar": "ماكودة",
    "post_code": "15055",
    "daira_id": 166
  },
  {
    "id": 542,
    "nom_francais": "Ait Yahia Moussa",
    "nom_arabe": "أيت يحي موسى",
    "wilaya_id": 15,
    "daira": "Draa El Mizan",
    "daira_ar": "ذراع الميزان",
    "post_code": "15056",
    "daira_id": 162
  },
  {
    "id": 543,
    "nom_francais": "Souk El Thenine",
    "nom_arabe": "سوق الإثنين",
    "wilaya_id": 15,
    "daira": "Maatkas",
    "daira_ar": "معاتقة",
    "post_code": "15057",
    "daira_id": 165
  },
  {
    "id": 544,
    "nom_francais": "Ait Khelil",
    "nom_arabe": "أيت خليلي",
    "wilaya_id": 15,
    "daira": "Mekla",
    "daira_ar": "مقلع",
    "post_code": "15058",
    "daira_id": 167
  },
  {
    "id": 545,
    "nom_francais": "Sidi Naamane",
    "nom_arabe": "سيدي نعمان",
    "wilaya_id": 15,
    "daira": "Draa Ben Khedda",
    "daira_ar": "ذراع بن خدة",
    "post_code": "15059",
    "daira_id": 161
  },
  {
    "id": 546,
    "nom_francais": "Iboudraren",
    "nom_arabe": "أبودرارن",
    "wilaya_id": 15,
    "daira": "Benni Yenni",
    "daira_ar": "بني يني",
    "post_code": "15060",
    "daira_id": 158
  },
  {
    "id": 547,
    "nom_francais": "Agouni Gueghrane",
    "nom_arabe": "آقنى قغران",
    "wilaya_id": 15,
    "daira": "Ouadhias",
    "daira_ar": "واضية",
    "post_code": "15061",
    "daira_id": 169
  },
  {
    "id": 548,
    "nom_francais": "Mizrana",
    "nom_arabe": "مزرانة",
    "wilaya_id": 15,
    "daira": "Tigzirt",
    "daira_ar": "تيقزيرت",
    "post_code": "15062",
    "daira_id": 171
  },
  {
    "id": 549,
    "nom_francais": "Imsouhal",
    "nom_arabe": "إمسوحال",
    "wilaya_id": 15,
    "daira": "Iferhounene",
    "daira_ar": "إفرحونان",
    "post_code": "15063",
    "daira_id": 163
  },
  {
    "id": 550,
    "nom_francais": "Tadmait",
    "nom_arabe": "تادمايت",
    "wilaya_id": 15,
    "daira": "Draa Ben Khedda",
    "daira_ar": "ذراع بن خدة",
    "post_code": "15064",
    "daira_id": 161
  },
  {
    "id": 551,
    "nom_francais": "Ait Bouadou",
    "nom_arabe": "أيت بوعدو",
    "wilaya_id": 15,
    "daira": "Ouadhias",
    "daira_ar": "واضية",
    "post_code": "15065",
    "daira_id": 169
  },
  {
    "id": 552,
    "nom_francais": "Assi Youcef",
    "nom_arabe": "أسي يوسف",
    "wilaya_id": 15,
    "daira": "Boghni",
    "daira_ar": "بوغني",
    "post_code": "15066",
    "daira_id": 159
  },
  {
    "id": 553,
    "nom_francais": "Ait Toudert",
    "nom_arabe": "أيت تودرت",
    "wilaya_id": 15,
    "daira": "Ouacif",
    "daira_ar": "واسيف",
    "post_code": "15067",
    "daira_id": 168
  },
  {
    "id": 554,
    "nom_francais": "Alger Centre",
    "nom_arabe": "الجزائر الوسطى",
    "wilaya_id": 16,
    "daira": "Sidi M'hamed",
    "daira_ar": "سيدي امحمد",
    "post_code": "16001",
    "daira_id": 186
  },
  {
    "id": 555,
    "nom_francais": "Sidi Mhamed",
    "nom_arabe": "سيدي امحمد",
    "wilaya_id": 16,
    "daira": "Sidi M'hamed",
    "daira_ar": "سيدي امحمد",
    "post_code": "16002",
    "daira_id": 186
  },
  {
    "id": 556,
    "nom_francais": "El Madania",
    "nom_arabe": "المدنية",
    "wilaya_id": 16,
    "daira": "Sidi M'hamed",
    "daira_ar": "سيدي امحمد",
    "post_code": "16003",
    "daira_id": 186
  },
  {
    "id": 557,
    "nom_francais": "Belouizdad",
    "nom_arabe": "بلوزداد",
    "wilaya_id": 16,
    "daira": "Hussein Dey",
    "daira_ar": "حسين داي",
    "post_code": "16004",
    "daira_id": 184
  },
  {
    "id": 558,
    "nom_francais": "Bab El Oued",
    "nom_arabe": "باب الواد",
    "wilaya_id": 16,
    "daira": "Bab El Oued",
    "daira_ar": "باب الوادي",
    "post_code": "16005",
    "daira_id": 175
  },
  {
    "id": 559,
    "nom_francais": "Bologhine",
    "nom_arabe": "بولوغين",
    "wilaya_id": 16,
    "daira": "Bab El Oued",
    "daira_ar": "باب الوادي",
    "post_code": "16006",
    "daira_id": 175
  },
  {
    "id": 560,
    "nom_francais": "Casbah",
    "nom_arabe": "القصبة",
    "wilaya_id": 16,
    "daira": "Bab El Oued",
    "daira_ar": "باب الوادي",
    "post_code": "16007",
    "daira_id": 175
  },
  {
    "id": 561,
    "nom_francais": "Oued Koriche",
    "nom_arabe": "وادي قريش",
    "wilaya_id": 16,
    "daira": "Bab El Oued",
    "daira_ar": "باب الوادي",
    "post_code": "16008",
    "daira_id": 175
  },
  {
    "id": 562,
    "nom_francais": "Bir Mourad Rais",
    "nom_arabe": "بير مراد رايس",
    "wilaya_id": 16,
    "daira": "Bir Mourad Rais",
    "daira_ar": "بئر مراد رايس",
    "post_code": "16009",
    "daira_id": 177
  },
  {
    "id": 563,
    "nom_francais": "El Biar",
    "nom_arabe": "الآبيار",
    "wilaya_id": 16,
    "daira": "Bouzareah",
    "daira_ar": "بوزريعة",
    "post_code": "16010",
    "daira_id": 179
  },
  {
    "id": 564,
    "nom_francais": "Bouzareah",
    "nom_arabe": "بوزريعة",
    "wilaya_id": 16,
    "daira": "Bouzareah",
    "daira_ar": "بوزريعة",
    "post_code": "16011",
    "daira_id": 179
  },
  {
    "id": 565,
    "nom_francais": "Birkhadem",
    "nom_arabe": "بئر خادم",
    "wilaya_id": 16,
    "daira": "Bir Mourad Rais",
    "daira_ar": "بئر مراد رايس",
    "post_code": "16012",
    "daira_id": 177
  },
  {
    "id": 566,
    "nom_francais": "El Harrach",
    "nom_arabe": "الحراش",
    "wilaya_id": 16,
    "daira": "El Harrach",
    "daira_ar": "الحراش",
    "post_code": "16013",
    "daira_id": 183
  },
  {
    "id": 567,
    "nom_francais": "Baraki",
    "nom_arabe": "براقي",
    "wilaya_id": 16,
    "daira": "Baraki",
    "daira_ar": "براقي",
    "post_code": "16014",
    "daira_id": 176
  },
  {
    "id": 568,
    "nom_francais": "Oued Smar",
    "nom_arabe": "وادي سمار",
    "wilaya_id": 16,
    "daira": "El Harrach",
    "daira_ar": "الحراش",
    "post_code": "16015",
    "daira_id": 183
  },
  {
    "id": 569,
    "nom_francais": "Bourouba",
    "nom_arabe": "بوروبة",
    "wilaya_id": 16,
    "daira": "El Harrach",
    "daira_ar": "الحراش",
    "post_code": "16016",
    "daira_id": 183
  },
  {
    "id": 570,
    "nom_francais": "Hussein Dey",
    "nom_arabe": "حسين داي",
    "wilaya_id": 16,
    "daira": "Hussein Dey",
    "daira_ar": "حسين داي",
    "post_code": "16017",
    "daira_id": 184
  },
  {
    "id": 571,
    "nom_francais": "Kouba",
    "nom_arabe": "القبة",
    "wilaya_id": 16,
    "daira": "Hussein Dey",
    "daira_ar": "حسين داي",
    "post_code": "16018",
    "daira_id": 184
  },
  {
    "id": 572,
    "nom_francais": "Bachedjerah",
    "nom_arabe": "باش جراح",
    "wilaya_id": 16,
    "daira": "El Harrach",
    "daira_ar": "الحراش",
    "post_code": "16019",
    "daira_id": 183
  },
  {
    "id": 573,
    "nom_francais": "Dar El Beida",
    "nom_arabe": "الدار البيضاء",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16020",
    "daira_id": 181
  },
  {
    "id": 574,
    "nom_francais": "Bab Azzouar",
    "nom_arabe": "باب الزوار",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16021",
    "daira_id": 181
  },
  {
    "id": 575,
    "nom_francais": "Ben Aknoun",
    "nom_arabe": "بن عكنون",
    "wilaya_id": 16,
    "daira": "Bouzareah",
    "daira_ar": "بوزريعة",
    "post_code": "16022",
    "daira_id": 179
  },
  {
    "id": 576,
    "nom_francais": "Dely Ibrahim",
    "nom_arabe": "دالي ابراهيم",
    "wilaya_id": 16,
    "daira": "Cheraga",
    "daira_ar": "الشراقة",
    "post_code": "16023",
    "daira_id": 180
  },
  {
    "id": 577,
    "nom_francais": "El Hammamet",
    "nom_arabe": "الحمامات",
    "wilaya_id": 16,
    "daira": "Cheraga",
    "daira_ar": "الشراقة",
    "post_code": "16024",
    "daira_id": 180
  },
  {
    "id": 578,
    "nom_francais": "Rais Hamidou",
    "nom_arabe": "الرايس حميدو",
    "wilaya_id": 16,
    "daira": "Bab El Oued",
    "daira_ar": "باب الوادي",
    "post_code": "16025",
    "daira_id": 175
  },
  {
    "id": 579,
    "nom_francais": "Djasr Kasentina",
    "nom_arabe": "جسر قسنطينة",
    "wilaya_id": 16,
    "daira": "Bir Mourad Rais",
    "daira_ar": "بئر مراد رايس",
    "post_code": "16026",
    "daira_id": 177
  },
  {
    "id": 580,
    "nom_francais": "El Mouradia",
    "nom_arabe": "المرادية",
    "wilaya_id": 16,
    "daira": "Sidi M'hamed",
    "daira_ar": "سيدي امحمد",
    "post_code": "16027",
    "daira_id": 186
  },
  {
    "id": 581,
    "nom_francais": "Hydra",
    "nom_arabe": "حيدرة",
    "wilaya_id": 16,
    "daira": "Bir Mourad Rais",
    "daira_ar": "بئر مراد رايس",
    "post_code": "16028",
    "daira_id": 177
  },
  {
    "id": 582,
    "nom_francais": "Mohammadia",
    "nom_arabe": "المحمدية",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16029",
    "daira_id": 181
  },
  {
    "id": 583,
    "nom_francais": "Bordj El Kiffan",
    "nom_arabe": "برج الكيفان",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16030",
    "daira_id": 181
  },
  {
    "id": 584,
    "nom_francais": "El Magharia",
    "nom_arabe": "المقرية",
    "wilaya_id": 16,
    "daira": "Hussein Dey",
    "daira_ar": "حسين داي",
    "post_code": "16031",
    "daira_id": 184
  },
  {
    "id": 585,
    "nom_francais": "Beni Messous",
    "nom_arabe": "بني مسوس",
    "wilaya_id": 16,
    "daira": "Bouzareah",
    "daira_ar": "بوزريعة",
    "post_code": "16032",
    "daira_id": 179
  },
  {
    "id": 586,
    "nom_francais": "Les Eucalyptus",
    "nom_arabe": "الكليتوس",
    "wilaya_id": 16,
    "daira": "Baraki",
    "daira_ar": "براقي",
    "post_code": "16033",
    "daira_id": 176
  },
  {
    "id": 587,
    "nom_francais": "Birtouta",
    "nom_arabe": "بئر توتة",
    "wilaya_id": 16,
    "daira": "Birtouta",
    "daira_ar": "بئر توتة",
    "post_code": "16034",
    "daira_id": 178
  },
  {
    "id": 588,
    "nom_francais": "Tassala El Merdja",
    "nom_arabe": "تسالة المرجة",
    "wilaya_id": 16,
    "daira": "Birtouta",
    "daira_ar": "بئر توتة",
    "post_code": "16035",
    "daira_id": 178
  },
  {
    "id": 589,
    "nom_francais": "Ouled Chebel",
    "nom_arabe": "أولاد الشبل",
    "wilaya_id": 16,
    "daira": "Birtouta",
    "daira_ar": "بئر توتة",
    "post_code": "16036",
    "daira_id": 178
  },
  {
    "id": 590,
    "nom_francais": "Sidi Moussa",
    "nom_arabe": "سيدي موسى",
    "wilaya_id": 16,
    "daira": "Baraki",
    "daira_ar": "براقي",
    "post_code": "16037",
    "daira_id": 176
  },
  {
    "id": 591,
    "nom_francais": "Ain Taya",
    "nom_arabe": "عين طاية",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16038",
    "daira_id": 181
  },
  {
    "id": 592,
    "nom_francais": "Bordj El Bahri",
    "nom_arabe": "برج البحري",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16039",
    "daira_id": 181
  },
  {
    "id": 593,
    "nom_francais": "Marsa",
    "nom_arabe": "المرسى",
    "wilaya_id": 16,
    "daira": "Dar El Beida",
    "daira_ar": "الدار البيضاء",
    "post_code": "16040",
    "daira_id": 181
  },
  {
    "id": 594,
    "nom_francais": "Haraoua",
    "nom_arabe": "هراوة",
    "wilaya_id": 16,
    "daira": "Rouiba",
    "daira_ar": "الرويبة",
    "post_code": "16041",
    "daira_id": 185
  },
  {
    "id": 595,
    "nom_francais": "Rouiba",
    "nom_arabe": "رويبة",
    "wilaya_id": 16,
    "daira": "Rouiba",
    "daira_ar": "الرويبة",
    "post_code": "16042",
    "daira_id": 185
  },
  {
    "id": 596,
    "nom_francais": "Reghaia",
    "nom_arabe": "الرغاية",
    "wilaya_id": 16,
    "daira": "Rouiba",
    "daira_ar": "الرويبة",
    "post_code": "16043",
    "daira_id": 185
  },
  {
    "id": 597,
    "nom_francais": "Ain Benian",
    "nom_arabe": "عين بنيان",
    "wilaya_id": 16,
    "daira": "Cheraga",
    "daira_ar": "الشراقة",
    "post_code": "16044",
    "daira_id": 180
  },
  {
    "id": 598,
    "nom_francais": "Staoueli",
    "nom_arabe": "سطاوالي",
    "wilaya_id": 16,
    "daira": "Zeralda",
    "daira_ar": "زرالدة",
    "post_code": "16045",
    "daira_id": 187
  },
  {
    "id": 599,
    "nom_francais": "Zeralda",
    "nom_arabe": "زرالدة",
    "wilaya_id": 16,
    "daira": "Zeralda",
    "daira_ar": "زرالدة",
    "post_code": "16046",
    "daira_id": 187
  },
  {
    "id": 600,
    "nom_francais": "Mahelma",
    "nom_arabe": "محالمة",
    "wilaya_id": 16,
    "daira": "Zeralda",
    "daira_ar": "زرالدة",
    "post_code": "16047",
    "daira_id": 187
  },
  {
    "id": 601,
    "nom_francais": "Rahmania",
    "nom_arabe": "رحمانية",
    "wilaya_id": 16,
    "daira": "Zeralda",
    "daira_ar": "زرالدة",
    "post_code": "16048",
    "daira_id": 187
  },
  {
    "id": 602,
    "nom_francais": "Souidania",
    "nom_arabe": "سويدانية",
    "wilaya_id": 16,
    "daira": "Zeralda",
    "daira_ar": "زرالدة",
    "post_code": "16049",
    "daira_id": 187
  },
  {
    "id": 603,
    "nom_francais": "Cheraga",
    "nom_arabe": "شراقة",
    "wilaya_id": 16,
    "daira": "Cheraga",
    "daira_ar": "الشراقة",
    "post_code": "16050",
    "daira_id": 180
  },
  {
    "id": 604,
    "nom_francais": "Ouled Fayet",
    "nom_arabe": "أولاد فايت",
    "wilaya_id": 16,
    "daira": "Cheraga",
    "daira_ar": "الشراقة",
    "post_code": "16051",
    "daira_id": 180
  },
  {
    "id": 605,
    "nom_francais": "El Achour",
    "nom_arabe": "العاشور",
    "wilaya_id": 16,
    "daira": "Draria",
    "daira_ar": "الدرارية",
    "post_code": "16052",
    "daira_id": 182
  },
  {
    "id": 606,
    "nom_francais": "Draria",
    "nom_arabe": "درارية",
    "wilaya_id": 16,
    "daira": "Draria",
    "daira_ar": "الدرارية",
    "post_code": "16053",
    "daira_id": 182
  },
  {
    "id": 607,
    "nom_francais": "Douera",
    "nom_arabe": "دويرة",
    "wilaya_id": 16,
    "daira": "Draria",
    "daira_ar": "الدرارية",
    "post_code": "16054",
    "daira_id": 182
  },
  {
    "id": 608,
    "nom_francais": "Baba Hassen",
    "nom_arabe": "بابا حسن",
    "wilaya_id": 16,
    "daira": "Draria",
    "daira_ar": "الدرارية",
    "post_code": "16055",
    "daira_id": 182
  },
  {
    "id": 609,
    "nom_francais": "Khracia",
    "nom_arabe": "خرايسية",
    "wilaya_id": 16,
    "daira": "Draria",
    "daira_ar": "الدرارية",
    "post_code": "16056",
    "daira_id": 182
  },
  {
    "id": 610,
    "nom_francais": "Saoula",
    "nom_arabe": "السحاولة",
    "wilaya_id": 16,
    "daira": "Bir Mourad Rais",
    "daira_ar": "بئر مراد رايس",
    "post_code": "16057",
    "daira_id": 177
  },
  {
    "id": 611,
    "nom_francais": "Djelfa",
    "nom_arabe": "الجلفة",
    "wilaya_id": 17,
    "daira": "Djelfa",
    "daira_ar": "الجلفة",
    "post_code": "17001",
    "daira_id": 191
  },
  {
    "id": 612,
    "nom_francais": "Moudjebara",
    "nom_arabe": "مجبرة",
    "wilaya_id": 17,
    "daira": "Ain El Ibel",
    "daira_ar": "عين الإبل",
    "post_code": "17002",
    "daira_id": 188
  },
  {
    "id": 613,
    "nom_francais": "El Guedid",
    "nom_arabe": "القديد",
    "wilaya_id": 17,
    "daira": "Charef",
    "daira_ar": "الشارف",
    "post_code": "17003",
    "daira_id": 189
  },
  {
    "id": 614,
    "nom_francais": "Hassi Bahbah",
    "nom_arabe": "حاسي بحبح",
    "wilaya_id": 17,
    "daira": "Hassi Bahbah",
    "daira_ar": "حاسي بحبح",
    "post_code": "17004",
    "daira_id": 193
  },
  {
    "id": 615,
    "nom_francais": "Ain Maabed",
    "nom_arabe": "عين معبد",
    "wilaya_id": 17,
    "daira": "Hassi Bahbah",
    "daira_ar": "حاسي بحبح",
    "post_code": "17005",
    "daira_id": 193
  },
  {
    "id": 616,
    "nom_francais": "Sed Rahal",
    "nom_arabe": "سد رحال",
    "wilaya_id": 66,
    "daira": "Messaad",
    "daira_ar": "مسعد",
    "post_code": "66006",
    "daira_id": 533
  },
  {
    "id": 617,
    "nom_francais": "Feidh El Botma",
    "nom_arabe": "فيض البطمة",
    "wilaya_id": 66,
    "daira": "Faidh El Botma",
    "daira_ar": "فيض البطمة",
    "post_code": "17007",
    "daira_id": 532
  },
  {
    "id": 618,
    "nom_francais": "Birine",
    "nom_arabe": "البيرين",
    "wilaya_id": 65,
    "daira": "Birine",
    "daira_ar": "بيرين",
    "post_code": "65008",
    "daira_id": 529
  },
  {
    "id": 619,
    "nom_francais": "Bouira Lahdeb",
    "nom_arabe": "بويرة الأحداب",
    "wilaya_id": 65,
    "daira": "Had Sahary",
    "daira_ar": "حد الصحاري",
    "post_code": "17009",
    "daira_id": 530
  },
  {
    "id": 620,
    "nom_francais": "Zaccar",
    "nom_arabe": "زكار",
    "wilaya_id": 17,
    "daira": "Ain El Ibel",
    "daira_ar": "عين الإبل",
    "post_code": "17010",
    "daira_id": 188
  },
  {
    "id": 621,
    "nom_francais": "El Khemis",
    "nom_arabe": "الخميس",
    "wilaya_id": 65,
    "daira": "Sidi Laadjel",
    "daira_ar": "سيدي لعجال",
    "post_code": "17011",
    "daira_id": 531
  },
  {
    "id": 622,
    "nom_francais": "Sidi Baizid",
    "nom_arabe": "سيدي بايزيد",
    "wilaya_id": 17,
    "daira": "Dar Chioukh",
    "daira_ar": "دار الشيوخ",
    "post_code": "17012",
    "daira_id": 190
  },
  {
    "id": 623,
    "nom_francais": "M'Liliha",
    "nom_arabe": "المليليحة",
    "wilaya_id": 17,
    "daira": "Dar Chioukh",
    "daira_ar": "دار الشيوخ",
    "post_code": "17013",
    "daira_id": 190
  },
  {
    "id": 624,
    "nom_francais": "El Idrissia",
    "nom_arabe": "الإدريسية",
    "wilaya_id": 17,
    "daira": "El Idrissia",
    "daira_ar": "الادريسية",
    "post_code": "17014",
    "daira_id": 192
  },
  {
    "id": 625,
    "nom_francais": "Douis",
    "nom_arabe": "الدويس",
    "wilaya_id": 17,
    "daira": "El Idrissia",
    "daira_ar": "الادريسية",
    "post_code": "17015",
    "daira_id": 192
  },
  {
    "id": 626,
    "nom_francais": "Hassi El Euch",
    "nom_arabe": "حاسي العش",
    "wilaya_id": 17,
    "daira": "Hassi Bahbah",
    "daira_ar": "حاسي بحبح",
    "post_code": "17016",
    "daira_id": 193
  },
  {
    "id": 627,
    "nom_francais": "Messaad",
    "nom_arabe": "مسعد",
    "wilaya_id": 66,
    "daira": "Messaad",
    "daira_ar": "مسعد",
    "post_code": "66017",
    "daira_id": 533
  },
  {
    "id": 628,
    "nom_francais": "Guettara",
    "nom_arabe": "قتارة",
    "wilaya_id": 66,
    "daira": "Messaad",
    "daira_ar": "مسعد",
    "post_code": "17018",
    "daira_id": 533
  },
  {
    "id": 629,
    "nom_francais": "Sidi Ladjel",
    "nom_arabe": "سيدي لعجال",
    "wilaya_id": 65,
    "daira": null,
    "daira_ar": null,
    "post_code": "65019",
    "daira_id": null
  },
  {
    "id": 630,
    "nom_francais": "Had Sahary",
    "nom_arabe": "حد الصحاري",
    "wilaya_id": 65,
    "daira": "Had Sahary",
    "daira_ar": "حد الصحاري",
    "post_code": "65020",
    "daira_id": 530
  },
  {
    "id": 631,
    "nom_francais": "Guernini",
    "nom_arabe": "القرنيني",
    "wilaya_id": 65,
    "daira": "Ain Oussera",
    "daira_ar": "عين وسارة",
    "post_code": "65021",
    "daira_id": 528
  },
  {
    "id": 632,
    "nom_francais": "Selmana",
    "nom_arabe": "سلمانة",
    "wilaya_id": 66,
    "daira": "Messaad",
    "daira_ar": "مسعد",
    "post_code": "66022",
    "daira_id": 533
  },
  {
    "id": 633,
    "nom_francais": "Ain Chouhada",
    "nom_arabe": "عين الشهداء",
    "wilaya_id": 17,
    "daira": "El Idrissia",
    "daira_ar": "الادريسية",
    "post_code": "17023",
    "daira_id": 192
  },
  {
    "id": 634,
    "nom_francais": "Oum Laadham",
    "nom_arabe": "ام العظام",
    "wilaya_id": 66,
    "daira": "Faidh El Botma",
    "daira_ar": "فيض البطمة",
    "post_code": "17024",
    "daira_id": 532
  },
  {
    "id": 635,
    "nom_francais": "Dar Chouikh",
    "nom_arabe": "دار الشيوخ",
    "wilaya_id": 17,
    "daira": "Dar Chioukh",
    "daira_ar": "دار الشيوخ",
    "post_code": "17025",
    "daira_id": 190
  },
  {
    "id": 636,
    "nom_francais": "Charef",
    "nom_arabe": "الشارف",
    "wilaya_id": 17,
    "daira": "Charef",
    "daira_ar": "الشارف",
    "post_code": "17026",
    "daira_id": 189
  },
  {
    "id": 637,
    "nom_francais": "Beni Yacoub",
    "nom_arabe": "بن يعقوب",
    "wilaya_id": 17,
    "daira": null,
    "daira_ar": null,
    "post_code": "17027",
    "daira_id": null
  },
  {
    "id": 638,
    "nom_francais": "Zaafrane",
    "nom_arabe": "الزعفران",
    "wilaya_id": 17,
    "daira": "Hassi Bahbah",
    "daira_ar": "حاسي بحبح",
    "post_code": "17028",
    "daira_id": 193
  },
  {
    "id": 639,
    "nom_francais": "Deldoul",
    "nom_arabe": "دلدول",
    "wilaya_id": 66,
    "daira": "Messaad",
    "daira_ar": "مسعد",
    "post_code": "66029",
    "daira_id": 533
  },
  {
    "id": 640,
    "nom_francais": "Ain El Ibel",
    "nom_arabe": "عين الابل",
    "wilaya_id": 17,
    "daira": "Ain El Ibel",
    "daira_ar": "عين الإبل",
    "post_code": "17030",
    "daira_id": 188
  },
  {
    "id": 641,
    "nom_francais": "Ain Oussera",
    "nom_arabe": "عين وسارة",
    "wilaya_id": 65,
    "daira": "Ain Oussera",
    "daira_ar": "عين وسارة",
    "post_code": "65031",
    "daira_id": 528
  },
  {
    "id": 642,
    "nom_francais": "Benhar",
    "nom_arabe": "بنهار",
    "wilaya_id": 65,
    "daira": "Birine",
    "daira_ar": "بيرين",
    "post_code": "65032",
    "daira_id": 529
  },
  {
    "id": 643,
    "nom_francais": "Hassi Fedoul",
    "nom_arabe": "حاسي فدول",
    "wilaya_id": 65,
    "daira": "Sidi Laadjel",
    "daira_ar": "سيدي لعجال",
    "post_code": "65033",
    "daira_id": 531
  },
  {
    "id": 644,
    "nom_francais": "Amourah",
    "nom_arabe": "عمورة",
    "wilaya_id": 66,
    "daira": "Faidh El Botma",
    "daira_ar": "فيض البطمة",
    "post_code": "17034",
    "daira_id": 532
  },
  {
    "id": 645,
    "nom_francais": "Ain Fekka",
    "nom_arabe": "عين افقة",
    "wilaya_id": 65,
    "daira": "Had Sahary",
    "daira_ar": "حد الصحاري",
    "post_code": "65035",
    "daira_id": 530
  },
  {
    "id": 646,
    "nom_francais": "Tadmit",
    "nom_arabe": "تعضميت",
    "wilaya_id": 17,
    "daira": null,
    "daira_ar": null,
    "post_code": "17036",
    "daira_id": null
  },
  {
    "id": 647,
    "nom_francais": "Jijel",
    "nom_arabe": "جيجل",
    "wilaya_id": 18,
    "daira": "Jijel",
    "daira_ar": "جيجل",
    "post_code": "18001",
    "daira_id": 199
  },
  {
    "id": 648,
    "nom_francais": "Erraguene",
    "nom_arabe": "إراڨن",
    "wilaya_id": 18,
    "daira": "Ziamah Mansouriah",
    "daira_ar": "زيامة منصورية",
    "post_code": "18002",
    "daira_id": 204
  },
  {
    "id": 649,
    "nom_francais": "El Aouana",
    "nom_arabe": "العوانة",
    "wilaya_id": 18,
    "daira": "El Aouana",
    "daira_ar": "العوانة",
    "post_code": "18003",
    "daira_id": 197
  },
  {
    "id": 650,
    "nom_francais": "Ziamma Mansouriah",
    "nom_arabe": "زيامة منصورية",
    "wilaya_id": 18,
    "daira": "Ziamah Mansouriah",
    "daira_ar": "زيامة منصورية",
    "post_code": "18004",
    "daira_id": 204
  },
  {
    "id": 651,
    "nom_francais": "Taher",
    "nom_arabe": "الطاهير",
    "wilaya_id": 18,
    "daira": "Taher",
    "daira_ar": "الطاهير",
    "post_code": "18005",
    "daira_id": 202
  },
  {
    "id": 652,
    "nom_francais": "Emir Abdelkader",
    "nom_arabe": "الامير عبد القادر",
    "wilaya_id": 18,
    "daira": "Taher",
    "daira_ar": "الطاهير",
    "post_code": "18006",
    "daira_id": 202
  },
  {
    "id": 653,
    "nom_francais": "Chekfa",
    "nom_arabe": "الشقفة",
    "wilaya_id": 18,
    "daira": "Chekfa",
    "daira_ar": "الشقفة",
    "post_code": "18007",
    "daira_id": 194
  },
  {
    "id": 654,
    "nom_francais": "Chahna",
    "nom_arabe": "الشحنة",
    "wilaya_id": 18,
    "daira": "Taher",
    "daira_ar": "الطاهير",
    "post_code": "18008",
    "daira_id": 202
  },
  {
    "id": 655,
    "nom_francais": "El Milia",
    "nom_arabe": "الميلية",
    "wilaya_id": 18,
    "daira": "El Milia",
    "daira_ar": "الميلية",
    "post_code": "18009",
    "daira_id": 198
  },
  {
    "id": 656,
    "nom_francais": "Sidi Maarouf",
    "nom_arabe": "سيدي معروف",
    "wilaya_id": 18,
    "daira": "Sidi Marouf",
    "daira_ar": "سيدي معروف",
    "post_code": "18010",
    "daira_id": 201
  },
  {
    "id": 657,
    "nom_francais": "Settara",
    "nom_arabe": "السطارة",
    "wilaya_id": 18,
    "daira": "Settara",
    "daira_ar": "السطارة",
    "post_code": "18011",
    "daira_id": 200
  },
  {
    "id": 658,
    "nom_francais": "El Ancer",
    "nom_arabe": "العنصر",
    "wilaya_id": 18,
    "daira": "El Ancer",
    "daira_ar": "العنصر",
    "post_code": "18012",
    "daira_id": 196
  },
  {
    "id": 659,
    "nom_francais": "Sidi Abdelaziz",
    "nom_arabe": "سيدي عبد العزيز",
    "wilaya_id": 18,
    "daira": "Chekfa",
    "daira_ar": "الشقفة",
    "post_code": "18013",
    "daira_id": 194
  },
  {
    "id": 660,
    "nom_francais": "Kaous",
    "nom_arabe": "قاوس",
    "wilaya_id": 18,
    "daira": "Texenna",
    "daira_ar": "تاكسنة",
    "post_code": "18014",
    "daira_id": 203
  },
  {
    "id": 661,
    "nom_francais": "Ghebala",
    "nom_arabe": "غبالة",
    "wilaya_id": 18,
    "daira": "Settara",
    "daira_ar": "السطارة",
    "post_code": "18015",
    "daira_id": 200
  },
  {
    "id": 662,
    "nom_francais": "Bouraoui Belhadef",
    "nom_arabe": "بوراوي بلهادف",
    "wilaya_id": 18,
    "daira": "El Ancer",
    "daira_ar": "العنصر",
    "post_code": "18016",
    "daira_id": 196
  },
  {
    "id": 663,
    "nom_francais": "Djmila",
    "nom_arabe": "جيملة",
    "wilaya_id": 18,
    "daira": "Djimla",
    "daira_ar": "جيملة",
    "post_code": "18017",
    "daira_id": 195
  },
  {
    "id": 664,
    "nom_francais": "Selma Benziada",
    "nom_arabe": "سلمى بن زيادة",
    "wilaya_id": 18,
    "daira": "El Aouana",
    "daira_ar": "العوانة",
    "post_code": "18018",
    "daira_id": 197
  },
  {
    "id": 665,
    "nom_francais": "Boussif Ouled Askeur",
    "nom_arabe": "أولاد عسكر",
    "wilaya_id": 18,
    "daira": "Taher",
    "daira_ar": "الطاهير",
    "post_code": "18019",
    "daira_id": 202
  },
  {
    "id": 666,
    "nom_francais": "El Kennar Nouchfi",
    "nom_arabe": "القنار",
    "wilaya_id": 18,
    "daira": "Chekfa",
    "daira_ar": "الشقفة",
    "post_code": "18020",
    "daira_id": 194
  },
  {
    "id": 667,
    "nom_francais": "Ouled Yahia Khadrouch",
    "nom_arabe": "اولاد يحيى",
    "wilaya_id": 18,
    "daira": "El Milia",
    "daira_ar": "الميلية",
    "post_code": "18021",
    "daira_id": 198
  },
  {
    "id": 668,
    "nom_francais": "Boudria Beni Yadjis",
    "nom_arabe": "بودريعة بن ياجيس",
    "wilaya_id": 18,
    "daira": "Djimla",
    "daira_ar": "جيملة",
    "post_code": "18022",
    "daira_id": 195
  },
  {
    "id": 669,
    "nom_francais": "Kemir Oued Adjoul",
    "nom_arabe": "بني بلعيد",
    "wilaya_id": 18,
    "daira": "El Ancer",
    "daira_ar": "العنصر",
    "post_code": "18023",
    "daira_id": 196
  },
  {
    "id": 670,
    "nom_francais": "Texena",
    "nom_arabe": "تاكسنة",
    "wilaya_id": 18,
    "daira": "Texenna",
    "daira_ar": "تاكسنة",
    "post_code": "18024",
    "daira_id": 203
  },
  {
    "id": 671,
    "nom_francais": "Djemaa Beni Habibi",
    "nom_arabe": "الجمعة بني حبيبي",
    "wilaya_id": 18,
    "daira": "El Ancer",
    "daira_ar": "العنصر",
    "post_code": "18025",
    "daira_id": 196
  },
  {
    "id": 672,
    "nom_francais": "Bordj T'her",
    "nom_arabe": "برج الطهر",
    "wilaya_id": 18,
    "daira": "Chekfa",
    "daira_ar": "الشقفة",
    "post_code": "18026",
    "daira_id": 194
  },
  {
    "id": 673,
    "nom_francais": "Ouled Rabah",
    "nom_arabe": "ولاد رابح",
    "wilaya_id": 18,
    "daira": "Sidi Marouf",
    "daira_ar": "سيدي معروف",
    "post_code": "18027",
    "daira_id": 201
  },
  {
    "id": 674,
    "nom_francais": "Ouadjana",
    "nom_arabe": "وجانة",
    "wilaya_id": 18,
    "daira": "Taher",
    "daira_ar": "الطاهير",
    "post_code": "18028",
    "daira_id": 202
  },
  {
    "id": 675,
    "nom_francais": "Setif",
    "nom_arabe": "سطيف‎",
    "wilaya_id": 19,
    "daira": "Setif",
    "daira_ar": "سطيف",
    "post_code": "19001",
    "daira_id": 224
  },
  {
    "id": 676,
    "nom_francais": "Ain El Kebira",
    "nom_arabe": "عين الكبيرة",
    "wilaya_id": 19,
    "daira": "Ain El Kebira",
    "daira_ar": "عين الكبيرة",
    "post_code": "19002",
    "daira_id": 207
  },
  {
    "id": 677,
    "nom_francais": "Beni Aziz",
    "nom_arabe": "بني عزيز",
    "wilaya_id": 19,
    "daira": "Beni Aziz",
    "daira_ar": "بني عزيز",
    "post_code": "19003",
    "daira_id": 211
  },
  {
    "id": 678,
    "nom_francais": "Ouled Sidi Ahmed",
    "nom_arabe": "أولاد سي أحمد",
    "wilaya_id": 19,
    "daira": "Ain Oulmene",
    "daira_ar": "عين ولمان",
    "post_code": "19004",
    "daira_id": 208
  },
  {
    "id": 679,
    "nom_francais": "Boutaleb",
    "nom_arabe": "بوطالب",
    "wilaya_id": 19,
    "daira": "Salah Bey",
    "daira_ar": "صالح باي",
    "post_code": "19005",
    "daira_id": 223
  },
  {
    "id": 680,
    "nom_francais": "Ain Roua",
    "nom_arabe": "عين الروى",
    "wilaya_id": 19,
    "daira": "Bougaa",
    "daira_ar": "بوقاعة",
    "post_code": "19006",
    "daira_id": 215
  },
  {
    "id": 681,
    "nom_francais": "Draa Kebila",
    "nom_arabe": "ذراع قبيلة",
    "wilaya_id": 19,
    "daira": "Hammam Guergour",
    "daira_ar": "حمام قرقور",
    "post_code": "19007",
    "daira_id": 220
  },
  {
    "id": 682,
    "nom_francais": "Bir El Arch",
    "nom_arabe": "بئر العرش",
    "wilaya_id": 19,
    "daira": "Bir El Arch",
    "daira_ar": "بئر العرش",
    "post_code": "19008",
    "daira_id": 213
  },
  {
    "id": 683,
    "nom_francais": "Beni Chebana",
    "nom_arabe": "بني شبانة",
    "wilaya_id": 19,
    "daira": "Beni Ourtilane",
    "daira_ar": "بني ورتيلان",
    "post_code": "19009",
    "daira_id": 212
  },
  {
    "id": 684,
    "nom_francais": "Ouled Tebben",
    "nom_arabe": "أولاد تبــان",
    "wilaya_id": 19,
    "daira": "Salah Bey",
    "daira_ar": "صالح باي",
    "post_code": "19010",
    "daira_id": 223
  },
  {
    "id": 685,
    "nom_francais": "Hamma",
    "nom_arabe": "حــامة",
    "wilaya_id": 19,
    "daira": "Salah Bey",
    "daira_ar": "صالح باي",
    "post_code": "19011",
    "daira_id": 223
  },
  {
    "id": 686,
    "nom_francais": "Maaouia",
    "nom_arabe": "معـاويـة",
    "wilaya_id": 19,
    "daira": "Beni Aziz",
    "daira_ar": "بني عزيز",
    "post_code": "19012",
    "daira_id": 211
  },
  {
    "id": 687,
    "nom_francais": "Ain Legraj",
    "nom_arabe": "عين لڨراج",
    "wilaya_id": 19,
    "daira": "Beni Ourtilane",
    "daira_ar": "بني ورتيلان",
    "post_code": "19013",
    "daira_id": 212
  },
  {
    "id": 688,
    "nom_francais": "Ain Abessa",
    "nom_arabe": "عين عباسـة",
    "wilaya_id": 19,
    "daira": "Ain Arnat",
    "daira_ar": "عين أرنات",
    "post_code": "19014",
    "daira_id": 205
  },
  {
    "id": 689,
    "nom_francais": "Dehamcha",
    "nom_arabe": "الدهامشة",
    "wilaya_id": 19,
    "daira": "Ain El Kebira",
    "daira_ar": "عين الكبيرة",
    "post_code": "19015",
    "daira_id": 207
  },
  {
    "id": 690,
    "nom_francais": "Babor",
    "nom_arabe": "بابور",
    "wilaya_id": 19,
    "daira": "Babor",
    "daira_ar": "بابور",
    "post_code": "19016",
    "daira_id": 210
  },
  {
    "id": 691,
    "nom_francais": "Guidjel",
    "nom_arabe": "قجــال",
    "wilaya_id": 19,
    "daira": "Guidjel",
    "daira_ar": "قجال",
    "post_code": "19017",
    "daira_id": 219
  },
  {
    "id": 692,
    "nom_francais": "Ain Lahdjar",
    "nom_arabe": "عين لحجـر",
    "wilaya_id": 19,
    "daira": "Ain Azel",
    "daira_ar": "عين أزال",
    "post_code": "19018",
    "daira_id": 206
  },
  {
    "id": 693,
    "nom_francais": "Bousselam",
    "nom_arabe": "بوسلام",
    "wilaya_id": 19,
    "daira": "Bouandas",
    "daira_ar": "بوعنداس",
    "post_code": "19019",
    "daira_id": 214
  },
  {
    "id": 694,
    "nom_francais": "El Eulma",
    "nom_arabe": "العلمة",
    "wilaya_id": 19,
    "daira": "El Eulma",
    "daira_ar": "العلمة",
    "post_code": "19020",
    "daira_id": 217
  },
  {
    "id": 695,
    "nom_francais": "Djemila",
    "nom_arabe": "جميلـة",
    "wilaya_id": 19,
    "daira": "Djemila",
    "daira_ar": "جميلة",
    "post_code": "19021",
    "daira_id": 216
  },
  {
    "id": 696,
    "nom_francais": "Beni Ouartilane",
    "nom_arabe": "بني ورتيلان",
    "wilaya_id": 19,
    "daira": "Beni Ourtilane",
    "daira_ar": "بني ورتيلان",
    "post_code": "19022",
    "daira_id": 212
  },
  {
    "id": 697,
    "nom_francais": "Rosfa",
    "nom_arabe": "الرصفة",
    "wilaya_id": 19,
    "daira": "Salah Bey",
    "daira_ar": "صالح باي",
    "post_code": "19023",
    "daira_id": 223
  },
  {
    "id": 698,
    "nom_francais": "Ouled Addouane",
    "nom_arabe": "أولاد عدوان",
    "wilaya_id": 19,
    "daira": "Ain El Kebira",
    "daira_ar": "عين الكبيرة",
    "post_code": "19024",
    "daira_id": 207
  },
  {
    "id": 699,
    "nom_francais": "Belaa",
    "nom_arabe": "البلاعة",
    "wilaya_id": 19,
    "daira": "Bir El Arch",
    "daira_ar": "بئر العرش",
    "post_code": "19025",
    "daira_id": 213
  },
  {
    "id": 700,
    "nom_francais": "Ain Arnat",
    "nom_arabe": "عين أرنـات",
    "wilaya_id": 19,
    "daira": "Ain Arnat",
    "daira_ar": "عين أرنات",
    "post_code": "19026",
    "daira_id": 205
  },
  {
    "id": 701,
    "nom_francais": "Amoucha",
    "nom_arabe": "عموشة",
    "wilaya_id": 19,
    "daira": "Amoucha",
    "daira_ar": "عموشة",
    "post_code": "19027",
    "daira_id": 209
  },
  {
    "id": 702,
    "nom_francais": "Ain Oulmane",
    "nom_arabe": "عين ولمان",
    "wilaya_id": 19,
    "daira": "Ain Oulmene",
    "daira_ar": "عين ولمان",
    "post_code": "19028",
    "daira_id": 208
  },
  {
    "id": 703,
    "nom_francais": "Beidha Bordj",
    "nom_arabe": "بيضاء برج",
    "wilaya_id": 19,
    "daira": "Ain Azel",
    "daira_ar": "عين أزال",
    "post_code": "19029",
    "daira_id": 206
  },
  {
    "id": 704,
    "nom_francais": "Bouandas",
    "nom_arabe": "بوعنداس",
    "wilaya_id": 19,
    "daira": "Bouandas",
    "daira_ar": "بوعنداس",
    "post_code": "19030",
    "daira_id": 214
  },
  {
    "id": 705,
    "nom_francais": "Bazer Sakhra",
    "nom_arabe": "بازر الصخرة",
    "wilaya_id": 19,
    "daira": "El Eulma",
    "daira_ar": "العلمة",
    "post_code": "19031",
    "daira_id": 217
  },
  {
    "id": 706,
    "nom_francais": "Hammam Essokhna",
    "nom_arabe": "حمــام السخنة",
    "wilaya_id": 19,
    "daira": "Hammam Sokhna",
    "daira_ar": "حمام السخنة",
    "post_code": "19032",
    "daira_id": 221
  },
  {
    "id": 707,
    "nom_francais": "Mezloug",
    "nom_arabe": "مزلوق",
    "wilaya_id": 19,
    "daira": "Ain Arnat",
    "daira_ar": "عين أرنات",
    "post_code": "19033",
    "daira_id": 205
  },
  {
    "id": 708,
    "nom_francais": "Bir Haddada",
    "nom_arabe": "بئر حدادة",
    "wilaya_id": 19,
    "daira": "Ain Azel",
    "daira_ar": "عين أزال",
    "post_code": "19034",
    "daira_id": 206
  },
  {
    "id": 709,
    "nom_francais": "Serdj El Ghoul",
    "nom_arabe": "سرج الغول",
    "wilaya_id": 19,
    "daira": "Babor",
    "daira_ar": "بابور",
    "post_code": "19035",
    "daira_id": 210
  },
  {
    "id": 710,
    "nom_francais": "Harbil",
    "nom_arabe": "حربيل",
    "wilaya_id": 19,
    "daira": "Guenzet",
    "daira_ar": "قنزات",
    "post_code": "19036",
    "daira_id": 218
  },
  {
    "id": 711,
    "nom_francais": "El Ouricia",
    "nom_arabe": "الأورسية",
    "wilaya_id": 19,
    "daira": "Ain Arnat",
    "daira_ar": "عين أرنات",
    "post_code": "19037",
    "daira_id": 205
  },
  {
    "id": 712,
    "nom_francais": "Tizi Nbechar",
    "nom_arabe": "تيزي نبشار",
    "wilaya_id": 19,
    "daira": "Amoucha",
    "daira_ar": "عموشة",
    "post_code": "19038",
    "daira_id": 209
  },
  {
    "id": 713,
    "nom_francais": "Salah Bey",
    "nom_arabe": "صـالح باي",
    "wilaya_id": 19,
    "daira": "Salah Bey",
    "daira_ar": "صالح باي",
    "post_code": "19039",
    "daira_id": 223
  },
  {
    "id": 714,
    "nom_francais": "Ain Azal",
    "nom_arabe": "عين أزال",
    "wilaya_id": 19,
    "daira": "Ain Azel",
    "daira_ar": "عين أزال",
    "post_code": "19040",
    "daira_id": 206
  },
  {
    "id": 715,
    "nom_francais": "Guenzet",
    "nom_arabe": "ڨنزات",
    "wilaya_id": 19,
    "daira": "Guenzet",
    "daira_ar": "قنزات",
    "post_code": "19041",
    "daira_id": 218
  },
  {
    "id": 716,
    "nom_francais": "Talaifacene",
    "nom_arabe": "تالة إيفاسن",
    "wilaya_id": 19,
    "daira": "Maoklane",
    "daira_ar": "ماوكلان",
    "post_code": "19042",
    "daira_id": 222
  },
  {
    "id": 717,
    "nom_francais": "Bougaa",
    "nom_arabe": "بوقاعـة",
    "wilaya_id": 19,
    "daira": "Bougaa",
    "daira_ar": "بوقاعة",
    "post_code": "19043",
    "daira_id": 215
  },
  {
    "id": 718,
    "nom_francais": "Beni Fouda",
    "nom_arabe": "بني فودة",
    "wilaya_id": 19,
    "daira": "Djemila",
    "daira_ar": "جميلة",
    "post_code": "19044",
    "daira_id": 216
  },
  {
    "id": 719,
    "nom_francais": "Tachouda",
    "nom_arabe": "تاشودة",
    "wilaya_id": 19,
    "daira": "Bir El Arch",
    "daira_ar": "بئر العرش",
    "post_code": "19045",
    "daira_id": 213
  },
  {
    "id": 720,
    "nom_francais": "Beni Mouhli",
    "nom_arabe": "إيث موحلي",
    "wilaya_id": 19,
    "daira": "Beni Ourtilane",
    "daira_ar": "بني ورتيلان",
    "post_code": "19046",
    "daira_id": 212
  },
  {
    "id": 721,
    "nom_francais": "Ouled Sabor",
    "nom_arabe": "أولاد صـابر",
    "wilaya_id": 19,
    "daira": "Guidjel",
    "daira_ar": "قجال",
    "post_code": "19047",
    "daira_id": 219
  },
  {
    "id": 722,
    "nom_francais": "Guellal",
    "nom_arabe": "قلال",
    "wilaya_id": 19,
    "daira": "Ain Oulmene",
    "daira_ar": "عين ولمان",
    "post_code": "19048",
    "daira_id": 208
  },
  {
    "id": 723,
    "nom_francais": "Ain Sebt",
    "nom_arabe": "عين السبت",
    "wilaya_id": 19,
    "daira": "Beni Aziz",
    "daira_ar": "بني عزيز",
    "post_code": "19049",
    "daira_id": 211
  },
  {
    "id": 724,
    "nom_francais": "Hammam Guergour",
    "nom_arabe": "حمام قرقور",
    "wilaya_id": 19,
    "daira": "Hammam Guergour",
    "daira_ar": "حمام قرقور",
    "post_code": "19050",
    "daira_id": 220
  },
  {
    "id": 725,
    "nom_francais": "Ait Naoual Mezada",
    "nom_arabe": "آيت نوال مزادة",
    "wilaya_id": 19,
    "daira": "Bouandas",
    "daira_ar": "بوعنداس",
    "post_code": "19051",
    "daira_id": 214
  },
  {
    "id": 726,
    "nom_francais": "Ksar El Abtal",
    "nom_arabe": "قصرالأبطال",
    "wilaya_id": 19,
    "daira": "Ain Oulmene",
    "daira_ar": "عين ولمان",
    "post_code": "19052",
    "daira_id": 208
  },
  {
    "id": 727,
    "nom_francais": "Beni Hocine",
    "nom_arabe": "بني حسين",
    "wilaya_id": 19,
    "daira": "Bougaa",
    "daira_ar": "بوقاعة",
    "post_code": "19053",
    "daira_id": 215
  },
  {
    "id": 728,
    "nom_francais": "Ait Tizi",
    "nom_arabe": "آيت تيزي",
    "wilaya_id": 19,
    "daira": "Bouandas",
    "daira_ar": "بوعنداس",
    "post_code": "19054",
    "daira_id": 214
  },
  {
    "id": 729,
    "nom_francais": "Maouklane",
    "nom_arabe": "موكلان",
    "wilaya_id": 19,
    "daira": "Maoklane",
    "daira_ar": "ماوكلان",
    "post_code": "19055",
    "daira_id": 222
  },
  {
    "id": 730,
    "nom_francais": "Guelta Zerka",
    "nom_arabe": "القلتة الزرقاء",
    "wilaya_id": 19,
    "daira": "El Eulma",
    "daira_ar": "العلمة",
    "post_code": "19056",
    "daira_id": 217
  },
  {
    "id": 731,
    "nom_francais": "Oued El Barad",
    "nom_arabe": "واد البارد",
    "wilaya_id": 19,
    "daira": "Amoucha",
    "daira_ar": "عموشة",
    "post_code": "19057",
    "daira_id": 209
  },
  {
    "id": 732,
    "nom_francais": "Taya",
    "nom_arabe": "طاية",
    "wilaya_id": 19,
    "daira": "Hammam Sokhna",
    "daira_ar": "حمام السخنة",
    "post_code": "19058",
    "daira_id": 221
  },
  {
    "id": 733,
    "nom_francais": "El Ouldja",
    "nom_arabe": "الولجـة",
    "wilaya_id": 19,
    "daira": "Bir El Arch",
    "daira_ar": "بئر العرش",
    "post_code": "19059",
    "daira_id": 213
  },
  {
    "id": 734,
    "nom_francais": "Tella",
    "nom_arabe": "التلة",
    "wilaya_id": 19,
    "daira": "Hammam Sokhna",
    "daira_ar": "حمام السخنة",
    "post_code": "19060",
    "daira_id": 221
  },
  {
    "id": 735,
    "nom_francais": "Saida",
    "nom_arabe": "سعيدة",
    "wilaya_id": 20,
    "daira": "Saida",
    "daira_ar": "سعيدة",
    "post_code": "20001",
    "daira_id": 228
  },
  {
    "id": 736,
    "nom_francais": "Doui Thabet",
    "nom_arabe": "دوى ثابت",
    "wilaya_id": 20,
    "daira": "Youb",
    "daira_ar": "يوب",
    "post_code": "20002",
    "daira_id": 230
  },
  {
    "id": 737,
    "nom_francais": "Ain El Hadjar",
    "nom_arabe": "عين الحجر",
    "wilaya_id": 20,
    "daira": "Ain El Hadjar",
    "daira_ar": "عين الحجر",
    "post_code": "20003",
    "daira_id": 225
  },
  {
    "id": 738,
    "nom_francais": "Ouled Khaled",
    "nom_arabe": "أولاد خالد",
    "wilaya_id": 20,
    "daira": "Sidi Boubekeur",
    "daira_ar": "سيدي بوبكر",
    "post_code": "20004",
    "daira_id": 229
  },
  {
    "id": 739,
    "nom_francais": "Moulay Larbi",
    "nom_arabe": "موالي العربي",
    "wilaya_id": 20,
    "daira": "Ain El Hadjar",
    "daira_ar": "عين الحجر",
    "post_code": "20005",
    "daira_id": 225
  },
  {
    "id": 740,
    "nom_francais": "Youb",
    "nom_arabe": "يوب",
    "wilaya_id": 20,
    "daira": "Youb",
    "daira_ar": "يوب",
    "post_code": "20006",
    "daira_id": 230
  },
  {
    "id": 741,
    "nom_francais": "Hounet",
    "nom_arabe": "هونت",
    "wilaya_id": 20,
    "daira": "Sidi Boubekeur",
    "daira_ar": "سيدي بوبكر",
    "post_code": "20007",
    "daira_id": 229
  },
  {
    "id": 742,
    "nom_francais": "Sidi Amar",
    "nom_arabe": "يدي عمر",
    "wilaya_id": 20,
    "daira": "Sidi Boubekeur",
    "daira_ar": "سيدي بوبكر",
    "post_code": "20008",
    "daira_id": 229
  },
  {
    "id": 743,
    "nom_francais": "Sidi Boubekeur",
    "nom_arabe": "سيدي بوبكر",
    "wilaya_id": 20,
    "daira": "Sidi Boubekeur",
    "daira_ar": "سيدي بوبكر",
    "post_code": "20009",
    "daira_id": 229
  },
  {
    "id": 744,
    "nom_francais": "El Hassasna",
    "nom_arabe": "حساسنة",
    "wilaya_id": 20,
    "daira": "El Hassasna",
    "daira_ar": "الحساسنة",
    "post_code": "20010",
    "daira_id": 226
  },
  {
    "id": 745,
    "nom_francais": "Maamora",
    "nom_arabe": "معمورة",
    "wilaya_id": 20,
    "daira": "El Hassasna",
    "daira_ar": "الحساسنة",
    "post_code": "20011",
    "daira_id": 226
  },
  {
    "id": 746,
    "nom_francais": "Sidi Ahmed",
    "nom_arabe": "سيدي أحمد",
    "wilaya_id": 20,
    "daira": "Ain El Hadjar",
    "daira_ar": "عين الحجر",
    "post_code": "20012",
    "daira_id": 225
  },
  {
    "id": 747,
    "nom_francais": "Ain Sekhouna",
    "nom_arabe": "العين السخونة",
    "wilaya_id": 20,
    "daira": "El Hassasna",
    "daira_ar": "الحساسنة",
    "post_code": "20013",
    "daira_id": 226
  },
  {
    "id": 748,
    "nom_francais": "Ouled Brahim",
    "nom_arabe": "أولاد ابراھيم",
    "wilaya_id": 20,
    "daira": "Ouled Brahim",
    "daira_ar": "أولاد ابراهيم",
    "post_code": "20014",
    "daira_id": 227
  },
  {
    "id": 749,
    "nom_francais": "Tircine",
    "nom_arabe": "تيرسين",
    "wilaya_id": 20,
    "daira": "Ouled Brahim",
    "daira_ar": "أولاد ابراهيم",
    "post_code": "20015",
    "daira_id": 227
  },
  {
    "id": 750,
    "nom_francais": "Ain Soltane",
    "nom_arabe": "عين السلطان",
    "wilaya_id": 20,
    "daira": "Ouled Brahim",
    "daira_ar": "أولاد ابراهيم",
    "post_code": "20016",
    "daira_id": 227
  },
  {
    "id": 751,
    "nom_francais": "Skikda",
    "nom_arabe": "سكيكدة",
    "wilaya_id": 21,
    "daira": "Skikda",
    "daira_ar": "سكيكدة",
    "post_code": "21001",
    "daira_id": 241
  },
  {
    "id": 752,
    "nom_francais": "Ain Zouit",
    "nom_arabe": "عين زويت",
    "wilaya_id": 21,
    "daira": "El Hadaiek",
    "daira_ar": "الحدائق",
    "post_code": "21002",
    "daira_id": 235
  },
  {
    "id": 753,
    "nom_francais": "El Hadaik",
    "nom_arabe": "الحدايق",
    "wilaya_id": 21,
    "daira": "El Hadaiek",
    "daira_ar": "الحدائق",
    "post_code": "21003",
    "daira_id": 235
  },
  {
    "id": 754,
    "nom_francais": "Azzaba",
    "nom_arabe": "عزابة",
    "wilaya_id": 21,
    "daira": "Azzaba",
    "daira_ar": "عزابة",
    "post_code": "21004",
    "daira_id": 232
  },
  {
    "id": 755,
    "nom_francais": "Djendel",
    "nom_arabe": "جندل",
    "wilaya_id": 21,
    "daira": "Azzaba",
    "daira_ar": "عزابة",
    "post_code": "21005",
    "daira_id": 232
  },
  {
    "id": 756,
    "nom_francais": "Ain Cherchar",
    "nom_arabe": "عين شرشار",
    "wilaya_id": 21,
    "daira": "Azzaba",
    "daira_ar": "عزابة",
    "post_code": "21006",
    "daira_id": 232
  },
  {
    "id": 757,
    "nom_francais": "Bekkouche Lakhdar",
    "nom_arabe": "بكوش لخضر",
    "wilaya_id": 21,
    "daira": "Ben Azzouz",
    "daira_ar": "بن عزوز",
    "post_code": "21007",
    "daira_id": 233
  },
  {
    "id": 758,
    "nom_francais": "Ben Azzouz",
    "nom_arabe": "بن عزوز",
    "wilaya_id": 21,
    "daira": "Ben Azzouz",
    "daira_ar": "بن عزوز",
    "post_code": "21008",
    "daira_id": 233
  },
  {
    "id": 759,
    "nom_francais": "Es Sebt",
    "nom_arabe": "السبت",
    "wilaya_id": 21,
    "daira": "Azzaba",
    "daira_ar": "عزابة",
    "post_code": "21009",
    "daira_id": 232
  },
  {
    "id": 760,
    "nom_francais": "Collo",
    "nom_arabe": "القل",
    "wilaya_id": 21,
    "daira": "Collo",
    "daira_ar": "القل",
    "post_code": "21010",
    "daira_id": 234
  },
  {
    "id": 761,
    "nom_francais": "Beni Zid",
    "nom_arabe": "بنى زيد",
    "wilaya_id": 21,
    "daira": "Collo",
    "daira_ar": "القل",
    "post_code": "21011",
    "daira_id": 234
  },
  {
    "id": 762,
    "nom_francais": "Kerkera",
    "nom_arabe": "كركرة",
    "wilaya_id": 21,
    "daira": "Tamalous",
    "daira_ar": "تمالوس",
    "post_code": "21012",
    "daira_id": 242
  },
  {
    "id": 763,
    "nom_francais": "Ouled Attia",
    "nom_arabe": "أولاد عطية",
    "wilaya_id": 21,
    "daira": "Ouled Attia",
    "daira_ar": "أولاد عطية",
    "post_code": "21013",
    "daira_id": 237
  },
  {
    "id": 764,
    "nom_francais": "Oued Zehour",
    "nom_arabe": "وادي الزهور",
    "wilaya_id": 21,
    "daira": "Ouled Attia",
    "daira_ar": "أولاد عطية",
    "post_code": "21014",
    "daira_id": 237
  },
  {
    "id": 765,
    "nom_francais": "Zitouna",
    "nom_arabe": "الزيتونة",
    "wilaya_id": 21,
    "daira": "Zitouna",
    "daira_ar": "الزيتونة",
    "post_code": "21015",
    "daira_id": 243
  },
  {
    "id": 766,
    "nom_francais": "El Harrouch",
    "nom_arabe": "الحروش",
    "wilaya_id": 21,
    "daira": "El Harrouch",
    "daira_ar": "الحروش",
    "post_code": "21016",
    "daira_id": 236
  },
  {
    "id": 767,
    "nom_francais": "Zerdazas",
    "nom_arabe": "زردازة",
    "wilaya_id": 21,
    "daira": "El Harrouch",
    "daira_ar": "الحروش",
    "post_code": "21017",
    "daira_id": 236
  },
  {
    "id": 768,
    "nom_francais": "Ouled Hebaba",
    "nom_arabe": "أولاد حبابة",
    "wilaya_id": 21,
    "daira": "El Harrouch",
    "daira_ar": "الحروش",
    "post_code": "21018",
    "daira_id": 236
  },
  {
    "id": 769,
    "nom_francais": "Sidi Mezghiche",
    "nom_arabe": "سيدي مزغيش",
    "wilaya_id": 21,
    "daira": "Sidi Mezghiche",
    "daira_ar": "سيدي مزغيش",
    "post_code": "21019",
    "daira_id": 240
  },
  {
    "id": 770,
    "nom_francais": "Emdjez Edchich",
    "nom_arabe": "مجاز الدشيش",
    "wilaya_id": 21,
    "daira": "El Harrouch",
    "daira_ar": "الحروش",
    "post_code": "21020",
    "daira_id": 236
  },
  {
    "id": 771,
    "nom_francais": "Beni Oulbane",
    "nom_arabe": "بني والبان",
    "wilaya_id": 21,
    "daira": "Sidi Mezghiche",
    "daira_ar": "سيدي مزغيش",
    "post_code": "21021",
    "daira_id": 240
  },
  {
    "id": 772,
    "nom_francais": "Ain Bouziane",
    "nom_arabe": "عين بوزيان",
    "wilaya_id": 21,
    "daira": "Sidi Mezghiche",
    "daira_ar": "سيدي مزغيش",
    "post_code": "21022",
    "daira_id": 240
  },
  {
    "id": 773,
    "nom_francais": "Ramdane Djamel",
    "nom_arabe": "رمضان جمال",
    "wilaya_id": 21,
    "daira": "Ramdane Djamel",
    "daira_ar": "رمضان جمال",
    "post_code": "21023",
    "daira_id": 239
  },
  {
    "id": 774,
    "nom_francais": "Beni Bachir",
    "nom_arabe": "بني بشير",
    "wilaya_id": 21,
    "daira": "Ramdane Djamel",
    "daira_ar": "رمضان جمال",
    "post_code": "21024",
    "daira_id": 239
  },
  {
    "id": 775,
    "nom_francais": "Salah Bouchaour",
    "nom_arabe": "صالح بوالشعور",
    "wilaya_id": 21,
    "daira": "El Harrouch",
    "daira_ar": "الحروش",
    "post_code": "21025",
    "daira_id": 236
  },
  {
    "id": 776,
    "nom_francais": "Tamalous",
    "nom_arabe": "تمالوس",
    "wilaya_id": 21,
    "daira": "Tamalous",
    "daira_ar": "تمالوس",
    "post_code": "21026",
    "daira_id": 242
  },
  {
    "id": 777,
    "nom_francais": "Ain Kechra",
    "nom_arabe": "عين قشرة",
    "wilaya_id": 21,
    "daira": "Ain Kechra",
    "daira_ar": "عين قشرة",
    "post_code": "21027",
    "daira_id": 231
  },
  {
    "id": 778,
    "nom_francais": "Oum Toub",
    "nom_arabe": "أم الطوب",
    "wilaya_id": 21,
    "daira": "Oum Toub",
    "daira_ar": "أم الطوب",
    "post_code": "21028",
    "daira_id": 238
  },
  {
    "id": 779,
    "nom_francais": "Bein El Ouiden",
    "nom_arabe": "بين الويدان",
    "wilaya_id": 21,
    "daira": "Tamalous",
    "daira_ar": "تمالوس",
    "post_code": "21029",
    "daira_id": 242
  },
  {
    "id": 780,
    "nom_francais": "Filfila",
    "nom_arabe": "فلفلة",
    "wilaya_id": 21,
    "daira": "Skikda",
    "daira_ar": "سكيكدة",
    "post_code": "21030",
    "daira_id": 241
  },
  {
    "id": 781,
    "nom_francais": "Cheraia",
    "nom_arabe": "الشرايع",
    "wilaya_id": 21,
    "daira": "Collo",
    "daira_ar": "القل",
    "post_code": "21031",
    "daira_id": 234
  },
  {
    "id": 782,
    "nom_francais": "Kanoua",
    "nom_arabe": "قنواع",
    "wilaya_id": 21,
    "daira": "Zitouna",
    "daira_ar": "الزيتونة",
    "post_code": "21032",
    "daira_id": 243
  },
  {
    "id": 783,
    "nom_francais": "El Ghedir",
    "nom_arabe": "الغدير",
    "wilaya_id": 21,
    "daira": "Azzaba",
    "daira_ar": "عزابة",
    "post_code": "21033",
    "daira_id": 232
  },
  {
    "id": 784,
    "nom_francais": "Bouchtata",
    "nom_arabe": "بوشطاطة",
    "wilaya_id": 21,
    "daira": "El Hadaiek",
    "daira_ar": "الحدائق",
    "post_code": "21034",
    "daira_id": 235
  },
  {
    "id": 785,
    "nom_francais": "Ouldja Boulbalout",
    "nom_arabe": "الولجة بو البلوط",
    "wilaya_id": 21,
    "daira": "Ain Kechra",
    "daira_ar": "عين قشرة",
    "post_code": "21035",
    "daira_id": 231
  },
  {
    "id": 786,
    "nom_francais": "Kheneg Mayoum",
    "nom_arabe": "خنق مايوم",
    "wilaya_id": 21,
    "daira": "Ouled Attia",
    "daira_ar": "أولاد عطية",
    "post_code": "21036",
    "daira_id": 237
  },
  {
    "id": 787,
    "nom_francais": "Hamadi Krouma",
    "nom_arabe": "حمادي كرومة",
    "wilaya_id": 21,
    "daira": "Skikda",
    "daira_ar": "سكيكدة",
    "post_code": "21037",
    "daira_id": 241
  },
  {
    "id": 788,
    "nom_francais": "El Marsa",
    "nom_arabe": "المرسى",
    "wilaya_id": 21,
    "daira": "Ben Azzouz",
    "daira_ar": "بن عزوز",
    "post_code": "21038",
    "daira_id": 233
  },
  {
    "id": 789,
    "nom_francais": "Sidi Bel Abbes",
    "nom_arabe": "سيدي بلعباس",
    "wilaya_id": 22,
    "daira": "Sidi Bel Abbes",
    "daira_ar": "سيدي بلعباس",
    "post_code": "22001",
    "daira_id": 254
  },
  {
    "id": 790,
    "nom_francais": "Tessala",
    "nom_arabe": "تسالة",
    "wilaya_id": 22,
    "daira": "Tessala",
    "daira_ar": "تسالة",
    "post_code": "22002",
    "daira_id": 258
  },
  {
    "id": 791,
    "nom_francais": "Sidi Brahim",
    "nom_arabe": "سيدي ابراهيم",
    "wilaya_id": 22,
    "daira": "Ain El Berd",
    "daira_ar": "عين البرد",
    "post_code": "22003",
    "daira_id": 244
  },
  {
    "id": 792,
    "nom_francais": "Mostefa Ben Brahim",
    "nom_arabe": "مصطفى بن ابراهيم",
    "wilaya_id": 22,
    "daira": "Mostefa  Ben Brahim",
    "daira_ar": "مصطفى بن ابراهيم",
    "post_code": "22004",
    "daira_id": 248
  },
  {
    "id": 793,
    "nom_francais": "Telagh",
    "nom_arabe": "تلاغ",
    "wilaya_id": 22,
    "daira": "Telagh",
    "daira_ar": "تلاغ",
    "post_code": "22005",
    "daira_id": 256
  },
  {
    "id": 794,
    "nom_francais": "Mezaourou",
    "nom_arabe": "مزاورو",
    "wilaya_id": 22,
    "daira": "Telagh",
    "daira_ar": "تلاغ",
    "post_code": "22006",
    "daira_id": 256
  },
  {
    "id": 795,
    "nom_francais": "Boukhanafis",
    "nom_arabe": "بوخنفيس",
    "wilaya_id": 22,
    "daira": "Sidi Ali Ben Youb",
    "daira_ar": "سيدي علي بن يوب",
    "post_code": "22007",
    "daira_id": 252
  },
  {
    "id": 796,
    "nom_francais": "Sidi Ali Boussidi",
    "nom_arabe": "سيدي علي بوسيدي",
    "wilaya_id": 22,
    "daira": "Sidi Ali Boussidi",
    "daira_ar": "سيدي علي بوسيدي",
    "post_code": "22008",
    "daira_id": 253
  },
  {
    "id": 797,
    "nom_francais": "Badredine El Mokrani",
    "nom_arabe": "بدر الدين المقراني",
    "wilaya_id": 22,
    "daira": "Ben Badis",
    "daira_ar": "بن باديس",
    "post_code": "22009",
    "daira_id": 245
  },
  {
    "id": 798,
    "nom_francais": "Marhoum",
    "nom_arabe": "مرحوم",
    "wilaya_id": 22,
    "daira": "Marhoum",
    "daira_ar": "مرحوم",
    "post_code": "22010",
    "daira_id": 246
  },
  {
    "id": 799,
    "nom_francais": "Tafissour",
    "nom_arabe": "تفسور",
    "wilaya_id": 22,
    "daira": "Merine",
    "daira_ar": "مرين",
    "post_code": "22011",
    "daira_id": 247
  },
  {
    "id": 800,
    "nom_francais": "Amarnas",
    "nom_arabe": "العمارنة",
    "wilaya_id": 22,
    "daira": "Sidi Lahcene",
    "daira_ar": "سيدي لحسن",
    "post_code": "22012",
    "daira_id": 255
  },
  {
    "id": 801,
    "nom_francais": "Tilmouni",
    "nom_arabe": "تلموني",
    "wilaya_id": 22,
    "daira": "Mostefa  Ben Brahim",
    "daira_ar": "مصطفى بن ابراهيم",
    "post_code": "22013",
    "daira_id": 248
  },
  {
    "id": 802,
    "nom_francais": "Sidi Lahcene",
    "nom_arabe": "سيدي لحسن",
    "wilaya_id": 22,
    "daira": "Sidi Lahcene",
    "daira_ar": "سيدي لحسن",
    "post_code": "22014",
    "daira_id": 255
  },
  {
    "id": 803,
    "nom_francais": "Ain Thrid",
    "nom_arabe": "عين التريد",
    "wilaya_id": 22,
    "daira": "Tessala",
    "daira_ar": "تسالة",
    "post_code": "22015",
    "daira_id": 258
  },
  {
    "id": 804,
    "nom_francais": "Makedra",
    "nom_arabe": "مكدرة",
    "wilaya_id": 22,
    "daira": "Ain El Berd",
    "daira_ar": "عين البرد",
    "post_code": "22016",
    "daira_id": 244
  },
  {
    "id": 805,
    "nom_francais": "Tenira",
    "nom_arabe": "تنيرة",
    "wilaya_id": 22,
    "daira": "Tenira",
    "daira_ar": "تنيرة",
    "post_code": "22017",
    "daira_id": 257
  },
  {
    "id": 806,
    "nom_francais": "Moulay Slissen",
    "nom_arabe": "مولاي سليسن",
    "wilaya_id": 22,
    "daira": "Moulay Slissen",
    "daira_ar": "مولاي سليسن",
    "post_code": "22018",
    "daira_id": 249
  },
  {
    "id": 807,
    "nom_francais": "El Hacaiba",
    "nom_arabe": "الحصيبة",
    "wilaya_id": 22,
    "daira": "Moulay Slissen",
    "daira_ar": "مولاي سليسن",
    "post_code": "22019",
    "daira_id": 249
  },
  {
    "id": 808,
    "nom_francais": "Hassi Zehana",
    "nom_arabe": "حاسي زهانة",
    "wilaya_id": 22,
    "daira": "Ben Badis",
    "daira_ar": "بن باديس",
    "post_code": "22020",
    "daira_id": 245
  },
  {
    "id": 809,
    "nom_francais": "Tabia",
    "nom_arabe": "طابية",
    "wilaya_id": 22,
    "daira": "Sidi Ali Ben Youb",
    "daira_ar": "سيدي علي بن يوب",
    "post_code": "22021",
    "daira_id": 252
  },
  {
    "id": 810,
    "nom_francais": "Merine",
    "nom_arabe": "مرين",
    "wilaya_id": 22,
    "daira": "Merine",
    "daira_ar": "مرين",
    "post_code": "22022",
    "daira_id": 247
  },
  {
    "id": 811,
    "nom_francais": "Ras El Ma",
    "nom_arabe": "رأس الماء",
    "wilaya_id": 22,
    "daira": "Ras El Ma",
    "daira_ar": "راس الماء",
    "post_code": "22023",
    "daira_id": 250
  },
  {
    "id": 812,
    "nom_francais": "Ain Tindamine",
    "nom_arabe": "عين تندامين",
    "wilaya_id": 22,
    "daira": "Moulay Slissen",
    "daira_ar": "مولاي سليسن",
    "post_code": "22024",
    "daira_id": 249
  },
  {
    "id": 813,
    "nom_francais": "Ain Kada",
    "nom_arabe": "عين قادة",
    "wilaya_id": 22,
    "daira": "Sidi Ali Boussidi",
    "daira_ar": "سيدي علي بوسيدي",
    "post_code": "22025",
    "daira_id": 253
  },
  {
    "id": 814,
    "nom_francais": "Mcid",
    "nom_arabe": "مسيد",
    "wilaya_id": 22,
    "daira": "Sfisef",
    "daira_ar": "سفيزف",
    "post_code": "22026",
    "daira_id": 251
  },
  {
    "id": 815,
    "nom_francais": "Sidi Khaled",
    "nom_arabe": "سيدي خالد",
    "wilaya_id": 22,
    "daira": "Sidi Lahcene",
    "daira_ar": "سيدي لحسن",
    "post_code": "22027",
    "daira_id": 255
  },
  {
    "id": 816,
    "nom_francais": "Ain El Berd",
    "nom_arabe": "عين البرد",
    "wilaya_id": 22,
    "daira": "Ain El Berd",
    "daira_ar": "عين البرد",
    "post_code": "22028",
    "daira_id": 244
  },
  {
    "id": 817,
    "nom_francais": "Sfissef",
    "nom_arabe": "سفيزف",
    "wilaya_id": 22,
    "daira": "Sfisef",
    "daira_ar": "سفيزف",
    "post_code": "22029",
    "daira_id": 251
  },
  {
    "id": 818,
    "nom_francais": "Ain Adden",
    "nom_arabe": "عين عدان",
    "wilaya_id": 22,
    "daira": "Sfisef",
    "daira_ar": "سفيزف",
    "post_code": "22030",
    "daira_id": 251
  },
  {
    "id": 819,
    "nom_francais": "Oued Taourira",
    "nom_arabe": "واد تاوريرة",
    "wilaya_id": 22,
    "daira": "Merine",
    "daira_ar": "مرين",
    "post_code": "22031",
    "daira_id": 247
  },
  {
    "id": 820,
    "nom_francais": "Dhaya",
    "nom_arabe": "الظاية",
    "wilaya_id": 22,
    "daira": "Telagh",
    "daira_ar": "تلاغ",
    "post_code": "22032",
    "daira_id": 256
  },
  {
    "id": 821,
    "nom_francais": "Zerouala",
    "nom_arabe": "زروالة",
    "wilaya_id": 22,
    "daira": "Mostefa  Ben Brahim",
    "daira_ar": "مصطفى بن ابراهيم",
    "post_code": "22033",
    "daira_id": 248
  },
  {
    "id": 822,
    "nom_francais": "Lamtar",
    "nom_arabe": "لمطار",
    "wilaya_id": 22,
    "daira": "Sidi Ali Boussidi",
    "daira_ar": "سيدي علي بوسيدي",
    "post_code": "22034",
    "daira_id": 253
  },
  {
    "id": 823,
    "nom_francais": "Sidi Chaib",
    "nom_arabe": "سيدي شعيب",
    "wilaya_id": 22,
    "daira": "Marhoum",
    "daira_ar": "مرحوم",
    "post_code": "22035",
    "daira_id": 246
  },
  {
    "id": 824,
    "nom_francais": "Sidi Dahou",
    "nom_arabe": "سيدي دحو",
    "wilaya_id": 22,
    "daira": "Sidi Ali Boussidi",
    "daira_ar": "سيدي علي بوسيدي",
    "post_code": "22036",
    "daira_id": 253
  },
  {
    "id": 825,
    "nom_francais": "Oued Sbaa",
    "nom_arabe": "واد السبع",
    "wilaya_id": 22,
    "daira": "Ras El Ma",
    "daira_ar": "راس الماء",
    "post_code": "22037",
    "daira_id": 250
  },
  {
    "id": 826,
    "nom_francais": "Boudjebaa El Bordj",
    "nom_arabe": "بوجبهة البرج",
    "wilaya_id": 22,
    "daira": "Sfisef",
    "daira_ar": "سفيزف",
    "post_code": "22038",
    "daira_id": 251
  },
  {
    "id": 827,
    "nom_francais": "Sehala Thaoura",
    "nom_arabe": "سهالة الثورة",
    "wilaya_id": 22,
    "daira": "Tessala",
    "daira_ar": "تسالة",
    "post_code": "22039",
    "daira_id": 258
  },
  {
    "id": 828,
    "nom_francais": "Sidi Yacoub",
    "nom_arabe": "سيدي يعقوب",
    "wilaya_id": 22,
    "daira": "Sidi Lahcene",
    "daira_ar": "سيدي لحسن",
    "post_code": "22040",
    "daira_id": 255
  },
  {
    "id": 829,
    "nom_francais": "Sidi Hamadouche",
    "nom_arabe": "سيدي حمادوش",
    "wilaya_id": 22,
    "daira": "Ain El Berd",
    "daira_ar": "عين البرد",
    "post_code": "22041",
    "daira_id": 244
  },
  {
    "id": 830,
    "nom_francais": "Belarbi",
    "nom_arabe": "بلعربي",
    "wilaya_id": 22,
    "daira": "Mostefa  Ben Brahim",
    "daira_ar": "مصطفى بن ابراهيم",
    "post_code": "22042",
    "daira_id": 248
  },
  {
    "id": 831,
    "nom_francais": "Oued Sefioun",
    "nom_arabe": "واد سفيون",
    "wilaya_id": 22,
    "daira": "Tenira",
    "daira_ar": "تنيرة",
    "post_code": "22043",
    "daira_id": 257
  },
  {
    "id": 832,
    "nom_francais": "Teghalimet",
    "nom_arabe": "تغاليمت",
    "wilaya_id": 22,
    "daira": "Telagh",
    "daira_ar": "تلاغ",
    "post_code": "22044",
    "daira_id": 256
  },
  {
    "id": 833,
    "nom_francais": "Ben Badis",
    "nom_arabe": "ابن باديس",
    "wilaya_id": 22,
    "daira": "Ben Badis",
    "daira_ar": "بن باديس",
    "post_code": "22045",
    "daira_id": 245
  },
  {
    "id": 834,
    "nom_francais": "Sidi Ali Benyoub",
    "nom_arabe": "سيدي علي بن يوب",
    "wilaya_id": 22,
    "daira": "Sidi Ali Ben Youb",
    "daira_ar": "سيدي علي بن يوب",
    "post_code": "22046",
    "daira_id": 252
  },
  {
    "id": 835,
    "nom_francais": "Chetouane Belaila",
    "nom_arabe": "شطوان بلايلة",
    "wilaya_id": 22,
    "daira": "Ben Badis",
    "daira_ar": "بن باديس",
    "post_code": "22047",
    "daira_id": 245
  },
  {
    "id": 836,
    "nom_francais": "Bir El Hammam",
    "nom_arabe": "بئر الحمام",
    "wilaya_id": 22,
    "daira": "Marhoum",
    "daira_ar": "مرحوم",
    "post_code": "22048",
    "daira_id": 246
  },
  {
    "id": 837,
    "nom_francais": "Taoudmout",
    "nom_arabe": "تاودموت",
    "wilaya_id": 22,
    "daira": "Merine",
    "daira_ar": "مرين",
    "post_code": "22049",
    "daira_id": 247
  },
  {
    "id": 838,
    "nom_francais": "Redjem Demouche",
    "nom_arabe": "رجم دموش",
    "wilaya_id": 22,
    "daira": "Ras El Ma",
    "daira_ar": "راس الماء",
    "post_code": "22050",
    "daira_id": 250
  },
  {
    "id": 839,
    "nom_francais": "Benachiba Chelia",
    "nom_arabe": "بن عشيبة شلية",
    "wilaya_id": 22,
    "daira": "Tenira",
    "daira_ar": "تنيرة",
    "post_code": "22051",
    "daira_id": 257
  },
  {
    "id": 840,
    "nom_francais": "Hassi Dahou",
    "nom_arabe": "حاسي دحو",
    "wilaya_id": 22,
    "daira": "Tenira",
    "daira_ar": "تنيرة",
    "post_code": "22052",
    "daira_id": 257
  },
  {
    "id": 841,
    "nom_francais": "Annaba",
    "nom_arabe": "عنابة",
    "wilaya_id": 23,
    "daira": "Annaba",
    "daira_ar": "عنابة",
    "post_code": "23001",
    "daira_id": 260
  },
  {
    "id": 842,
    "nom_francais": "Berrahel",
    "nom_arabe": "برحال",
    "wilaya_id": 23,
    "daira": "Berrahal",
    "daira_ar": "برحال",
    "post_code": "23002",
    "daira_id": 261
  },
  {
    "id": 843,
    "nom_francais": "El Hadjar",
    "nom_arabe": "الحجار",
    "wilaya_id": 23,
    "daira": "El Hadjar",
    "daira_ar": "الحجار",
    "post_code": "23003",
    "daira_id": 264
  },
  {
    "id": 844,
    "nom_francais": "Eulma",
    "nom_arabe": "العلمة",
    "wilaya_id": 23,
    "daira": "Ain El Berda",
    "daira_ar": "عين الباردة",
    "post_code": "23004",
    "daira_id": 259
  },
  {
    "id": 845,
    "nom_francais": "El Bouni",
    "nom_arabe": "البوني",
    "wilaya_id": 23,
    "daira": "El Bouni",
    "daira_ar": "البوني",
    "post_code": "23005",
    "daira_id": 263
  },
  {
    "id": 846,
    "nom_francais": "Oued El Aneb",
    "nom_arabe": "وادي العنب",
    "wilaya_id": 23,
    "daira": "Berrahal",
    "daira_ar": "برحال",
    "post_code": "23006",
    "daira_id": 261
  },
  {
    "id": 847,
    "nom_francais": "Cheurfa",
    "nom_arabe": "الشرفة",
    "wilaya_id": 23,
    "daira": "Ain El Berda",
    "daira_ar": "عين الباردة",
    "post_code": "23007",
    "daira_id": 259
  },
  {
    "id": 848,
    "nom_francais": "Seraidi",
    "nom_arabe": "سرايدي",
    "wilaya_id": 23,
    "daira": "Annaba",
    "daira_ar": "عنابة",
    "post_code": "23008",
    "daira_id": 260
  },
  {
    "id": 849,
    "nom_francais": "Ain Berda",
    "nom_arabe": "عين الباردة",
    "wilaya_id": 23,
    "daira": "Ain El Berda",
    "daira_ar": "عين الباردة",
    "post_code": "23009",
    "daira_id": 259
  },
  {
    "id": 850,
    "nom_francais": "Chetaibi",
    "nom_arabe": "شطايبي",
    "wilaya_id": 23,
    "daira": "Chetaibi",
    "daira_ar": "شطايبي",
    "post_code": "23010",
    "daira_id": 262
  },
  {
    "id": 851,
    "nom_francais": "Sidi Amer",
    "nom_arabe": "سيدي عمار",
    "wilaya_id": 23,
    "daira": "El Hadjar",
    "daira_ar": "الحجار",
    "post_code": "23011",
    "daira_id": 264
  },
  {
    "id": 852,
    "nom_francais": "Treat",
    "nom_arabe": "التريعات",
    "wilaya_id": 23,
    "daira": "Berrahal",
    "daira_ar": "برحال",
    "post_code": "23012",
    "daira_id": 261
  },
  {
    "id": 853,
    "nom_francais": "Guelma",
    "nom_arabe": "قالمة",
    "wilaya_id": 24,
    "daira": "Guelma",
    "daira_ar": "قالمة",
    "post_code": "24001",
    "daira_id": 269
  },
  {
    "id": 854,
    "nom_francais": "Nechmaya",
    "nom_arabe": "نشماية",
    "wilaya_id": 24,
    "daira": "Guelaat Bousbaa",
    "daira_ar": "قلعة بوصبع",
    "post_code": "24002",
    "daira_id": 268
  },
  {
    "id": 855,
    "nom_francais": "Bouati Mahmoud",
    "nom_arabe": "بوعاتي محمود",
    "wilaya_id": 24,
    "daira": "Heliopolis",
    "daira_ar": "هيليوبوليس",
    "post_code": "24003",
    "daira_id": 272
  },
  {
    "id": 856,
    "nom_francais": "Oued Zenati",
    "nom_arabe": "وادي الزناتي",
    "wilaya_id": 24,
    "daira": "Oued Zenati",
    "daira_ar": "وادي الزناتي",
    "post_code": "24004",
    "daira_id": 274
  },
  {
    "id": 857,
    "nom_francais": "Tamlouka",
    "nom_arabe": "تاملوكة",
    "wilaya_id": 24,
    "daira": "Ain Makhlouf",
    "daira_ar": "عين مخلوف",
    "post_code": "24005",
    "daira_id": 266
  },
  {
    "id": 858,
    "nom_francais": "Oued Fragha",
    "nom_arabe": "وادي فراغة",
    "wilaya_id": 24,
    "daira": "Bouchegouf",
    "daira_ar": "بوشقوف",
    "post_code": "24006",
    "daira_id": 267
  },
  {
    "id": 859,
    "nom_francais": "Ain Sandel",
    "nom_arabe": "عين صندل",
    "wilaya_id": 24,
    "daira": "Khezaras",
    "daira_ar": "خزارة",
    "post_code": "24007",
    "daira_id": 273
  },
  {
    "id": 860,
    "nom_francais": "Ras El Agba",
    "nom_arabe": "راس العقبة",
    "wilaya_id": 24,
    "daira": "Ain Hessainia",
    "daira_ar": "عين حساينية",
    "post_code": "24008",
    "daira_id": 265
  },
  {
    "id": 861,
    "nom_francais": "Dahouara",
    "nom_arabe": "الدهوارة",
    "wilaya_id": 24,
    "daira": "Hammam N'bails",
    "daira_ar": "حمام النبايل",
    "post_code": "24009",
    "daira_id": 271
  },
  {
    "id": 862,
    "nom_francais": "Belkhir",
    "nom_arabe": "بلخير",
    "wilaya_id": 24,
    "daira": "Guelaat Bousbaa",
    "daira_ar": "قلعة بوصبع",
    "post_code": "24010",
    "daira_id": 268
  },
  {
    "id": 863,
    "nom_francais": "Ben Djarah",
    "nom_arabe": "بن جراح",
    "wilaya_id": 24,
    "daira": "Guelma",
    "daira_ar": "قالمة",
    "post_code": "24011",
    "daira_id": 269
  },
  {
    "id": 864,
    "nom_francais": "Bou Hamdane",
    "nom_arabe": "بوحمدان",
    "wilaya_id": 24,
    "daira": "Hammam Debagh",
    "daira_ar": "حمام دباغ",
    "post_code": "24012",
    "daira_id": 270
  },
  {
    "id": 865,
    "nom_francais": "Ain Makhlouf",
    "nom_arabe": "عين مخلوف",
    "wilaya_id": 24,
    "daira": "Ain Makhlouf",
    "daira_ar": "عين مخلوف",
    "post_code": "24013",
    "daira_id": 266
  },
  {
    "id": 866,
    "nom_francais": "Ain Ben Beida",
    "nom_arabe": "عين بن بيضاء",
    "wilaya_id": 24,
    "daira": "Bouchegouf",
    "daira_ar": "بوشقوف",
    "post_code": "24014",
    "daira_id": 267
  },
  {
    "id": 867,
    "nom_francais": "Khezara",
    "nom_arabe": "خزارة",
    "wilaya_id": 24,
    "daira": "Khezaras",
    "daira_ar": "خزارة",
    "post_code": "24015",
    "daira_id": 273
  },
  {
    "id": 868,
    "nom_francais": "Beni Mezline",
    "nom_arabe": "بني مزلين",
    "wilaya_id": 24,
    "daira": "Guelaat Bousbaa",
    "daira_ar": "قلعة بوصبع",
    "post_code": "24016",
    "daira_id": 268
  },
  {
    "id": 869,
    "nom_francais": "Bou Hachana",
    "nom_arabe": "بوحشانة",
    "wilaya_id": 24,
    "daira": "Khezaras",
    "daira_ar": "خزارة",
    "post_code": "24017",
    "daira_id": 273
  },
  {
    "id": 870,
    "nom_francais": "Guelaat Bou Sbaa",
    "nom_arabe": "قلعة بوصبع",
    "wilaya_id": 24,
    "daira": "Guelaat Bousbaa",
    "daira_ar": "قلعة بوصبع",
    "post_code": "24018",
    "daira_id": 268
  },
  {
    "id": 871,
    "nom_francais": "Hammam Maskhoutine",
    "nom_arabe": "حمام مسخوطين",
    "wilaya_id": 24,
    "daira": "Hammam Debagh",
    "daira_ar": "حمام دباغ",
    "post_code": "24019",
    "daira_id": 270
  },
  {
    "id": 872,
    "nom_francais": "El Fedjoudj",
    "nom_arabe": "الفجوج",
    "wilaya_id": 24,
    "daira": "Heliopolis",
    "daira_ar": "هيليوبوليس",
    "post_code": "24020",
    "daira_id": 272
  },
  {
    "id": 873,
    "nom_francais": "Bordj Sabat",
    "nom_arabe": "برج صباط",
    "wilaya_id": 24,
    "daira": "Oued Zenati",
    "daira_ar": "وادي الزناتي",
    "post_code": "24021",
    "daira_id": 274
  },
  {
    "id": 874,
    "nom_francais": "Hamman Nbail",
    "nom_arabe": "حمام النبايل",
    "wilaya_id": 24,
    "daira": "Hammam N'bails",
    "daira_ar": "حمام النبايل",
    "post_code": "24022",
    "daira_id": 271
  },
  {
    "id": 875,
    "nom_francais": "Ain Larbi",
    "nom_arabe": "عين العربى",
    "wilaya_id": 24,
    "daira": "Ain Makhlouf",
    "daira_ar": "عين مخلوف",
    "post_code": "24023",
    "daira_id": 266
  },
  {
    "id": 876,
    "nom_francais": "Medjez Amar",
    "nom_arabe": "مجاز عمار",
    "wilaya_id": 24,
    "daira": "Ain Hessainia",
    "daira_ar": "عين حساينية",
    "post_code": "24024",
    "daira_id": 265
  },
  {
    "id": 877,
    "nom_francais": "Bouchegouf",
    "nom_arabe": "بوشقوف",
    "wilaya_id": 24,
    "daira": "Bouchegouf",
    "daira_ar": "بوشقوف",
    "post_code": "24025",
    "daira_id": 267
  },
  {
    "id": 878,
    "nom_francais": "Heliopolis",
    "nom_arabe": "ھيليوبوليس",
    "wilaya_id": 24,
    "daira": "Heliopolis",
    "daira_ar": "هيليوبوليس",
    "post_code": "24026",
    "daira_id": 272
  },
  {
    "id": 879,
    "nom_francais": "Houari Boumediene",
    "nom_arabe": "هواري بومدين",
    "wilaya_id": 24,
    "daira": "Ain Hessainia",
    "daira_ar": "عين حساينية",
    "post_code": "24027",
    "daira_id": 265
  },
  {
    "id": 880,
    "nom_francais": "Roknia",
    "nom_arabe": "الركنية",
    "wilaya_id": 24,
    "daira": "Hammam Debagh",
    "daira_ar": "حمام دباغ",
    "post_code": "24028",
    "daira_id": 270
  },
  {
    "id": 881,
    "nom_francais": "Salaoua Announa",
    "nom_arabe": "سلاوة عنونة",
    "wilaya_id": 24,
    "daira": "Ain Hessainia",
    "daira_ar": "عين حساينية",
    "post_code": "24029",
    "daira_id": 265
  },
  {
    "id": 882,
    "nom_francais": "Medjez Sfa",
    "nom_arabe": "مجاز الصفاء",
    "wilaya_id": 24,
    "daira": "Bouchegouf",
    "daira_ar": "بوشقوف",
    "post_code": "24030",
    "daira_id": 267
  },
  {
    "id": 883,
    "nom_francais": "Boumahra Ahmed",
    "nom_arabe": "بومهرة أحمد",
    "wilaya_id": 24,
    "daira": "Guelaat Bousbaa",
    "daira_ar": "قلعة بوصبع",
    "post_code": "24031",
    "daira_id": 268
  },
  {
    "id": 884,
    "nom_francais": "Ain Reggada",
    "nom_arabe": "عين رقادة",
    "wilaya_id": 24,
    "daira": "Oued Zenati",
    "daira_ar": "وادي الزناتي",
    "post_code": "24032",
    "daira_id": 274
  },
  {
    "id": 885,
    "nom_francais": "Oued Cheham",
    "nom_arabe": "وادي الشحم",
    "wilaya_id": 24,
    "daira": "Hammam N'bails",
    "daira_ar": "حمام النبايل",
    "post_code": "24033",
    "daira_id": 271
  },
  {
    "id": 886,
    "nom_francais": "Djeballah Khemissi",
    "nom_arabe": "جبالة لخميسي",
    "wilaya_id": 24,
    "daira": "Guelaat Bousbaa",
    "daira_ar": "قلعة بوصبع",
    "post_code": "24034",
    "daira_id": 268
  },
  {
    "id": 887,
    "nom_francais": "Constantine",
    "nom_arabe": "قسنطينة",
    "wilaya_id": 25,
    "daira": "Constantine",
    "daira_ar": "قسنطينة",
    "post_code": "25001",
    "daira_id": 276
  },
  {
    "id": 888,
    "nom_francais": "Hamma Bouziane",
    "nom_arabe": "حامة بوزيان",
    "wilaya_id": 25,
    "daira": "Hamma Bouziane",
    "daira_ar": "حامة بوزيان",
    "post_code": "25002",
    "daira_id": 278
  },
  {
    "id": 889,
    "nom_francais": "Ibn Badis",
    "nom_arabe": "إبن باديس",
    "wilaya_id": 25,
    "daira": "Ain Abid",
    "daira_ar": "عين عبيد",
    "post_code": "25003",
    "daira_id": 275
  },
  {
    "id": 890,
    "nom_francais": "Zighoud Youcef",
    "nom_arabe": "زيغود يوسف",
    "wilaya_id": 25,
    "daira": "Zighoud Youcef",
    "daira_ar": "زيغود يوسف",
    "post_code": "25004",
    "daira_id": 280
  },
  {
    "id": 891,
    "nom_francais": "Didouche Mourad",
    "nom_arabe": "ديدوش مراد",
    "wilaya_id": 25,
    "daira": "Hamma Bouziane",
    "daira_ar": "حامة بوزيان",
    "post_code": "25005",
    "daira_id": 278
  },
  {
    "id": 892,
    "nom_francais": "El Khroub",
    "nom_arabe": "الخروب",
    "wilaya_id": 25,
    "daira": "El Khroub",
    "daira_ar": "الخروب",
    "post_code": "25006",
    "daira_id": 277
  },
  {
    "id": 893,
    "nom_francais": "Ain Abid",
    "nom_arabe": "عين عبيد",
    "wilaya_id": 25,
    "daira": "Ain Abid",
    "daira_ar": "عين عبيد",
    "post_code": "25007",
    "daira_id": 275
  },
  {
    "id": 894,
    "nom_francais": "Beni Hamiden",
    "nom_arabe": "بني حميدان",
    "wilaya_id": 25,
    "daira": "Zighoud Youcef",
    "daira_ar": "زيغود يوسف",
    "post_code": "25008",
    "daira_id": 280
  },
  {
    "id": 895,
    "nom_francais": "Ouled Rahmoune",
    "nom_arabe": "أولاد رحمون",
    "wilaya_id": 25,
    "daira": "El Khroub",
    "daira_ar": "الخروب",
    "post_code": "25009",
    "daira_id": 277
  },
  {
    "id": 896,
    "nom_francais": "Ain Smara",
    "nom_arabe": "عين سمارة",
    "wilaya_id": 25,
    "daira": "El Khroub",
    "daira_ar": "الخروب",
    "post_code": "25010",
    "daira_id": 277
  },
  {
    "id": 897,
    "nom_francais": "Mesaoud Boudjeriou",
    "nom_arabe": "مسعود بوجريو",
    "wilaya_id": 25,
    "daira": "Ibn Ziad",
    "daira_ar": "ابن زياد",
    "post_code": "25011",
    "daira_id": 279
  },
  {
    "id": 898,
    "nom_francais": "Ibn Ziad",
    "nom_arabe": "ابن زياد",
    "wilaya_id": 25,
    "daira": "Ibn Ziad",
    "daira_ar": "ابن زياد",
    "post_code": "25012",
    "daira_id": 279
  },
  {
    "id": 899,
    "nom_francais": "Medea",
    "nom_arabe": "المدية",
    "wilaya_id": 26,
    "daira": "Medea",
    "daira_ar": "المدية",
    "post_code": "26001",
    "daira_id": 286
  },
  {
    "id": 900,
    "nom_francais": "Ouzera",
    "nom_arabe": "وزرة",
    "wilaya_id": 26,
    "daira": "Ouzera",
    "daira_ar": "وزرة",
    "post_code": "26002",
    "daira_id": 288
  },
  {
    "id": 901,
    "nom_francais": "Ouled Maaref",
    "nom_arabe": "أولاد معرف",
    "wilaya_id": 67,
    "daira": null,
    "daira_ar": null,
    "post_code": "26003",
    "daira_id": null
  },
  {
    "id": 902,
    "nom_francais": "Ain Boucif",
    "nom_arabe": "عين بوسيف",
    "wilaya_id": 67,
    "daira": "Ain Boucif",
    "daira_ar": "عين بوسيف",
    "post_code": "26004",
    "daira_id": 534
  },
  {
    "id": 903,
    "nom_francais": "Aissaouia",
    "nom_arabe": "العيساوية",
    "wilaya_id": 26,
    "daira": "Tablat",
    "daira_ar": "تابلاط",
    "post_code": "26005",
    "daira_id": 293
  },
  {
    "id": 904,
    "nom_francais": "Ouled Deide",
    "nom_arabe": "أولاد دايد",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26006",
    "daira_id": null
  },
  {
    "id": 905,
    "nom_francais": "El Omaria",
    "nom_arabe": "العمارية",
    "wilaya_id": 26,
    "daira": "El Omaria",
    "daira_ar": "العمارية",
    "post_code": "67007",
    "daira_id": 284
  },
  {
    "id": 906,
    "nom_francais": "Derrag",
    "nom_arabe": "دراڨ",
    "wilaya_id": 67,
    "daira": "Aziz",
    "daira_ar": "عزيز",
    "post_code": "26008",
    "daira_id": 535
  },
  {
    "id": 907,
    "nom_francais": "El Guelbelkebir",
    "nom_arabe": "القلب الكبير",
    "wilaya_id": 26,
    "daira": "Guelb El Kebir",
    "daira_ar": "القلب الكبير",
    "post_code": "26009",
    "daira_id": 285
  },
  {
    "id": 908,
    "nom_francais": "Bouaiche",
    "nom_arabe": "بوعيش",
    "wilaya_id": 67,
    "daira": "Chahbounia",
    "daira_ar": "الشهبونية",
    "post_code": "26010",
    "daira_id": 536
  },
  {
    "id": 909,
    "nom_francais": "Mezerena",
    "nom_arabe": "مزغنة",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26011",
    "daira_id": null
  },
  {
    "id": 910,
    "nom_francais": "Ouled Brahim",
    "nom_arabe": "أولاد إبراهيم",
    "wilaya_id": 26,
    "daira": "El Omaria",
    "daira_ar": "العمارية",
    "post_code": "26012",
    "daira_id": 284
  },
  {
    "id": 911,
    "nom_francais": "Tizi Mahdi",
    "nom_arabe": "تيزي المهدي",
    "wilaya_id": 26,
    "daira": "Ouzera",
    "daira_ar": "وزرة",
    "post_code": "26013",
    "daira_id": 288
  },
  {
    "id": 912,
    "nom_francais": "Sidi Ziane",
    "nom_arabe": "سيدي زيان",
    "wilaya_id": 26,
    "daira": "Souaghi",
    "daira_ar": "السواقي",
    "post_code": "26014",
    "daira_id": 292
  },
  {
    "id": 913,
    "nom_francais": "Tamesguida",
    "nom_arabe": "تمزڨيدة",
    "wilaya_id": 26,
    "daira": "Medea",
    "daira_ar": "المدية",
    "post_code": "26015",
    "daira_id": 286
  },
  {
    "id": 914,
    "nom_francais": "El Hamdania",
    "nom_arabe": "الحمدانية",
    "wilaya_id": 26,
    "daira": "Ouzera",
    "daira_ar": "وزرة",
    "post_code": "26016",
    "daira_id": 288
  },
  {
    "id": 915,
    "nom_francais": "Kef Lakhdar",
    "nom_arabe": "الكاف الأخضر",
    "wilaya_id": 67,
    "daira": "Ain Boucif",
    "daira_ar": "عين بوسيف",
    "post_code": "26017",
    "daira_id": 534
  },
  {
    "id": 916,
    "nom_francais": "Chelalet El Adhaoura",
    "nom_arabe": "شلالة العذاورة",
    "wilaya_id": 67,
    "daira": "Chellalat El Adhaoura",
    "daira_ar": "شلالة العذاورة",
    "post_code": "26018",
    "daira_id": 537
  },
  {
    "id": 917,
    "nom_francais": "Bouskene",
    "nom_arabe": "بوسكن",
    "wilaya_id": 26,
    "daira": "Beni Slimane",
    "daira_ar": "بني سليمان",
    "post_code": "26019",
    "daira_id": 281
  },
  {
    "id": 918,
    "nom_francais": "Rebaia",
    "nom_arabe": "الربعية",
    "wilaya_id": 26,
    "daira": "Berrouaghia",
    "daira_ar": "البرواقية",
    "post_code": "26020",
    "daira_id": 282
  },
  {
    "id": 919,
    "nom_francais": "Bouchrahil",
    "nom_arabe": "بوشراحيل",
    "wilaya_id": 26,
    "daira": "Sidi Naamane",
    "daira_ar": "سيدي نعمان",
    "post_code": "26021",
    "daira_id": 291
  },
  {
    "id": 920,
    "nom_francais": "Ouled Hellal",
    "nom_arabe": "أولاد هلال",
    "wilaya_id": 67,
    "daira": "Ouled Antar",
    "daira_ar": "أولاد عنتر",
    "post_code": "26022",
    "daira_id": 539
  },
  {
    "id": 921,
    "nom_francais": "Tafraout",
    "nom_arabe": "تافراوت",
    "wilaya_id": 67,
    "daira": "Chellalat El Adhaoura",
    "daira_ar": "شلالة العذاورة",
    "post_code": "26023",
    "daira_id": 537
  },
  {
    "id": 922,
    "nom_francais": "Baata",
    "nom_arabe": "بعطة",
    "wilaya_id": 26,
    "daira": "El Omaria",
    "daira_ar": "العمارية",
    "post_code": "26024",
    "daira_id": 284
  },
  {
    "id": 923,
    "nom_francais": "Boghar",
    "nom_arabe": "بوغار",
    "wilaya_id": 67,
    "daira": "Ouled Antar",
    "daira_ar": "أولاد عنتر",
    "post_code": "26025",
    "daira_id": 539
  },
  {
    "id": 924,
    "nom_francais": "Sidi Naamane",
    "nom_arabe": "سيدي نعمان",
    "wilaya_id": 26,
    "daira": "Sidi Naamane",
    "daira_ar": "سيدي نعمان",
    "post_code": "26026",
    "daira_id": 291
  },
  {
    "id": 925,
    "nom_francais": "Ouled Bouachra",
    "nom_arabe": "أولاد بوعشرة",
    "wilaya_id": 26,
    "daira": "Si Mahdjoub",
    "daira_ar": "سي المحجوب",
    "post_code": "26027",
    "daira_id": 290
  },
  {
    "id": 926,
    "nom_francais": "Sidi Zahar",
    "nom_arabe": "سيدي زهار",
    "wilaya_id": 26,
    "daira": "Souaghi",
    "daira_ar": "السواقي",
    "post_code": "26028",
    "daira_id": 292
  },
  {
    "id": 927,
    "nom_francais": "Oued Harbil",
    "nom_arabe": "وادي حربيل",
    "wilaya_id": 26,
    "daira": "Ouamri",
    "daira_ar": "عوامري",
    "post_code": "26029",
    "daira_id": 287
  },
  {
    "id": 928,
    "nom_francais": "Benchicao",
    "nom_arabe": "بن شكاو",
    "wilaya_id": 26,
    "daira": "Ouzera",
    "daira_ar": "وزرة",
    "post_code": "26030",
    "daira_id": 288
  },
  {
    "id": 929,
    "nom_francais": "Sidi Damed",
    "nom_arabe": "سيدي دامد",
    "wilaya_id": 67,
    "daira": null,
    "daira_ar": null,
    "post_code": "26031",
    "daira_id": null
  },
  {
    "id": 930,
    "nom_francais": "Aziz",
    "nom_arabe": "عزيز",
    "wilaya_id": 67,
    "daira": "Aziz",
    "daira_ar": "عزيز",
    "post_code": "67032",
    "daira_id": 535
  },
  {
    "id": 931,
    "nom_francais": "Souagui",
    "nom_arabe": "السواڨي",
    "wilaya_id": 26,
    "daira": "Souaghi",
    "daira_ar": "السواقي",
    "post_code": "26033",
    "daira_id": 292
  },
  {
    "id": 932,
    "nom_francais": "Zoubiria",
    "nom_arabe": "الزبيرية",
    "wilaya_id": 26,
    "daira": "Seghouane",
    "daira_ar": "سغوان",
    "post_code": "26034",
    "daira_id": 289
  },
  {
    "id": 933,
    "nom_francais": "Ksar El Boukhari",
    "nom_arabe": "قصر البخاري",
    "wilaya_id": 67,
    "daira": "Ksar El Boukhari",
    "daira_ar": "قصر البخاري",
    "post_code": "67035",
    "daira_id": 538
  },
  {
    "id": 934,
    "nom_francais": "El Azizia",
    "nom_arabe": "العزيزية",
    "wilaya_id": 26,
    "daira": "El Azizia",
    "daira_ar": "العزيزية",
    "post_code": "26036",
    "daira_id": 283
  },
  {
    "id": 935,
    "nom_francais": "Djouab",
    "nom_arabe": "جواب",
    "wilaya_id": 26,
    "daira": "Souaghi",
    "daira_ar": "السواقي",
    "post_code": "26037",
    "daira_id": 292
  },
  {
    "id": 936,
    "nom_francais": "Chahbounia",
    "nom_arabe": "الشهبونية",
    "wilaya_id": 67,
    "daira": null,
    "daira_ar": null,
    "post_code": "67038",
    "daira_id": null
  },
  {
    "id": 937,
    "nom_francais": "Meghraoua",
    "nom_arabe": "مغراوة",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26039",
    "daira_id": null
  },
  {
    "id": 938,
    "nom_francais": "Cheniguel",
    "nom_arabe": "شنيڨل",
    "wilaya_id": 67,
    "daira": "Chellalat El Adhaoura",
    "daira_ar": "شلالة العذاورة",
    "post_code": "26040",
    "daira_id": 537
  },
  {
    "id": 939,
    "nom_francais": "Ain Ouksir",
    "nom_arabe": "عين القصير",
    "wilaya_id": 67,
    "daira": "Chellalat El Adhaoura",
    "daira_ar": "شلالة العذاورة",
    "post_code": "26041",
    "daira_id": 537
  },
  {
    "id": 940,
    "nom_francais": "Oum El Djalil",
    "nom_arabe": "أم الجليل",
    "wilaya_id": 67,
    "daira": null,
    "daira_ar": null,
    "post_code": "26042",
    "daira_id": null
  },
  {
    "id": 941,
    "nom_francais": "Ouamri",
    "nom_arabe": "عوامري",
    "wilaya_id": 26,
    "daira": "Ouamri",
    "daira_ar": "عوامري",
    "post_code": "26043",
    "daira_id": 287
  },
  {
    "id": 942,
    "nom_francais": "Si Mahdjoub",
    "nom_arabe": "سى المحجوب",
    "wilaya_id": 26,
    "daira": "Si Mahdjoub",
    "daira_ar": "سي المحجوب",
    "post_code": "26044",
    "daira_id": 290
  },
  {
    "id": 943,
    "nom_francais": "Tlatet Eddouair",
    "nom_arabe": "ثلاثة الدوائر",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26045",
    "daira_id": null
  },
  {
    "id": 944,
    "nom_francais": "Beni Slimane",
    "nom_arabe": "بني سليمان",
    "wilaya_id": 26,
    "daira": "Beni Slimane",
    "daira_ar": "بني سليمان",
    "post_code": "26046",
    "daira_id": 281
  },
  {
    "id": 945,
    "nom_francais": "Berrouaghia",
    "nom_arabe": "البرواڨية",
    "wilaya_id": 26,
    "daira": "Berrouaghia",
    "daira_ar": "البرواقية",
    "post_code": "26047",
    "daira_id": 282
  },
  {
    "id": 946,
    "nom_francais": "Seghouane",
    "nom_arabe": "سغوان",
    "wilaya_id": 26,
    "daira": "Seghouane",
    "daira_ar": "سغوان",
    "post_code": "26048",
    "daira_id": 289
  },
  {
    "id": 947,
    "nom_francais": "Meftaha",
    "nom_arabe": "المفاتحة",
    "wilaya_id": 67,
    "daira": "Ksar El Boukhari",
    "daira_ar": "قصر البخاري",
    "post_code": "26049",
    "daira_id": 538
  },
  {
    "id": 948,
    "nom_francais": "Mihoub",
    "nom_arabe": "ميهوب",
    "wilaya_id": 26,
    "daira": "El Azizia",
    "daira_ar": "العزيزية",
    "post_code": "26050",
    "daira_id": 283
  },
  {
    "id": 949,
    "nom_francais": "Boughezoul",
    "nom_arabe": "بوغزول",
    "wilaya_id": 67,
    "daira": null,
    "daira_ar": null,
    "post_code": "26051",
    "daira_id": null
  },
  {
    "id": 950,
    "nom_francais": "Tablat",
    "nom_arabe": "تابلاط",
    "wilaya_id": 26,
    "daira": "Tablat",
    "daira_ar": "تابلاط",
    "post_code": "26052",
    "daira_id": 293
  },
  {
    "id": 951,
    "nom_francais": "Deux Bassins",
    "nom_arabe": "فج الحوضين",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26053",
    "daira_id": null
  },
  {
    "id": 952,
    "nom_francais": "Draa Essamar",
    "nom_arabe": "ذراع السمار",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26054",
    "daira_id": null
  },
  {
    "id": 953,
    "nom_francais": "Sidi Errabia",
    "nom_arabe": "سيدي الربيع",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26055",
    "daira_id": null
  },
  {
    "id": 954,
    "nom_francais": "Bir Ben Laabed",
    "nom_arabe": "بئر بن العابد",
    "wilaya_id": 26,
    "daira": "Guelb El Kebir",
    "daira_ar": "القلب الكبير",
    "post_code": "26056",
    "daira_id": 285
  },
  {
    "id": 955,
    "nom_francais": "El Ouinet",
    "nom_arabe": "العوينات",
    "wilaya_id": 67,
    "daira": "Ain Boucif",
    "daira_ar": "عين بوسيف",
    "post_code": "26057",
    "daira_id": 534
  },
  {
    "id": 956,
    "nom_francais": "Ouled Antar",
    "nom_arabe": "أولاد عنتر",
    "wilaya_id": 67,
    "daira": "Ouled Antar",
    "daira_ar": "أولاد عنتر",
    "post_code": "67058",
    "daira_id": 539
  },
  {
    "id": 957,
    "nom_francais": "Bouaichoune",
    "nom_arabe": "بوعيشون",
    "wilaya_id": 26,
    "daira": "Si Mahdjoub",
    "daira_ar": "سي المحجوب",
    "post_code": "26059",
    "daira_id": 290
  },
  {
    "id": 958,
    "nom_francais": "Hannacha",
    "nom_arabe": "حناشة",
    "wilaya_id": 26,
    "daira": "Ouamri",
    "daira_ar": "عوامري",
    "post_code": "26060",
    "daira_id": 287
  },
  {
    "id": 959,
    "nom_francais": "Sedraia",
    "nom_arabe": "سدراية",
    "wilaya_id": 26,
    "daira": null,
    "daira_ar": null,
    "post_code": "26061",
    "daira_id": null
  },
  {
    "id": 960,
    "nom_francais": "Medjebar",
    "nom_arabe": "مجبر",
    "wilaya_id": 26,
    "daira": "Seghouane",
    "daira_ar": "سغوان",
    "post_code": "26062",
    "daira_id": 289
  },
  {
    "id": 961,
    "nom_francais": "Khams Djouamaa",
    "nom_arabe": "خمس جوامع",
    "wilaya_id": 26,
    "daira": "Sidi Naamane",
    "daira_ar": "سيدي نعمان",
    "post_code": "26063",
    "daira_id": 291
  },
  {
    "id": 962,
    "nom_francais": "Saneg",
    "nom_arabe": "سانڨ",
    "wilaya_id": 67,
    "daira": "Ksar El Boukhari",
    "daira_ar": "قصر البخاري",
    "post_code": "67064",
    "daira_id": 538
  },
  {
    "id": 963,
    "nom_francais": "Mostaganem",
    "nom_arabe": "مستغانم",
    "wilaya_id": 27,
    "daira": "Mostaganem",
    "daira_ar": "مستغانم",
    "post_code": "27001",
    "daira_id": 301
  },
  {
    "id": 964,
    "nom_francais": "Sayada",
    "nom_arabe": "صيادة",
    "wilaya_id": 27,
    "daira": "Kheir Eddine",
    "daira_ar": "خير الدين",
    "post_code": "27002",
    "daira_id": 299
  },
  {
    "id": 965,
    "nom_francais": "Fornaka",
    "nom_arabe": "فرناكة",
    "wilaya_id": 27,
    "daira": "Ain Nouicy",
    "daira_ar": "عين نويسي",
    "post_code": "27003",
    "daira_id": 295
  },
  {
    "id": 966,
    "nom_francais": "Stidia",
    "nom_arabe": "ستيدية",
    "wilaya_id": 27,
    "daira": "Hassi Mameche",
    "daira_ar": "حاسي ماماش",
    "post_code": "27004",
    "daira_id": 298
  },
  {
    "id": 967,
    "nom_francais": "Ain Nouissy",
    "nom_arabe": "عين نويسي",
    "wilaya_id": 27,
    "daira": "Ain Nouicy",
    "daira_ar": "عين نويسي",
    "post_code": "27005",
    "daira_id": 295
  },
  {
    "id": 968,
    "nom_francais": "Hassi Maameche",
    "nom_arabe": "حاسي مماش",
    "wilaya_id": 27,
    "daira": "Hassi Mameche",
    "daira_ar": "حاسي ماماش",
    "post_code": "27006",
    "daira_id": 298
  },
  {
    "id": 969,
    "nom_francais": "Ain Tadles",
    "nom_arabe": "عين تادلس",
    "wilaya_id": 27,
    "daira": "Ain Tedeles",
    "daira_ar": "عين تادلس",
    "post_code": "27007",
    "daira_id": 296
  },
  {
    "id": 970,
    "nom_francais": "Sour",
    "nom_arabe": "صور",
    "wilaya_id": 27,
    "daira": "Ain Tedeles",
    "daira_ar": "عين تادلس",
    "post_code": "27008",
    "daira_id": 296
  },
  {
    "id": 971,
    "nom_francais": "Oued El Kheir",
    "nom_arabe": "واد الخير",
    "wilaya_id": 27,
    "daira": "Ain Tedeles",
    "daira_ar": "عين تادلس",
    "post_code": "27009",
    "daira_id": 296
  },
  {
    "id": 972,
    "nom_francais": "Sidi Bellater",
    "nom_arabe": "سيدي بلعاتر",
    "wilaya_id": 27,
    "daira": "Ain Tedeles",
    "daira_ar": "عين تادلس",
    "post_code": "27010",
    "daira_id": 296
  },
  {
    "id": 973,
    "nom_francais": "Kheiredine",
    "nom_arabe": "خير الدين",
    "wilaya_id": 27,
    "daira": "Kheir Eddine",
    "daira_ar": "خير الدين",
    "post_code": "27011",
    "daira_id": 299
  },
  {
    "id": 974,
    "nom_francais": "Sidi Ali",
    "nom_arabe": "سيدي علي",
    "wilaya_id": 27,
    "daira": "Sidi Ali",
    "daira_ar": "سيدي علي",
    "post_code": "27012",
    "daira_id": 302
  },
  {
    "id": 975,
    "nom_francais": "Abdelmalek Ramdane",
    "nom_arabe": "عبد المالك رمضان",
    "wilaya_id": 27,
    "daira": "Sidi Lakhdar",
    "daira_ar": "سيدي لخضر",
    "post_code": "27013",
    "daira_id": 303
  },
  {
    "id": 976,
    "nom_francais": "Hadjadj",
    "nom_arabe": "حجاج",
    "wilaya_id": 27,
    "daira": "Sidi Lakhdar",
    "daira_ar": "سيدي لخضر",
    "post_code": "27014",
    "daira_id": 303
  },
  {
    "id": 977,
    "nom_francais": "Nekmaria",
    "nom_arabe": "نقمارية",
    "wilaya_id": 27,
    "daira": "Achaacha",
    "daira_ar": "عشعاشة",
    "post_code": "27015",
    "daira_id": 294
  },
  {
    "id": 978,
    "nom_francais": "Sidi Lakhdar",
    "nom_arabe": "سيدي لخضر",
    "wilaya_id": 27,
    "daira": "Sidi Lakhdar",
    "daira_ar": "سيدي لخضر",
    "post_code": "27016",
    "daira_id": 303
  },
  {
    "id": 979,
    "nom_francais": "Achaacha",
    "nom_arabe": "عشعاشة",
    "wilaya_id": 27,
    "daira": "Achaacha",
    "daira_ar": "عشعاشة",
    "post_code": "27017",
    "daira_id": 294
  },
  {
    "id": 980,
    "nom_francais": "Khadra",
    "nom_arabe": "خضراء",
    "wilaya_id": 27,
    "daira": "Achaacha",
    "daira_ar": "عشعاشة",
    "post_code": "27018",
    "daira_id": 294
  },
  {
    "id": 981,
    "nom_francais": "Bouguirat",
    "nom_arabe": "بوقيراط",
    "wilaya_id": 27,
    "daira": "Bouguirat",
    "daira_ar": "بوقيراط",
    "post_code": "27019",
    "daira_id": 297
  },
  {
    "id": 982,
    "nom_francais": "Sirat",
    "nom_arabe": "سيرات",
    "wilaya_id": 27,
    "daira": "Bouguirat",
    "daira_ar": "بوقيراط",
    "post_code": "27020",
    "daira_id": 297
  },
  {
    "id": 983,
    "nom_francais": "Ain Sidi Cherif",
    "nom_arabe": "عين سيدي شريف",
    "wilaya_id": 27,
    "daira": "Mesra",
    "daira_ar": "ماسرة",
    "post_code": "27021",
    "daira_id": 300
  },
  {
    "id": 984,
    "nom_francais": "Mesra",
    "nom_arabe": "ماسرة",
    "wilaya_id": 27,
    "daira": "Mesra",
    "daira_ar": "ماسرة",
    "post_code": "27022",
    "daira_id": 300
  },
  {
    "id": 985,
    "nom_francais": "Mansourah",
    "nom_arabe": "منصورة",
    "wilaya_id": 27,
    "daira": "Mesra",
    "daira_ar": "ماسرة",
    "post_code": "27023",
    "daira_id": 300
  },
  {
    "id": 986,
    "nom_francais": "Souaflia",
    "nom_arabe": "سوافلية",
    "wilaya_id": 27,
    "daira": "Bouguirat",
    "daira_ar": "بوقيراط",
    "post_code": "27024",
    "daira_id": 297
  },
  {
    "id": 987,
    "nom_francais": "Ouled Boughalem",
    "nom_arabe": "أوالد بوغالم",
    "wilaya_id": 27,
    "daira": "Achaacha",
    "daira_ar": "عشعاشة",
    "post_code": "27025",
    "daira_id": 294
  },
  {
    "id": 988,
    "nom_francais": "Ouled Maallah",
    "nom_arabe": "أولاد مع اللّه",
    "wilaya_id": 27,
    "daira": "Sidi Ali",
    "daira_ar": "سيدي علي",
    "post_code": "27026",
    "daira_id": 302
  },
  {
    "id": 989,
    "nom_francais": "Mezghrane",
    "nom_arabe": "مزغران",
    "wilaya_id": 27,
    "daira": "Hassi Mameche",
    "daira_ar": "حاسي ماماش",
    "post_code": "27027",
    "daira_id": 298
  },
  {
    "id": 990,
    "nom_francais": "Ain Boudinar",
    "nom_arabe": "عين بودينار",
    "wilaya_id": 27,
    "daira": "Kheir Eddine",
    "daira_ar": "خير الدين",
    "post_code": "27028",
    "daira_id": 299
  },
  {
    "id": 991,
    "nom_francais": "Tazgait",
    "nom_arabe": "تزقايت",
    "wilaya_id": 27,
    "daira": "Sidi Ali",
    "daira_ar": "سيدي علي",
    "post_code": "27029",
    "daira_id": 302
  },
  {
    "id": 992,
    "nom_francais": "Safsaf",
    "nom_arabe": "صفصاف",
    "wilaya_id": 27,
    "daira": "Bouguirat",
    "daira_ar": "بوقيراط",
    "post_code": "27030",
    "daira_id": 297
  },
  {
    "id": 993,
    "nom_francais": "Touahria",
    "nom_arabe": "طواھيرية",
    "wilaya_id": 27,
    "daira": "Mesra",
    "daira_ar": "ماسرة",
    "post_code": "27031",
    "daira_id": 300
  },
  {
    "id": 994,
    "nom_francais": "El Hassiane",
    "nom_arabe": "الحسيان",
    "wilaya_id": 27,
    "daira": "Ain Nouicy",
    "daira_ar": "عين نويسي",
    "post_code": "27032",
    "daira_id": 295
  },
  {
    "id": 995,
    "nom_francais": "Msila",
    "nom_arabe": "المسيلة",
    "wilaya_id": 28,
    "daira": "M'sila",
    "daira_ar": "المسيلة",
    "post_code": "28001",
    "daira_id": 307
  },
  {
    "id": 996,
    "nom_francais": "Maadid",
    "nom_arabe": "المعاضيد",
    "wilaya_id": 28,
    "daira": "Ouled Derradj",
    "daira_ar": "أولاد دراج",
    "post_code": "28002",
    "daira_id": 309
  },
  {
    "id": 997,
    "nom_francais": "Hammam Dhalaa",
    "nom_arabe": "حمـام الضلعة",
    "wilaya_id": 28,
    "daira": null,
    "daira_ar": null,
    "post_code": "68003",
    "daira_id": null
  },
  {
    "id": 998,
    "nom_francais": "Ouled Derradj",
    "nom_arabe": "أولاد دراج",
    "wilaya_id": 28,
    "daira": "Ouled Derradj",
    "daira_ar": "أولاد دراج",
    "post_code": "28004",
    "daira_id": 309
  },
  {
    "id": 999,
    "nom_francais": "Tarmount",
    "nom_arabe": "تارمونت",
    "wilaya_id": 28,
    "daira": "Hammam Dalaa",
    "daira_ar": "حمام الضلعة",
    "post_code": "28005",
    "daira_id": 306
  },
  {
    "id": 1000,
    "nom_francais": "Mtarfa",
    "nom_arabe": "مطارفة",
    "wilaya_id": 28,
    "daira": "Ouled Derradj",
    "daira_ar": "أولاد دراج",
    "post_code": "28006",
    "daira_id": 309
  },
  {
    "id": 1001,
    "nom_francais": "Khoubana",
    "nom_arabe": "خبانة",
    "wilaya_id": 68,
    "daira": "Khoubana",
    "daira_ar": "خبانة",
    "post_code": "28007",
    "daira_id": 544
  },
  {
    "id": 1002,
    "nom_francais": "M'cif",
    "nom_arabe": "مسيف",
    "wilaya_id": 68,
    "daira": "Khoubana",
    "daira_ar": "خبانة",
    "post_code": "28008",
    "daira_id": 544
  },
  {
    "id": 1003,
    "nom_francais": "Chellal",
    "nom_arabe": "شلال",
    "wilaya_id": 28,
    "daira": "Chellal",
    "daira_ar": "شلال",
    "post_code": "28009",
    "daira_id": 305
  },
  {
    "id": 1004,
    "nom_francais": "Ouled Madhi",
    "nom_arabe": "أولاد مـاضي",
    "wilaya_id": 28,
    "daira": "Chellal",
    "daira_ar": "شلال",
    "post_code": "68010",
    "daira_id": 305
  },
  {
    "id": 1005,
    "nom_francais": "Magra",
    "nom_arabe": "مقرة",
    "wilaya_id": 28,
    "daira": "Magra",
    "daira_ar": "مقرة",
    "post_code": "68011",
    "daira_id": 308
  },
  {
    "id": 1006,
    "nom_francais": "Berhoum",
    "nom_arabe": "برهوم",
    "wilaya_id": 28,
    "daira": "Magra",
    "daira_ar": "مقرة",
    "post_code": "28012",
    "daira_id": 308
  },
  {
    "id": 1007,
    "nom_francais": "Ain Khadra",
    "nom_arabe": "عين الخضراء",
    "wilaya_id": 28,
    "daira": "Magra",
    "daira_ar": "مقرة",
    "post_code": "28013",
    "daira_id": 308
  },
  {
    "id": 1008,
    "nom_francais": "Ouled Addi Guebala",
    "nom_arabe": "اولاد عدي لقبالة",
    "wilaya_id": 28,
    "daira": "Ouled Derradj",
    "daira_ar": "أولاد دراج",
    "post_code": "28014",
    "daira_id": 309
  },
  {
    "id": 1009,
    "nom_francais": "Belaiba",
    "nom_arabe": "بلعايبة",
    "wilaya_id": 28,
    "daira": "Magra",
    "daira_ar": "مقرة",
    "post_code": "68015",
    "daira_id": 308
  },
  {
    "id": 1010,
    "nom_francais": "Sidi Aissa",
    "nom_arabe": "سيدي عيسى",
    "wilaya_id": 28,
    "daira": "Sidi Aissa",
    "daira_ar": "سيدي عيسى",
    "post_code": "28016",
    "daira_id": 310
  },
  {
    "id": 1011,
    "nom_francais": "Ain El Hadjel",
    "nom_arabe": "عين الحجل",
    "wilaya_id": 28,
    "daira": "Ain El Hadjel",
    "daira_ar": "عين الحجل",
    "post_code": "68017",
    "daira_id": 304
  },
  {
    "id": 1012,
    "nom_francais": "Sidi Hadjeres",
    "nom_arabe": "سيدي ھجرس",
    "wilaya_id": 28,
    "daira": "Ain El Hadjel",
    "daira_ar": "عين الحجل",
    "post_code": "28018",
    "daira_id": 304
  },
  {
    "id": 1013,
    "nom_francais": "Ouanougha",
    "nom_arabe": "ونوغة",
    "wilaya_id": 28,
    "daira": "Hammam Dalaa",
    "daira_ar": "حمام الضلعة",
    "post_code": "28019",
    "daira_id": 306
  },
  {
    "id": 1014,
    "nom_francais": "Bou Saada",
    "nom_arabe": "بوسعادة",
    "wilaya_id": 68,
    "daira": "Bousaada",
    "daira_ar": "بوسعادة",
    "post_code": "68020",
    "daira_id": 542
  },
  {
    "id": 1015,
    "nom_francais": "Ouled Sidi Brahim",
    "nom_arabe": "أولاد سيدي ابراهيم",
    "wilaya_id": 68,
    "daira": null,
    "daira_ar": null,
    "post_code": "68021",
    "daira_id": null
  },
  {
    "id": 1016,
    "nom_francais": "Sidi Ameur",
    "nom_arabe": "سيدي عامر",
    "wilaya_id": 68,
    "daira": "Sidi Ameur",
    "daira_ar": "سيدي عامر",
    "post_code": "68022",
    "daira_id": 547
  },
  {
    "id": 1017,
    "nom_francais": "Tamsa",
    "nom_arabe": "تامسة",
    "wilaya_id": 68,
    "daira": "Sidi Ameur",
    "daira_ar": "سيدي عامر",
    "post_code": "68023",
    "daira_id": 547
  },
  {
    "id": 1018,
    "nom_francais": "Ben Srour",
    "nom_arabe": "بن سرور",
    "wilaya_id": 68,
    "daira": "Ben Srour",
    "daira_ar": "بن سرور",
    "post_code": "68024",
    "daira_id": 541
  },
  {
    "id": 1019,
    "nom_francais": "Ouled Slimane",
    "nom_arabe": "أولاد سليمان",
    "wilaya_id": 68,
    "daira": "Ben Srour",
    "daira_ar": "بن سرور",
    "post_code": "28025",
    "daira_id": 541
  },
  {
    "id": 1020,
    "nom_francais": "El Houamed",
    "nom_arabe": "الحوامد",
    "wilaya_id": 68,
    "daira": "Khoubana",
    "daira_ar": "خبانة",
    "post_code": "28026",
    "daira_id": 544
  },
  {
    "id": 1021,
    "nom_francais": "El Hamel",
    "nom_arabe": "الهامل",
    "wilaya_id": 68,
    "daira": "Bousaada",
    "daira_ar": "بوسعادة",
    "post_code": "28027",
    "daira_id": 542
  },
  {
    "id": 1022,
    "nom_francais": "Ouled Mansour",
    "nom_arabe": "أولاد منصور",
    "wilaya_id": 28,
    "daira": "Hammam Dalaa",
    "daira_ar": "حمام الضلعة",
    "post_code": "28028",
    "daira_id": 306
  },
  {
    "id": 1023,
    "nom_francais": "Maarif",
    "nom_arabe": "المعاريف",
    "wilaya_id": 28,
    "daira": "Chellal",
    "daira_ar": "شلال",
    "post_code": "68029",
    "daira_id": 305
  },
  {
    "id": 1024,
    "nom_francais": "Dehahna",
    "nom_arabe": "الدهاهنة",
    "wilaya_id": 28,
    "daira": "Magra",
    "daira_ar": "مقرة",
    "post_code": "68030",
    "daira_id": 308
  },
  {
    "id": 1025,
    "nom_francais": "Bouti Sayah",
    "nom_arabe": "بوطي السايح",
    "wilaya_id": 28,
    "daira": null,
    "daira_ar": null,
    "post_code": "68031",
    "daira_id": null
  },
  {
    "id": 1026,
    "nom_francais": "Khettouti Sed Djir",
    "nom_arabe": "خطوطي سد الجير",
    "wilaya_id": 28,
    "daira": null,
    "daira_ar": null,
    "post_code": "68032",
    "daira_id": null
  },
  {
    "id": 1027,
    "nom_francais": "Zarzour",
    "nom_arabe": "الزرزور",
    "wilaya_id": 68,
    "daira": "Ben Srour",
    "daira_ar": "بن سرور",
    "post_code": "28033",
    "daira_id": 541
  },
  {
    "id": 1028,
    "nom_francais": "Oued Chair",
    "nom_arabe": "محمد بوضياف",
    "wilaya_id": 68,
    "daira": null,
    "daira_ar": null,
    "post_code": "28034",
    "daira_id": null
  },
  {
    "id": 1029,
    "nom_francais": "Benzouh",
    "nom_arabe": "بن الزوه",
    "wilaya_id": 68,
    "daira": "Ouled Sidi Brahim",
    "daira_ar": "أولاد سيدي ابراهيم",
    "post_code": "28035",
    "daira_id": 546
  },
  {
    "id": 1030,
    "nom_francais": "Bir Foda",
    "nom_arabe": "بير الفضة",
    "wilaya_id": 68,
    "daira": "Ain El Melh",
    "daira_ar": "عين الملح",
    "post_code": "28036",
    "daira_id": 540
  },
  {
    "id": 1031,
    "nom_francais": "Ain Fares",
    "nom_arabe": "عين فارس",
    "wilaya_id": 68,
    "daira": "Ain El Melh",
    "daira_ar": "عين الملح",
    "post_code": "28037",
    "daira_id": 540
  },
  {
    "id": 1032,
    "nom_francais": "Sidi Mhamed",
    "nom_arabe": "سيدي محمد",
    "wilaya_id": 68,
    "daira": "Ain El Melh",
    "daira_ar": "عين الملح",
    "post_code": "28038",
    "daira_id": 540
  },
  {
    "id": 1033,
    "nom_francais": "Ouled Atia",
    "nom_arabe": "منعة",
    "wilaya_id": 68,
    "daira": "Medjedel",
    "daira_ar": "امجدل",
    "post_code": "28039",
    "daira_id": 545
  },
  {
    "id": 1034,
    "nom_francais": "Souamaa",
    "nom_arabe": "الصوامع",
    "wilaya_id": 28,
    "daira": "Ouled Derradj",
    "daira_ar": "أولاد دراج",
    "post_code": "28040",
    "daira_id": 309
  },
  {
    "id": 1035,
    "nom_francais": "Ain El Melh",
    "nom_arabe": "عين الملح",
    "wilaya_id": 68,
    "daira": "Ain El Melh",
    "daira_ar": "عين الملح",
    "post_code": "68041",
    "daira_id": 540
  },
  {
    "id": 1036,
    "nom_francais": "Medjedel",
    "nom_arabe": "مجدل",
    "wilaya_id": 68,
    "daira": "Medjedel",
    "daira_ar": "امجدل",
    "post_code": "28042",
    "daira_id": 545
  },
  {
    "id": 1037,
    "nom_francais": "Slim",
    "nom_arabe": "سليم",
    "wilaya_id": 68,
    "daira": "Djebel Messaad",
    "daira_ar": "جبل مساعد",
    "post_code": "68043",
    "daira_id": 543
  },
  {
    "id": 1038,
    "nom_francais": "Ain Errich",
    "nom_arabe": "عين الريش",
    "wilaya_id": 68,
    "daira": null,
    "daira_ar": null,
    "post_code": "68044",
    "daira_id": null
  },
  {
    "id": 1039,
    "nom_francais": "Beni Ilmane",
    "nom_arabe": "بنى يلمان",
    "wilaya_id": 28,
    "daira": "Sidi Aissa",
    "daira_ar": "سيدي عيسى",
    "post_code": "28045",
    "daira_id": 310
  },
  {
    "id": 1040,
    "nom_francais": "Oultene",
    "nom_arabe": "ولتام",
    "wilaya_id": 68,
    "daira": null,
    "daira_ar": null,
    "post_code": "28046",
    "daira_id": null
  },
  {
    "id": 1041,
    "nom_francais": "Djebel Messaad",
    "nom_arabe": "جبل مساعد",
    "wilaya_id": 68,
    "daira": "Djebel Messaad",
    "daira_ar": "جبل مساعد",
    "post_code": "68047",
    "daira_id": 543
  },
  {
    "id": 1042,
    "nom_francais": "Mascara",
    "nom_arabe": "مـعـسـكـر",
    "wilaya_id": 29,
    "daira": "Mascara",
    "daira_ar": "معسكر",
    "post_code": "29001",
    "daira_id": 318
  },
  {
    "id": 1043,
    "nom_francais": "Bou Hanifia",
    "nom_arabe": "بوحنيفية",
    "wilaya_id": 29,
    "daira": "Bouhanifia",
    "daira_ar": "بوحنيفية",
    "post_code": "29002",
    "daira_id": 314
  },
  {
    "id": 1044,
    "nom_francais": "Tizi",
    "nom_arabe": "تيزي",
    "wilaya_id": 29,
    "daira": "Tizi",
    "daira_ar": "تيزي",
    "post_code": "29003",
    "daira_id": 325
  },
  {
    "id": 1045,
    "nom_francais": "Hacine",
    "nom_arabe": "حسين",
    "wilaya_id": 29,
    "daira": "Bouhanifia",
    "daira_ar": "بوحنيفية",
    "post_code": "29004",
    "daira_id": 314
  },
  {
    "id": 1046,
    "nom_francais": "Maoussa",
    "nom_arabe": "ماوسة",
    "wilaya_id": 29,
    "daira": "Ghriss",
    "daira_ar": "غريس",
    "post_code": "29005",
    "daira_id": 316
  },
  {
    "id": 1047,
    "nom_francais": "Teghennif",
    "nom_arabe": "تيغنيف",
    "wilaya_id": 29,
    "daira": "Tighennif",
    "daira_ar": "تيغنيف",
    "post_code": "29006",
    "daira_id": 324
  },
  {
    "id": 1048,
    "nom_francais": "El Hachem",
    "nom_arabe": "الهاشم",
    "wilaya_id": 29,
    "daira": "Hachem",
    "daira_ar": "الحشم",
    "post_code": "29007",
    "daira_id": 317
  },
  {
    "id": 1049,
    "nom_francais": "Sidi Kada",
    "nom_arabe": "سيدي قادة",
    "wilaya_id": 29,
    "daira": "Tighennif",
    "daira_ar": "تيغنيف",
    "post_code": "29008",
    "daira_id": 324
  },
  {
    "id": 1050,
    "nom_francais": "Zelmata",
    "nom_arabe": "زلماطة",
    "wilaya_id": 29,
    "daira": "Hachem",
    "daira_ar": "الحشم",
    "post_code": "29009",
    "daira_id": 317
  },
  {
    "id": 1051,
    "nom_francais": "Oued El Abtal",
    "nom_arabe": "واد الأبطال",
    "wilaya_id": 29,
    "daira": "Oued El Abtal",
    "daira_ar": "وادي الأبطال",
    "post_code": "29010",
    "daira_id": 321
  },
  {
    "id": 1052,
    "nom_francais": "Ain Ferah",
    "nom_arabe": "عين فراح",
    "wilaya_id": 29,
    "daira": "Oued El Abtal",
    "daira_ar": "وادي الأبطال",
    "post_code": "29011",
    "daira_id": 321
  },
  {
    "id": 1053,
    "nom_francais": "Ghriss",
    "nom_arabe": "غريس",
    "wilaya_id": 29,
    "daira": "Ghriss",
    "daira_ar": "غريس",
    "post_code": "29012",
    "daira_id": 316
  },
  {
    "id": 1054,
    "nom_francais": "Froha",
    "nom_arabe": "فروحة",
    "wilaya_id": 29,
    "daira": "Tizi",
    "daira_ar": "تيزي",
    "post_code": "29013",
    "daira_id": 325
  },
  {
    "id": 1055,
    "nom_francais": "Matemore",
    "nom_arabe": "مطمور",
    "wilaya_id": 29,
    "daira": "Ghriss",
    "daira_ar": "غريس",
    "post_code": "29014",
    "daira_id": 316
  },
  {
    "id": 1056,
    "nom_francais": "Makdha",
    "nom_arabe": "ماقضة",
    "wilaya_id": 29,
    "daira": "Ghriss",
    "daira_ar": "غريس",
    "post_code": "29015",
    "daira_id": 316
  },
  {
    "id": 1057,
    "nom_francais": "Sidi Boussaid",
    "nom_arabe": "سيدي بوسعيد",
    "wilaya_id": 29,
    "daira": "Ghriss",
    "daira_ar": "غريس",
    "post_code": "29016",
    "daira_id": 316
  },
  {
    "id": 1058,
    "nom_francais": "El Bordj",
    "nom_arabe": "البرج",
    "wilaya_id": 29,
    "daira": "El Bordj",
    "daira_ar": "البرج",
    "post_code": "29017",
    "daira_id": 315
  },
  {
    "id": 1059,
    "nom_francais": "Ain Fekan",
    "nom_arabe": "عين فكان",
    "wilaya_id": 29,
    "daira": "Ain Fekan",
    "daira_ar": "عين فكان",
    "post_code": "29018",
    "daira_id": 312
  },
  {
    "id": 1060,
    "nom_francais": "Benian",
    "nom_arabe": "بنيان",
    "wilaya_id": 29,
    "daira": "Aouf",
    "daira_ar": "عوف",
    "post_code": "29019",
    "daira_id": 313
  },
  {
    "id": 1061,
    "nom_francais": "Khalouia",
    "nom_arabe": "خلوية",
    "wilaya_id": 29,
    "daira": "El Bordj",
    "daira_ar": "البرج",
    "post_code": "29020",
    "daira_id": 315
  },
  {
    "id": 1062,
    "nom_francais": "El Menaouer",
    "nom_arabe": "المناور",
    "wilaya_id": 29,
    "daira": "El Bordj",
    "daira_ar": "البرج",
    "post_code": "29021",
    "daira_id": 315
  },
  {
    "id": 1063,
    "nom_francais": "Oued Taria",
    "nom_arabe": "واد التاغية",
    "wilaya_id": 29,
    "daira": "Oued Taria",
    "daira_ar": "وادي التاغية",
    "post_code": "29022",
    "daira_id": 322
  },
  {
    "id": 1064,
    "nom_francais": "Aouf",
    "nom_arabe": "عوف",
    "wilaya_id": 29,
    "daira": "Aouf",
    "daira_ar": "عوف",
    "post_code": "29023",
    "daira_id": 313
  },
  {
    "id": 1065,
    "nom_francais": "Ain Fares",
    "nom_arabe": "عين فارس",
    "wilaya_id": 29,
    "daira": "Ain Fares",
    "daira_ar": "عين فارس",
    "post_code": "29024",
    "daira_id": 311
  },
  {
    "id": 1066,
    "nom_francais": "Ain Frass",
    "nom_arabe": "عين فراس",
    "wilaya_id": 29,
    "daira": "Ain Fekan",
    "daira_ar": "عين فكان",
    "post_code": "29025",
    "daira_id": 312
  },
  {
    "id": 1067,
    "nom_francais": "Sig",
    "nom_arabe": "سيڨ",
    "wilaya_id": 29,
    "daira": "Sig",
    "daira_ar": "سيق",
    "post_code": "29026",
    "daira_id": 323
  },
  {
    "id": 1068,
    "nom_francais": "Oggaz",
    "nom_arabe": "عقاز",
    "wilaya_id": 29,
    "daira": "Oggaz",
    "daira_ar": "عقاز",
    "post_code": "29027",
    "daira_id": 320
  },
  {
    "id": 1069,
    "nom_francais": "Alaimia",
    "nom_arabe": "العلايمية",
    "wilaya_id": 29,
    "daira": "Oggaz",
    "daira_ar": "عقاز",
    "post_code": "29028",
    "daira_id": 320
  },
  {
    "id": 1070,
    "nom_francais": "El Gaada",
    "nom_arabe": "القعدة",
    "wilaya_id": 29,
    "daira": "Zahana",
    "daira_ar": "زهانة",
    "post_code": "29029",
    "daira_id": 326
  },
  {
    "id": 1071,
    "nom_francais": "Zahana",
    "nom_arabe": "زھانة",
    "wilaya_id": 29,
    "daira": "Zahana",
    "daira_ar": "زهانة",
    "post_code": "29030",
    "daira_id": 326
  },
  {
    "id": 1072,
    "nom_francais": "Mohammadia",
    "nom_arabe": "المحمدية",
    "wilaya_id": 29,
    "daira": "Mohammadia",
    "daira_ar": "المحمدية",
    "post_code": "29031",
    "daira_id": 319
  },
  {
    "id": 1073,
    "nom_francais": "Sidi Abdelmoumene",
    "nom_arabe": "سيدي عبد المومن",
    "wilaya_id": 29,
    "daira": "Mohammadia",
    "daira_ar": "المحمدية",
    "post_code": "29032",
    "daira_id": 319
  },
  {
    "id": 1074,
    "nom_francais": "Ferraguig",
    "nom_arabe": "فرقيق",
    "wilaya_id": 29,
    "daira": "Mohammadia",
    "daira_ar": "المحمدية",
    "post_code": "29033",
    "daira_id": 319
  },
  {
    "id": 1075,
    "nom_francais": "El Ghomri",
    "nom_arabe": "الغمري",
    "wilaya_id": 29,
    "daira": "Mohammadia",
    "daira_ar": "المحمدية",
    "post_code": "29034",
    "daira_id": 319
  },
  {
    "id": 1076,
    "nom_francais": "Sedjerara",
    "nom_arabe": "سجرارة",
    "wilaya_id": 29,
    "daira": "Mohammadia",
    "daira_ar": "المحمدية",
    "post_code": "29035",
    "daira_id": 319
  },
  {
    "id": 1077,
    "nom_francais": "Moctadouz",
    "nom_arabe": "مقطع الدوز",
    "wilaya_id": 29,
    "daira": "Mohammadia",
    "daira_ar": "المحمدية",
    "post_code": "29036",
    "daira_id": 319
  },
  {
    "id": 1078,
    "nom_francais": "Bou Henni",
    "nom_arabe": "بوهني",
    "wilaya_id": 29,
    "daira": "Sig",
    "daira_ar": "سيق",
    "post_code": "29037",
    "daira_id": 323
  },
  {
    "id": 1079,
    "nom_francais": "Guettena",
    "nom_arabe": "القيطنة",
    "wilaya_id": 29,
    "daira": "Bouhanifia",
    "daira_ar": "بوحنيفية",
    "post_code": "29038",
    "daira_id": 314
  },
  {
    "id": 1080,
    "nom_francais": "El Mamounia",
    "nom_arabe": "المامونية",
    "wilaya_id": 29,
    "daira": "Ain Fares",
    "daira_ar": "عين فارس",
    "post_code": "29039",
    "daira_id": 311
  },
  {
    "id": 1081,
    "nom_francais": "El Keurt",
    "nom_arabe": "الكرط",
    "wilaya_id": 29,
    "daira": "Tizi",
    "daira_ar": "تيزي",
    "post_code": "29040",
    "daira_id": 325
  },
  {
    "id": 1082,
    "nom_francais": "Gharrous",
    "nom_arabe": "غروس",
    "wilaya_id": 29,
    "daira": "Aouf",
    "daira_ar": "عوف",
    "post_code": "29041",
    "daira_id": 313
  },
  {
    "id": 1083,
    "nom_francais": "Gherdjoum",
    "nom_arabe": "ڤرجوم",
    "wilaya_id": 29,
    "daira": "Oued Taria",
    "daira_ar": "وادي التاغية",
    "post_code": "29042",
    "daira_id": 322
  },
  {
    "id": 1084,
    "nom_francais": "Chorfa",
    "nom_arabe": "الشرفة",
    "wilaya_id": 29,
    "daira": "Sig",
    "daira_ar": "سيق",
    "post_code": "29043",
    "daira_id": 323
  },
  {
    "id": 1085,
    "nom_francais": "Ras Ain Amirouche",
    "nom_arabe": "رأس العين عميروش",
    "wilaya_id": 29,
    "daira": "Oggaz",
    "daira_ar": "عقاز",
    "post_code": "29044",
    "daira_id": 320
  },
  {
    "id": 1086,
    "nom_francais": "Nesmot",
    "nom_arabe": "نسموط",
    "wilaya_id": 29,
    "daira": "Hachem",
    "daira_ar": "الحشم",
    "post_code": "29045",
    "daira_id": 317
  },
  {
    "id": 1087,
    "nom_francais": "Sidi Abdeldjebar",
    "nom_arabe": "سيدي عبد الجبار",
    "wilaya_id": 29,
    "daira": "Oued El Abtal",
    "daira_ar": "وادي الأبطال",
    "post_code": "29046",
    "daira_id": 321
  },
  {
    "id": 1088,
    "nom_francais": "Sehailia",
    "nom_arabe": "سحايلية",
    "wilaya_id": 29,
    "daira": "Tighennif",
    "daira_ar": "تيغنيف",
    "post_code": "29047",
    "daira_id": 324
  },
  {
    "id": 1089,
    "nom_francais": "Ouargla",
    "nom_arabe": "ورڨلة",
    "wilaya_id": 30,
    "daira": "Ouargla",
    "daira_ar": "ورقلة",
    "post_code": "30001",
    "daira_id": 330
  },
  {
    "id": 1090,
    "nom_francais": "Ain Beida",
    "nom_arabe": "عين البيضاء",
    "wilaya_id": 30,
    "daira": "Sidi Khouiled",
    "daira_ar": "سيدي خويلد",
    "post_code": "30002",
    "daira_id": 331
  },
  {
    "id": 1091,
    "nom_francais": "Ngoussa",
    "nom_arabe": "نقوسة",
    "wilaya_id": 30,
    "daira": "N'goussa",
    "daira_ar": "انقوسة",
    "post_code": "30003",
    "daira_id": 329
  },
  {
    "id": 1092,
    "nom_francais": "Hassi Messaoud",
    "nom_arabe": "حاسي مسعود",
    "wilaya_id": 30,
    "daira": "Hassi Messaoud",
    "daira_ar": "حاسي مسعود",
    "post_code": "30004",
    "daira_id": 328
  },
  {
    "id": 1093,
    "nom_francais": "Rouissat",
    "nom_arabe": "الرويسات",
    "wilaya_id": 30,
    "daira": "Ouargla",
    "daira_ar": "ورقلة",
    "post_code": "30005",
    "daira_id": 330
  },
  {
    "id": 1094,
    "nom_francais": "Balidat Ameur",
    "nom_arabe": "بليدة عامر",
    "wilaya_id": 55,
    "daira": "Temacine",
    "daira_ar": "تماسين",
    "post_code": "30006",
    "daira_id": 503
  },
  {
    "id": 1095,
    "nom_francais": "Tebesbest",
    "nom_arabe": "تبسبست",
    "wilaya_id": 55,
    "daira": "Touggourt",
    "daira_ar": "تقرت",
    "post_code": "55007",
    "daira_id": 504
  },
  {
    "id": 1096,
    "nom_francais": "Nezla",
    "nom_arabe": "نزلة",
    "wilaya_id": 55,
    "daira": "Touggourt",
    "daira_ar": "تقرت",
    "post_code": "55008",
    "daira_id": 504
  },
  {
    "id": 1097,
    "nom_francais": "Zaouia El Abidia",
    "nom_arabe": "الزاوية العابدية",
    "wilaya_id": 55,
    "daira": "Touggourt",
    "daira_ar": "تقرت",
    "post_code": "55009",
    "daira_id": 504
  },
  {
    "id": 1098,
    "nom_francais": "Sidi Slimane",
    "nom_arabe": "سيدي سليمان",
    "wilaya_id": 55,
    "daira": "Megarine",
    "daira_ar": "المقارين",
    "post_code": "55010",
    "daira_id": 501
  },
  {
    "id": 1099,
    "nom_francais": "Sidi Khouiled",
    "nom_arabe": "سيدي خويلد",
    "wilaya_id": 30,
    "daira": "Sidi Khouiled",
    "daira_ar": "سيدي خويلد",
    "post_code": "30011",
    "daira_id": 331
  },
  {
    "id": 1100,
    "nom_francais": "Hassi Ben Abdellah",
    "nom_arabe": "حاسي بن عبد ﷲ",
    "wilaya_id": 30,
    "daira": "Sidi Khouiled",
    "daira_ar": "سيدي خويلد",
    "post_code": "30012",
    "daira_id": 331
  },
  {
    "id": 1101,
    "nom_francais": "Touggourt",
    "nom_arabe": "توقرت",
    "wilaya_id": 55,
    "daira": "Touggourt",
    "daira_ar": "تقرت",
    "post_code": "55013",
    "daira_id": 504
  },
  {
    "id": 1102,
    "nom_francais": "El Hadjira",
    "nom_arabe": "الحجيرة",
    "wilaya_id": 55,
    "daira": "El-Hadjira",
    "daira_ar": "الحجيرة",
    "post_code": "55014",
    "daira_id": 500
  },
  {
    "id": 1103,
    "nom_francais": "Taibet",
    "nom_arabe": "الطيبات",
    "wilaya_id": 55,
    "daira": "Taibet",
    "daira_ar": "الطيبات",
    "post_code": "55015",
    "daira_id": 502
  },
  {
    "id": 1104,
    "nom_francais": "Tamacine",
    "nom_arabe": "تماسين",
    "wilaya_id": 55,
    "daira": "Temacine",
    "daira_ar": "تماسين",
    "post_code": "55016",
    "daira_id": 503
  },
  {
    "id": 1105,
    "nom_francais": "Benaceur",
    "nom_arabe": "بن ناصر",
    "wilaya_id": 55,
    "daira": "Taibet",
    "daira_ar": "الطيبات",
    "post_code": "55017",
    "daira_id": 502
  },
  {
    "id": 1106,
    "nom_francais": "Mnaguer",
    "nom_arabe": "المنقر",
    "wilaya_id": 55,
    "daira": "Taibet",
    "daira_ar": "الطيبات",
    "post_code": "55018",
    "daira_id": 502
  },
  {
    "id": 1107,
    "nom_francais": "Megarine",
    "nom_arabe": "المقارين",
    "wilaya_id": 55,
    "daira": "Megarine",
    "daira_ar": "المقارين",
    "post_code": "55019",
    "daira_id": 501
  },
  {
    "id": 1108,
    "nom_francais": "El Allia",
    "nom_arabe": "العالية",
    "wilaya_id": 55,
    "daira": "El-Hadjira",
    "daira_ar": "الحجيرة",
    "post_code": "55020",
    "daira_id": 500
  },
  {
    "id": 1109,
    "nom_francais": "El Borma",
    "nom_arabe": "البرمة",
    "wilaya_id": 30,
    "daira": "El Borma",
    "daira_ar": "البرمة",
    "post_code": "30021",
    "daira_id": 327
  },
  {
    "id": 1110,
    "nom_francais": "Oran",
    "nom_arabe": "وهران",
    "wilaya_id": 31,
    "daira": "Oran",
    "daira_ar": "وهران",
    "post_code": "31001",
    "daira_id": 339
  },
  {
    "id": 1111,
    "nom_francais": "Gdyel",
    "nom_arabe": "ڨديل",
    "wilaya_id": 31,
    "daira": "Gdyel",
    "daira_ar": "قديل",
    "post_code": "31002",
    "daira_id": 338
  },
  {
    "id": 1112,
    "nom_francais": "Bir El Djir",
    "nom_arabe": "بئر الجير",
    "wilaya_id": 31,
    "daira": "Bir El Djir",
    "daira_ar": "بئر الجير",
    "post_code": "31003",
    "daira_id": 335
  },
  {
    "id": 1113,
    "nom_francais": "Hassi Bounif",
    "nom_arabe": "حاسيْ بُونِيف",
    "wilaya_id": 31,
    "daira": "Bir El Djir",
    "daira_ar": "بئر الجير",
    "post_code": "31004",
    "daira_id": 335
  },
  {
    "id": 1114,
    "nom_francais": "Es Senia",
    "nom_arabe": "السانية",
    "wilaya_id": 31,
    "daira": "Es Senia",
    "daira_ar": "السانية",
    "post_code": "31005",
    "daira_id": 337
  },
  {
    "id": 1115,
    "nom_francais": "Arzew",
    "nom_arabe": "أرزيو",
    "wilaya_id": 31,
    "daira": "Arzew",
    "daira_ar": "أرزيو",
    "post_code": "31006",
    "daira_id": 333
  },
  {
    "id": 1116,
    "nom_francais": "Bethioua",
    "nom_arabe": "ﺑﻃﻴﻭة",
    "wilaya_id": 31,
    "daira": "Bethioua",
    "daira_ar": "بطيوة",
    "post_code": "31007",
    "daira_id": 334
  },
  {
    "id": 1117,
    "nom_francais": "Marsat El Hadjadj",
    "nom_arabe": "مَرس ألحَجَاج",
    "wilaya_id": 31,
    "daira": "Bethioua",
    "daira_ar": "بطيوة",
    "post_code": "31008",
    "daira_id": 334
  },
  {
    "id": 1118,
    "nom_francais": "Ain Turk",
    "nom_arabe": "عيْن التُرْكْ",
    "wilaya_id": 31,
    "daira": "Ain Turk",
    "daira_ar": "عين الترك",
    "post_code": "31009",
    "daira_id": 332
  },
  {
    "id": 1119,
    "nom_francais": "El Ancar",
    "nom_arabe": "العنصر",
    "wilaya_id": 31,
    "daira": "Ain Turk",
    "daira_ar": "عين الترك",
    "post_code": "31010",
    "daira_id": 332
  },
  {
    "id": 1120,
    "nom_francais": "Oued Tlelat",
    "nom_arabe": "وادى تليلات",
    "wilaya_id": 31,
    "daira": "Oued Tlelat",
    "daira_ar": "وادي تليلات",
    "post_code": "31011",
    "daira_id": 340
  },
  {
    "id": 1121,
    "nom_francais": "Tafraoui",
    "nom_arabe": "طفراوي",
    "wilaya_id": 31,
    "daira": "Oued Tlelat",
    "daira_ar": "وادي تليلات",
    "post_code": "31012",
    "daira_id": 340
  },
  {
    "id": 1122,
    "nom_francais": "Sidi Chami",
    "nom_arabe": "سيدي الشحمي",
    "wilaya_id": 31,
    "daira": "Es Senia",
    "daira_ar": "السانية",
    "post_code": "31013",
    "daira_id": 337
  },
  {
    "id": 1123,
    "nom_francais": "Boufatis",
    "nom_arabe": "بوفاطيس",
    "wilaya_id": 31,
    "daira": "Oued Tlelat",
    "daira_ar": "وادي تليلات",
    "post_code": "31014",
    "daira_id": 340
  },
  {
    "id": 1124,
    "nom_francais": "Mers El Kebir",
    "nom_arabe": "المرسى الكبير",
    "wilaya_id": 31,
    "daira": "Ain Turk",
    "daira_ar": "عين الترك",
    "post_code": "31015",
    "daira_id": 332
  },
  {
    "id": 1125,
    "nom_francais": "Bousfer",
    "nom_arabe": "بوسفر",
    "wilaya_id": 31,
    "daira": "Ain Turk",
    "daira_ar": "عين الترك",
    "post_code": "31016",
    "daira_id": 332
  },
  {
    "id": 1126,
    "nom_francais": "El Karma",
    "nom_arabe": "الكرمة",
    "wilaya_id": 31,
    "daira": "Es Senia",
    "daira_ar": "السانية",
    "post_code": "31017",
    "daira_id": 337
  },
  {
    "id": 1127,
    "nom_francais": "El Braya",
    "nom_arabe": "ألبْرَيَ",
    "wilaya_id": 31,
    "daira": "Oued Tlelat",
    "daira_ar": "وادي تليلات",
    "post_code": "31018",
    "daira_id": 340
  },
  {
    "id": 1128,
    "nom_francais": "Hassi Ben Okba",
    "nom_arabe": "حاسي بن عقبة",
    "wilaya_id": 31,
    "daira": "Bir El Djir",
    "daira_ar": "بئر الجير",
    "post_code": "31019",
    "daira_id": 335
  },
  {
    "id": 1129,
    "nom_francais": "Ben Freha",
    "nom_arabe": "بن فريحة",
    "wilaya_id": 31,
    "daira": "Gdyel",
    "daira_ar": "قديل",
    "post_code": "31020",
    "daira_id": 338
  },
  {
    "id": 1130,
    "nom_francais": "Hassi Mefsoukh",
    "nom_arabe": "حاسي مفسوخ",
    "wilaya_id": 31,
    "daira": "Gdyel",
    "daira_ar": "قديل",
    "post_code": "31021",
    "daira_id": 338
  },
  {
    "id": 1131,
    "nom_francais": "Sidi Ben Yabka",
    "nom_arabe": "سيدي بن يبقى",
    "wilaya_id": 31,
    "daira": "Arzew",
    "daira_ar": "أرزيو",
    "post_code": "31022",
    "daira_id": 333
  },
  {
    "id": 1132,
    "nom_francais": "Messerghin",
    "nom_arabe": "مسرغين",
    "wilaya_id": 31,
    "daira": "Boutlelis",
    "daira_ar": "بوتليليس",
    "post_code": "31023",
    "daira_id": 336
  },
  {
    "id": 1133,
    "nom_francais": "Boutlelis",
    "nom_arabe": "بوتليليس",
    "wilaya_id": 31,
    "daira": "Boutlelis",
    "daira_ar": "بوتليليس",
    "post_code": "31024",
    "daira_id": 336
  },
  {
    "id": 1134,
    "nom_francais": "Ain Kerma",
    "nom_arabe": "عين الكرمة",
    "wilaya_id": 31,
    "daira": "Boutlelis",
    "daira_ar": "بوتليليس",
    "post_code": "31025",
    "daira_id": 336
  },
  {
    "id": 1135,
    "nom_francais": "Ain Biya",
    "nom_arabe": "عين البية",
    "wilaya_id": 31,
    "daira": "Bethioua",
    "daira_ar": "بطيوة",
    "post_code": "31026",
    "daira_id": 334
  },
  {
    "id": 1136,
    "nom_francais": "El Bayadh",
    "nom_arabe": "الـبـيـض",
    "wilaya_id": 32,
    "daira": "El Bayadh",
    "daira_ar": "البيض",
    "post_code": "32001",
    "daira_id": 344
  },
  {
    "id": 1137,
    "nom_francais": "Rogassa",
    "nom_arabe": "روقاصة",
    "wilaya_id": 32,
    "daira": "Rogassa",
    "daira_ar": "رقاصة",
    "post_code": "32002",
    "daira_id": 345
  },
  {
    "id": 1138,
    "nom_francais": "Stitten",
    "nom_arabe": "ستيتين",
    "wilaya_id": 32,
    "daira": "Boualem",
    "daira_ar": "بوعلام",
    "post_code": "32003",
    "daira_id": 341
  },
  {
    "id": 1139,
    "nom_francais": "Brezina",
    "nom_arabe": "بريزينة",
    "wilaya_id": 32,
    "daira": "Brezina",
    "daira_ar": "بريزينة",
    "post_code": "32004",
    "daira_id": 343
  },
  {
    "id": 1140,
    "nom_francais": "Ghassoul",
    "nom_arabe": "غسول",
    "wilaya_id": 32,
    "daira": "Brezina",
    "daira_ar": "بريزينة",
    "post_code": "32005",
    "daira_id": 343
  },
  {
    "id": 1141,
    "nom_francais": "Boualem",
    "nom_arabe": "بوعلام",
    "wilaya_id": 32,
    "daira": "Boualem",
    "daira_ar": "بوعلام",
    "post_code": "32006",
    "daira_id": 341
  },
  {
    "id": 1142,
    "nom_francais": "El Abiodh Sidi Cheikh",
    "nom_arabe": "الابيض سيدي الشيخ",
    "wilaya_id": 69,
    "daira": null,
    "daira_ar": null,
    "post_code": "69007",
    "daira_id": null
  },
  {
    "id": 1143,
    "nom_francais": "Ain El Orak",
    "nom_arabe": "عين العراك",
    "wilaya_id": 69,
    "daira": "Labiodh Sidi Cheikh",
    "daira_ar": "الأبيض سيدي الشيخ",
    "post_code": "69008",
    "daira_id": 550
  },
  {
    "id": 1144,
    "nom_francais": "Arbaouat",
    "nom_arabe": "أربوات",
    "wilaya_id": 69,
    "daira": "Labiodh Sidi Cheikh",
    "daira_ar": "الأبيض سيدي الشيخ",
    "post_code": "69009",
    "daira_id": 550
  },
  {
    "id": 1145,
    "nom_francais": "Bougtoub",
    "nom_arabe": "بوقطب",
    "wilaya_id": 32,
    "daira": "Bougtoub",
    "daira_ar": "بوقطب",
    "post_code": "32010",
    "daira_id": 342
  },
  {
    "id": 1146,
    "nom_francais": "El Kheither",
    "nom_arabe": "الخيثر",
    "wilaya_id": 32,
    "daira": null,
    "daira_ar": null,
    "post_code": "32011",
    "daira_id": null
  },
  {
    "id": 1147,
    "nom_francais": "Kef El Ahmar",
    "nom_arabe": "الكاف الاحمر",
    "wilaya_id": 32,
    "daira": "Rogassa",
    "daira_ar": "رقاصة",
    "post_code": "32012",
    "daira_id": 345
  },
  {
    "id": 1148,
    "nom_francais": "Boussemghoun",
    "nom_arabe": "بوسمغون",
    "wilaya_id": 69,
    "daira": "Boussemghoun",
    "daira_ar": "بوسمغون",
    "post_code": "69013",
    "daira_id": 548
  },
  {
    "id": 1149,
    "nom_francais": "Chellala",
    "nom_arabe": "شلالة",
    "wilaya_id": 69,
    "daira": null,
    "daira_ar": null,
    "post_code": "69014",
    "daira_id": null
  },
  {
    "id": 1150,
    "nom_francais": "Krakda",
    "nom_arabe": "كراكدة",
    "wilaya_id": 32,
    "daira": "Brezina",
    "daira_ar": "بريزينة",
    "post_code": "32015",
    "daira_id": 343
  },
  {
    "id": 1151,
    "nom_francais": "El Bnoud",
    "nom_arabe": "البنود",
    "wilaya_id": 69,
    "daira": "Labiodh Sidi Cheikh",
    "daira_ar": "الأبيض سيدي الشيخ",
    "post_code": "32016",
    "daira_id": 550
  },
  {
    "id": 1152,
    "nom_francais": "Cheguig",
    "nom_arabe": "الشقيق",
    "wilaya_id": 32,
    "daira": "Rogassa",
    "daira_ar": "رقاصة",
    "post_code": "32017",
    "daira_id": 345
  },
  {
    "id": 1153,
    "nom_francais": "Sidi Ameur",
    "nom_arabe": "سيدي عامر",
    "wilaya_id": 32,
    "daira": "Boualem",
    "daira_ar": "بوعلام",
    "post_code": "32018",
    "daira_id": 341
  },
  {
    "id": 1154,
    "nom_francais": "El Mehara",
    "nom_arabe": "المھارة",
    "wilaya_id": 69,
    "daira": "Chellala",
    "daira_ar": "شلالة",
    "post_code": "69019",
    "daira_id": 549
  },
  {
    "id": 1155,
    "nom_francais": "Tousmouline",
    "nom_arabe": "توسمولين",
    "wilaya_id": 32,
    "daira": "Bougtoub",
    "daira_ar": "بوقطب",
    "post_code": "32020",
    "daira_id": 342
  },
  {
    "id": 1156,
    "nom_francais": "Sidi Slimane",
    "nom_arabe": "سيدي سليمان",
    "wilaya_id": 32,
    "daira": "Boualem",
    "daira_ar": "بوعلام",
    "post_code": "32021",
    "daira_id": 341
  },
  {
    "id": 1157,
    "nom_francais": "Sidi Tifour",
    "nom_arabe": "سيدي طيفور",
    "wilaya_id": 32,
    "daira": null,
    "daira_ar": null,
    "post_code": "32022",
    "daira_id": null
  },
  {
    "id": 1158,
    "nom_francais": "Illizi",
    "nom_arabe": "إلـيـزي",
    "wilaya_id": 33,
    "daira": "Illizi",
    "daira_ar": "إيليزي",
    "post_code": "33001",
    "daira_id": 346
  },
  {
    "id": 1159,
    "nom_francais": "Djanet",
    "nom_arabe": "جانت",
    "wilaya_id": 56,
    "daira": "Djanet",
    "daira_ar": "جانت",
    "post_code": "56002",
    "daira_id": 505
  },
  {
    "id": 1160,
    "nom_francais": "Debdeb",
    "nom_arabe": "دبداب",
    "wilaya_id": 33,
    "daira": "In Amenas",
    "daira_ar": "إن أمناس",
    "post_code": "33003",
    "daira_id": 347
  },
  {
    "id": 1161,
    "nom_francais": "Bordj Omar Driss",
    "nom_arabe": "برج عمر ادريس",
    "wilaya_id": 33,
    "daira": "In Amenas",
    "daira_ar": "إن أمناس",
    "post_code": "33004",
    "daira_id": 347
  },
  {
    "id": 1162,
    "nom_francais": "Bordj El Haouasse",
    "nom_arabe": "برج الحواس",
    "wilaya_id": 56,
    "daira": "Djanet",
    "daira_ar": "جانت",
    "post_code": "56005",
    "daira_id": 505
  },
  {
    "id": 1163,
    "nom_francais": "In Amenas",
    "nom_arabe": "إن أميناس",
    "wilaya_id": 33,
    "daira": "In Amenas",
    "daira_ar": "إن أمناس",
    "post_code": "33006",
    "daira_id": 347
  },
  {
    "id": 1164,
    "nom_francais": "Bordj Bou Arreridj",
    "nom_arabe": "برج بوعريريج",
    "wilaya_id": 34,
    "daira": "Bordj Bou Arreridj",
    "daira_ar": "برج بوعريريج",
    "post_code": "34001",
    "daira_id": 350
  },
  {
    "id": 1165,
    "nom_francais": "Ras El Oued",
    "nom_arabe": "رأس الوادي",
    "wilaya_id": 34,
    "daira": "Ras El Oued",
    "daira_ar": "رأس الوادي",
    "post_code": "34002",
    "daira_id": 357
  },
  {
    "id": 1166,
    "nom_francais": "Bordj Zemoura",
    "nom_arabe": "برج زمورة",
    "wilaya_id": 34,
    "daira": "Bordj Zemmoura",
    "daira_ar": "برج زمورة",
    "post_code": "34003",
    "daira_id": 352
  },
  {
    "id": 1167,
    "nom_francais": "Mansoura",
    "nom_arabe": "منصورة",
    "wilaya_id": 34,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "34004",
    "daira_id": 355
  },
  {
    "id": 1168,
    "nom_francais": "El Mhir",
    "nom_arabe": "المھير",
    "wilaya_id": 34,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "34005",
    "daira_id": 355
  },
  {
    "id": 1169,
    "nom_francais": "Ben Daoud",
    "nom_arabe": "بن داود",
    "wilaya_id": 34,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "34006",
    "daira_id": 355
  },
  {
    "id": 1170,
    "nom_francais": "El Achir",
    "nom_arabe": "العشير",
    "wilaya_id": 34,
    "daira": "Medjana",
    "daira_ar": "مجانة",
    "post_code": "34007",
    "daira_id": 356
  },
  {
    "id": 1171,
    "nom_francais": "Ain Taghrout",
    "nom_arabe": "عين تاغروت",
    "wilaya_id": 34,
    "daira": "Ain Taghrout",
    "daira_ar": "عين تاغروت",
    "post_code": "34008",
    "daira_id": 348
  },
  {
    "id": 1172,
    "nom_francais": "Bordj Ghdir",
    "nom_arabe": "برج غدير",
    "wilaya_id": 34,
    "daira": "Bordj Ghedir",
    "daira_ar": "برج الغدير",
    "post_code": "34009",
    "daira_id": 351
  },
  {
    "id": 1173,
    "nom_francais": "Sidi Embarek",
    "nom_arabe": "سيدي مبارك",
    "wilaya_id": 34,
    "daira": "Bir Kasdali",
    "daira_ar": "بئر قاصد علي",
    "post_code": "34010",
    "daira_id": 349
  },
  {
    "id": 1174,
    "nom_francais": "El Hamadia",
    "nom_arabe": "الحمادية",
    "wilaya_id": 34,
    "daira": "El Hamadia",
    "daira_ar": "الحمادية",
    "post_code": "34011",
    "daira_id": 354
  },
  {
    "id": 1175,
    "nom_francais": "Belimour",
    "nom_arabe": "بليمور",
    "wilaya_id": 34,
    "daira": "Bordj Ghedir",
    "daira_ar": "برج الغدير",
    "post_code": "34012",
    "daira_id": 351
  },
  {
    "id": 1176,
    "nom_francais": "Medjana",
    "nom_arabe": "مجانة",
    "wilaya_id": 34,
    "daira": "Medjana",
    "daira_ar": "مجانة",
    "post_code": "34013",
    "daira_id": 356
  },
  {
    "id": 1177,
    "nom_francais": "Teniet En Nasr",
    "nom_arabe": "ثنية النصر",
    "wilaya_id": 34,
    "daira": "Medjana",
    "daira_ar": "مجانة",
    "post_code": "34014",
    "daira_id": 356
  },
  {
    "id": 1178,
    "nom_francais": "Djaafra",
    "nom_arabe": "جعافرة",
    "wilaya_id": 34,
    "daira": "Djaafra",
    "daira_ar": "جعافرة",
    "post_code": "34015",
    "daira_id": 353
  },
  {
    "id": 1179,
    "nom_francais": "El Main",
    "nom_arabe": "إلماين",
    "wilaya_id": 34,
    "daira": "Djaafra",
    "daira_ar": "جعافرة",
    "post_code": "34016",
    "daira_id": 353
  },
  {
    "id": 1180,
    "nom_francais": "Ouled Brahem",
    "nom_arabe": "أولاد ابراھم",
    "wilaya_id": 34,
    "daira": "Ras El Oued",
    "daira_ar": "رأس الوادي",
    "post_code": "34017",
    "daira_id": 357
  },
  {
    "id": 1181,
    "nom_francais": "Ouled Dahmane",
    "nom_arabe": "أولاد دحمان",
    "wilaya_id": 34,
    "daira": "Bordj Zemmoura",
    "daira_ar": "برج زمورة",
    "post_code": "34018",
    "daira_id": 352
  },
  {
    "id": 1182,
    "nom_francais": "Hasnaoua",
    "nom_arabe": "حسناوة",
    "wilaya_id": 34,
    "daira": "Medjana",
    "daira_ar": "مجانة",
    "post_code": "34019",
    "daira_id": 356
  },
  {
    "id": 1183,
    "nom_francais": "Khelil",
    "nom_arabe": "خليل",
    "wilaya_id": 34,
    "daira": "Bir Kasdali",
    "daira_ar": "بئر قاصد علي",
    "post_code": "34020",
    "daira_id": 349
  },
  {
    "id": 1184,
    "nom_francais": "Taglait",
    "nom_arabe": "تاقلعيت",
    "wilaya_id": 34,
    "daira": "Bordj Ghedir",
    "daira_ar": "برج الغدير",
    "post_code": "34021",
    "daira_id": 351
  },
  {
    "id": 1185,
    "nom_francais": "Ksour",
    "nom_arabe": "القصور",
    "wilaya_id": 34,
    "daira": "El Hamadia",
    "daira_ar": "الحمادية",
    "post_code": "34022",
    "daira_id": 354
  },
  {
    "id": 1186,
    "nom_francais": "Ouled Sidi Brahim",
    "nom_arabe": "آث سيذى پراهم.",
    "wilaya_id": 34,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "34023",
    "daira_id": 355
  },
  {
    "id": 1187,
    "nom_francais": "Tafreg",
    "nom_arabe": "تفرڨ",
    "wilaya_id": 34,
    "daira": "Djaafra",
    "daira_ar": "جعافرة",
    "post_code": "34024",
    "daira_id": 353
  },
  {
    "id": 1188,
    "nom_francais": "Colla",
    "nom_arabe": "القلة",
    "wilaya_id": 34,
    "daira": "Djaafra",
    "daira_ar": "جعافرة",
    "post_code": "34025",
    "daira_id": 353
  },
  {
    "id": 1189,
    "nom_francais": "Tixter",
    "nom_arabe": "تقصطر",
    "wilaya_id": 34,
    "daira": "Ain Taghrout",
    "daira_ar": "عين تاغروت",
    "post_code": "34026",
    "daira_id": 348
  },
  {
    "id": 1190,
    "nom_francais": "El Ach",
    "nom_arabe": "العش",
    "wilaya_id": 34,
    "daira": "El Hamadia",
    "daira_ar": "الحمادية",
    "post_code": "34027",
    "daira_id": 354
  },
  {
    "id": 1191,
    "nom_francais": "El Anseur",
    "nom_arabe": "العناصر",
    "wilaya_id": 34,
    "daira": "Bordj Ghedir",
    "daira_ar": "برج الغدير",
    "post_code": "34028",
    "daira_id": 351
  },
  {
    "id": 1192,
    "nom_francais": "Tesmart",
    "nom_arabe": "تسمارت",
    "wilaya_id": 34,
    "daira": "Bordj Zemmoura",
    "daira_ar": "برج زمورة",
    "post_code": "34029",
    "daira_id": 352
  },
  {
    "id": 1193,
    "nom_francais": "Ain Tesra",
    "nom_arabe": "عين تسرة",
    "wilaya_id": 34,
    "daira": "Ras El Oued",
    "daira_ar": "رأس الوادي",
    "post_code": "34030",
    "daira_id": 357
  },
  {
    "id": 1194,
    "nom_francais": "Bir Kasdali",
    "nom_arabe": "بئر قصد علي",
    "wilaya_id": 34,
    "daira": "Bir Kasdali",
    "daira_ar": "بئر قاصد علي",
    "post_code": "34031",
    "daira_id": 349
  },
  {
    "id": 1195,
    "nom_francais": "Ghilassa",
    "nom_arabe": "غيلاسة",
    "wilaya_id": 34,
    "daira": "Bordj Ghedir",
    "daira_ar": "برج الغدير",
    "post_code": "34032",
    "daira_id": 351
  },
  {
    "id": 1196,
    "nom_francais": "Rabta",
    "nom_arabe": "الرابطة",
    "wilaya_id": 34,
    "daira": "El Hamadia",
    "daira_ar": "الحمادية",
    "post_code": "34033",
    "daira_id": 354
  },
  {
    "id": 1197,
    "nom_francais": "Haraza",
    "nom_arabe": "الحرازة",
    "wilaya_id": 34,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "34034",
    "daira_id": 355
  },
  {
    "id": 1198,
    "nom_francais": "Boumerdes",
    "nom_arabe": "بومرداس",
    "wilaya_id": 35,
    "daira": "Boumerdes",
    "daira_ar": "بومرداس",
    "post_code": "35001",
    "daira_id": 361
  },
  {
    "id": 1199,
    "nom_francais": "Boudouaou",
    "nom_arabe": "بودواو",
    "wilaya_id": 35,
    "daira": "Boudouaou",
    "daira_ar": "بودواو",
    "post_code": "35002",
    "daira_id": 360
  },
  {
    "id": 1200,
    "nom_francais": "Afir",
    "nom_arabe": "أفير",
    "wilaya_id": 35,
    "daira": "Dellys",
    "daira_ar": "دلس",
    "post_code": "35004",
    "daira_id": 362
  },
  {
    "id": 1201,
    "nom_francais": "Bordj Menaiel",
    "nom_arabe": "برج منايل",
    "wilaya_id": 35,
    "daira": "Bordj Menaiel",
    "daira_ar": "برج منايل",
    "post_code": "35005",
    "daira_id": 359
  },
  {
    "id": 1202,
    "nom_francais": "Baghlia",
    "nom_arabe": "بغلية",
    "wilaya_id": 35,
    "daira": "Baghlia",
    "daira_ar": "بغلية",
    "post_code": "35006",
    "daira_id": 358
  },
  {
    "id": 1203,
    "nom_francais": "Sidi Daoud",
    "nom_arabe": "سيدي داود",
    "wilaya_id": 35,
    "daira": "Baghlia",
    "daira_ar": "بغلية",
    "post_code": "35007",
    "daira_id": 358
  },
  {
    "id": 1204,
    "nom_francais": "Naciria",
    "nom_arabe": "الناصرية",
    "wilaya_id": 35,
    "daira": "Naciria",
    "daira_ar": "الناصرية",
    "post_code": "35008",
    "daira_id": 365
  },
  {
    "id": 1205,
    "nom_francais": "Djinet",
    "nom_arabe": "جنات",
    "wilaya_id": 35,
    "daira": "Bordj Menaiel",
    "daira_ar": "برج منايل",
    "post_code": "35009",
    "daira_id": 359
  },
  {
    "id": 1206,
    "nom_francais": "Isser",
    "nom_arabe": "يسر",
    "wilaya_id": 35,
    "daira": "Isser",
    "daira_ar": "يسر",
    "post_code": "35010",
    "daira_id": 363
  },
  {
    "id": 1207,
    "nom_francais": "Zemmouri",
    "nom_arabe": "زموري",
    "wilaya_id": 35,
    "daira": "Bordj Menaiel",
    "daira_ar": "برج منايل",
    "post_code": "35011",
    "daira_id": 359
  },
  {
    "id": 1208,
    "nom_francais": "Si Mustapha",
    "nom_arabe": "سي مصطفى",
    "wilaya_id": 35,
    "daira": "Isser",
    "daira_ar": "يسر",
    "post_code": "35012",
    "daira_id": 363
  },
  {
    "id": 1209,
    "nom_francais": "Tidjelabine",
    "nom_arabe": "تيجلابين",
    "wilaya_id": 35,
    "daira": "Boumerdes",
    "daira_ar": "بومرداس",
    "post_code": "35013",
    "daira_id": 361
  },
  {
    "id": 1210,
    "nom_francais": "Chabet El Ameur",
    "nom_arabe": "شعبة العامر",
    "wilaya_id": 35,
    "daira": "Isser",
    "daira_ar": "يسر",
    "post_code": "35014",
    "daira_id": 363
  },
  {
    "id": 1211,
    "nom_francais": "Thenia",
    "nom_arabe": "الثنية",
    "wilaya_id": 35,
    "daira": "Thenia",
    "daira_ar": "الثنية",
    "post_code": "35015",
    "daira_id": 366
  },
  {
    "id": 1212,
    "nom_francais": "Timezrit",
    "nom_arabe": "تمزريت",
    "wilaya_id": 35,
    "daira": "Isser",
    "daira_ar": "يسر",
    "post_code": "35018",
    "daira_id": 363
  },
  {
    "id": 1213,
    "nom_francais": "Corso",
    "nom_arabe": "قورصو",
    "wilaya_id": 35,
    "daira": "Boumerdes",
    "daira_ar": "بومرداس",
    "post_code": "35019",
    "daira_id": 361
  },
  {
    "id": 1214,
    "nom_francais": "Ouled Moussa",
    "nom_arabe": "أولاد موسى",
    "wilaya_id": 35,
    "daira": "Khemis El Khechna",
    "daira_ar": "خميس الخشنة",
    "post_code": "35020",
    "daira_id": 364
  },
  {
    "id": 1215,
    "nom_francais": "Larbatache",
    "nom_arabe": "الأربعطاش",
    "wilaya_id": 35,
    "daira": "Khemis El Khechna",
    "daira_ar": "خميس الخشنة",
    "post_code": "35021",
    "daira_id": 364
  },
  {
    "id": 1216,
    "nom_francais": "Bouzegza Keddara",
    "nom_arabe": "بوزقزة قدارة",
    "wilaya_id": 35,
    "daira": "Boudouaou",
    "daira_ar": "بودواو",
    "post_code": "35022",
    "daira_id": 360
  },
  {
    "id": 1217,
    "nom_francais": "Taourga",
    "nom_arabe": "تورقة",
    "wilaya_id": 35,
    "daira": "Baghlia",
    "daira_ar": "بغلية",
    "post_code": "35025",
    "daira_id": 358
  },
  {
    "id": 1218,
    "nom_francais": "Ouled Aissa",
    "nom_arabe": "أولاد عيسى",
    "wilaya_id": 35,
    "daira": "Naciria",
    "daira_ar": "الناصرية",
    "post_code": "35026",
    "daira_id": 365
  },
  {
    "id": 1219,
    "nom_francais": "Ben Choud",
    "nom_arabe": "بن شود",
    "wilaya_id": 35,
    "daira": "Dellys",
    "daira_ar": "دلس",
    "post_code": "35027",
    "daira_id": 362
  },
  {
    "id": 1220,
    "nom_francais": "Dellys",
    "nom_arabe": "دلس",
    "wilaya_id": 35,
    "daira": "Dellys",
    "daira_ar": "دلس",
    "post_code": "35028",
    "daira_id": 362
  },
  {
    "id": 1221,
    "nom_francais": "Ammal",
    "nom_arabe": "عمال",
    "wilaya_id": 35,
    "daira": "Thenia",
    "daira_ar": "الثنية",
    "post_code": "35029",
    "daira_id": 366
  },
  {
    "id": 1222,
    "nom_francais": "Beni Amrane",
    "nom_arabe": "بنى عمران",
    "wilaya_id": 35,
    "daira": "Thenia",
    "daira_ar": "الثنية",
    "post_code": "35030",
    "daira_id": 366
  },
  {
    "id": 1223,
    "nom_francais": "Souk El Had",
    "nom_arabe": "سوق الحد",
    "wilaya_id": 35,
    "daira": "Thenia",
    "daira_ar": "الثنية",
    "post_code": "35031",
    "daira_id": 366
  },
  {
    "id": 1224,
    "nom_francais": "Boudouaou El Bahri",
    "nom_arabe": "بودواو البحرى",
    "wilaya_id": 35,
    "daira": "Boudouaou",
    "daira_ar": "بودواو",
    "post_code": "35032",
    "daira_id": 360
  },
  {
    "id": 1225,
    "nom_francais": "Ouled Hedadj",
    "nom_arabe": "أولاد ھداج",
    "wilaya_id": 35,
    "daira": "Boudouaou",
    "daira_ar": "بودواو",
    "post_code": "35033",
    "daira_id": 360
  },
  {
    "id": 1226,
    "nom_francais": "Laghata",
    "nom_arabe": "لقاطة",
    "wilaya_id": 35,
    "daira": "Bordj Menaiel",
    "daira_ar": "برج منايل",
    "post_code": "35035",
    "daira_id": 359
  },
  {
    "id": 1227,
    "nom_francais": "Hammedi",
    "nom_arabe": "حمادى",
    "wilaya_id": 35,
    "daira": "Khemis El Khechna",
    "daira_ar": "خميس الخشنة",
    "post_code": "35036",
    "daira_id": 364
  },
  {
    "id": 1228,
    "nom_francais": "Khemis El Khechna",
    "nom_arabe": "خميس الخشنة",
    "wilaya_id": 35,
    "daira": "Khemis El Khechna",
    "daira_ar": "خميس الخشنة",
    "post_code": "35037",
    "daira_id": 364
  },
  {
    "id": 1229,
    "nom_francais": "El Kharrouba",
    "nom_arabe": "الخروبة",
    "wilaya_id": 35,
    "daira": "Boudouaou",
    "daira_ar": "بودواو",
    "post_code": "35038",
    "daira_id": 360
  },
  {
    "id": 1230,
    "nom_francais": "El Tarf",
    "nom_arabe": "الطارف",
    "wilaya_id": 36,
    "daira": "El Tarf",
    "daira_ar": "الطارف",
    "post_code": "36001",
    "daira_id": 373
  },
  {
    "id": 1231,
    "nom_francais": "Bouhadjar",
    "nom_arabe": "بوحجار",
    "wilaya_id": 36,
    "daira": "Bouhadjar",
    "daira_ar": "بوحجار",
    "post_code": "36002",
    "daira_id": 369
  },
  {
    "id": 1232,
    "nom_francais": "Ben Mhidi",
    "nom_arabe": "بن مهيدى",
    "wilaya_id": 36,
    "daira": "Ben M'hidi",
    "daira_ar": "بن مهيدي",
    "post_code": "36003",
    "daira_id": 367
  },
  {
    "id": 1233,
    "nom_francais": "Bougous",
    "nom_arabe": "بوقوس",
    "wilaya_id": 36,
    "daira": "El Tarf",
    "daira_ar": "الطارف",
    "post_code": "36004",
    "daira_id": 373
  },
  {
    "id": 1234,
    "nom_francais": "El Kala",
    "nom_arabe": "القالة",
    "wilaya_id": 36,
    "daira": "El Kala",
    "daira_ar": "القالة",
    "post_code": "36005",
    "daira_id": 372
  },
  {
    "id": 1235,
    "nom_francais": "Ain El Assel",
    "nom_arabe": "عين العسل",
    "wilaya_id": 36,
    "daira": "El Tarf",
    "daira_ar": "الطارف",
    "post_code": "36006",
    "daira_id": 373
  },
  {
    "id": 1236,
    "nom_francais": "El Aioun",
    "nom_arabe": "العيون",
    "wilaya_id": 36,
    "daira": "El Kala",
    "daira_ar": "القالة",
    "post_code": "36007",
    "daira_id": 372
  },
  {
    "id": 1237,
    "nom_francais": "Bouteldja",
    "nom_arabe": "بوثلجة",
    "wilaya_id": 36,
    "daira": "Bouteldja",
    "daira_ar": "بوثلجة",
    "post_code": "36008",
    "daira_id": 370
  },
  {
    "id": 1238,
    "nom_francais": "Souarekh",
    "nom_arabe": "السوارخ",
    "wilaya_id": 36,
    "daira": "El Kala",
    "daira_ar": "القالة",
    "post_code": "36009",
    "daira_id": 372
  },
  {
    "id": 1239,
    "nom_francais": "Berrihane",
    "nom_arabe": "برحان",
    "wilaya_id": 36,
    "daira": "Ben M'hidi",
    "daira_ar": "بن مهيدي",
    "post_code": "36010",
    "daira_id": 367
  },
  {
    "id": 1240,
    "nom_francais": "Lac Des Oiseaux",
    "nom_arabe": "بحيرة الطيور",
    "wilaya_id": 36,
    "daira": "Bouteldja",
    "daira_ar": "بوثلجة",
    "post_code": "36011",
    "daira_id": 370
  },
  {
    "id": 1241,
    "nom_francais": "Chefia",
    "nom_arabe": "الشافية",
    "wilaya_id": 36,
    "daira": "Bouteldja",
    "daira_ar": "بوثلجة",
    "post_code": "36012",
    "daira_id": 370
  },
  {
    "id": 1242,
    "nom_francais": "Drean",
    "nom_arabe": "الذرعان",
    "wilaya_id": 36,
    "daira": "Drean",
    "daira_ar": "الذرعان",
    "post_code": "36013",
    "daira_id": 371
  },
  {
    "id": 1243,
    "nom_francais": "Chihani",
    "nom_arabe": "شهانى",
    "wilaya_id": 36,
    "daira": "Drean",
    "daira_ar": "الذرعان",
    "post_code": "36014",
    "daira_id": 371
  },
  {
    "id": 1244,
    "nom_francais": "Chebaita Mokhtar",
    "nom_arabe": "شبيطة مختار",
    "wilaya_id": 36,
    "daira": "Drean",
    "daira_ar": "الذرعان",
    "post_code": "36015",
    "daira_id": 371
  },
  {
    "id": 1245,
    "nom_francais": "Besbes",
    "nom_arabe": "البسباس",
    "wilaya_id": 36,
    "daira": "Besbes",
    "daira_ar": "البسباس",
    "post_code": "36016",
    "daira_id": 368
  },
  {
    "id": 1246,
    "nom_francais": "Asfour",
    "nom_arabe": "عصفور",
    "wilaya_id": 36,
    "daira": "Besbes",
    "daira_ar": "البسباس",
    "post_code": "36017",
    "daira_id": 368
  },
  {
    "id": 1247,
    "nom_francais": "Echatt",
    "nom_arabe": "الشط",
    "wilaya_id": 36,
    "daira": "Ben M'hidi",
    "daira_ar": "بن مهيدي",
    "post_code": "36018",
    "daira_id": 367
  },
  {
    "id": 1248,
    "nom_francais": "Zerizer",
    "nom_arabe": "زريزر",
    "wilaya_id": 36,
    "daira": "Besbes",
    "daira_ar": "البسباس",
    "post_code": "36019",
    "daira_id": 368
  },
  {
    "id": 1249,
    "nom_francais": "Zitouna",
    "nom_arabe": "الزيتونة",
    "wilaya_id": 36,
    "daira": "El Tarf",
    "daira_ar": "الطارف",
    "post_code": "36020",
    "daira_id": 373
  },
  {
    "id": 1250,
    "nom_francais": "Ain Kerma",
    "nom_arabe": "عين الكرمة",
    "wilaya_id": 36,
    "daira": "Bouhadjar",
    "daira_ar": "بوحجار",
    "post_code": "36021",
    "daira_id": 369
  },
  {
    "id": 1251,
    "nom_francais": "Oued Zitoun",
    "nom_arabe": "وادى الزيتون",
    "wilaya_id": 36,
    "daira": "Bouhadjar",
    "daira_ar": "بوحجار",
    "post_code": "36022",
    "daira_id": 369
  },
  {
    "id": 1252,
    "nom_francais": "Hammam Beni Salah",
    "nom_arabe": "حمام بنى صالح",
    "wilaya_id": 36,
    "daira": "Bouhadjar",
    "daira_ar": "بوحجار",
    "post_code": "36023",
    "daira_id": 369
  },
  {
    "id": 1253,
    "nom_francais": "Raml Souk",
    "nom_arabe": "رمل سوق",
    "wilaya_id": 36,
    "daira": "El Kala",
    "daira_ar": "القالة",
    "post_code": "36024",
    "daira_id": 372
  },
  {
    "id": 1254,
    "nom_francais": "Tindouf",
    "nom_arabe": "تندوف",
    "wilaya_id": 37,
    "daira": "Tindouf",
    "daira_ar": "تندوف",
    "post_code": "37001",
    "daira_id": 374
  },
  {
    "id": 1255,
    "nom_francais": "Oum El Assel",
    "nom_arabe": "أم العسل",
    "wilaya_id": 37,
    "daira": "Tindouf",
    "daira_ar": "تندوف",
    "post_code": "37002",
    "daira_id": 374
  },
  {
    "id": 1256,
    "nom_francais": "Tissemsilt",
    "nom_arabe": "تـيـسـمـسـيـلـت",
    "wilaya_id": 38,
    "daira": "Tissemsilt",
    "daira_ar": "تيسمسيلت",
    "post_code": "38001",
    "daira_id": 382
  },
  {
    "id": 1257,
    "nom_francais": "Bordj Bou Naama",
    "nom_arabe": "برج بونعامة",
    "wilaya_id": 38,
    "daira": "Bordj Bounaama",
    "daira_ar": "برج بونعامة",
    "post_code": "38002",
    "daira_id": 376
  },
  {
    "id": 1258,
    "nom_francais": "Theniet El Had",
    "nom_arabe": "ثنية الاحد",
    "wilaya_id": 38,
    "daira": "Theniet El Had",
    "daira_ar": "ثنية الاحد",
    "post_code": "38003",
    "daira_id": 381
  },
  {
    "id": 1259,
    "nom_francais": "Lazharia",
    "nom_arabe": "الازھرية",
    "wilaya_id": 38,
    "daira": "Lazharia",
    "daira_ar": "الأزهرية",
    "post_code": "38004",
    "daira_id": 380
  },
  {
    "id": 1260,
    "nom_francais": "Beni Chaib",
    "nom_arabe": "بنى شعيب",
    "wilaya_id": 38,
    "daira": "Bordj Bounaama",
    "daira_ar": "برج بونعامة",
    "post_code": "38005",
    "daira_id": 376
  },
  {
    "id": 1261,
    "nom_francais": "Lardjem",
    "nom_arabe": "لارجم",
    "wilaya_id": 38,
    "daira": "Lardjem",
    "daira_ar": "لرجام",
    "post_code": "38006",
    "daira_id": 379
  },
  {
    "id": 1262,
    "nom_francais": "Melaab",
    "nom_arabe": "ملعب",
    "wilaya_id": 38,
    "daira": "Lardjem",
    "daira_ar": "لرجام",
    "post_code": "38007",
    "daira_id": 379
  },
  {
    "id": 1263,
    "nom_francais": "Sidi Lantri",
    "nom_arabe": "سيدي العنترى",
    "wilaya_id": 38,
    "daira": "Lardjem",
    "daira_ar": "لرجام",
    "post_code": "38008",
    "daira_id": 379
  },
  {
    "id": 1264,
    "nom_francais": "Bordj El Emir Abdelkader",
    "nom_arabe": "برج الامير عبد القادر",
    "wilaya_id": 38,
    "daira": "Bordj Emir Abdelkader",
    "daira_ar": "برج الأمير عبد القادر",
    "post_code": "38009",
    "daira_id": 377
  },
  {
    "id": 1265,
    "nom_francais": "Layoune",
    "nom_arabe": "العيون",
    "wilaya_id": 38,
    "daira": "Khemisti",
    "daira_ar": "خميستي",
    "post_code": "38010",
    "daira_id": 378
  },
  {
    "id": 1266,
    "nom_francais": "Khemisti",
    "nom_arabe": "خميستى",
    "wilaya_id": 38,
    "daira": "Khemisti",
    "daira_ar": "خميستي",
    "post_code": "38011",
    "daira_id": 378
  },
  {
    "id": 1267,
    "nom_francais": "Ouled Bessem",
    "nom_arabe": "أولاد بسام",
    "wilaya_id": 38,
    "daira": "Tissemsilt",
    "daira_ar": "تيسمسيلت",
    "post_code": "38012",
    "daira_id": 382
  },
  {
    "id": 1268,
    "nom_francais": "Ammari",
    "nom_arabe": "عمارى",
    "wilaya_id": 38,
    "daira": "Ammari",
    "daira_ar": "عماري",
    "post_code": "38013",
    "daira_id": 375
  },
  {
    "id": 1269,
    "nom_francais": "Youssoufia",
    "nom_arabe": "اليوسفية",
    "wilaya_id": 38,
    "daira": "Bordj Emir Abdelkader",
    "daira_ar": "برج الأمير عبد القادر",
    "post_code": "38014",
    "daira_id": 377
  },
  {
    "id": 1270,
    "nom_francais": "Sidi Boutouchent",
    "nom_arabe": "سيدي بوتوشنت",
    "wilaya_id": 38,
    "daira": "Theniet El Had",
    "daira_ar": "ثنية الاحد",
    "post_code": "38015",
    "daira_id": 381
  },
  {
    "id": 1271,
    "nom_francais": "Larbaa",
    "nom_arabe": "الاربعاء",
    "wilaya_id": 38,
    "daira": "Lazharia",
    "daira_ar": "الأزهرية",
    "post_code": "38016",
    "daira_id": 380
  },
  {
    "id": 1272,
    "nom_francais": "Maasem",
    "nom_arabe": "المعاصم",
    "wilaya_id": 38,
    "daira": "Ammari",
    "daira_ar": "عماري",
    "post_code": "38017",
    "daira_id": 375
  },
  {
    "id": 1273,
    "nom_francais": "Sidi Abed",
    "nom_arabe": "سيدي عابد",
    "wilaya_id": 38,
    "daira": "Ammari",
    "daira_ar": "عماري",
    "post_code": "38018",
    "daira_id": 375
  },
  {
    "id": 1274,
    "nom_francais": "Tamalaht",
    "nom_arabe": "تاملاحت",
    "wilaya_id": 38,
    "daira": "Lardjem",
    "daira_ar": "لرجام",
    "post_code": "38019",
    "daira_id": 379
  },
  {
    "id": 1275,
    "nom_francais": "Sidi Slimane",
    "nom_arabe": "سيدي سليمان",
    "wilaya_id": 38,
    "daira": "Bordj Bounaama",
    "daira_ar": "برج بونعامة",
    "post_code": "38020",
    "daira_id": 376
  },
  {
    "id": 1276,
    "nom_francais": "Boucaid",
    "nom_arabe": "بوقايد",
    "wilaya_id": 38,
    "daira": "Lazharia",
    "daira_ar": "الأزهرية",
    "post_code": "38021",
    "daira_id": 380
  },
  {
    "id": 1277,
    "nom_francais": "Beni Lahcene",
    "nom_arabe": "بنى لحسن",
    "wilaya_id": 38,
    "daira": "Bordj Bounaama",
    "daira_ar": "برج بونعامة",
    "post_code": "38022",
    "daira_id": 376
  },
  {
    "id": 1278,
    "nom_francais": "El Oued",
    "nom_arabe": "الوادي",
    "wilaya_id": 39,
    "daira": "El Oued",
    "daira_ar": "الوادي",
    "post_code": "39001",
    "daira_id": 385
  },
  {
    "id": 1279,
    "nom_francais": "Robbah",
    "nom_arabe": "رباح",
    "wilaya_id": 39,
    "daira": "Robbah",
    "daira_ar": "الرباح",
    "post_code": "39002",
    "daira_id": 391
  },
  {
    "id": 1280,
    "nom_francais": "Oued El Alenda",
    "nom_arabe": "وادى العلندة",
    "wilaya_id": 39,
    "daira": "Mih Ouensa",
    "daira_ar": "اميه وانسة",
    "post_code": "39003",
    "daira_id": 389
  },
  {
    "id": 1281,
    "nom_francais": "Bayadha",
    "nom_arabe": "البياضة",
    "wilaya_id": 39,
    "daira": "Bayadha",
    "daira_ar": "البياضة",
    "post_code": "39004",
    "daira_id": 383
  },
  {
    "id": 1282,
    "nom_francais": "Nakhla",
    "nom_arabe": "النخلة",
    "wilaya_id": 39,
    "daira": "Robbah",
    "daira_ar": "الرباح",
    "post_code": "39005",
    "daira_id": 391
  },
  {
    "id": 1283,
    "nom_francais": "Guemar",
    "nom_arabe": "ڨمار",
    "wilaya_id": 39,
    "daira": "Guemar",
    "daira_ar": "قمار",
    "post_code": "39006",
    "daira_id": 386
  },
  {
    "id": 1284,
    "nom_francais": "Kouinine",
    "nom_arabe": "كوينين",
    "wilaya_id": 39,
    "daira": "El Oued",
    "daira_ar": "الوادي",
    "post_code": "39007",
    "daira_id": 385
  },
  {
    "id": 1285,
    "nom_francais": "Reguiba",
    "nom_arabe": "الرڨيبة",
    "wilaya_id": 39,
    "daira": "Reguiba",
    "daira_ar": "الرقيبة",
    "post_code": "39008",
    "daira_id": 390
  },
  {
    "id": 1286,
    "nom_francais": "Hamraia",
    "nom_arabe": "الحمراية",
    "wilaya_id": 39,
    "daira": "Reguiba",
    "daira_ar": "الرقيبة",
    "post_code": "39009",
    "daira_id": 390
  },
  {
    "id": 1287,
    "nom_francais": "Taghzout",
    "nom_arabe": "تغزوت",
    "wilaya_id": 39,
    "daira": "Guemar",
    "daira_ar": "قمار",
    "post_code": "39010",
    "daira_id": 386
  },
  {
    "id": 1288,
    "nom_francais": "Debila",
    "nom_arabe": "الدبيلة",
    "wilaya_id": 39,
    "daira": "Debila",
    "daira_ar": "الدبيلة",
    "post_code": "39011",
    "daira_id": 384
  },
  {
    "id": 1289,
    "nom_francais": "Hassani Abdelkrim",
    "nom_arabe": "بلدية حساني عبد الكريم",
    "wilaya_id": 39,
    "daira": "Debila",
    "daira_ar": "الدبيلة",
    "post_code": "39012",
    "daira_id": 384
  },
  {
    "id": 1290,
    "nom_francais": "Hassi Khelifa",
    "nom_arabe": "حاسى خليفة",
    "wilaya_id": 39,
    "daira": "Hassi Khalifa",
    "daira_ar": "حاسي خليفة",
    "post_code": "39013",
    "daira_id": 387
  },
  {
    "id": 1291,
    "nom_francais": "Taleb Larbi",
    "nom_arabe": "طالب العربي",
    "wilaya_id": 39,
    "daira": "Taleb Larbi",
    "daira_ar": "الطالب العربي",
    "post_code": "39014",
    "daira_id": 392
  },
  {
    "id": 1292,
    "nom_francais": "Douar El Ma",
    "nom_arabe": "دوار الماء",
    "wilaya_id": 39,
    "daira": "Taleb Larbi",
    "daira_ar": "الطالب العربي",
    "post_code": "39015",
    "daira_id": 392
  },
  {
    "id": 1293,
    "nom_francais": "Sidi Aoun",
    "nom_arabe": "سيدي عون",
    "wilaya_id": 39,
    "daira": "Magrane",
    "daira_ar": "المقرن",
    "post_code": "39016",
    "daira_id": 388
  },
  {
    "id": 1294,
    "nom_francais": "Trifaoui",
    "nom_arabe": "تريفاوى",
    "wilaya_id": 39,
    "daira": "Hassi Khalifa",
    "daira_ar": "حاسي خليفة",
    "post_code": "39017",
    "daira_id": 387
  },
  {
    "id": 1295,
    "nom_francais": "Magrane",
    "nom_arabe": "المڨرن",
    "wilaya_id": 39,
    "daira": "Magrane",
    "daira_ar": "المقرن",
    "post_code": "39018",
    "daira_id": 388
  },
  {
    "id": 1296,
    "nom_francais": "Beni Guecha",
    "nom_arabe": "بن ڨشة",
    "wilaya_id": 39,
    "daira": "Taleb Larbi",
    "daira_ar": "الطالب العربي",
    "post_code": "39019",
    "daira_id": 392
  },
  {
    "id": 1297,
    "nom_francais": "Ourmas",
    "nom_arabe": "أورماس",
    "wilaya_id": 39,
    "daira": "Guemar",
    "daira_ar": "قمار",
    "post_code": "39020",
    "daira_id": 386
  },
  {
    "id": 1298,
    "nom_francais": "Still",
    "nom_arabe": "سطيل",
    "wilaya_id": 57,
    "daira": "El Meghaier",
    "daira_ar": "المغير",
    "post_code": "57021",
    "daira_id": 507
  },
  {
    "id": 1299,
    "nom_francais": "Mrara",
    "nom_arabe": "مرارة",
    "wilaya_id": 57,
    "daira": "Djamaa",
    "daira_ar": "جامعة",
    "post_code": "39022",
    "daira_id": 506
  },
  {
    "id": 1300,
    "nom_francais": "Sidi Khellil",
    "nom_arabe": "سيدي خليل",
    "wilaya_id": 57,
    "daira": "El Meghaier",
    "daira_ar": "المغير",
    "post_code": "39023",
    "daira_id": 507
  },
  {
    "id": 1301,
    "nom_francais": "Tendla",
    "nom_arabe": "تندلة",
    "wilaya_id": 57,
    "daira": "Djamaa",
    "daira_ar": "جامعة",
    "post_code": "57024",
    "daira_id": 506
  },
  {
    "id": 1302,
    "nom_francais": "El Ogla",
    "nom_arabe": "العقلة",
    "wilaya_id": 39,
    "daira": "Robbah",
    "daira_ar": "الرباح",
    "post_code": "39025",
    "daira_id": 391
  },
  {
    "id": 1303,
    "nom_francais": "Mih Ouansa",
    "nom_arabe": "مية ونسة",
    "wilaya_id": 39,
    "daira": "Mih Ouensa",
    "daira_ar": "اميه وانسة",
    "post_code": "39026",
    "daira_id": 389
  },
  {
    "id": 1304,
    "nom_francais": "El Mghair",
    "nom_arabe": "المغير",
    "wilaya_id": 57,
    "daira": "El Meghaier",
    "daira_ar": "المغير",
    "post_code": "39027",
    "daira_id": 507
  },
  {
    "id": 1305,
    "nom_francais": "Djamaa",
    "nom_arabe": "جامعة",
    "wilaya_id": 57,
    "daira": "Djamaa",
    "daira_ar": "جامعة",
    "post_code": "57028",
    "daira_id": 506
  },
  {
    "id": 1306,
    "nom_francais": "Oum Touyour",
    "nom_arabe": "أم الطيور",
    "wilaya_id": 57,
    "daira": "El Meghaier",
    "daira_ar": "المغير",
    "post_code": "57029",
    "daira_id": 507
  },
  {
    "id": 1307,
    "nom_francais": "Sidi Amrane",
    "nom_arabe": "سيدي عمران",
    "wilaya_id": 57,
    "daira": "Djamaa",
    "daira_ar": "جامعة",
    "post_code": "57030",
    "daira_id": 506
  },
  {
    "id": 1308,
    "nom_francais": "Khenchela",
    "nom_arabe": "خنشلة",
    "wilaya_id": 40,
    "daira": "Khenchela",
    "daira_ar": "خنشلة",
    "post_code": "40001",
    "daira_id": 399
  },
  {
    "id": 1309,
    "nom_francais": "Mtoussa",
    "nom_arabe": "متوسة",
    "wilaya_id": 40,
    "daira": "Ain Touila",
    "daira_ar": "عين الطويلة",
    "post_code": "40002",
    "daira_id": 393
  },
  {
    "id": 1310,
    "nom_francais": "Kais",
    "nom_arabe": "قايس",
    "wilaya_id": 40,
    "daira": "Kais",
    "daira_ar": "قايس",
    "post_code": "40003",
    "daira_id": 398
  },
  {
    "id": 1311,
    "nom_francais": "Baghai",
    "nom_arabe": "بغاي",
    "wilaya_id": 40,
    "daira": "El Hamma",
    "daira_ar": "الحامة",
    "post_code": "40004",
    "daira_id": 397
  },
  {
    "id": 1312,
    "nom_francais": "El Hamma",
    "nom_arabe": "الحامة",
    "wilaya_id": 40,
    "daira": "El Hamma",
    "daira_ar": "الحامة",
    "post_code": "40005",
    "daira_id": 397
  },
  {
    "id": 1313,
    "nom_francais": "Ain Touila",
    "nom_arabe": "عين الطويلة",
    "wilaya_id": 40,
    "daira": "Ain Touila",
    "daira_ar": "عين الطويلة",
    "post_code": "40006",
    "daira_id": 393
  },
  {
    "id": 1314,
    "nom_francais": "Taouzianat",
    "nom_arabe": "تاوزيانت",
    "wilaya_id": 40,
    "daira": "Kais",
    "daira_ar": "قايس",
    "post_code": "40007",
    "daira_id": 398
  },
  {
    "id": 1315,
    "nom_francais": "Bouhmama",
    "nom_arabe": "بوحمامة",
    "wilaya_id": 40,
    "daira": "Bouhmama",
    "daira_ar": "بوحمامة",
    "post_code": "40008",
    "daira_id": 395
  },
  {
    "id": 1316,
    "nom_francais": "El Oueldja",
    "nom_arabe": "الولجة",
    "wilaya_id": 40,
    "daira": "Chechar",
    "daira_ar": "ششار",
    "post_code": "40009",
    "daira_id": 396
  },
  {
    "id": 1317,
    "nom_francais": "Remila",
    "nom_arabe": "الرميلة",
    "wilaya_id": 40,
    "daira": "Kais",
    "daira_ar": "قايس",
    "post_code": "40010",
    "daira_id": 398
  },
  {
    "id": 1318,
    "nom_francais": "Cherchar",
    "nom_arabe": "ششار",
    "wilaya_id": 40,
    "daira": "Chechar",
    "daira_ar": "ششار",
    "post_code": "40011",
    "daira_id": 396
  },
  {
    "id": 1319,
    "nom_francais": "Djellal",
    "nom_arabe": "جلال",
    "wilaya_id": 40,
    "daira": "Chechar",
    "daira_ar": "ششار",
    "post_code": "40012",
    "daira_id": 396
  },
  {
    "id": 1320,
    "nom_francais": "Babar",
    "nom_arabe": "بابار",
    "wilaya_id": 40,
    "daira": "Babar",
    "daira_ar": "بابار",
    "post_code": "40013",
    "daira_id": 394
  },
  {
    "id": 1321,
    "nom_francais": "Tamza",
    "nom_arabe": "تامزة",
    "wilaya_id": 40,
    "daira": "El Hamma",
    "daira_ar": "الحامة",
    "post_code": "40014",
    "daira_id": 397
  },
  {
    "id": 1322,
    "nom_francais": "Ensigha",
    "nom_arabe": "انسيغة",
    "wilaya_id": 40,
    "daira": "El Hamma",
    "daira_ar": "الحامة",
    "post_code": "40015",
    "daira_id": 397
  },
  {
    "id": 1323,
    "nom_francais": "Ouled Rechache",
    "nom_arabe": "أولاد رشاش",
    "wilaya_id": 40,
    "daira": "Ouled Rechache",
    "daira_ar": "أولاد رشاش",
    "post_code": "40016",
    "daira_id": 400
  },
  {
    "id": 1324,
    "nom_francais": "El Mahmal",
    "nom_arabe": "المحمل",
    "wilaya_id": 40,
    "daira": "Ouled Rechache",
    "daira_ar": "أولاد رشاش",
    "post_code": "40017",
    "daira_id": 400
  },
  {
    "id": 1325,
    "nom_francais": "Msara",
    "nom_arabe": "أمصارة",
    "wilaya_id": 40,
    "daira": "Bouhmama",
    "daira_ar": "بوحمامة",
    "post_code": "40018",
    "daira_id": 395
  },
  {
    "id": 1326,
    "nom_francais": "Yabous",
    "nom_arabe": "يابوس",
    "wilaya_id": 40,
    "daira": "Bouhmama",
    "daira_ar": "بوحمامة",
    "post_code": "40019",
    "daira_id": 395
  },
  {
    "id": 1327,
    "nom_francais": "Khirane",
    "nom_arabe": "خيران",
    "wilaya_id": 40,
    "daira": "Chechar",
    "daira_ar": "ششار",
    "post_code": "40020",
    "daira_id": 396
  },
  {
    "id": 1328,
    "nom_francais": "Chelia",
    "nom_arabe": "شلية",
    "wilaya_id": 40,
    "daira": "Bouhmama",
    "daira_ar": "بوحمامة",
    "post_code": "40021",
    "daira_id": 395
  },
  {
    "id": 1329,
    "nom_francais": "Souk Ahras",
    "nom_arabe": "سوق أهراس",
    "wilaya_id": 41,
    "daira": "Souk Ahras",
    "daira_ar": "سوق أهراس",
    "post_code": "41001",
    "daira_id": 409
  },
  {
    "id": 1330,
    "nom_francais": "Sedrata",
    "nom_arabe": "سدراتة",
    "wilaya_id": 41,
    "daira": "Sedrata",
    "daira_ar": "سدراتة",
    "post_code": "41002",
    "daira_id": 408
  },
  {
    "id": 1331,
    "nom_francais": "Hanancha",
    "nom_arabe": "الحنانشة",
    "wilaya_id": 41,
    "daira": "Mechroha",
    "daira_ar": "المشروحة",
    "post_code": "41003",
    "daira_id": 404
  },
  {
    "id": 1332,
    "nom_francais": "Mechroha",
    "nom_arabe": "المشروحة",
    "wilaya_id": 41,
    "daira": "Mechroha",
    "daira_ar": "المشروحة",
    "post_code": "41004",
    "daira_id": 404
  },
  {
    "id": 1333,
    "nom_francais": "Ouled Driss",
    "nom_arabe": "أولاد ادريس",
    "wilaya_id": 41,
    "daira": "Ouled Driss",
    "daira_ar": "أولاد إدريس",
    "post_code": "41005",
    "daira_id": 406
  },
  {
    "id": 1334,
    "nom_francais": "Tiffech",
    "nom_arabe": "تيفاش",
    "wilaya_id": 41,
    "daira": "M'daourouche",
    "daira_ar": "مداوروش",
    "post_code": "41006",
    "daira_id": 403
  },
  {
    "id": 1335,
    "nom_francais": "Zaarouria",
    "nom_arabe": "الزعرورية",
    "wilaya_id": 41,
    "daira": "Taoura",
    "daira_ar": "تاورة",
    "post_code": "41007",
    "daira_id": 410
  },
  {
    "id": 1336,
    "nom_francais": "Taoura",
    "nom_arabe": "تاورة",
    "wilaya_id": 41,
    "daira": "Taoura",
    "daira_ar": "تاورة",
    "post_code": "41008",
    "daira_id": 410
  },
  {
    "id": 1337,
    "nom_francais": "Drea",
    "nom_arabe": "الدريعة",
    "wilaya_id": 41,
    "daira": "Taoura",
    "daira_ar": "تاورة",
    "post_code": "41009",
    "daira_id": 410
  },
  {
    "id": 1338,
    "nom_francais": "Haddada",
    "nom_arabe": "الحدادة",
    "wilaya_id": 41,
    "daira": "Haddada",
    "daira_ar": "الحدادة",
    "post_code": "41010",
    "daira_id": 402
  },
  {
    "id": 1339,
    "nom_francais": "Khedara",
    "nom_arabe": "لخضارة",
    "wilaya_id": 41,
    "daira": "Haddada",
    "daira_ar": "الحدادة",
    "post_code": "41011",
    "daira_id": 402
  },
  {
    "id": 1340,
    "nom_francais": "Merahna",
    "nom_arabe": "المراهنة",
    "wilaya_id": 41,
    "daira": "Merahna",
    "daira_ar": "المراهنة",
    "post_code": "41012",
    "daira_id": 405
  },
  {
    "id": 1341,
    "nom_francais": "Ouled Moumen",
    "nom_arabe": "أولاد مؤمن",
    "wilaya_id": 41,
    "daira": "Haddada",
    "daira_ar": "الحدادة",
    "post_code": "41013",
    "daira_id": 402
  },
  {
    "id": 1342,
    "nom_francais": "Bir Bouhouche",
    "nom_arabe": "بئر بوحوش",
    "wilaya_id": 41,
    "daira": "Bir Bouhouche",
    "daira_ar": "بئر بوحوش",
    "post_code": "41014",
    "daira_id": 401
  },
  {
    "id": 1343,
    "nom_francais": "Mdaourouche",
    "nom_arabe": "مداوروش",
    "wilaya_id": 41,
    "daira": "M'daourouche",
    "daira_ar": "مداوروش",
    "post_code": "41015",
    "daira_id": 403
  },
  {
    "id": 1344,
    "nom_francais": "Oum El Adhaim",
    "nom_arabe": "أم العظائم",
    "wilaya_id": 41,
    "daira": "Oum El Adhaim",
    "daira_ar": "أم العظايم",
    "post_code": "41016",
    "daira_id": 407
  },
  {
    "id": 1345,
    "nom_francais": "Ain Zana",
    "nom_arabe": "عين الزانة",
    "wilaya_id": 41,
    "daira": "Ouled Driss",
    "daira_ar": "أولاد إدريس",
    "post_code": "41017",
    "daira_id": 406
  },
  {
    "id": 1346,
    "nom_francais": "Ain Soltane",
    "nom_arabe": "عين السلطان",
    "wilaya_id": 41,
    "daira": "Sedrata",
    "daira_ar": "سدراتة",
    "post_code": "41018",
    "daira_id": 408
  },
  {
    "id": 1347,
    "nom_francais": "Quillen",
    "nom_arabe": "ويلان",
    "wilaya_id": 41,
    "daira": "Merahna",
    "daira_ar": "المراهنة",
    "post_code": "41019",
    "daira_id": 405
  },
  {
    "id": 1348,
    "nom_francais": "Sidi Fredj",
    "nom_arabe": "سيدي فرج",
    "wilaya_id": 41,
    "daira": "Merahna",
    "daira_ar": "المراهنة",
    "post_code": "41020",
    "daira_id": 405
  },
  {
    "id": 1349,
    "nom_francais": "Safel El Ouiden",
    "nom_arabe": "سافل الويدان",
    "wilaya_id": 41,
    "daira": "Bir Bouhouche",
    "daira_ar": "بئر بوحوش",
    "post_code": "41021",
    "daira_id": 401
  },
  {
    "id": 1350,
    "nom_francais": "Ragouba",
    "nom_arabe": "الرقوبة",
    "wilaya_id": 41,
    "daira": "M'daourouche",
    "daira_ar": "مداوروش",
    "post_code": "41022",
    "daira_id": 403
  },
  {
    "id": 1351,
    "nom_francais": "Khemissa",
    "nom_arabe": "خميسة",
    "wilaya_id": 41,
    "daira": "Sedrata",
    "daira_ar": "سدراتة",
    "post_code": "41023",
    "daira_id": 408
  },
  {
    "id": 1352,
    "nom_francais": "Oued Keberit",
    "nom_arabe": "وادى الكبريت",
    "wilaya_id": 41,
    "daira": "Oum El Adhaim",
    "daira_ar": "أم العظايم",
    "post_code": "41024",
    "daira_id": 407
  },
  {
    "id": 1353,
    "nom_francais": "Terraguelt",
    "nom_arabe": "ترقالت",
    "wilaya_id": 41,
    "daira": "Oum El Adhaim",
    "daira_ar": "أم العظايم",
    "post_code": "41025",
    "daira_id": 407
  },
  {
    "id": 1354,
    "nom_francais": "Zouabi",
    "nom_arabe": "الزوابى",
    "wilaya_id": 41,
    "daira": "Bir Bouhouche",
    "daira_ar": "بئر بوحوش",
    "post_code": "41026",
    "daira_id": 401
  },
  {
    "id": 1355,
    "nom_francais": "Tipaza",
    "nom_arabe": "تيبازة",
    "wilaya_id": 42,
    "daira": "Tipaza",
    "daira_ar": "تيبازة",
    "post_code": "42001",
    "daira_id": 420
  },
  {
    "id": 1356,
    "nom_francais": "Menaceur",
    "nom_arabe": "مناصر",
    "wilaya_id": 42,
    "daira": "Sidi Amar",
    "daira_ar": "سيدي أعمر",
    "post_code": "42002",
    "daira_id": 419
  },
  {
    "id": 1357,
    "nom_francais": "Larhat",
    "nom_arabe": "الأرهاط",
    "wilaya_id": 42,
    "daira": "Damous",
    "daira_ar": "الداموس",
    "post_code": "42003",
    "daira_id": 414
  },
  {
    "id": 1358,
    "nom_francais": "Douaouda",
    "nom_arabe": "دواودة",
    "wilaya_id": 42,
    "daira": "Fouka",
    "daira_ar": "فوكة",
    "post_code": "42004",
    "daira_id": 415
  },
  {
    "id": 1359,
    "nom_francais": "Bourkika",
    "nom_arabe": "بورقيقة",
    "wilaya_id": 42,
    "daira": "Ahmar El Ain",
    "daira_ar": "أحمر العين",
    "post_code": "42005",
    "daira_id": 411
  },
  {
    "id": 1360,
    "nom_francais": "Khemisti",
    "nom_arabe": "خميستي",
    "wilaya_id": 42,
    "daira": "Bou Ismail",
    "daira_ar": "بواسماعيل",
    "post_code": "42006",
    "daira_id": 412
  },
  {
    "id": 1361,
    "nom_francais": "Aghbal",
    "nom_arabe": "أغبال",
    "wilaya_id": 42,
    "daira": "Gouraya",
    "daira_ar": "قوراية",
    "post_code": "42010",
    "daira_id": 416
  },
  {
    "id": 1362,
    "nom_francais": "Hadjout",
    "nom_arabe": "حجوط",
    "wilaya_id": 42,
    "daira": "Hadjout",
    "daira_ar": "حجوط",
    "post_code": "42012",
    "daira_id": 417
  },
  {
    "id": 1363,
    "nom_francais": "Sidi Amar",
    "nom_arabe": "سيدي عمر",
    "wilaya_id": 42,
    "daira": "Sidi Amar",
    "daira_ar": "سيدي أعمر",
    "post_code": "42013",
    "daira_id": 419
  },
  {
    "id": 1364,
    "nom_francais": "Gouraya",
    "nom_arabe": "ڨوراية",
    "wilaya_id": 42,
    "daira": "Gouraya",
    "daira_ar": "قوراية",
    "post_code": "42014",
    "daira_id": 416
  },
  {
    "id": 1365,
    "nom_francais": "Nodor",
    "nom_arabe": "الناظور",
    "wilaya_id": 42,
    "daira": "Sidi Amar",
    "daira_ar": "سيدي أعمر",
    "post_code": "42015",
    "daira_id": 419
  },
  {
    "id": 1366,
    "nom_francais": "Chaiba",
    "nom_arabe": "الشعيبة",
    "wilaya_id": 42,
    "daira": "Kolea",
    "daira_ar": "القليعة",
    "post_code": "42016",
    "daira_id": 418
  },
  {
    "id": 1367,
    "nom_francais": "Ain Tagourait",
    "nom_arabe": "عين تڨورايت",
    "wilaya_id": 42,
    "daira": "Bou Ismail",
    "daira_ar": "بواسماعيل",
    "post_code": "42017",
    "daira_id": 412
  },
  {
    "id": 1368,
    "nom_francais": "Cherchel",
    "nom_arabe": "شرشال",
    "wilaya_id": 42,
    "daira": "Cherchell",
    "daira_ar": "شرشال",
    "post_code": "42022",
    "daira_id": 413
  },
  {
    "id": 1369,
    "nom_francais": "Damous",
    "nom_arabe": "الداموس",
    "wilaya_id": 42,
    "daira": "Damous",
    "daira_ar": "الداموس",
    "post_code": "42023",
    "daira_id": 414
  },
  {
    "id": 1370,
    "nom_francais": "Meurad",
    "nom_arabe": "مراد",
    "wilaya_id": 42,
    "daira": "Hadjout",
    "daira_ar": "حجوط",
    "post_code": "42024",
    "daira_id": 417
  },
  {
    "id": 1371,
    "nom_francais": "Fouka",
    "nom_arabe": "فوكة",
    "wilaya_id": 42,
    "daira": "Fouka",
    "daira_ar": "فوكة",
    "post_code": "42025",
    "daira_id": 415
  },
  {
    "id": 1372,
    "nom_francais": "Bou Ismail",
    "nom_arabe": "بو اسماعيل",
    "wilaya_id": 42,
    "daira": "Bou Ismail",
    "daira_ar": "بواسماعيل",
    "post_code": "42026",
    "daira_id": 412
  },
  {
    "id": 1373,
    "nom_francais": "Ahmer El Ain",
    "nom_arabe": "أحمر العين",
    "wilaya_id": 42,
    "daira": "Ahmar El Ain",
    "daira_ar": "أحمر العين",
    "post_code": "42027",
    "daira_id": 411
  },
  {
    "id": 1374,
    "nom_francais": "Bou Haroun",
    "nom_arabe": "بوهارون",
    "wilaya_id": 42,
    "daira": "Bou Ismail",
    "daira_ar": "بواسماعيل",
    "post_code": "42030",
    "daira_id": 412
  },
  {
    "id": 1375,
    "nom_francais": "Sidi Ghiles",
    "nom_arabe": "سيدي غيلاس",
    "wilaya_id": 42,
    "daira": "Cherchell",
    "daira_ar": "شرشال",
    "post_code": "42032",
    "daira_id": 413
  },
  {
    "id": 1376,
    "nom_francais": "Messelmoun",
    "nom_arabe": "مسلمون",
    "wilaya_id": 42,
    "daira": "Gouraya",
    "daira_ar": "قوراية",
    "post_code": "42033",
    "daira_id": 416
  },
  {
    "id": 1377,
    "nom_francais": "Sidi Rached",
    "nom_arabe": "سيدي راشد",
    "wilaya_id": 42,
    "daira": "Ahmar El Ain",
    "daira_ar": "أحمر العين",
    "post_code": "42034",
    "daira_id": 411
  },
  {
    "id": 1378,
    "nom_francais": "Kolea",
    "nom_arabe": "القليعة",
    "wilaya_id": 42,
    "daira": "Kolea",
    "daira_ar": "القليعة",
    "post_code": "42035",
    "daira_id": 418
  },
  {
    "id": 1379,
    "nom_francais": "Attatba",
    "nom_arabe": "الحطاطبة",
    "wilaya_id": 42,
    "daira": "Kolea",
    "daira_ar": "القليعة",
    "post_code": "42036",
    "daira_id": 418
  },
  {
    "id": 1380,
    "nom_francais": "Sidi Semiane",
    "nom_arabe": "سيدي سميان",
    "wilaya_id": 42,
    "daira": "Cherchell",
    "daira_ar": "شرشال",
    "post_code": "42040",
    "daira_id": 413
  },
  {
    "id": 1381,
    "nom_francais": "Beni Milleuk",
    "nom_arabe": "بني ميلك",
    "wilaya_id": 42,
    "daira": "Damous",
    "daira_ar": "الداموس",
    "post_code": "42041",
    "daira_id": 414
  },
  {
    "id": 1382,
    "nom_francais": "Hadjerat Ennous",
    "nom_arabe": "حجرة النص",
    "wilaya_id": 42,
    "daira": "Cherchell",
    "daira_ar": "شرشال",
    "post_code": "42042",
    "daira_id": 413
  },
  {
    "id": 1383,
    "nom_francais": "Mila",
    "nom_arabe": "ميلة",
    "wilaya_id": 43,
    "daira": "Mila",
    "daira_ar": "ميلة",
    "post_code": "43001",
    "daira_id": 426
  },
  {
    "id": 1384,
    "nom_francais": "Ferdjioua",
    "nom_arabe": "فرجيوة",
    "wilaya_id": 43,
    "daira": "Ferdjioua",
    "daira_ar": "فرجيوة",
    "post_code": "43002",
    "daira_id": 424
  },
  {
    "id": 1385,
    "nom_francais": "Chelghoum Laid",
    "nom_arabe": "شلغوم العيد",
    "wilaya_id": 43,
    "daira": "Chelghoum Laid",
    "daira_ar": "شلغوم العيد",
    "post_code": "43003",
    "daira_id": 423
  },
  {
    "id": 1386,
    "nom_francais": "Oued Athmenia",
    "nom_arabe": "وادي العثمانية",
    "wilaya_id": 43,
    "daira": "Chelghoum Laid",
    "daira_ar": "شلغوم العيد",
    "post_code": "43004",
    "daira_id": 423
  },
  {
    "id": 1387,
    "nom_francais": "Ain Mellouk",
    "nom_arabe": "عين ملوك",
    "wilaya_id": 43,
    "daira": "Chelghoum Laid",
    "daira_ar": "شلغوم العيد",
    "post_code": "43005",
    "daira_id": 423
  },
  {
    "id": 1388,
    "nom_francais": "Telerghma",
    "nom_arabe": "تلاغمة",
    "wilaya_id": 43,
    "daira": "Teleghma",
    "daira_ar": "التلاغمة",
    "post_code": "43006",
    "daira_id": 432
  },
  {
    "id": 1389,
    "nom_francais": "Oued Seguen",
    "nom_arabe": "وادى سقان",
    "wilaya_id": 43,
    "daira": "Teleghma",
    "daira_ar": "التلاغمة",
    "post_code": "43007",
    "daira_id": 432
  },
  {
    "id": 1390,
    "nom_francais": "Tadjenanet",
    "nom_arabe": "تاجنانت",
    "wilaya_id": 43,
    "daira": "Tadjenanet",
    "daira_ar": "تاجنانت",
    "post_code": "43008",
    "daira_id": 430
  },
  {
    "id": 1391,
    "nom_francais": "Benyahia Abderrahmane",
    "nom_arabe": "بن يحيى عبد الرحمان",
    "wilaya_id": 43,
    "daira": "Tadjenanet",
    "daira_ar": "تاجنانت",
    "post_code": "43009",
    "daira_id": 430
  },
  {
    "id": 1392,
    "nom_francais": "Oued Endja",
    "nom_arabe": "وادى النجاء",
    "wilaya_id": 43,
    "daira": "Oued Endja",
    "daira_ar": "وادي النجاء",
    "post_code": "43010",
    "daira_id": 427
  },
  {
    "id": 1393,
    "nom_francais": "Ahmed Rachedi",
    "nom_arabe": "أحمد راشدي",
    "wilaya_id": 43,
    "daira": "Oued Endja",
    "daira_ar": "وادي النجاء",
    "post_code": "43011",
    "daira_id": 427
  },
  {
    "id": 1394,
    "nom_francais": "Ouled Khalouf",
    "nom_arabe": "أولاد خلوف",
    "wilaya_id": 43,
    "daira": "Tadjenanet",
    "daira_ar": "تاجنانت",
    "post_code": "43012",
    "daira_id": 430
  },
  {
    "id": 1395,
    "nom_francais": "Tiberguent",
    "nom_arabe": "تيبرقنت",
    "wilaya_id": 43,
    "daira": "Rouached",
    "daira_ar": "الرواشد",
    "post_code": "43013",
    "daira_id": 428
  },
  {
    "id": 1396,
    "nom_francais": "Bouhatem",
    "nom_arabe": "بوحاتم",
    "wilaya_id": 43,
    "daira": "Bouhatem",
    "daira_ar": "بوحاتم",
    "post_code": "43014",
    "daira_id": 422
  },
  {
    "id": 1397,
    "nom_francais": "Rouached",
    "nom_arabe": "رواشد",
    "wilaya_id": 43,
    "daira": "Rouached",
    "daira_ar": "الرواشد",
    "post_code": "43015",
    "daira_id": 428
  },
  {
    "id": 1398,
    "nom_francais": "Tessala Lamatai",
    "nom_arabe": "تسالة لمطاي",
    "wilaya_id": 43,
    "daira": "Terrai Bainen",
    "daira_ar": "ترعي باينان",
    "post_code": "43016",
    "daira_id": 433
  },
  {
    "id": 1399,
    "nom_francais": "Grarem Gouga",
    "nom_arabe": "القرارم قوقة",
    "wilaya_id": 43,
    "daira": "Grarem Gouga",
    "daira_ar": "القرارم قوقة",
    "post_code": "43017",
    "daira_id": 425
  },
  {
    "id": 1400,
    "nom_francais": "Sidi Merouane",
    "nom_arabe": "سيدي مروان",
    "wilaya_id": 43,
    "daira": "Sidi Merouane",
    "daira_ar": "سيدي مروان",
    "post_code": "43018",
    "daira_id": 429
  },
  {
    "id": 1401,
    "nom_francais": "Tassadane Haddada",
    "nom_arabe": "تسدان حدادة",
    "wilaya_id": 43,
    "daira": "Tassadane Haddada",
    "daira_ar": "تسدان حدادة",
    "post_code": "43019",
    "daira_id": 431
  },
  {
    "id": 1402,
    "nom_francais": "Derradji Bousselah",
    "nom_arabe": "دراحي بوصلاح",
    "wilaya_id": 43,
    "daira": "Bouhatem",
    "daira_ar": "بوحاتم",
    "post_code": "43020",
    "daira_id": 422
  },
  {
    "id": 1403,
    "nom_francais": "Minar Zarza",
    "nom_arabe": "مينار زرزة",
    "wilaya_id": 43,
    "daira": "Tassadane Haddada",
    "daira_ar": "تسدان حدادة",
    "post_code": "43021",
    "daira_id": 431
  },
  {
    "id": 1404,
    "nom_francais": "Amira Arras",
    "nom_arabe": "عميرة أراس",
    "wilaya_id": 43,
    "daira": "Terrai Bainen",
    "daira_ar": "ترعي باينان",
    "post_code": "43022",
    "daira_id": 433
  },
  {
    "id": 1405,
    "nom_francais": "Terrai Bainen",
    "nom_arabe": "ترعى بينان",
    "wilaya_id": 43,
    "daira": "Terrai Bainen",
    "daira_ar": "ترعي باينان",
    "post_code": "43023",
    "daira_id": 433
  },
  {
    "id": 1406,
    "nom_francais": "Hamala",
    "nom_arabe": "حمالة",
    "wilaya_id": 43,
    "daira": "Grarem Gouga",
    "daira_ar": "القرارم قوقة",
    "post_code": "43024",
    "daira_id": 425
  },
  {
    "id": 1407,
    "nom_francais": "Ain Tine",
    "nom_arabe": "عين التين",
    "wilaya_id": 43,
    "daira": "Mila",
    "daira_ar": "ميلة",
    "post_code": "43025",
    "daira_id": 426
  },
  {
    "id": 1408,
    "nom_francais": "El Mechira",
    "nom_arabe": "المشيرة",
    "wilaya_id": 43,
    "daira": "Teleghma",
    "daira_ar": "التلاغمة",
    "post_code": "43026",
    "daira_id": 432
  },
  {
    "id": 1409,
    "nom_francais": "Sidi Khelifa",
    "nom_arabe": "سيدي خليفة",
    "wilaya_id": 43,
    "daira": "Mila",
    "daira_ar": "ميلة",
    "post_code": "43027",
    "daira_id": 426
  },
  {
    "id": 1410,
    "nom_francais": "Zeghaia",
    "nom_arabe": "زغاية",
    "wilaya_id": 43,
    "daira": "Oued Endja",
    "daira_ar": "وادي النجاء",
    "post_code": "43028",
    "daira_id": 427
  },
  {
    "id": 1411,
    "nom_francais": "Elayadi Barbes",
    "nom_arabe": "العياضى برباس",
    "wilaya_id": 43,
    "daira": "Ain Beida Harriche",
    "daira_ar": "عين البيضاء أحريش",
    "post_code": "43029",
    "daira_id": 421
  },
  {
    "id": 1412,
    "nom_francais": "Ain Beida Harriche",
    "nom_arabe": "عين البيضاء حريش",
    "wilaya_id": 43,
    "daira": "Ain Beida Harriche",
    "daira_ar": "عين البيضاء أحريش",
    "post_code": "43030",
    "daira_id": 421
  },
  {
    "id": 1413,
    "nom_francais": "Yahia Beniguecha",
    "nom_arabe": "يحيى بنى قشة",
    "wilaya_id": 43,
    "daira": "Ferdjioua",
    "daira_ar": "فرجيوة",
    "post_code": "43031",
    "daira_id": 424
  },
  {
    "id": 1414,
    "nom_francais": "Chigara",
    "nom_arabe": "الشيقارة",
    "wilaya_id": 43,
    "daira": "Sidi Merouane",
    "daira_ar": "سيدي مروان",
    "post_code": "43032",
    "daira_id": 429
  },
  {
    "id": 1415,
    "nom_francais": "Ain Defla",
    "nom_arabe": "عين دفلة - عين الدفلى",
    "wilaya_id": 44,
    "daira": "Ain Defla",
    "daira_ar": "عين الدفلى",
    "post_code": "44001",
    "daira_id": 434
  },
  {
    "id": 1416,
    "nom_francais": "Miliana",
    "nom_arabe": "مليانة",
    "wilaya_id": 44,
    "daira": "Miliana",
    "daira_ar": "مليانة",
    "post_code": "44002",
    "daira_id": 446
  },
  {
    "id": 1417,
    "nom_francais": "Boumedfaa",
    "nom_arabe": "بومدفع",
    "wilaya_id": 44,
    "daira": "Boumedfaa",
    "daira_ar": "بومدفع",
    "post_code": "44003",
    "daira_id": 438
  },
  {
    "id": 1418,
    "nom_francais": "Khemis Miliana",
    "nom_arabe": "خميس مليانة",
    "wilaya_id": 44,
    "daira": "Khemis",
    "daira_ar": "خميس",
    "post_code": "44004",
    "daira_id": 445
  },
  {
    "id": 1419,
    "nom_francais": "Hammam Righa",
    "nom_arabe": "حمام ريغة",
    "wilaya_id": 44,
    "daira": "Hammam Righa",
    "daira_ar": "حمام ريغة",
    "post_code": "44005",
    "daira_id": 444
  },
  {
    "id": 1420,
    "nom_francais": "Arib",
    "nom_arabe": "عريب",
    "wilaya_id": 44,
    "daira": "El Amra",
    "daira_ar": "العامرة",
    "post_code": "44006",
    "daira_id": 442
  },
  {
    "id": 1421,
    "nom_francais": "Djelida",
    "nom_arabe": "جليدة",
    "wilaya_id": 44,
    "daira": "Djelida",
    "daira_ar": "جليدة",
    "post_code": "44007",
    "daira_id": 439
  },
  {
    "id": 1422,
    "nom_francais": "El Amra",
    "nom_arabe": "العامرة",
    "wilaya_id": 44,
    "daira": "El Amra",
    "daira_ar": "العامرة",
    "post_code": "44008",
    "daira_id": 442
  },
  {
    "id": 1423,
    "nom_francais": "Bourached",
    "nom_arabe": "بوراشد",
    "wilaya_id": 44,
    "daira": "Djelida",
    "daira_ar": "جليدة",
    "post_code": "44009",
    "daira_id": 439
  },
  {
    "id": 1424,
    "nom_francais": "El Attaf",
    "nom_arabe": "العطاف",
    "wilaya_id": 44,
    "daira": "El Attaf",
    "daira_ar": "العطاف",
    "post_code": "44010",
    "daira_id": 443
  },
  {
    "id": 1425,
    "nom_francais": "El Abadia",
    "nom_arabe": "العبادية",
    "wilaya_id": 44,
    "daira": "El Abadia",
    "daira_ar": "العبادية",
    "post_code": "44011",
    "daira_id": 441
  },
  {
    "id": 1426,
    "nom_francais": "Djendel",
    "nom_arabe": "جندل",
    "wilaya_id": 44,
    "daira": "Djendel",
    "daira_ar": "جندل",
    "post_code": "44012",
    "daira_id": 440
  },
  {
    "id": 1427,
    "nom_francais": "Oued Chorfa",
    "nom_arabe": "وادى الشرفاء",
    "wilaya_id": 44,
    "daira": "Djendel",
    "daira_ar": "جندل",
    "post_code": "44013",
    "daira_id": 440
  },
  {
    "id": 1428,
    "nom_francais": "Ain Lechiakh",
    "nom_arabe": "عين االشياخ",
    "wilaya_id": 44,
    "daira": "Ain Lechiakh",
    "daira_ar": "عين الاشياخ",
    "post_code": "44014",
    "daira_id": 435
  },
  {
    "id": 1429,
    "nom_francais": "Oued Djemaa",
    "nom_arabe": "وادى جمعة",
    "wilaya_id": 44,
    "daira": "Ain Lechiakh",
    "daira_ar": "عين الاشياخ",
    "post_code": "44015",
    "daira_id": 435
  },
  {
    "id": 1430,
    "nom_francais": "Rouina",
    "nom_arabe": "روينة",
    "wilaya_id": 44,
    "daira": "Rouina",
    "daira_ar": "الروينة",
    "post_code": "44016",
    "daira_id": 447
  },
  {
    "id": 1431,
    "nom_francais": "Zeddine",
    "nom_arabe": "زدين",
    "wilaya_id": 44,
    "daira": "Rouina",
    "daira_ar": "الروينة",
    "post_code": "44017",
    "daira_id": 447
  },
  {
    "id": 1432,
    "nom_francais": "El Hassania",
    "nom_arabe": "الحسنية",
    "wilaya_id": 44,
    "daira": "Bathia",
    "daira_ar": "بطحية",
    "post_code": "44018",
    "daira_id": 436
  },
  {
    "id": 1433,
    "nom_francais": "Bir Ouled Khelifa",
    "nom_arabe": "بئر ولد خليفة",
    "wilaya_id": 44,
    "daira": "Bordj El Emir Khaled",
    "daira_ar": "برج الأمير خالد",
    "post_code": "44019",
    "daira_id": 437
  },
  {
    "id": 1434,
    "nom_francais": "Ain Soltane",
    "nom_arabe": "عين السلطان",
    "wilaya_id": 44,
    "daira": "Ain Lechiakh",
    "daira_ar": "عين الاشياخ",
    "post_code": "44020",
    "daira_id": 435
  },
  {
    "id": 1435,
    "nom_francais": "Tarik Ibn Ziad",
    "nom_arabe": "طارق بن زياد",
    "wilaya_id": 44,
    "daira": "Bordj El Emir Khaled",
    "daira_ar": "برج الأمير خالد",
    "post_code": "44021",
    "daira_id": 437
  },
  {
    "id": 1436,
    "nom_francais": "Bordj Emir Khaled",
    "nom_arabe": "برج الأمير خالد",
    "wilaya_id": 44,
    "daira": "Bordj El Emir Khaled",
    "daira_ar": "برج الأمير خالد",
    "post_code": "44022",
    "daira_id": 437
  },
  {
    "id": 1437,
    "nom_francais": "Ain Torki",
    "nom_arabe": "عين التركى",
    "wilaya_id": 44,
    "daira": "Hammam Righa",
    "daira_ar": "حمام ريغة",
    "post_code": "44023",
    "daira_id": 444
  },
  {
    "id": 1438,
    "nom_francais": "Sidi Lakhdar",
    "nom_arabe": "سيدي لخضر",
    "wilaya_id": 44,
    "daira": "Khemis",
    "daira_ar": "خميس",
    "post_code": "44024",
    "daira_id": 445
  },
  {
    "id": 1439,
    "nom_francais": "Ben Allal",
    "nom_arabe": "بن علال",
    "wilaya_id": 44,
    "daira": "Miliana",
    "daira_ar": "مليانة",
    "post_code": "44025",
    "daira_id": 446
  },
  {
    "id": 1440,
    "nom_francais": "Ain Benian",
    "nom_arabe": "عين البنيان",
    "wilaya_id": 44,
    "daira": "Hammam Righa",
    "daira_ar": "حمام ريغة",
    "post_code": "44026",
    "daira_id": 444
  },
  {
    "id": 1441,
    "nom_francais": "Hoceinia",
    "nom_arabe": "حسينية",
    "wilaya_id": 44,
    "daira": "Boumedfaa",
    "daira_ar": "بومدفع",
    "post_code": "44027",
    "daira_id": 438
  },
  {
    "id": 1442,
    "nom_francais": "Barbouche",
    "nom_arabe": "بربوش",
    "wilaya_id": 44,
    "daira": "Djendel",
    "daira_ar": "جندل",
    "post_code": "44028",
    "daira_id": 440
  },
  {
    "id": 1443,
    "nom_francais": "Djemaa Ouled Chikh",
    "nom_arabe": "جمعة أولاد الشيخ",
    "wilaya_id": 44,
    "daira": "Djelida",
    "daira_ar": "جليدة",
    "post_code": "44029",
    "daira_id": 439
  },
  {
    "id": 1444,
    "nom_francais": "Mekhatria",
    "nom_arabe": "المخاطرية",
    "wilaya_id": 44,
    "daira": "El Amra",
    "daira_ar": "العامرة",
    "post_code": "44030",
    "daira_id": 442
  },
  {
    "id": 1445,
    "nom_francais": "Bathia",
    "nom_arabe": "بطحية",
    "wilaya_id": 44,
    "daira": "Bathia",
    "daira_ar": "بطحية",
    "post_code": "44031",
    "daira_id": 436
  },
  {
    "id": 1446,
    "nom_francais": "Tachta Zegagha",
    "nom_arabe": "تاشتة زقاغة",
    "wilaya_id": 44,
    "daira": "El Abadia",
    "daira_ar": "العبادية",
    "post_code": "44032",
    "daira_id": 441
  },
  {
    "id": 1447,
    "nom_francais": "Ain Bouyahia",
    "nom_arabe": "عين بويحى",
    "wilaya_id": 44,
    "daira": "El Abadia",
    "daira_ar": "العبادية",
    "post_code": "44033",
    "daira_id": 441
  },
  {
    "id": 1448,
    "nom_francais": "El Maine",
    "nom_arabe": "الماين",
    "wilaya_id": 44,
    "daira": "Rouina",
    "daira_ar": "الروينة",
    "post_code": "44034",
    "daira_id": 447
  },
  {
    "id": 1449,
    "nom_francais": "Tiberkanine",
    "nom_arabe": "تبركانين",
    "wilaya_id": 44,
    "daira": "El Attaf",
    "daira_ar": "العطاف",
    "post_code": "44035",
    "daira_id": 443
  },
  {
    "id": 1450,
    "nom_francais": "Belaas",
    "nom_arabe": "بالعاص",
    "wilaya_id": 44,
    "daira": "Bathia",
    "daira_ar": "بطحية",
    "post_code": "44036",
    "daira_id": 436
  },
  {
    "id": 1451,
    "nom_francais": "Naama",
    "nom_arabe": "النــعـامـة",
    "wilaya_id": 45,
    "daira": "Naama",
    "daira_ar": "النعامة",
    "post_code": "45001",
    "daira_id": 453
  },
  {
    "id": 1452,
    "nom_francais": "Mechria",
    "nom_arabe": "مشرية",
    "wilaya_id": 45,
    "daira": "Mecheria",
    "daira_ar": "المشرية",
    "post_code": "45002",
    "daira_id": 450
  },
  {
    "id": 1453,
    "nom_francais": "Ain Sefra",
    "nom_arabe": "عين الصفراء",
    "wilaya_id": 45,
    "daira": "Ain Sefra",
    "daira_ar": "عين الصفراء",
    "post_code": "45003",
    "daira_id": 448
  },
  {
    "id": 1454,
    "nom_francais": "Tiout",
    "nom_arabe": "تيوت",
    "wilaya_id": 45,
    "daira": "Ain Sefra",
    "daira_ar": "عين الصفراء",
    "post_code": "45004",
    "daira_id": 448
  },
  {
    "id": 1455,
    "nom_francais": "Sfissifa",
    "nom_arabe": "صفيصيفة",
    "wilaya_id": 45,
    "daira": "Sfissifa",
    "daira_ar": "سفيسيفة",
    "post_code": "45005",
    "daira_id": 454
  },
  {
    "id": 1456,
    "nom_francais": "Moghrar",
    "nom_arabe": "مغرار",
    "wilaya_id": 45,
    "daira": "Moghrar",
    "daira_ar": "مغرار",
    "post_code": "45006",
    "daira_id": 452
  },
  {
    "id": 1457,
    "nom_francais": "Assela",
    "nom_arabe": "عسلة",
    "wilaya_id": 45,
    "daira": "Asla",
    "daira_ar": "عسلة",
    "post_code": "45007",
    "daira_id": 449
  },
  {
    "id": 1458,
    "nom_francais": "Djeniane Bourzeg",
    "nom_arabe": "جنين بورزق",
    "wilaya_id": 45,
    "daira": "Moghrar",
    "daira_ar": "مغرار",
    "post_code": "45008",
    "daira_id": 452
  },
  {
    "id": 1459,
    "nom_francais": "Ain Ben Khelil",
    "nom_arabe": "عين بن خليل",
    "wilaya_id": 45,
    "daira": "Mecheria",
    "daira_ar": "المشرية",
    "post_code": "45009",
    "daira_id": 450
  },
  {
    "id": 1460,
    "nom_francais": "Makman Ben Amer",
    "nom_arabe": "مكمن بن عمر",
    "wilaya_id": 45,
    "daira": "Mekmen Ben Amar",
    "daira_ar": "مكمن بن عمار",
    "post_code": "45010",
    "daira_id": 451
  },
  {
    "id": 1461,
    "nom_francais": "Kasdir",
    "nom_arabe": "قصدير",
    "wilaya_id": 45,
    "daira": "Mekmen Ben Amar",
    "daira_ar": "مكمن بن عمار",
    "post_code": "45011",
    "daira_id": 451
  },
  {
    "id": 1462,
    "nom_francais": "El Biod",
    "nom_arabe": "البيوض",
    "wilaya_id": 45,
    "daira": "Mecheria",
    "daira_ar": "المشرية",
    "post_code": "45012",
    "daira_id": 450
  },
  {
    "id": 1463,
    "nom_francais": "Ain Temouchent",
    "nom_arabe": "عـيـن تـمـوشـنـت",
    "wilaya_id": 46,
    "daira": "Ain Temouchent",
    "daira_ar": "عين تموشنت",
    "post_code": "46001",
    "daira_id": 457
  },
  {
    "id": 1464,
    "nom_francais": "Chaabet El Ham",
    "nom_arabe": "شعبة اللحم",
    "wilaya_id": 46,
    "daira": "El Maleh",
    "daira_ar": "المالح",
    "post_code": "46002",
    "daira_id": 460
  },
  {
    "id": 1465,
    "nom_francais": "Ain Kihal",
    "nom_arabe": "عين الكيحل",
    "wilaya_id": 46,
    "daira": "Ain Kihel",
    "daira_ar": "عين الكيحل",
    "post_code": "46003",
    "daira_id": 455
  },
  {
    "id": 1466,
    "nom_francais": "Hammam Bouhadjar",
    "nom_arabe": "حمام بو حجر",
    "wilaya_id": 46,
    "daira": "Hammam Bou Hadjar",
    "daira_ar": "حمام بوحجر",
    "post_code": "46004",
    "daira_id": 461
  },
  {
    "id": 1467,
    "nom_francais": "Bou Zedjar",
    "nom_arabe": "بوزجار",
    "wilaya_id": 46,
    "daira": "El Amria",
    "daira_ar": "العامرية",
    "post_code": "46005",
    "daira_id": 459
  },
  {
    "id": 1468,
    "nom_francais": "Oued Berkeche",
    "nom_arabe": "وادى برقش",
    "wilaya_id": 46,
    "daira": "Hammam Bou Hadjar",
    "daira_ar": "حمام بوحجر",
    "post_code": "46006",
    "daira_id": 461
  },
  {
    "id": 1469,
    "nom_francais": "Aghlal",
    "nom_arabe": "أغلال",
    "wilaya_id": 46,
    "daira": "Ain Kihel",
    "daira_ar": "عين الكيحل",
    "post_code": "46007",
    "daira_id": 455
  },
  {
    "id": 1470,
    "nom_francais": "Terga",
    "nom_arabe": "تارقة",
    "wilaya_id": 46,
    "daira": "El Maleh",
    "daira_ar": "المالح",
    "post_code": "46008",
    "daira_id": 460
  },
  {
    "id": 1471,
    "nom_francais": "Ain El Arbaa",
    "nom_arabe": "عين الاربعاء",
    "wilaya_id": 46,
    "daira": "Ain Larbaa",
    "daira_ar": "عين الأربعاء",
    "post_code": "46009",
    "daira_id": 456
  },
  {
    "id": 1472,
    "nom_francais": "Tamzoura",
    "nom_arabe": "تامزوغة",
    "wilaya_id": 46,
    "daira": "Ain Larbaa",
    "daira_ar": "عين الأربعاء",
    "post_code": "46010",
    "daira_id": 456
  },
  {
    "id": 1473,
    "nom_francais": "Chentouf",
    "nom_arabe": "شنتوف",
    "wilaya_id": 46,
    "daira": "Hammam Bou Hadjar",
    "daira_ar": "حمام بوحجر",
    "post_code": "46011",
    "daira_id": 461
  },
  {
    "id": 1474,
    "nom_francais": "Sidi Ben Adda",
    "nom_arabe": "سيدي بن عدة",
    "wilaya_id": 46,
    "daira": "Ain Temouchent",
    "daira_ar": "عين تموشنت",
    "post_code": "46012",
    "daira_id": 457
  },
  {
    "id": 1475,
    "nom_francais": "Aoubellil",
    "nom_arabe": "عقب الليل",
    "wilaya_id": 46,
    "daira": "Ain Kihel",
    "daira_ar": "عين الكيحل",
    "post_code": "46013",
    "daira_id": 455
  },
  {
    "id": 1476,
    "nom_francais": "El Malah",
    "nom_arabe": "المالح",
    "wilaya_id": 46,
    "daira": "El Maleh",
    "daira_ar": "المالح",
    "post_code": "46014",
    "daira_id": 460
  },
  {
    "id": 1477,
    "nom_francais": "Sidi Boumediene",
    "nom_arabe": "سيدي بومدين",
    "wilaya_id": 46,
    "daira": "Ain Larbaa",
    "daira_ar": "عين الأربعاء",
    "post_code": "46015",
    "daira_id": 456
  },
  {
    "id": 1478,
    "nom_francais": "Oued Sabah",
    "nom_arabe": "وادى الصباح",
    "wilaya_id": 46,
    "daira": "Ain Larbaa",
    "daira_ar": "عين الأربعاء",
    "post_code": "46016",
    "daira_id": 456
  },
  {
    "id": 1479,
    "nom_francais": "Ouled Boudjemaa",
    "nom_arabe": "أولاد بوجمعة",
    "wilaya_id": 46,
    "daira": "El Amria",
    "daira_ar": "العامرية",
    "post_code": "46017",
    "daira_id": 459
  },
  {
    "id": 1480,
    "nom_francais": "Ain Tolba",
    "nom_arabe": "عين الطلبة",
    "wilaya_id": 46,
    "daira": "Ain Kihel",
    "daira_ar": "عين الكيحل",
    "post_code": "46018",
    "daira_id": 455
  },
  {
    "id": 1481,
    "nom_francais": "El Amria",
    "nom_arabe": "العامرية",
    "wilaya_id": 46,
    "daira": "El Amria",
    "daira_ar": "العامرية",
    "post_code": "46019",
    "daira_id": 459
  },
  {
    "id": 1482,
    "nom_francais": "Hassi El Ghella",
    "nom_arabe": "حاسى الغلة",
    "wilaya_id": 46,
    "daira": "El Amria",
    "daira_ar": "العامرية",
    "post_code": "46020",
    "daira_id": 459
  },
  {
    "id": 1483,
    "nom_francais": "Hassasna",
    "nom_arabe": "الحساسنة",
    "wilaya_id": 46,
    "daira": "Hammam Bou Hadjar",
    "daira_ar": "حمام بوحجر",
    "post_code": "46021",
    "daira_id": 461
  },
  {
    "id": 1484,
    "nom_francais": "Ouled Kihal",
    "nom_arabe": "أولاد الكيحل",
    "wilaya_id": 46,
    "daira": "El Maleh",
    "daira_ar": "المالح",
    "post_code": "46022",
    "daira_id": 460
  },
  {
    "id": 1485,
    "nom_francais": "Beni Saf",
    "nom_arabe": "بني صاف",
    "wilaya_id": 46,
    "daira": "Beni Saf",
    "daira_ar": "بني صاف",
    "post_code": "46023",
    "daira_id": 458
  },
  {
    "id": 1486,
    "nom_francais": "Sidi Safi",
    "nom_arabe": "سيدي الصافي",
    "wilaya_id": 46,
    "daira": "Beni Saf",
    "daira_ar": "بني صاف",
    "post_code": "46024",
    "daira_id": 458
  },
  {
    "id": 1487,
    "nom_francais": "Oulhaca El Gheraba",
    "nom_arabe": "ولهاصة الغرابة",
    "wilaya_id": 46,
    "daira": "Oulhassa Gheraba",
    "daira_ar": "ولهاصة الغرابة",
    "post_code": "46025",
    "daira_id": 462
  },
  {
    "id": 1488,
    "nom_francais": "Sidi Ouriache",
    "nom_arabe": "سيدي وريلش",
    "wilaya_id": 46,
    "daira": "Oulhassa Gheraba",
    "daira_ar": "ولهاصة الغرابة",
    "post_code": "46026",
    "daira_id": 462
  },
  {
    "id": 1489,
    "nom_francais": "El Emir Abdelkader",
    "nom_arabe": "الأمير عبد القادر",
    "wilaya_id": 46,
    "daira": "Beni Saf",
    "daira_ar": "بني صاف",
    "post_code": "46027",
    "daira_id": 458
  },
  {
    "id": 1490,
    "nom_francais": "El Messaid",
    "nom_arabe": "المساعيد",
    "wilaya_id": 46,
    "daira": "El Amria",
    "daira_ar": "العامرية",
    "post_code": "46028",
    "daira_id": 459
  },
  {
    "id": 1491,
    "nom_francais": "Ghardaia",
    "nom_arabe": "غرداية",
    "wilaya_id": 47,
    "daira": "Ghardaia",
    "daira_ar": "غرداية",
    "post_code": "47001",
    "daira_id": 467
  },
  {
    "id": 1492,
    "nom_francais": "El Meniaa",
    "nom_arabe": "المنيعة",
    "wilaya_id": 58,
    "daira": "El Menia",
    "daira_ar": "المنيعة",
    "post_code": "47002",
    "daira_id": 508
  },
  {
    "id": 1493,
    "nom_francais": "Dhayet Bendhahoua",
    "nom_arabe": "ضاية بن ضحوة",
    "wilaya_id": 47,
    "daira": "Dhayet Ben Dhahoua",
    "daira_ar": "ضاية بن ضحوة",
    "post_code": "47003",
    "daira_id": 465
  },
  {
    "id": 1494,
    "nom_francais": "Berriane",
    "nom_arabe": "بريان",
    "wilaya_id": 47,
    "daira": "Berriane",
    "daira_ar": "بريان",
    "post_code": "47004",
    "daira_id": 463
  },
  {
    "id": 1495,
    "nom_francais": "Metlili",
    "nom_arabe": "متليلي الشعانبة",
    "wilaya_id": 47,
    "daira": "Metlili",
    "daira_ar": "متليلي",
    "post_code": "47005",
    "daira_id": 469
  },
  {
    "id": 1496,
    "nom_francais": "El Guerrara",
    "nom_arabe": "الڨرارة",
    "wilaya_id": 47,
    "daira": "El Guerrara",
    "daira_ar": "القرارة",
    "post_code": "47006",
    "daira_id": 466
  },
  {
    "id": 1497,
    "nom_francais": "El Atteuf",
    "nom_arabe": "العطف",
    "wilaya_id": 47,
    "daira": "Bounoura",
    "daira_ar": "بونورة",
    "post_code": "47007",
    "daira_id": 464
  },
  {
    "id": 1498,
    "nom_francais": "Zelfana",
    "nom_arabe": "زلفانة",
    "wilaya_id": 47,
    "daira": "Zelfana",
    "daira_ar": "زلفانة",
    "post_code": "47008",
    "daira_id": 470
  },
  {
    "id": 1499,
    "nom_francais": "Sebseb",
    "nom_arabe": "سبسب",
    "wilaya_id": 47,
    "daira": "Metlili",
    "daira_ar": "متليلي",
    "post_code": "47009",
    "daira_id": 469
  },
  {
    "id": 1500,
    "nom_francais": "Bounoura",
    "nom_arabe": "بونورة",
    "wilaya_id": 47,
    "daira": "Bounoura",
    "daira_ar": "بونورة",
    "post_code": "47010",
    "daira_id": 464
  },
  {
    "id": 1501,
    "nom_francais": "Hassi Fehal",
    "nom_arabe": "حاسي الفحل",
    "wilaya_id": 58,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "58011",
    "daira_id": 509
  },
  {
    "id": 1502,
    "nom_francais": "Hassi Gara",
    "nom_arabe": "حاسي قارة",
    "wilaya_id": 58,
    "daira": "El Menia",
    "daira_ar": "المنيعة",
    "post_code": "58012",
    "daira_id": 508
  },
  {
    "id": 1503,
    "nom_francais": "Mansoura",
    "nom_arabe": "منصورة",
    "wilaya_id": 47,
    "daira": "Mansourah",
    "daira_ar": "المنصورة",
    "post_code": "47013",
    "daira_id": 468
  },
  {
    "id": 1504,
    "nom_francais": "Relizane",
    "nom_arabe": "غيليزان",
    "wilaya_id": 48,
    "daira": "Relizane",
    "daira_ar": "غليزان",
    "post_code": "48001",
    "daira_id": 480
  },
  {
    "id": 1505,
    "nom_francais": "Oued Rhiou",
    "nom_arabe": "وادي رهيو",
    "wilaya_id": 48,
    "daira": "Oued Rhiou",
    "daira_ar": "وادي رهيو",
    "post_code": "48002",
    "daira_id": 478
  },
  {
    "id": 1506,
    "nom_francais": "Belaassel Bouzegza",
    "nom_arabe": "بلعسل بوزقزة",
    "wilaya_id": 48,
    "daira": "El Matmar",
    "daira_ar": "المطمر",
    "post_code": "48003",
    "daira_id": 475
  },
  {
    "id": 1507,
    "nom_francais": "Sidi Saada",
    "nom_arabe": "سيدي سعادة",
    "wilaya_id": 48,
    "daira": "Yellel",
    "daira_ar": "يلل",
    "post_code": "48004",
    "daira_id": 482
  },
  {
    "id": 1508,
    "nom_francais": "Ouled Aiche",
    "nom_arabe": "أولاد يعيش",
    "wilaya_id": 48,
    "daira": "Ammi Moussa",
    "daira_ar": "عمي موسى",
    "post_code": "48005",
    "daira_id": 472
  },
  {
    "id": 1509,
    "nom_francais": "Sidi Lazreg",
    "nom_arabe": "سيدي لزرق",
    "wilaya_id": 48,
    "daira": "Mendes",
    "daira_ar": "منداس",
    "post_code": "48006",
    "daira_id": 477
  },
  {
    "id": 1510,
    "nom_francais": "El Hamadna",
    "nom_arabe": "الحمادنة",
    "wilaya_id": 48,
    "daira": "El H'madna",
    "daira_ar": "الحمادنة",
    "post_code": "48007",
    "daira_id": 474
  },
  {
    "id": 1511,
    "nom_francais": "Sidi Mhamed Ben Ali",
    "nom_arabe": "سيدي امحمد بن علي",
    "wilaya_id": 48,
    "daira": "Sidi M'hamed Ben Ali",
    "daira_ar": "سيدي أمحمد بن علي",
    "post_code": "48008",
    "daira_id": 481
  },
  {
    "id": 1512,
    "nom_francais": "Mediouna",
    "nom_arabe": "مديونة",
    "wilaya_id": 48,
    "daira": "Sidi M'hamed Ben Ali",
    "daira_ar": "سيدي أمحمد بن علي",
    "post_code": "48009",
    "daira_id": 481
  },
  {
    "id": 1513,
    "nom_francais": "Sidi Khettab",
    "nom_arabe": "سيدي خطاب",
    "wilaya_id": 48,
    "daira": "El Matmar",
    "daira_ar": "المطمر",
    "post_code": "48010",
    "daira_id": 475
  },
  {
    "id": 1514,
    "nom_francais": "Ammi Moussa",
    "nom_arabe": "عمي موسى",
    "wilaya_id": 48,
    "daira": "Ammi Moussa",
    "daira_ar": "عمي موسى",
    "post_code": "48011",
    "daira_id": 472
  },
  {
    "id": 1515,
    "nom_francais": "Zemmoura",
    "nom_arabe": "زمورة",
    "wilaya_id": 48,
    "daira": "Zemmoura",
    "daira_ar": "زمورة",
    "post_code": "48012",
    "daira_id": 483
  },
  {
    "id": 1516,
    "nom_francais": "Beni Dergoun",
    "nom_arabe": "بني درقن",
    "wilaya_id": 48,
    "daira": "Zemmoura",
    "daira_ar": "زمورة",
    "post_code": "48013",
    "daira_id": 483
  },
  {
    "id": 1517,
    "nom_francais": "Djidiouia",
    "nom_arabe": "جيديوة",
    "wilaya_id": 48,
    "daira": "Djidiouia",
    "daira_ar": "جديوية",
    "post_code": "48014",
    "daira_id": 473
  },
  {
    "id": 1518,
    "nom_francais": "El Guettar",
    "nom_arabe": "القطارة",
    "wilaya_id": 48,
    "daira": "Mazouna",
    "daira_ar": "مازونة",
    "post_code": "48015",
    "daira_id": 476
  },
  {
    "id": 1519,
    "nom_francais": "Hamri",
    "nom_arabe": "الحمري",
    "wilaya_id": 48,
    "daira": "Djidiouia",
    "daira_ar": "جديوية",
    "post_code": "48016",
    "daira_id": 473
  },
  {
    "id": 1520,
    "nom_francais": "El Matmar",
    "nom_arabe": "المطمار",
    "wilaya_id": 48,
    "daira": "El Matmar",
    "daira_ar": "المطمر",
    "post_code": "48017",
    "daira_id": 475
  },
  {
    "id": 1521,
    "nom_francais": "Sidi Mhamed Ben Aouda",
    "nom_arabe": "سيدي بن عودة",
    "wilaya_id": 48,
    "daira": "El Matmar",
    "daira_ar": "المطمر",
    "post_code": "48018",
    "daira_id": 475
  },
  {
    "id": 1522,
    "nom_francais": "Ain Tarek",
    "nom_arabe": "عين طارق",
    "wilaya_id": 48,
    "daira": "Ain Tarek",
    "daira_ar": "عين طارق",
    "post_code": "48019",
    "daira_id": 471
  },
  {
    "id": 1523,
    "nom_francais": "Oued Essalem",
    "nom_arabe": "وادي السلام",
    "wilaya_id": 48,
    "daira": "Mendes",
    "daira_ar": "منداس",
    "post_code": "48020",
    "daira_id": 477
  },
  {
    "id": 1524,
    "nom_francais": "Ouarizane",
    "nom_arabe": "ﻭﺍﺭﻳﺯﺍﻥ",
    "wilaya_id": 48,
    "daira": "Oued Rhiou",
    "daira_ar": "وادي رهيو",
    "post_code": "48021",
    "daira_id": 478
  },
  {
    "id": 1525,
    "nom_francais": "Mazouna",
    "nom_arabe": "مازونة",
    "wilaya_id": 48,
    "daira": "Mazouna",
    "daira_ar": "مازونة",
    "post_code": "48022",
    "daira_id": 476
  },
  {
    "id": 1526,
    "nom_francais": "Kalaa",
    "nom_arabe": "قلعة",
    "wilaya_id": 48,
    "daira": "Yellel",
    "daira_ar": "يلل",
    "post_code": "48023",
    "daira_id": 482
  },
  {
    "id": 1527,
    "nom_francais": "Ain Rahma",
    "nom_arabe": "عين الرحمة",
    "wilaya_id": 48,
    "daira": "Yellel",
    "daira_ar": "يلل",
    "post_code": "48024",
    "daira_id": 482
  },
  {
    "id": 1528,
    "nom_francais": "Yellel",
    "nom_arabe": "يلل",
    "wilaya_id": 48,
    "daira": "Yellel",
    "daira_ar": "يلل",
    "post_code": "48025",
    "daira_id": 482
  },
  {
    "id": 1529,
    "nom_francais": "Oued El Djemaa",
    "nom_arabe": "وادى الجمعة",
    "wilaya_id": 48,
    "daira": "El H'madna",
    "daira_ar": "الحمادنة",
    "post_code": "48026",
    "daira_id": 474
  },
  {
    "id": 1530,
    "nom_francais": "Ramka",
    "nom_arabe": "رمكة",
    "wilaya_id": 48,
    "daira": "Ramka",
    "daira_ar": "الرمكة",
    "post_code": "48027",
    "daira_id": 479
  },
  {
    "id": 1531,
    "nom_francais": "Mendes",
    "nom_arabe": "مندس",
    "wilaya_id": 48,
    "daira": "Mendes",
    "daira_ar": "منداس",
    "post_code": "48028",
    "daira_id": 477
  },
  {
    "id": 1532,
    "nom_francais": "Lahlef",
    "nom_arabe": "لحلاف",
    "wilaya_id": 48,
    "daira": "Oued Rhiou",
    "daira_ar": "وادي رهيو",
    "post_code": "48029",
    "daira_id": 478
  },
  {
    "id": 1533,
    "nom_francais": "Beni Zentis",
    "nom_arabe": "بني زنتيس",
    "wilaya_id": 48,
    "daira": "Sidi M'hamed Ben Ali",
    "daira_ar": "سيدي أمحمد بن علي",
    "post_code": "48030",
    "daira_id": 481
  },
  {
    "id": 1534,
    "nom_francais": "Souk El Haad",
    "nom_arabe": "سوق الحد",
    "wilaya_id": 48,
    "daira": "Ramka",
    "daira_ar": "الرمكة",
    "post_code": "48031",
    "daira_id": 479
  },
  {
    "id": 1535,
    "nom_francais": "Dar Ben Abdellah",
    "nom_arabe": "دار بن عبد الله",
    "wilaya_id": 48,
    "daira": "Zemmoura",
    "daira_ar": "زمورة",
    "post_code": "48032",
    "daira_id": 483
  },
  {
    "id": 1536,
    "nom_francais": "El Hassi",
    "nom_arabe": "الحاسى",
    "wilaya_id": 48,
    "daira": "Ammi Moussa",
    "daira_ar": "عمي موسى",
    "post_code": "48033",
    "daira_id": 472
  },
  {
    "id": 1537,
    "nom_francais": "Had Echkalla",
    "nom_arabe": "حد الشقالة",
    "wilaya_id": 48,
    "daira": "Ain Tarek",
    "daira_ar": "عين طارق",
    "post_code": "48034",
    "daira_id": 471
  },
  {
    "id": 1538,
    "nom_francais": "Bendaoud",
    "nom_arabe": "بن داود",
    "wilaya_id": 48,
    "daira": "Relizane",
    "daira_ar": "غليزان",
    "post_code": "48035",
    "daira_id": 480
  },
  {
    "id": 1539,
    "nom_francais": "El Ouldja",
    "nom_arabe": "العلجة",
    "wilaya_id": 48,
    "daira": "Ammi Moussa",
    "daira_ar": "عمي موسى",
    "post_code": "48036",
    "daira_id": 472
  },
  {
    "id": 1540,
    "nom_francais": "Merdja Sidi Abed",
    "nom_arabe": "مرجة سيدي عابد",
    "wilaya_id": 48,
    "daira": "Oued Rhiou",
    "daira_ar": "وادي رهيو",
    "post_code": "48037",
    "daira_id": 478
  },
  {
    "id": 1541,
    "nom_francais": "Ouled Sidi Mihoub",
    "nom_arabe": "أولاد سيدي ميهوب",
    "wilaya_id": 48,
    "daira": "Djidiouia",
    "daira_ar": "جديوية",
    "post_code": "48038",
    "daira_id": 473
  }
];

// Helper: communes d'une daira
export const getCommunesByDaira = (dairaId) => communes.filter(c => c.daira_id === dairaId);

// Helper: communes d'une wilaya
export const getCommunesByWilaya = (wilayaId) => communes.filter(c => c.wilaya_id === wilayaId);

// Helper: récupérer une commune par id
export const getCommuneById = (id) => communes.find(c => c.id === id);
