export function hello(name) {
    console.log(`hello ${name}`);
}

export const mclarenCar = {
    brand: "McLaren",
    model: "720S",
    year: 2023,
    specifications: {
        engine: {
        type: "V8",
        capacity: "4.0L",
        power: "710 hp",
        torque: "568 lb-ft"
        },
        performance: {
        topSpeed: "212 mph",
        acceleration: {
            "0-60 mph": "2.8 seconds",
            "0-100 mph": "5.5 seconds"
        }
        },
        dimensions: {
        length: "178.9 inches",
        width: "76.0 inches",
        height: "47.1 inches",
        wheelbase: "105.1 inches",
        curbWeight: "3153 lbs"
        },
        fuelEconomy: {
        city: "15 mpg",
        highway: "22 mpg",
        combined: "18 mpg"
        }
    },
    features: {
        interior: [
        "Leather upholstery",
        "Carbon fiber trim",
        "Dual-zone automatic climate control",
        "Touchscreen infotainment system",
        "Premium audio system"
        ],
        exterior: [
        "LED headlights",
        "Carbon fiber body panels",
        "Active aerodynamics",
        "Dihedral doors"
        ],
        safety: [
        "ABS",
        "Traction control",
        "Stability control",
        "Airbags"
        ]
    },
    price: "$299,000"
};