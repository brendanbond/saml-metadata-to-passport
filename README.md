oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g saml-metadata-to-passport
$ saml-metadata-to-passport COMMAND
running command...
$ saml-metadata-to-passport (--version)
saml-metadata-to-passport/0.0.0 darwin-arm64 node-v16.17.0
$ saml-metadata-to-passport --help [COMMAND]
USAGE
  $ saml-metadata-to-passport COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`saml-metadata-to-passport hello PERSON`](#saml-metadata-to-passport-hello-person)
* [`saml-metadata-to-passport hello world`](#saml-metadata-to-passport-hello-world)
* [`saml-metadata-to-passport help [COMMANDS]`](#saml-metadata-to-passport-help-commands)
* [`saml-metadata-to-passport plugins`](#saml-metadata-to-passport-plugins)
* [`saml-metadata-to-passport plugins:install PLUGIN...`](#saml-metadata-to-passport-pluginsinstall-plugin)
* [`saml-metadata-to-passport plugins:inspect PLUGIN...`](#saml-metadata-to-passport-pluginsinspect-plugin)
* [`saml-metadata-to-passport plugins:install PLUGIN...`](#saml-metadata-to-passport-pluginsinstall-plugin-1)
* [`saml-metadata-to-passport plugins:link PLUGIN`](#saml-metadata-to-passport-pluginslink-plugin)
* [`saml-metadata-to-passport plugins:uninstall PLUGIN...`](#saml-metadata-to-passport-pluginsuninstall-plugin)
* [`saml-metadata-to-passport plugins:uninstall PLUGIN...`](#saml-metadata-to-passport-pluginsuninstall-plugin-1)
* [`saml-metadata-to-passport plugins:uninstall PLUGIN...`](#saml-metadata-to-passport-pluginsuninstall-plugin-2)
* [`saml-metadata-to-passport plugins update`](#saml-metadata-to-passport-plugins-update)

## `saml-metadata-to-passport hello PERSON`

Say hello

```
USAGE
  $ saml-metadata-to-passport hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/brendanbond/saml-metadata-to-passport/blob/v0.0.0/dist/commands/hello/index.ts)_

## `saml-metadata-to-passport hello world`

Say hello world

```
USAGE
  $ saml-metadata-to-passport hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ saml-metadata-to-passport hello world
  hello world! (./src/commands/hello/world.ts)
```

## `saml-metadata-to-passport help [COMMANDS]`

Display help for saml-metadata-to-passport.

```
USAGE
  $ saml-metadata-to-passport help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for saml-metadata-to-passport.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `saml-metadata-to-passport plugins`

List installed plugins.

```
USAGE
  $ saml-metadata-to-passport plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ saml-metadata-to-passport plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.4/src/commands/plugins/index.ts)_

## `saml-metadata-to-passport plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ saml-metadata-to-passport plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ saml-metadata-to-passport plugins add

EXAMPLES
  $ saml-metadata-to-passport plugins:install myplugin 

  $ saml-metadata-to-passport plugins:install https://github.com/someuser/someplugin

  $ saml-metadata-to-passport plugins:install someuser/someplugin
```

## `saml-metadata-to-passport plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ saml-metadata-to-passport plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ saml-metadata-to-passport plugins:inspect myplugin
```

## `saml-metadata-to-passport plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ saml-metadata-to-passport plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ saml-metadata-to-passport plugins add

EXAMPLES
  $ saml-metadata-to-passport plugins:install myplugin 

  $ saml-metadata-to-passport plugins:install https://github.com/someuser/someplugin

  $ saml-metadata-to-passport plugins:install someuser/someplugin
```

## `saml-metadata-to-passport plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ saml-metadata-to-passport plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ saml-metadata-to-passport plugins:link myplugin
```

## `saml-metadata-to-passport plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ saml-metadata-to-passport plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ saml-metadata-to-passport plugins unlink
  $ saml-metadata-to-passport plugins remove
```

## `saml-metadata-to-passport plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ saml-metadata-to-passport plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ saml-metadata-to-passport plugins unlink
  $ saml-metadata-to-passport plugins remove
```

## `saml-metadata-to-passport plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ saml-metadata-to-passport plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ saml-metadata-to-passport plugins unlink
  $ saml-metadata-to-passport plugins remove
```

## `saml-metadata-to-passport plugins update`

Update installed plugins.

```
USAGE
  $ saml-metadata-to-passport plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
