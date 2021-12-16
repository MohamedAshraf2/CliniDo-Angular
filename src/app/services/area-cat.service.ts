import { DrCity } from './../models/DrCity.model';
import { Injectable } from '@angular/core';
import { DrArea } from '../models/DrArea.model';

@Injectable({
    providedIn: 'root'
})
export class AreaCatService {
  getCities(){
    return[
      new DrCity(1,'Alexandria'),
      new DrCity(2,'Cairo'),
      new DrCity(3,'Assuit'),
      new DrCity(4,'BeniSuef'),
      new DrCity(5,'Damietta'),
      new DrCity(6,'ElBeheira'),
      new DrCity(7,'ElDakahlia'),
      new DrCity(8,'ElIsmailia'),
      new DrCity(9,'Minia'),
      new DrCity(10,'ElSharqia'),
      new DrCity(11,'Fayoum'),
      new DrCity(12,'Gharbia'),
      new DrCity(13,'Giza'),
      new DrCity(14,'Hurghada'),
      new DrCity(15,'PortSaid'),
      new DrCity(16,'North Coast'),
      new DrCity(24,'Menofia'),
      new DrCity(17,'Matrouh'),
      new DrCity(18,'Luxor'),
      new DrCity(19,'Kafr ElSheikh'),
      new DrCity(20,'Sharm ElSheikh'),
      new DrCity(21,'Suze'),
      new DrCity(22,'Sohag'),
      new DrCity(23,'Qena'),

    ];
  };
  getAreas(){
    return[
      new DrArea(1,1,'Borg El-Arab'),
      new DrArea(2,1,'Semoha'),
      new DrArea(3,1,'Elramel Station'),
      new DrArea(4,1,'El-Betash'),
      new DrArea(5,1,'Sedy Gaber'),
      new DrArea(6,1,'Sedy Beshr'),
      new DrArea(7,2,'Naser City'),
      new DrArea(8,2,'6-october'),
      new DrArea(9,2,'New Cairo'),
      new DrArea(10,2,'El Shrouk'),
      new DrArea(11,2,'El nozha'),
      new DrArea(12,2,'Madinaty'),
      new DrArea(13,2,'El- Rehab'),
      new DrArea(14,2,'El-Mostabal'),
      new DrArea(15,3,'Dayrot'),
      new DrArea(16,3,'Qusiya'),
      new DrArea(17,3,'MAnfalot'),
      new DrArea(18,3,'Abnob'),
      new DrArea(19,3,'El Badary'),
      new DrArea(20,3,'Sahel Slem'),
      new DrArea(21,4,'Naser'),
      new DrArea(22,4,'Ehnasya'),
      new DrArea(23,4,'Smesta'),
      new DrArea(24,4,'Beni Suef'),
      new DrArea(25,4,'Bba'),
      new DrArea(26,4,'El wasta'),
      new DrArea(27,4,'El fashn'),
      new DrArea(28,5,'Kafer said'),
      new DrArea(29,5,'Farscore'),
      new DrArea(30,5,'Kafer El batekh'),
      new DrArea(31,5,'El tharka'),
      new DrArea(32,5,'Damietta'),
      new DrArea(33,6,'Damnhor'),
      new DrArea(34,6,'Kafer EL dawar'),
      new DrArea(35,6,'Rashed city'),
      new DrArea(36,6,'Edco'),
      new DrArea(37,6,'Abo EL matamer'),
      new DrArea(38,6,'Abo Homous'),
      new DrArea(39,6,'Wady El natroon'),
      new DrArea(40,6,'Shobrkhet'),
      new DrArea(41,7,'metghmer'),
      new DrArea(42,7,'Agia'),
      new DrArea(43,7,'Bany abeed'),
      new DrArea(44,7,'El Manzala'),
      new DrArea(45,7,'Dakornous'),
      new DrArea(46,7,'El Gamalya'),
      new DrArea(47,8,'Fayed City'),
      new DrArea(48,8,'Cairo'),
      new DrArea(49,8,'El Cantra shark'),
      new DrArea(50,8,'El Cantra gharb'),
      new DrArea(51,8,'Abo El saraser'),
      new DrArea(52,8,'El Tael el kbber'),
      new DrArea(53,8,'El kasaseen'),
      new DrArea(54,9,'Maghagha'),
      new DrArea(55,9,'Bany Mazar'),
      new DrArea(56,9,'Malwy'),
      new DrArea(57,9,'Samalot'),
      new DrArea(58,9,'Dear mwas'),
      new DrArea(59,9,'El Adwa'),
      new DrArea(60,9,'El fkrya'),
      new DrArea(61,10,'Zakazek'),
      new DrArea(62,10,'Belbes'),
      new DrArea(63,10,'Hehaa'),
      new DrArea(64,10,'Abo hmad'),
      new DrArea(65,10,'Fakous'),
      new DrArea(67,10,'Abo Kbeer'),
      new DrArea(68,10,'El hosainya'),
      new DrArea(69,10,'Saker'),
      new DrArea(70,11,'Tamya'),
      new DrArea(71,11,'Snores'),
      new DrArea(72,11,'Etsaa'),
      new DrArea(73,11,'Abshway'),
      new DrArea(74,11,'Yousef el sedyak'),
      new DrArea(75,12,'Tanta'),
      new DrArea(76,12,'Zefta'),
      new DrArea(77,12,'El Mahala el kobra'),
      new DrArea(78,12,'Kator'),
      new DrArea(79,12,'Samanode'),
      new DrArea(80,12,'Basyon'),
      new DrArea(81,12,'El Zayat'),
      new DrArea(82,12,'El santa'),
      new DrArea(83,13,'Badrashin City'),
      new DrArea(84,13,'El-Saf City'),
      new DrArea(85,13,'Atfeih'),
      new DrArea(86,13,'El-ayat'),
      new DrArea(87,13,'Osem'),
      new DrArea(88,13,'Kerdasa'),
      new DrArea(89,14,'Sowma bay'),
      new DrArea(90,14,'Makady bay'),
      new DrArea(91,14,'El fander'),
      new DrArea(92,15,'Abo Ramad'),
      new DrArea(93,15,'Karlos'),
      new DrArea(94,15,'Magawesh'),
      new DrArea(95,15,'por fouad'),
      new DrArea(96,15,'EL shrouk'),
      new DrArea(97,15,'El mankh'),
      new DrArea(98,15,'El dawhy'),
      new DrArea(99,15,'EL Arab'),
      new DrArea(100,15,'El zhoure'),
      new DrArea(101,16,'Marina'),
      new DrArea(102,16,'Kelo Batra'),
      new DrArea(103,16,'Ageba'),
      new DrArea(104,24,'El-sadat'),
      new DrArea(105,24,'shben El-kom'),
      new DrArea(106,24,'Mnof'),
      new DrArea(107,24,'Ashmon'),
      new DrArea(108,24,'Tala'),
      new DrArea(109,24,'El shohdaa'),
      new DrArea(110,17,'Gowsna'),
      new DrArea(111,17,'El Bagor'),
      new DrArea(112,17,'Seewaa'),
      new DrArea(113,17,'El Saloom'),
      new DrArea(114,17,'Cedy Brany'),
      new DrArea(115,17,'El Nagela'),
      new DrArea(116,17,'El Dabaa'),
      new DrArea(117,17,'El Alamen'),
      new DrArea(118,17,'El Hmam'),
      new DrArea(119,18,'Armant'),
      new DrArea(120,18,'Asna'),
      new DrArea(121,18,'El-Karnak'),
      new DrArea(122,18,'El bayadya'),
      new DrArea(123,18,'El tod'),
      new DrArea(124,18,'El zenya'),
      new DrArea(125,19,'Desook'),
      new DrArea(126,19,'Baltem'),
      new DrArea(127,19,'Bela'),
      new DrArea(128,19,'El Reyaid'),
      new DrArea(129,19,'Klean'),
      new DrArea(130,19,'El hamol'),
      new DrArea(131,20,'Taba'),
      new DrArea(132,20,'Dahab'),
      new DrArea(133,20,'Ras seder'),
      new DrArea(134,20,'Nweba'),
      new DrArea(135,20,'Sant Katreen'),
      new DrArea(136,21,'Abo rades'),
      new DrArea(137,21,'Abo Zanyma'),
      new DrArea(138,21,'Ataka'),
      new DrArea(139,21,'El Arbaen'),
      new DrArea(140,21,'El Ganayen'),
      new DrArea(141,22,'Akhmem'),
      new DrArea(142,22,'El balyana'),
      new DrArea(143,22,'El-Mragha'),
      new DrArea(144,22,'Gerga'),
      new DrArea(145,22,'Tema'),
      new DrArea(146,22,'El Monshaa'),
      new DrArea(147,22,'Saklta'),
      new DrArea(148,22,'Tahta'),
      new DrArea(149,23,'Abo tesht'),
      new DrArea(150,23,'Naga Hamady'),
      new DrArea(151,23,'Deshna'),
      new DrArea(152,23,'Elrfaf'),
      new DrArea(153,23,'Nkada'),
      new DrArea(154,23,'Kos'),
      new DrArea(155,23,'El waf'),
    ]
  }

}