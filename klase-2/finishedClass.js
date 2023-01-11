class Person {
  constructor(name, lName, yearOfBirth) {
    this.name = name;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
    this.years = this.calculateYears(yearOfBirth);
  }

  calculateYears(birthYear) {
    return 2022 - birthYear;
  }
}

const newPerson = new Person("Elmaz", "Niksic", 1996);

console.log(newPerson);

class AdditionalInfo extends Person {
  statesArr = [
    {
      state: "USA",
      cId: "+1",
    },
    {
      state: "UK",
      cId: "+44",
    },
    {
      state: "Mexico",
      cId: "+52",
    },
    {
      state: "India",
      cId: "+91",
    },
    {
      state: "China",
      cId: "+86",
    },
    {
      state: "Serbia",
      cId: "+381",
    },
  ];

  constructor(street, city, state, phoneNum) {
    super(newPerson.name, newPerson.lName, newPerson.yearOfBirth);
    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNum = this.phoneNumberHandler(state, phoneNum);
  }

  phoneNumberHandler(state, phoneNum) {
    this.findState = this.statesArr.find((s) => s.state === state);

    return phoneNum.replace(phoneNum[0], this.findState.cId);
  }

  beautifyData() {
    this.personData = {
      name: newPerson.name,
      lName: newPerson.lName,
      yearOfBirth: newPerson.yearOfBirth,
      years: newPerson.calculateYears(newPerson.yearOfBirth),
      street: this.street,
      city: this.city,
      state: this.state,
      phoneNumber: this.phoneNum,
    };

    console.log(this.personData);
  }
}

const additional = new AdditionalInfo(
  "Vojkovacka",
  "Novi Pazar",
  "Serbia",
  "06287867434"
);

additional.beautifyData();
