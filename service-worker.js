/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","77bcd999835de7cac914f1a30f7378db"],["/Ajax1-0.html","1103d3434c47e591580425bbb128931b"],["/Ajax1-1.html","aad075478d0bb38b89c04d4ad3661a5a"],["/Ajax1-2.html","bffa18a224d3bc20704faf7551d33483"],["/Flask.html","10234e70f030f14d5c874a81a8676d79"],["/Hexo.html","7361e1cdd33bf4b2ae42936c4fe62e30"],["/Hexo2.html","50c72426479adcc1af5480449e32c537"],["/JDBC1-0.html","6fcf3cbd42b42264fb5e6c51b90cbe63"],["/JDBC1-1.html","4b6448e13e29964d40dcdabdba8026b8"],["/JDBC1-10.html","31998b6578f45fd2973d5caa6391b380"],["/JDBC1-2.html","da4b79a52049ccd3ffa16ec93fc2f83b"],["/JDBC1-3.html","b9c0cb26687fed86a462e9eca77576b2"],["/JDBC1-4.html","887f0d96df876c169e2929a8a54f0ce5"],["/JDBC1-5.html","98431fee0deeea56acd49eb459aa1da9"],["/JDBC1-6.html","1eb9ecbfcfb6c10d78a5b4000aaed008"],["/JDBC1-7.html","a5b30f6a86f718da8fcfac2a20d0e0c1"],["/JDBC1-8.html","cf6d660e52a7810bc37110c5bd8bf265"],["/JDBC1-9.html","4129aad3f2afd045359f2b3fcec04955"],["/JDBC2-0.html","ac443e4eba80f69f4ed0ff8f51eb38fd"],["/JS-JSON.html","65a15931d54125e98006994671ae346e"],["/JS1-0.html","c715a057a734ea061ede011a77df953c"],["/JS1-1.html","02312414ea12e5571603c58eab8a1e6d"],["/JS1-2.html","96aa0a762c0f78f95f8438d7b6986ba2"],["/JS2-0.html","b18c545711b35e131a8d87ae07ad60d0"],["/JS2-1.html","95498196949684bef3e346767bf6a19d"],["/JS2-2.html","a5e076950994e5554b4ab88c5f2904fc"],["/JS2-3.html","9c00c30157465c40ee07c8e22b0f67f3"],["/JS2-4.html","d12a56a67c15ffd5bfcef6f49a7435b6"],["/JS2-5.html","8575fc4800e22f56073e9bb8864f5df4"],["/JSBOM1-0.html","7d6edddceac006b923d223b5a2f9fb65"],["/JSBOM1-1.html","3fd7e0043c7f6f52ed281e4e1f020ab8"],["/JSDOM1-0.html","9c405fbdffba56ad53fc0312b2e9ba90"],["/JSDOM1-1.html","6ca8959e0506f556dbeb139184fcfce5"],["/JSDOM1-2.html","d90e0d8731ef4f2508d704515f3afd87"],["/JSDOM1-3.html","9305fca55e38784516e4625381b43146"],["/JSDOM1-4.html","b68c4424f1b157d2376a4ef1e442b6de"],["/JSDOM1-5.html","fc71ffbb40d3713f3bb4a225a31c9b64"],["/JSDOM1-6.html","8274f43ab471a0263455b52f71c60f47"],["/JS_tools_01.html","c5eabcdd94f4a7baaf29e1f8e6cde0fc"],["/JSclassName.html","57a94032f71b070243e0ad2375447521"],["/JavaSE1-0.html","efead9e31e1ca9efefaec9ff87df2138"],["/JavaSE11-Thread.html","393e3d72016601022270f5fab3360267"],["/JavaSE12-Class.html","ecb073d6a5cbacf67b8c7f27a46c8e6c"],["/JavaSE13-Reflection.html","90ff80f9ca7068b2496a1c084f33f791"],["/JavaSE14-Internet.html","96784026d6e06bee621d3472be8e82fe"],["/JavaSE2-1.html","48ecb266da1a5601b94ab066a59d23da"],["/JavaSE2-2.html","d13167c7c078da87d0b92009502ab294"],["/JavaSE2-3.html","93b3629846fdd38da0a310bc8d6a8f58"],["/JavaSE3-1.html","56bec72349b8bd9b35e8f6392981ab09"],["/JavaSE3-2.html","943a444445709e9460317443b6e4aba3"],["/JavaSE3-3.html","0abfa5984ca333ae90099190fd3126e3"],["/JavaSE4-1.html","7973e68a141828318ac5fdbe9bec1078"],["/JavaSE4-2.html","1feb43ff36eddb7a475c9d334cf7a36e"],["/JavaSE5-1.html","2b51cff456cc3b66bd7d02bdafa1455b"],["/JavaSE5-2.html","78ecc159ecd0c966f62008005d0d59d6"],["/JavaSE5OOP.html","3043dd83e36da20831fcfb44e127d958"],["/JavaWeb1-0.html","014e6335de4914deac9e209d94f0bc09"],["/JavaWeb1-1.html","cb865a4488a1c5b2e3937ef666f25bfb"],["/JavaWeb4-0.html","bce4b223cdcb2ded7818d658503ce3ba"],["/Markdown_Typora.html","1f95f97d7b0d8d341e43702e809a6674"],["/NodeJS.html","9350b9c2aa28b294f3416d1ae317d5c6"],["/Python.html","db961183743ddd7bc5c5066cd37708c8"],["/Ubuntu-XMind.html","c198d8805a3379e1fb090ca63fd15a59"],["/VPN.html","8b9c27889ee200b63305928d54658dc3"],["/Vue1-0.html","91b9a6f12c058bee712e433d0ebffc74"],["/Vue1-1.html","822b7f43abd752017dec3474afe4bd98"],["/Vue1-2.html","37315e2ad44ee48180d12b2e11fa11f2"],["/Vue1-3.html","313d6e5b595dd031b5cbfa85a7fdf6f7"],["/Vue1-4.html","99a0d65a9aaa9f560418800d2460b423"],["/Vue1-5.html","2e75257ccf0a73179f627389752e8d54"],["/Vue2-1.html","dc6e807b8379012acbf44d74b5065550"],["/Vue2-2.html","fbc7d7c619df18fa84fbd4bfdb644238"],["/Vue2-3.html","004312ad10aff7c8517167b85994133d"],["/Vue3-1.html","b45f71af784c9de2707db594bfe1cb75"],["/Vue3-2.html","27d97b71975990494d2f97c575d434c1"],["/Vue3-3.html","9e2ede93193e95c95f6bbc68c8a842ab"],["/Vue3-4.html","47e7bba202a0216f8d6727c881ca4172"],["/Vue4-1.html","cf012645b5c56afb003a1127fe500b3e"],["/Vue4-2.html","724b8c88266dee810f0e40247472c934"],["/Vue5-1.html","4df7a50c4a7c40f4938b8da546927963"],["/about/index.html","88292166c38fa5d53d7b519f778a7d06"],["/about/music.html","8e0f1b45d57a7917ee663bddb2d8c38e"],["/alipay.png","dfcf79b78e9d0b6500c48a899a66ecc4"],["/archives/2019/03/index.html","e3301f832d603f22cc4102a5bc20c05a"],["/archives/2019/03/page/2/index.html","cd6710b451d863b994d983600c3902a1"],["/archives/2019/03/page/3/index.html","e93aae8f06df24b009bdc45ff34a1b28"],["/archives/2019/04/index.html","33d7ee588f5971400ceb794abf602396"],["/archives/2019/04/page/2/index.html","ff3a9dd3f6f58b87d69c4223395fc9cc"],["/archives/2019/04/page/3/index.html","3e1761f361319180fde639a6e67a6cdf"],["/archives/2019/05/index.html","dd76197e1583880d153645d24817cb2e"],["/archives/2019/07/index.html","7ebab47f2e5e6560cde1f918cf4fc1aa"],["/archives/2019/08/index.html","e092d30ea07896c75b66f2ef931bd0f6"],["/archives/2019/08/page/2/index.html","cc5ff5bf3df0dc5af8ecb864bcdb8457"],["/archives/2019/09/index.html","246498d6b9cef44414d29ae23a8bfd99"],["/archives/2019/10/index.html","fcea725d1aba871a5d3c79cf7331ac06"],["/archives/2019/index.html","74fb484c8ad686c090f11d27e8d8ea21"],["/archives/2019/page/2/index.html","a105c122853debeb9071e75f0eb15132"],["/archives/2019/page/3/index.html","a636fc00a04a5ff2f9a49ef7229494d6"],["/archives/2019/page/4/index.html","c5c0641c850cdeed6312e71328d7c498"],["/archives/2019/page/5/index.html","0ee286f6064feb1b9bcff0a0615d8269"],["/archives/2019/page/6/index.html","6576877063f7a95ce672c46f756226f4"],["/archives/2019/page/7/index.html","9040a47789f054ab75c38500b98cc615"],["/archives/2020/02/index.html","b6f7e1eedd1ccad3751218dd2decf0aa"],["/archives/2020/03/index.html","717c4493232fbe31393382f5463f7611"],["/archives/2020/index.html","079a31ecd4a8aa6f2b61893824a6e819"],["/archives/2020/page/2/index.html","c11d192b870701caac71b97d610118d6"],["/archives/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/2/index.html","7098dfa612e97f53d2acab3010c2e413"],["/archives/page/3/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/4/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/5/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/6/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/7/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/8/index.html","404de46082f552c85786e3063dd79cd0"],["/archives/page/9/index.html","404de46082f552c85786e3063dd79cd0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","529f079c921e3cc812d01e364712b526"],["/bbs/index.html","ea92cb6b25a3e85ab632b936e02f5819"],["/categories/Hexo/index.html","a4b6a98b0ab4715bf09cfa26d910ff9f"],["/categories/Java/JDBC/index.html","7e120bd15f62551708959bcea56c3822"],["/categories/Java/JavaSE/index.html","24bd0dd1f35477005d65df73761c3628"],["/categories/Java/JavaSE/page/2/index.html","c9ffb9ba070c83fed1d6b7497f6db6e8"],["/categories/Java/JavaWeb/index.html","f46fdfbba88a1cbaa5bd432a6e108965"],["/categories/Java/Maven/index.html","ed5ab99fa8be89ec0474efbaca294077"],["/categories/Java/index.html","b562f6f75091a40b67884516a326a124"],["/categories/Java/page/2/index.html","e687b75350fca59a9e15e8b9ccfe0f01"],["/categories/Java/page/3/index.html","017fabfa668f71c57461903b37ef16e0"],["/categories/Java/page/4/index.html","5071be01b05e6b9cfd87fcc148c3e8cc"],["/categories/Ubuntu/index.html","664690d8847d6ae2fc5750353b16df58"],["/categories/index.html","019f6418682fbdac2b9bb0ae29324703"],["/categories/python/Flask/index.html","d238b5c9f2a0a6438d5549cf2fac901c"],["/categories/python/index.html","baa744e8fe49a4862e48426d47319a49"],["/categories/前端/Ajax/index.html","527b41ed1fb040fd9f680cd40afb4f6b"],["/categories/前端/JS/index.html","c8b0ceb1169386a6ca1fbe024bb6bcc4"],["/categories/前端/JS/page/2/index.html","03ba517fa1ab65dc0899d90c595eb2cc"],["/categories/前端/Vue/index.html","ac69389fab8b9117c366dc8424db2a5c"],["/categories/前端/Vue/page/2/index.html","5d607264a2e976aca292209d7ac3a282"],["/categories/前端/index.html","fe33bb097b659191d9f008018f285fe9"],["/categories/前端/jQuery/index.html","1361168372d98f66e3d8b7bf171e22da"],["/categories/前端/page/2/index.html","3b326d0153dcd2d6af0fad5cd9794473"],["/categories/前端/page/3/index.html","b206b2c8a3662c07f6a0762c8ec89bba"],["/categories/前端/page/4/index.html","779bb58370e37c3ab1c9d9f3b6b0bdc7"],["/copy-code.html","31a2185c8abc7cde6a1c582ee3152ccb"],["/css/style.css","cb80130c11497f5119d25c49e643ed17"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","7507fb7f99442eacac1bbd6c045378b5"],["/hide-code.html","3091ff6dd7c945abc56d1398d386274d"],["/https.png","f79edebc508d8ee905407b64adb7e7da"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/imgs/JS/1.jpg","e9d53f7f4641d89c3f9e8c7bf67cc962"],["/imgs/JS/2.jpg","3312ac939c56cd82255bfa3090a8c08f"],["/imgs/JS/3.jpg","5f73808afb7e9a44c7272e1af6e5b820"],["/imgs/JS/4.jpg","f97e7be2f0f3cc37e20196fd50185464"],["/imgs/JS/5.jpg","759270dc66c99e52e61cc7732503f2fd"],["/imgs/JS/DOMTree.png","c157e75ff8b2803f2e9bd8cc55851037"],["/imgs/JS/Memory.png","d26ca9baa8b3b9ae4aa30cccabadffe0"],["/imgs/JS/Node.png","e69953568f8d939faaff07e4fb89051c"],["/imgs/JS/ajax.png","5e9d8bc348789f1295e4fda684df075a"],["/imgs/JS/debug.png","a61f70fb4b73d20a08fb114266b0a8c1"],["/imgs/JS/prototype.png","9960bf60b09fa3c0fabf359ef51a3f41"],["/imgs/Java/Collection.png","c6b77b100113a188a8547b0a6ef1bc44"],["/imgs/Java/Exception.png","863d7bd108431408fab90ee5413fec26"],["/imgs/Java/IO流.png","c141cd49ecab3834e4140143eae8013c"],["/imgs/Java/JAVA学习路线.png","a5f292a55208c4d7e6caaa6fbd7ccaef"],["/imgs/Java/JDBC_01.png","12a5a1d1c8a0809ea23a7d55983692dc"],["/imgs/Java/JDBC_02.png","3494101bfad2c38d42a61de6638c57ab"],["/imgs/Java/JDBC_03.png","19866dcbe8e375531fdfeb68dcee39e9"],["/imgs/Java/JDBC_04.png","d2658cb15631f1bfce89cd15d6c3a250"],["/imgs/Java/JDBC_05.png","a562e5279501cbf5d8d6aee045d5c5a9"],["/imgs/Java/JDBC_06.png","b0cd235f7acdeffb0191c3a972655cf2"],["/imgs/Java/JDBC_07.png","c9023e9e67b1340aa3cff3db6129418f"],["/imgs/Java/JDBC_08.png","5ccd1ee153909651d4ba7de8199aa6aa"],["/imgs/Java/JDBC_09.png","fdfc73a686a5e414c4462bf27d89b542"],["/imgs/Java/JDBC_10.png","ea9d72bc3b3e644a81915f8e5e0865e1"],["/imgs/Java/JDBC_11.png","8fc6aec41d0fb26a99ef904137431030"],["/imgs/Java/JDBC_12.png","1fa98e4fa2e735ded896567e92225b16"],["/imgs/Java/JDBC_13.png","96cd1258ab7a2790981a6e4ebd74cb60"],["/imgs/Java/JDBC_14.png","047b93082cd0e7ad90e78f9013816fad"],["/imgs/Java/JDBC_15.png","abf213ab81f661c57ae74777cd16440b"],["/imgs/Java/JDBC_2_01.png","dcdf35bc01576887b8e64745c29fbe41"],["/imgs/Java/JDK.png","ad71591c7137c6b7bb24e8b84f4233c5"],["/imgs/Java/JavaSE图解.png","ccc0b2c7888a90eea91101251ec0a717"],["/imgs/Java/Map.png","cdc4eb3bbdf8483e01a1c15d7aadcb03"],["/imgs/Java/Protocol.png","e6c10b0deabc5a58ce0a464945d1babf"],["/imgs/Java/String.png","e35655868d927d791b61e94de9fbae62"],["/imgs/Java/String[][].png","8d07477a038be96392b9af4ab7d4c25b"],["/imgs/Java/String内存.png","cdad705c5a199b85e78d00c3dde631b8"],["/imgs/Java/Thread.png","de2c41be444d3dc299d060a2065b4532"],["/imgs/Java/static.png","b6945f6f75474ffd140c28917ce843d4"],["/imgs/Java/swap.png","da604af002d156b569eae42876fe8e02"],["/imgs/Java/二维数组.png","5b0280abdd56b81a3d40b5d6d9b6ca2f"],["/imgs/Java/体系.png","9fa0fc91f707fe18b8cd306ed15768ac"],["/imgs/Java/修饰符.png","e181921844fcc48ae680948ce9f9754e"],["/imgs/Java/值传递.png","656e2d2786750ac07f5e87f2b62660da"],["/imgs/Java/内存结构图.png","3d9035c11324267f3a247f809ed8290e"],["/imgs/Java/包装类转换.png","f06b40e90af283c49d4a239828cbaa72"],["/imgs/Java/安全问题.png","64d52929ffa94fae128b9bd0c10c49f4"],["/imgs/Java/数组.png","7d6b1e5a6f06c125766b52adaa9f3d49"],["/imgs/Java/类的高级特性总结.png","5c046ddc2487fea7c235ba378f6e316f"],["/imgs/Java/线程的生命周期.png","95f7145d7ec2cde3a697ee5c3a81373a"],["/imgs/JavaWeb/JavaWeb1-0.1.png","a3856fbef7bfc3be80fb1bf403809bd2"],["/imgs/JavaWeb/JavaWeb1-0.2.png","61c9df86cbe2239e92a6603ac9e5a9f9"],["/imgs/JavaWeb/JavaWeb1-0.3.png","404ec7fb9615c5600a170cddb01c0eca"],["/imgs/JavaWeb/JavaWeb1-0.4.png","d73385ff7854047b902ae42fc977f266"],["/imgs/JavaWeb/JavaWeb1-0.5.png","8bb83d5f1ca808d0eb948ae41e6ffcb9"],["/imgs/JavaWeb/JavaWeb1-1.1.png","52adbadad1b703c8d158177dd1300d9e"],["/imgs/JavaWeb/JavaWeb1-1.10.png","b50d180b140058dd509244939b270771"],["/imgs/JavaWeb/JavaWeb1-1.11.png","f31599fd77d00c18a440e4a48d2abc79"],["/imgs/JavaWeb/JavaWeb1-1.12.png","8c6d39f46ae5a685c798157d93c2b6e1"],["/imgs/JavaWeb/JavaWeb1-1.13.png","bb545a22efaeb581c8ab2021224d6edf"],["/imgs/JavaWeb/JavaWeb1-1.2.png","330ce4f7a8bab99edac9e7385d7452f0"],["/imgs/JavaWeb/JavaWeb1-1.3.png","5beaa5e5a17123a6b88280c812a2fc58"],["/imgs/JavaWeb/JavaWeb1-1.4.png","aba5586d4eb72cb743e1066ef3948e1f"],["/imgs/JavaWeb/JavaWeb1-1.5.png","afcfd9c5110c9f832784ccf48fa9ca4e"],["/imgs/JavaWeb/JavaWeb1-1.6.png","6f1bcc0bf0dd643f60c51e19e4b2fee2"],["/imgs/JavaWeb/JavaWeb1-1.7.png","ce42f1ce31017b3e882f38e216d17567"],["/imgs/JavaWeb/JavaWeb1-1.8.png","fdb4f17f0cce9cc61d0582644a1c1076"],["/imgs/JavaWeb/JavaWeb1-1.9.png","852c0d99dbfb2083750cc8348383beeb"],["/imgs/JavaWeb/JavaWeb4-0.1.png","684e7f309780760ca457a1c8a4be1c5a"],["/imgs/JavaWeb/JavaWeb4-0.2.png","c353ed21307ed5e78feb4a241d43695f"],["/imgs/Vue/Vue1-3.1.png","47dbe87ecde7494f1e645812c4b364eb"],["/imgs/Vue/Vue1-5.1.png","864f590b592b3e1dda4a0d365069193b"],["/imgs/Vue/Vue1-5.2.png","007bd19ec40a2ad9dc3661f74cb2ba0a"],["/imgs/Vue/Vue2-1.1.png","d37f9815348d120164c81f54a45a59e6"],["/imgs/Vue/Vue2-1.2.png","bf3162a8f37b62db4ad1d8969e688dd9"],["/imgs/Vue/Vue2-1.3.png","52195034c7171c26e5c3d2b6b58b7c49"],["/imgs/Vue/Vue2-1.4.png","ece33c6965cc2eca7c4ca6292a7b5828"],["/imgs/Vue/Vue2-1.5.png","25027297cf1ab8ad61fc0a9e842c7499"],["/imgs/Vue/Vue2-2.1.png","250fe60e7603f6a860f305d2a9d681d1"],["/imgs/Vue/Vue2-2.2.png","4874518ac147e704fafc950ba43f0548"],["/imgs/Vue/Vue2-2.3.png","2b3e67fa853fd70925d2ac96a13c306d"],["/imgs/Vue/Vue4-1.1.png","1ac4829ed3508fb9f4158153803a7943"],["/imgs/Vue/Vue5-1.1.png","10d5c4023b8e00d473b0450d4738ea56"],["/imgs/Vue/Vue5-1.2.png","9cb46f3ad04fa72b0bce1d2bee05325c"],["/imgs/bg/blog_bg_01.jpg","52fc6b48511db3c36020725c53e50575"],["/imgs/bg/blog_bg_02.jpg","8be0b297e56a399129473f95065562f8"],["/imgs/bg/blog_bg_03.jpg","54472889add79a65d4268f9c031dbf0f"],["/imgs/bg/blog_bg_04.jpg","bdecedd409283f16fd75438bee56cd16"],["/imgs/bg/blog_bg_05.jpg","5a117bc22f98af2e84edd25a0d0b64cc"],["/imgs/conf1.png","770e6e29fb2d51a9b9b2d51f2671d094"],["/imgs/conf2.png","9536f97e0c1160207f81c9bbe7bd5128"],["/imgs/conf3.png","3796fd78f5a2aef9a209ed048a5fa24f"],["/imgs/fold.png","cd489b2f86b0c692dae11d9827180a50"],["/imgs/gitee.png","0cf41aa37a46eb736d31f34e9749188b"],["/imgs/github.png","b8cb88af3cfc76058351c127373a858f"],["/imgs/github02.png","76459ee8c5377b16e94401ae7439467d"],["/imgs/github03.png","ba54b82eecce82ca09ff75f290e51acc"],["/imgs/github04.png","54b8de124f8df866653fcb70a0d8d61f"],["/imgs/github05.png","984a03f8276f472488b588ce440c43f6"],["/imgs/github06.png","f708db12b1eb832e1cbb94af4514940e"],["/imgs/github07.png","580ddef37d914fcf955d52e7e65960ea"],["/imgs/hexo.png","1edd6703b0d3b456c73c884bab2bd459"],["/imgs/maven/maven_00_01.png","0d20ed96462c1febef2e058976154537"],["/imgs/maven/maven_00_02.png","521f3ccd1b4debf9489d31e7baa33d90"],["/imgs/maven/maven_01_00.png","ef7926e41b8d5ddba34a94c29b7acd66"],["/imgs/maven/maven_01_01.png","8a4b7a038643dcec9794df1dddd851c5"],["/imgs/maven/maven_01_02.png","dc6ff1a28f120c0570abc7dcb8c74e64"],["/imgs/maven/maven_01_03.png","9c3f2e992105f17faf3fa07f8986972e"],["/imgs/maven/maven_01_04.png","ccb3f62b42348399d6657f9b047975f6"],["/imgs/maven/maven_01_05.png","e21ee114a840c257c08f278fbb05be09"],["/imgs/maven/maven_02_01.png","2bf56f43dc3f2dce89961cedeef25008"],["/imgs/maven/maven_02_02.png","efeda0a806c223c87e9dc8f37d47639b"],["/imgs/maven/maven_03_01.png","31a47aad2b9d12b2a1b94c2f86acfb86"],["/imgs/maven/maven_03_02.png","9044e2571e39020c4460512cd11e6d69"],["/imgs/maven/maven_03_03.png","1edddd4d565912ca6d7d3e5aba3a50e2"],["/imgs/maven/maven_03_04.png","d6d8c05fc68531fd86d7194bba6b6046"],["/imgs/maven/maven_04_01.png","d7669f69e7085e1b32c3ef33972dfff2"],["/imgs/maven/maven_04_02.png","34f449e798bc7a2ecc374f6b17b9826e"],["/imgs/maven/maven_04_03.png","2b34bf255bb2a1f80ac968c8c82c7ca6"],["/imgs/maven/maven_04_04.png","3415811658176a12471427c9a8a7d436"],["/imgs/maven/maven_05_01.png","5dec07efcdb2936bbb425c010eb90c96"],["/imgs/maven/maven_05_02.png","fd2489e807df80963609004f137b9da4"],["/imgs/maven/maven_05_03.png","8793340120fc75a51b467e84c9fd32d0"],["/imgs/maven/maven_05_04.png","15f5436885243e1d66e88913035f4b8a"],["/imgs/maven/maven_05_05.png","479cc852fe856d0a4de8641c74614e55"],["/imgs/maven/maven_05_06.png","397988188f3948a582ab540d734ea2d6"],["/imgs/maven/maven_05_07.png","ad71a3fdc94cbdaf9cda0b70c3373089"],["/imgs/maven/maven_05_08.png","670065d5874eb2719d3092b3f8a83874"],["/imgs/maven/maven_05_09.png","8de79de135066316e6b808f4098f1dab"],["/imgs/maven/maven_05_10.png","e45a6e3d0a314d7f1321f577cdb013c1"],["/imgs/maven/maven_05_11.png","9f4601b6fd581579853d4343a69ed1ad"],["/imgs/maven/maven_05_12.png","7196c566813f56adae2c9e69ae144c13"],["/imgs/maven/maven_05_13.png","20a7aba354779f30d5632e649f9f9673"],["/imgs/maven/maven_05_14.png","116d7909f3c50a82cda7e8bc67f6cd3a"],["/imgs/maven/maven_05_15.png","64fe27781391ef5364e23ddc9a85d49c"],["/imgs/maven/maven_06_01.png","63a9cc0e564b1c55b0ac16f76f1ded53"],["/imgs/maven/maven_06_02.png","dbe365cfadfe29334f8f1629d8d4dc06"],["/imgs/maven/maven_06_03.png","2e9d5a9923d27a06c8b1d474dc3d2b29"],["/imgs/maven/maven_06_04.png","44b274eb82a22a993ee0e1a829fd4faf"],["/imgs/maven/maven_06_05.png","7ba49a4b7e77a1ed6d96e12ebac38e7e"],["/imgs/maven/maven_06_06.png","d61f51dfea2f7a17a7b76109178d9edf"],["/imgs/maven/maven_06_07.png","f54373f61e960ced9e636764c316105e"],["/imgs/maven/maven_07_01.png","0ee01053e9f3cd3d7371c1c919326dc3"],["/imgs/maven/maven_07_02.png","970fa8d2f9714d04f820266e59feb825"],["/imgs/maven/maven_07_03.png","1dfe5e7df177e377f02002b0b2d0cb4b"],["/imgs/maven/maven_07_04.png","9716c08af749b33f954dc591dd76c56b"],["/imgs/maven/maven_07_05.png","73b80e82d7d4613f8ab4c0bcd6eeed57"],["/imgs/maven/maven_07_06.png","def5c7c1303fbd94dcd52f1a20a09531"],["/imgs/maven/maven_08_01.png","a4a8e9854fa8831860250340065abbd8"],["/imgs/maven/maven_08_02.png","6d5f0b5f5e83c18bc8795d6b99e2648f"],["/imgs/maven/maven_08_03.png","b17fcbb238e2ec6e6c576b467f5d0ee9"],["/imgs/maven/maven_09_01.png","9e982a70600020ca5577ab0f065e5c67"],["/imgs/maven/maven_09_02.png","d42af075e43846d175c85594ca1e5c76"],["/imgs/maven/maven_09_03.png","b1694aa001a0673b52157e56aee272db"],["/imgs/maven/maven_09_04.png","4fff3140b6dfdce1ee4b8a4f341b3e92"],["/imgs/more/more01.png","2697d255b8b713f3c1188acf318fb93a"],["/imgs/more/more02.png","4f004a3fb46ccada81653ebfc6f6b27b"],["/imgs/more/more03.png","613a6dc8e8e1bdd424a566fc29efecde"],["/imgs/more/more04.png","f3425e3249e13698eb9cc6028920d367"],["/imgs/more/more05.png","4851a5d5edc4302cb7ea22c7ea9881d3"],["/imgs/more/more06.png","cb2d1bcb0a90600dc009744782ce3814"],["/imgs/more/more07.png","2bada7ff0177524cd499ca8c7b87cad1"],["/imgs/more/more08.png","8941602e16a419740ddbdcf021559feb"],["/imgs/more/more09.png","5e049bf9a7fa88f416fae33330cdf82b"],["/imgs/more/more10.png","82db4fd4e7daeba76da96dfb076e4fc1"],["/imgs/nodejs01.png","0cabc880418550a790f2c392879adcc2"],["/imgs/nodejs02.png","ccfe226fcad22c003b986ad64f92ec62"],["/imgs/nodejs03.png","dc51da5285f1d5d6063eae0498fc4704"],["/imgs/nodejs04.png","f0bdab4c02af7174288e6d87dae27d5a"],["/imgs/nodejs05.png","cc72195f1658dc562a5b16d81bc763d9"],["/imgs/nodejs06.png","321ff200d0906d61f3d18a99ccd5a06a"],["/imgs/nodejs07.png","82bb4ec677a65cd95da56203fa076e04"],["/imgs/pages.png","411f684917aef17ae8e81db100a5c43e"],["/imgs/shell.png","5ceba2e6f999514be41b730d2ba07aa0"],["/imgs/ubuntu/XMind-1.png","75ec8bf35d148392e84a08ba9ccad191"],["/imgs/ubuntu/XMind-2.png","bc0d47b2904bc33d7d559812fbe3afe3"],["/imgs/ubuntu/hello.py.png","0c26193575fadedc688cd48aa578d921"],["/imgs/目录.png","3d859db538030b97f0764f1535eee3ea"],["/index.html","fc987a3ae26e9c109b52e6dfad63a7b0"],["/jQuery1-0.html","34bc858d5ef32ef1f7656045f5ab3c8f"],["/jQuery1-1.html","62fff14ed56e8b226445721b59af069f"],["/jQuery1-2.html","6c0ccd996b2113f908ac8d99fd8612f3"],["/jQuery1-3.html","d9654165623c049dd1129df4f2f5d590"],["/jQuery1-4.html","9de76553985781b35f750ee9fb4be811"],["/jQuery1-5.html","52dbd0b8d43528a4e8581a1bc565785f"],["/jQuery1-6.html","d5b6271b9ba934e40e9738b34239643d"],["/js/app.js","e0fa0497b67d1b2badf1eed90920b347"],["/js/clicklove.min.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/sitetime.min.js","385d55c19e6c1792b9691ecd32ee1ceb"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","f8705875d39099c826f022d40581822a"],["/js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["/lazyload.svg","f4489d723e9e86c72a1411d56a49229e"],["/maven_00.html","05fc6a8f762d337a1c38430b50746bdc"],["/maven_01.html","447d66e0d44ffe4d5558f604767d4cc3"],["/maven_02.html","e0d1dc86ceeafc91226bc43c25029fd9"],["/maven_03.html","8ec9e33dd7922fb156c8614554f10dfa"],["/maven_04.html","55e31b30fa5a3eb73236c498c0f569a1"],["/maven_05.html","4537636d83804aa253d71b6d7ca131ac"],["/maven_06.html","40cbb57d97dae5f1b6fd24c17ab77a98"],["/maven_07.html","088c2eed84cc4ebb6584f10c9203bfcf"],["/maven_08.html","03cdfb6e16b1547f4c5ca00bed8bae19"],["/maven_09.html","d76b056c29f4895384e53579ca98e83d"],["/page/2/index.html","a132e8b05ab48393d368eaf416aeab44"],["/page/3/index.html","a1a4ccc9cdd3ffa006fce05762c57ba3"],["/page/4/index.html","07a938c2c2d9054d8464276ea248f75d"],["/page/5/index.html","13895344f9edebe491727935c32aab4e"],["/page/6/index.html","cccf9745c993c39a52a2dbbbdad91c8e"],["/page/7/index.html","5b6d11467a22a7bba8f56ddc640fbb7d"],["/page/8/index.html","843e54cd2015981a4fc58ab79065dd31"],["/page/9/index.html","46d83e7675cccaeac32ebd6153e26938"],["/tags/Ajax/index.html","a664f180b266798a9b57485c655a1987"],["/tags/CentOS/index.html","14dceaeea089334355e9e528dbd4f555"],["/tags/Database/index.html","959948fb5e33bfdbaf365e3834d7cb8d"],["/tags/Flask/index.html","9ee9dfaf48b827e61b1adc7fa5e5e3f9"],["/tags/GitHub/index.html","2fd88127b98a8f14fb7b864dee294ead"],["/tags/Gitee/index.html","0ddbb54c2e1e713ebb53fc770ed41cac"],["/tags/Hexo/index.html","1a7f058a39aa1de6c4a79c09d723d038"],["/tags/JDBC/index.html","c68430a6ce2a430906c01cdc4f8ac443"],["/tags/JS/index.html","08b291f229c48644fb34c8b24eb1d6c2"],["/tags/JS/page/2/index.html","2e8dc07dc9886556ccb69ac8f4d08c8d"],["/tags/JS/page/3/index.html","374d2d5ec302780322f1a39bf8c09a4e"],["/tags/JSP/index.html","df9bcc9782f79f3fead2194b522bc0be"],["/tags/Java/index.html","806133f30660eb0c43956405b0c953f6"],["/tags/Java/page/2/index.html","2cfe1e1a2625538a01c02fb572c37ecd"],["/tags/Java/page/3/index.html","f5cdae221a21015ea5eadd2f4ee2d4f8"],["/tags/Java/page/4/index.html","d4ff342477aba4dec8019249f83227c7"],["/tags/JavaSE/index.html","85d1cb1707fff8a02ddfb1572bdfd437"],["/tags/JavaSE/page/2/index.html","ea8a7750922f3d62fe4130790cbc8aba"],["/tags/JavaSE/page/3/index.html","a80ae96c32cc2417eb1441b3c3e7c147"],["/tags/Markdown/index.html","0e595bd4f4d0b806685649369584157d"],["/tags/NodeJS/index.html","c1ee309ba270d1d2aa53062c57acb88c"],["/tags/Python/index.html","106de8832164a59ef0c2a38c54e7f697"],["/tags/Servlet/index.html","29c6b9571a4062206ceca33b7fef651f"],["/tags/Typora/index.html","d69c4f544b2320f82062ecd7ae8410df"],["/tags/Ubuntu/index.html","8a3ba132e77f10e88cfbbc021100f89f"],["/tags/VPN/index.html","612d3256bfb90537e9b47f2b3e0a5f5d"],["/tags/Vue/index.html","4076c4ca12dc45bb561c463379495446"],["/tags/Vue/page/2/index.html","92bc6f16dfad7e82cc8e8eb7cc13f7cd"],["/tags/Web/index.html","0777e6c1de570b9c7b29500e2b3071e7"],["/tags/index.html","452e42fd1eafa009af555b898bebedc6"],["/tags/jQuery/index.html","d18e3944605d6cac984f5db05f301d2c"],["/tags/maven/index.html","26f0fbd8776770a7c399927e3753d75b"],["/tags/npm/index.html","e1a35e8e03dfb1903a87135c77698b1c"],["/ttf/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/ttf/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/ttf/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["/wechat.png","98c80247a70a0f21da6152ecf6299037"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




