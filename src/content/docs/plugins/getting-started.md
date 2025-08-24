---
title: Getting Started
description: Getting Started with TilePad Plugin Development
---

## Prerequisites

Make sure you have Rust installed and `cargo` available in your terminal.

Install the TilePad CLI:

```sh
cargo install tilepad-cli
```

## Create a Plugin

Scaffold out a new plugin with:

```sh
tilepad create
```

TilePad provides templates and libraries for `Javascript`, `TypeScript`, and `Rust` however any language that can compile
to a native binary or that can be run by NodeJS can be used with TilePad, provided that you manually implement
the TilePad websocket protocol.

## Link Your Plugin to TilePad

To speed up local development and prevent yourself from having to continuously rebuild and install your plugin. You can use the
following command from within your plugin folder to link your development plugin folder with TilePad.

```sh
tilepad link
```

## Reload Plugins Without Restarting

If you make changes to your plugin manifest and want TilePad to pick them up without restarting the whole app you can
use the following command:

```sh
tilepad reload-plugins
```

:::note
You must have **Developer Mode** enabled within the TilePad settings to trigger this command
:::

## Bundle for Distribution

When your plugin is ready for distribution. Ensure anything that should be included within your plugin is present within the `.tilepadPlugin` folder (This includes your build artifacts, the plugin templates have this directory structure setup for you by default)

Run the following command to bundle your plugin into a `.tilepadPlugin` file:

```sh
tilepad bundle
```
