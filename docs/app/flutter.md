## Widget

在Flutter中，有两种常见的Widget：StatefulWidget（有状态的组件）和StatelessWidget（无状态的组件）。它们之间的主要区别是：

1. StatefulWidget（有状态的组件）：
   - 具有可变状态（state）的组件。
   - 可以通过调用 `setState()` 方法来更新内部状态，并重新构建UI。
   - 适用于那些需要根据用户交互、网络请求或其他事件来动态更新UI的场景。

2. StatelessWidget（无状态的组件）：
   - 不具有可变状态（state）的组件。
   - 一旦构建完成，其属性和UI就不会再发生变化。
   - 适用于那些不需要内部状态管理，只依赖外部传入属性的简单静态UI场景。例如，展示静态文本、图像等。

下面是一个简单的示例，演示了如何创建一个有状态的组件（StatefulWidget）和一个无状态的组件（StatelessWidget）：

```dart
// StatefulWidget 示例
class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Count:', style: TextStyle(fontSize: 24)),
            Text('$_counter', style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: Icon(Icons.add),
      ),
    );
  }
}

// StatelessWidget 示例
class GreetingWidget extends StatelessWidget {
  final String name;

  GreetingWidget(this.name);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Text('Hello, $name!', style: TextStyle(fontSize: 24)),
    );
  }
}
```

在这个示例中，`CounterWidget` 是一个有状态的组件，每次点击浮动操作按钮时，它会增加计数器的值并重新构建UI。而 `GreetingWidget` 是一个无状态的组件，它只接收 `name` 属性，并展示一个静态的问候语。

根据您的需求，可以选择使用 StatefulWidget 或 StatelessWidget 来开发您的Flutter应用程序。





swiper

https://pub.dev/packages/card_swiper



业务逻辑从UI层分离

> flutter_bloc：https://pub.dev/packages/flutter_bloc
>
> flutter_redux

https://www.jianshu.com/p/4711af0e3c9c

https://flutter.cn/community/tutorials/state-management-package-getx-provider-analysis

https://juejin.cn/post/7067356022272163847

`Provider`、`flutter_bloc`和`GetX`是Flutter中常用的状态管理解决方案，每个解决方案都有其自己的特点和适用场景。

1. Provider:
   - Provider是Flutter团队推荐的轻量级状态管理解决方案，它使用了InheritedWidget和ChangeNotifier来实现状态共享。
   - Provider易于学习和使用，适用于中小型应用和简单的状态管理需求。
   - 它提供了简洁的API，并且与Flutter框架紧密集成，可以很容易地跟随Flutter的版本更新。

2. flutter_bloc:
   - `flutter_bloc`是一个基于BLoC（Business Logic Component）模式的状态管理库，通过将业务逻辑与界面分离，使代码更加清晰和可测试。
   - 它使用了Dart的Streams和RxDart库来管理状态流，并提供了强大的工具和便利类来简化BLoC的创建和使用。
   - `flutter_bloc`适用于中大型复杂应用，尤其是需要处理异步操作、复杂的业务逻辑以及大量交互和数据更新的应用。

3. GetX:
   - `GetX`是一个功能丰富而全面的状态管理解决方案，它提供了状态管理、路由导航、依赖注入等功能的整合，可以实现全局状态共享和响应式的数据更新。
   - GetX具有强大的性能，因为它使用了自己的反应式编程机制，并且非常轻量级，几乎没有运行时开销。
   - `GetX`适用于任何规模的应用，并且对于需要高性能和灵活性的项目特别有用。

总之，选择合适的状态管理解决方案取决于您的应用需求和个人偏好。如果您在小型项目中寻找简单的状态管理解决方案，可以考虑使用`Provider`；如果您需要处理复杂的业务逻辑并具备更强大的工具集，可以尝试`flutter_bloc`；而如果您想要一个功能完善、高性能且易于使用的解决方案，可以考虑使用`GetX`。最终的选择应根据您的项目复杂性、团队经验和个人喜好来决定。





Flutter应用框架搭建(四) 网络请求封装

