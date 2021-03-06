Installation Guide
==================
Installation Guide for [__JSON at Work__](https://github.com/tmarrs/json-at-work/blob/master/README.md).

## Contents
- [Installing JSON Tools in the Browser](#installing-json-tools-in-the-browser)
    - [Installing JSONView in Chrome and Firefox](#installing-jsonview-in-chrome-and-firefox)
    - [JSONLint](#jsonlint)
- [Installing JSONPad](#installing-jsonpad)
- [Installing Node.js](#installing-nodejs)
    - [Install Node.js on Mac OS X and Linux with NVM](#install-nodejs-on-mac-os-x-and-linux-with-nvm)
        - [Install and Configure NVM](#install-and-configure-nvm)
        - [Install Node](#install-node)
        - [Avoiding `sudo` with npm](#avoiding-sudo-with-npm)
        - [Avoiding `sudo` with npm - Option 2](#avoiding-sudo-with-npm---option-2)
        - [Taming the REPL](#taming-the-repl)
    - [Install Node.js on Windows](#install-nodejs-on-windows)
    - [Uninstalling Node.js](#uninstalling-nodejs)
        - [Uninstalling Node.js on Mac OS X](#uninstalling-nodejs-on-mac-os-x)
        - [Uninstalling Node.js on Linux](#uninstalling-nodejs-on-linux)
        - [Uninstalling Node.js on Windows](#uninstalling-nodejs-on-windows)
    - [Installing Yeoman](#installing-yeoman)
        - [Installing the `webapp` Yeoman Generator](#installing-the-webapp-yeoman-generator)
    - [Installing npm Modules](#installing-npm-modules)
        - [Install `jsonlint`](#install-jsonlint)
        - [Install `ujs-validate`](#install-ujs-validate)
        - [Install `tinyserver`](#install-tinyserver)
        - [Install `json-server`](#install-json-server)
- [Installing Ruby on Rails (RoR)](#installing-ruby-on-rails-ror)
    - [Installing with RVM + the `rails` Gem](#installing-with-rvm--the-rails-gem)
    - [Rails on Windows](#rails-on-windows)
- [Installing MySQL](#installing-mysql)
- [Installing The Java Environment](#installing-the-java-environment)
    - [Installing Java SE](#installing-java-se)
        - [Java Setup on Mac OS X](#java-setup-on-mac-os-x)
        - [Java Setup on Linux](#java-setup-on-linux)
        - [Java Setup on Windows](#java-setup-on-windows)
    - [Installing Maven](#installing-maven)
        - [Installing Spring - Add to the POM](#installing-spring---add-to-the-pom)
        - [Installing JUnit - Add to the POM](#installing-junit---add-to-the-pom)
    - [Installing Apache Tomcat](#installing-apache-tomcat)
        - [Installing Apache Tomcat on Mac OS X](#installing-apache-tomcat-on-mac-os-x)
        - [Installing Apache Tomcat on Linux](#installing-apache-tomcat-on-linux)
        - [Installing Apache Tomcat on Windows](#installing-apache-tomcat-on-windows)
- [Installing `jq`](#installing-jq)
    - [Installing `cURL`](#installing-curl)
        - [Installing `cURL` on Mac OS X](#installing-curl-on-mac-os-x)
        - [Installing `cURL` on Linux](#installing-curl-on-linux)
        - [Installing `cURL` on Windows](#installing-curl-on-windows)
- [References](#references)


## Installing JSON Tools in the Browser
### Installing JSONView in Chrome and Firefox
Please follow the installation instructions on the [JSONView site](http://jsonview.com/) for your browser.

### JSONLint
Use [JSONLint](http://www.jsonlint.com) to validate JSON documents online.


## Installing JSONPad
You can download JSONPad from the [JSONPad Downloads page](https://code.google.com/p/json-pad/downloads/list).
JSONPad in its current form runs on Adobe AIR, but it should be included in the install.

Unfortunately, Google Code is shutting down due to the popularity of GitHub, so I recently exported this project to
[my own `json-pad` GitHub Repository](https://github.com/tmarrs/json-pad) to preserve the codebase. My hope is to eventually re-platform this excellent tool from Adobe AIR to [NW.js (formerly known as Node Webkit)](http://nwjs.io/) so that it will run as a cross-platform compatible GUI. But this effort will have to wait until the book is published.


## Installing Node.js
This book uses Node.js version `v0.10.32`.

If Node.js is working properly on your machine, then you should see the following from the command line when you check the version number:

```
json-at-work => node -v
v0.10.32
```

When you check out the Node.js [REPL (Request-Eval-Print-Loop)](https://nodejs.org/api/repl.html), you should see this:

```
json-at-work => node
> .exit
json-at-work =>
```

### Install Node.js on Mac OS X and Linux with NVM
Now that Node.js is completely uninstalled, let's do a fresh instllation. Although you could use the installation package from the [Node.js site](https://nodejs.org/), it's difficult to change versions. Instead, let's use [NVM (Node Version Manager)](https://github.com/creationix/nvm). NVM makes it easy to install/uninstall Node.js, and upgrade to newer versions.

#### Install and Configure NVM
First, install NVM by using one of the following methods:
* [Install Script](https://github.com/creationix/nvm#install-script)
* [Manual Install](https://github.com/creationix/nvm#manual-install)

Next, let's make sure that NVM runs properly. Source it from a shell as follows: ```source ~/.nvm/nvm.sh```
Now NVM will work properly for the remainer of the installation process.

If you're running bash, then do the following file to so that NVM is automatically sourced (i.e., configured) upon login. If you're running bash, then do the following:
* In ```$HOME/.bashrc```, add these lines:
```
source ~/.nvm/nvm.sh
export NVM_HOME=~/.nvm/v0.10.32
```
* In ```$HOME/.bashrc_profile```, add this line:
```
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh # This loads NVM
```

Please note that similar steps apply to Bourne Shell or Korn Shell.

#### Install Node
Now that NVM is installed, use it to install Node:
* Type `nvm ls-remote` to see what remote (i.e., not on your local machine) versions of Node are available to install.
* Install version `v0.10.32` with the following command: `nvm install v0.10.32`
  * All Node versions are installed in `$HOME/.nvm`
* Set the default Node version to be used in any new shell: `nvm alias default v0.10.32`
  * Without this, neither the `node` or `npm` commands will work properly when you exit the current shell.
  * Now, exit your current shell.

From a new shell, do the following health checks:
  * `nvm ls`. You should see:
```
          ->  v0.10.32
               system
          default -> v0.10.32
```
  * `node -v`, which yields:
```
          v0.10.32
```
  * `npm -v`, and it looks like:
```
          1.4.28
```

To see a full list of NVM's capabilities, type: `nvm --help`.

#### Avoiding `sudo` with npm
npm may require you to run as `sudo`, and this can get cumbersome and annoying. This also can be a security risk because packages can contain scripts, and npm is running with root privilege. To avoid this do the following:

```
sudo chown -R $USER ~/.nvm
```

This works if you installed node with NVM (all node installations go under that directory).
This tip was inspired by Isaac Z. Schlueter from [How to Node](http://howtonode.org/introduction-to-npm).

#### Avoiding `sudo` with npm - Option 2
Here's another way to avoid `sudo` - please see the [NPM Global without Sudo Guide](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) provided by [Sindre Sorhus](https://github.com/sindresorhus).

#### Taming the REPL
Out of the box, the default behavoir of the REPL leaves a bit to be desired because you 'undefined' after most lines of JavaScript, hitting the Enter key, breathing, etc. This is due to the fact that JavaScript functions always return something. If nothing is returned, then 'undefined' is returned by default. This behavior can be very annoying and unproductive. Here's a sample session:

```
json-at-work => node
> # Hit Enter
undefined
>
> var y = 5
undefined
> .exit
```

To turn off 'undefined' in the REPL, add the following to `.bashrc` (or your setup for Bourne or Korn Shell):

```
source ~/.nvm/nvm.sh

...

alias mynode="node -e \"require('repl').start({ignoreUndefined: true})\""
```

Now, exit the current shell and start a new shell. Rather than re-defining `node`, it's safer to define a new alias (in this case, `mynode`). This way, `node` will still work properly from the command line and be able to run JavaScript files.
Meanwhile, `mynode` serves as your new REPL command.

```
json-at-work => mynode
>
> var x = 5
> .exit
```

You now have a Node REPL that does what you want - no more annoying 'undefined'. You're welcome. :smile:


### Install Node.js on Windows
NVM works well on Mac OS X and Linux, but it doesn't work on Windows. You can try the following options on Windows:
* [nvmw](https://github.com/hakobera/nvmw)
* [nvm-windows](https://github.com/coreybutler/nvm-windows)

If NVM doesn't work for your Windows environment, then try one of the following options:
* Please follow [Team Treehouse's instructions for installing Node on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows).
* Use [Nitrous.io](https://www.nitrous.io/) to run your Node.js environment in the Cloud rather than on Windows. Please note that Nitrous.io has both free and commercial usage plans.

### Uninstalling Node.js
If you have a previous installation of Node.js that isn't quite working properly anymore, you may need to completely uninstall it from your machine. This includes both the `node` and `npm` executables.

#### Uninstalling Node.js on Mac OS X
Uninstalls can be complicated, and credit for the Mac uninstall instructions goes to [Clay at Hungred Dot Com](http://hungred.com/how-to/completely-removing-nodejs-npm/). If `homebrew` was used to install Node.js, then simply type `brew uninstall node` at the prompt.

If you didn't use `homebrew`, do the following:
* cd to `/usr/local/lib` and delete any `node` executable and `node_modules`
* cd to `/usr/local/include` and delete any node and node_modules directory
* cd to `/usr/local/bin` and delete any `node` executable

You may also need to do the following:
```
rm -rf /usr/local/bin/npm
rm -rf /usr/local/share/man/man1/node.1
rm -rf /usr/local/lib/dtrace/node.d
rm -rf $USER/.npm
```

#### Uninstalling Node.js on Linux
Credit for the Linux uninstall instructions goes to [Stack Overflow](http://stackoverflow.com/questions/5650169/uninstall-node-js-using-linux-command-line) and [GitHub](https://github.com/joyent/node/issues/4058).
Do the following:
* Find the node installation by typing `which node`. Let's assume it's at `/usr/local/bin/node`
* cd to `/usr/local`
* Execute the following:
```
sudo rm -rf bin/node
sudo rm -rf bin/npm
sudo rm -rf lib/node_modules/npm
sudo rm -rf lib/node
sudo rm -rf share/man/*/node.*
```

#### Uninstalling Node.js on Windows
Credit for the Windows uninstall instructions goes to [Team Treehouse](http://blog.teamtreehouse.com/install-node-js-npm-windows). Here are the steps:
* Open the Windows Control Panel.
* Choose “Programs and Features”.
* Click “Uninstall a program”.
* Select Node.js, and click the Uninstall link.


### Installing Yeoman
Please refer to the [Yeoman Setup page](http://yeoman.io/codelab/setup.html).

#### Installing the `webapp` Yeoman Generator
Please see the [`generator-webapp` GitHub page](https://github.com/yeoman/generator-webapp). Please follow the default installation so that the test environment includes both [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).

### Installing npm Modules
We use the following npm modules at the command line, so we install them globally:
* [`jsonlint`](#install-jsonlint)
* [`ujs-validate`](#install-ujs-validate)
* [`tinyserver`](#install-tinyserver)
* [`json-server`](#install-json-server)

#### Install `jsonlint`
This is the npm equivalent of the [JSONLint site](http://ww.jsonlint.com) used to validate a JSON document. Here's the [`jsonlint` GitHub Repository](https://github.com/zaach/jsonlint).

To install:
```
npm install -g jsonlint
```

To validate a JSON document:
```
jsonlint basic.json
```

#### Install `ujs-validate`
This is the npm equivalent of the [Validate site](http://jsonvalidate.com/) used to valid a JSON document against a JSON Schema. Here's the [`ujs-validate` GitHub Repository](https://github.com/usingjsonschema/ujs-jsonvalidate-nodejs).

To install:
```
npm install -g ujs-jsonvalidate
```

To validate a JSON document:
```
validate basic.json basic-schema.json
```

#### Install `tinyserver`
`tinyserver` is a simple Web Server that serves up files (as web addressable) in the current directory structure on the local host system.

To install:
```
npm install -g tinyserver
```

To run:
```
tinyserver 8081
```

To access:
```
http://localhost:8081
```

#### Install `json-server`
`json-server` is a stub REST server that takes a JSON file and exposes it as a RESTful service. Here's the [`json-server` GitHub Repository](https://github.com/typicode/json-server).

To install:
```
npm install -g json-server
```

To run:
```
json-server -p 5000 ./speakers.json
```

To access:
```
http://localhost:5000/speakers
```

## Installing Ruby on Rails (RoR)
There are several ways to install Ruby on Rails:
* [Rails Installer](http://railsinstaller.org)
* [ruby-install](https://github.com/postmodern/ruby-install)
* [RVM (Ruby Version Manager)](https://rvm.io/) + the `rails` gem
* [+rbenv+](https://github.com/sstephenson/rbenv) + the `rails` gem

### Installing with RVM + the `rails` Gem
I prefer RVM because it's easy to upgrade to switch between Ruby versions. These instructions work for Mac OS X and Linux. If this doesn't work on Windows, try [Rails on Windows](#rails-on -windows).

Install RVM by visiting the [RVM site](https://rvm.io/) and following the [installation instructions](https://rvm.io/rvm/install).

Use RVM to install Ruby as follows:
* See the available versions of Ruby
```
rvm list known
```
* Install Ruby `v2.2.0` as follows:
```
rvm install 2.2.0
```
* Check the Ruby version, and you should see something like this.
```
ruby -v
ruby 2.2.0
```

After installing Ruby, you can install Rails as follows:
```
gem install rails
```

Check Rails version, and it should look like:
```
json-at-work => rails -v
Rails 4.2.1
```

And you're done.

You can easily upgrade to new versions of Ruby and Rails by:
* Installing a new version of Ruby (2.3 for example): `rvm install 2.3`
* Using the new version: `rvm use 2.3`
* Then install the `rails` as shown above.

### Rails on Windows
Ruby on Rails is difficult to setup on Windows. Try the [Rails Installer](http://railsinstaller.org) for a Windows environment. If this doesn't work, you may want to avoid this headache and use [Nitrous.io](https://www.nitrous.io/) to run your Ruby on Rails environment in the Cloud rather than on Windows.


## Installing MySQL
The Ruby on Rails examples require [MySQL](https://www.mysql.com/) because Rails insists on a database. Of course, it's possible to run a Ruby on Rails project without a database, but that takes a lot of configuration and you're definitely swimming upstream. Just give Rails what it wants, and install [MySQL](https://www.mysql.com/).

This book uses MySQL 5.6, and you can download and install it on your operating system by following the [MySQL Installation Instructions](https://dev.mysql.com/doc/refman/5.6/en/installing.html).

Or if you're on a Mac, you have a simpler installation procedure. You can use [Homebrew](http://brew.sh/) as follows:

```
brew install mysql
```

To uninstall, you would do the opposite:

```
brew uninstall mysql
```

After installing MySQL, you'll need to start the server. You'll probably want to ensure that MySQL starts automatically upon system startup. For further details on MySQL installation, startup, and configuration, please visit:
* [MySQL's Post Installation Setup and Testing](https://dev.mysql.com/doc/refman/5.6/en/postinstallation.html)
* [Joe Fallon's blog](http://blog.joefallon.net/2013/10/install-mysql-on-mac-osx-using-homebrew/)


## Installing The Java Environment
Our Java environment depends on:
* [Java SE](#installing-java-se)
* [Maven](#installing-maven)
  * [Spring](#installing-spring---add-to-the-pom)
  * [JUnit](#installing-junit---add-to-the-pom)
* [Apache Tomcat](#installing-apache-tomcat)

### Installing Java SE
We're using Java SE (Standard Edition) 7 for this book, so please visit the [Oracle Java SE 7 download site](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html).

You'll see the term "JDK" (Java Developer Kit) on that page. JDK is the old name for Java SE. Just look for "Java SE Development Kit", accept the license agreement, and do the proper downlaod for your operating system. After you've downloaded and run the installer, you'll want to setup your Java command line environment for your operating system.

Follow the instructions below for you system. Then run `java -version`, and you should see something similar to this:
```
java version "1.7.0_40"
Java(TM) SE Runtime Environment (build 1.7.0_40-b43)
Java HotSpot(TM) 64-Bit Server VM (build 24.0-b56, mixed mode)
```

#### Java Setup on Mac OS X
In `.bashrc`, do the following:
```
...

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.x.y.jdk/Contents/Home # x and y are the minor and patch versions

...

export PATH=...:${JAVA_HOME}/bin:... # JAVA_HOME to your PATH
```

#### Java Setup on Linux
In `.bashrc`, do the following:
```
...

export JAVA_HOME=/usr/java/jdk1.x.y/bin/java # x and y are the minor and patch versions

...

export PATH=...:${JAVA_HOME}/bin:... # Add JAVA_HOME to your PATH
```

Then, refresh your environment: `source ~/.bashrc`

Credit for Java setup on Linux goes to [nixCraft](http://www.cyberciti.biz/faq/linux-unix-set-java_home-path-variable/).

#### Java Setup on Windows
The Java Windows Installer usually puts the JDK in one of the following directories:
* `C:\Program Files\Java`
* `C:\Program Files (x86)\Java`

Then, do the following:
* Right-click the `My Computer` icon on your desktop and select `Properties`.
* Click the `Advanced` tab.
* Click the `Environment Variables` button.
* Under `System Variables`, click `New.``
* Enter the variable name as `JAVA_HOME`.
* Enter the variable value as the installation path for the Java Development Kit (see where the installer put the JDK directory).
* Click `OK`.
* Click `Apply Changes`.

Credit for the Java setup on Windows goes to [Robert Sindall](http://www.robertsindall.co.uk/blog/setting-java-home-variable-in-windows/).

### Installing Maven
* Be sure to install [Java SE](#installing-java-se) first.
* Visit the [Maven Download page](http://maven.apache.org/download.cgi) to download a Maven zip or tar file.
* Follow the [Maven Installation Instructions](http://maven.apache.org/download.cgi#Installation) for your system.
* Run `mvn --version`, and you should see something like this:
```
Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 09:22:22-0600)
Maven home: /Users/tmarrs/apache-maven-3.1.1
Java version: 1.7.0_40, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_40.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.10.3", arch: "x86_64", family: "mac"
```

For further reference, please see [Maven in 5 Minutes](http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

#### Installing Spring - Add to the POM
[Spring](https://spring.io/) isn't a separate install - just add it to the [Maven POM (Project Object Model)](https://maven.apache.org/pom.html):

```
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-context</artifactId>
  <version>4.1.6.RELEASE</version>
  <scope>runtime</scope>
  <exclusions>
    <exclusion>
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
    </exclusion>
  </exclusions>
</dependency>
```

We've turned off Apache Commons Logging so we can add SLF4J and LogBack to the POM.

```
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>jcl-over-slf4j</artifactId>
  <version>1.6.3</version>
</dependency>
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-api</artifactId>
  <version>1.6.3</version>
</dependency>
```

#### Installing JUnit - Add to the POM
[JUnit](http://junit.org/) isn't a separate install - just add it to the [Maven POM (Project Object Model)](https://maven.apache.org/pom.html):

```
<dependency>
	<groupId>junit</groupId>
	<artifactId>junit</artifactId>
	<version>4.12</version>
</dependency>
```

### Installing Apache Tomcat
We use [Apache Tomcat 8](https://tomcat.apache.org/tomcat-8.0-doc/introduction.html) to run our Spring-based Java application. Be sure to install [Java SE](#installing-java-se) before installing Tomcat.

#### Installing Apache Tomcat on Mac OS X
[Homebrew](http://brew.sh/) is the simplest way to install Tomcat on Mac OS X. Just do `brew install tomcat` from the command line. This gives you the latest version by default.

Start Tomcat by typing `catalina start`, and then visit `http://localhost:8080` in your browser. You should see the Tomcat startup page. Type `catalina stop` to shut down Tomcat.

The Mac Homebrew install instructions were inspired by the [`{{discovery_collection}} blog`](http://blog.bolshchikov.net/post/50277857673/installing-tomcat-on-macos-with-homebrew). You can follow the additional steps listed there to further confgure your application directory structure.

For further reference, please see:
* http://www.ntu.edu.sg/home/ehchua/programming/howto/Tomcat_HowTo.html
* http://wolfpaulus.com/jounal/mac/tomcat8/

#### Installing Apache Tomcat on Linux
* Visit the [Tomcat Download page](https://tomcat.apache.org/download-80.cgi) and download a tar file.
* Untar the tar file.
* Add `CATALINA_HOME` to `.bashrc`:
```
export CATALINA_HOME=/usr/local/tomcat/apache-tomcat-8.0.{xx}/bin

export PATH=...:${CATALINA_HOME}/bin:... # Add CATALINA_HOME to your PATH
```
* `source ~/.bashrc`

Start Tomcat as follows:
* `cd $CATALINA_HOME\bin`
* Type `startup.sh` to start Tomcat.
* Visit `http://localhost:8080` in your browser. You should see the Tomcat startup page.
* Type `shutdown.sh` to shut down Tomcat.

Credit for the Tomcat/Linux install instructions goes to [Nenyang Technical University](http://www.ntu.edu.sg/home/ehchua/programming/howto/Tomcat_HowTo.html).

#### Installing Apache Tomcat on Windows
* Visit the [Tomcat Download page](https://tomcat.apache.org/download-80.cgi) and download a zip file.
* Unzip the file.
* Add `CATALINA_HOME` as a System Variable (see the [Java Setup on Windows](#java-setup-on-windows) for an example for an example of how to set a Windows System Variable).

Start Tomcat as follows:
* `cd %CATALINA_HOME%\bin`
* Type `startup.bat` to start Tomcat.
* Visit `http://localhost:8080` in your browser. You should see the Tomcat startup page.
* Type `shutdown.bat` to shut down Tomcat.

Credit for the Tomcat/Windows install instructions goes to [Nenyang Technical University](http://www.ntu.edu.sg/home/ehchua/programming/howto/Tomcat_HowTo.html).


## Installing `jq`
[`jq`](http://stedolan.github.io/jq/) provides JSON-based command-line processing.
To install it, just follow the [Download instructions on the `cURL`] site(http://stedolan.github.io/jq/download/).

`jq` works with and depends on [`cURL`](#installing-curl)

### Installing `cURL`
[`cURL`](http://curl.haxx.se/) provides the ability to communicate over multiple protocols, including HTTP. We use this to make HTTP calls to RESTful APIs from the command line.

#### Installing `cURL` on Mac OS X
Just like with Linux, `cURL` may already be installed on your Mac. Check it as follows:

```
curl --version
```

If it's already there, then there's nothing else to do. Otherwise, you'll need to install it.
I use [Homebrew](http://brew.sh/) as my package installer on Mac OS X, so use the following command to install `cURL` on a Mac:
```
brew install curl
```

#### Installing `cURL` on Linux
Check if `cURL` is already installed by entering the following command:

```
curl --version
```

If it isn't there, then do the foollowing from the command line:

```
sudo apt-get install curl
```

This should work on Ubuntu or Debian.

#### Installing `cURL` on Windows
To install `cURL` on Windows, do the following:
* Visit the [`cURL` Download Wizard](http://curl.haxx.se/dlwiz/)
* Select the type of package: __curl executable__
* Select the Operating System: either Windows / Win32 or Win64
* Select the Flavor - either `Cygwin` (if you use [Cygwin](https://www.cygwin.com/)) or `Generic` (if you don't use [Cygwin](https://www.cygwin.com/))
* Select the Win32 Version (only if you selected Windows / Win32 above): __Unspecified__

Credit for the `cURL` Windows install instructions goes to [Stack Overflow](http://stackoverflow.com/questions/9507353/how-do-i-install-set-up-and-use-curl-on-a-windows).


## References
TOC generated by NPM [md-toc](https://www.npmjs.com/package/md-toc).
