
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  image: string;
  title: string;
  location: string;
  area: string;
  description: string;
};

const ProjectCard = ({ image, title, location, area, description }: ProjectCardProps) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-serif font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="flex justify-between text-sm text-gray-600 mb-3">
        <span>{location}</span>
        <span>{area}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="w-full">
        Подробнее <ArrowRight size={14} className="ml-2" />
      </Button>
    </div>
  </div>
);

const Projects = () => {
  const modernProjects = [
    {
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1800",
      title: "Вилла \"Модерн\"",
      location: "Курортный район",
      area: "450 м²",
      description: "Современный коттедж с панорамными окнами и открытой планировкой."
    },
    {
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1800",
      title: "Резиденция \"Горизонт\"",
      location: "Приморский район",
      area: "320 м²",
      description: "Дом в стиле минимализм с террасой и видом на залив."
    },
    {
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=1800",
      title: "Особняк \"Бриз\"",
      location: "Выборгский район",
      area: "520 м²",
      description: "Эксклюзивный проект с бассейном и зоной отдыха."
    }
  ];

  const classicProjects = [
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1800",
      title: "Усадьба \"Классика\"",
      location: "Павловск",
      area: "580 м²",
      description: "Элегантный особняк в классическом стиле с колоннами."
    },
    {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1800",
      title: "Вилла \"Гармония\"",
      location: "Пушкин",
      area: "420 м²",
      description: "Традиционный дизайн с современными технологиями."
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1800",
      title: "Особняк \"Престиж\"",
      location: "Стрельна",
      area: "600 м²",
      description: "Роскошный дом с элементами неоклассицизма."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Наши проекты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучите портфолио наших реализованных проектов — 
            от современных вилл до классических особняков.
          </p>
        </div>

        <Tabs defaultValue="modern" className="w-full">
          <TabsList className="mx-auto mb-8 flex justify-center">
            <TabsTrigger value="modern" className="text-lg px-6">Современные</TabsTrigger>
            <TabsTrigger value="classic" className="text-lg px-6">Классические</TabsTrigger>
          </TabsList>
          <TabsContent value="modern">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modernProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="classic">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classicProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Смотреть все проекты <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
