(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{204:function(e,v,t){"use strict";t.r(v);var _=t(0),a=Object(_.a)({},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"vue一些小知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue一些小知识点","aria-hidden":"true"}},[e._v("#")]),e._v(" vue一些小知识点")]),e._v(" "),t("h3",{attrs:{id:"_1-vue的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue的优点","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. vue的优点")]),e._v(" "),t("p",[e._v("1、低耦合。视图（view）可以独立于model变化和修改，一个viewModel可以绑定到不同的”view“上，当view变化的时候，model可以不变，当model变化的时候view也可以不变。")]),e._v(" "),t("p",[e._v("2、可重用性。你可以把一些视图逻辑放在一个viewModel里面，让很多view重用这段视图逻辑。")]),e._v(" "),t("p",[e._v("3、独立开发。开发人员可以专注于业务逻辑和数据的开发，设计人员可以专注于页面设计。")]),e._v(" "),t("p",[e._v("4、可测试。界面素来是比较难测试的，而现在测试可以针对viewModel来写。")]),e._v(" "),t("h3",{attrs:{id:"_2-vue的整个实现流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue的整个实现流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. vue的整个实现流程")]),e._v(" "),t("p",[e._v("1、第一步：解析模板成render函数")]),e._v(" "),t("p",[e._v("template")]),e._v(" "),t("p",[e._v("2、第二步：响应式开始监听")]),e._v(" "),t("p",[e._v("object.defineProperty")]),e._v(" "),t("p",[e._v("data属性代理到vm上")]),e._v(" "),t("p",[e._v("3、第三步：首次渲染，显示页面，且绑定依赖")]),e._v(" "),t("p",[e._v("（1）为何要监听get,直接监听set不行吗？")]),e._v(" "),t("p",[e._v("①data中有很多属性，有些被用到，有些可能不被用到（data中没有人访问，就不会用get，如没有"+e._s(e.aaa)+"指的就是aaa没有被访问）")]),e._v(" "),t("p",[e._v("②被用到的会走到get，不被用到的不会走到get")]),e._v(" "),t("p",[e._v("③未走到get中的属性，set的时候也无需关心")]),e._v(" "),t("p",[e._v("④避免不必要的重复渲染")]),e._v(" "),t("p",[e._v("4、第四步：data属性变化，触发rerender")]),e._v(" "),t("p",[e._v("defineProperty, get, set")]),e._v(" "),t("p",[e._v("（1）修改属性，被响应式的set监听到")]),e._v(" "),t("p",[e._v("（2）set中执行updateComponent")]),e._v(" "),t("p",[e._v("（3）updateComponent重新执行vm._render()")]),e._v(" "),t("p",[e._v("（4）生成的vnode和prevVnode,通过Patch进行对比")]),e._v(" "),t("p",[e._v("渲染到html")]),e._v(" "),t("h3",{attrs:{id:"_3-vue为什么会采用虚拟dom（virtual-dom）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue为什么会采用虚拟dom（virtual-dom）","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. vue为什么会采用虚拟DOM（Virtual DOM）?")]),e._v(" "),t("p",[e._v("（1）创建真实DOM的代价高：真实的 DOM 节点 node 实现的属性很多，而 vnode 仅仅实现一些必要的属性，相比起来，创建一个 vnode 的成本比较低。")]),e._v(" "),t("p",[e._v("（2）触发多次浏览器重绘及回流：使用 vnode ，相当于加了一个缓冲，让一次数据变动所带来的所有 node 变化，先在 vnode 中进行修改，然后 diff 之后对所有产生差异的节点集中一次对 DOM tree 进行修改，以减少浏览器的重绘及回流。")]),e._v(" "),t("p",[e._v("（3）虚拟dom由于本质是一个js对象，因此天生具备跨平台的能力，可以实现在不同平台的准确显示。")]),e._v(" "),t("p",[e._v("（4）Virtual DOM 在性能上的收益并不是最主要的，更重要的是它使得 Vue 具备了现代框架应有的高级特性。")])])},[],!1,null,null,null);v.default=a.exports}}]);