# Ocelot介绍

> 官方文档：https://ocelot.readthedocs.io/en/latest/index.html

## 官方介绍

Ocelot 面向使用 .NET 运行微服务/面向服务的体系结构的人，他们需要统一的系统入口点。特别是，我希望与IdentityServer引用和持有者令牌轻松集成。Ocelot是一堆按特定顺序排列的中间件。

Ocelot 将 HttpRequest 对象操作到其配置指定的状态，直到它到达请求构建器中间件，在其中创建一个 HttpRequestMessage 对象，该对象用于向下游服务发出请求。发出请求的中间件是 Ocelot 管道中的最后一件事。它不调用下一个中间件。有一个中间件将 HttpResponseMessage 映射到 HttpResponse 对象上，然后返回到客户端。这基本上是它具有许多其他功能。

以下是部署 Ocelot 时使用的配置。

- 基本实现

![../_images/OcelotBasic.jpg](http://file.zjay.top/blog/images/202304041609234.jpeg)

- 使用身份服务器

![../_images/OcelotIndentityServer.jpg](http://file.zjay.top/blog/images/202304041610881.jpeg)

- 使用身份服务器



![../_images/OcelotMultipleInstances.jpg](http://file.zjay.top/blog/images/202304041611287.jpeg)



- 与领事

![OcelotMultipleInstancesConsul](http://file.zjay.top/blog/images/202304041613974.jpg)

- 使用服务结构

![../_images/OcelotServiceFabric.jpg](http://file.zjay.top/blog/images/202304041611047.jpeg)

## 网关优点

- 安全，网关层对外部和内部进行了隔离，保障了后台服务的安全性，后台服务不用暴露到互联网上
- 解耦，客户端与服务可以独立运行、部署，互不影响
- 集中解决方案，可以在网关做一些集中解决方案，例如：协议转换、静态响应处理、负载均衡、认证、鉴权、限流熔断、缓存、监控、灰度等
- RESTful，提供解决方案

# 快速使用

## 安装依赖

` Install-Package Ocelot`

## 注册中间件

> 注意：
>
> - 管道中，如果要使用其它中间件，必须在app.UseOcelot()之前添加中间件，因为Ocelot不会调用下一个中间件
> - 可以在这个之前注入我们自定义的中间件，来覆盖Ocelot中的中间件

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((context, config) =>
            {
                // 集成ocelot配置信息
                config.AddJsonFile("ocelot.json", false, true)
                      .AddJsonFile($"ocelot.{context.HostingEnvironment.EnvironmentName}.json", false, true)
                      .AddEnvironmentVariables();
            })
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });
}
```

```csharp
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddOcelot();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        // 您只能在调用app.UseOcelot()之前添加中间件，而不能在它之后，因为Ocelot不会调用下一个中间件
        app.UseOcelot();
    }
}
```

## 选项配置

> - `GlobalConfiguration`：每个路由的公共配置
> - `Routes`：单个路由配置

### 路由

> - `Downstream`开头的表示下游配置，也就是映射的服务信息
> - `Upstream`开头的表示上游配置，也就是客户端请求信息
> - 默认路由配置不区分大小写，可以配置`RouteIsCaseSensitive`自定义，true 区分  false 不区分
> - 路由优先级根据配置顺序，默认至上而下，可以通过`Priority`配置自定义顺序
> - 如果配置要捕获所有路由，可以指定`DownstreamPathTemplate`和`UpstreamPathTemplate`为`\`
> - 可以通过`UpstreamHost`限制上游客户端主机
> - `DownstreamHostAndPorts` 是一个集合，可以添加多个，默认轮询，但是可以自定义负载均衡器

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/{version}/{controller}/{action}",
      "DownstreamScheme": "http",
      "DownstreamHttpMethod": "POST",
      "DownstreamHostAndPorts": [
        {
          "Host": "172.16.24.249",
          "Port": 9002
        }
      ],
      "UpstreamPathTemplate": "/ddw/api/{version}/{controller}/{action}",
      "UpstreamHttpMethod": ["Post"],
      // "Priority": 0,
      // "RouteIsCaseSensitive": true,
      // "UpstreamHost": "pmddw.com"
    }
  ],
  "GlobalConfiguration": {}
}
```

### 聚合

> 客户端请求网关后，网关通过聚合配置，转发给多个服务
>
> 目前没用上，官方文档地址：https://ocelot.readthedocs.io/en/latest/features/requestaggregation.html

# 负载均衡器

> 注意：
>
> - `Ocelot` 可以为每个路由下游服务通过`LoadBalancerOptions`选项配置对应的负载平衡器
> - 也可以通过集成`consul`来进行实现负载均衡

### 类型说明

