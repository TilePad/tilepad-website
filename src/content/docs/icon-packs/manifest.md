---
title: Manifest Format
description: Icon Pack manifest file format
---

The icon pack manifest JSON file defines the details of your icon pack. This file should be named manifest.json and placed 
at the root of your icon pack.

---

## Structure Overview

A typical `IconsManifest` file looks like this:

```json
{
  "icons": { ... }
}
```

Each section is described in detail below.

---

## Icon Pack Information (`icons`)

Defines basic metadata about the icon pack.

### Example

```json
{
  "id": "com.example.myiconpack",
  "name": "My Icon Pack",
  "version": "1.0.0",
  "authors": ["Your Name"],
  "description": "What this icon pack adds"
}
```

### Fields

| Field       | Type         | Required | Description                                                                  |
| ----------- | ------------ | -------- | ---------------------------------------------------------------------------- |
| id          | string       | Yes      | Unique icon pack ID in reverse domain format (e.g. `com.example.myiconpack`) |
| name        | string       | Yes      | Human-readable name                                                          |
| version     | string       | Yes      | Icon pack version                                                            |
| authors     | string[]     | No       | List of author names                                                         |
| description | string       | No       | Brief explanation of the icon pack                                           |
| icon        | string (URL) | No       | Path to the icon to use                                                      |

---

## Complete Minimal Example

```json
{
  "icons": {
    "id": "com.example.hello",
    "name": "Hello Icon Pack",
    "version": "1.0.0",
    "authors": ["Dev Name"]
  }
}
```

---

