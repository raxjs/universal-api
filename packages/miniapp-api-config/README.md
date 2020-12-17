---
group:
  title: api-config
title: config
---

# miniapp-api-config[![npm](https://img.shields.io/npm/v/miniapp-api-config.svg)](https://www.npmjs.com/package/miniapp-api-config)

## Installation

```bash
$ npm install miniapp-api-config --save-dev
```

## API List Map

### Schema:

```json
{
  "packageName1": {
    "exportedName": "originalName"
  },
  "packageName2": {
    "exportedName": "originalName"
  }
}
```

### Example

```json
{
  "Compass": {
    "onChange": "onCompassChange",
    "offChange": "offCompassChange"
  }
}
```

## Override Map

Override map will override api default input or output.

### Schema:

```json
{
  "packageName": {
    "exportedName": {
      "name": "originalName",
      "responseMap": {
        "exportedKey": "originalKey"
      },
      "errorMap": {
        "exportedKey": "originalKey"
      },
      "optionsMap": {
        "exportedKey": "originalKey"
      }
    },
    "exportedName1": {
      "name": "originalName",
      "responseMap": {
        "exportedKey": "originalKey"
      },
      "errorMap": {
        "exportedKey": "originalKey"
      },
      "optionsMap": {
        "exportedKey": "originalKey"
      }
    }
  }
}
```

### Example

```json
{
  "Compass": {
    "onChange": {
      "responseMap": {
        "direction": "direction"
      }
    }
  }
}
```
