<!-- Import workspace-level CLAUDE.md configuration -->
<!-- See /home/lab/workspace/.claude/CLAUDE.md for complete rules -->

# Project-Specific Configuration

This file extends workspace-level configuration with project-specific rules.

## Project Context

JupyterLab extension for rendering Draw.io diagrams directly in the notebook interface. The extension provides read-only viewing of `.drawio` files within JupyterLab - a viewer widget without editing capabilities.

**Technology Stack**:

- TypeScript/JavaScript frontend extension
- Python server extension (`jupyter_server>=2.4.0`)
- JupyterLab 4.0.0+ compatible
- Build system: hatchling with hatch-jupyter-builder

**Package Names**:

- npm: `jupyterlab_drawio_render_extension`
- PyPI: `jupyterlab-drawio-render-extension` (hyphenated)

**Build Commands**:

- Use `make install` for building and installing the extension
- Never use `pip install` directly without building first
- Always commit both `package.json` and `package-lock.json`
