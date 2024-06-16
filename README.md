## Infinity Scroll

This code implements an infinite scroll effect for a horizontal carousel of images. 

### Functionality

* Images are displayed in a horizontally scrolling container.
* The carousel appears seamless, looping back to the beginning when reaching the end.
* Scrolling behavior adapts to different screen sizes:
    * For large screens (greater than 760px wide), the carousel uses infinite scroll with smooth transitions.
    * For smaller screens, the carousel uses native browser scrolling.

### Code Structure

The code is divided into three parts:

1. **HTML (`index.html`):** Defines the basic structure of the page, including the container (`wrapper`) and individual image elements (`item`).
2. **CSS (`style.css`):** Styles the visual appearance of the elements, including positioning, sizing, and background colors.
3. **JavaScript (`script.js`):** Handles the core logic for infinite scrolling, cloning elements, and smooth transitions.

### Key Features in JavaScript

* **Image Loading:** Sets the background image for each `.imgDiv` element using `backgroundImage` property.
* **Cloning Elements:** Creates duplicate copies of each image item and appends them to the slider for seamless looping.
* **Calculating Dimensions:** Calculates the total width of all clones (`clonesWidth`) and the overall width of the slider (`sliderWidth`) for scroll tracking.
* **Infinite Scroll Loop:** The `scrollUpdate` function continuously monitors the scroll position and adjusts the slider's `translateX` property to create the illusion of infinite scrolling.
* **Responsive Scrolling:** Checks for screen size and enables/disables overflow behavior for the wrapper element based on viewport width.

###  Getting Started

1. Save the HTML, CSS, and JavaScript files in the same directory.
2. Replace the placeholder image references in `script.js` with the actual paths to your images (e.g., `images/1.jpg`, `images/2.jpg`).
3. Open the HTML file in a web browser to view the infinite scroll carousel.

###  Customization

* You can adjust the number of initial image items in the HTML.
* Modify the styling in `style.css` to change the appearance of the carousel.
* The initial scroll position and grayscale filter for images can be adjusted in `script.js`.

**Note:** Adding a large number of images might cause performance issues due to image loading. 
