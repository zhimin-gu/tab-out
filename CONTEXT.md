# Project Context

This document contains the core architectural and domain knowledge for Tab Out.
As you learn new domain concepts or architectural decisions, document them here.

## Overview
Tab Out is a pure Chrome extension that replaces the new tab page with a clean dashboard of open tabs, grouped by domain.

## Key Facts
- 100% local, no server, no Node.js, no npm.
- Saved tabs are stored in `chrome.storage.local`.
- No data is sent to external services.
