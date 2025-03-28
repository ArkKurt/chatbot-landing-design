
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

type TestimonialProps = {
  name: string;
  position: string;
  rating: number;
  text: string;
};

const TestimonialCard = ({ name, position, rating, text }: TestimonialProps) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Star 
      key={i} 
      size={16} 
      className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
    />
  ));

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex mb-4">{stars}</div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Смирнов",
      position: "Генеральный директор, ООО "ТехноСтарт"",
      rating: 5,
      text: "Работая с ДОМСТРОЙ, я был впечатлен их вниманием к деталям и профессионализмом. Наш дом превзошел все наши ожидания по качеству и дизайну."
    },
    {
      name: "Елена Петрова",
      position: "Дизайнер интерьеров",
      rating: 5,
      text: "Сотрудничество с командой ДОМСТРОЙ было идеальным. Они точно воплотили мои идеи и предложили отличные решения для улучшения проекта."
    },
    {
      name: "Дмитрий Козлов",
      position: "Предприниматель",
      rating: 5,
      text: "Строительство дома с ДОМСТРОЙ было одним из лучших решений в моей жизни. Качество строительства, точность в сроках и прозрачность в финансах."
    },
    {
      name: "Ольга Иванова",
      position: "Руководитель отдела маркетинга",
      rating: 5,
      text: "Выражаю благодарность команде ДОМСТРОЙ за реализацию нашего проекта. Все было выполнено в срок и с высочайшим качеством."
    },
    {
      name: "Михаил Соколов",
      position: "IT-предприниматель",
      rating: 5,
      text: "Моя семья очень довольна результатом работы с ДОМСТРОЙ. Дом полностью соответствует нашим ожиданиям, а некоторые решения даже превзошли их."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят наши клиенты о работе с ДОМСТРОЙ и о реализованных проектах.
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0" />
            <CarouselNext className="absolute right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
