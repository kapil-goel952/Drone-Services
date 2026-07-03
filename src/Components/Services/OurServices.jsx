import ServiceCard from "./ServicesCard";

const services = [
    {
        id: 1,
        image: "/images/spraying.jpg",
        number: "1.",
        title: "Crop Spraying",
        description:
            "Precise and uniform spraying of pesticides and insecticides for healthier crops.",
        points: [
            "Better pest control",
            "Uniform coverage",
            "Higher yield",
        ],
    },
    {
        id: 2,
        image: "/images/fertilizer.jpg",
        number: "2.",
        title: "Fertilizer Spraying",
        description:
            "Efficient foliar application of liquid fertilizers for better nutrient absorption.",
        points: [
            "Improves crop nutrition",
            "Saves time & labor",
            "Higher productivity",
        ],
    },
    {
        id: 3,
        image: "/images/seed.jpg",
        number: "3.",
        title: "Seed Spreading",
        description:
            "Accurate seed broadcasting for paddy, wheat and other crops.",
        points: [
            "Wide area coverage",
            "Saves seed cost",
            "Improved germination",
        ],
    },
    {
        id: 4,
        image: "/images/mapping.jpg",
        number: "4.",
        title: "Mapping & Surveying",
        description:
            "High-resolution aerial mapping and surveying.",
        points: [
            "Accurate field mapping",
            "Area measurement",
            "Planning & documentation",
        ],
    },
    {
        id: 5,
        image: "/images/analytics.jpg",
        number: "5.",
        title: "Crop Health Analytics",
        description:
            "Advanced crop monitoring using drone imagery.",
        points: [
            "Early disease detection",
            "Data-driven decisions",
            "Better yield outcomes",
        ],
    }, 
    {
        id: 6,
        image: "/images/inspection.jpg",
        number: "6.",
        title: "Field Inspection",
        description:
            "Regular drone inspections to monitor crop growth and identify issues before they become major problems.",
        points: [
            "Growth monitoring",
            "Pest detection",
            "Actionable insights",
        ],
    }
];

export default function OurServices() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5">

                <p className="text-green-700 font-semibold uppercase tracking-widest text-center">
                    What We Offer
                </p>

                <h2 className="text-4xl font-bold text-center mt-2 mb-12">
                    Our Drone Services
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>

            </div>
        </section>
    );
}