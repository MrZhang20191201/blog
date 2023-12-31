

## 介绍说明

### 发展历史

Linux 是一个开源的操作系统内核，它的发展历史可以追溯到上世纪90年代初。下面是 Linux 发展史的概述：

- **1971年-1991年**：Unix 的诞生和发展 Unix 是一个类Unix操作系统的原型，最早由肯·汤普森（Ken Thompson）和丹尼斯·里奇（Dennis Ritchie）在贝尔实验室开发。Unix 在大学和研究机构中得到了广泛的应用和发展，并逐渐成为主流操作系统之一。
- **1991年**：Linus Torvalds 开始开发 Linux 内核 Linus Torvalds 是芬兰赫尔辛基大学的学生，他开始编写一个类Unix的操作系统内核作为个人项目。这个内核最初只包含了一些基本的功能，但随着时间的推移，逐步得到了其他开发者的贡献和支持。
- **1992年**：发行首个 Linux 发行版 1992年，Linux 发布了第一个可用的发行版——Linux 0.12。这个版本还很简单，没有图形界面，但已经具备了多用户、多任务和网络功能。
- **1993年-1999年**：商业化和发展壮大 在这一时期，越来越多的开发者和公司开始投入到 Linux 的开发和推广中。Red Hat、SUSE、Debian等公司和社区发布了各自的 Linux 发行版，带来了更多的功能、驱动程序和工具。
- **2000年至今**：Linux 在企业和个人领域的广泛应用 从2000年起，Linux 逐渐在企业和个人计算领域得到广泛应用。它在服务器、超级计算机、移动设备等领域取得了成功，并逐渐崭露头角。同时，开源的模式也对软件开发产生了深远的影响。
- **现代发展**：Linux 的持续发展和创新 Linux 内核持续不断地进行开发和改进，更多的功能被添加进来，支持的硬件和架构也不断扩大。许多开源社区和组织致力于 Linux 的发展，例如 Linux 基金会就是一个全球范围内支持和推动 Linux 和开源项目的组织。

总而言之，Linux 是通过众多开发者和社区的共同努力，逐步发展壮大起来的操作系统内核。它以其开放性、稳定性和可定制性而受到了广泛的认可和应用。

### 特点和优势

Linux 拥有许多优势，使其成为广泛应用的操作系统之一。以下是 Linux 的主要优势：

- **开源性**：Linux 是一个开源项目，意味着其源代码对公众开放。这使得用户可以自由查看、修改和分发 Linux 内核和其他组件。开源性带来了更高的透明度、安全性和灵活性，并且鼓励了全球范围内的合作和创新。
- **稳定性和可靠性**：Linux 内核以其稳定性和可靠性而闻名。它能够长时间运行而不需要频繁重启，对于关键任务和服务器环境特别适用。此外，Linux 还提供了强大的错误检测和修复机制，能够处理系统崩溃和故障。
- **安全性**：相对于其他操作系统，Linux 通常被认为更加安全。开源性使得安全专家和开发者可以审查代码并及时修复漏洞。此外，Linux 提供了各种安全功能，如访问控制、文件加密和网络防火墙等，以保护系统免受恶意攻击。
- **灵活性和定制性**：Linux 提供了极高的灵活性和可定制性。用户可以根据自己的需求选择不同的发行版、桌面环境和软件包来构建他们的系统。同时，Linux 支持多种硬件平台，并具有强大的命令行界面和脚本语言，使用户可以更好地控制和定制系统。
- **广泛的社区支持**：Linux 拥有庞大而活跃的开源社区，提供了丰富的文档、教程和资源。用户可以通过在线论坛、邮件列表和博客等途径获取帮助和交流经验。此外，许多企业和组织也为 Linux 提供商业化的支持和服务。
- **高性能和扩展性**：Linux 在服务器和大型计算机领域表现出色，能够处理高并发和复杂任务。它支持对硬件资源的优化利用，并提供许多高性能的网络和存储协议。Linux 还具有良好的可伸缩性，可以轻松扩展到大规模的集群和云计算环境中。

总体而言，Linux 的开源性、稳定性、安全性、灵活性和社区支持等优势使其成为广泛应用于各个领域的操作系统选择。无论是个人用户、开发者还是企业，都能从 Linux 的特点中获益并根据自己的需求进行定制和扩展。

## 常见发行版

> Linux的发行版本分为由商业公司维护的商业版本与由开源社区维护的免费发行版本。商业版本以 `Redhat` 为代表，开源社区版本则以 `debian` 为代表

### Ubuntu（推荐）

> Ubuntu有着漂亮的用户界面，完善的包管理系统，强大的软件源支持，丰富的技术社区，Ubuntu还对大多数硬件有着良好的兼容性，包括最新的图形显卡等等。这一切让Ubuntu越来越向大众化方向发展。但别我们只是需要的只是一个简约稳定、易用的服务器系统而已！
>
> U图形界面固然漂亮，但这也决定了它最佳的应用领域是桌面操作系统而非服务器操作系统。如果希望在学习Linux的过程中有个沉浸式的环境，那么Ubuntu的确不错：仅仅安装在自己的电脑中而非服务器中

- 优势：易于使用、用户友好的图形界面、广泛的软件支持、强调桌面应用程序和易用性。
- 劣势：可能对资源消耗较高。

### CentOS（推荐 7+）

> 非常多的商业公司部署在生产环境上的服务器都是使用的CentOS系统，CentOS是从RHEL源代码编译的社区重新发布版。稳定，有着强大的英文文档与开发社区的支持。
>
> 与Redhat有着相同的渊源。虽然不单独提供商业支持，但往往可以从Redhat中找到一丝线索。相对debian来说，CentOS略显体积大一点。是一个非常成熟的Linux发行版。

- 优势：稳定性高、长期支持、兼容性好、面向企业服务器和生产环境。
- 劣势：软件更新相对较慢、可能缺乏最新的功能和软件包。

### Debian

