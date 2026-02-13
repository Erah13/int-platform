
# GitHub Copilot Instructions for Figma usage                                   

## Project Context
This project is used to create a marketing page to promote an integration platform product

## Code Generation Rules
### 1. Always create a component where possible
- Use MUI components instead of native HTML elements - Store components always  in a separate folder
- Example: `Button`, `TextField`, `Box`, `Container`, `Typography`

## Styling rules
- Create a separate style file for colors
- Create a separate style file for fonts
- Create a separate style file for spacing, margins and paddings
- Always use increments of 8px for styling

### 3. Theme Integration
- Use theme spacing: `theme.spacing(2)` not hardcoded pixels
- Use theme colors: `theme.palette.primary.main`
- Access theme with: `import { useTheme } from '@mui/material/styles'`

### 4. Responsive Design
- Mobile-first approach - The page must follow WCAG 2.1 AA accessibility rules

### 5. File Organization
- Components go in: `src/components/[ComponentName].tsx` - Styles go in: `src/theme/[StyleName].tsx`
- One style per file
- One component per file
- Export as default

### 6. Figma Design Extraction
When fetching from Figma MCP: 
1. Extract all design tokens (colors, spacing, typography)
2. Map Figma components to closest MUI equivalents
3. Preserve exact spacing and visual hierarchy
4. Extract text content and alt text for images

### 7. Code Quality
- Use functional components with hooks
- Prefer composition over inheritance 
- Keep components focused and single-purpose
- Add comments for complex logic

### 8. Styling Approach
- Use TailwindCSS for styling

