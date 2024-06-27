function terminalTransjakarta() {
  for (let busNumber = 1; busNumber <= 10; busNumber++) {
    if (busNumber <= 6) {
      console.log(`Bus transjakarta ${busNumber} beroperasi dengan baik.`);
    } else {
      console.log(`Bus transjakarta ${busNumber} sedang tidak beroperasi.`);
    }
  }
}

terminalTransjakarta();
