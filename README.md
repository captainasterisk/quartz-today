# @captainasterisk/quartz-today

A Quartz component plugin that displays the user's current date (e.g., `TODAY, 23 JUN 2026`) formatted dynamically in the browser.

## Features

- 📅 **Dynamic Client Date**: Renders the current date according to the visitor's local browser timezone.
- ⚡ **Quartz SPA Compatible**: Listens for Quartz SPA page navigation (`nav` event) to ensure seamless updates across page transitions.
- 🎨 **SCSS Styled**: Clean badge styling matching Quartz's default design tokens.
- ⚙️ **Configurable**: Easily change prefix, separator, locale, and uppercase transformation.

## Installation

Add this plugin to your Quartz site repository:

```bash
npx quartz plugin add github:captainasterisk/quartz-today
```

Or via npm:

```bash
npm install github:captainasterisk/quartz-today
```

## Usage

In your `quartz.config.yaml`:

```yaml
plugins:
  - source: github:captainasterisk/quartz-today
    enabled: true
    options:
      prefix: "TODAY"
      separator: ", "
      locale: "en-US"
      uppercase: true
    layout:
      position: left
      priority: 35
```

Or when importing programmatically:

```typescript
import { Today } from "@captainasterisk/quartz-today"

// In layout components configuration:
left: [
  Today({
    prefix: "TODAY",
    separator: ", ",
    uppercase: true,
  }),
]
```

## Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `prefix` | `string` | `"TODAY"` | Text prefix shown before the date. |
| `separator` | `string` | `", "` | Separator string between prefix and date. |
| `locale` | `string` | `"en-US"` | Locale format used for month names. |
| `uppercase` | `boolean` | `true` | Whether to uppercase month and formatted string. |
| `className` | `string` | `""` | Additional CSS class for custom styling. |

## Development

```bash
# Install dependencies
npm install

# Typecheck and build component
npm run build
```

## License

[MIT](./LICENSE)
