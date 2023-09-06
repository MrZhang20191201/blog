## 下载安装

> 官方下载地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)
>
> 双击下载文件`node-v18.15.0-x64.msi`，直接next即可

### 验证是否安装成功

```powershell
node -v
npm -v
```

## 配置淘宝镜像

> Web 站点：[https://npmmirror.com](https://npmmirror.com)
>
> Registry Endpoint：[https://registry.npmmirror.com](https://registry.npmmirror.com)
>
> 教程地址：[https://cloud.tencent.com/developer/article/2063926](https://cloud.tencent.com/developer/article/2063926)

### 配置命令

```powershell
npm config set registry https://registry.npm.taobao.org
```

### 配置缓存仓库地址

> 安装好nodejs以后如果不进行相关配置，会存在如下问题：
>
> - 第一个：执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到C:\Users\用户名\AppData\Roaming\npm路径中，这样会占用C盘有限的空间。
>
>
> - 第二个：使用nodejs的镜像下载速度会比较慢。

#### 通过命令方式配置

```powershell
npm config set prefix "E:\nodejs\node_global"  
npm config set cache "E:\nodejs\node_cache"
```

#### 修改配置信息指定路径

```powershell
prefix=E:\nodejs\node_global
cache=E:\nodejs\node_cache
```

## 安装cnpm

```powershell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 判断是否安装成功

```powershell
cnpm -v
```

## 查看npm配置信息

```powershell
npm config ls
```
