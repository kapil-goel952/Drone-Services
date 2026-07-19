import ServiceCard from "./ServicesCard";

const services = [
    {
        id: 1,
        image: "https://mnd-assets.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_746/wnazdbhzvweeyhn5qpbc",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHk7o_IH-w-QJpsC-wLNFP0ngNvijgjNhC4z8UT1C7iSrJ-MAC6x95KQ&s=10",
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
        image: "https://thumbs.dreamstime.com/b/smart-agriculture-drone-hovering-over-field-seedlings-spreading-fertilizer-seeds-smart-agriculture-drone-hovering-over-358589054.jpg",
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
        image: "https://static.euronews.com/articles/stories/06/35/06/34/1440x810_cmsv2_3ad468db-0f7f-5086-a023-968f13f2c569-6350634.jpg",
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
        image: "https://www.xboom.in/wp-content/uploads/2024/04/SMB320-Agricultural-drone.jpg",
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
        image: "https://ik.imagekit.io/equinoxsdrones/blog/img/visual-drone-inspection-across-different-industries/CROP_DAMAGE__EQUINOX_S_DRONES_pUGSBMbmP.jpg",
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
// afasdfsafasfsdfasdfasdfhsdalfhadfs