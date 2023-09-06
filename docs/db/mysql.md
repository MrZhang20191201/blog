## windows安装

### 下载

![image-20230328095455225](http://file.zjay.top/blog/images/202303280954148.png)

![image-20230328095710087](http://file.zjay.top/blog/images/202303280957548.png)

![image-20230328095831294](http://file.zjay.top/blog/images/202303280958981.png)

### 安装目录

MySQL安装目录说明

| 文件名  | 说明                                                         |
| :------ | ------------------------------------------------------------ |
| bin     | 可执行文件，如 mysql.exe、mysqld.exe、mysqlshow.exe 等。     |
| docs    | 存放文档                                                     |
| inclide | 用于放置一些头文件，如：mysql.h、mysql_ername.h 等           |
| lib     | 用于放置一系列库文件                                         |
| share   | 用于存放字符集、语言等信息                                   |
| data    | 用于放置一些日志文件以及数据库，创建和保存的数据都存在这个目录里 |
| my.ini  | my.ini 是 MySQL 默认使用的配置文件，一般情况下，只要修改 my.ini 配置文件中的内容就可以对 MySQL 进行配置。<br />除了上述介绍的目录，MySQL 安装目录下可能还有几个后缀名为.ini的配置文件，不同的配置文件代表不同的含义。<br/>my.ini 是 MySQL 默认使用的配置文件，其它的配置文件都是适合不同数据库的配置文件的模板，在文件名中就说明了适合的数据库类型，<br/>下面对这几个配置文件进行详细讲解。<br/>my-huge.ini：适合超大型数据库的配置文件。<br/>my-large.ini：适合大型数据库的配置文件。<br/>my-medium.ini：适合中型数据库的配置文件。<br/>my-small.ini：适合小型数据库的配置文件。<br/>my-template.ini：是配置文件的模板，MySQL 配置向导将该配置文件中选择项写入到 my.ini 文件。<br/>my-innodb-heavy-4G.ini：表示该配置文件只对于 InnoDB 存储引擎有效，而且服务器的内存不能小于 4GB。 |

- 下载文件解压到指定目录

![image-20230328100916644](http://file.zjay.top/blog/images/202303281009054.png)

- 新建 my.int 文件 和 data 文件夹

![image-20230328101116914](http://file.zjay.top/blog/images/202304180915974.png)

- 配置环境变量Path

  ![image-20230328102527024](http://file.zjay.top/blog/images/202303281025273.png)

- 配置 my.ini 文件信息

  > 注意
  >
  > 1. 路径名在选项文件中指定，使用 / 或者 \\\

```ini
[mysql]

# 设置mysql客户端默认字符集
default-character-set=utf8 

[mysqld]

#设置3306端口
port = 3306 

# 设置mysql的安装目录
basedir=E:/mysql-8.0.31-winx64

# 设置mysql数据库的数据的存放目录
datadir=E:/mysql-8.0.31-winx64/data

# 允许最大连接数
max_connections=200

# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8

# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```

### 初始化数据目录

> 注意
>
> 1. 压缩包安装不会创建数据目录。安装MySQL后，必须初始化数据目录， 包括系统中的表 图式
>    - 使用 `--initialize`进行默认安全安装（生成随机初始密码），但是密码被标记为已过期，必须重新设置一个新密码
>    - 使用 `--initialize-insecure`， 不会生成密码

- 执行初始化命令

  执行完成后，会输出 root 用户的初始默认密码，例如： `DjvVk5%4Y5B?`

```powershell
mysqld --initialize --console
```

![image-20230328105658584](http://file.zjay.top/blog/images/202304180915097.png)

### 安装

- 安装mysql服务

```powershell
mysqld install
```

![image-20230328110029206](http://file.zjay.top/blog/images/202303281100000.png)

- 启动服务

  > 注意：
  >
  > 如果出现 `发生系统错误 系统找不到指定文件`那么可以查看服务可执行程序指定的地址是否为我们安装地址，如果不是，那么需要修改地址
  >
  > 解决方案：https://blog.csdn.net/JustinQin/article/details/102644775

```powershell
net start mysql
```

![image-20230328111055000](http://file.zjay.top/blog/images/202303281110819.png)

![image-20230328111120003](http://file.zjay.top/blog/images/202304180915480.png)

![image-20230328111947679](http://file.zjay.top/blog/images/202303281119610.png)

### 修改默认密码

> 安装时会生成随机初始密码，但是密码被标记为已过期，必须重新设置一个新密码

- 使用初始化密码登入（执行下面命令后，输入密码即可，如果密码忘记了，可以去/data/）

```
mysql -u root -p
```

![image-20230328112815585](http://file.zjay.top/blog/images/202303281128115.png)

- `root`用户分配一个新密码（注意：这个密码只能用于本机登入访问）

```powershell
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root-password';
```

![image-20230328131324827](http://file.zjay.top/blog/images/202303281313615.png)

## 用户授权

### 常用命令

```mysql
-- 使用mysql数据库
USE mysql
-- 查看用户
SELECT user, host FROM USER WHERE USER=‘myuser‘;
-- 修改用户密码
update user set authentication_string=‘‘ where user=‘myuser‘;
ALTER USER ‘myuser‘@‘%‘ IDENTIFIED BY ‘mypass‘;
-- 删除用户
DROP USER myuser;
-- 查看权限
SHOW GRANTS FOR myuser;
-- 授予权限
grant all privileges on databasename.tablename to ‘user‘@‘host‘ identified by ‘password‘；
-- 授予myuser用户全局级全部权限
GRANT ALL PRIVILEGES ON *.* TO ‘myuser‘@‘%‘ IDENTIFIED BY ‘mypass‘ WITH GRANT OPTION;
-- 授予myuser用户针对testdb数据库全部权限
GRANT ALL PRIVILEGES ON testdb.* TO ‘myuser‘
-- 生效(刷新权限)
revoke privileges on databasename.tablename from ‘username‘@‘host‘;
-- 撤销权限
REVOKE ALL PRIVILEGES FROM myuser;
```

###  GRANT命令说明

> 权限控制主要是出于安全因素，因此需要遵循一下几个经验原则：
>
> - 只授予能满足需要的最小权限，防止用户干坏事。比如用户只是需要查询，那就只给select权限就可以了，不要给用户赋予update、insert或者delete权限。
> - 创建用户的时候限制用户的登录主机，一般是限制成指定IP或者内网IP段。
> - 初始化数据库的时候删除没有密码的用户。安装完数据库的时候会自动创建一些用户，这些用户默认没有密码。
> - 为每个用户设置满足密码复杂度的密码。定期清理不需要的用户。回收权限或者删除用户。
>
> 备注：可以使用GRANT重复给用户添加权限，权限叠加，比如你先给用户添加一个select权限，然后又给用户添加一个insert权限，那么该用户就同时拥有了select和insert权限。

- `priveleges`(权限列表)，可以是`all priveleges`, 表示所有权限，也可以是`select`、`update`等权限，多个权限的名词,相互之间用逗号分开。
- `on`用来指定权限针对哪些库和表。
- `.`中前面的*号用来指定数据库名，后面的*号用来指定表名。
- `to` 表示将权限赋予某个用户，`@`后面接限制的主机，可以是`IP`，`IP`段，域名以及`%`，`%`表示任何地方。注意：这里`%`有的版本不包括本地，以前碰到过给某个用户设置了`%`允许任何地方登录，但是在本地登录不了，这个和版本有关系，遇到这个问题再加一个`localhost`的用户就可以了。
- `identified by`指定用户的登录密码,该项可以省略。
- `WITH GRANT OPTION` 这个选项表示该用户可以将自己拥有的权限授权给别人。
