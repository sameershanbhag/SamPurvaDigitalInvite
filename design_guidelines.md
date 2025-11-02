# Design Guidelines: Digital Indian Engagement Invitation for Sameer & Purva

## Design Approach

**Selected Approach:** Reference-Based with Indian Wedding Aesthetic  
**Primary References:** Premium Indian wedding invitation websites (WedMeGood, Shaadi Bazaar), Ethnic luxury e-commerce platforms  
**Cultural Foundation:** Traditional Indian wedding design language with modern interactive web elements

## Core Design Principles

1. **Cultural Authenticity:** Embrace traditional Indian motifs (paisley, mandala, lotus, marigold garlands, Ganesh iconography) throughout
2. **Celebratory Elegance:** Rich ornamentation balanced with breathing room for content clarity
3. **Emotional Connection:** Create warmth and anticipation through thoughtful details and progressive reveals
4. **Interactive Storytelling:** Guide users through the invitation experience with meaningful interactions

## Typography System

**Primary Font:** 'Playfair Display' (serif) - for names, headings, and ceremonial text  
**Secondary Font:** 'Cormorant Garamond' - for subheadings and decorative elements  
**Body Font:** 'Lato' or 'Open Sans' - for readable content, details, and form labels

**Hierarchy:**
- Couple Names: Display size (text-5xl to text-7xl), serif, elegant letter-spacing
- Section Titles: Large (text-3xl to text-4xl), serif with decorative flourishes
- Event Details: Medium (text-xl to text-2xl), balanced weight
- Body Content: Base to lg (text-base to text-lg), clean and legible
- Form Labels: Small to base (text-sm to text-base), clear hierarchy

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm  
**Common Patterns:**
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-6 to gap-12
- Element margins: mb-4, mb-8, mb-12 for vertical flow
- Container max-width: max-w-6xl for content sections

**Grid Strategy:**
- Hero: Full-width with centered content overlay
- Features/Details: 1-column mobile, 2-column tablet, 3-column desktop for event details
- Gallery: Masonry or grid layout (2-3-4 columns responsive)
- Form: Single column with decorative side panel on desktop

## Page Structure & Components

### 1. **Entrance Animation & Hero Section**
- Full-viewport initial view with ornate border frame
- Animated reveal: Ganesh blessing icon fades in first, followed by couple names with flourish animation
- Elegant typographic treatment with Sanskrit-inspired decorative elements
- Subtle background: Traditional Indian pattern (damask, paisley) with overlay treatment
- Scroll indicator with lotus petal icon

### 2. **Invitation Card Reveal**
- Interactive card flip/unfold animation triggered on scroll
- Ornate border design mimicking physical invitation cards
- Central content area with:
  - "Together with their families" traditional wording
  - Couple names prominently displayed
  - Decorative separator (mandala or floral motif)
  - Event type declaration
- Decorative corner elements (traditional Indian invitation corners)

### 3. **Event Details Section**
- Three-column layout (desktop): Date | Time | Venue
- Each column with decorative icon (calendar/clock/location with Indian styling)
- Ornamental dividers between columns
- Venue details with embedded map integration
- Dress code suggestion with traditional attire icons
- Decorative marigold garland graphics as section borders

### 4. **Countdown Timer**
- Prominent placement with decorative frame
- Four segments: Days | Hours | Minutes | Seconds
- Each segment styled as ornate tile with traditional motifs
- Animated number transitions
- "Until we celebrate together" messaging

### 5. **Photo Gallery Section**
- Masonry grid layout (2-col mobile, 3-col tablet, 4-col desktop)
- Ornate frame overlays on hover
- Lightbox functionality for full-size viewing
- Placeholder frames with decorative borders ready for couple photos
- Section title with floral decorative elements

### 6. **RSVP Form**
- Two-column desktop layout: Form + Decorative illustration/pattern
- Form fields:
  - Guest name(s) with Indian naming consideration
  - Email and phone
  - Attendance confirmation (radio buttons styled as decorative choices)
  - Number of guests (dropdown with traditional styling)
  - Dietary preferences (checkboxes with icons)
  - Special message textarea
