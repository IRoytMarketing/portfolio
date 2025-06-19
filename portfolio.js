document.addEventListener('DOMContentLoaded', () => {
  // Select all main sections you want to make expandable
  const sectionSelectors = [
    "#about",
    "#marketing-projects",
    "#data-projects",
    "#project-management",
    "#ux-projects",
    "#other-experience",
    "#hobbies"
  ];

  sectionSelectors.forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
      // Wrap the section's children (except h2) in a div
      const children = Array.from(section.children);
      const h2 = section.querySelector('h2');
      const contentDiv = document.createElement('div');
      contentDiv.className = 'expandable-content';

      children.forEach(child => {
        if (child !== h2) contentDiv.appendChild(child);
      });

      // Remove moved children from section
      children.forEach(child => {
        if (child !== h2) section.removeChild(child);
      });

      // Create the toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.setAttribute('type', 'button');
      toggleBtn.className = 'expandable-toggle';
      toggleBtn.innerHTML = `<span class="triangle">&#9654;</span> ${h2.textContent}`;

      // Insert the button and contentDiv
      section.insertBefore(toggleBtn, h2);
      section.removeChild(h2); // Remove the original h2
      section.insertBefore(h2, contentDiv); // Put h2 as first in contentDiv
      section.appendChild(contentDiv);

      // Start collapsed except for 'about'
      let expanded = selector === '#about';
      contentDiv.style.display = expanded ? '' : 'none';
      toggleBtn.querySelector('.triangle').style.transform = expanded ? 'rotate(90deg)' : 'rotate(0deg)';

      toggleBtn.addEventListener('click', () => {
        expanded = !expanded;
        contentDiv.style.display = expanded ? '' : 'none';
        toggleBtn.querySelector('.triangle').style.transform = expanded ? 'rotate(90deg)' : 'rotate(0deg)';
      });
    }
  });
});
