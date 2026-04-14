# WXT Tailwind Shadcn-Vue Starter

![Screenshot](public/screenshot.png)

A WXT starter template preconfigured with Vue 3, Tailwind CSS, and Shadcn-Vue.

## Setup

# Install dependencies

```bash
pnpm install
```

## Development

### Chrome

```bash
pnpm dev
```

### Firefox

```bash
pnpm dev:firefox
```

WXT will open a browser window with the extension loaded automatically.

## Build for Production

### Chrome

```bash
pnpm build
```

### Firefox

```bash
pnpm build:firefox
```

Output is in `.output/`.

## Other Scripts

```bash
pnpm compile   # Type-check without emitting
pnpm format    # Format code with Prettier
```

## Notes

- Source code lives in `src/`.
- The popup entrypoint is `src/entrypoints/popup/`.

## Stack

- [WXT](https://wxt.dev) — browser extension framework
- [Vue 3](https://vuejs.org) — UI framework
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first CSS
- [Shadcn-vue](https://www.shadcn-vue.com) — accessible UI components
- [Sass](https://sass-lang.com) — CSS preprocessor support