| 负载均衡器             | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `LeastConnection`      | 最小连接-根据服务正在处理请求量的情况来决定哪个服务来处理新请求，即将新请求发送到具有最少现有请求的服务去处理 |
| `RoundRobin`           | 轮询，遍历可用服务并发送请求                                 |
| `NoLoadBalancer`       | 从配置或服务发现中获取第一个可用服务来处理新请求             |
| `CookieStickySessions` | 通过使用`Cookie`，确保特定的请求能够被分配到特定的服务上进行处理 |

### 选项配置

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/{version}/{controller}/{action}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 9003
        },
        {
          "Host": "localhost",
          "Port": 9002
        }
      ],
      "UpstreamPathTemplate": "/ddw/api/{version}/{controller}/{action}",
      "UpstreamHttpMethod": [ "Post" ],
      "LoadBalancerOptions": { // 配置负载均衡器
        "Type": "LeastConnection"
      }
    }
  ]
}

```

![image-20230407095244412](http://file.zjay.top/blog/images/202304070952141.png)

![image-20230407095314063](http://file.zjay.top/blog/images/202304070953919.png)

### 自定义

> 自定义负载均衡器需要继承`ILoadBalancer`接口类,并通过`AddCustomLoadBalancer`注册

```csharp
public class CustomLoadBalancer : ILoadBalancer
{
    private readonly Func<Task<List<Service>>> _services;
    private readonly object _lock = new object();
    private int _last;
    public CustomLoadBalancer(Func<Task<List<Service>>> services)
    {
        _services = services;
    }

    public async Task<Response<ServiceHostAndPort>> Lease(HttpContext httpContext)
    {
        var services = await _services();
        lock (_lock)
        {
            if (_last >= services.Count)
            {
                _last = 0;
            }
            var next = services[_last];
            _last++;
            return new OkResponse<ServiceHostAndPort>(next.HostAndPort);
        }
    }

    public void Release(ServiceHostAndPort hostAndPort)
    {
    }
}
```

```csharp
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        // 这里注册的是单例模式，所以上面锁才会没有用 static 关键词修饰
        services.AddOcelot().AddCustomLoadBalancer((serviceProvider, route, serviceDiscoveryProvider) => 
                                                   new CustomLoadBalancer(serviceDiscoveryProvider.Get));
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseOcelot();
    }
}
```

```csharp
public interface IOcelotBuilder
{
    IOcelotBuilder AddCustomLoadBalancer<T>() where T : ILoadBalancer, new();
    IOcelotBuilder AddCustomLoadBalancer<T>(Func<T> loadBalancerFactoryFunc) where T : ILoadBalancer;
    IOcelotBuilder AddCustomLoadBalancer<T>(Func<IServiceProvider, T> loadBalancerFactoryFunc) where T : ILoadBalancer;
    IOcelotBuilder AddCustomLoadBalancer<T>(Func<DownstreamRoute, IServiceDiscoveryProvider, T> loadBalancerFactoryFunc) where T : ILoadBalancer;
    IOcelotBuilder AddCustomLoadBalancer<T>(Func<IServiceProvider, DownstreamRoute, IServiceDiscoveryProvider, T> loadBalancerFactoryFunc) where T : ILoadBalancer; 
}
```

```csharp
public class OcelotBuilder : IOcelotBuilder
{
	public IOcelotBuilder AddCustomLoadBalancer<T>(Func<IServiceProvider, DownstreamRoute, IServiceDiscoveryProvider, T> loadBalancerFactoryFunc) where T : ILoadBalancer
        {
            Services.AddSingleton((Func<IServiceProvider, ILoadBalancerCreator>)((IServiceProvider provider) => new DelegateInvokingLoadBalancerCreator<T>((DownstreamRoute route, IServiceDiscoveryProvider serviceDiscoveryProvider) => loadBalancerFactoryFunc(provider, route, serviceDiscoveryProvider))));
            return this;
        }
}
```

# 限流

## 选项配置

| 选项配置                  | 说明                                                     |
| ------------------------- | -------------------------------------------------------- |
| `ClientWhitelist`         | 白名单，也就是不受限流控制的客户端                       |
| `EnableRateLimiting`      | 是否开启限流                                             |
| `Period`& `Limit`         | 在一段时间内允许的请求次数（`Period`：`1s、1m、1h、1d`） |
| `PeriodTimespan`          | 客户端的重试间隔数，也就是客户端间隔多长时间可以重试     |
| `QuotaExceededMessage`    | 超出配额时，返回错误提示信息                             |
| `HttpStatusCode`          | 超出配额时，返回的http状态码                             |
| `DisableRateLimitHeaders` | 是否显示X-Rate-Limit和Retry-After头                      |
| `ClientIdHeader`          | 用来设置客户端请求头,默认为ClientId                      |

- 下面是每`10s`范围内只能请求`1`次，超过这个限制后提示`HttpStatusCode`为`999`

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/{version}/{controller}/{action}",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 9003
        }
      ],
      "UpstreamPathTemplate": "/ddw/api/{version}/{controller}/{action}",
      "RateLimitOptions": {
        "EnableRateLimiting": true,
        "Period": "10s",
        "PeriodTimespan": 5,
        "Limit": 1
      }
    }
  ],
  "GlobalConfiguration": {
    "RateLimitOptions": {
      "QuotaExceededMessage": "您的请求量超过了配额1/10分钟",
      "HttpStatusCode": 999
    }
  }
}
```

