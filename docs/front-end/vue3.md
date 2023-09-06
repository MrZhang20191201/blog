## 版本信息

> - node：16.14.2
> - npm：8.5.0
> - vite ： 4.4.5
> - vue：3.3.4

## 项目搭建

> 项目使用vite搭建，其它vite配置可以参考：[vite官网](https://cn.vitejs.dev/config/)

### 创建项目

> - `my-vue-app`：项目的名称，小写多个单词用`-`分割
> - `template`“：指定vite创建的项目模板，这里指定创建vue
> - `vue-ts` ：默认安装 `typescript` 

```powershell
# npm 6.x
npm create vite@latest my-vue-app --template vue
npm create vite@latest my-vue-app --template vue-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue
npm create vite@latest my-vue-app -- --template vue-ts
```

![image-20230830161436887](http://file.zjay.top//blog/images/202308301614738.png)

### 运行项目

```powershell
# 切换到项目路径
cd vue3-study
# 安装依赖
npm install
# 运行
npm run dev
```

![image-20230830162058314](http://file.zjay.top//blog/images/202308301621915.png)

![image-20230830162153965](http://file.zjay.top//blog/images/202308301621201.png)

### 项目结构

> - `node_modules`：安装的依赖模块文件
> - `public`：存放项目需要使用的静态资源，不参加编译，编译后可以替换
> - `src`：项目开发目录
>
>   - `assets`：放置静态资源，参加编译，编译后不可替换
>
>   - `components`：放置通用模块组件
>
>   - `App.vue`：入口组件
>
>   - `main.js`：入口 js 文件，影响全局，作用是引入全局使用的库、公共的样式和方法、设置路由等
>
>   - `style.css`：全局样式，默认会在`main.js`引用，可以放到`assets`，只需修改引用路径即可
> - `index.html`：项目的运行入口
> - `package.json`：记录项目信息和依赖模块信息，如果文件不存在可以通过`npm init --yes`来初始化生成`package.json`文件
> - `package-lock.json`：记录所有模块锁定的版本号，包括主模块和所有依赖子模块。当你执行`npm install`的时候，`node`从`package.json`文件读取模块名称，从`package-lock.json`文件中获取版本号，然后进行下载或者更新。正因为有了`package-lock.json`文件锁定版本号，所以当你执行`npm install`的时候，`node`不会自动更新`package.json`文件中的模块，必须用`npm install packagename@x.x.x`进行安装才会更新，`package-lock.json`文件中的版本号也会随着更新，如果文件不存在那么可以执行`npm install`，`node`会重新生成`package-lock.json`文件
> - `README.md`：项目介绍文件
> - `vite.config.js`：vite配置文件

![image-20230830162456615](http://file.zjay.top//blog/images/202308301625431.png)

### 运行模式

- 项目创建后会默认会在`package.json`中添加如下默认配置：

  > 模式名称可以自定义，不一定是 `development`、`production`

```json
{
  "scripts": {
    "dev": "vite", // npm run dev，运行，mode为'development',加载 .env.development 和.env 文件
    "build": "vite build", // npm run build，构建，mode为'production',加载 .env.production和.env 文件
    "preview": "vite preview"  // npm run preview，预览本地构建
  }
}
```

- 通过`--mode`指定模式,下面是修改后的配置

```json
{
    "scripts": {
        "dev": "vite --mode dev", // npm run dev，运行，mode 为'dev',加载 .env.dev 和 .env 文件
        "sta": "vite --mode sta", // npm run sta，运行，mode 为'sta',加载 .env.sta 和.env 文件
        "pro": "vite --mode pro", // npm run pro，运行，mode 为'pro',加载 .env.dev 和.env 文件
        "build": "vue-tsc && vite build --mode pro", // npm run build，打包，mode 为'pro',加载 .env.pro 和.env 文件
        "build:dev": "vue-tsc && vite build --mode dev", // npm run build:dev，构建，mode 为'dev',加载 .env.dev 和 .env 文件
        "build:sta": "vue-tsc && vite build --mode sta", // npm run build:sta，构建，mode 为'sta',加载 .env.sta 和 .env 文件
        "build:pro": "vue-tsc && vite build --mode pro", // npm run build:pro，构建，mode 为'pro',加载 .env.pro 和 .env 文件
        "preview": "vite preview"  // npm run preview，预览本地构建
      }
}
```

- 配置文件加载说明

  > 项目根目录创建配置文件即可

```powershell
.env                # 所有模式下都会加载
.env.local          # 所有模式下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载，优先级高于.env，如果变量名一样会覆盖
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略，优先级高于.env，如果变量名一样会覆盖
```

### 环境变量

> Vite 在 `import.meta.env`  对象上暴露环境变量

- 内建环境变量

| 变量名   | 类型    | 描述                                                       |
| -------- | ------- | ---------------------------------------------------------- |
| MODE     | string  | 应用运行的模式                                             |
| BASE_URL | string  | 部署应用时的基本 URL。他由base 配置项决定                  |
| PROD     | boolean | 应用是否运行在生产环境                                     |
| DEV      | boolean | 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。 |
| SSR      | boolean | 应用是否运行在 server 上。                                 |

```vue
<script setup>
import { ref } from 'vue'
const env = ref(import.meta.env);
</script>
<template>
  <p>环境变量信息：{{ env }}</p>
</template>
```

![image-20230830173053760](http://file.zjay.top//blog/images/202308301730268.png)

- 自定义环境变量

> - 根目录下新建 `.env`文件
> - 定义变量，变量名必须要`VITE`开头（下面无法获取`APP_TXT`的值）
> - 如果想修改前缀需要在`vite.config.js`里面添加`envPrefix`配置，例如：`envPrefix:'APP'`或者`envPrefix:['APP']`

![image-20230830174436132](http://file.zjay.top//blog/images/202308301744376.png)

![image-20230830174718891](http://file.zjay.top//blog/images/202308301747567.png)

- 自定义环境变量前缀

`vite.config.js`里面添加如下信息：

```tsx
export default defineConfig({
  plugins: [vue()],
  envPrefix: 'APP'
})
```

### 系统别名

> `import`静态文件、组件 时如果层级过深不太方便，可以通过别名方式来进行优化

- `vite.config.js`里面添加如下信息：

```tsx
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  envPrefix: "APP",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      '@/*': resolve(__dirname, '.', 'src/*')
    }
  }
})

```

- 解决 找不到名称“ _ _ dirname”错误

```powershell
npm i -D @types/node
```

- 解决`vscode` 找不到模块“@/components/HelloWorld.vue”或其相应的类型声明

  > `tsconfig.json` 文件 `compilerOptions` 选项中新增 如下配置

```tsx
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@": ["src/*"],
      "@/*": ["src/*"]
    }
  }
}

```

- 使用

```vue
<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>
```

### 集成  `VueRouter`

### 集成 ` Axios`

### 集成  `MockJs`

### 集成  `Vuex`

### 权限控制

- 自定义授权指令

  > 通过自定义授权指令方式，根据指令值判断当前用户是否有权限操作指定元素，达到权限控制，具体应用 例如：按钮权限、区域权限

```vue
<script setup>
const auths = ['save']; // 当前用户具备的权限
const vAuth = (el, binding) => {
  if (auths.indexOf(binding.value) == -1) el.remove()
}
</script>
<template>
  <div>
    <button v-auth="'save'">保存</button>
    <button v-auth="'delete'">删除</button>
  </div>
</template>
```

## 内置指令

| 指令                        | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| `v-bind`                    | 属性绑定(简写为`:`)，如果绑定的值是 `null` 或者 `undefined`，那么该 `attribute ` 将会从渲染的元素上移除 |
| `v-html`                    | 插入`html`代码                                               |
| `v-if` `v-if-else` `v-else` | 条件渲染，根据条件显示不同的内容，如果同时切换多个元素，可以在 `<template>` 上使用 |
| `v-show`                    | 条件渲染，会保留该元素仅切换了该元素上 `display` 的 `CSS` 属性<br />相比`v-if`， 简单许多，元素无论初始条件如何，始终会存在，<br />如果需要频繁切换，则使用 `v-show` 较好，如果在运行时绑定条件很少改变，则 `v-if` 会更合适<br />不支持在 `<template>` 元素上使用 |
| `v-for`                     | 循环渲染，可以使用 `of` 作为分隔符来替代 `in`<br />用法：`v-for="item in items"` 或 `v-for="(item, index) in items"` |
| `v-on`                      | 监听 DOM 事件(简写为 `@`)<br />用法：`v-on:click="handler"` 或 `@click="handler($event)"` |

### `v-bind`绑定`class`

> 数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 `class` 和 `style` 都是 attribute，我们可以和其他 `attribute` 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，`Vue `专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。

- 动态切换 `class`


```vue
<script setup>
const isActive = ref(true)
</script>
<template>
	<div :class="{ active: isActive }"></div>
</template>
```

```vue
 <!-- 渲染结果 -->
<div class="active"></div>
```

- 绑定对象

```vue
<script setup>
const classObject = reactive({
  active: true,
  text-danger: false
})
</script>
<template>
	<div :class="classObject"></div>
</template>
```

```vue
 <!-- 渲染结果 -->
<div class="active"></div>
```

- 绑定计算属性

```vue
<script setup>
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  text-danger: error.value && error.value.type === 'fatal'
}))
</script>
<template>
	<div :class="classObject"></div>
</template>
```

- 绑定数组

```vue
<script setup>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>
<template>
	<div :class="[activeClass, errorClass]"></div>
</template>
```

- 绑定表达式

```vue
<script setup>
const activeClass = ref('active')
const errorClass = ref('text-danger')
const isActive  = ref(true)
</script>
<template>
	<div :class="[isActive ? activeClass : '', errorClass]"></div>
</template>
```

### `v-bind`绑定`style`

- 绑定值

```vue
<script setup>
const activeColor = ref('red')
const fontSize = ref(30)
</script>
<template>
	<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</template>
```

- 绑定对象

```vue
<script setup>
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
</script>
<template>
    <div :style="styleObject"></div>
</template>
```

### `v-for`遍历对象

```vue
<script setup>
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>
<template>
    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>
</template>
```

### `v-on`事件处理

> - 事件处理器 (handler) 的值可以是：
>
>   - 内联事件处理器：事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)。
>
>   - 方法事件处理器：一个指向组件上定义的方法的属性名或是路径。
>
> - 模板编译器会通过检查 `v-on` 的值是否是合法的 JavaScript 标识符或属性访问路径来断定是何种形式的事件处理器
>
>   -  `foo()` 和 `count++` 会被视为内联事件处理器。
>
>   -  `foo`、`foo.bar` 和 `foo['bar']` 会被视为方法事件处理器，

- 内联事件处理器

```vue
<script setup>
const count = ref(0)
</script>
<template>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
</template>
```

- 内联事件处理器中访问事件参数


```vue
<script setup>
const warn = (message, event) => {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>
<template>
	<!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
</template>
```


- 方法事件处理器

```vue
<script setup>
const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  if (event) { // `event` 是 DOM 原生事件
    alert(event.target.tagName)
  }
}
</script>
<template>
    <!-- `greet` 是上面定义过的方法名 -->
    <button @click="greet">Greet</button>
</template>
```

- 事件修饰符

> 在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。可以使用事件修饰符替代

| 修饰符     | 描述                                             |
| :--------- | ------------------------------------------------ |
| `.stop`    | 停止事件传递                                     |
| `.prevent` | 禁止默认事件                                     |
| `.self`    | 仅当 event.target 是元素本身时才会触发事件处理器 |
| `.capture` | 添加事件监听器                                   |
| `.once`    | 添加事件监听器                                   |
| `.passive` | 添加事件监听器                                   |

```vue
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>
<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>
<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>
<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>
<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>
<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>
<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>
```

- 按键修饰符

> 在监听键盘事件时 我们经常需要检查特定的按键 可以直接使用按键名称作为修饰符，但需要转为 kebab-case 形式
>
> - 按键别名:`.enter` `.tab` `.delete` `.esc` `.space` `.up` `.down` `.left` `.right`
> - 系统按键修饰符: `.ctrl `  `.alt` `.shift `  `.meta`  `.exact`
>   - 与常规按键不同,与 `keyup` 事件一起使用时，该按键在事件发出时必须处于按下状态
>   - 在 Mac 键盘上，meta 是 Command 键 。在 Windows 键盘上，meta 键是 Windows 键
>   - `.exact` 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。
> - 鼠标按键修饰符: `.left` `.right` `.middle`

```vue
<!-- PageDown -->
<input @keyup.page-down="onPageDown" />
<!-- Enter -->
<input @keyup.enter="submit" />
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />
<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>
<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>
<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

## 自定义指令

> 只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用 `v-bind` 这样的内置指令来声明式地使用模板，这样更高效，也对服务端渲染更友好
>
> 注意事项
>
> - 在 `<script setup>` 中，自定义指令变量名需要以 `v` 开头的驼峰式命名 `vDemo`
> - 非 `<script setup>` 中，自定义指令通过 `directives` 申明 `directives: {demo:{}}`
> - 自定义指令的参数也可以是动态的 `v-demo:[arg]`
> - 在单根组件上使用自定义指令时，应用于组件的根节点，多根组件指令将会被忽略且抛出一个警告
> - 指令值，可以接受 JavaScript 对象、表达式、值

### `<script setup>` 中使用

```vue
<script setup>
const vFocus = { // v-focus
  mounted: (el) => el.focus()
}
</script>
<template>
  <input v-focus />
</template>
```

### 非 `<script setup>` 中

```tsx
export default { 
  directives: {
    focus: {} // v-focus
  }
}
```

### 全局注册

```tsx
const app = createApp({})
app.directive('focus', {}) // v-focus
```

### 指令钩子

> 钩子的参数
>
> - `el`：指令绑定到的元素。这可以用于直接操作 DOM。
> - `binding`：一个对象，包含以下属性。
>   - `value`：传递给指令的值。例如在 `v-my-directive="1 + 1"` 中，值是 `2`。
>   - `oldValue`：之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
>   - `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
>   - `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
>   - `instance`：使用该指令的组件实例。
>   - `dir`：指令的定义对象。
> - `vnode`：代表绑定元素的底层 VNode。
> - `prevNode`：代表之前的渲染中指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用

```js
const vDemo = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {},
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```

### 指令简化形式

> 如果仅需要在 mounted 和 updated 上实现相同的行为，并不需要其他钩子，可以直接用一个函数来定义指令

```js
app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
})
```



## 生命周期

## 组件介绍

## 渲染机制

## 动画技巧

## 自定义插件

## 自定义组件库

## 自定义脚手架

## 新能优化
