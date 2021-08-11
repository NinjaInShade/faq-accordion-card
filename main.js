function toggleAccordion(num, totalAccordions) {
  // Num = the accordion number, totalAccordions = how many accordions in total

  for (let i = 0; i < totalAccordions; i++) {
    document.getElementById(`accordion-${i + 1}`).classList.remove('accordion-toggled');
  }

  document.getElementById(`accordion-${num}`).classList.toggle('accordion-toggled');
}
