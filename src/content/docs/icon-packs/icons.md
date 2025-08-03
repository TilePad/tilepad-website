---
title: Icons Format
description: Icon pack icons file format
---

The icons JSON file should be named `icons.json` and placed at the root of your icon pack. This file defines all the icons
that are available to TilePad in your pack

---

## Structure Overview

A typical `Icons` file looks like this:

```json
[
  ...
]
```
---

## Icon 

Each icon has a `name` and `path`  

### Example

```json
{
  "name": "example",
  "path": "icons/example.svg"
}
```

### Fields

| Field | Type         | Required | Description                                     |
| ----- | ------------ | -------- | ----------------------------------------------- |
| name  | string       | Yes      | Unique name of the icon to reference it         |
| icon  | string (URL) | Yes      | Path to the icon relative to the icon pack root |

---

## Complete Minimal Example

```json
[
  {
    "name": "example",
    "path": "icons/example.svg"
  },
  {
    "name": "example-b",
    "path": "icons/example-b.svg"
  }
]
```

---