- Submit button with traditional design (ornate, raised effect)
- Success state with celebratory animation

### 7. **Cultural Elements Integration**
- Music toggle button (fixed position, decorative icon)
- Ganesh blessing icon/illustration near top
- Scattered floral elements (marigolds, lotus) as decorative accents
- Border treatments throughout using traditional patterns
- Subtle animations on decorative elements (gentle float/glow)

### 8. **Footer Section**
- Centered layout with decorative top border
- "With love and blessings" message
- Family names acknowledgment
- Social sharing options styled as traditional icons
- Copyright/credits in subtle sizing

## Component Design Specifications

**Buttons:**
- Primary CTA: Raised appearance with subtle shadow, ornate styling
- When on images: Background blur effect (backdrop-blur-md), semi-transparent background
- Icon integration with traditional symbols
- No hover interactions on hero buttons (component handles states)

**Cards/Containers:**
- Decorative borders with traditional Indian patterns
- Subtle shadows for depth (shadow-lg to shadow-xl)
- Border radius: rounded-lg for modern touch while maintaining elegance
- Ornamental corner elements where appropriate

**Icons:**
- Use Font Awesome for standard icons (calendar, location, music, etc.)
- Style with traditional treatment (ornate variants where possible)
- Custom decorative elements via HTML entities or simple geometric shapes

**Forms:**
- Input fields with decorative borders (not full traditional but hint of elegance)
- Radio/checkbox styled with custom appearance matching theme
- Labels with decorative bullet points or small floral icons
- Validation states with culturally appropriate messaging

## Animation Strategy (Minimal & Purposeful)

**Use animations only for:**
1. Entrance sequence: One-time hero reveal with names and blessing
2. Invitation card: Interactive reveal on scroll/interaction
3. Countdown: Number transitions
4. Gallery: Subtle hover scale effect
5. Music toggle: Gentle pulse to indicate state

**Avoid:** Excessive scroll animations, continuous background movements, distracting parallax effects

## Images & Visual Assets

**Hero Section:**
- Large hero background image: Traditional Indian engagement setup or elegant cultural pattern
- Option: Couple photo with ornate frame overlay and blur treatment behind text
- Overlay gradient to ensure text readability

**Gallery Section:**
- Placeholder frames for 6-8 couple photos
- Each image should have ornate border treatment on display
- Lightbox view with decorative frame

**Decorative Elements:**
- Ganesh illustration (header blessing)
- Marigold garland graphics (section dividers)
- Paisley/mandala patterns (backgrounds, borders)
- Lotus icons (scroll indicators, decorative accents)

**Indian Attire Static Elements:**
- Illustrated or icon representations of traditional attire (if showing dress code)
- Cultural symbols throughout (diya lamps, rangoli patterns, etc.)

## Accessibility & Usability

- Maintain readable contrast ratios despite decorative elements
- Ensure form inputs are clearly labeled and accessible
- Music toggle with clear on/off states
- Keyboard navigation support for interactive elements
- Alt text for all decorative and functional images
- Mobile-first responsive approach with touch-friendly targets

## Responsive Behavior

**Mobile (base):**
- Single column layouts throughout
- Stacked event details
- Gallery: 2-column grid
- Simplified decorative elements to reduce visual clutter
- Padding: py-12 to py-16

**Tablet (md:):**
- Event details: 2-column
- Gallery: 3-column
- RSVP form remains single column with wider container

**Desktop (lg:):**
- Full multi-column layouts as specified
- Enhanced decorative elements
- Wider spacing and breathing room
- Gallery: 4-column masonry

---

**Final Note:** This design celebrates the cultural richness of Indian engagement traditions while providing a modern, interactive digital experience. Every element should feel intentional, elegant, and celebratory—creating anticipation and joy for Sameer and Purva's special day.