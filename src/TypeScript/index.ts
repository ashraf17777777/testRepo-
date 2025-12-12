interface Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;

}

const myCar: Car = {
    make: "Tesla",
    model: "Model 3",
    year: 2021,
    isElectric: true,
};
console.log(`I drive a ${myCar.year} ${myCar.make} ${myCar.model}. Is it electric? ${myCar.isElectric}`);

