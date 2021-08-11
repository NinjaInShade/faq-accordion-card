function toggleAccordion(num, totalAccordions) {
  // Num = the accordion number, totalAccordions = how many accordions in total

  //   Only allows for one accordion to be active at once
  for (let i = 0; i < totalAccordions; i++) {
    // Skip past the current accordion otherwise you won't be able to close it
    if (i + 1 === num) {
      continue;
    }

    document.getElementById(`accordion-${i + 1}`).classList.remove('accordion-toggled');
  }

  document.getElementById(`accordion-${num}`).classList.toggle('accordion-toggled');
}
