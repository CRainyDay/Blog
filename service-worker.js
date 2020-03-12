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

var precacheConfig = [["/404.html","79b31963e5e57cfa092970d73003d2af"],["/Ajax1-0.html","88bc031c61cb451f942deec9e2f639e1"],["/Ajax1-1.html","6a2db356e789066a0363c49c85f99923"],["/Ajax1-2.html","c3282dee0c4d4b65913eebc55c3f05fb"],["/Flask.html","a9ad155b75c8ad25b418c1c3a2ee0e20"],["/Hexo.html","66e0cae495f7607790c335e4ea675879"],["/Hexo2.html","41035cb00707c93db43f2bffea9bcabf"],["/JDBC1-0.html","75179f0de0c6d49254308e90f249858f"],["/JDBC1-1.html","1f97f348622432b66f3f495cce35a0bc"],["/JDBC1-10.html","e2e3f127007fe59fee6154b1f859f75a"],["/JDBC1-2.html","c470f1ce0a003ccb40dd405487caa14b"],["/JDBC1-3.html","9cb7d8c062a0eae9d2685d134a7e24cf"],["/JDBC1-4.html","a7e859e98eb2d5f03a0294b98e09ac5a"],["/JDBC1-5.html","028d386526c9b14ae5684071adb26bbd"],["/JDBC1-6.html","31a91f150769781d692f91895988a1b1"],["/JDBC1-7.html","25608cc5112c482b0be4c650c40b6152"],["/JDBC1-8.html","cbcadd2e6b3d5106a1186191bc730fd2"],["/JDBC1-9.html","d7e2de3b09af57cc07d6477482655227"],["/JDBC2-0.html","12530eb9b20273233e9527907eabf5c4"],["/JS-JSON.html","cdb69ad23649b0ec16383df2091a5794"],["/JS1-0.html","449e2cbe348106505c567b88bdc5b35d"],["/JS1-1.html","4aa3e537a625f0232a1324eaae8ae163"],["/JS1-2.html","3b4291f8c4f6090149669d2a79d420aa"],["/JS2-0.html","179d834bc4887ba30cb94822603a0139"],["/JS2-1.html","729f42782d79fb9a63d4bb33babe51c9"],["/JS2-2.html","286db593a53e48103ac37d5897064b97"],["/JS2-3.html","cbcb4a5eaebc6a15864cf55d736f5c55"],["/JS2-4.html","4582aea2b5697c03ac37301f98a18b55"],["/JS2-5.html","b6923a84fbc60bd2de0ab235e9765367"],["/JSBOM1-0.html","9da9dc0f96b267f4b93d87880c200147"],["/JSBOM1-1.html","92b54d2aae7d9b510e80eac3bcdf9cd9"],["/JSDOM1-0.html","a9462da662f12ca464a8436911e70131"],["/JSDOM1-1.html","87ede9cdb07bf2558a2217ea0bc4e088"],["/JSDOM1-2.html","604332f94a243ff6b0cca609f9007e22"],["/JSDOM1-3.html","efc2e085cd984255bf6d24935ed8a9d9"],["/JSDOM1-4.html","8dcff544ba8ad8bdb9b6fb839d8744b0"],["/JSDOM1-5.html","ecadd439e551e12e212392ed7819b71b"],["/JSDOM1-6.html","e53128b49a58afadfd9d1783b6c2792f"],["/JSclassName.html","bf2d2ae5d42e3db8b4c7abc125a44c23"],["/JavaSE1-0.html","b3d69162f3236a66800ff2eae13d52c3"],["/JavaSE11-Thread.html","054f31729f15a18a8b1c93522b7d4a78"],["/JavaSE12-Class.html","5f88c3c95cf280f31d6fda453849055e"],["/JavaSE13-Reflection.html","5ff07928d6a69104b44fdc8f1b0fe3f8"],["/JavaSE14-Internet.html","6b54da8c4264f103406278a3d7b62ef2"],["/JavaSE2-1.html","f906407bd9e2299f416fc30cfd8b8aab"],["/JavaSE2-2.html","664f483fff230b64ec8f0d775dbcd25a"],["/JavaSE2-3.html","2c9e7508d982ed7699fb38fd29dea64d"],["/JavaSE3-1.html","1400538f198a2904476b683831b0a689"],["/JavaSE3-2.html","0e626bf1e86bded91a375c1744f8c9ce"],["/JavaSE3-3.html","7a34e35e33cd700bb4b22599f1c113f7"],["/JavaSE4-1.html","ec32e434b233d7be2311231c08587884"],["/JavaSE4-2.html","67f369a4293af98ffc7f87c34526e9fb"],["/JavaSE5-1.html","8b8445d4e2b92fa9b39d6259c47b1e79"],["/JavaSE5-2.html","3751819489ef03ab66b2110787d5dcb8"],["/JavaSE5OOP.html","954fa2fd6abd42960459f7e66113bf42"],["/JavaWeb1-0.html","fbace5a047516bbd39aaed4adfd3b2a1"],["/JavaWeb1-1.html","730aea6182f70b84c0dff38a8db03fff"],["/JavaWeb4-0.html","1be27ebb221e60029a3126a1335ef440"],["/Markdown_Typora.html","d19ca20e4206546d132feb69037f805d"],["/NodeJS.html","4712ddd6465273eb965df5912a0ddca6"],["/Python.html","c7cf907b243d6a660eef2b9d530e0dd6"],["/Ubuntu-XMind.html","cf098590a42de8134632904cf6c50cb2"],["/VPN.html","cc099bdffc362cb168c93615740d25de"],["/Vue1-0.html","c92b9ca721c6b8dd8e7475ab3e48705e"],["/Vue1-1.html","fa70f509246f6c7b5b03d4907e87ad6f"],["/Vue1-2.html","8227b84358847c72269316b0eb4467f3"],["/Vue1-3.html","99d998008094653920fe4fbd1cee0658"],["/Vue1-4.html","b8a679cff2853232606826e854817f52"],["/Vue1-5.html","5f5919adade4843e790be0fa40b5af50"],["/Vue2-1.html","c94df45a599f6e446f2e9a2f2bdbaf3d"],["/Vue2-2.html","9c17478e6af8c6fed16e0d530c177cbb"],["/Vue2-3.html","dbfe2ae535f103b5a259374dc6116ca6"],["/Vue3-1.html","1b92e32101b4be00df2e6b347aafc08e"],["/Vue3-2.html","94d1cf080f74c9b883ff14406288c4f0"],["/Vue3-3.html","28f1d49c1ca944351a9f8ad2e52a9f48"],["/Vue3-4.html","ac0fb4251bd6ba3c557083c088c933b0"],["/Vue4-1.html","97e3d24645c016eeb1015cd5d5d26997"],["/Vue4-2.html","97f5f0376752e7b398aacb3ac7ed99c8"],["/Vue5-1.html","9bfcdf9dd90bf1a3dbcab176bfe38138"],["/about.html","365a3bc053099c822868db816f331c35"],["/alipay.png","dfcf79b78e9d0b6500c48a899a66ecc4"],["/archives/2019/03/index.html","f5baeb719db68e8c5d05cdce0a0ac104"],["/archives/2019/03/page/2/index.html","44529582871552c0f2a3b19161d8a0bf"],["/archives/2019/03/page/3/index.html","4843f1f3402a420f006ee0a266acd6cc"],["/archives/2019/03/page/4/index.html","1c3821b38ef0e33172b0de54775f1973"],["/archives/2019/03/page/5/index.html","496f192a160c2f82e34426b8db6c985b"],["/archives/2019/04/index.html","27e1b3e5f373e0e878aa0620ea93831f"],["/archives/2019/04/page/2/index.html","69a37c76efcfb71c8ee56649a7fff617"],["/archives/2019/04/page/3/index.html","746bdfc210e94442a502e7fd3955fea0"],["/archives/2019/04/page/4/index.html","6359541e295dc0332125b047d6913b6d"],["/archives/2019/04/page/5/index.html","09e1d6a40b13844ebcabae870c19680f"],["/archives/2019/05/index.html","c206d79f2cf4a3baa8ee5547630dcd98"],["/archives/2019/05/page/2/index.html","a607d5dd7ee5c08df777383b875c243c"],["/archives/2019/07/index.html","e80627ca6639dfe601ffcb9a0ec5f4d1"],["/archives/2019/08/index.html","e53b8b0e986c248b5173db1a5ebd4431"],["/archives/2019/08/page/2/index.html","a1eba6471ce200e0c7d7c9f15d9aeaa6"],["/archives/2019/08/page/3/index.html","b60b03f2f77132dc0886ac9d9d4d7bda"],["/archives/2019/09/index.html","05e939e5142ae3d48d53bb915be2f327"],["/archives/2019/10/index.html","99ee9da33d1c4fd5e08c8490de82cd7e"],["/archives/2019/index.html","03c3a3e571bf6e624a073abc1c6cb7a3"],["/archives/2019/page/10/index.html","5131edeb35082fd4415368054311ab14"],["/archives/2019/page/11/index.html","8c57b86ef7679c670b44460482ce63a2"],["/archives/2019/page/12/index.html","63e12f4b4212568aa2212404c84d2c4f"],["/archives/2019/page/13/index.html","e159cb86453b2e9094fa06dabec7ed6d"],["/archives/2019/page/14/index.html","5949393de8da2d6ea828b5508fab03b3"],["/archives/2019/page/2/index.html","8928f7d5d26f08bc627303415772a797"],["/archives/2019/page/3/index.html","4c08cfcaccd071c0daee3a5c9716e573"],["/archives/2019/page/4/index.html","0d83729db40a5fef14a1673eedfdf2e7"],["/archives/2019/page/5/index.html","df86a4d45917995317b97706f5a37dc0"],["/archives/2019/page/6/index.html","94701104687719dea45f91b6554888fb"],["/archives/2019/page/7/index.html","7da985ae8ba57d2774bf6f3a0bb38671"],["/archives/2019/page/8/index.html","0bebedec6676611960a6b5644af89448"],["/archives/2019/page/9/index.html","ef5a6e18352edb469eaee8c1342a74ea"],["/archives/2020/02/index.html","cc11f309a5a7c8414cde9994300d39cd"],["/archives/2020/02/page/2/index.html","4999b6fbd32268e790cd4aafeae6c8bb"],["/archives/2020/03/index.html","aeeee4635880cbe15585faa71d0fd82c"],["/archives/2020/index.html","e3f6115efb42f5e2b653c6a388fa5e4b"],["/archives/2020/page/2/index.html","8006172561df083105a12e35d89650c6"],["/archives/2020/page/3/index.html","82dd1b42cb1e2335a62c13a4338a8dd0"],["/archives/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/10/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/11/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/12/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/13/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/14/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/15/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/16/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/17/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/2/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/3/index.html","94e058db5c206d1dbec357e3e4b078a4"],["/archives/page/4/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/5/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/6/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/7/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/8/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/9/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","3aaf568ef4d63c7392ab1804988fd19a"],["/bbs/index.html","fd431e030074e03b6f23a2c98d91f6a9"],["/categories/Hexo/index.html","1ad59b8c7816434355e374f1b34c051d"],["/categories/Java/JDBC/index.html","dd2f40c498fe3edc7227307cc798f76c"],["/categories/Java/JDBC/page/2/index.html","aaa2240376e914ed98eeabc150ddfd98"],["/categories/Java/JavaSE/index.html","242bc97e8eb80e7bceecd59bac2f9c92"],["/categories/Java/JavaSE/page/2/index.html","3dd079a51e168185cc1250224554b5d0"],["/categories/Java/JavaSE/page/3/index.html","a18fef451b3badb35e7b704610aea353"],["/categories/Java/JavaWeb/index.html","1e0a1b48e8a3b1c634b9de36d756a222"],["/categories/Java/Maven/index.html","d6aaf69eb086677f1266b1e13d6a67e1"],["/categories/Java/Maven/page/2/index.html","35a34a0a1989a0f77bbfcabc0cb078fb"],["/categories/Java/index.html","00db4ccd3e5221323bf2773f08d022c5"],["/categories/Java/page/2/index.html","35cf93dd7bb558097c83bfd15ee8243c"],["/categories/Java/page/3/index.html","e197d1c66451426093cacde08d147a57"],["/categories/Java/page/4/index.html","2998dc0aba63cd06de7439502b438304"],["/categories/Java/page/5/index.html","604ff03945affb69c4b955d079090c9f"],["/categories/Java/page/6/index.html","06e4ac61c9a005db7ef7b09c8d726613"],["/categories/Java/page/7/index.html","0eb2a871aaca70a09338bd5352b8cd83"],["/categories/Ubuntu/index.html","18a3589c9cf37fb98678f9be1f27049a"],["/categories/index.html","c582a0f2df19e9919ab9268cf6037bf0"],["/categories/python/Flask/index.html","4130f866194277a274575bc2670fe429"],["/categories/python/index.html","7eb3d17e9cc79d53d7d5b8b5b9fcfade"],["/categories/前端/Ajax/index.html","8462b816638b62e3ac99a0cfacc53223"],["/categories/前端/JS/index.html","39a374e2394c7d9da519b89d04a17f1c"],["/categories/前端/JS/page/2/index.html","fdbe629a53f66259fb7e632b64f4d165"],["/categories/前端/JS/page/3/index.html","cbd6564d8e86e888dea329f4ffa9874b"],["/categories/前端/JS/page/4/index.html","4141b4eecdd933824fece90602452745"],["/categories/前端/Vue/index.html","906501479f333f337504ba7faf2e4f89"],["/categories/前端/Vue/page/2/index.html","152beefefa6e900407b28b4751ecac99"],["/categories/前端/Vue/page/3/index.html","4f3061532f6b6cdee2954457076b83d2"],["/categories/前端/index.html","0e88e7d7caae062cec34390890695b1e"],["/categories/前端/jQuery/index.html","02303ba3d727addde50089f667835a3b"],["/categories/前端/jQuery/page/2/index.html","80fc30c3ba2d10f8ed18c476fb787fa9"],["/categories/前端/page/2/index.html","fdafaf66a2d6819dc767309a7c493c83"],["/categories/前端/page/3/index.html","7d9a4bcdb8a729bbccd8b760d94d8dcb"],["/categories/前端/page/4/index.html","3990aeda4b42404d9feebb3ca29278e3"],["/categories/前端/page/5/index.html","4798a76b6956d96009fb2ab6dcad6246"],["/categories/前端/page/6/index.html","f3310ed909cb970e51c5c1a8aa429c11"],["/categories/前端/page/7/index.html","77b25cd54943ef6f1d621d2ec841271f"],["/categories/前端/page/8/index.html","bc361351d40c21b4763d7bbc0af1f1a1"],["/copy-code.html","16fff10aa0f3a71733306a5085f89be1"],["/css/style.css","67f705803c8315a6c15b61c225630205"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3e39ee4d97afefb5f5ab891aae9fa1b1"],["/hide-code.html","45c69cd5f057eabf6c27c5dfd2310acd"],["/https.png","f79edebc508d8ee905407b64adb7e7da"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/imgs/JS/1.jpg","e9d53f7f4641d89c3f9e8c7bf67cc962"],["/imgs/JS/2.jpg","3312ac939c56cd82255bfa3090a8c08f"],["/imgs/JS/3.jpg","5f73808afb7e9a44c7272e1af6e5b820"],["/imgs/JS/4.jpg","f97e7be2f0f3cc37e20196fd50185464"],["/imgs/JS/5.jpg","759270dc66c99e52e61cc7732503f2fd"],["/imgs/JS/DOMTree.png","c157e75ff8b2803f2e9bd8cc55851037"],["/imgs/JS/Memory.png","d26ca9baa8b3b9ae4aa30cccabadffe0"],["/imgs/JS/Node.png","e69953568f8d939faaff07e4fb89051c"],["/imgs/JS/ajax.png","5e9d8bc348789f1295e4fda684df075a"],["/imgs/JS/debug.png","a61f70fb4b73d20a08fb114266b0a8c1"],["/imgs/JS/prototype.png","9960bf60b09fa3c0fabf359ef51a3f41"],["/imgs/Java/Collection.png","c6b77b100113a188a8547b0a6ef1bc44"],["/imgs/Java/Exception.png","863d7bd108431408fab90ee5413fec26"],["/imgs/Java/IO流.png","c141cd49ecab3834e4140143eae8013c"],["/imgs/Java/JAVA学习路线.png","a5f292a55208c4d7e6caaa6fbd7ccaef"],["/imgs/Java/JDBC_01.png","12a5a1d1c8a0809ea23a7d55983692dc"],["/imgs/Java/JDBC_02.png","3494101bfad2c38d42a61de6638c57ab"],["/imgs/Java/JDBC_03.png","19866dcbe8e375531fdfeb68dcee39e9"],["/imgs/Java/JDBC_04.png","d2658cb15631f1bfce89cd15d6c3a250"],["/imgs/Java/JDBC_05.png","a562e5279501cbf5d8d6aee045d5c5a9"],["/imgs/Java/JDBC_06.png","b0cd235f7acdeffb0191c3a972655cf2"],["/imgs/Java/JDBC_07.png","c9023e9e67b1340aa3cff3db6129418f"],["/imgs/Java/JDBC_08.png","5ccd1ee153909651d4ba7de8199aa6aa"],["/imgs/Java/JDBC_09.png","fdfc73a686a5e414c4462bf27d89b542"],["/imgs/Java/JDBC_10.png","ea9d72bc3b3e644a81915f8e5e0865e1"],["/imgs/Java/JDBC_11.png","8fc6aec41d0fb26a99ef904137431030"],["/imgs/Java/JDBC_12.png","1fa98e4fa2e735ded896567e92225b16"],["/imgs/Java/JDBC_13.png","96cd1258ab7a2790981a6e4ebd74cb60"],["/imgs/Java/JDBC_14.png","047b93082cd0e7ad90e78f9013816fad"],["/imgs/Java/JDBC_15.png","abf213ab81f661c57ae74777cd16440b"],["/imgs/Java/JDBC_2_01.png","dcdf35bc01576887b8e64745c29fbe41"],["/imgs/Java/JDK.png","ad71591c7137c6b7bb24e8b84f4233c5"],["/imgs/Java/JavaSE图解.png","ccc0b2c7888a90eea91101251ec0a717"],["/imgs/Java/Map.png","cdc4eb3bbdf8483e01a1c15d7aadcb03"],["/imgs/Java/Protocol.png","e6c10b0deabc5a58ce0a464945d1babf"],["/imgs/Java/String.png","e35655868d927d791b61e94de9fbae62"],["/imgs/Java/String[][].png","8d07477a038be96392b9af4ab7d4c25b"],["/imgs/Java/String内存.png","cdad705c5a199b85e78d00c3dde631b8"],["/imgs/Java/Thread.png","de2c41be444d3dc299d060a2065b4532"],["/imgs/Java/static.png","b6945f6f75474ffd140c28917ce843d4"],["/imgs/Java/swap.png","da604af002d156b569eae42876fe8e02"],["/imgs/Java/二维数组.png","5b0280abdd56b81a3d40b5d6d9b6ca2f"],["/imgs/Java/体系.png","9fa0fc91f707fe18b8cd306ed15768ac"],["/imgs/Java/修饰符.png","e181921844fcc48ae680948ce9f9754e"],["/imgs/Java/值传递.png","656e2d2786750ac07f5e87f2b62660da"],["/imgs/Java/内存结构图.png","3d9035c11324267f3a247f809ed8290e"],["/imgs/Java/包装类转换.png","f06b40e90af283c49d4a239828cbaa72"],["/imgs/Java/安全问题.png","64d52929ffa94fae128b9bd0c10c49f4"],["/imgs/Java/数组.png","7d6b1e5a6f06c125766b52adaa9f3d49"],["/imgs/Java/类的高级特性总结.png","5c046ddc2487fea7c235ba378f6e316f"],["/imgs/Java/线程的生命周期.png","95f7145d7ec2cde3a697ee5c3a81373a"],["/imgs/JavaWeb/JavaWeb1-0.1.png","a3856fbef7bfc3be80fb1bf403809bd2"],["/imgs/JavaWeb/JavaWeb1-0.2.png","61c9df86cbe2239e92a6603ac9e5a9f9"],["/imgs/JavaWeb/JavaWeb1-0.3.png","404ec7fb9615c5600a170cddb01c0eca"],["/imgs/JavaWeb/JavaWeb1-0.4.png","d73385ff7854047b902ae42fc977f266"],["/imgs/JavaWeb/JavaWeb1-0.5.png","8bb83d5f1ca808d0eb948ae41e6ffcb9"],["/imgs/JavaWeb/JavaWeb1-1.1.png","52adbadad1b703c8d158177dd1300d9e"],["/imgs/JavaWeb/JavaWeb1-1.10.png","b50d180b140058dd509244939b270771"],["/imgs/JavaWeb/JavaWeb1-1.11.png","f31599fd77d00c18a440e4a48d2abc79"],["/imgs/JavaWeb/JavaWeb1-1.12.png","8c6d39f46ae5a685c798157d93c2b6e1"],["/imgs/JavaWeb/JavaWeb1-1.13.png","bb545a22efaeb581c8ab2021224d6edf"],["/imgs/JavaWeb/JavaWeb1-1.2.png","330ce4f7a8bab99edac9e7385d7452f0"],["/imgs/JavaWeb/JavaWeb1-1.3.png","5beaa5e5a17123a6b88280c812a2fc58"],["/imgs/JavaWeb/JavaWeb1-1.4.png","aba5586d4eb72cb743e1066ef3948e1f"],["/imgs/JavaWeb/JavaWeb1-1.5.png","afcfd9c5110c9f832784ccf48fa9ca4e"],["/imgs/JavaWeb/JavaWeb1-1.6.png","6f1bcc0bf0dd643f60c51e19e4b2fee2"],["/imgs/JavaWeb/JavaWeb1-1.7.png","ce42f1ce31017b3e882f38e216d17567"],["/imgs/JavaWeb/JavaWeb1-1.8.png","fdb4f17f0cce9cc61d0582644a1c1076"],["/imgs/JavaWeb/JavaWeb1-1.9.png","852c0d99dbfb2083750cc8348383beeb"],["/imgs/JavaWeb/JavaWeb4-0.1.png","684e7f309780760ca457a1c8a4be1c5a"],["/imgs/JavaWeb/JavaWeb4-0.2.png","c353ed21307ed5e78feb4a241d43695f"],["/imgs/Vue/Vue1-3.1.png","47dbe87ecde7494f1e645812c4b364eb"],["/imgs/Vue/Vue1-5.1.png","864f590b592b3e1dda4a0d365069193b"],["/imgs/Vue/Vue1-5.2.png","007bd19ec40a2ad9dc3661f74cb2ba0a"],["/imgs/Vue/Vue2-1.1.png","d37f9815348d120164c81f54a45a59e6"],["/imgs/Vue/Vue2-1.2.png","bf3162a8f37b62db4ad1d8969e688dd9"],["/imgs/Vue/Vue2-1.3.png","52195034c7171c26e5c3d2b6b58b7c49"],["/imgs/Vue/Vue2-1.4.png","ece33c6965cc2eca7c4ca6292a7b5828"],["/imgs/Vue/Vue2-1.5.png","25027297cf1ab8ad61fc0a9e842c7499"],["/imgs/Vue/Vue2-2.1.png","250fe60e7603f6a860f305d2a9d681d1"],["/imgs/Vue/Vue2-2.2.png","4874518ac147e704fafc950ba43f0548"],["/imgs/Vue/Vue2-2.3.png","2b3e67fa853fd70925d2ac96a13c306d"],["/imgs/Vue/Vue4-1.1.png","1ac4829ed3508fb9f4158153803a7943"],["/imgs/Vue/Vue5-1.1.png","10d5c4023b8e00d473b0450d4738ea56"],["/imgs/Vue/Vue5-1.2.png","9cb46f3ad04fa72b0bce1d2bee05325c"],["/imgs/conf1.png","770e6e29fb2d51a9b9b2d51f2671d094"],["/imgs/conf2.png","9536f97e0c1160207f81c9bbe7bd5128"],["/imgs/conf3.png","3796fd78f5a2aef9a209ed048a5fa24f"],["/imgs/fold.png","cd489b2f86b0c692dae11d9827180a50"],["/imgs/gitee.png","0cf41aa37a46eb736d31f34e9749188b"],["/imgs/github.png","b8cb88af3cfc76058351c127373a858f"],["/imgs/github02.png","76459ee8c5377b16e94401ae7439467d"],["/imgs/github03.png","ba54b82eecce82ca09ff75f290e51acc"],["/imgs/github04.png","54b8de124f8df866653fcb70a0d8d61f"],["/imgs/github05.png","984a03f8276f472488b588ce440c43f6"],["/imgs/github06.png","f708db12b1eb832e1cbb94af4514940e"],["/imgs/github07.png","580ddef37d914fcf955d52e7e65960ea"],["/imgs/hexo.png","1edd6703b0d3b456c73c884bab2bd459"],["/imgs/maven/maven_00_01.png","0d20ed96462c1febef2e058976154537"],["/imgs/maven/maven_00_02.png","521f3ccd1b4debf9489d31e7baa33d90"],["/imgs/maven/maven_01_00.png","ef7926e41b8d5ddba34a94c29b7acd66"],["/imgs/maven/maven_01_01.png","8a4b7a038643dcec9794df1dddd851c5"],["/imgs/maven/maven_01_02.png","dc6ff1a28f120c0570abc7dcb8c74e64"],["/imgs/maven/maven_01_03.png","9c3f2e992105f17faf3fa07f8986972e"],["/imgs/maven/maven_01_04.png","ccb3f62b42348399d6657f9b047975f6"],["/imgs/maven/maven_01_05.png","e21ee114a840c257c08f278fbb05be09"],["/imgs/maven/maven_02_01.png","2bf56f43dc3f2dce89961cedeef25008"],["/imgs/maven/maven_02_02.png","efeda0a806c223c87e9dc8f37d47639b"],["/imgs/maven/maven_03_01.png","31a47aad2b9d12b2a1b94c2f86acfb86"],["/imgs/maven/maven_03_02.png","9044e2571e39020c4460512cd11e6d69"],["/imgs/maven/maven_03_03.png","1edddd4d565912ca6d7d3e5aba3a50e2"],["/imgs/maven/maven_03_04.png","d6d8c05fc68531fd86d7194bba6b6046"],["/imgs/maven/maven_04_01.png","d7669f69e7085e1b32c3ef33972dfff2"],["/imgs/maven/maven_04_02.png","34f449e798bc7a2ecc374f6b17b9826e"],["/imgs/maven/maven_04_03.png","2b34bf255bb2a1f80ac968c8c82c7ca6"],["/imgs/maven/maven_04_04.png","3415811658176a12471427c9a8a7d436"],["/imgs/maven/maven_05_01.png","5dec07efcdb2936bbb425c010eb90c96"],["/imgs/maven/maven_05_02.png","fd2489e807df80963609004f137b9da4"],["/imgs/maven/maven_05_03.png","8793340120fc75a51b467e84c9fd32d0"],["/imgs/maven/maven_05_04.png","15f5436885243e1d66e88913035f4b8a"],["/imgs/maven/maven_05_05.png","479cc852fe856d0a4de8641c74614e55"],["/imgs/maven/maven_05_06.png","397988188f3948a582ab540d734ea2d6"],["/imgs/maven/maven_05_07.png","ad71a3fdc94cbdaf9cda0b70c3373089"],["/imgs/maven/maven_05_08.png","670065d5874eb2719d3092b3f8a83874"],["/imgs/maven/maven_05_09.png","8de79de135066316e6b808f4098f1dab"],["/imgs/maven/maven_05_10.png","e45a6e3d0a314d7f1321f577cdb013c1"],["/imgs/maven/maven_05_11.png","9f4601b6fd581579853d4343a69ed1ad"],["/imgs/maven/maven_05_12.png","7196c566813f56adae2c9e69ae144c13"],["/imgs/maven/maven_05_13.png","20a7aba354779f30d5632e649f9f9673"],["/imgs/maven/maven_05_14.png","116d7909f3c50a82cda7e8bc67f6cd3a"],["/imgs/maven/maven_05_15.png","64fe27781391ef5364e23ddc9a85d49c"],["/imgs/maven/maven_06_01.png","63a9cc0e564b1c55b0ac16f76f1ded53"],["/imgs/maven/maven_06_02.png","dbe365cfadfe29334f8f1629d8d4dc06"],["/imgs/maven/maven_06_03.png","2e9d5a9923d27a06c8b1d474dc3d2b29"],["/imgs/maven/maven_06_04.png","44b274eb82a22a993ee0e1a829fd4faf"],["/imgs/maven/maven_06_05.png","7ba49a4b7e77a1ed6d96e12ebac38e7e"],["/imgs/maven/maven_06_06.png","d61f51dfea2f7a17a7b76109178d9edf"],["/imgs/maven/maven_06_07.png","f54373f61e960ced9e636764c316105e"],["/imgs/maven/maven_07_01.png","0ee01053e9f3cd3d7371c1c919326dc3"],["/imgs/maven/maven_07_02.png","970fa8d2f9714d04f820266e59feb825"],["/imgs/maven/maven_07_03.png","1dfe5e7df177e377f02002b0b2d0cb4b"],["/imgs/maven/maven_07_04.png","9716c08af749b33f954dc591dd76c56b"],["/imgs/maven/maven_07_05.png","73b80e82d7d4613f8ab4c0bcd6eeed57"],["/imgs/maven/maven_07_06.png","def5c7c1303fbd94dcd52f1a20a09531"],["/imgs/maven/maven_08_01.png","a4a8e9854fa8831860250340065abbd8"],["/imgs/maven/maven_08_02.png","6d5f0b5f5e83c18bc8795d6b99e2648f"],["/imgs/maven/maven_08_03.png","b17fcbb238e2ec6e6c576b467f5d0ee9"],["/imgs/maven/maven_09_01.png","9e982a70600020ca5577ab0f065e5c67"],["/imgs/maven/maven_09_02.png","d42af075e43846d175c85594ca1e5c76"],["/imgs/maven/maven_09_03.png","b1694aa001a0673b52157e56aee272db"],["/imgs/maven/maven_09_04.png","4fff3140b6dfdce1ee4b8a4f341b3e92"],["/imgs/more/more01.png","6735f432b2ef093a7637d4d8a4469a99"],["/imgs/more/more02.png","0661af1a2efa11f3a824f5bc2858725f"],["/imgs/more/more03.png","e64fc8e2a97ba91635e1aaf56d5a22ee"],["/imgs/more/more04.png","21915857758d24d3690391c8a4c2caf8"],["/imgs/more/more05.png","d1322a42ddb45fe331fc8c765cc2b625"],["/imgs/nodejs01.png","0cabc880418550a790f2c392879adcc2"],["/imgs/nodejs02.png","ccfe226fcad22c003b986ad64f92ec62"],["/imgs/nodejs03.png","dc51da5285f1d5d6063eae0498fc4704"],["/imgs/nodejs04.png","f0bdab4c02af7174288e6d87dae27d5a"],["/imgs/nodejs05.png","cc72195f1658dc562a5b16d81bc763d9"],["/imgs/nodejs06.png","321ff200d0906d61f3d18a99ccd5a06a"],["/imgs/nodejs07.png","82bb4ec677a65cd95da56203fa076e04"],["/imgs/pages.png","411f684917aef17ae8e81db100a5c43e"],["/imgs/shell.png","5ceba2e6f999514be41b730d2ba07aa0"],["/imgs/ubuntu/XMind-1.png","75ec8bf35d148392e84a08ba9ccad191"],["/imgs/ubuntu/XMind-2.png","bc0d47b2904bc33d7d559812fbe3afe3"],["/imgs/ubuntu/hello.py.png","0c26193575fadedc688cd48aa578d921"],["/imgs/目录.png","3d859db538030b97f0764f1535eee3ea"],["/index.html","9305d5fedbc61d061f81d417845ae6ec"],["/jQuery1-0.html","d3091622c9949e1b96ab590a35b9cd97"],["/jQuery1-1.html","6b6ab5081ec1096bb8894eae9bf4dc79"],["/jQuery1-2.html","247f67bec6e325e2c7ecf251ea95b12a"],["/jQuery1-3.html","02fc35605ed7d5b92574215355154503"],["/jQuery1-4.html","b07d592cc02a5eb3e5a438d2d4d354fe"],["/jQuery1-5.html","c91f37e3e6c99ef0c21c8d7cfc961944"],["/jQuery1-6.html","92aea51babb6e4c1d2bdb1632b97d27c"],["/js/app.js","91c985f35ba8c0452881db15766fc0fd"],["/js/clicklove.min.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/sitetime.min.js","385d55c19e6c1792b9691ecd32ee1ceb"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","f8705875d39099c826f022d40581822a"],["/js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["/lazyload.svg","f4489d723e9e86c72a1411d56a49229e"],["/maven_00.html","9caa68cd228268be2ea38b797138c227"],["/maven_01.html","de0e724f228e2baa867ce502feb39306"],["/maven_02.html","65ec2b77edb14ebb387f80f71a7c9b4e"],["/maven_03.html","a24582554a02d675813a7e324c5810a1"],["/maven_04.html","13391e30828472f5c43f889cddc9acbb"],["/maven_05.html","a88b96a9b950b40ba80a5473e171d0c4"],["/maven_06.html","a575a6c3982082db3b6e410d429c4675"],["/maven_07.html","1bdb1777ba6f6dcf71a8f4109322520b"],["/maven_08.html","b9f13dc8fb2ad122de0434512ac3a0c8"],["/maven_09.html","70a3f1cdf29dde4d0f2270a9daeeda80"],["/page/10/index.html","88ee248b7148a49d00a720fdb8ba684a"],["/page/11/index.html","9f992862053eebc398c1fc92fa080728"],["/page/12/index.html","62293f1a710208065c1d324a83985e22"],["/page/13/index.html","de0de7f96852f2987b7ba804ecc3094d"],["/page/14/index.html","cb596812aa2a037cb78432dd977aa05b"],["/page/15/index.html","2283ba8a8659d2969ae6e2a8234e66ad"],["/page/16/index.html","13ad839f94ccfa357d37d5c8a92a11d6"],["/page/17/index.html","9ff3f52a58476c27a1a4a95534bb00ce"],["/page/2/index.html","c22c134f6d3305a6438217411f736898"],["/page/3/index.html","e47bcf0aea370a42cc47670b4c93bf33"],["/page/4/index.html","3640839bda387f89b869bdb0c0981c62"],["/page/5/index.html","dd0da1b7d15f1a3a6750ee8534c9ea65"],["/page/6/index.html","660ab3de4f8a59689caec0002b937906"],["/page/7/index.html","ea56c3ce342fe2b223c7ceb710794e07"],["/page/8/index.html","2ad9e07509a36a6f4c2bce33b83e2abe"],["/page/9/index.html","1853867cb17f522c83c1676a182a9271"],["/tags/Ajax/index.html","9949012b4925530065848ff19a3c1dce"],["/tags/CentOS/index.html","7529610a909acb91e4b5e36d37f90ecc"],["/tags/Database/index.html","f8df215177b4ed1709f67a586b9a0218"],["/tags/Database/page/2/index.html","b19ec62a1099d915e9159de66addce03"],["/tags/Flask/index.html","44137222c2e48e5a50782aa0f4bb89db"],["/tags/GitHub/index.html","f646655f0904bf43a59a888bfff7633a"],["/tags/Gitee/index.html","32fc80d5a529d01efd81f4c618b096ac"],["/tags/Hexo/index.html","7c11aacacf7e39ee951a037468ddad6e"],["/tags/JDBC/index.html","a00921e58b38701dd97ea4b571510693"],["/tags/JDBC/page/2/index.html","fdc37fcea231e1555da08390ad3b8ff4"],["/tags/JS/index.html","3cc7b8f13101bc9d10cbd5da0c740d39"],["/tags/JS/page/2/index.html","b0ce7a299ea83cb484174a617aa83769"],["/tags/JS/page/3/index.html","1a48eb3e68693c4f809ff68004a2658c"],["/tags/JS/page/4/index.html","c156b81c50583ce9c920a4e271fd7bcc"],["/tags/JS/page/5/index.html","8044ee719a52d1a1609f8bd1bf31e039"],["/tags/JS/page/6/index.html","4386b013a4faca5fcbb61c6d0d1cb816"],["/tags/JSP/index.html","52ec580304ff95f98039baa750b9bdc5"],["/tags/Java/index.html","48dd1fcc0f34c35aad09be3246b25cfc"],["/tags/Java/page/2/index.html","3822580d6776ac2aaa663b687c4f2bcf"],["/tags/Java/page/3/index.html","9b859b6631ce3f4b903983e4fa0c45b2"],["/tags/Java/page/4/index.html","2aa68260624ab3461db2aa6e845ee86d"],["/tags/Java/page/5/index.html","3e2cd1b8a573e21adb94ddb5aa773208"],["/tags/Java/page/6/index.html","9c84bddf3f93db0bcd584e52fff10af1"],["/tags/Java/page/7/index.html","377f6da8be7f0df53a0f11785995c0b4"],["/tags/JavaSE/index.html","54a58df7466c98bc3812281992dffdf0"],["/tags/JavaSE/page/2/index.html","cfd1f75607ec32d6f26a7e90a255fe29"],["/tags/JavaSE/page/3/index.html","f4646cdf93a2090f30912e8c2fffb26a"],["/tags/JavaSE/page/4/index.html","ce4763688de5bf31050488523a8446ac"],["/tags/JavaSE/page/5/index.html","78529b44e4447c483740753836351ebc"],["/tags/Markdown/index.html","5d73b3d805b188543c9662a37e4c38f7"],["/tags/NodeJS/index.html","d6fb5219439cd789b43f0532afc66a27"],["/tags/Python/index.html","22cb0f3748da295a8f0f51400b7b3bbd"],["/tags/Servlet/index.html","65b905231af316a64e79ca9bf70b7d46"],["/tags/Typora/index.html","75a8967def4e610ed4bd7f6f8c0aa9de"],["/tags/Ubuntu/index.html","396c882b95e9af27f83fadfdca598749"],["/tags/VPN/index.html","c49f4786a86406de2c5f745ed6084451"],["/tags/Vue/index.html","9ca44d22c809488a8e1e75dfc192f851"],["/tags/Vue/page/2/index.html","218a40861c85be1a2a9e357af231b9b7"],["/tags/Vue/page/3/index.html","d3f3ba3d43418a52161a97df20bfc739"],["/tags/Web/index.html","2effb4a0d7766984e895c2f71ad04da7"],["/tags/index.html","0bd4df59bcc03cdc8e8b6f40e6dcf8ff"],["/tags/jQuery/index.html","eccc4bfd691519b93db09fc96b524b5f"],["/tags/jQuery/page/2/index.html","aeafc7fe7188941f11cf7c361f9e6407"],["/tags/maven/index.html","ffa2edd527345b63940eb308832a03d2"],["/tags/maven/page/2/index.html","67446284e4923e3fe8996fe1908cc4f0"],["/tags/npm/index.html","5b0297697b9c66b08a4655404732a691"],["/ttf/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/ttf/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/ttf/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["/wechat.png","98c80247a70a0f21da6152ecf6299037"]];
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




