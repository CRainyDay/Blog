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

var precacheConfig = [["/404.html","79b31963e5e57cfa092970d73003d2af"],["/Ajax1-0.html","3cf261614376fe6a029daccd25553819"],["/Ajax1-1.html","3eb96eef9d8519d2c5592d30b1bd051e"],["/Ajax1-2.html","bd588e1ecfcdc95a43e91aef4a40f196"],["/Flask.html","437a53c72070ad39128b4671173a00fa"],["/Hexo.html","5aa96daf78ebbec376e64633468cd60b"],["/Hexo2.html","85adfde9f769bf6543aa779219d4cfb6"],["/JDBC1-0.html","bde713092e51465b862893cdc2ef8f64"],["/JDBC1-1.html","ebfb6bc27687bfb261854d6d066b3be5"],["/JDBC1-10.html","957034392cdb0ab6e7cdc56406bf2883"],["/JDBC1-2.html","56f7420cba83f5eb920933a811bc6f08"],["/JDBC1-3.html","be8df67dd1fe64721a99ee99ec350231"],["/JDBC1-4.html","d0f21a8f3097048df1ad96b68e75a12c"],["/JDBC1-5.html","a050dcc7f712bea1720ce65629e33983"],["/JDBC1-6.html","a78bab57b9dc2a4b1de5870f639e9f81"],["/JDBC1-7.html","cf41d5839e0ee4ad700740fa27179929"],["/JDBC1-8.html","bd2fe099e33c34731934d4b0f9b406d2"],["/JDBC1-9.html","4751beb82ecc3f2cca62c524d24d9448"],["/JDBC2-0.html","062d39a02007422a90776ae54817f5fa"],["/JS-JSON.html","c9b2a2cf1973c5e0547bf32d021778ef"],["/JS1-0.html","f060d6aec03d3b6a6b1a40326c1cf663"],["/JS1-1.html","e7946361e64d8982b9d093e3496d4296"],["/JS1-2.html","1e9719cd343ba8d1ad2231de23b9175d"],["/JS2-0.html","0518bc9b5dff017c69395018f045417f"],["/JS2-1.html","ccc0842ba0c3c4ba1edbd6fdf3cfde99"],["/JS2-2.html","81b82302daa88c9e7d3501870b440d49"],["/JS2-3.html","2569fc873e7489e20b89c9df4878ea9c"],["/JS2-4.html","7f7e63d5d7d914e878622156e60c6be1"],["/JS2-5.html","c6adcefe5d4ef8365936e601fa53f0b4"],["/JSBOM1-0.html","a17adce3ab958a15f4fd195cddb4b589"],["/JSBOM1-1.html","2a8e383f7adcce93a0dcdaa29c6687d3"],["/JSDOM1-0.html","fb1adeb6c7b7f89d1c30c297584fefc4"],["/JSDOM1-1.html","eaf46c685f6f393568943d3ed088ba00"],["/JSDOM1-2.html","8b01f0650f42523aca8f515c14b59f9f"],["/JSDOM1-3.html","598580c587a2a3b208fd432762bc3b0c"],["/JSDOM1-4.html","f794e6763f50ed914c5fc3355dd6a5d1"],["/JSDOM1-5.html","a606edfaef64896d64224a92f4f4b96d"],["/JSDOM1-6.html","173d8cdc8c022ec4f7e3e0428925b022"],["/JSclassName.html","1f2ce25b19b1ad932e2aa8aa09e4ada3"],["/JavaSE1-0.html","ed52d75c2b539bccb8cae88440937af9"],["/JavaSE11-Thread.html","994858b4aba9c0aef8e6ef1ac2225286"],["/JavaSE12-Class.html","f42de442eb27f19b77c81b28fdff9a3b"],["/JavaSE13-Reflection.html","c354797ccdfe1743611dc7533fb37e7c"],["/JavaSE14-Internet.html","de3a4f54491928127272f36e27f89b25"],["/JavaSE2-1.html","b8f6547119fc3aac37cb7d5f6791d87d"],["/JavaSE2-2.html","f53b0cda91b65a26796fec64d2cb65e6"],["/JavaSE2-3.html","9fc34c0d2a1db8e6ce14b77395dce239"],["/JavaSE3-1.html","6fcbd8b6a2d5e118d86b274e6da56e8d"],["/JavaSE3-2.html","3b6f4dd0b2ce16c4097d0cf39395628d"],["/JavaSE3-3.html","87eb976084a33025aa7da34d4b99b872"],["/JavaSE4-1.html","e987bd4f9117e0c7a94d6d2694f88e58"],["/JavaSE4-2.html","b751c1b5d3743b9d5ab255644fe41b2b"],["/JavaSE5-1.html","0fc36cae40bd6a7e192ba809dd7040a1"],["/JavaSE5-2.html","1fd7fa8ccd7a360bdd15baf7d2a4a740"],["/JavaSE5OOP.html","23c26b0d95917eb2f6d46fe4667741e0"],["/JavaWeb1-0.html","295a449517187fa7ba71b52e14dc2e49"],["/JavaWeb1-1.html","d1a0cd7bbb5a74f72db94212e83fb8b0"],["/JavaWeb4-0.html","bb67ce3736ce3a16072f2c42c7cdd9eb"],["/Markdown_Typora.html","034381e4258920e30944600a3d24fed0"],["/NodeJS.html","67b4355bea66badd6b825bf6c0ebc5cd"],["/Python.html","e4c87539dd8c6504d9b5584bdafae90e"],["/Ubuntu-XMind.html","4d04c2365fdcf595e9e6e48e63c27bec"],["/VPN.html","1b63eb4a79d5728d0fb7df31bcdae81f"],["/Vue1-0.html","39747d070c9ffa1d963ff870b2da01d0"],["/Vue1-1.html","b8d17fbafb3eb30621c3ab57aa349caf"],["/Vue1-2.html","53de047e63e874f689cff126756ed75a"],["/Vue1-3.html","352c2b70927c11e661c8524251102dc5"],["/Vue1-4.html","65219e25d5fac6dd9c77ad4cd4422bd4"],["/Vue1-5.html","b9d7a1335823140e5152ae7477f27edb"],["/Vue2-1.html","5ff4de5dcb4afd9b01ec327406e423ed"],["/Vue2-2.html","7bb43b86d29570f211b4a86a17a0bfd3"],["/Vue2-3.html","d22f5ebe21b56b4517ecb0e325158c2c"],["/Vue3-1.html","eb8cd129d004d52ea26bbf4428770a56"],["/Vue3-2.html","74f85900bb0c48f0f3ad25cdb7c741fc"],["/Vue3-3.html","46168ffb1442b8a7638869b6f8a8f92c"],["/Vue3-4.html","d3357eb0f6c66aa4f05f9d91ae3a7f16"],["/Vue4-1.html","26e7c4935117bd12260bb7f7ee75bb18"],["/Vue4-2.html","1136a5884c883c09f294c6213a9b7b3d"],["/Vue5-1.html","0bafa4e6ddbf4f4268fa5bf165ee5142"],["/about.html","365a3bc053099c822868db816f331c35"],["/alipay.png","dfcf79b78e9d0b6500c48a899a66ecc4"],["/archives/2019/03/index.html","d830fe2f68811fe3156e57c678a9892d"],["/archives/2019/03/page/2/index.html","a154536deeb7cced44a56c428458bc0b"],["/archives/2019/03/page/3/index.html","f5071b8f8ac82c2c9a3ab45d3dbfbe00"],["/archives/2019/03/page/4/index.html","bcd920f6c2c5bad78ac1dd35b0be2897"],["/archives/2019/03/page/5/index.html","8c1bd0ebc42bc3ad11ecad252ee0e30c"],["/archives/2019/04/index.html","c4bbdd153f1154247266eea0cd96d7b8"],["/archives/2019/04/page/2/index.html","c32a6b0e8967dff001f51aaeee09bfb3"],["/archives/2019/04/page/3/index.html","9652e7abd1fc1901c1dfa553830ebd64"],["/archives/2019/04/page/4/index.html","c10be797acfb043af7e9064752712361"],["/archives/2019/04/page/5/index.html","6a4b8b9f18bf78f0cfa5cd66a82700f7"],["/archives/2019/05/index.html","8fd3946bdb74b0abd27bec3f1b3e5416"],["/archives/2019/05/page/2/index.html","c6aa6d00574e3db0807d6ba1b58c0307"],["/archives/2019/07/index.html","945a258fb60ec104d5bb4d0f69a5920d"],["/archives/2019/08/index.html","2426c2c2d4f920cba9d1c7d2208b1c9c"],["/archives/2019/08/page/2/index.html","f72d287992cc2b2a8d09ffb037df5ad8"],["/archives/2019/08/page/3/index.html","36847fed256c5802306ae6837c151e53"],["/archives/2019/09/index.html","7b8c07b615c9fed1411a9ab3ecf30fd0"],["/archives/2019/10/index.html","f0e2c4143a0f3516422c7a6e5819e586"],["/archives/2019/index.html","9023f2f754c4cb43e01f03570b1690b8"],["/archives/2019/page/10/index.html","6355dbae87490a82321e5b48afa6f3dc"],["/archives/2019/page/11/index.html","b84a29278f63dc67d1133243fb7109aa"],["/archives/2019/page/12/index.html","f7e4bc5b42a090bf526975a83347f753"],["/archives/2019/page/13/index.html","c72e2edb498d6f9556f8c19456268aac"],["/archives/2019/page/14/index.html","1385c81e9de241adf44ac8cf4bf14789"],["/archives/2019/page/2/index.html","a52b93fa16549de9c5fba2766059006d"],["/archives/2019/page/3/index.html","060ff009f5ec8e1ffa7e930ae0a8480e"],["/archives/2019/page/4/index.html","4bfd49c82308f99752cd74391ebddebe"],["/archives/2019/page/5/index.html","ca71e10459840928fc9c654e6d0572f1"],["/archives/2019/page/6/index.html","4ea2436493d53b704c2a54702365bd60"],["/archives/2019/page/7/index.html","282a111d834d3b4e419fbe347b311a3d"],["/archives/2019/page/8/index.html","22c698901042ce92de0b308c1bf3339d"],["/archives/2019/page/9/index.html","53eb87cded520c2ff59258f9f48d4f97"],["/archives/2020/02/index.html","d8403c9993116a8de584767cc003e297"],["/archives/2020/02/page/2/index.html","ff5f070443ff9e8fd7462edd2cbd1908"],["/archives/2020/03/index.html","0939a226cdc0c3e7449af4bc82805ec8"],["/archives/2020/index.html","35c9bc7de904cf65d61649dedae8e55a"],["/archives/2020/page/2/index.html","aec6bbfd5130c6a919bad6d5cf9b1be3"],["/archives/2020/page/3/index.html","30566a61bba076c5bf0106789af3de36"],["/archives/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/10/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/11/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/12/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/13/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/14/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/15/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/16/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/17/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/2/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/3/index.html","94e058db5c206d1dbec357e3e4b078a4"],["/archives/page/4/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/5/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/6/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/7/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/8/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/archives/page/9/index.html","feb4d6d5a5111fee5913c0e5d162ead5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","3aaf568ef4d63c7392ab1804988fd19a"],["/bbs/index.html","fd431e030074e03b6f23a2c98d91f6a9"],["/categories/Hexo/index.html","6fa2d085d9ba6ec42d6f69b282975e43"],["/categories/Java/JDBC/index.html","c273b4c384fd3547726c0703e55f165e"],["/categories/Java/JDBC/page/2/index.html","66182110552c45b3da5a63b4983153b0"],["/categories/Java/JavaSE/index.html","d8edd22e76339d9c3b18f6cc7be8535b"],["/categories/Java/JavaSE/page/2/index.html","5bdb02b88ef12721b173793fc38a373a"],["/categories/Java/JavaSE/page/3/index.html","56dd0f7e7ed6aa59bd6b9f58a2ff6ba4"],["/categories/Java/JavaWeb/index.html","4906239dc912d1aefe863f9c119db91a"],["/categories/Java/Maven/index.html","ad9d98fc4340b443ada9adf61b9cdf85"],["/categories/Java/Maven/page/2/index.html","887199246ebc24558e89ee6876970d69"],["/categories/Java/index.html","644b346689dd419355b5ccca37e5a2f6"],["/categories/Java/page/2/index.html","7d17a9818cbae92b9d1395c7fa2334ef"],["/categories/Java/page/3/index.html","f512862e760a9ee2bceb508dd415c72c"],["/categories/Java/page/4/index.html","19be2dd300d79bb3bdcebc09e817c26d"],["/categories/Java/page/5/index.html","e328d5633824e9895a7489fa4f33922c"],["/categories/Java/page/6/index.html","e7c0a19a5aef08dcc3f84587a7300d50"],["/categories/Java/page/7/index.html","00a256b611837b9df3781fbaf6da63e4"],["/categories/Ubuntu/index.html","f1d286f7755f736a48faf68d5abb5d8b"],["/categories/index.html","c582a0f2df19e9919ab9268cf6037bf0"],["/categories/python/Flask/index.html","f32c9b5dcb4dc79ce3b00c2310b8e637"],["/categories/python/index.html","6ef40c691d7537a216e14232493edaee"],["/categories/前端/Ajax/index.html","b6c08ba9ecdf6434cb2193a9cbfa6254"],["/categories/前端/JS/index.html","f76a0a07172a1cff3512167649bbe870"],["/categories/前端/JS/page/2/index.html","380c450080cf42074789f0993dad28c5"],["/categories/前端/JS/page/3/index.html","c00edb92607e5d35bbff64949f3405f2"],["/categories/前端/JS/page/4/index.html","c66f5d24fcbc562f0e4bb5a599204f6e"],["/categories/前端/Vue/index.html","d030735ecb58c0854f5c304af8877730"],["/categories/前端/Vue/page/2/index.html","2a1c52409334a5f641584addc55cd192"],["/categories/前端/Vue/page/3/index.html","36ec08393e1db78d043429d357ff5ed1"],["/categories/前端/index.html","d95275764ddbf2ed77641865162424c4"],["/categories/前端/jQuery/index.html","c43b3ef06fa041739bfa8477ea96abce"],["/categories/前端/jQuery/page/2/index.html","2939cbf2a68763dad6068c5fa845d4cb"],["/categories/前端/page/2/index.html","34ce161e0f3e89eae173523fdfbf463c"],["/categories/前端/page/3/index.html","73fd304db5c15357d6cca2959e984eb4"],["/categories/前端/page/4/index.html","d1327ff911914a3cb2e43f17ed5bbfde"],["/categories/前端/page/5/index.html","c1d96b44e0033df661f31278fe91b718"],["/categories/前端/page/6/index.html","48a077127568be30b739374078ff25db"],["/categories/前端/page/7/index.html","748f3c9cd3dcd4afb244a82b62979c94"],["/categories/前端/page/8/index.html","2d63f023d17ac50cc47664f5f863350b"],["/copy-code.html","9b07a50466d9c597bd9f905a3514e807"],["/css/style.css","67f705803c8315a6c15b61c225630205"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3e39ee4d97afefb5f5ab891aae9fa1b1"],["/hide-code.html","b772c20f211e0f4fadb7559cc35e2360"],["/https.png","f79edebc508d8ee905407b64adb7e7da"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/imgs/JS/1.jpg","e9d53f7f4641d89c3f9e8c7bf67cc962"],["/imgs/JS/2.jpg","3312ac939c56cd82255bfa3090a8c08f"],["/imgs/JS/3.jpg","5f73808afb7e9a44c7272e1af6e5b820"],["/imgs/JS/4.jpg","f97e7be2f0f3cc37e20196fd50185464"],["/imgs/JS/5.jpg","759270dc66c99e52e61cc7732503f2fd"],["/imgs/JS/DOMTree.png","c157e75ff8b2803f2e9bd8cc55851037"],["/imgs/JS/Memory.png","d26ca9baa8b3b9ae4aa30cccabadffe0"],["/imgs/JS/Node.png","e69953568f8d939faaff07e4fb89051c"],["/imgs/JS/ajax.png","5e9d8bc348789f1295e4fda684df075a"],["/imgs/JS/debug.png","a61f70fb4b73d20a08fb114266b0a8c1"],["/imgs/JS/prototype.png","9960bf60b09fa3c0fabf359ef51a3f41"],["/imgs/Java/Collection.png","c6b77b100113a188a8547b0a6ef1bc44"],["/imgs/Java/Exception.png","863d7bd108431408fab90ee5413fec26"],["/imgs/Java/IO流.png","c141cd49ecab3834e4140143eae8013c"],["/imgs/Java/JAVA学习路线.png","a5f292a55208c4d7e6caaa6fbd7ccaef"],["/imgs/Java/JDBC_01.png","12a5a1d1c8a0809ea23a7d55983692dc"],["/imgs/Java/JDBC_02.png","3494101bfad2c38d42a61de6638c57ab"],["/imgs/Java/JDBC_03.png","19866dcbe8e375531fdfeb68dcee39e9"],["/imgs/Java/JDBC_04.png","d2658cb15631f1bfce89cd15d6c3a250"],["/imgs/Java/JDBC_05.png","a562e5279501cbf5d8d6aee045d5c5a9"],["/imgs/Java/JDBC_06.png","b0cd235f7acdeffb0191c3a972655cf2"],["/imgs/Java/JDBC_07.png","c9023e9e67b1340aa3cff3db6129418f"],["/imgs/Java/JDBC_08.png","5ccd1ee153909651d4ba7de8199aa6aa"],["/imgs/Java/JDBC_09.png","fdfc73a686a5e414c4462bf27d89b542"],["/imgs/Java/JDBC_10.png","ea9d72bc3b3e644a81915f8e5e0865e1"],["/imgs/Java/JDBC_11.png","8fc6aec41d0fb26a99ef904137431030"],["/imgs/Java/JDBC_12.png","1fa98e4fa2e735ded896567e92225b16"],["/imgs/Java/JDBC_13.png","96cd1258ab7a2790981a6e4ebd74cb60"],["/imgs/Java/JDBC_14.png","047b93082cd0e7ad90e78f9013816fad"],["/imgs/Java/JDBC_15.png","abf213ab81f661c57ae74777cd16440b"],["/imgs/Java/JDBC_2_01.png","dcdf35bc01576887b8e64745c29fbe41"],["/imgs/Java/JDK.png","ad71591c7137c6b7bb24e8b84f4233c5"],["/imgs/Java/JavaSE图解.png","ccc0b2c7888a90eea91101251ec0a717"],["/imgs/Java/Map.png","cdc4eb3bbdf8483e01a1c15d7aadcb03"],["/imgs/Java/Protocol.png","e6c10b0deabc5a58ce0a464945d1babf"],["/imgs/Java/String.png","e35655868d927d791b61e94de9fbae62"],["/imgs/Java/String[][].png","8d07477a038be96392b9af4ab7d4c25b"],["/imgs/Java/String内存.png","cdad705c5a199b85e78d00c3dde631b8"],["/imgs/Java/Thread.png","de2c41be444d3dc299d060a2065b4532"],["/imgs/Java/static.png","b6945f6f75474ffd140c28917ce843d4"],["/imgs/Java/swap.png","da604af002d156b569eae42876fe8e02"],["/imgs/Java/二维数组.png","5b0280abdd56b81a3d40b5d6d9b6ca2f"],["/imgs/Java/体系.png","9fa0fc91f707fe18b8cd306ed15768ac"],["/imgs/Java/修饰符.png","e181921844fcc48ae680948ce9f9754e"],["/imgs/Java/值传递.png","656e2d2786750ac07f5e87f2b62660da"],["/imgs/Java/内存结构图.png","3d9035c11324267f3a247f809ed8290e"],["/imgs/Java/包装类转换.png","f06b40e90af283c49d4a239828cbaa72"],["/imgs/Java/安全问题.png","64d52929ffa94fae128b9bd0c10c49f4"],["/imgs/Java/数组.png","7d6b1e5a6f06c125766b52adaa9f3d49"],["/imgs/Java/类的高级特性总结.png","5c046ddc2487fea7c235ba378f6e316f"],["/imgs/Java/线程的生命周期.png","95f7145d7ec2cde3a697ee5c3a81373a"],["/imgs/JavaWeb/JavaWeb1-0.1.png","a3856fbef7bfc3be80fb1bf403809bd2"],["/imgs/JavaWeb/JavaWeb1-0.2.png","61c9df86cbe2239e92a6603ac9e5a9f9"],["/imgs/JavaWeb/JavaWeb1-0.3.png","404ec7fb9615c5600a170cddb01c0eca"],["/imgs/JavaWeb/JavaWeb1-0.4.png","d73385ff7854047b902ae42fc977f266"],["/imgs/JavaWeb/JavaWeb1-0.5.png","8bb83d5f1ca808d0eb948ae41e6ffcb9"],["/imgs/JavaWeb/JavaWeb1-1.1.png","52adbadad1b703c8d158177dd1300d9e"],["/imgs/JavaWeb/JavaWeb1-1.10.png","b50d180b140058dd509244939b270771"],["/imgs/JavaWeb/JavaWeb1-1.11.png","f31599fd77d00c18a440e4a48d2abc79"],["/imgs/JavaWeb/JavaWeb1-1.12.png","8c6d39f46ae5a685c798157d93c2b6e1"],["/imgs/JavaWeb/JavaWeb1-1.13.png","bb545a22efaeb581c8ab2021224d6edf"],["/imgs/JavaWeb/JavaWeb1-1.2.png","330ce4f7a8bab99edac9e7385d7452f0"],["/imgs/JavaWeb/JavaWeb1-1.3.png","5beaa5e5a17123a6b88280c812a2fc58"],["/imgs/JavaWeb/JavaWeb1-1.4.png","aba5586d4eb72cb743e1066ef3948e1f"],["/imgs/JavaWeb/JavaWeb1-1.5.png","afcfd9c5110c9f832784ccf48fa9ca4e"],["/imgs/JavaWeb/JavaWeb1-1.6.png","6f1bcc0bf0dd643f60c51e19e4b2fee2"],["/imgs/JavaWeb/JavaWeb1-1.7.png","ce42f1ce31017b3e882f38e216d17567"],["/imgs/JavaWeb/JavaWeb1-1.8.png","fdb4f17f0cce9cc61d0582644a1c1076"],["/imgs/JavaWeb/JavaWeb1-1.9.png","852c0d99dbfb2083750cc8348383beeb"],["/imgs/JavaWeb/JavaWeb4-0.1.png","684e7f309780760ca457a1c8a4be1c5a"],["/imgs/JavaWeb/JavaWeb4-0.2.png","c353ed21307ed5e78feb4a241d43695f"],["/imgs/Vue/Vue1-3.1.png","47dbe87ecde7494f1e645812c4b364eb"],["/imgs/Vue/Vue1-5.1.png","864f590b592b3e1dda4a0d365069193b"],["/imgs/Vue/Vue1-5.2.png","007bd19ec40a2ad9dc3661f74cb2ba0a"],["/imgs/Vue/Vue2-1.1.png","d37f9815348d120164c81f54a45a59e6"],["/imgs/Vue/Vue2-1.2.png","bf3162a8f37b62db4ad1d8969e688dd9"],["/imgs/Vue/Vue2-1.3.png","52195034c7171c26e5c3d2b6b58b7c49"],["/imgs/Vue/Vue2-1.4.png","ece33c6965cc2eca7c4ca6292a7b5828"],["/imgs/Vue/Vue2-1.5.png","25027297cf1ab8ad61fc0a9e842c7499"],["/imgs/Vue/Vue2-2.1.png","250fe60e7603f6a860f305d2a9d681d1"],["/imgs/Vue/Vue2-2.2.png","4874518ac147e704fafc950ba43f0548"],["/imgs/Vue/Vue2-2.3.png","2b3e67fa853fd70925d2ac96a13c306d"],["/imgs/Vue/Vue4-1.1.png","1ac4829ed3508fb9f4158153803a7943"],["/imgs/Vue/Vue5-1.1.png","10d5c4023b8e00d473b0450d4738ea56"],["/imgs/Vue/Vue5-1.2.png","9cb46f3ad04fa72b0bce1d2bee05325c"],["/imgs/conf1.png","770e6e29fb2d51a9b9b2d51f2671d094"],["/imgs/conf2.png","9536f97e0c1160207f81c9bbe7bd5128"],["/imgs/conf3.png","3796fd78f5a2aef9a209ed048a5fa24f"],["/imgs/fold.png","cd489b2f86b0c692dae11d9827180a50"],["/imgs/gitee.png","0cf41aa37a46eb736d31f34e9749188b"],["/imgs/github.png","b8cb88af3cfc76058351c127373a858f"],["/imgs/github02.png","76459ee8c5377b16e94401ae7439467d"],["/imgs/github03.png","ba54b82eecce82ca09ff75f290e51acc"],["/imgs/github04.png","54b8de124f8df866653fcb70a0d8d61f"],["/imgs/github05.png","984a03f8276f472488b588ce440c43f6"],["/imgs/github06.png","f708db12b1eb832e1cbb94af4514940e"],["/imgs/github07.png","580ddef37d914fcf955d52e7e65960ea"],["/imgs/hexo.png","1edd6703b0d3b456c73c884bab2bd459"],["/imgs/maven/maven_00_01.png","0d20ed96462c1febef2e058976154537"],["/imgs/maven/maven_00_02.png","521f3ccd1b4debf9489d31e7baa33d90"],["/imgs/maven/maven_01_00.png","ef7926e41b8d5ddba34a94c29b7acd66"],["/imgs/maven/maven_01_01.png","8a4b7a038643dcec9794df1dddd851c5"],["/imgs/maven/maven_01_02.png","dc6ff1a28f120c0570abc7dcb8c74e64"],["/imgs/maven/maven_01_03.png","9c3f2e992105f17faf3fa07f8986972e"],["/imgs/maven/maven_01_04.png","ccb3f62b42348399d6657f9b047975f6"],["/imgs/maven/maven_01_05.png","e21ee114a840c257c08f278fbb05be09"],["/imgs/maven/maven_02_01.png","2bf56f43dc3f2dce89961cedeef25008"],["/imgs/maven/maven_02_02.png","efeda0a806c223c87e9dc8f37d47639b"],["/imgs/maven/maven_03_01.png","31a47aad2b9d12b2a1b94c2f86acfb86"],["/imgs/maven/maven_03_02.png","9044e2571e39020c4460512cd11e6d69"],["/imgs/maven/maven_03_03.png","1edddd4d565912ca6d7d3e5aba3a50e2"],["/imgs/maven/maven_03_04.png","d6d8c05fc68531fd86d7194bba6b6046"],["/imgs/maven/maven_04_01.png","d7669f69e7085e1b32c3ef33972dfff2"],["/imgs/maven/maven_04_02.png","34f449e798bc7a2ecc374f6b17b9826e"],["/imgs/maven/maven_04_03.png","2b34bf255bb2a1f80ac968c8c82c7ca6"],["/imgs/maven/maven_04_04.png","3415811658176a12471427c9a8a7d436"],["/imgs/maven/maven_05_01.png","5dec07efcdb2936bbb425c010eb90c96"],["/imgs/maven/maven_05_02.png","fd2489e807df80963609004f137b9da4"],["/imgs/maven/maven_05_03.png","8793340120fc75a51b467e84c9fd32d0"],["/imgs/maven/maven_05_04.png","15f5436885243e1d66e88913035f4b8a"],["/imgs/maven/maven_05_05.png","479cc852fe856d0a4de8641c74614e55"],["/imgs/maven/maven_05_06.png","397988188f3948a582ab540d734ea2d6"],["/imgs/maven/maven_05_07.png","ad71a3fdc94cbdaf9cda0b70c3373089"],["/imgs/maven/maven_05_08.png","670065d5874eb2719d3092b3f8a83874"],["/imgs/maven/maven_05_09.png","8de79de135066316e6b808f4098f1dab"],["/imgs/maven/maven_05_10.png","e45a6e3d0a314d7f1321f577cdb013c1"],["/imgs/maven/maven_05_11.png","9f4601b6fd581579853d4343a69ed1ad"],["/imgs/maven/maven_05_12.png","7196c566813f56adae2c9e69ae144c13"],["/imgs/maven/maven_05_13.png","20a7aba354779f30d5632e649f9f9673"],["/imgs/maven/maven_05_14.png","116d7909f3c50a82cda7e8bc67f6cd3a"],["/imgs/maven/maven_05_15.png","64fe27781391ef5364e23ddc9a85d49c"],["/imgs/maven/maven_06_01.png","63a9cc0e564b1c55b0ac16f76f1ded53"],["/imgs/maven/maven_06_02.png","dbe365cfadfe29334f8f1629d8d4dc06"],["/imgs/maven/maven_06_03.png","2e9d5a9923d27a06c8b1d474dc3d2b29"],["/imgs/maven/maven_06_04.png","44b274eb82a22a993ee0e1a829fd4faf"],["/imgs/maven/maven_06_05.png","7ba49a4b7e77a1ed6d96e12ebac38e7e"],["/imgs/maven/maven_06_06.png","d61f51dfea2f7a17a7b76109178d9edf"],["/imgs/maven/maven_06_07.png","f54373f61e960ced9e636764c316105e"],["/imgs/maven/maven_07_01.png","0ee01053e9f3cd3d7371c1c919326dc3"],["/imgs/maven/maven_07_02.png","970fa8d2f9714d04f820266e59feb825"],["/imgs/maven/maven_07_03.png","1dfe5e7df177e377f02002b0b2d0cb4b"],["/imgs/maven/maven_07_04.png","9716c08af749b33f954dc591dd76c56b"],["/imgs/maven/maven_07_05.png","73b80e82d7d4613f8ab4c0bcd6eeed57"],["/imgs/maven/maven_07_06.png","def5c7c1303fbd94dcd52f1a20a09531"],["/imgs/maven/maven_08_01.png","a4a8e9854fa8831860250340065abbd8"],["/imgs/maven/maven_08_02.png","6d5f0b5f5e83c18bc8795d6b99e2648f"],["/imgs/maven/maven_08_03.png","b17fcbb238e2ec6e6c576b467f5d0ee9"],["/imgs/maven/maven_09_01.png","9e982a70600020ca5577ab0f065e5c67"],["/imgs/maven/maven_09_02.png","d42af075e43846d175c85594ca1e5c76"],["/imgs/maven/maven_09_03.png","b1694aa001a0673b52157e56aee272db"],["/imgs/maven/maven_09_04.png","4fff3140b6dfdce1ee4b8a4f341b3e92"],["/imgs/more/more01.png","6735f432b2ef093a7637d4d8a4469a99"],["/imgs/more/more02.png","0661af1a2efa11f3a824f5bc2858725f"],["/imgs/more/more03.png","e64fc8e2a97ba91635e1aaf56d5a22ee"],["/imgs/more/more04.png","21915857758d24d3690391c8a4c2caf8"],["/imgs/more/more05.png","d1322a42ddb45fe331fc8c765cc2b625"],["/imgs/nodejs01.png","0cabc880418550a790f2c392879adcc2"],["/imgs/nodejs02.png","ccfe226fcad22c003b986ad64f92ec62"],["/imgs/nodejs03.png","dc51da5285f1d5d6063eae0498fc4704"],["/imgs/nodejs04.png","f0bdab4c02af7174288e6d87dae27d5a"],["/imgs/nodejs05.png","cc72195f1658dc562a5b16d81bc763d9"],["/imgs/nodejs06.png","321ff200d0906d61f3d18a99ccd5a06a"],["/imgs/nodejs07.png","82bb4ec677a65cd95da56203fa076e04"],["/imgs/pages.png","411f684917aef17ae8e81db100a5c43e"],["/imgs/shell.png","5ceba2e6f999514be41b730d2ba07aa0"],["/imgs/ubuntu/XMind-1.png","75ec8bf35d148392e84a08ba9ccad191"],["/imgs/ubuntu/XMind-2.png","bc0d47b2904bc33d7d559812fbe3afe3"],["/imgs/ubuntu/hello.py.png","0c26193575fadedc688cd48aa578d921"],["/imgs/目录.png","3d859db538030b97f0764f1535eee3ea"],["/index.html","eb8675c099d32560cddeb355869e5bcd"],["/jQuery1-0.html","869ab45214a1c924fe7c24f8ecf1ca1f"],["/jQuery1-1.html","cd9e25173664f57cd3cba0f5239f27d1"],["/jQuery1-2.html","e217d8b3308cc9b65d76904d3860f5b7"],["/jQuery1-3.html","d4adff0fce357c4158aaad9ebf4453e4"],["/jQuery1-4.html","d2be6e98f9709855f96a60ca14bf38c7"],["/jQuery1-5.html","28ce44ce92c8b036ac5b5388ac31aafb"],["/jQuery1-6.html","af23e713d9729f63fa4cb56f5dbb29d4"],["/js/app.js","91c985f35ba8c0452881db15766fc0fd"],["/js/clicklove.min.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/sitetime.min.js","385d55c19e6c1792b9691ecd32ee1ceb"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","f8705875d39099c826f022d40581822a"],["/js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["/lazyload.svg","f4489d723e9e86c72a1411d56a49229e"],["/maven_00.html","59eecd069f23113d32bbc62c062258d9"],["/maven_01.html","bc08d1b1e62650d1d0929a4b6c0f8ab5"],["/maven_02.html","68beebbe7d5035ea55c18f0925a4940e"],["/maven_03.html","4b4a9261a3ed0efb079883b16e105491"],["/maven_04.html","959b7c7e5e27f2cf9628636445fc58be"],["/maven_05.html","39686f0657b2c9131d1af4cbc3affb3e"],["/maven_06.html","a78b9d6a52525939e457e2add03466b6"],["/maven_07.html","4fc779f94745c1db4d4a852d3cfb5f77"],["/maven_08.html","826b33304c1a8699550b88b55b522358"],["/maven_09.html","d2d3a745c13cb7608da178862ecdef12"],["/page/10/index.html","2829edf0f231dcdffd81950cdb219a47"],["/page/11/index.html","03c0db936776f9dbbfa0ac1d7c4f97ca"],["/page/12/index.html","bd450d412869273b409d457b4496b3cb"],["/page/13/index.html","8c279b4d3ecbcfeb5efa7fac5249e915"],["/page/14/index.html","cf4216cf24351ac6b7f5c5f4e0130810"],["/page/15/index.html","8dd6be75ed0ee878ee92b276501d368e"],["/page/16/index.html","5de04dcbef517bf3e491cadc9e3ebbd5"],["/page/17/index.html","16d9d8ebda1b30707dc5949d08a9ee21"],["/page/2/index.html","4d6f4f60f11dc278d959ac3cdedafd34"],["/page/3/index.html","b009c104537348f9df654c8e3685b762"],["/page/4/index.html","59c224b8db0a0af948857555148b1200"],["/page/5/index.html","bb66e71b7d9683430d27e89c0974ba58"],["/page/6/index.html","56aa40aa6bcef72f6c752e115f09f7e6"],["/page/7/index.html","ddd7d68182d426686c8fb4e5d768de03"],["/page/8/index.html","d08b4dbfc93637c0ff90b55c83ff8a6d"],["/page/9/index.html","0679b41b7bfa4e3607568f13a62763e1"],["/tags/Ajax/index.html","c2908f157b26a94f8bb827e91ff61d5d"],["/tags/CentOS/index.html","9ff469f21de310b797e6819259d27e2c"],["/tags/Database/index.html","d8e755ba29d1cab552843ca8ac48e790"],["/tags/Database/page/2/index.html","5ab8b82a186d4a609a271d4b43d4f95f"],["/tags/Flask/index.html","55bc6e25d33dc883239916913511b091"],["/tags/GitHub/index.html","d26da311fd0d5361fe81c198cb242642"],["/tags/Gitee/index.html","ac12cf5840d9f0baff151f62ca853dd7"],["/tags/Hexo/index.html","27d7745777b018ff670433cd0b288bf8"],["/tags/JDBC/index.html","7cf819bde4093df72975717a96b2eac3"],["/tags/JDBC/page/2/index.html","ecf8b528d6991eff8c6b6410cf68ef15"],["/tags/JS/index.html","2551bf84b9eaf2f858722cd85782288b"],["/tags/JS/page/2/index.html","446087ad715990df6b3286f67f37f311"],["/tags/JS/page/3/index.html","a9bd03dde9bc745cbd9f7cf1f138e3ca"],["/tags/JS/page/4/index.html","2f6448a0669cb583afc87ff5fb2526ee"],["/tags/JS/page/5/index.html","c2b0b3189fc3c87c7cd8d5166ff4a8fd"],["/tags/JS/page/6/index.html","d7a53e5162f9bb7349d19339d27dfaaf"],["/tags/JSP/index.html","f197570096179c3bff5e18241cadd4b8"],["/tags/Java/index.html","948b2457a4d9cc625222612166d78c3a"],["/tags/Java/page/2/index.html","e1bb1b21c9242ccb879119a623742e75"],["/tags/Java/page/3/index.html","5b94ba311ec18e622365e81ac48185bb"],["/tags/Java/page/4/index.html","0a8c02d1bc2855088c4dac351afefe34"],["/tags/Java/page/5/index.html","a2153723d0e1baf92f9c5058fd7a5d59"],["/tags/Java/page/6/index.html","e19b4b8a838f104b5c8a4161b41913cb"],["/tags/Java/page/7/index.html","0b64c54cbb0fb4a59700b2c9832ecb1a"],["/tags/JavaSE/index.html","15e3a0781035388a63b504a06c2ee5d9"],["/tags/JavaSE/page/2/index.html","e5cec3df0b967b036b241b09ebd15a39"],["/tags/JavaSE/page/3/index.html","cb1066f99cb23ccda4c81f16e25c267e"],["/tags/JavaSE/page/4/index.html","aa00603765fccbd77cd93272584cc00c"],["/tags/JavaSE/page/5/index.html","3aec3f99f30bed861e241f1921f5f010"],["/tags/Markdown/index.html","9f746c68b35d523446fcb63c3f8b5e3a"],["/tags/NodeJS/index.html","3856d91515e4b163901ef69480d209bb"],["/tags/Python/index.html","066ba43a4670e8e4d08b57af1aed3d02"],["/tags/Servlet/index.html","87b8615a17309cc5abe1a88baee963be"],["/tags/Typora/index.html","d08e01e42ab9ce581cb57af4199567d3"],["/tags/Ubuntu/index.html","99d1fc6ad0006403944d55bf73c0ade5"],["/tags/VPN/index.html","46efbe9cda6e30e3d1ed552b228c2e7a"],["/tags/Vue/index.html","12c01e66e2f0c2492f87b5d570a91d7a"],["/tags/Vue/page/2/index.html","86f960c5a020543cc3b7eb9244928213"],["/tags/Vue/page/3/index.html","57e56afb024d2fdeb083140382190860"],["/tags/Web/index.html","e59afbc96adbefccfb3e85c8f055bbb8"],["/tags/index.html","0bd4df59bcc03cdc8e8b6f40e6dcf8ff"],["/tags/jQuery/index.html","226139405dd2f87b81e6783a8e22b495"],["/tags/jQuery/page/2/index.html","1d32dbf505704a7dfc904a6db0446a20"],["/tags/maven/index.html","aad10a2f1750b6bab4f6838f8ecfa1bf"],["/tags/maven/page/2/index.html","4ffa321043bfce1dc34bed4b669a8274"],["/tags/npm/index.html","073ff6280b9640f2e647690a1adcc546"],["/ttf/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/ttf/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/ttf/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["/wechat.png","98c80247a70a0f21da6152ecf6299037"]];
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