![image-20230407133200221](http://file.zjay.top/blog/images/202304071332504.png)

![image-20230407133714205](http://file.zjay.top/blog/images/202304071337879.png)

# 熔断

## 安装依赖

`Install-Package Ocelot.Provider.Polly`

## 服务配置

```csharp
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddOcelot()
            	.AddPolly();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseOcelot();
    }
}
```

## 选项配置

| 参数                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| ExceptionsAllowedBeforeBreaking | 允许多少个异常请求                                           |
| DurationOfBreak                 | 熔断的时间5s，单位为ms                                       |
| TimeoutValue                    | 单位ms,如果下游请求的处理时间超过多少则自如将请求设置为超时 默认90秒 |

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/{version}/{controller}/{action}",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 9003
        }
      ],
      "UpstreamPathTemplate": "/ddw/api/{version}/{controller}/{action}",
      "QoSOptions": { // 熔断设置
        "ExceptionsAllowedBeforeBreaking": 3, // 允许多少个异常请求
        "DurationOfBreak": 5000, // 熔断的时间5s，单位为ms
        "TimeoutValue": 5000 // 单位ms,如果下游请求的处理时间超过多少则自如将请求设置为超时 默认90秒
      }
    }
  ]
}
```

# 缓存

> 注意：
>
> - 默认缓存只适合获取静态资源接口缓存，并且不同的条件查询的接口返回信息一样的，不支持同一个接口不同查询条件缓存的特性
> - 缓存设置是对一个路由的API都生效，不满足针对单个API缓存
> - 缓存存储在内存中，并且只能单个网关项目使用，不满足集群部署缓存公用的特性

## 安装依赖

`Install-Package Ocelot.Cache.CacheManager`

## 服务配置

```csharp
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddOcelot()
                .AddCacheManager(x =>x.WithDictionaryHandle());
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseOcelot();
    }
}
```

## 选项配置

| 参数       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| TtlSeconds | 缓存过期时间，单位是秒                                       |
| Region     | 缓存分区， 可以通过调用ocelot后台Api 来清空一个region下的缓存 |

```json
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/{version}/{controller}/{action}",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 9003
        }
      ],
      "UpstreamPathTemplate": "/ddw/api/{version}/{controller}/{action}",
      "UpstreamHttpMethod": [ "Post" ],
      "LoadBalancerOptions": {
        "Type": "CustomLoadBalancer"
      },
      "FileCacheOptions": {
        "TtlSeconds": 15,
        "Region": "ddw"
      }
    }
  ]
}
```

# 认证授权

> - 官方文档地址：https://ocelot.readthedocs.io/en/latest/features/authentication.html
> - 博客园文档地址：https://www.cnblogs.com/linhuiy/p/12060277.html

# 重写中间件

| 中间件                          | 作用                                         |
| ------------------------------- | -------------------------------------------- |
| PreErrorResponderMiddleware     | 在所有Ocelot中间件之前运行， 异常中间件      |
| PreAuthenticationMiddleware     | 提供预身份认证逻辑，在身份认证中间件之前运行 |
| AuthenticationMiddleware        | 覆写Ocelot中间件提供的身份认证逻辑           |
| PreAuthorisationMiddleware      | 提供预授权逻辑，在授权中间件之前运行         |
| AuthorisationMiddleware         | 覆写Ocelot中间件提供的授权逻辑               |
| PreQueryStringBuilderMiddleware | 在QueryString转换之前，提供预处理逻辑        |

# HTTP 错误状态代码

Ocelot 将根据特定位置的内部逻辑返回 HTTP 状态错误代码： 

- 401 如果身份验证中间件运行且用户未通过身份验证
- 403 如果授权中间件运行且用户未经身份验证、声明值未经过身份验证、范围未授权、用户没有必需声明或找不到声明
- 503 如果下游请求超时
- 499 如果请求被客户端取消
- 404 如果找不到下游路线
- 500 如果无法在下游完成 HTTP 请求，并且异常不是 OperationCanceledException 或 HttpRequestException
- 502 无法连接到下游服务
- 404 如果 Ocelot 无法将内部错误代码映射到 HTTP 状态代码