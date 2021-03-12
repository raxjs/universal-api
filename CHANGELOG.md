## 1.0.1 (2021-03-12)

### Bug Fixes

* **scripts/build-plugin/rollup/build.js:** 修复构建时丢失 babel 依赖的问题 ([a6d6743](https://github.com/raxjs/universal-api/commit/a6d6743bde823f6927565ad3897b7fb08718ca1d))

* env 依赖移到dep,修复大包 types 指向,修复部分 api bug ([44bcc31](https://github.com/raxjs/universal-api/commit/44bcc31c67aeb44ffa4bb0709d222564a8e21583))

* @uni/file@1.0.1 
  * 移除 @uni/env 的 peer 依赖
  * 修复 Promise 返回参数没有正确格式化的问题
* @uni/application@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/unitTool@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/canvas@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/accelerometer@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/clipboard@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/systemInfo@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/toast@1.0.2
  * 移除 @uni/env 的 peer 依赖
* @uni/loading@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/element@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/intersectionObserver@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/confirm@1.0.1
  * 移除 @uni/env 的 peer 依赖
* @uni/location@1.0.1 
  * 移除 @uni/env 的 peer 依赖
* @uni/image@1.0.1 
  * 移除 @uni/env 的 peer 依赖
* @uni/navigate@1.0.1 
  * 移除 @uni/env 的 peer 依赖
  * 修复 back 的 types 提示
* @uni/request@1.0.1 
  * 移除 @uni/env 的 peer 依赖
* @uni/storage@1.0.1
  * 移除 @uni/env 的 peer 依赖

### Features

* @uni/canIUse@1.0.1
  * 更新 @uni/system-info 的支持信息
### BREAKING CHANGES

* @uni/system-info@1.0.1 更新调用方式,加入异步调用方法

## 1.0.0 (2021-01-26)


### Bug Fixes

* 更新toast文档 ([b9baf41](https://github.com/raxjs/universal-api/commit/b9baf4145f90bc73b4c3cd6f1cba726050f3111a))
* 兼容 1.0 class 组件在 Web 下 transitionEnd 回调失效 ([#47](https://github.com/raxjs/universal-api/issues/47)) ([e2473c7](https://github.com/raxjs/universal-api/commit/e2473c7ec366adb9281eb767d28a7e60f8501a7f))
* add eslintrc ([414f9f5](https://github.com/raxjs/universal-api/commit/414f9f5249b2d77ef56282ca878f41d9d26f9fca))
* add file suffix with wechat ([#17](https://github.com/raxjs/universal-api/issues/17)) ([60cb521](https://github.com/raxjs/universal-api/commit/60cb52116e738a246c7184b81156e1fb967ce255))
* calculation device accuracy ([#8](https://github.com/raxjs/universal-api/issues/8)) ([e02b573](https://github.com/raxjs/universal-api/commit/e02b5736e2e031d20e1fc6bc85381d17eb18e95e))
* ci ([39e003a](https://github.com/raxjs/universal-api/commit/39e003aa5526e197335dc419254eb9885866c5f4))
* ci ([0eca644](https://github.com/raxjs/universal-api/commit/0eca64429f57adccca982dc023f3fc6c8ec4b67e))
* compatible setRpx ([febe7e5](https://github.com/raxjs/universal-api/commit/febe7e53394115bccd3ef91f95f5a83e9010ea4b))
* compatible shell env ([c71c20c](https://github.com/raxjs/universal-api/commit/c71c20cdf86a8254194ba268024c48101078825b))
* compaty node ([#68](https://github.com/raxjs/universal-api/issues/68)) ([3187892](https://github.com/raxjs/universal-api/commit/3187892675aa0a6c97254ca61afab47563d0e592))
* component plugin version ([b072b64](https://github.com/raxjs/universal-api/commit/b072b64f4b8a91701c82b0f5e2045ef68893bd52))
* delete ([a4505da](https://github.com/raxjs/universal-api/commit/a4505dad98006243cb0cdd7d65529c170b22afc6))
* delete ([ab7790d](https://github.com/raxjs/universal-api/commit/ab7790dbbbd7786c1522aa3031073d2497863877))
* delete console ([33e9742](https://github.com/raxjs/universal-api/commit/33e9742115082b13f42b9befd81f8fe9f9edc543))
* delete module ([b0a041e](https://github.com/raxjs/universal-api/commit/b0a041e31e212b2e433faf60700daf727d9c4ac1))
* delete options ([f480a30](https://github.com/raxjs/universal-api/commit/f480a30059e35a19c5cec1119afb1bcd1aa3dc0f))
* directory unification ([41f5b35](https://github.com/raxjs/universal-api/commit/41f5b351040a27d1c9d908907e8cf009060847a5))
* docs ([877e330](https://github.com/raxjs/universal-api/commit/877e3300ece9cfa49d37a585d4564d84f3f10279))
* docs ([4ff0213](https://github.com/raxjs/universal-api/commit/4ff021375cb65d9ece5c429141d955e45b0e82d1))
* env 依赖移到dep,修复大包 types 指向,修复部分 api bug ([44bcc31](https://github.com/raxjs/universal-api/commit/44bcc31c67aeb44ffa4bb0709d222564a8e21583))
* export ([d9bb551](https://github.com/raxjs/universal-api/commit/d9bb551e0aa43510358318bf5d228065ec311c5f))
* export ([9bb2d3a](https://github.com/raxjs/universal-api/commit/9bb2d3a1f6fe6bc46b291ef64ac1729503b0bd49))
* fix [@system](https://github.com/system) ([e9d2813](https://github.com/raxjs/universal-api/commit/e9d281307da9dc7690f1dc7a2ca7245e9ada08b0))
* fix [@system](https://github.com/system) ([1962d99](https://github.com/raxjs/universal-api/commit/1962d9971de514d641048113097ec32944e76b89))
* hideToastWindow ([29953be](https://github.com/raxjs/universal-api/commit/29953be594cc33bd28ed879a0ec0446d247c4f6f))
* import ([2e3cbce](https://github.com/raxjs/universal-api/commit/2e3cbceaa0caca07cdc51d8089c3c275f24fed05))
* import ([0486b41](https://github.com/raxjs/universal-api/commit/0486b419cbae37c9c6dea6674b0b36d8a30f1e81))
* lint 规则校验 ([3a0b82f](https://github.com/raxjs/universal-api/commit/3a0b82fdd3c36c8002440ff5a57b6a3b4b43126f))
* miniapp repeat ([#49](https://github.com/raxjs/universal-api/issues/49)) ([07803b0](https://github.com/raxjs/universal-api/commit/07803b02f8f628fb9604db5aa448e0bb4f1f9541))
* miniapp return ([#39](https://github.com/raxjs/universal-api/issues/39)) ([b5b60ad](https://github.com/raxjs/universal-api/commit/b5b60add634bdb8fb518124758531dd03e4f58f0))
* modify eslintrc ([cc560d8](https://github.com/raxjs/universal-api/commit/cc560d8e9127b96fda0eea7c406ff0a27ba78646))
* modify package ([53972d3](https://github.com/raxjs/universal-api/commit/53972d36d331996d5acba7e4e2121ed80f4cfb31))
* name ([74a4094](https://github.com/raxjs/universal-api/commit/74a4094d108c4827d692bc396de2b90946a102c0))
* name ([381ae86](https://github.com/raxjs/universal-api/commit/381ae86644a5392666f11d51c54ce84cf74fc668))
* name ([0ac7615](https://github.com/raxjs/universal-api/commit/0ac761567fb3129138af162b6943ba1c42398063))
* name ([8f7bc3a](https://github.com/raxjs/universal-api/commit/8f7bc3af1b4523f134100907afa8cb1887b3cf9e))
* normalize storage api ([becfeee](https://github.com/raxjs/universal-api/commit/becfeeecec4caeb8e7b705f89b5a774266e98017))
* remove web cache ([351f6bd](https://github.com/raxjs/universal-api/commit/351f6bd7c04d57dffd837fa85084cc8f25238e51))
* **Clipboard:** incorrect version of @types/rax ([38d9b47](https://github.com/raxjs/universal-api/commit/38d9b479d753e5555ed3f5f4b127b507f42e1509))
* **confirm:** weex require module ([#93](https://github.com/raxjs/universal-api/issues/93)) ([7111814](https://github.com/raxjs/universal-api/commit/7111814c42e74893dfc5a1797bc947dff903cff8))
* **Element:** deps ([a830f29](https://github.com/raxjs/universal-api/commit/a830f292a559a1bb534ac2d861cbda2a81d23a4e))
* **file:** success with result ([e1a8efd](https://github.com/raxjs/universal-api/commit/e1a8efd0f7a030e98eb7c383a4bf660609c4c616))
* **file:** support callback ([0821716](https://github.com/raxjs/universal-api/commit/08217167ee12fb6a31418552efe12ec5b1738a25))
* **image:** use filePaths in compress image in wechat ([0279b24](https://github.com/raxjs/universal-api/commit/0279b24e1cbf35b9aa2732e00062a86786d6dcb9))
* **loading:** can't export Loading in wechat ([3997d19](https://github.com/raxjs/universal-api/commit/3997d19687dee21a4349227ee41871b5268d2a78))
* **toast:** smooth out the difference of toast ([40dcfe3](https://github.com/raxjs/universal-api/commit/40dcfe3088ce664c0830997d3d489a008a243d96))
* **Toast:** duration not clear ([a616230](https://github.com/raxjs/universal-api/commit/a61623074ffe8fdb1b8af24c0141d19886138104))
* **Toast:** lint error ([c1831c1](https://github.com/raxjs/universal-api/commit/c1831c13e48d8d534d53627e0dfcc1525bee03b9))
* **Toast:** remove element ([b4c3bed](https://github.com/raxjs/universal-api/commit/b4c3beddaeb55ae5e3d03b1985026523b75d44de))
* **universal-element:** wechat miniprogram custom component ([#108](https://github.com/raxjs/universal-api/issues/108)) ([793311f](https://github.com/raxjs/universal-api/commit/793311fd693e7b111b1a936896cfdfbf6396dba1))
* addback demo ([b08f6cc](https://github.com/raxjs/universal-api/commit/b08f6ccc5fd74689c3534ee8a6f722ccc141809a))
* change interface INavigate pop function options' type ([2f243a5](https://github.com/raxjs/universal-api/commit/2f243a5687732b63135a64863ccd58a2bc4c2a83))
* else if ([71df18e](https://github.com/raxjs/universal-api/commit/71df18e83c1d32db6ac654c9cc59373b462ddeea))
* fileName ([34099cb](https://github.com/raxjs/universal-api/commit/34099cbfabee9c9d3f2bc275b2f1a034386f6dc7))
* lint ([9cc46a6](https://github.com/raxjs/universal-api/commit/9cc46a6c3708174596b7aabe654f8c17d58f7395))
* lock eslint-plugin-react version ([703954d](https://github.com/raxjs/universal-api/commit/703954d849b3b71e7bf7e5f5931a65ebcf72bf65))
* miniapp  animation ([d3a010c](https://github.com/raxjs/universal-api/commit/d3a010c2796121b618096fb3b6e7f102eced2f9b))
* put back devDependencies ([e2289ec](https://github.com/raxjs/universal-api/commit/e2289ec2e61f0f38624d0997832fe3fdbca88471))
* readme ([07f3a07](https://github.com/raxjs/universal-api/commit/07f3a07cb0f11e158681e5e6daccd23a4f706a73))
* readme ([4fca79c](https://github.com/raxjs/universal-api/commit/4fca79cc44bff2e10c87d0bdfb922cc74e14f484))
* readme ([07d1cd0](https://github.com/raxjs/universal-api/commit/07d1cd0f98c137cf76e8232c985ddf3ef26daa89))
* readme & rollback device ([ac09278](https://github.com/raxjs/universal-api/commit/ac09278c07a52127c6c94cccd753473d40e80fc4))
* remove demo & devDep ([9f40dcc](https://github.com/raxjs/universal-api/commit/9f40dccd6316b6a809ba7a79ce0f503f639a2d90))
* rollback demo ([7038bc6](https://github.com/raxjs/universal-api/commit/7038bc6d36389ebe1bb71ae99625e97eeec0cff6))
* rollback demo & public ([96fb5af](https://github.com/raxjs/universal-api/commit/96fb5af4e72486d478885e303fd0c1b8a176a121))
* rollback device ([e7833db](https://github.com/raxjs/universal-api/commit/e7833dbaf398a4fbcd112185ce15d047abbd3177))
* transition invalid ([#95](https://github.com/raxjs/universal-api/issues/95)) ([643fbdc](https://github.com/raxjs/universal-api/commit/643fbdc93b53eb9b9b91a78230adf46939923a01))
* ts animation ([27d8c23](https://github.com/raxjs/universal-api/commit/27d8c23c7a18a20b353315f3a9ef1b5ce310d875))
* update choose-image version ([a9ef85c](https://github.com/raxjs/universal-api/commit/a9ef85c9ccb56a83bc4fb4cdc2f9ead3249ac484))
* uppercase ([fac7b07](https://github.com/raxjs/universal-api/commit/fac7b07f853071d65ba7291f76337927e420bfac))
* **storage:** weex value is null ([#81](https://github.com/raxjs/universal-api/issues/81)) ([3f9f4ac](https://github.com/raxjs/universal-api/commit/3f9f4ace4050b368f1d52b048fb7d05a7f10b577))
* navigate module priority ([#32](https://github.com/raxjs/universal-api/issues/32)) ([44d43fe](https://github.com/raxjs/universal-api/commit/44d43fe0872faa0e34452f9c598062ab41d7d0f9))
* remove factory package ([#6](https://github.com/raxjs/universal-api/issues/6)) ([0af3060](https://github.com/raxjs/universal-api/commit/0af30605c50c623326614cf12ca8ec73646e64b3))
* rename factory to interceptor ([#5](https://github.com/raxjs/universal-api/issues/5)) ([1dad8cf](https://github.com/raxjs/universal-api/commit/1dad8cf30f35a1af39f85ef30a01e2a1055ea2ca))
* support wechat  asyncstorage ([#11](https://github.com/raxjs/universal-api/issues/11)) ([690e633](https://github.com/raxjs/universal-api/commit/690e6335c4dfa8489068669976829ce3734d3a3e))
* update index and test ([80499db](https://github.com/raxjs/universal-api/commit/80499db9020c2ac9270e862e8a202d1e02a183c1))
* update isWeChatMiniProgram in env ([#19](https://github.com/raxjs/universal-api/issues/19)) ([5ebd05d](https://github.com/raxjs/universal-api/commit/5ebd05d6f64a807e580465daea6a373731397bb1))
* version ([6977b62](https://github.com/raxjs/universal-api/commit/6977b621f840b3ee9c88f1f602532364fa4ed177))


### Features

* 第一版beta发布 ([f66854c](https://github.com/raxjs/universal-api/commit/f66854c55b2f14116dd8615d27c64b5128b59ec9))
* 更改名称为universal ([0435833](https://github.com/raxjs/universal-api/commit/0435833292c9a9bb52bd1582ea78b0f35e956da2))
* 更新canvas demo ([06993cb](https://github.com/raxjs/universal-api/commit/06993cbf02fbba9fd4c006ee20b0ff440d0e1e86))
* 更新docs ([d659237](https://github.com/raxjs/universal-api/commit/d659237d9040be8b975060e6b4b9c0c7e99ab95f))
* 更新env支持baidu快手 ([75777bc](https://github.com/raxjs/universal-api/commit/75777bcd730bbce5619d37adb3ee692bad03f556))
* 删除quickApp相关 ([76ccc7a](https://github.com/raxjs/universal-api/commit/76ccc7ae715e9e36578572bc96c19f220b2b466b))
* 升级demo配置文件 ([6465754](https://github.com/raxjs/universal-api/commit/6465754a4ec9969fc7d20b48ee54f06af3f4576f))
* 完善现有api结构,优化构建方案 ([ec1e249](https://github.com/raxjs/universal-api/commit/ec1e249683b14f9a632e6df50ea2f1e4011eab72))
* 一期新增api提交 ([ed589b0](https://github.com/raxjs/universal-api/commit/ed589b0264f0875efd634958e7389b4fd0af28ef))
* 增加 isQuickApp 的env变量 ([#48](https://github.com/raxjs/universal-api/issues/48)) ([c68ff0b](https://github.com/raxjs/universal-api/commit/c68ff0bdc92ac18f65b03139ce230b53773a26c7))
* 增加demo构建 ([6b1d263](https://github.com/raxjs/universal-api/commit/6b1d263a0278c40436d90f570d767c9061d24b46))
* 增加demos编译 ([a16b10b](https://github.com/raxjs/universal-api/commit/a16b10b8d87a71c8fa3126356019a2b07ed1d1ed))
* 增加lint ([3899773](https://github.com/raxjs/universal-api/commit/3899773a68738fbeaa8a5728e9815409bb83f31b))
* 增加lint ([4af2879](https://github.com/raxjs/universal-api/commit/4af28795e981f1e627d896bbf0c1581eaa24d9de))
* 增加lint ([b058a77](https://github.com/raxjs/universal-api/commit/b058a7703d505265f078f88006cd56396d7dd6ad))
* 正式包发布 ([bc8d7e9](https://github.com/raxjs/universal-api/commit/bc8d7e97045eba9684dc002a26cbfde2014f8384))
* Add instructions for quickapp ([8f49850](https://github.com/raxjs/universal-api/commit/8f4985050411b19476cae23f3ae7716bccb6e843))
* Add instructions for quickapp ([991a8ca](https://github.com/raxjs/universal-api/commit/991a8caec8f74fca32a34fb1faa76e4a3b596642))
* Add instructions for quickapp ([fce2e4f](https://github.com/raxjs/universal-api/commit/fce2e4f982accd8c27198ff845cfe2956ad64c66))
* Add instructions for quickapp ([4909e7c](https://github.com/raxjs/universal-api/commit/4909e7c6ab0bedc39736faa874b56cfed134e855))
* add kraken env judgement ([0ac7625](https://github.com/raxjs/universal-api/commit/0ac7625e4447431fd6bc02219dd8cdc9e03f39f8))
* add miniapp api interceptor helper ([#3](https://github.com/raxjs/universal-api/issues/3)) ([72f08e7](https://github.com/raxjs/universal-api/commit/72f08e747b5970b85207e13a7ee071b9978b50d5))
* add PHA Environment ([#9](https://github.com/raxjs/universal-api/issues/9)) ([5c394f3](https://github.com/raxjs/universal-api/commit/5c394f32e1c153559a0c8e0621cae44b42e24a03))
* add quickqpp for chooseimage ([7299c24](https://github.com/raxjs/universal-api/commit/7299c2452f52d9d96cce25e513730399b1818114))
* add quickqpp for clipboard ([1485963](https://github.com/raxjs/universal-api/commit/1485963df1bb82f2a0a10fb979d84bd0a81f0443))
* Animation for bytedance ([#72](https://github.com/raxjs/universal-api/issues/72)) ([6b3fb58](https://github.com/raxjs/universal-api/commit/6b3fb58896592e68e9a85c0a43704f7ce99e7ee2))
* camiuyse ([0657d98](https://github.com/raxjs/universal-api/commit/0657d984aa2979c97751aa21fb751c85578325b5))
* change version ([f840bf0](https://github.com/raxjs/universal-api/commit/f840bf00f1bf770031a7a6943c6a29263312f92a))
* choose-image support bytedance ([c94db43](https://github.com/raxjs/universal-api/commit/c94db432dffc4b4492afd9f3bb0e295bd51685ac))
* delete ([fe5a2fb](https://github.com/raxjs/universal-api/commit/fe5a2fb20e8a525f62b738e13712f29dd863cf6f))
* delete ([2d4ee16](https://github.com/raxjs/universal-api/commit/2d4ee16106bcf000acaafca0303d715970e002bf))
* disable env mock ([74f2806](https://github.com/raxjs/universal-api/commit/74f2806b8c97440b09661f4589c16a25fbfaa089))
* eva工程构建更新 ([5d5d3fc](https://github.com/raxjs/universal-api/commit/5d5d3fc4d73c1f9aab75935700f9f3c1a91402e7))
* format ([4ebd4d9](https://github.com/raxjs/universal-api/commit/4ebd4d92278cd5f516de5ab7c51929a916d6caa2))
* normalize api ([6f37b96](https://github.com/raxjs/universal-api/commit/6f37b963b30885bd49f6d4772d72d3a8b182a972))
* **alert:** support options used in wechat ([3fe11e4](https://github.com/raxjs/universal-api/commit/3fe11e49caf0aaf0b6d9422a4bcfbca1f3ad5b87))
* **Loading:** add web support ([877033e](https://github.com/raxjs/universal-api/commit/877033ef61ab2f355ecd2bb67c8d8b8410f2e5c7))
* **toast:** support passing options for wechat ([39d07fc](https://github.com/raxjs/universal-api/commit/39d07fc6b9c4b7a32bd58cf72bee45a64bc2c8f6))
* **Toast:** add hide ([da0e6d1](https://github.com/raxjs/universal-api/commit/da0e6d1e07112e489ee12644e55a8036c610e2d5))
* Add instructions for quickapp ([90557a9](https://github.com/raxjs/universal-api/commit/90557a9a993fafc8771ada81560003a9a014e27b))
* add miniapp loop animation ([e7b2dcb](https://github.com/raxjs/universal-api/commit/e7b2dcbe38f5a9eecfe75f471971de56edf68da5))
* add quickapp for alert ([52fbc1f](https://github.com/raxjs/universal-api/commit/52fbc1fa2c33d5513939c001e7639b079d210ce7))
* support canvas universal api ([#104](https://github.com/raxjs/universal-api/issues/104)) ([0e262bb](https://github.com/raxjs/universal-api/commit/0e262bb5a740739ec9590abc40f02369926c40a1))
* support for aria ([16c793b](https://github.com/raxjs/universal-api/commit/16c793bc864957be3a4d13e1729b5e0e3831070e))
* update review ([124c5e5](https://github.com/raxjs/universal-api/commit/124c5e5f26faec0d4c591a474de3bb4a5f9eb05a))
* web支持File.upload ([ef356c2](https://github.com/raxjs/universal-api/commit/ef356c20eebd2809f76668de462ce4575ee8126f))
* **universal-alert:** support bytedance ([#73](https://github.com/raxjs/universal-api/issues/73)) ([89af5fd](https://github.com/raxjs/universal-api/commit/89af5fdbb6c19d38983bc04e326337c1180a9a3e))
* init & add network type ([6c28afa](https://github.com/raxjs/universal-api/commit/6c28afa92e820b2c5da75422390bd6d469ea5224))
* remove PHA env ([#22](https://github.com/raxjs/universal-api/issues/22)) ([af9e2ed](https://github.com/raxjs/universal-api/commit/af9e2ed5f699f7de7d068f2ebd9efd6fa1a84fd3))
* remove universal api ([#4](https://github.com/raxjs/universal-api/issues/4)) ([8806f61](https://github.com/raxjs/universal-api/commit/8806f61439e79216834a8aea3e3b0b141b735baf))
* suport universal-dom-info ([182d36a](https://github.com/raxjs/universal-api/commit/182d36afa4b61d9f01df6f664dc8bb1b4e0e82ce))
* support bytedance microapp in universal-env ([#61](https://github.com/raxjs/universal-api/issues/61)) ([4eacc7c](https://github.com/raxjs/universal-api/commit/4eacc7c96c242f43db552a101ab84060a3664782)), closes [#60](https://github.com/raxjs/universal-api/issues/60) [#65](https://github.com/raxjs/universal-api/issues/65)
* Support wechat miniprogram api ([#15](https://github.com/raxjs/universal-api/issues/15)) ([0bf000c](https://github.com/raxjs/universal-api/commit/0bf000ca6e7875972b1a47dfcbdaca00eda8a1c7)), closes [#13](https://github.com/raxjs/universal-api/issues/13) [#12](https://github.com/raxjs/universal-api/issues/12) [#10](https://github.com/raxjs/universal-api/issues/10) [#14](https://github.com/raxjs/universal-api/issues/14)
* support wechat miniprogram chooseImage ([#16](https://github.com/raxjs/universal-api/issues/16)) ([afa6bc9](https://github.com/raxjs/universal-api/commit/afa6bc9d002dbf3361beeef604bf7de9b4da75e5))
* support wechat with docs ([#18](https://github.com/raxjs/universal-api/issues/18)) ([0f39747](https://github.com/raxjs/universal-api/commit/0f39747844bb512f11bcaf44e4554b5ea2927c29))
* toast support bytedance-microapp ([#69](https://github.com/raxjs/universal-api/issues/69)) ([91ac4e7](https://github.com/raxjs/universal-api/commit/91ac4e7c9f0951c4156d5d8d450d92b27b70be62))
* **universal-confirm:** support bytedance ([#74](https://github.com/raxjs/universal-api/issues/74)) ([1511001](https://github.com/raxjs/universal-api/commit/15110015be5f25fedcd9b08f2985c5be880e5c20))
* **universal-device:** support bytedance ([#76](https://github.com/raxjs/universal-api/issues/76)) ([2e6401b](https://github.com/raxjs/universal-api/commit/2e6401b5bcc3de4deaa2c350443130f510916dc6))
* **universal-navigate:** support bytedance ([#75](https://github.com/raxjs/universal-api/issues/75)) ([4df01fd](https://github.com/raxjs/universal-api/commit/4df01fde2f886b6f3e8d0384559ce3f4d31a94ba))
* modify if else ([822d2b6](https://github.com/raxjs/universal-api/commit/822d2b6c391e8b346ffd4659a1b6456a2f84903a))
* modify if else and packages.json ([9b66c0a](https://github.com/raxjs/universal-api/commit/9b66c0ad40204d9c3152081d57a305a5be52f121))
* support toast role ([#41](https://github.com/raxjs/universal-api/issues/41)) ([8505464](https://github.com/raxjs/universal-api/commit/8505464177651c34a9c6f6c037e61f6f9d152886))
* toast support bytedance-microapp ([6ba1648](https://github.com/raxjs/universal-api/commit/6ba1648e48c2fef4c354489c2e65358f3b1cc05c))
* transition for bytedance ([#71](https://github.com/raxjs/universal-api/issues/71)) ([7f69c70](https://github.com/raxjs/universal-api/commit/7f69c70ca60e9dd6468dbef3742195012092043f))
* **device:** support pixelRatio ([#67](https://github.com/raxjs/universal-api/issues/67)) ([336cd3a](https://github.com/raxjs/universal-api/commit/336cd3a1eac89003f2569dfff2be105565cc24af))
* update version with wechat ([9e56a61](https://github.com/raxjs/universal-api/commit/9e56a61d38b5fdea3c26aedbab8216d700a8e6fb))
* v1.0.1 ([65c5d88](https://github.com/raxjs/universal-api/commit/65c5d88676d2d3a8824de6b66894e46a833365ba))
* v1.0.2 ([3d92238](https://github.com/raxjs/universal-api/commit/3d9223895ccd4f148cdd9a6f0efdded41a2ec663))
* v1.0.3 ([8fa93bc](https://github.com/raxjs/universal-api/commit/8fa93bc0228d55530345b0a93cc25493402be3a9))
* v1.0.3 ([2ade9cc](https://github.com/raxjs/universal-api/commit/2ade9cc417ad5060fb76bf3ea0e4672a55fa60b1))