> 一般来说Debian作为适合于服务器的操作系统，它比Ubuntu要稳定得多。可以说稳定得无与伦比了。debian整个系统，只要应用层面不出现逻辑缺陷，基本上固若金汤，是个常年不需要重启的系统。
>
> debian整个系统基础核心非常小，不仅稳定，而且占用硬盘空间小，占用内存小。128M的VPS即可以流畅运行Debian，而CentOS则会略显吃力。但是由于Debian的发展路线，使它的帮助文档相对于CentOS略少，技术资料也少一些。由于其优秀的表现与稳定性，Debian非常受VPS用户的欢迎。

- 优势：稳定性高、安全性好、大量的软件包、广泛的架构支持、社区驱动。
- 劣势：相对较保守，发布版本可能较旧。

### Fedora

- 优势：新技术的先驱者、最新软件包、开源社区参与、面向开发者和技术爱好者。
- 劣势：更新频率较高，不太适合企业环境。

### Arch Linux

- 优势：滚动更新模式、灵活的定制性、精简而高效的设计、面向技术人员和自定义需求。
- 劣势：相对较复杂、需要一定的技术知识。

### OpenSUSE

- 优势：稳定性好、易用性、强调开放性和社区合作、适用于桌面和服务器。
- 劣势：软件包更新速度可能较慢。

## 虚拟机搭建

> - VMare安装CentOS教程：https://www.runoob.com/w3cnote/vmware-install-centos7.html
>- CentOS下载地址: https://mirrors.aliyun.com/centos/ 
> - VMare版本：VMware-workstation-full-12.5.7.20721
> - CentOS：CentOS-7-x86_64-DVD-2009.iso

## 开通网卡

> 只有开通网卡后才可以访问网络，其它机器才可以通过SSH直接连接
>
> 注意：如果 `ifcfg-ens33` 里面内容为空，重新安装即可（**未知错误原因**）

- 编辑网卡配置信息

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

