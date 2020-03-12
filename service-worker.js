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

var precacheConfig = [["/404.html","1471c5b82fc2b711b549bf7a643215e7"],["/Ajax1-0.html","93002b31cc245b0fed16cda4a679d342"],["/Ajax1-1.html","c3da20eb83298fa24e2fc5d8d9424b57"],["/Ajax1-2.html","8aa8c7953f9b761a728eb8096dcfee92"],["/Flask.html","9cb40cfde6d4332bf0d788a065805b06"],["/Hexo.html","79507662cb928c8a5439811a05bbd993"],["/Hexo2.html","3531fd42ad2ad64ce292c25cb2fd351b"],["/JDBC1-0.html","f04ccb7ad173f2e219cf61eb0c2475f6"],["/JDBC1-1.html","a11ea8e64950f95e57935f34e4c5e354"],["/JDBC1-10.html","848d632cf9e9acff8da46674bf83eef6"],["/JDBC1-2.html","116411746ac35abfbe64d9c7341513c0"],["/JDBC1-3.html","b842820e3241433c432de0d94378b574"],["/JDBC1-4.html","c349c4a6c33c9f4aefcb8fba28435a8e"],["/JDBC1-5.html","d5dfa7f59dceca58b764dbcd06bc135c"],["/JDBC1-6.html","599e10ee3c420e4ba719a18bc1b14a47"],["/JDBC1-7.html","d14937a7d7b0a794aff170bf08cc3ffc"],["/JDBC1-8.html","ce742da4f43c26f1b5d742f029291a9c"],["/JDBC1-9.html","20a20d269a82de4310c31e37e528f98a"],["/JDBC2-0.html","00d8a8e347e7f1048e33a61ea0160587"],["/JS-JSON.html","504acc69ad81fb9d0d7ac0a56ccb9223"],["/JS1-0.html","db55edec73a763c6add416eda33c1453"],["/JS1-1.html","b709a6419c1cfea3f8583753e45f90fe"],["/JS1-2.html","fad3e8c17a908294ec865cb3349c934d"],["/JS2-0.html","f8b707b424ed571e1a90d62a682b43f2"],["/JS2-1.html","f51896c3c0927ffe8009dfc13c2bc457"],["/JS2-2.html","4a50d1791bb92eca8ab3c7a15e930079"],["/JS2-3.html","2344875f9fc3d9f5821f574bf4936c20"],["/JS2-4.html","694807a3f3fa0497349ef1f89d6f5987"],["/JS2-5.html","8bb128974ec2634835850b65892d3697"],["/JSBOM1-0.html","5968d3593c0f6cbcf4f5c505529b50f3"],["/JSBOM1-1.html","3b975d98aa37388ed70a8c5f61070ade"],["/JSDOM1-0.html","c081361277d31fc40fd86c6f6850882d"],["/JSDOM1-1.html","9e45ce7292e3312cf6072df660a51d8c"],["/JSDOM1-2.html","28ece3f5b2ee0cd99e6c4487b73df910"],["/JSDOM1-3.html","7a7df74ca2f7d83216c04c4eac48d1b0"],["/JSDOM1-4.html","2b2fddd18537b045c577b28830078db3"],["/JSDOM1-5.html","6644970ea7481fd847af7833c2395756"],["/JSDOM1-6.html","793f42c00c62a819566b7bbf900a50b7"],["/JSclassName.html","c65096b77fb630fc03f279f3c2e39a86"],["/JavaSE1-0.html","10ab1867871fef7d3d06bd2e46f99a68"],["/JavaSE11-Thread.html","cd965f8f746d89152c0537b079fe9d44"],["/JavaSE12-Class.html","db901b89b297cb874bc2da62ef5f63d6"],["/JavaSE13-Reflection.html","65c05c9260369966da0a6e1001fe2bf0"],["/JavaSE14-Internet.html","978a8f9912d8e5176ee71446dda2fdb8"],["/JavaSE2-1.html","b20e0e0d1d742fe3db5505e7b6707240"],["/JavaSE2-2.html","9587e4172f2b47df3accb36b1934d513"],["/JavaSE2-3.html","73d382ff50cc77406640730cd935515f"],["/JavaSE3-1.html","a1afbdde1e6039773cc73ca12372a54d"],["/JavaSE3-2.html","e0ed4f4c092f4c79d5b403518dd62630"],["/JavaSE3-3.html","e81a790d0951474f5bb8330dc2e9588f"],["/JavaSE4-1.html","d9ed48e6aafd8063fefb34cdf256c131"],["/JavaSE4-2.html","e0a27d000833f1548cf43015cd817c47"],["/JavaSE5-1.html","5d51d3ad8361c83e77287fd863431c5e"],["/JavaSE5-2.html","843b7b0b7aead987feeeba5f8388ceb4"],["/JavaSE5OOP.html","2a8e25e20d1efbefae6e7a19c7ffb290"],["/JavaWeb1-0.html","9b4aa28a5d9e47e8ef81682d1a6e4a98"],["/JavaWeb1-1.html","1faa8f0f44541a5e077e746422ac7c31"],["/JavaWeb4-0.html","c197a7b3a65f4674950eac1bcc2e77d5"],["/Markdown_Typora.html","818f7a3c054adfedecca93b954daf1a0"],["/NodeJS.html","a0e53fe7cf7f9709b7cd9522558b2dc0"],["/Python.html","5415411b9373a27f3a49351e205736e8"],["/Ubuntu-XMind.html","919b98b406b95e3b9cf2860938d31de6"],["/VPN.html","0a585911b7251edadef20cd1d18b2831"],["/Vue1-0.html","7661f86f721f93cfd4fadf4f02d21915"],["/Vue1-1.html","b1e4c575098b17475ff69ccd500c00c7"],["/Vue1-2.html","87015554110d799a37d855499366fe5c"],["/Vue1-3.html","5898d68ea22072fb13aa5c41fd38f12b"],["/Vue1-4.html","5cbfc78e7d79c4b7c7cf674b353b6777"],["/Vue1-5.html","048b6c193eb32b76cce587d8c0e27e7a"],["/Vue2-1.html","00a7cd3f745ffea5c83db8de881cec22"],["/Vue2-2.html","73e90c5d8e19f2908ec1f786ac958d15"],["/Vue2-3.html","21e2d463ddcd8d1aca1fd31457e49f97"],["/Vue3-1.html","3880b97f7434c0468611cf3961da5fe4"],["/Vue3-2.html","9c34817e88779f65d96aab1d3a24a54b"],["/Vue3-3.html","dbdfde7177a6731aed634166dacda55a"],["/Vue3-4.html","c14f037a2a9f8dfb29865720f169be51"],["/Vue4-1.html","28b490818225251b95a0ac6a1d509560"],["/Vue4-2.html","a0666e857cff5bd0f8a6c4366280303a"],["/Vue5-1.html","2ed2a284e50cc8409c15665c1624b00b"],["/about.html","8638c60f5f30eb6b510649618c8cfb09"],["/alipay.png","dfcf79b78e9d0b6500c48a899a66ecc4"],["/archives/2019/03/index.html","b9e0b109f0cd9b46542119f4e6a8f1fd"],["/archives/2019/03/page/2/index.html","cc9d28388ab7ce3f4c3be3033b5f523f"],["/archives/2019/03/page/3/index.html","ee5da1333fe9910b981856a88fa8fe36"],["/archives/2019/03/page/4/index.html","62a57eb73095da22a7153ce1d9e5e26a"],["/archives/2019/03/page/5/index.html","df850ccd3aada546b57f2fe0eb76f7eb"],["/archives/2019/04/index.html","a0e645430ae3cbc569b3766267c22591"],["/archives/2019/04/page/2/index.html","90200f342fe43f3186107d09f0066607"],["/archives/2019/04/page/3/index.html","f8dd331c942bdac4ab8e5bed2e69c7d4"],["/archives/2019/04/page/4/index.html","f6873381797d939291025bd66723922f"],["/archives/2019/04/page/5/index.html","6024df64a7170f0fbdb36215b3dfcc1c"],["/archives/2019/05/index.html","38394ed6fe92f181ce8663b6cfc8f3f5"],["/archives/2019/05/page/2/index.html","78449d91c519b21d3d8babaf558b0a12"],["/archives/2019/07/index.html","1e46cdaa2869c3ec6cc5282cf467023c"],["/archives/2019/08/index.html","ea2ff89aaad3b764084e14ccbeea42cb"],["/archives/2019/08/page/2/index.html","815e56233bf91d07272a73585ce9fb64"],["/archives/2019/08/page/3/index.html","0af2930af78de6a7d33af53952710e51"],["/archives/2019/09/index.html","aa13e1b43010b78cb1d49c1856c525fd"],["/archives/2019/10/index.html","9fd859974d63f1356a833a048d03211d"],["/archives/2019/index.html","154e6733c7339f0b772ef2b1b8d14861"],["/archives/2019/page/10/index.html","73510a60986904f08817b5a136b33523"],["/archives/2019/page/11/index.html","14aa9469b11089bdcf07d0def7c53fc1"],["/archives/2019/page/12/index.html","5c34cb64cadc20e9a5f75f29c29045f1"],["/archives/2019/page/13/index.html","cca3cae7bba4d494f7dc37e3e2255373"],["/archives/2019/page/14/index.html","9b0894544fd09ef6ea494cd9d64dab28"],["/archives/2019/page/2/index.html","3eb7b88adf00783ef69b003820727dc2"],["/archives/2019/page/3/index.html","0a7a802e44d636d4cf85019c95b08537"],["/archives/2019/page/4/index.html","eff5ec4e796c9df5d722c289dd9a1cd0"],["/archives/2019/page/5/index.html","5b172c4f06b4d44841f9afc456e142f0"],["/archives/2019/page/6/index.html","291639f2f0699c9db93962972a8473ef"],["/archives/2019/page/7/index.html","1bddde84bc5032bcdf80b49f973df71f"],["/archives/2019/page/8/index.html","dfd0aaa09b92bb8472d586a17a56351a"],["/archives/2019/page/9/index.html","4c151e9895db2cf2746456b1b101ac9e"],["/archives/2020/02/index.html","95d9bcc43d2462fa64138c96b67b5260"],["/archives/2020/02/page/2/index.html","3ed9680d59354d4d4606bb85a93ba6b2"],["/archives/2020/03/index.html","e66b904a2beab0dde16df3bb5f57c65c"],["/archives/2020/index.html","d9b720e3901a59a6b95a338adb90534e"],["/archives/2020/page/2/index.html","bf0297c498f6699b55acd5c4b06683a4"],["/archives/2020/page/3/index.html","12a186783d1f7055eaad817d6065dfd2"],["/archives/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/10/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/11/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/12/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/13/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/14/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/15/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/16/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/17/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/2/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/3/index.html","ede17f10dd6be025a7e593acf67e3cbd"],["/archives/page/4/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/5/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/6/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/7/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/8/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/archives/page/9/index.html","516c25ba780cf7a5f256cd9d6b6419f7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","3aaf568ef4d63c7392ab1804988fd19a"],["/bbs/index.html","cac3dc94934b400e61a76b0269c926dc"],["/categories/Hexo/index.html","6f10329ae4c6f475742c328a2521c137"],["/categories/Java/JDBC/index.html","54a76d405e937dc242828576bfd70677"],["/categories/Java/JDBC/page/2/index.html","79c6987548e9327f36dec158446e24fd"],["/categories/Java/JavaSE/index.html","41740b7060368a30c175d46f98ca5503"],["/categories/Java/JavaSE/page/2/index.html","ec51cb703f2466f633db431816d1b868"],["/categories/Java/JavaSE/page/3/index.html","2a549e79888b59f6a2a484989341fb19"],["/categories/Java/JavaWeb/index.html","bb82cb1a55923c7db9c56ae2a8d951a1"],["/categories/Java/Maven/index.html","0d22f47ac706a0e2532c47a2edb0342b"],["/categories/Java/Maven/page/2/index.html","cee16d58e742db75b68bd90f5f1a6da4"],["/categories/Java/index.html","2de7fb195009b27051701c1192186d6d"],["/categories/Java/page/2/index.html","66d6e0efbf65cb8cd0daf470b0ceb425"],["/categories/Java/page/3/index.html","be6f6c59c5092b1bdace42f54a846a2e"],["/categories/Java/page/4/index.html","2c5c7e754812575f2d8141f961b82723"],["/categories/Java/page/5/index.html","609f2818686ece5c519d3618641d8f12"],["/categories/Java/page/6/index.html","dd17c8644692c421ea4ed77d76148f3c"],["/categories/Java/page/7/index.html","9a94c9c38e1692944aec544f5a04442b"],["/categories/Ubuntu/index.html","dc22cdef8388ce20523808dcc1eba359"],["/categories/index.html","3276deb879b847fa38f2459aec4bee57"],["/categories/python/Flask/index.html","4e357301ffd6d9376e6516aa76cfd8a6"],["/categories/python/index.html","3ff17ac613843ab20f1b0dd30af0feff"],["/categories/前端/Ajax/index.html","f89e0511718b36cbe05209609bc57a28"],["/categories/前端/JS/index.html","fe95e56def3f937c31a1c5624bb31ef1"],["/categories/前端/JS/page/2/index.html","9a46db91055baddc9d704f72ead2467d"],["/categories/前端/JS/page/3/index.html","1434c1a98e9b95a83af7fd1a1b3cc65d"],["/categories/前端/JS/page/4/index.html","0b4393d3d1dd95995b9482ed4ff102aa"],["/categories/前端/Vue/index.html","5fc943ebd4cb9e318111d5ae700e0ecf"],["/categories/前端/Vue/page/2/index.html","3df6320be72ee44a7f34d21e504fed02"],["/categories/前端/Vue/page/3/index.html","994f2f3241bb82ae041736d575651cf9"],["/categories/前端/index.html","20fbf5c987db1240e7dfb3f152c0b19e"],["/categories/前端/jQuery/index.html","64e197af301cab7eab79f866dce85d53"],["/categories/前端/jQuery/page/2/index.html","daeadbfeb952a3d25c5f17b19b3523ea"],["/categories/前端/page/2/index.html","b5d3bbe09ff9215d68bfaec87e5aa0f3"],["/categories/前端/page/3/index.html","c7755a5f46b27cb51ccc2876bc96ef1b"],["/categories/前端/page/4/index.html","bc08a8ef4ae557163f09b4e0903cc06a"],["/categories/前端/page/5/index.html","352049d2bba92df1bb71a1512803d947"],["/categories/前端/page/6/index.html","6ee1c294df115d2d605f500410d19fce"],["/categories/前端/page/7/index.html","fdb55ae73be7f73978db470515d7dd05"],["/categories/前端/page/8/index.html","8a79dafd0a435d408f567c114776f4cd"],["/copy-code.html","426fe44e44e3f5ab4448b6e232ef3c98"],["/css/style.css","67f705803c8315a6c15b61c225630205"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","1d64f24fc153001860a4c1fa0d757dad"],["/hide-code.html","949aab425324e22adc919b5b1cbfff1a"],["/https.png","f79edebc508d8ee905407b64adb7e7da"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/imgs/JS/1.jpg","e9d53f7f4641d89c3f9e8c7bf67cc962"],["/imgs/JS/2.jpg","3312ac939c56cd82255bfa3090a8c08f"],["/imgs/JS/3.jpg","5f73808afb7e9a44c7272e1af6e5b820"],["/imgs/JS/4.jpg","f97e7be2f0f3cc37e20196fd50185464"],["/imgs/JS/5.jpg","759270dc66c99e52e61cc7732503f2fd"],["/imgs/JS/DOMTree.png","c157e75ff8b2803f2e9bd8cc55851037"],["/imgs/JS/Memory.png","d26ca9baa8b3b9ae4aa30cccabadffe0"],["/imgs/JS/Node.png","e69953568f8d939faaff07e4fb89051c"],["/imgs/JS/ajax.png","5e9d8bc348789f1295e4fda684df075a"],["/imgs/JS/debug.png","a61f70fb4b73d20a08fb114266b0a8c1"],["/imgs/JS/prototype.png","9960bf60b09fa3c0fabf359ef51a3f41"],["/imgs/Java/Collection.png","c6b77b100113a188a8547b0a6ef1bc44"],["/imgs/Java/Exception.png","863d7bd108431408fab90ee5413fec26"],["/imgs/Java/IO流.png","c141cd49ecab3834e4140143eae8013c"],["/imgs/Java/JAVA学习路线.png","a5f292a55208c4d7e6caaa6fbd7ccaef"],["/imgs/Java/JDBC_01.png","12a5a1d1c8a0809ea23a7d55983692dc"],["/imgs/Java/JDBC_02.png","3494101bfad2c38d42a61de6638c57ab"],["/imgs/Java/JDBC_03.png","19866dcbe8e375531fdfeb68dcee39e9"],["/imgs/Java/JDBC_04.png","d2658cb15631f1bfce89cd15d6c3a250"],["/imgs/Java/JDBC_05.png","a562e5279501cbf5d8d6aee045d5c5a9"],["/imgs/Java/JDBC_06.png","b0cd235f7acdeffb0191c3a972655cf2"],["/imgs/Java/JDBC_07.png","c9023e9e67b1340aa3cff3db6129418f"],["/imgs/Java/JDBC_08.png","5ccd1ee153909651d4ba7de8199aa6aa"],["/imgs/Java/JDBC_09.png","fdfc73a686a5e414c4462bf27d89b542"],["/imgs/Java/JDBC_10.png","ea9d72bc3b3e644a81915f8e5e0865e1"],["/imgs/Java/JDBC_11.png","8fc6aec41d0fb26a99ef904137431030"],["/imgs/Java/JDBC_12.png","1fa98e4fa2e735ded896567e92225b16"],["/imgs/Java/JDBC_13.png","96cd1258ab7a2790981a6e4ebd74cb60"],["/imgs/Java/JDBC_14.png","047b93082cd0e7ad90e78f9013816fad"],["/imgs/Java/JDBC_15.png","abf213ab81f661c57ae74777cd16440b"],["/imgs/Java/JDBC_2_01.png","dcdf35bc01576887b8e64745c29fbe41"],["/imgs/Java/JDK.png","ad71591c7137c6b7bb24e8b84f4233c5"],["/imgs/Java/JavaSE图解.png","ccc0b2c7888a90eea91101251ec0a717"],["/imgs/Java/Map.png","cdc4eb3bbdf8483e01a1c15d7aadcb03"],["/imgs/Java/Protocol.png","e6c10b0deabc5a58ce0a464945d1babf"],["/imgs/Java/String.png","e35655868d927d791b61e94de9fbae62"],["/imgs/Java/String[][].png","8d07477a038be96392b9af4ab7d4c25b"],["/imgs/Java/String内存.png","cdad705c5a199b85e78d00c3dde631b8"],["/imgs/Java/Thread.png","de2c41be444d3dc299d060a2065b4532"],["/imgs/Java/static.png","b6945f6f75474ffd140c28917ce843d4"],["/imgs/Java/swap.png","da604af002d156b569eae42876fe8e02"],["/imgs/Java/二维数组.png","5b0280abdd56b81a3d40b5d6d9b6ca2f"],["/imgs/Java/体系.png","9fa0fc91f707fe18b8cd306ed15768ac"],["/imgs/Java/修饰符.png","e181921844fcc48ae680948ce9f9754e"],["/imgs/Java/值传递.png","656e2d2786750ac07f5e87f2b62660da"],["/imgs/Java/内存结构图.png","3d9035c11324267f3a247f809ed8290e"],["/imgs/Java/包装类转换.png","f06b40e90af283c49d4a239828cbaa72"],["/imgs/Java/安全问题.png","64d52929ffa94fae128b9bd0c10c49f4"],["/imgs/Java/数组.png","7d6b1e5a6f06c125766b52adaa9f3d49"],["/imgs/Java/类的高级特性总结.png","5c046ddc2487fea7c235ba378f6e316f"],["/imgs/Java/线程的生命周期.png","95f7145d7ec2cde3a697ee5c3a81373a"],["/imgs/JavaWeb/JavaWeb1-0.1.png","a3856fbef7bfc3be80fb1bf403809bd2"],["/imgs/JavaWeb/JavaWeb1-0.2.png","61c9df86cbe2239e92a6603ac9e5a9f9"],["/imgs/JavaWeb/JavaWeb1-0.3.png","404ec7fb9615c5600a170cddb01c0eca"],["/imgs/JavaWeb/JavaWeb1-0.4.png","d73385ff7854047b902ae42fc977f266"],["/imgs/JavaWeb/JavaWeb1-0.5.png","8bb83d5f1ca808d0eb948ae41e6ffcb9"],["/imgs/JavaWeb/JavaWeb1-1.1.png","52adbadad1b703c8d158177dd1300d9e"],["/imgs/JavaWeb/JavaWeb1-1.10.png","b50d180b140058dd509244939b270771"],["/imgs/JavaWeb/JavaWeb1-1.11.png","f31599fd77d00c18a440e4a48d2abc79"],["/imgs/JavaWeb/JavaWeb1-1.12.png","8c6d39f46ae5a685c798157d93c2b6e1"],["/imgs/JavaWeb/JavaWeb1-1.13.png","bb545a22efaeb581c8ab2021224d6edf"],["/imgs/JavaWeb/JavaWeb1-1.2.png","330ce4f7a8bab99edac9e7385d7452f0"],["/imgs/JavaWeb/JavaWeb1-1.3.png","5beaa5e5a17123a6b88280c812a2fc58"],["/imgs/JavaWeb/JavaWeb1-1.4.png","aba5586d4eb72cb743e1066ef3948e1f"],["/imgs/JavaWeb/JavaWeb1-1.5.png","afcfd9c5110c9f832784ccf48fa9ca4e"],["/imgs/JavaWeb/JavaWeb1-1.6.png","6f1bcc0bf0dd643f60c51e19e4b2fee2"],["/imgs/JavaWeb/JavaWeb1-1.7.png","ce42f1ce31017b3e882f38e216d17567"],["/imgs/JavaWeb/JavaWeb1-1.8.png","fdb4f17f0cce9cc61d0582644a1c1076"],["/imgs/JavaWeb/JavaWeb1-1.9.png","852c0d99dbfb2083750cc8348383beeb"],["/imgs/JavaWeb/JavaWeb4-0.1.png","684e7f309780760ca457a1c8a4be1c5a"],["/imgs/JavaWeb/JavaWeb4-0.2.png","c353ed21307ed5e78feb4a241d43695f"],["/imgs/Vue/Vue1-3.1.png","47dbe87ecde7494f1e645812c4b364eb"],["/imgs/Vue/Vue1-5.1.png","864f590b592b3e1dda4a0d365069193b"],["/imgs/Vue/Vue1-5.2.png","007bd19ec40a2ad9dc3661f74cb2ba0a"],["/imgs/Vue/Vue2-1.1.png","d37f9815348d120164c81f54a45a59e6"],["/imgs/Vue/Vue2-1.2.png","bf3162a8f37b62db4ad1d8969e688dd9"],["/imgs/Vue/Vue2-1.3.png","52195034c7171c26e5c3d2b6b58b7c49"],["/imgs/Vue/Vue2-1.4.png","ece33c6965cc2eca7c4ca6292a7b5828"],["/imgs/Vue/Vue2-1.5.png","25027297cf1ab8ad61fc0a9e842c7499"],["/imgs/Vue/Vue2-2.1.png","250fe60e7603f6a860f305d2a9d681d1"],["/imgs/Vue/Vue2-2.2.png","4874518ac147e704fafc950ba43f0548"],["/imgs/Vue/Vue2-2.3.png","2b3e67fa853fd70925d2ac96a13c306d"],["/imgs/Vue/Vue4-1.1.png","1ac4829ed3508fb9f4158153803a7943"],["/imgs/Vue/Vue5-1.1.png","10d5c4023b8e00d473b0450d4738ea56"],["/imgs/Vue/Vue5-1.2.png","9cb46f3ad04fa72b0bce1d2bee05325c"],["/imgs/conf1.png","770e6e29fb2d51a9b9b2d51f2671d094"],["/imgs/conf2.png","9536f97e0c1160207f81c9bbe7bd5128"],["/imgs/conf3.png","3796fd78f5a2aef9a209ed048a5fa24f"],["/imgs/fold.png","cd489b2f86b0c692dae11d9827180a50"],["/imgs/gitee.png","0cf41aa37a46eb736d31f34e9749188b"],["/imgs/github.png","b8cb88af3cfc76058351c127373a858f"],["/imgs/github02.png","76459ee8c5377b16e94401ae7439467d"],["/imgs/github03.png","ba54b82eecce82ca09ff75f290e51acc"],["/imgs/github04.png","54b8de124f8df866653fcb70a0d8d61f"],["/imgs/github05.png","984a03f8276f472488b588ce440c43f6"],["/imgs/github06.png","f708db12b1eb832e1cbb94af4514940e"],["/imgs/github07.png","580ddef37d914fcf955d52e7e65960ea"],["/imgs/hexo.png","1edd6703b0d3b456c73c884bab2bd459"],["/imgs/maven/maven_00_01.png","0d20ed96462c1febef2e058976154537"],["/imgs/maven/maven_00_02.png","521f3ccd1b4debf9489d31e7baa33d90"],["/imgs/maven/maven_01_00.png","ef7926e41b8d5ddba34a94c29b7acd66"],["/imgs/maven/maven_01_01.png","8a4b7a038643dcec9794df1dddd851c5"],["/imgs/maven/maven_01_02.png","dc6ff1a28f120c0570abc7dcb8c74e64"],["/imgs/maven/maven_01_03.png","9c3f2e992105f17faf3fa07f8986972e"],["/imgs/maven/maven_01_04.png","ccb3f62b42348399d6657f9b047975f6"],["/imgs/maven/maven_01_05.png","e21ee114a840c257c08f278fbb05be09"],["/imgs/maven/maven_02_01.png","2bf56f43dc3f2dce89961cedeef25008"],["/imgs/maven/maven_02_02.png","efeda0a806c223c87e9dc8f37d47639b"],["/imgs/maven/maven_03_01.png","31a47aad2b9d12b2a1b94c2f86acfb86"],["/imgs/maven/maven_03_02.png","9044e2571e39020c4460512cd11e6d69"],["/imgs/maven/maven_03_03.png","1edddd4d565912ca6d7d3e5aba3a50e2"],["/imgs/maven/maven_03_04.png","d6d8c05fc68531fd86d7194bba6b6046"],["/imgs/maven/maven_04_01.png","d7669f69e7085e1b32c3ef33972dfff2"],["/imgs/maven/maven_04_02.png","34f449e798bc7a2ecc374f6b17b9826e"],["/imgs/maven/maven_04_03.png","2b34bf255bb2a1f80ac968c8c82c7ca6"],["/imgs/maven/maven_04_04.png","3415811658176a12471427c9a8a7d436"],["/imgs/maven/maven_05_01.png","5dec07efcdb2936bbb425c010eb90c96"],["/imgs/maven/maven_05_02.png","fd2489e807df80963609004f137b9da4"],["/imgs/maven/maven_05_03.png","8793340120fc75a51b467e84c9fd32d0"],["/imgs/maven/maven_05_04.png","15f5436885243e1d66e88913035f4b8a"],["/imgs/maven/maven_05_05.png","479cc852fe856d0a4de8641c74614e55"],["/imgs/maven/maven_05_06.png","397988188f3948a582ab540d734ea2d6"],["/imgs/maven/maven_05_07.png","ad71a3fdc94cbdaf9cda0b70c3373089"],["/imgs/maven/maven_05_08.png","670065d5874eb2719d3092b3f8a83874"],["/imgs/maven/maven_05_09.png","8de79de135066316e6b808f4098f1dab"],["/imgs/maven/maven_05_10.png","e45a6e3d0a314d7f1321f577cdb013c1"],["/imgs/maven/maven_05_11.png","9f4601b6fd581579853d4343a69ed1ad"],["/imgs/maven/maven_05_12.png","7196c566813f56adae2c9e69ae144c13"],["/imgs/maven/maven_05_13.png","20a7aba354779f30d5632e649f9f9673"],["/imgs/maven/maven_05_14.png","116d7909f3c50a82cda7e8bc67f6cd3a"],["/imgs/maven/maven_05_15.png","64fe27781391ef5364e23ddc9a85d49c"],["/imgs/maven/maven_06_01.png","63a9cc0e564b1c55b0ac16f76f1ded53"],["/imgs/maven/maven_06_02.png","dbe365cfadfe29334f8f1629d8d4dc06"],["/imgs/maven/maven_06_03.png","2e9d5a9923d27a06c8b1d474dc3d2b29"],["/imgs/maven/maven_06_04.png","44b274eb82a22a993ee0e1a829fd4faf"],["/imgs/maven/maven_06_05.png","7ba49a4b7e77a1ed6d96e12ebac38e7e"],["/imgs/maven/maven_06_06.png","d61f51dfea2f7a17a7b76109178d9edf"],["/imgs/maven/maven_06_07.png","f54373f61e960ced9e636764c316105e"],["/imgs/maven/maven_07_01.png","0ee01053e9f3cd3d7371c1c919326dc3"],["/imgs/maven/maven_07_02.png","970fa8d2f9714d04f820266e59feb825"],["/imgs/maven/maven_07_03.png","1dfe5e7df177e377f02002b0b2d0cb4b"],["/imgs/maven/maven_07_04.png","9716c08af749b33f954dc591dd76c56b"],["/imgs/maven/maven_07_05.png","73b80e82d7d4613f8ab4c0bcd6eeed57"],["/imgs/maven/maven_07_06.png","def5c7c1303fbd94dcd52f1a20a09531"],["/imgs/maven/maven_08_01.png","a4a8e9854fa8831860250340065abbd8"],["/imgs/maven/maven_08_02.png","6d5f0b5f5e83c18bc8795d6b99e2648f"],["/imgs/maven/maven_08_03.png","b17fcbb238e2ec6e6c576b467f5d0ee9"],["/imgs/maven/maven_09_01.png","9e982a70600020ca5577ab0f065e5c67"],["/imgs/maven/maven_09_02.png","d42af075e43846d175c85594ca1e5c76"],["/imgs/maven/maven_09_03.png","b1694aa001a0673b52157e56aee272db"],["/imgs/maven/maven_09_04.png","4fff3140b6dfdce1ee4b8a4f341b3e92"],["/imgs/nodejs01.png","0cabc880418550a790f2c392879adcc2"],["/imgs/nodejs02.png","ccfe226fcad22c003b986ad64f92ec62"],["/imgs/nodejs03.png","dc51da5285f1d5d6063eae0498fc4704"],["/imgs/nodejs04.png","f0bdab4c02af7174288e6d87dae27d5a"],["/imgs/nodejs05.png","cc72195f1658dc562a5b16d81bc763d9"],["/imgs/nodejs06.png","321ff200d0906d61f3d18a99ccd5a06a"],["/imgs/nodejs07.png","82bb4ec677a65cd95da56203fa076e04"],["/imgs/pages.png","411f684917aef17ae8e81db100a5c43e"],["/imgs/shell.png","5ceba2e6f999514be41b730d2ba07aa0"],["/imgs/ubuntu/XMind-1.png","75ec8bf35d148392e84a08ba9ccad191"],["/imgs/ubuntu/XMind-2.png","bc0d47b2904bc33d7d559812fbe3afe3"],["/imgs/ubuntu/hello.py.png","0c26193575fadedc688cd48aa578d921"],["/imgs/目录.png","3d859db538030b97f0764f1535eee3ea"],["/index.html","104ebbc0e7340748c0cfaccc5c43dec9"],["/jQuery1-0.html","620784caeb432dbdd83f044a9fef35f0"],["/jQuery1-1.html","579ae8dc107f320a2a50bc7787081d1a"],["/jQuery1-2.html","5d3c648ad8758538da9cdf0a1e8a1288"],["/jQuery1-3.html","ab9b8e9021d6b634333a3d12ad0bf641"],["/jQuery1-4.html","ae80f1f23876caf4cff3788b70601584"],["/jQuery1-5.html","019d167814abacd309c477c7f5a4d847"],["/jQuery1-6.html","dc27e41d84e64e1249a1007f743ce968"],["/js/app.js","91c985f35ba8c0452881db15766fc0fd"],["/js/clicklove.min.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/sitetime.min.js","385d55c19e6c1792b9691ecd32ee1ceb"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","f8705875d39099c826f022d40581822a"],["/js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["/lazyload.svg","f4489d723e9e86c72a1411d56a49229e"],["/maven_00.html","717301df66344b0aca7e554127355d6a"],["/maven_01.html","8abdeac56ae76ee281f6fe0c8b891038"],["/maven_02.html","a61d2dd0eaf5bb1c78a63246be40e1f4"],["/maven_03.html","4d5c4364fd0ac8a447abb560955cb8ba"],["/maven_04.html","aca52a38bad56997d883f849a2d229e8"],["/maven_05.html","fa274f96a5c4860e821bcdafc3da57e1"],["/maven_06.html","589b97471f89e60da5fbe01ebd95553b"],["/maven_07.html","e86d2abac01662c6e9617772d84e3855"],["/maven_08.html","7e9246e8263a54b4ed3e226ba030775f"],["/maven_09.html","6059091b0f75c43dad4c16e5edea0ac4"],["/page/10/index.html","0bcb3fd950f492df2e85abdbfe36082e"],["/page/11/index.html","4fcb23a3530b56ac73dac7ce33e64609"],["/page/12/index.html","8de3e2a42eeb2ca8344dc4f4f6caa5ee"],["/page/13/index.html","2f391c66aa2985e8d6b2508a683a1565"],["/page/14/index.html","7ee18d5670ba4aa233c9da86de972f12"],["/page/15/index.html","07fa2dba40a11df91b891055f6ba31af"],["/page/16/index.html","6841ddc9a26fa33d9413a2194b4c7e8a"],["/page/17/index.html","76c7ac8a92ea68df4922e0b38e28f553"],["/page/2/index.html","577ce8d973a8f10ce5246c4964f0f640"],["/page/3/index.html","c40de51394687f761c21e4dee446fef3"],["/page/4/index.html","daf624e5629d7e9723a75e7e7175fb38"],["/page/5/index.html","b91cd32e3fc7eb302175a0e7442d47cb"],["/page/6/index.html","c46b0ecba9d1ca2ecdce6de3cab5d301"],["/page/7/index.html","905a2e9ff6933f64e057bdb0dbf97e8b"],["/page/8/index.html","1bf3ab4c87f181e11cf2057d975e4f4d"],["/page/9/index.html","ae8b5052466552f4b98c9fdf35399391"],["/tags/Ajax/index.html","1b6a1b9fc86867cdf97e92441bc6d9d4"],["/tags/CentOS/index.html","d0db0a395498533ee6b600e898e5a311"],["/tags/Database/index.html","6ed2ef997a793b9b55637a65dba48233"],["/tags/Database/page/2/index.html","a9f0848999815d8196af8011783cf7f6"],["/tags/Flask/index.html","f55de4a466bc6ef5f7f5f8f3d33f0846"],["/tags/GitHub/index.html","42653ee3994f3461547d5e60355e425b"],["/tags/Gitee/index.html","52bdb80b585e813fff6d637db7946aef"],["/tags/Hexo/index.html","ab022ea529a8e5825c88f5201d0b011f"],["/tags/JDBC/index.html","3435135f14f5dd4694d60d867d5de70b"],["/tags/JDBC/page/2/index.html","74feeccc0f895e80ca6cde711f3ee33b"],["/tags/JS/index.html","4271ebfe51d25c62e3eedae2105fd7c6"],["/tags/JS/page/2/index.html","2937b1e94b2f5962fe9e9c2c3163e7a4"],["/tags/JS/page/3/index.html","74eca74a78588d26218b1ef4432be6ae"],["/tags/JS/page/4/index.html","b24e1ad5968870cd9dcdb031fbf5428f"],["/tags/JS/page/5/index.html","03bc87546e81f92793f5115c81dd8b39"],["/tags/JS/page/6/index.html","d948a6c20a133014252ac9f3f8de7779"],["/tags/JSP/index.html","9f2ebae72a93231275ebfb9c881d23b7"],["/tags/Java/index.html","dc7e785117b8fa5071d40de2de2a370e"],["/tags/Java/page/2/index.html","48fad55d98601fa33edc22d67b16fa62"],["/tags/Java/page/3/index.html","a4a44211d35667aa43ff1d4326cbc2c1"],["/tags/Java/page/4/index.html","3c5e61aa42807415303f346aee4fb2ec"],["/tags/Java/page/5/index.html","83d354e2a7a6a5fa5a6fa3c0eb870344"],["/tags/Java/page/6/index.html","58ae0d05e7639575d978911cd3d389eb"],["/tags/Java/page/7/index.html","2d513b7d11d8de61052cee33e7b58469"],["/tags/JavaSE/index.html","a4f489a3403fe829af6c28aa561b259a"],["/tags/JavaSE/page/2/index.html","fe88c934a1ee3ebde6667334ba8e9140"],["/tags/JavaSE/page/3/index.html","900a707e2ed831077b2d01a2fe4c22fe"],["/tags/JavaSE/page/4/index.html","365257ea2dc01fe7d9308d9caa2d3621"],["/tags/JavaSE/page/5/index.html","5b752a0fd1b1b028eb94e1c56136c79a"],["/tags/Markdown/index.html","8af31567d2f1fe77420c3ba73272ff1c"],["/tags/NodeJS/index.html","178b5e24973bfe6a066de0d5fea67273"],["/tags/Python/index.html","1adea1cbfa8fdab9767ae07e9e47312e"],["/tags/Servlet/index.html","6a2888b7fa4879f91d6aadafd65bec0a"],["/tags/Typora/index.html","72c48a6fb70f2231028ea9f19cda53dc"],["/tags/Ubuntu/index.html","d59afe7d8cb1af7efe0e80403fa3afb5"],["/tags/VPN/index.html","334334e51582c6a5448f06813eb741ad"],["/tags/Vue/index.html","91c9d7408720fbf431686fd3cac19956"],["/tags/Vue/page/2/index.html","8f11388666f3c61a4a2653c526726450"],["/tags/Vue/page/3/index.html","e7bb4ab0c1082d58a460a7c55e8b9671"],["/tags/Web/index.html","d03bd7c08da5073f71cd7b0f68d7dd9b"],["/tags/index.html","c9b3b627df047b0e5477eeb268056d96"],["/tags/jQuery/index.html","82320b10387c928c4eeb50164b7bf9ea"],["/tags/jQuery/page/2/index.html","9f61757366b3d26490ea016198138008"],["/tags/maven/index.html","129e0db41bd795033c19b676fa74e43b"],["/tags/maven/page/2/index.html","0b22fbcb625a4035cf06952e5c33ab4f"],["/tags/npm/index.html","6353bf83fe91801237f2cec033d17e51"],["/ttf/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/ttf/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/ttf/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["/wechat.png","98c80247a70a0f21da6152ecf6299037"]];
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




