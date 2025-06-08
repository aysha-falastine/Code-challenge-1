function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const rideFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + rideFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${rideFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);
}

// Prompt 
const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(distanceInput);
calculateBodaFare(distanceInKm);
