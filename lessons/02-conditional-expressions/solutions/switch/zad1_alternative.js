const monthDict = {
    styczen: "January",
    styczeń: "January",
    luty: "February",
    marzec: "March",
    kwiecien: "April",
    kwiecień: "April",
    maj: "May",
    //...
  };

  //
  // the below does not work because the prototype contains already the field hasOwnProperty
  //
  // const polishMonth = "hasOwnProperty"; 
  const polishMonth = "styczen"; 
  if (polishMonth in monthDict) {
    const englishMonth = monthDict[polishMonth];
    console.log(englishMonth);
  } else {
    console.log("Błąd");
  }