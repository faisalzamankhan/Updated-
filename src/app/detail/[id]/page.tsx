import { ScrollAnimation } from "@/components/scroll-animations";
import { firms } from "@/lib/data";

const ExpDetails = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <section>
        {firms.map(
          ({ id, name, companyLogo, description, color, detail }, index) => (
            <section id={id} key={id}>
              <ScrollAnimation
                key={name}
                delay={index * 0.1}
                className="skill-card p-12 rounded-xl glass-effect    hover:shadow-2xl"
              >
                <div className={`text-5xl mb-4 ${color} `}>
                  <div className="flex justify-center items-center ">
                    <img
                      src={companyLogo}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
                <div></div>
                {/* <h3 className="text-xl font-semibold mb-2">{name}</h3> */}
                <p className="text-gray-400 text-sm">{description}</p>
                <ul className="list-disc">
                  {detail.split(".").map((item, idx) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </ScrollAnimation>
            </section>
          )
        )}
      </section>
    </div>
  );
};

export default ExpDetails;
