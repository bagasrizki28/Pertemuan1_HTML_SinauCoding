function terminalTransjakarta() {
  for (let busNumber = 1; busNumber <= 10; busNumber++) {
    if (busNumber <= 6) {
      console.log(`Bus transjakarta ${busNumber} beroperasi dengan baik.`);
    } else if (busNumber == 7) {
      console.log(`Bus transjakarta ${busNumber} sedang tidak beroperasi.`);
    } else if (busNumber == 8) {
      console.log(`Bus transjakarta ${busNumber} sedang Lembur.`);
    } else {
      console.log(`Bus transjakarta ${busNumber} sedang tidak beroperasi.`);
    }
  }
}

terminalTransjakarta();