![image-20231027135052475](http://file.zjay.top/blog/images/202310271350364.png)

- 修改内容（ `vi` 操作 `i` : 输入模式  `:wq` : 强制保存并退出）

```bash
ONBOOT=yes
```

- 重启网卡

```bash
service network restart
```

![image-20231027135441114](http://file.zjay.top/blog/images/202310271354015.png)

## 远程连接

### SSH连接

- 查看 `IP` 地址

```bash
ip addr
```

![image-20231027135550367](http://file.zjay.top/blog/images/202310271355901.png)

- 使用 `MobaXterm` 连接

![image-20231027135738820](http://file.zjay.top/blog/images/202310271357280.png)

### 工具介绍

#### XShell(推荐)

> - **优点：** XShell提供了用户友好的界面，适合初学者和有经验的用户使用。它支持多个选项卡中的会话管理，可以同时连接多个远程系统。此外，XShell还提供了各种自定义选项和对多种协议的支持。
> - **缺点：** 一些高级功能，如文件传输和脚本功能，只在付费版本中提供。免费版本可能在某些特定用例中功能受限。

- 支持撰写栏的加强版——撰写窗格，可复制大段的命令或者 shell 脚本内容，并进行编辑修改。
- 右键菜单有搜索选项，可以直接左键选中语句，右键点击搜索，会自动打开浏览器进行搜索。
- 可以编辑快捷指令，将一长串操作输入到一个快捷指令中，点击一键执行。
- 相对于 Xshell5，新添了对突出显示集的支持。但默认不开启此功能，且规则需要自行配置，详细可

#### MobaXterm(推荐)

> - **优点：** MobaXterm是一个综合性工具，将终端仿真、X11服务器、文件传输和其他网络工具集成到一个软件包中。它具有丰富的功能，包括会话管理、批量执行和内置的图形化SFTP客户端。MobaXterm提供免费版和付费版两个版本可选。
> - **缺点：** MobaXterm的免费版本在同时会话数量和高级功能方面存在一些限制。此外，对于仅需基本终端仿真的用户来说，其界面可能会显得过于复杂。

- 自带 sftp，在登录主机时自动同时连接 sftp。
- 可以连接 windows10 的 WSL。
- 自带很多有用的小工具，如文件夹对比、IP 和端口扫描、低配版的 notepad++ 文本编辑工具等。
- 开箱即用的突出显示集功能，且有多种模式可供选择，除了 error/warning/success 模式外，还有 UNIX shell script，cisco network configuration，Perl syntax，SQL syntax 可选，对特定设备和场景用处非常大

#### SecureCRT

> SecureCRT是一款支持SSH（SSH1和SSH2）的终端仿真程序，简单地说是Windows下登录UNIX或Linux服务器主机的软件。SecureCRT支持SSH，同时支持Telnet和rlogin协议。SecureCRT的SSH协议支持DES,3DES和RC4密码和密码与RSA鉴别，在今后的工作和学习中会经常的用到用来连接linux服务器
>
> - **优点：** SecureCRT是一款高度可定制和强大的终端仿真软件，受到专业人士的青睐。它提供了丰富的功能，包括强大的脚本功能、安全的文件传输和强大的加密能力。其选项卡式界面使得管理多个会话变得简单。
> - **缺点：** SecureCRT是一款商业软件，需要购买许可证才能使用。对于个人用户或预算有限的用户来说，其费用可能成为一个不利因素。

#### Putty

> Putty是最有名的SSH和telnet客户端，由Simon Tatham为Windows平台开发，免费、开源、绿色软件、无需安装、体积小、简洁易用，支持多系统版本，能丝毫不逊色于商业的Telnet类工具
>
> - **优点：** PuTTY是一款轻量级、开源的终端仿真软件，因其简单易用和稳定性而广泛使用。它支持SSH、Telnet和原始TCP连接。PuTTY提供了基本的终端仿真功能，并具有易于使用的会话管理选项。
> - **缺点：** 相比列表中其他工具，PuTTY的功能较少，缺乏像脚本和文件传输等高级功能。然而，可以通过使用其他软件（如 `MTPutty` `WinSCP`）来增强其功能，以实现文件传输、多会话等需求

#### MTPutty

> MTPutty是一种特殊的PuTTY版本，它是 PuTTY 的一个插件/扩展，主要用于管理和组织多个PuTTY会话。它提供了一个图形化界面，允许用户通过选项卡式界面轻松管理多个PuTTY会话
>
> **优势：**
>
> 1. **多标签页管理**：MTPutty支持在一个窗口中以选项卡的形式管理多个PuTTY会话，方便用户同时连接和切换到多个远程服务器。
> 2. **简化配置**：MTPutty为每个会话提供了独立的设置和配置，包括主机名、端口、用户名、密码等，使得配置和使用PuTTY会话更加简单。
> 3. **会话组织**：MTPutty允许用户将不同的会话组织成文件夹和子文件夹的形式，以便更好地管理和分类会话。
> 4. **其他功能**：MTPutty还提供了一些额外的功能，如会话搜索、自动重连、会话共享等，增强了PuTTY的功能和易用性。
>
> **劣势：**
>
> 1. **仅限于Windows平台**：MTPutty是基于Windows环境开发的，所以只能在Windows操作系统上使用，对于其他操作系统的用户，可能需要寻找类似的替代方案。
> 2. **依赖于PuTTY**：MTPutty作为PuTTY的插件，依赖于PuTTY的核心功能。如果你不熟悉或不喜欢PuTTY本身，那么MTPutty可能并不适合你。

#### WinSCP

> WinSCP是一款免费且开源的Windows平台上的图形化SFTP和FTP客户端。它主要用于在本地计算机和远程服务器之间进行文件传输，提供了简单易用的界面和许多高级功能
>
> 以下是WinSCP的一些优势和特点：
>
> - **用户友好的界面**：WinSCP具有直观的用户界面，使得文件传输和管理变得简单和方便。
> - **多种协议支持**：它支持SFTP、FTP、SCP等协议，同时还能与PuTTY配合使用以实现SSH连接。
> - **安全性**：WinSCP提供强大的加密功能，确保数据在传输过程中的安全性。
> - **文件管理功能**：除了文件传输，WinSCP还提供了文件管理功能，如文件夹同步、文件编辑、属性修改等。
> - **批处理和脚本支持**：WinSCP允许用户创建批处理脚本来自动化文件传输和操作。
> - **集成文本编辑器**：它内置了一个简单的文本编辑器，可用于直接编辑远程服务器上的文件。
>
> 官网：https://winscp.net/eng/docs/lang:chs

## 目录说明

> 在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。
>
> - **/etc**： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。
> - **/bin, /sbin, /usr/bin, /usr/sbin**: 这是系统预设的执行文件的放置目录，比如 `ls` 就是在 `/bin/ls` 目录下的。值得提出的是 `/bin`、`/usr/bin` 是给系统用户使用的指令（除 `root ` 外的通用用户），而 `/sbin`, `/usr/sbin `则是给 root 使用的指令
> - **/var**： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 /var/log 目录下，另外 mail 的预设放置也是在这里。

- **/bin**：bin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。

- **/boot：**这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。

- **/dev ：**dev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。

- **/etc：** etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。

- **/home**：用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。

- **/lib**：lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。

- **/lost+found**：这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

- **/media**：linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。

- **/mnt**：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。

- **/opt**：opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

- **/proc**：proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。

- **/root**：该目录为系统管理员，也称作超级权限者的用户主目录。

- **/sbin**：s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。

- **/selinux**：这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。

- **/srv**：该目录存放一些服务启动之后需要提取的数据。

- **/sys**：这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。该文件系统是内核设备树的一个直观反映。当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

- **/tmp**：tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。

- **/usr**：usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。

- **/usr/bin：**系统用户使用的应用程序。

- **/usr/sbin：**超级用户使用的比较高级的管理程序和系统守护程序。

- **/usr/src：**内核源代码默认的放置目录。

- **/var**：var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

- **/run**：是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

## 操作命令

> 查询手册：https://www.linuxcool.com/

### 系统服务  `systemctl`

> 用于管理系统服务的命令行工具，它在使用 Systemd 初始化系统的 Linux 发行版中广泛使用。Systemd 是一种初始化系统和服务管理器，负责启动、停止和管理系统上运行的各种服务，下面列举一些常用操作

#### 语法说明

> 其中，`OPTIONS` 是可选的附加参数，`COMMAND` 是要执行的命令，而 `UNIT` 是服务单元的名称。

```bash
systemctl [OPTIONS] COMMAND [UNIT]
```

#### 可选参数

- `-h` 或 `--help`：显示命令的帮助信息，包括可用选项和命令的简要说明。
- `-a` 或 `--all`：在列出服务单元时，显示所有状态（包括已停止和已禁用的）而不仅仅是活动状态的服务单元。
- `-t` 或 `--type` `<unit-type>`：指定要列出的单元类型。例如，`-t service` 将只列出服务类型的单元。
- `-n` 或 `--lines` `<number>`：限制输出的行数。您可以使用此选项来控制 `status` 命令或 `journalctl` 命令的输出行数。
- `--no-pager`：禁止将输出通过分页器进行处理，并直接将输出打印到终端上。这在查看大量日志时可能会更加方便。
- `--quiet`：静默模式，减少冗余输出。该选项将限制输出的详细程度，仅显示关键信息。
- `--now`：立即启动或停止服务，而无需等待下次系统引导时生效。它可以与 `start`、`stop` 和 `restart` 命令一起使用

#### 使用案例

- `systemctl start <service-name>`：启动服务
- `systemctl stop <service-name>`：关闭服务
- `systemctl restart <service-name>`：重启服务
- `systemctl status <service-name>`：显示服务状态
- `systemctl enable <service-name>`：开机自启动
- `systemctl is-enabled <service-name>`：查看服务是否自启动
- `systemctl list-units <service-name>`：查看所有服务
- `systemctl list-unit-files <service-name>`：列出系统上所有的服务单元（包括已启用和已禁用的）
- `systemctl daemon-reload`：重新加载配置（服务文件修改后需要执行次命令）

### 管理软件包 `rpm`

> - RPM（Red Hat Package Manager）是一种用于在Linux操作系统中管理软件包的工具
> - 它提供了一种方便的方式来安装、升级、查询和删除软件包，yum是rpm的前端程序，主要目的是设计用来自动解决rpm的依赖关系
> - 可以通过运行`man rpm`命令来查看完整的RPM手册

#### 语法说明

> 选项用于指定不同的功能或设置，操作用于指定要执行的操作，而软件包名称是要操作的软件包的名称

```
rpm [选项] [操作] [软件包名称]
```

#### 可选参数

- `-i`：安装软件包
- `-U`：升级已安装的软件包
- `-e`：卸载软件包
- `-q`：查询软件包
- `-l`：列出已安装软件包的文件列表
- `-V`：验证已安装软件包的完整性
- `-F`：修复已安装软件包中的丢失文件
- `--nodeps`：忽略软件包依赖关系
- `--force`：强制执行操作，忽略警告消息

#### 使用案例

- `rpm -i <package_name>`：安装一个软件包
- `rpm -U <package_name>`：升级已安装的软件包
- `rpm -e <package_name>`：卸载一个软件包
- `rpm -q <package_name>`：查询已安装的软件包
- `rpm -l <package_name>`：列出已安装软件包的文件列表

### 压缩包 `tar`

> 是一个在 Unix 和类 Unix 系统上用于打包和解包文件的命令行工具。它通常与压缩程序（如 gzip 或 bzip2）一起使用，以创建压缩文件

#### 语法说明

> 选项用于指定不同的功能或设置，操作用于指定要执行的操作，而文件/目录则是要打包或解包的文件或目录

```bash
tar [选项] [操作] [文件/目录]
```

#### 可选参数

- `-c`：创建新的 tar 归档文件
- `-x`：从 tar 归档中提取文件
- `-f`：指定要操作的 tar 归档文件名
- `-v`：显示详细的操作过程
- `-z`：通过 gzip 来压缩/解压缩归档文件
- `-j`：通过 bzip2 来压缩/解压缩归档文件
- `-t`：列出 tar 归档文件中的内容
- `-r`：向现有的 tar 归档文件追加文件
- `-u`：只提取比归档文件中对应目标文件更新的文件
- `-C`：在指定目录下执行操作

#### 使用案例

- `tar -cvf archive.tar file1 file2 directory`：创建一个 tar 归档文件
- `tar -xvf archive.tar`：解压缩一个 tar 归档文件
- `tar -czvf archive.tar.gz file1 file2 directory`：打包并压缩为 gzip 格式的 tar 归档文件
- `tar -xzvf archive.tar.gz`：解压缩并解压缩为 gzip 格式的 tar 归档文件
- `tar -tvf archive.tar`：列出 tar 归档文件中的内容

### 防火墙 `firewall-cmd`

> 用于配置和管理防火墙规则的命令行工具，它是在使用 firewalld 防火墙服务的 Linux 系统上使用的

#### 语法说明

> 其中，选项用于指定不同的功能或设置，操作用于指定要执行的操作

```bash
firewall-cmd [选项] [操作]
```

#### 可选参数

- `--zone=ZONE`：指定要配置的区域（firewalld 中的区域，如 public、internal、dmz 等）
- `--add-service=SERVICE`：允许通过指定的服务
- `--remove-service=SERVICE`：禁止通过指定的服务
- `--add-port=PORT[/PROTOCOL]`：允许通过指定的端口和协议
- `--remove-port=PORT[/PROTOCOL]`：禁止通过指定的端口和协议
- `--list-all`：显示所有当前配置的防火墙规则
- `--permanent`：将修改持久化到配置文件中，没有此参数重启后失效
- `--reload`：重新加载防火墙配置，使更改生效

#### 使用案例

- `firewall-cmd --zone=public --add-port=8080/tcp --permanent`: 永久开放指定端口
- `firewall-cmd --reload`： 重新载入
- `firewall-cmd --zone=public --add-service=http`：允许通过指定的服务（例如，HTTP）
- `firewall-cmd --zone=public --remove-service=ftp`：禁止通过指定的服务（例如，FTP）
- `firewall-cmd --zone=public --remove-port=123/udp`：禁止通过指定的端口和协议（例如，UDP 123）
- `firewall-cmd --list-all`：显示所有当前配置的防火墙规则

## VI/VIM 编辑器

> 参考文献：https://www.runoob.com/linux/linux-vim.html

### 介绍说明

> 所有的 `Unix Like` 系统都会内建 `vi` 文书编辑器，其他的编辑器则不一定会存在，目前使用比较多的是 `vim` 编辑器。`vim` 具有程序编辑的能力，可以主动的以字体颜色辨别语法的正确性，方便程序设计
>
> `Vim ` 是从 `vi` 发展出来的一个文本编辑器。代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。简单的来说， vi 是老式的字处理器，不过功能已经很齐全了，但是还是有可以进步的地方。 `vim` 则可以说是程序开发者的一项很好用的工具。

- 命令模式（Command Mode）：这是默认启动 Vim 或 Vi 时进入的模式。在命令模式下，可以执行各种编辑命令，如移动光标、复制、粘贴、删除文本等。可以输入冒号 `:` 开始执行命令。
- 插入模式（Insert Mode）：在插入模式下，您可以像在传统编辑器中一样直接输入和编辑文本。按下 `i` 键即可进入插入模式。按下 `Esc` 键可退出插入模式并返回到命令模式。
- 可视模式（Visual Mode）：可视模式用于选择和操作文本块。在该模式下，可以使用光标键来选择文本，然后执行剪切、复制、粘贴等操作。按下 `v` 进入可视模式。
- 替换模式（Replace Mode）：替换模式类似于插入模式，但它会替换光标所在位置的字符，而不是插入文本。按下 `R` 键可进入替换模式。

- 命令行模式（Command-line Mode）：在命令行模式下，可以输入各种命令来执行高级操作，如保存文件、搜索替换、执行外部命令等。通过按下冒号 `:` 进入命令行模式。
- 可视块模式（Visual Block Mode）：可视块模式用于选择和操作以列为单位的文本块。按下 `Ctrl + v` 进入可视块模式。

### 命令模式

> 除了上述命令，还有许多其他的命令可以执行更高级的操作，如文本选择、拷贝粘贴等。可以通过在命令模式下输入 `:help` 来查看 Vim 中的帮助文档，其中包含了大量的命令和用法说明。
>
> 请注意，在命令模式下输入命令时，按下 `Enter` 键即可执行该命令。要返回普通模式，请按下 `Esc` 键。

- 保存和退出：
  - `:w`：保存文件
  - `:q`：退出编辑器
  - `:wq`：保存并退出
- 搜索和替换：
  - `/pattern`：向前搜索指定的模式
  - `?pattern`：向后搜索指定的模式
  - `:s/target/replacement/g`：替换当前行中的目标（target）为替换（replacement）
- 行号操作：
  - `:n`：跳转到指定行号 n
  - `:$`：跳转到文件的最后一行
- 执行外部命令：
  - `:!command`：执行外部命令，如 `!ls` 将会执行 `ls` 命令并显示结果。
- 撤销和重做：
  - `u`：撤销先前的操作
  - `Ctrl + r`：重做撤销的操作
- 设置选项：
  - `:set option`：设置指定的选项，例如 `:set number` 可以显示行号
  - `:set nooption`：取消设置指定的选项
- 宏录制和回放：
  - `q<register>`：开始录制宏，并将其存储在指定的寄存器中，如 `qa` 开始录制并将宏存储在 a 寄存器中
  - `q`：停止录制宏
  - `@<register>`：回放指定寄存器中的宏，如 `@a` 回放 a 寄存器中的宏

### 插入模式

> 插入模式，可以直接输入和编辑文本，类似于传统的文本编辑器。
>
> 在插入模式下，可以自由地编辑和修改文本内容，一旦完成编辑，按下 `Esc` 键退出插入模式，并在普通模式下进行其他操作，如保存文件、搜索替换、移动光标等。

- 进入插入模式：
  - 按下 `i` 键：将光标放置在当前位置并进入插入模式，以便在当前字符前插入文本。
  - 按下 `a` 键：将光标放置在当前字符之后并进入插入模式，以便在当前字符后插入文本。
  - 按下 `I` 键：将光标移动到当前行的开头，并进入插入模式。
  - 按下 `A` 键：将光标移动到当前行的末尾，并进入插入模式。
- 文本输入和编辑：
  - 在插入模式中，您可以自由地键入文本以进行编辑。可以使用所有可见字符、控制字符和特殊键。
  - 按下 `Enter` 键：插入新行并将光标移动到下一行的开头。
  - 按下 `Backspace` 键：删除光标前面的一个字符。
  - 按下 `Delete` 键：删除光标后面的一个字符。
- 退出插入模式：
  - 按下 `Esc` 键：退出插入模式并返回到普通模式。此时，您可以执行其他操作或命令。

### 可视模式

> 在可视模式下，可以使用光标键来选择文本，并对选定的文本执行剪切、复制、粘贴等操作。以下是可视模式的一些常见用法：
>
> 通过可视模式，您可以更方便地选择和操作文本块。它特别适用于执行批量编辑、格式调整等任务。一旦完成选择和操作，您可以按下 `Esc` 键退出可视模式，并在普通模式下进行其他操作，如保存文件、搜索替换、移动光标等。

- 进入可视模式：
  - 按下 `v` 键：进入普通可视模式，按下 `v` 后可以使用光标键来选择文本。
  - 按下 `V` 键：进入行可视模式，按下 `V` 后将整行作为选择。
  - 按下 `Ctrl + v` 键：进入块可视模式，按下 `Ctrl + v` 后可以使用光标键来选择矩形块。
- 文本选择和操作：
  - 使用光标键（如上、下、左、右箭头）来扩展选择区域。
  - 按下 `d` 键：剪切选定的文本。
  - 按下 `y` 键：复制选定的文本。
  - 按下 `p` 键：将剪切或复制的文本粘贴到光标位置之后。
- 块选择：
  - 在块可视模式下，可以使用光标键来选择一个矩形块。这使得您可以垂直选择或编辑一列文本。
- 退出可视模式：
  - 按下 `Esc` 键：退出可视模式并返回到普通模式。此时，您可以执行其他操作或命令。

### 替换模式

> 替换模式可以替换光标所在位置的字符。在替换模式下，可以直接输入新的字符，以覆盖原有字符
>
> 替换模式适用于当您仅需要替换单个字符时。如果您需要进行更大规模的替换操作，建议使用命令行模式下的全局替换命令 `:%s/target/replacement/g`。这将在整个文件中搜索目标字符串并将其替换为指定的替换字符串。
>
> 在替换模式下输入字符会直接覆盖原有字符，并且无法撤销替换操作。因此，在使用替换模式时要小心谨慎，确保输入正确的替换字符。

- 进入替换模式：
  - 按下 `R` 键：进入替换模式。
- 替换字符：
  - 在替换模式下，通过键入新的字符来替换光标所在位置的字符。每次输入一个字符时，原有字符将被替换为新字符。
  - 使用光标键（如左、右箭头）来移动光标到需要替换的字符位置。
- 退出替换模式：
  - 替换模式是临时的，一旦完成替换操作，您将返回到普通模式。要退出替换模式并返回到普通模式，只需按下 `Esc` 键即可。

### 命令行模式

> 命令行模式可以执行更高级的操作和命令。在命令行模式下，您可以输入各种命令，如文件保存、搜索替换、设置选项等
>
> 命令行模式提供了更多高级操作和功能，可以执行各种编辑器和文件管理任务。通过结合不同的命令和选项，可以实现更复杂的编辑需求。如果需要查找特定命令或命令的用法，可以在命令行模式中输入 `:help` 来打开内置的帮助文档并获取更多信息

- 进入命令行模式：
  - 在普通模式下按下冒号 `:` 键：进入命令行模式。
- 执行命令：
  - 在命令行中输入相应的命令并按下 `Enter` 键，即可执行该命令。
- 常见命令示例：
  - `:w`：保存文件。
  - `:q`：退出编辑器。
  - `:wq`：保存并退出编辑器。
  - `:r filename`：将指定文件 `filename` 的内容插入到当前位置下方。
  - `:/pattern`：向后搜索指定的模式，并跳转到第一个匹配的位置。
  - `:?pattern`：向前搜索指定的模式，并跳转到第一个匹配的位置。
  - `:s/target/replacement/g`：在当前行中替换目标（target）为替换（replacement）。
  - `:set option`：设置指定的选项，如 `:set number` 可以显示行号。
  - `:help`：打开帮助文档。
- 自动完成：
  - 在命令行模式下，您可以使用 `Tab` 键进行自动完成，以快速输入命令、文件名等。
- 退出命令行模式：
  - 按下 `Esc` 键：退出命令行模式并返回到普通模式。

### 可视块模式

> 可视块模式可以选择和操作文本块。与普通可视模式不同，可视块模式以矩形块为单位进行选择和编辑
>
> 可视块模式特别适用于需要选择和编辑矩形块的情况，例如在垂直方向上插入相同的文本或对某一列文本进行编辑。使用可视块模式可以更加灵活地处理文本数据。一旦完成选择和操作，您可以按下 `Esc` 键退出可视块模式，并在普通模式下进行其他操作，如保存文件、搜索替换、移动光标等

- 进入可视块模式：
  - 按下 `Ctrl + v` 键：进入可视块模式。
- 选择文本块：
  - 使用光标键（如上、下、左、右箭头）来扩展选择区域，创建所需的矩形块。
- 文本操作：
  - 在可视块模式下，您可以执行各种操作，如剪切、复制、粘贴等。
  - 按下 `d` 键：剪切选定的文本块。
  - 按下 `y` 键：复制选定的文本块。
  - 按下 `p` 键：将剪切或复制的文本块粘贴到光标位置之后。
- 块插入：
  - 在可视块模式下，按下大写字母 `I` 键，然后输入要插入的文本，并按下 `Esc` 键。这将在每行的相同位置插入相同的文本。
- 退出可视块模式：
  - 按下 `Esc` 键：退出可视块模式并返回到普通模式。

## YUM

> - yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器。
> - 基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。
> - yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。

### 语法说明

> - `options`：可选，选项包括-h（帮助），-y（当安装过程提示选择全部为 "yes"），-q（不显示安装的过程）等等。
> - `command`：要进行的操作。
> - `package`：安装的包名。

```bash
yum [options] [command] [package ...]
```

### 常用命令

- `yum update`：更新系统中所有已安装的软件包到最新版本。
- `yum install package_name`：安装指定软件包，例如 `yum install nginx`。
- `yum remove package_name`：卸载指定软件包，例如 `yum remove nginx`。
- `yum search keyword`：在可用的软件包列表中搜索关键字，例如 `yum search python`。
- `yum info package_name`：显示特定软件包的详细信息，如版本、大小等。
- `yum list`：列出所有已安装的软件包。
- `yum list available`：列出可用的软件包。
- `yum list installed`：列出已安装的软件包。
- `yum upgrade package_name`：升级指定软件包到最新版本。
- `yum clean all`：清理 `yum` 缓存，删除下载的软件包和元数据。
- `yum repolist`：列出当前配置的软件源库。
- `yum makecache`：生成 `yum` 软件包管理器的缓存，下载并保存每个软件包的元数据信息到本地缓存中

### 源设置

> CentOS默认的 `yum` 源有时候不是国内镜像，导致 `yum` 在线安装及更新速度不是很理想，这时候需要将 `yum` 源设置为国内镜像站点
>
> 国内 `yum` 源
>
> - 阿里yum源（推荐）:http://mirrors.aliyun.com/repo/
> - 163(网易)yum源（推荐）: http://mirrors.163.com/.help/
> - 中科大的Linux安装镜像源：http://centos.ustc.edu.cn/
> - 搜狐的Linux安装镜像源：http://mirrors.sohu.com/
> - 北京首都在线科技：http://mirrors.yun-idc.com/

- 查看当前源（如果不是国内那么建议更换，因为我这边是阿里的镜像，里面已经设置了）

```bash
yum repolist
```

![image-20231027173504263](http://file.zjay.top/blog/images/202310271735715.png)

- 备份系统自带的 `yum` 源


```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

- 下载国内yum源配置文件到 `/etc/yum.repos.d/`

```bash
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.163.com/.help/CentOS7-Base-163.repo
```

![image-20231101092005300](http://file.zjay.top/blog/images/202311010920607.png)

- 清除缓存并生成新的缓存

```bash
yum clean all # 清理缓存
yum makecache # 生成新的缓存
```



## Wget

> 用于通过 HTTP、HTTPS 或 FTP 协议下载文件。它可以在 Linux、UNIX 和 Windows 等操作系统上使用，执行 `wget --help` 命令可以查看更多选项和用法说明

### 基本语法

```bash
wget [options] [URL]
```

- `options` 是可选的参数，允许您对下载行为进行自定义配置
- `URL` 是要下载的文件的地址

### 常用的参数

- `-P`：指定要保存下载文件的目录
- `-O`：指定要保存下载文件的文件名
- `-r`：递归下载整个网站
- `-c`：继续之前中断的下载
- `-np`：不遍历父级目录
- `-nv`：减少冗余信息的输出

### 示例用法

```bash
wget https://example.com/file.txt # 下载单个文件
wget -O output.txt https://example.com/file.txt # 指定保存文件名和目录
wget -P /path/to/directory https://example.com/file.txt # 指定保存文件名和目录
wget -r https://example.com/ # 递归下载整个网站
wget -c https://example.com/file.txt #断点续传下载
```

### 使用  YUM 安装

```bash
yum install wget
```

## 服务文件（CentOS7）

> - 服务文件是一种用于定义和管理系统服务的配置文件。它们通常位于 `/etc/systemd/system/` 目录下，使用 Systemd 初始化系统进行管理。
>
>   - `/usr/lib/systemd/`：存储已下载应用程序的服务文件
>
>   - `/etc/systemd/system/`：存储由系统管理员创建的服务文件
>
> - 一般需要手动启动的服务，我们可以配置为守护程序，可以根据服务器启动后自行启动，例如 `.net core` 应用程序
>
> - 服务文件提供了对系统服务进行配置和管理的灵活性和控制能力。通过编辑服务文件，可以定义服务的行为、依赖关系和执行方式。一旦修改并保存了服务文件，可以使用 `systemctl` 命令来加载、启动、停止、重启或查看服务的状态。
>
> - 具体的服务文件格式和字段可能会根据不同的 `Linux` 发行版和服务类型而有所不同。因此，在编辑或创建服务文件时，建议参考相关文档和手册以确保正确配置服务。

### 参数说明

> 服务文件由三个主要部分组成
>
> - `Unit`：这个部分包含了关于服务的描述信息。`Description` 字段用于提供服务的简短描述，`Documentation` 字段可包含有关该服务的更多文档资料，`After` 和 `Requires` 字段指定了其他服务的依赖关系。
> - `Service`：这个部分定义了服务的执行方式和行为。`Type` 字段指定服务运行的类型（如 `simple`、`forking`、`oneshot `等），`ExecStart` 字段指定了服务启动时要执行的命令或脚本，`WorkingDirectory` 字段指定了服务运行时的工作目录，`User` 和 `Group` 字段指定了服务运行的用户和组，`Restart` 和 `RestartSec` 字段定义了服务在失败时是否重启以及重启的时间间隔。
> - `Install`：这个部分定义了服务的安装和启动配置。`WantedBy` 字段指定了服务所属的 `target`（目标），用于确定服务在系统启动时是否自动启动。

```bash
[Unit]
Description=Service Description
Documentation=URL
After=dependency.service
Requires=dependency.service

[Service]
Type=simple
ExecStart=/path/to/executable
WorkingDirectory=/path/to/working/directory
User=username
Group=groupname
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=default.target
```

### 使用案例

#### 创建服务文件

```bash
vi /etc/systemd/system/base.service
```

以下示例是应用的一个 `.ini` 服务文件：

> - `WorkingDirectory` 是发布应用程序的目录。
> - `ExecStart` 是启动应用程序的实际命令。
> - `Restart=always` 是自言自明的。 如果由于某种原因（无论是手动还是由于崩溃）而停止，则始终会启动此过程。
> - `RestartSec=10` 也是自言自明的。 进程停止后，将在经过 10 秒后启动。
> - `SyslogIdentifier` 很重要。 它表示系统日志标识符。 有关守护程序的信息记录在此名称下的系统日志中。 还可以使用此标识符查找进程的 PID。
> - `User` 是管理服务的用户。 它应存在于系统中，并具有相应的应用程序文件所有权。
> - `Environment` 可以在服务文件中设置任意数量的环境变量。

```ini
[Unit]
Description=base service running

[Service]
WorkingDirectory=/var/www
ExecStart=/usr/bin/dotnet /var/www/PM.Base.WebAPI.dll --urls=http://*:5000
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-base-service
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Development
# Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

## JDK 安装

> - https://blog.csdn.net/zpg13579/article/details/123382990
>
> - https://blog.csdn.net/gaobing1/article/details/122112871
> - https://blog.csdn.net/chuanxincui/article/details/82850538

### 压缩包安装

- 上传压缩包到Linux（我这里是通过远程工具上传的，上传、安装目录根据自己习惯来，例如：`/opt/env` ）

- 解压压缩包（ `tag ` 命令，解压： ` tag xzvf jdk-8u151-linux-x64.tar.gz `  压缩： ` tag czvf jdk-8u151-linux-x64.tar.gz `）

```bash
tag xzvf jdk-8u151-linux-x64.tar.gz
```

- 编辑 `profile`

```bash
vi /etc/profile
```

- 配置环境变量

```bash
JAVA_HOME=/etc/env/jdk1.8.0_151
PATH=$JAVA_HOME/bin:$PATH
export JAVA_HOME PATH
```

![image-20231101110511542](http://file.zjay.top/blog/images/202311011105221.png)

- 重新加载

```bash
source /etc/profile
```



### 使用  YUM 安装

- 查看可安装软件包

  > openjdk 、 openjdk-devel 、openjdk-headless的区别
  >
  > 简而言之，`openjdk` 是用于运行 Java 应用程序的基本运行时环境；`openjdk-devel` 是用于开发和编译 Java 应用程序的开发工具和库；而 `openjdk-headless` 是没有图形界面的纯命令行环境下的 OpenJDK 包。
  >
  > - `openjdk`：这是一个基本的 OpenJDK 软件包，包含了 Java 运行时环境（Java Runtime Environment，JRE）。它提供了运行 Java 应用程序所需的运行时库和工具。
  > - `openjdk-devel`：这是一个 OpenJDK 的开发软件包，包括了 Java 开发工具和库，用于编译和开发 Java 应用程序。它除了包含`openjdk`中的运行时库外，还额外提供了编译器（`javac`）、调试器（`jdb`）、打包工具（`jar`）等开发所需的工具和库。
  > - `openjdk-headless`：这是一个 OpenJDK 的无头（Headless）软件包，用于在没有图形用户界面（GUI）的环境中运行 Java 应用程序。它并不包含任何图形相关的库或工具，只提供纯粹的命令行支持。通常在服务器环境或嵌入式设备上使用。

```bash
yum search jdk
```

- 安装指定版本

```bash
yum -y install java-1.8.0-openjdk.x86_64
```



## .NET 安装

> - 官方文档：https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-centos
> - 自启动官方文档：https://learn.microsoft.com/zh-cn/troubleshoot/developer/webapps/aspnetcore/practice-troubleshoot-linux/2-3-configure-aspnet-core-application-start-automatically

```bash
yum install dotnet-sdk-7.0
yum install aspnetcore-runtime-7.
```

### 前期准备

> 将 Microsoft 包签名密钥添加到受信任密钥列表，并添加 Microsoft 包存储库，否则无法搜索到 `aspnetcore` 的软件包

```bash
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
```

### 安装运行时

> 通过 ASP.NET Core 运行时，可以运行使用 .NET 开发且未提供运行时的应用。 以下命令将安装 ASP.NET Core 运行时，这是与 .NET 最兼容的运行时
>
> 作为 ASP.NET Core 运行时的一种替代方法，你可以安装不包含 ASP.NET Core 支持的 .NET 运行时：将上一命令中的 `aspnetcore-runtime-7.0` 替换为 `dotnet-runtime-7.0`
>
> SDK安装：`yum -y install dotnet-sdk-6.0`

```bash
yum -y install aspnetcore-runtime-6.0
```

### 开通端口

```bash
firewall-cmd --zone=public --add-port=5000/tcp --permanent # 开通端口
firewall-cmd --reload # 重新加载生效
```

### 运行项目

```bash
dotnet <project-name>.dll --urls="http://*:5000"
```

### 开机自动运行

> - 每次重启服务器时，都必须手动启动应用程序。 否则，应用程序将正常退出或崩溃。所以我们可以配置为守护程序
> -  `systemctl` 命令用于管理“服务”或“守护程序”。 守护程序的概念与 Windows 服务的概念类似。 当系统启动时，可以自动重启此类服务。

#### 创建服务文件

> 在 Linux 中，还有具有“.service”扩展名的单元配置文件，用于在进程退出时控制守护程序的行为。 这些文件也称为 *服务文件*、 *单元文件*和 *服务单元文件*。
>
> 这些服务文件位于以下目录之一：
>
> - */usr/lib/systemd/*：存储已下载应用程序的服务文件
> - */etc/systemd/system/*：存储由系统管理员创建的服务文件

```bash
[Unit]
Description=base service running

[Service]
WorkingDirectory=/var/www
ExecStart=dotnet /var/www/PM.Base.WebAPI.dll --urls=http://*:5000
Restart=always
RestartSec=10 # 奔溃后多少秒后重启
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```



## Tomcat 安装

> 参考文献
>
> - https://blog.csdn.net/qq_45752401/article/details/122998462
>
> - https://blog.csdn.net/zhaoyanjun6/article/details/79131856
> - https://blog.csdn.net/kongsanjin/article/details/123544646

### 压缩包安装

- 上传压缩包到Linux（我这里是通过远程工具上传的，上传、安装目录根据自己习惯来，例如：`/opt/env` ）

- 解压压缩包（ `tag ` 命令，解压： ` tag xzvf apache-tomcat-8.5.20.tar.gz `  压缩： ` tag czvf apache-tomcat-8.5.20.tar.gz `）

```bash
tag xzvf apache-tomcat-8.5.20.tar.gz
```

- 开放 `8080` 端口（如果防火墙开启，需要开放端口，查看防火墙状态：`firewall-cmd --state`）

```bash
firewall-cmd --zone=public --add-port=8080/tcp --permanent # 添加 --permanent永久生效，没有此参数重启后失效
firewall-cmd --reload # 重新载入
```

- 进入 `tomacat` 安装目录的 `bin` 文件夹内（关闭：`./shutdown.sh` ）

```bash
./startup.sh
```

![image-20231101142606166](http://file.zjay.top/blog/images/202311011426729.png)

- 访问地址（`http://{ip}:8080`）
- 服务自启动

### 使用 YUM 安装

- 查看可安装软件包

```bash
yum search tomcat
```

- 安装指定版本

```bash
yum -y install tomcat
```

- 安装默认浏览器管理界面

```bash
yum install tomcat-webapps tomcat-admin-webapps
```

- 开放 `8080` 端口（如果防火墙开启，需要开放端口，查看防火墙状态：`firewall-cmd --state`）

```bash
firewall-cmd --zone=public --add-port=8080/tcp --permanent # 添加 --permanent永久生效，没有此参数重启后失效
firewall-cmd --reload # 重新载入
```

- 启动服务

```bash
systemctl start tomcat
```

- 设置自启动

```bash
systemctl enable tomcat
```

- 访问地址（`http://<ip>:8080`）

### 查看软件包安装信息

> 主要找到 `webapps` 目录，用于部署项目

```bash
rpm -ql tomcat
```

### 目录详解

- `bin`：用于存放 `tomcat` 启动或停止等脚本
- `conf`：用于存放 `tomcat` 相关配置文件
- `lib`：`tomcat` 依赖库目录，包含 `tomcat` 服务器运行环境依赖jar包
- `logs`：`tomcat` 默认日志存放路径
- `webapps`：`tomcat` 默认应用部署目录
- `work`：`web` 应用 `jsp` 代码生成和编译临时目录
- `temp`：`tomcat` 临时数据目录

### Vue 部署

> 根据 `rpm -ql tomcat` 可知 `webapps` 路径为 `/var/lib/tomcat/webapps/`，部署后访问 `http://<ip>:8080/vue3-element-admin`

```bash
cd /var/lib/tomcat/webapps/
mkdir vue3-element-admin # 创建文件夹
cd vue3-element-admin
tar -xzvf dist.tar.gz # 解压文件夹（通过远程工具把部署压缩包复制到vue3-element-admin中）
```

