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

var precacheConfig = [["/404.html","eb9896856ec6300bd1695da74a04d130"],["/Ajax1-0.html","aa1516a9d09258d975834a324b28715f"],["/Ajax1-1.html","2f5122bdb24aac1d38450969c0bf2754"],["/Ajax1-2.html","e5e9f229fcd71a4f8d5af9e475e87f24"],["/Flask.html","ef5e626121c0ff0c1a183cbcb171d737"],["/Hexo.html","8f701ffa4efd10070582b729359a631c"],["/Hexo2.html","47a395766628921e7265d31b9713e170"],["/JDBC1-0.html","76b92248413168bff75f465b8cb15781"],["/JDBC1-1.html","1fc5664c3637a2e62e27e08a8f60cd95"],["/JDBC1-10.html","1c32fb1508ad40c7ae95aea320433aa7"],["/JDBC1-2.html","b6b38427f000968c88902852c99d1164"],["/JDBC1-3.html","8c29cd70f9c2e0aa96e7f79333014d40"],["/JDBC1-4.html","46096d5a711b1d363abc70e87faa59e3"],["/JDBC1-5.html","dbd901d96f9d4f324e065eef9d55c300"],["/JDBC1-6.html","b0f5ed8c808abce1fa2a41713809e36a"],["/JDBC1-7.html","321df2ca9a45147d9ca7723820e29f88"],["/JDBC1-8.html","73c2d3c39e84c8889ccf1ec2d002f53c"],["/JDBC1-9.html","4b2d5b4a0ba54f772646b8099646e09e"],["/JDBC2-0.html","cda6c1aaeafce15106917ee2eb6be1ce"],["/JS-JSON.html","756c77e2c7f703b6dec8746fccbac1b1"],["/JS1-0.html","23be29501dabdcd4616390548861b141"],["/JS1-1.html","3a4bc90cd48841239eef986e82751ef4"],["/JS1-2.html","15a848f0fe4bbc7f7267bddba2a918f6"],["/JS2-0.html","88293fe345ea72b1ff1a0c7ade0b4862"],["/JS2-1.html","f61cfac2f2d90352dc5def2402563419"],["/JS2-2.html","09ce8cafc66fdeb3e3d6eb56987a3384"],["/JS2-3.html","06a2124777a823fc3829db2003864bf0"],["/JS2-4.html","e301381f7dce8a7c37a7bca831a890b7"],["/JS2-5.html","86770947106ff4e0292e68ff13b37836"],["/JSBOM1-0.html","9aa0381ececfce9bc3226875cedb10cc"],["/JSBOM1-1.html","0ff25ff804a77b2e97a28ce82c85b3a6"],["/JSDOM1-0.html","18a7013fdcd0a714e4367629d2a946f4"],["/JSDOM1-1.html","0de05e1a60f6fe695f990a8c63aed670"],["/JSDOM1-2.html","de31b64ad81232ade10db0e6c51c9a20"],["/JSDOM1-3.html","09707af8b6b3a8483f44f443e90ed955"],["/JSDOM1-4.html","c9fbbed4589a9efce6e293e50c80fa84"],["/JSDOM1-5.html","27a380ce44bcd2eb977194c5aa487b38"],["/JSDOM1-6.html","2f7915b7faec774fbd8866676766af47"],["/JSclassName.html","50250990c72823c47be3166f5bb180b4"],["/JavaSE1-0.html","ee812a4aceb172c52ee40ccd94098d5e"],["/JavaSE11-Thread.html","f878bc9392031b199a98401494b06e3e"],["/JavaSE12-Class.html","d70608313baa37456b937690da7c7c4d"],["/JavaSE13-Reflection.html","ef58b86f2a24848d11f01387ee171294"],["/JavaSE14-Internet.html","2585ab3d5a8b0a14a0c4cd36b11b6c56"],["/JavaSE2-1.html","557e6587fd14ff31d5738618f8fe383f"],["/JavaSE2-2.html","1cf4ac46c0abb524d02725bc9444147d"],["/JavaSE2-3.html","80d0f5df413858babd025236c493d247"],["/JavaSE3-1.html","36faf9d70be5d1b5d8041dfedec14daa"],["/JavaSE3-2.html","eb267cb34c1cd9955d9d52ffbfd62f17"],["/JavaSE3-3.html","e18fce50e12752afc5df12dcb7f7438b"],["/JavaSE4-1.html","0777492526165f308ebc45c676c4bcc2"],["/JavaSE4-2.html","b15bd77ba7c4447beaaa50d4c0680e0f"],["/JavaSE5-1.html","fbb73a94114c567d2e9eb1c5f966f422"],["/JavaSE5-2.html","cdbbf4d3433e71fb93b6db052edf9775"],["/JavaSE5OOP.html","f6699453442eb1cdfddd08e2f8928f50"],["/JavaWeb1-0.html","ef02fd9cf7a69bd6d711ee61842c5222"],["/JavaWeb1-1.html","627a3950ab83965696d6a1b55ba85d27"],["/JavaWeb4-0.html","0bd490abdf36c4f2b14a57b8bc906d13"],["/Markdown_Typora.html","14b35c832447bd9fea9c35574cec41ce"],["/NodeJS.html","fd62a4a4381b77dc511031af0d358616"],["/Python.html","dcf907407cebcba5e7d1b81f9f2d3cec"],["/Ubuntu-XMind.html","0eccafa5acd24b05fb283ba49fdb0ec3"],["/VPN.html","7c027581e80bdf2a247af7978852fd15"],["/Vue1-0.html","d351f5ee39a3317967a199e656a00780"],["/Vue1-1.html","943e0f83b3617364235a03fa148d6dbe"],["/Vue1-2.html","8177c6b79f5576465d55227ce303f34a"],["/Vue1-3.html","9e36ed392206e4e3ef2a36a4c5d372c7"],["/Vue1-4.html","914197a65e7d271fa87d03a123e53861"],["/Vue1-5.html","9352ffb937d7381d4fe7a9dc66139ca3"],["/Vue2-1.html","72f2da93c542dc18722bfd7217056a3b"],["/Vue2-2.html","085c57735dd6ffc408bd76f9e0da4dcf"],["/Vue2-3.html","821fa30620349148060a4c3045d48d1b"],["/Vue3-1.html","4238517e941d9b1209a885d996017ed3"],["/Vue3-2.html","9b50ba810ef848be450b3c185e44f96e"],["/Vue3-3.html","c21a96af723cb77aa648c70ab1ec7a3a"],["/Vue3-4.html","850782ceed7e1ff76d121aea11311624"],["/Vue4-1.html","dc227c891ca19a3523f3b0382d6ac0a1"],["/Vue4-2.html","e330429a0eff8b6caf4aed0714f62da9"],["/Vue5-1.html","52eabb37990c0c4f656efd83953da0dd"],["/about.html","beeb3324dd16367cd67de4d6a1544f7b"],["/alipay.png","dfcf79b78e9d0b6500c48a899a66ecc4"],["/archives/2019/03/index.html","9237740a948b0d517e810861f728bce5"],["/archives/2019/03/page/2/index.html","6a6aad91cf10962e54f7e77386e057f4"],["/archives/2019/03/page/3/index.html","76ab264197d233e58a69ef597bd517b1"],["/archives/2019/03/page/4/index.html","87ca1fa83a78e883293d2296217c8f12"],["/archives/2019/03/page/5/index.html","6ab6fb965b2fa810dda1497e5e4a4067"],["/archives/2019/04/index.html","f1f3460178e80b1b7f9d2971001fc330"],["/archives/2019/04/page/2/index.html","b71e797782c23f12577f688a761d8f78"],["/archives/2019/04/page/3/index.html","01ae375d7d3729dfab3953a921677839"],["/archives/2019/04/page/4/index.html","ab253246874ee218bd1d893553324404"],["/archives/2019/04/page/5/index.html","92c437c5073107cd455a4a3e94dd113f"],["/archives/2019/05/index.html","7090fa9c0576f9220dca60d903d1c03d"],["/archives/2019/05/page/2/index.html","b4b7b9377951b4a485df32619b872707"],["/archives/2019/07/index.html","0b48a18776854760245e2b1b02a59051"],["/archives/2019/08/index.html","be94709c3b90bf7ad15d0caff217ce22"],["/archives/2019/08/page/2/index.html","b82154ba18edd9590d599d240a39aaeb"],["/archives/2019/08/page/3/index.html","76927bb763bf09b7803aa05a13fbf1f5"],["/archives/2019/09/index.html","72f0d45dce44f961fe4dd2bc2650fbaf"],["/archives/2019/10/index.html","5fcac720cf76d2c9c87c82ab0f0c59c6"],["/archives/2019/index.html","1cba09f99aa88c331bc663cc477e978d"],["/archives/2019/page/10/index.html","a8acf67c12adc7ef4b83c2959982bc60"],["/archives/2019/page/11/index.html","7f0f13e272503b18f2001a25c3892f35"],["/archives/2019/page/12/index.html","5f7f0bcf96dca241e2b82da6824e56ec"],["/archives/2019/page/13/index.html","05c215f3caae0ed69b5c6ca147f0ef9e"],["/archives/2019/page/14/index.html","ba5fbec699b2f7d5ce86bc7b2f2582e8"],["/archives/2019/page/2/index.html","9e9fa4f131335b091bc4f770de18ac28"],["/archives/2019/page/3/index.html","b10e1fc7230e9d09ae452e9860cd1e9c"],["/archives/2019/page/4/index.html","2f220a4bece641c80a2beefc057bfb15"],["/archives/2019/page/5/index.html","1c6a33d949f90974bf427a5f9d848ff9"],["/archives/2019/page/6/index.html","6ed40029f12c0c0f54b7234ca1286363"],["/archives/2019/page/7/index.html","8788386c3ada9d3ab9b6953076f27326"],["/archives/2019/page/8/index.html","85d58d6366f8d6cf328c183fd087445e"],["/archives/2019/page/9/index.html","01965ffd50a309353a927fe47477ec1e"],["/archives/2020/02/index.html","0d99ece514dcc9dfa3ccae573d2df1d0"],["/archives/2020/02/page/2/index.html","05f41ce04350caf5f87719cc62f15eaa"],["/archives/2020/03/index.html","5a21f9d4e0008275e1c5d6d305574709"],["/archives/2020/index.html","92c56649244bac23a90c172419efa5c0"],["/archives/2020/page/2/index.html","136e810a1b6b1b848a1b99f30fdbd61a"],["/archives/2020/page/3/index.html","a9aa8ad86a3dfaadc443e40c250bfaa7"],["/archives/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/10/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/11/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/12/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/13/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/14/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/15/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/16/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/17/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/2/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/3/index.html","3a45ee28959d69d9f1c082a4f73541fe"],["/archives/page/4/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/5/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/6/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/7/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/8/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/archives/page/9/index.html","748dae6f1aed71850f3239e8a21dd17d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","3aaf568ef4d63c7392ab1804988fd19a"],["/bbs/index.html","de90518d39b420a7fb90712e192ec085"],["/categories/Hexo/index.html","b6a50f75185003e75672f5f0214ffac4"],["/categories/Java/JDBC/index.html","2ca72ae89408dec41535200cd0732a54"],["/categories/Java/JDBC/page/2/index.html","81c9d5d953a5297a183fb132384f21fe"],["/categories/Java/JavaSE/index.html","8ba9c5de362fa22776a0e6649d7a2240"],["/categories/Java/JavaSE/page/2/index.html","7586943940b8023c352f0b4340bbdae6"],["/categories/Java/JavaSE/page/3/index.html","ad759073ee8ad6f2af471cf2b02cb0da"],["/categories/Java/JavaWeb/index.html","9386f72e21b6986d49b8beb029f8715f"],["/categories/Java/Maven/index.html","4f6a81c99b741a8269b90e07db97ba0e"],["/categories/Java/Maven/page/2/index.html","b009a9b1c9c4d6cb33026cce9c528550"],["/categories/Java/index.html","047b71c9d6306d73dedcc1347bbab244"],["/categories/Java/page/2/index.html","08a123814f2dd8a761078da9bfe0ee78"],["/categories/Java/page/3/index.html","1e6cae29e429e52c7cf14e0bf17ba359"],["/categories/Java/page/4/index.html","c9a649dc7a2be79ce829389b5e0bb6dc"],["/categories/Java/page/5/index.html","44287fef9fac5a191865f7d527748898"],["/categories/Java/page/6/index.html","6ef1baa137cdf572b40b1472f2228a3a"],["/categories/Java/page/7/index.html","e0fd445325519c460a709bfab13eca9c"],["/categories/Ubuntu/index.html","f8465f9aa4d452b6be0d2f8bf190c1e0"],["/categories/index.html","a2f1665d17e3691285c714a1f7e971de"],["/categories/python/Flask/index.html","d258a3b629b8d1c9a0e971bb013136bd"],["/categories/python/index.html","65c198fb4ece283f9c9832eedba472eb"],["/categories/前端/Ajax/index.html","3bccb739b06762457d933bbd6f058877"],["/categories/前端/JS/index.html","d0ab1a8b248f85917b64820f52e063fa"],["/categories/前端/JS/page/2/index.html","080cc211f055b9106642fb36a0428f4e"],["/categories/前端/JS/page/3/index.html","8b8c138d6a245328fc94f08ba20d2fd8"],["/categories/前端/JS/page/4/index.html","a9943a92cb9abc61f71ecdc33f95b4dc"],["/categories/前端/Vue/index.html","b7ccacc14d59577a8ed6e4d4cb6aa698"],["/categories/前端/Vue/page/2/index.html","e7149507be97d7e57055b5ae31b19757"],["/categories/前端/Vue/page/3/index.html","9a5dfdea1dad4ccc1d01a3a5c2d1383b"],["/categories/前端/index.html","128ce3ed198a8dc0badbf79c520abe5a"],["/categories/前端/jQuery/index.html","8934e96929e53f33e5575adee7cbe12b"],["/categories/前端/jQuery/page/2/index.html","4d410782d9ac8886fe1722a21a9d46d9"],["/categories/前端/page/2/index.html","c5c43caaf2aecefc5ec8a69120019169"],["/categories/前端/page/3/index.html","82190b9636814fe26e18a7cbe143c66a"],["/categories/前端/page/4/index.html","e9dd289d0f95f2a5fa7262d3c779305e"],["/categories/前端/page/5/index.html","33e60e78e4edc619a19a920c1d52d702"],["/categories/前端/page/6/index.html","506975f5cd8a403a59e61956af82591f"],["/categories/前端/page/7/index.html","4c254bb314e8e1f0fe85220bc41ab259"],["/categories/前端/page/8/index.html","3a3091164aafaf9a0f2b4cd0e5008dcd"],["/copy-code.html","7d156b5d25a2c0ce59f5fbbf2a5b0671"],["/css/style.css","67f705803c8315a6c15b61c225630205"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","44ae6cad615119fa916f13a6836f115e"],["/hide-code.html","555128aedad068c768b6643b3b7e0a79"],["/https.png","f79edebc508d8ee905407b64adb7e7da"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/imgs/JS/1.jpg","e9d53f7f4641d89c3f9e8c7bf67cc962"],["/imgs/JS/2.jpg","3312ac939c56cd82255bfa3090a8c08f"],["/imgs/JS/3.jpg","5f73808afb7e9a44c7272e1af6e5b820"],["/imgs/JS/4.jpg","f97e7be2f0f3cc37e20196fd50185464"],["/imgs/JS/5.jpg","759270dc66c99e52e61cc7732503f2fd"],["/imgs/JS/DOMTree.png","c157e75ff8b2803f2e9bd8cc55851037"],["/imgs/JS/Memory.png","d26ca9baa8b3b9ae4aa30cccabadffe0"],["/imgs/JS/Node.png","e69953568f8d939faaff07e4fb89051c"],["/imgs/JS/ajax.png","5e9d8bc348789f1295e4fda684df075a"],["/imgs/JS/debug.png","a61f70fb4b73d20a08fb114266b0a8c1"],["/imgs/JS/prototype.png","9960bf60b09fa3c0fabf359ef51a3f41"],["/imgs/Java/Collection.png","c6b77b100113a188a8547b0a6ef1bc44"],["/imgs/Java/Exception.png","863d7bd108431408fab90ee5413fec26"],["/imgs/Java/IO流.png","c141cd49ecab3834e4140143eae8013c"],["/imgs/Java/JAVA学习路线.png","a5f292a55208c4d7e6caaa6fbd7ccaef"],["/imgs/Java/JDBC_01.png","12a5a1d1c8a0809ea23a7d55983692dc"],["/imgs/Java/JDBC_02.png","3494101bfad2c38d42a61de6638c57ab"],["/imgs/Java/JDBC_03.png","19866dcbe8e375531fdfeb68dcee39e9"],["/imgs/Java/JDBC_04.png","d2658cb15631f1bfce89cd15d6c3a250"],["/imgs/Java/JDBC_05.png","a562e5279501cbf5d8d6aee045d5c5a9"],["/imgs/Java/JDBC_06.png","b0cd235f7acdeffb0191c3a972655cf2"],["/imgs/Java/JDBC_07.png","c9023e9e67b1340aa3cff3db6129418f"],["/imgs/Java/JDBC_08.png","5ccd1ee153909651d4ba7de8199aa6aa"],["/imgs/Java/JDBC_09.png","fdfc73a686a5e414c4462bf27d89b542"],["/imgs/Java/JDBC_10.png","ea9d72bc3b3e644a81915f8e5e0865e1"],["/imgs/Java/JDBC_11.png","8fc6aec41d0fb26a99ef904137431030"],["/imgs/Java/JDBC_12.png","1fa98e4fa2e735ded896567e92225b16"],["/imgs/Java/JDBC_13.png","96cd1258ab7a2790981a6e4ebd74cb60"],["/imgs/Java/JDBC_14.png","047b93082cd0e7ad90e78f9013816fad"],["/imgs/Java/JDBC_15.png","abf213ab81f661c57ae74777cd16440b"],["/imgs/Java/JDBC_2_01.png","dcdf35bc01576887b8e64745c29fbe41"],["/imgs/Java/JDK.png","ad71591c7137c6b7bb24e8b84f4233c5"],["/imgs/Java/JavaSE图解.png","ccc0b2c7888a90eea91101251ec0a717"],["/imgs/Java/Map.png","cdc4eb3bbdf8483e01a1c15d7aadcb03"],["/imgs/Java/Protocol.png","e6c10b0deabc5a58ce0a464945d1babf"],["/imgs/Java/String.png","e35655868d927d791b61e94de9fbae62"],["/imgs/Java/String[][].png","8d07477a038be96392b9af4ab7d4c25b"],["/imgs/Java/String内存.png","cdad705c5a199b85e78d00c3dde631b8"],["/imgs/Java/Thread.png","de2c41be444d3dc299d060a2065b4532"],["/imgs/Java/static.png","b6945f6f75474ffd140c28917ce843d4"],["/imgs/Java/swap.png","da604af002d156b569eae42876fe8e02"],["/imgs/Java/二维数组.png","5b0280abdd56b81a3d40b5d6d9b6ca2f"],["/imgs/Java/体系.png","9fa0fc91f707fe18b8cd306ed15768ac"],["/imgs/Java/修饰符.png","e181921844fcc48ae680948ce9f9754e"],["/imgs/Java/值传递.png","656e2d2786750ac07f5e87f2b62660da"],["/imgs/Java/内存结构图.png","3d9035c11324267f3a247f809ed8290e"],["/imgs/Java/包装类转换.png","f06b40e90af283c49d4a239828cbaa72"],["/imgs/Java/安全问题.png","64d52929ffa94fae128b9bd0c10c49f4"],["/imgs/Java/数组.png","7d6b1e5a6f06c125766b52adaa9f3d49"],["/imgs/Java/类的高级特性总结.png","5c046ddc2487fea7c235ba378f6e316f"],["/imgs/Java/线程的生命周期.png","95f7145d7ec2cde3a697ee5c3a81373a"],["/imgs/JavaWeb/JavaWeb1-0.1.png","a3856fbef7bfc3be80fb1bf403809bd2"],["/imgs/JavaWeb/JavaWeb1-0.2.png","61c9df86cbe2239e92a6603ac9e5a9f9"],["/imgs/JavaWeb/JavaWeb1-0.3.png","404ec7fb9615c5600a170cddb01c0eca"],["/imgs/JavaWeb/JavaWeb1-0.4.png","d73385ff7854047b902ae42fc977f266"],["/imgs/JavaWeb/JavaWeb1-0.5.png","8bb83d5f1ca808d0eb948ae41e6ffcb9"],["/imgs/JavaWeb/JavaWeb1-1.1.png","52adbadad1b703c8d158177dd1300d9e"],["/imgs/JavaWeb/JavaWeb1-1.10.png","b50d180b140058dd509244939b270771"],["/imgs/JavaWeb/JavaWeb1-1.11.png","f31599fd77d00c18a440e4a48d2abc79"],["/imgs/JavaWeb/JavaWeb1-1.12.png","8c6d39f46ae5a685c798157d93c2b6e1"],["/imgs/JavaWeb/JavaWeb1-1.13.png","bb545a22efaeb581c8ab2021224d6edf"],["/imgs/JavaWeb/JavaWeb1-1.2.png","330ce4f7a8bab99edac9e7385d7452f0"],["/imgs/JavaWeb/JavaWeb1-1.3.png","5beaa5e5a17123a6b88280c812a2fc58"],["/imgs/JavaWeb/JavaWeb1-1.4.png","aba5586d4eb72cb743e1066ef3948e1f"],["/imgs/JavaWeb/JavaWeb1-1.5.png","afcfd9c5110c9f832784ccf48fa9ca4e"],["/imgs/JavaWeb/JavaWeb1-1.6.png","6f1bcc0bf0dd643f60c51e19e4b2fee2"],["/imgs/JavaWeb/JavaWeb1-1.7.png","ce42f1ce31017b3e882f38e216d17567"],["/imgs/JavaWeb/JavaWeb1-1.8.png","fdb4f17f0cce9cc61d0582644a1c1076"],["/imgs/JavaWeb/JavaWeb1-1.9.png","852c0d99dbfb2083750cc8348383beeb"],["/imgs/JavaWeb/JavaWeb4-0.1.png","684e7f309780760ca457a1c8a4be1c5a"],["/imgs/JavaWeb/JavaWeb4-0.2.png","c353ed21307ed5e78feb4a241d43695f"],["/imgs/Vue/Vue1-3.1.png","47dbe87ecde7494f1e645812c4b364eb"],["/imgs/Vue/Vue1-5.1.png","864f590b592b3e1dda4a0d365069193b"],["/imgs/Vue/Vue1-5.2.png","007bd19ec40a2ad9dc3661f74cb2ba0a"],["/imgs/Vue/Vue2-1.1.png","d37f9815348d120164c81f54a45a59e6"],["/imgs/Vue/Vue2-1.2.png","bf3162a8f37b62db4ad1d8969e688dd9"],["/imgs/Vue/Vue2-1.3.png","52195034c7171c26e5c3d2b6b58b7c49"],["/imgs/Vue/Vue2-1.4.png","ece33c6965cc2eca7c4ca6292a7b5828"],["/imgs/Vue/Vue2-1.5.png","25027297cf1ab8ad61fc0a9e842c7499"],["/imgs/Vue/Vue2-2.1.png","250fe60e7603f6a860f305d2a9d681d1"],["/imgs/Vue/Vue2-2.2.png","4874518ac147e704fafc950ba43f0548"],["/imgs/Vue/Vue2-2.3.png","2b3e67fa853fd70925d2ac96a13c306d"],["/imgs/Vue/Vue4-1.1.png","1ac4829ed3508fb9f4158153803a7943"],["/imgs/Vue/Vue5-1.1.png","10d5c4023b8e00d473b0450d4738ea56"],["/imgs/Vue/Vue5-1.2.png","9cb46f3ad04fa72b0bce1d2bee05325c"],["/imgs/conf1.png","770e6e29fb2d51a9b9b2d51f2671d094"],["/imgs/conf2.png","9536f97e0c1160207f81c9bbe7bd5128"],["/imgs/conf3.png","3796fd78f5a2aef9a209ed048a5fa24f"],["/imgs/fold.png","cd489b2f86b0c692dae11d9827180a50"],["/imgs/gitee.png","0cf41aa37a46eb736d31f34e9749188b"],["/imgs/github.png","b8cb88af3cfc76058351c127373a858f"],["/imgs/github02.png","76459ee8c5377b16e94401ae7439467d"],["/imgs/github03.png","ba54b82eecce82ca09ff75f290e51acc"],["/imgs/github04.png","54b8de124f8df866653fcb70a0d8d61f"],["/imgs/github05.png","984a03f8276f472488b588ce440c43f6"],["/imgs/github06.png","f708db12b1eb832e1cbb94af4514940e"],["/imgs/github07.png","580ddef37d914fcf955d52e7e65960ea"],["/imgs/hexo.png","1edd6703b0d3b456c73c884bab2bd459"],["/imgs/maven/maven_00_01.png","0d20ed96462c1febef2e058976154537"],["/imgs/maven/maven_00_02.png","521f3ccd1b4debf9489d31e7baa33d90"],["/imgs/maven/maven_01_00.png","ef7926e41b8d5ddba34a94c29b7acd66"],["/imgs/maven/maven_01_01.png","8a4b7a038643dcec9794df1dddd851c5"],["/imgs/maven/maven_01_02.png","dc6ff1a28f120c0570abc7dcb8c74e64"],["/imgs/maven/maven_01_03.png","9c3f2e992105f17faf3fa07f8986972e"],["/imgs/maven/maven_01_04.png","ccb3f62b42348399d6657f9b047975f6"],["/imgs/maven/maven_01_05.png","e21ee114a840c257c08f278fbb05be09"],["/imgs/maven/maven_02_01.png","2bf56f43dc3f2dce89961cedeef25008"],["/imgs/maven/maven_02_02.png","efeda0a806c223c87e9dc8f37d47639b"],["/imgs/maven/maven_03_01.png","31a47aad2b9d12b2a1b94c2f86acfb86"],["/imgs/maven/maven_03_02.png","9044e2571e39020c4460512cd11e6d69"],["/imgs/maven/maven_03_03.png","1edddd4d565912ca6d7d3e5aba3a50e2"],["/imgs/maven/maven_03_04.png","d6d8c05fc68531fd86d7194bba6b6046"],["/imgs/maven/maven_04_01.png","d7669f69e7085e1b32c3ef33972dfff2"],["/imgs/maven/maven_04_02.png","34f449e798bc7a2ecc374f6b17b9826e"],["/imgs/maven/maven_04_03.png","2b34bf255bb2a1f80ac968c8c82c7ca6"],["/imgs/maven/maven_04_04.png","3415811658176a12471427c9a8a7d436"],["/imgs/maven/maven_05_01.png","5dec07efcdb2936bbb425c010eb90c96"],["/imgs/maven/maven_05_02.png","fd2489e807df80963609004f137b9da4"],["/imgs/maven/maven_05_03.png","8793340120fc75a51b467e84c9fd32d0"],["/imgs/maven/maven_05_04.png","15f5436885243e1d66e88913035f4b8a"],["/imgs/maven/maven_05_05.png","479cc852fe856d0a4de8641c74614e55"],["/imgs/maven/maven_05_06.png","397988188f3948a582ab540d734ea2d6"],["/imgs/maven/maven_05_07.png","ad71a3fdc94cbdaf9cda0b70c3373089"],["/imgs/maven/maven_05_08.png","670065d5874eb2719d3092b3f8a83874"],["/imgs/maven/maven_05_09.png","8de79de135066316e6b808f4098f1dab"],["/imgs/maven/maven_05_10.png","e45a6e3d0a314d7f1321f577cdb013c1"],["/imgs/maven/maven_05_11.png","9f4601b6fd581579853d4343a69ed1ad"],["/imgs/maven/maven_05_12.png","7196c566813f56adae2c9e69ae144c13"],["/imgs/maven/maven_05_13.png","20a7aba354779f30d5632e649f9f9673"],["/imgs/maven/maven_05_14.png","116d7909f3c50a82cda7e8bc67f6cd3a"],["/imgs/maven/maven_05_15.png","64fe27781391ef5364e23ddc9a85d49c"],["/imgs/maven/maven_06_01.png","63a9cc0e564b1c55b0ac16f76f1ded53"],["/imgs/maven/maven_06_02.png","dbe365cfadfe29334f8f1629d8d4dc06"],["/imgs/maven/maven_06_03.png","2e9d5a9923d27a06c8b1d474dc3d2b29"],["/imgs/maven/maven_06_04.png","44b274eb82a22a993ee0e1a829fd4faf"],["/imgs/maven/maven_06_05.png","7ba49a4b7e77a1ed6d96e12ebac38e7e"],["/imgs/maven/maven_06_06.png","d61f51dfea2f7a17a7b76109178d9edf"],["/imgs/maven/maven_06_07.png","f54373f61e960ced9e636764c316105e"],["/imgs/maven/maven_07_01.png","0ee01053e9f3cd3d7371c1c919326dc3"],["/imgs/maven/maven_07_02.png","970fa8d2f9714d04f820266e59feb825"],["/imgs/maven/maven_07_03.png","1dfe5e7df177e377f02002b0b2d0cb4b"],["/imgs/maven/maven_07_04.png","9716c08af749b33f954dc591dd76c56b"],["/imgs/maven/maven_07_05.png","73b80e82d7d4613f8ab4c0bcd6eeed57"],["/imgs/maven/maven_07_06.png","def5c7c1303fbd94dcd52f1a20a09531"],["/imgs/maven/maven_08_01.png","a4a8e9854fa8831860250340065abbd8"],["/imgs/maven/maven_08_02.png","6d5f0b5f5e83c18bc8795d6b99e2648f"],["/imgs/maven/maven_08_03.png","b17fcbb238e2ec6e6c576b467f5d0ee9"],["/imgs/maven/maven_09_01.png","9e982a70600020ca5577ab0f065e5c67"],["/imgs/maven/maven_09_02.png","d42af075e43846d175c85594ca1e5c76"],["/imgs/maven/maven_09_03.png","b1694aa001a0673b52157e56aee272db"],["/imgs/maven/maven_09_04.png","4fff3140b6dfdce1ee4b8a4f341b3e92"],["/imgs/nodejs01.png","0cabc880418550a790f2c392879adcc2"],["/imgs/nodejs02.png","ccfe226fcad22c003b986ad64f92ec62"],["/imgs/nodejs03.png","dc51da5285f1d5d6063eae0498fc4704"],["/imgs/nodejs04.png","f0bdab4c02af7174288e6d87dae27d5a"],["/imgs/nodejs05.png","cc72195f1658dc562a5b16d81bc763d9"],["/imgs/nodejs06.png","321ff200d0906d61f3d18a99ccd5a06a"],["/imgs/nodejs07.png","82bb4ec677a65cd95da56203fa076e04"],["/imgs/pages.png","411f684917aef17ae8e81db100a5c43e"],["/imgs/shell.png","5ceba2e6f999514be41b730d2ba07aa0"],["/imgs/ubuntu/XMind-1.png","75ec8bf35d148392e84a08ba9ccad191"],["/imgs/ubuntu/XMind-2.png","bc0d47b2904bc33d7d559812fbe3afe3"],["/imgs/ubuntu/hello.py.png","0c26193575fadedc688cd48aa578d921"],["/imgs/目录.png","3d859db538030b97f0764f1535eee3ea"],["/index.html","cc04c4b38a6360f08792fcbc3ab0fd0e"],["/jQuery1-0.html","c87fcb662bc09957565df887557a3d77"],["/jQuery1-1.html","d502aadf57f8f871c2340dbd18ced88d"],["/jQuery1-2.html","0a405b92ae2674c7b6e6fb06518f4988"],["/jQuery1-3.html","77ae8743803cfa55151a67d640f2e301"],["/jQuery1-4.html","acd738727681d380dcfb5df456e0a97a"],["/jQuery1-5.html","19cdd5a0b3e30035d9d64dadb78787e7"],["/jQuery1-6.html","90ba29549916e4b2024e1edd68daabf7"],["/js/app.js","91c985f35ba8c0452881db15766fc0fd"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/sitetime.min.js","385d55c19e6c1792b9691ecd32ee1ceb"],["/js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["/lazyload.svg","f4489d723e9e86c72a1411d56a49229e"],["/maven_00.html","fabd3d54b915e3f3f762ee593f6843ae"],["/maven_01.html","2c8e2e26b35bbd41bb2f6a2adb75b2b2"],["/maven_02.html","ca96b406b1fc0c3cf411e885f45be22a"],["/maven_03.html","a9b95c7ef29b983fb1fee8b3f2c32181"],["/maven_04.html","26f9f56ab1e198f3526ebca830031386"],["/maven_05.html","fac5ed5b49a438d4f6eef3dce8f11c2c"],["/maven_06.html","7e193a9667746efb0f5e2ae021ce8897"],["/maven_07.html","12436427c06b4cef6874e41b41fa50a3"],["/maven_08.html","eadca898c8cf279c0b45e6f4d4044b64"],["/maven_09.html","fa3e291997bf9c160d24973db332b5eb"],["/page/10/index.html","f80c13381cf1813fdeb8162517db128c"],["/page/11/index.html","20ceba70cbcba20365feb42fc6b6cdeb"],["/page/12/index.html","ce965644bb5aec3c173661afdda55397"],["/page/13/index.html","69ebee9d6883542817c828d4c0bfc073"],["/page/14/index.html","b728c9abb52676b393505f3e01b740fa"],["/page/15/index.html","4f389dce108486120e188ce20e308d6f"],["/page/16/index.html","259864d0273f29a583aa0756ab43d213"],["/page/17/index.html","e0dc2bad6dc64662dafb87293ec2e52a"],["/page/2/index.html","55b7ce19f00cc1f1a2c8e8a3a3cfac13"],["/page/3/index.html","1ecea287121dab3637ee69b83058fc3e"],["/page/4/index.html","fe2ac086bbe708ff01d2fb663e7d5d24"],["/page/5/index.html","f3a89aac462b28211739a46c0fd141e8"],["/page/6/index.html","9eb1845f6267fe66930bb3d8e632e73d"],["/page/7/index.html","8084eb3a62254cc96163b05966296ab4"],["/page/8/index.html","c6055f53038b90af54dd9b9c4b2c916e"],["/page/9/index.html","ff33f759687794d0c58414efd7f97486"],["/tags/Ajax/index.html","0e3cd6ffaccfbc2dd653615bc2906229"],["/tags/CentOS/index.html","e43c0f9e96e65c8904d59ba96a394a7d"],["/tags/Database/index.html","b51778e638a4f41bda6c53ff673d57ee"],["/tags/Database/page/2/index.html","fcef9423c388547ef1255c25370f4c92"],["/tags/Flask/index.html","cf91f922eef4ae7f90e55ddee2f512cd"],["/tags/GitHub/index.html","b90112ed62c1cd8e6a3dde3af85a8d64"],["/tags/Gitee/index.html","8d26c89bff80698430fde92a43e7d9ed"],["/tags/Hexo/index.html","84b3f471126d9851917485fa016fa0b8"],["/tags/JDBC/index.html","89e4819fc01e78026feb496eab041cc9"],["/tags/JDBC/page/2/index.html","6f04e37b966c79b05a6f90380cf9fc65"],["/tags/JS/index.html","8b93af8616d21277ea96008e24a9e7b7"],["/tags/JS/page/2/index.html","c92ee652c864521d6384cac9de4eef25"],["/tags/JS/page/3/index.html","5bf9d4b4d9aefb5d6a81cede6f5ba147"],["/tags/JS/page/4/index.html","a72e791176b02a79c526723f1d621948"],["/tags/JS/page/5/index.html","e90c35b10c148b4076cf7b1f7bcd59d9"],["/tags/JS/page/6/index.html","4e05541d9a1b9ac0423840c3f6188206"],["/tags/JSP/index.html","679203ecedd0468a9cbfa479f9e14ca9"],["/tags/Java/index.html","902ccc3aabfee7596c306862767a1288"],["/tags/Java/page/2/index.html","7378403785ca7c2e19bcfd2188b3788a"],["/tags/Java/page/3/index.html","ec8d12cc56adb651bf5199a76fa51a55"],["/tags/Java/page/4/index.html","8d5e366d51b161a5fcd81730db378033"],["/tags/Java/page/5/index.html","8cfe9cf583daec87b04b0821aedb9c7e"],["/tags/Java/page/6/index.html","f5d9fbb66fc80c883ee20a7aac860f54"],["/tags/Java/page/7/index.html","965b7b059c76b4efd4d1ec8bf66af6f2"],["/tags/JavaSE/index.html","dd6c79d4c4dea587716937280d3a4a8e"],["/tags/JavaSE/page/2/index.html","2e5f23df3cdebe3ce4bcc9699c9db183"],["/tags/JavaSE/page/3/index.html","39c431eafc017fbc2afe32fa5a20e26d"],["/tags/JavaSE/page/4/index.html","948ae8bdd8ebbef64d1d9a2be16e865c"],["/tags/JavaSE/page/5/index.html","e0141de86fe7bd9f3598c66f177072e3"],["/tags/Markdown/index.html","a14cbe0f3d768afdc896808c089ca92b"],["/tags/NodeJS/index.html","7cb6ce8534e0e1c9976748ec6cd03d0c"],["/tags/Python/index.html","0e29c507279498363ca74ce7bec958bc"],["/tags/Servlet/index.html","cca9e2d08ddac2f41ec6a0fc370ca1e8"],["/tags/Typora/index.html","fd120c9274afa6e0866532f0de3b3e24"],["/tags/Ubuntu/index.html","2f4830cd85ff34b694cea2c9720e710e"],["/tags/VPN/index.html","7d1bbeef8b09048667d8beb39a2b99d4"],["/tags/Vue/index.html","f1830b25ef1987936eb6a5b7952bb8c8"],["/tags/Vue/page/2/index.html","097f72c7ea458768125eea45c2c2c1b7"],["/tags/Vue/page/3/index.html","a6dbc8d5d40cfba5d90b0ca444db7435"],["/tags/Web/index.html","7356ed4b323f0b0dde8e28fea23a29a7"],["/tags/index.html","f3f517e2e9082ac1c6a15cdfcb530398"],["/tags/jQuery/index.html","8bb67912309cce828b8661fb3bacd96b"],["/tags/jQuery/page/2/index.html","02eaa3b557c62dd860247bd003a65f02"],["/tags/maven/index.html","49fc8c675f919f980ad8753b11a9ed12"],["/tags/maven/page/2/index.html","c98f5335a3cd8c1bee93531d7aabeac3"],["/tags/npm/index.html","5bf141d05c276843c5a88eaed81929ce"],["/ttf/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/ttf/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/ttf/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["/wechat.png","98c80247a70a0f21da6152ecf6299037"]];
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




